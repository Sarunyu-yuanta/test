/**
 * Post-process compiled CSS so the library plays nicely with host cascade:
 *
 *   1. Strip inner @layer wrappers (theme/base/components/utilities).
 *      Keeps older Tailwind v3 PostCSS pipelines happy — they choke on
 *      `@layer base` etc. when no `@tailwind base` directive precedes them.
 *
 *   2. Wrap everything in a single `@layer system-one { ... }`.
 *      Without this, every rule the library ships is unlayered — and
 *      unlayered styles beat every rule that sits inside a named @layer
 *      (including Tailwind v4's host-side `@layer utilities`). A host-written
 *      `p-6` / `gap-4` / `max-w-5xl` would silently lose to the library's
 *      copies of the same utilities.
 *
 *      Named layer = lowest cascade priority by default, so host's unlayered
 *      styles and later-declared named layers (e.g. host Tailwind utilities)
 *      win. This requires the host to import the library CSS *before* their
 *      own Tailwind / utility CSS — see README / AGENTS.md.
 *
 * @import rules must stay at the top of the file (before any other at-rule,
 * per CSS spec), so leading `@import` statements and banner comments are
 * extracted and re-emitted above the wrapper. The extractor walks the CSS
 * character-by-character and respects string quotes so @import URLs
 * containing semicolons (e.g. `wght@400;500;600`) are handled correctly.
 */

import { readFileSync, writeFileSync } from "fs";

const LAYER_NAME = "system-one";
const file = process.argv[2] || "dist/style.css";
const css = readFileSync(file, "utf8");

/* ---------- step 1: strip inner @layer wrappers ---------- */

let stripped = "";
{
  let i = 0;
  while (i < css.length) {
    if (css.slice(i, i + 7) === "@layer ") {
      const semi = css.indexOf(";", i);
      const brace = css.indexOf("{", i);

      // Ordering declaration (semicolon before any brace) — strip entirely
      if (semi !== -1 && (brace === -1 || semi < brace)) {
        i = semi + 1;
        continue;
      }

      // Block declaration — unwrap contents
      if (brace !== -1) {
        let depth = 1;
        let j = brace + 1;
        while (j < css.length && depth > 0) {
          if (css[j] === "{") depth++;
          else if (css[j] === "}") depth--;
          if (depth > 0) stripped += css[j];
          j++;
        }
        i = j;
        continue;
      }
    }
    stripped += css[i];
    i++;
  }
}

/* ---------- step 2: extract leading banner comments + @imports ---------- */

function splitTop(source) {
  const N = source.length;
  let pos = 0;
  const isWs = (ch) => ch === " " || ch === "\t" || ch === "\n" || ch === "\r";

  outer: while (pos < N) {
    // skip whitespace
    while (pos < N && isWs(source[pos])) pos++;

    // /* ... */ comment
    if (source.slice(pos, pos + 2) === "/*") {
      const end = source.indexOf("*/", pos + 2);
      if (end === -1) break;
      pos = end + 2;
      continue;
    }

    // @import ... ;  (walks past semicolons that live inside "..." or '...')
    if (source.slice(pos, pos + 7) === "@import") {
      let j = pos + 7;
      let quote = null;
      while (j < N) {
        const ch = source[j];
        if (quote) {
          if (ch === "\\") { j += 2; continue; }
          if (ch === quote) quote = null;
        } else if (ch === '"' || ch === "'") {
          quote = ch;
        } else if (ch === ";") {
          pos = j + 1;
          continue outer;
        }
        j++;
      }
      // unterminated @import — bail
      break;
    }

    // anything else: we're done peeling the top
    break;
  }

  return { top: source.slice(0, pos), body: source.slice(pos) };
}

const { top, body } = splitTop(stripped);

/* ---------- step 3: wrap body in the named layer ---------- */

const output = `${top}@layer ${LAYER_NAME}{${body}}`;

writeFileSync(file, output);
console.log(
  `Stripped inner @layer wrappers and wrapped body in @layer ${LAYER_NAME} in ${file}`,
);
