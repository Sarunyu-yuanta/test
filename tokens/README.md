# Design tokens (Figma → repo)

This folder is the **canonical JSON** for variables exported from Figma (DTCG-style `$type` / `$value`).  
`src/styles/theme.css` is the **runtime bridge** to Tailwind v4 (`@theme`) and should stay in sync with these files (manually today; optional codegen later).

## Layers (recommended)

| Layer           | Role                                                   | Files                                                                                                       |
| --------------- | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| **Primitives**  | Raw scales (no product meaning)                        | `color-primitives.fill.json`, `typography-primitives.mode-1.json`, `size-mode-1.json`, `effect-mode-1.json` |
| **Semantic**    | Roles: BG, Text, Border… with references to primitives | `semantic/*.json` (paste Figma exports here)                                                                |
| **Theme / app** | `:root`, `.dark`, `@theme inline`                      | `src/styles/theme.css`                                                                                      |

## Naming (aligned with this repo)

- Use **kebab-case** file names: `color.system-one.light.json`, not `Color.Light (System One).tokens.json`.
- Primitive color ramps live under `color-primitives.fill.json` → `fill.<palette>.<step>` (e.g. `fill.p1.600`).
- Fix **PInk → pink** in Figma references when you normalize exports (`{PInk.50}` → `{pink.50}`).

## Figma reference strings

Figma uses `{Gray.900}`, `{P1.600}`, etc. After normalization:

- Point to JSON paths: primitives file uses `fill.gray.900`, `fill.p1.600`.
- Tools like Style Dictionary can map `{P1.600}` → `fill.p1.600` or to CSS `var(--fill-p1-600)`.

## Semantic files to maintain

Place exports from Figma Variables (same content, cleaned names):

| Figma collection         | Path                                            | Status                           |
| ------------------------ | ----------------------------------------------- | -------------------------------- |
| Color.Light (System One) | `semantic/color.system-one.light.json`          | ✓ present, mirrored in theme.css |
| Color.Dark (System One)  | `semantic/color.system-one.dark.json`           | pending                          |
| Color.Light (Wealth)     | `semantic/color.wealth.light.json`              | pending                          |

Keep **one theme** active in CSS at a time, or map semantic JSON → CSS variables per product.

## Sync checklist

1. Export JSON from Figma (Variables / Tokens Studio).
2. Normalize names (kebab-case, typos: Background blur, Spread, line-height).
3. Update the matching file under `tokens/`.
4. Mirror values into `theme.css` / `tokens-fill.css` (or run a future build script).

## Related CSS

- Color primitives → `src/styles/tokens-fill.css` (`--fill-*`).
- Spacing, radius, type, blur, shadow → `src/styles/theme.css` `@theme inline`.

## Components → semantic tokens (library)

UI components use **Tailwind classes** wired to `theme.css` (not raw `bg-white` / hex). Summary:

| Area                                             | Classes / vars                                | Theme source                              |
| ------------------------------------------------ | --------------------------------------------- | ----------------------------------------- |
| Page / field surface                             | `bg-background`                               | `--background`                            |
| Floating panels (dropdown, popover, option list) | `bg-popover`, `text-popover-foreground`       | `--popover`, `--popover-foreground`       |
| Cards                                            | `bg-card`, `text-card-foreground`             | `--card`                                  |
| Primary CTA / filled chip / calendar selection   | `bg-primary-action`, `text-on-primary-action` | `--primary-action`, `--on-primary-action` |
| Borders                                          | `border-border`, `border-border-disabled`     | `--border`, `--border-disabled`           |
| Muted / disabled text                            | `text-muted-foreground`, `text-disabled`      | `--muted-foreground`, `--disabled`        |
| Elevation                                        | `shadow-card`, `shadow-popover` (where used)  | `--elevation-*` via `@theme`              |
| Raw palette (tags, rare cases)                   | `bg-[var(--fill-*)]`                          | `tokens-fill.css`                         |

Primitives file: `color-primitives.fill.json` → `--fill-*` only; semantic meaning stays in `theme.css` and the classes above.
