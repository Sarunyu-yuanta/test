/**
 * Post-process compiled CSS to remove @layer wrappers.
 *
 * Tailwind v4 CLI outputs CSS with `@layer base { … }`, `@layer utilities { … }`, etc.
 * These are valid CSS spec, but Tailwind v3's PostCSS plugin (used by Lovable, older
 * Next.js setups, etc.) chokes on them because it expects `@tailwind base` first.
 *
 * Stripping the @layer wrappers makes the CSS universally compatible while preserving
 * cascade order (the rules stay in the same file order: theme → base → utilities).
 */

import { readFileSync, writeFileSync } from "fs";

const file = process.argv[2] || "dist/style.css";
let css = readFileSync(file, "utf8");

let result = "";
let i = 0;

while (i < css.length) {
  // Match @layer declarations: `@layer theme, base, …;`  (ordering-only, no block)
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
        if (depth > 0) {
          result += css[j];
        }
        j++;
      }
      i = j;
      continue;
    }
  }

  result += css[i];
  i++;
}

writeFileSync(file, result);
console.log(`Stripped @layer wrappers from ${file}`);
