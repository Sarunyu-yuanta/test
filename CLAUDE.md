# Design System — @sarunyu/system-one

## Using the published package in other projects

When vibe coding a new app that consumes this library, paste this block into that project's `CLAUDE.md` (or the first prompt):

```
Use @sarunyu/system-one for all UI components.

Install:
  npm install @sarunyu/system-one

Setup (src/main.tsx — add BEFORE any app code):
  import "./index.css";
  import "@sarunyu/system-one/styles.css";
  // DO NOT import or create theme-overrides.css

Full component API: https://unpkg.com/@sarunyu/system-one/llms.txt
Read it before writing any component code.

Rules:
- Use only components and tokens from this library — do not create custom UI primitives
- Do not install shadcn/ui or any other component library
- Colors must use library tokens (e.g. bg-brand, text-default), not arbitrary Tailwind colors
```

## Developing this library

### Build

```bash
npm run build:lib   # JS + CSS + strip-layers post-process
npm run dev         # Vite dev server (component playground)
```

### Key files

| Path | Purpose |
|------|---------|
| `src/styles/theme.css` | Design tokens + `@layer base` global resets |
| `src/styles/globals.css` | Tailwind entry point for library build |
| `scripts/strip-layers.mjs` | Post-processes `dist/style.css` — strips `@layer` wrappers so component styles are unlayered (highest cascade priority) |
| `dist/style.css` | Published CSS — do not edit directly |
| `llms.txt` | Full API reference for AI tools |

### CSS cascade notes

- `strip-layers.mjs` makes all compiled CSS **unlayered** so library components beat any host Tailwind preflight
- `body` and `html` base resets use `:where()` (specificity 0) so host utility classes naturally override them — this prevents the library from breaking host dark themes (e.g. Figma Make)
- `h1–h4`, `button`, `label`, `input` use bare element selectors (specificity 0-0-1) to correctly override Tailwind's own bundled preflight via source order

### Publish

```bash
npm version patch   # or minor / major
npm publish
```
