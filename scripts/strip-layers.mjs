/**
 * Post-process compiled CSS to remove @layer wrappers.
 *
 * Tailwind v4 CLI outputs CSS with `@layer base { … }`, `@layer utilities { … }`,
 * etc.  These cause two problems for consumers:
 *
 *   1. Tailwind v3 PostCSS plugin (used by Lovable, older Next.js setups) throws
 *      an error when it sees `@layer base` without a matching `@tailwind base`
 *      directive — even when the CSS belongs to a third-party library.
 *
 *   2. When the host also uses Tailwind v4, the library's `@layer system-one`
 *      ends up at a LOWER cascade priority than the host's `@layer base`
 *      preflight, which resets `button { background: transparent; border: 0 }`.
 *      Primary buttons lose their background colour.
 *
 * Fix: strip every `@layer` wrapper.  The inner rules become UNLAYERED — they
 * are emitted in the same source order as before (properties → theme → base →
 * utilities → components) but without any `@layer` declaration.  Per the CSS
 * cascade spec, unlayered rules ALWAYS outrank layered rules, regardless of
 * import order.  This means:
 *
 *   • Library component styles beat the host's Tailwind preflight. ✓
 *   • Library design tokens beat Lovable/shadcn's `@layer base` variables. ✓
 *   • No `@layer` keyword in the output → Tailwind v3 PostCSS is happy. ✓
 *   • Import order doesn't matter for component styles. ✓
 *
 * Token customisation: host unlayered overrides placed AFTER the library import
 * win by source order.  Always import the library BEFORE your own token
 * overrides so they take effect.
 *
 * Scanning is string- and comment-aware: `@layer` tokens or braces inside
 * `content: "..."` or `/* … *\/` won't confuse the parser, and @import URLs
 * containing semicolons (e.g. `wght@400;500;600`) parse correctly.
 *
 * Running the script twice is a no-op — there are no @layer wrappers to strip
 * on the second run.
 */

import { readFileSync, writeFileSync } from "fs";

const file = process.argv[2] || "dist/style.css";

let css;
try {
  css = readFileSync(file, "utf8");
} catch (err) {
  if (err.code === "ENOENT") {
    console.error(
      `strip-layers: ${file} not found. Run the CSS build first (e.g. \`npm run build:lib\`).`,
    );
    process.exit(1);
  }
  throw err;
}

/* ---------- helpers ---------- */

const isIdent = (c) => c !== undefined && /[A-Za-z0-9_-]/.test(c);

const isLiteralStart = (src, idx) => {
  const ch = src[idx];
  return ch === '"' || ch === "'" || src.slice(idx, idx + 2) === "/*";
};

function skipLiteral(src, idx) {
  const ch = src[idx];
  if (ch === '"' || ch === "'") {
    let j = idx + 1;
    while (j < src.length) {
      if (src[j] === "\\") { j += 2; continue; }
      if (src[j] === ch) return j + 1;
      j++;
    }
    return src.length;
  }
  if (src.slice(idx, idx + 2) === "/*") {
    const end = src.indexOf("*/", idx + 2);
    return end === -1 ? src.length : end + 2;
  }
  return idx + 1;
}

/* ---------- strip @layer wrappers ---------- */

let result = "";
let i = 0;
const N = css.length;

while (i < N) {
  // copy strings/comments verbatim so tokens inside them don't get matched
  if (isLiteralStart(css, i)) {
    const end = skipLiteral(css, i);
    result += css.slice(i, end);
    i = end;
    continue;
  }

  // match a real @layer token (not a longer ident like `@layerFoo`)
  if (css.slice(i, i + 6) === "@layer" && !isIdent(css[i + 6])) {
    let j = i + 6;
    let terminator = null;
    while (j < N) {
      if (isLiteralStart(css, j)) { j = skipLiteral(css, j); continue; }
      const c = css[j];
      if (c === ";") { terminator = ";"; break; }
      if (c === "{") { terminator = "{"; break; }
      j++;
    }

    // ordering declaration (`@layer a, b, c;`) — strip entirely
    if (terminator === ";") {
      i = j + 1;
      continue;
    }

    // block form — strip wrapper, emit inner content flat
    if (terminator === "{") {
      let depth = 1;
      let k = j + 1;
      while (k < N && depth > 0) {
        if (isLiteralStart(css, k)) {
          const end = skipLiteral(css, k);
          result += css.slice(k, end);
          k = end;
          continue;
        }
        const c = css[k];
        if (c === "{") { depth++; result += c; k++; continue; }
        if (c === "}") {
          depth--;
          if (depth === 0) { k++; break; }
          result += c; k++; continue;
        }
        result += c;
        k++;
      }
      i = k;
      continue;
    }

    // no terminator found — malformed; emit remainder and bail
    result += css.slice(i);
    break;
  }

  result += css[i];
  i++;
}

// Hoist @import statements to the top — CSS spec requires @import before all
// other statements. Tailwind CLI inlines fonts.css and the @import ends up
// mid-file, which PostCSS (used by Lovable, Figma Make) rejects with
// "@import must precede all other statements".
function hoistImports(css) {
  const imports = [];
  let rest = "";
  let i = 0;
  const N = css.length;

  while (i < N) {
    if (isLiteralStart(css, i)) {
      const end = skipLiteral(css, i);
      rest += css.slice(i, end);
      i = end;
      continue;
    }

    if (css.slice(i, i + 7) === "@import" && !isIdent(css[i + 7])) {
      let j = i + 7;
      while (j < N) {
        if (isLiteralStart(css, j)) { j = skipLiteral(css, j); continue; }
        if (css[j] === ";") { j++; break; }
        j++;
      }
      imports.push(css.slice(i, j).trim());
      while (j < N && /\s/.test(css[j])) j++;
      i = j;
      continue;
    }

    rest += css[i];
    i++;
  }

  if (imports.length === 0) return css;
  return imports.join("\n") + "\n" + rest;
}

result = hoistImports(result);

writeFileSync(file, result);
console.log(`Stripped @layer wrappers from ${file} (flat/unlayered output)`);
