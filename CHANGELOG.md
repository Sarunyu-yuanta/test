# Changelog

All notable changes to `@sarunyu/system-one` are documented here.

---

## [4.6.1] — 2026-04-24

### Fixed
- **Host utilities were being stomped by library utilities.** In 4.6.0 the shipped `dist/style.css` had every rule unlayered (a side-effect of `strip-layers.mjs` unwrapping Tailwind's `@layer utilities`). Unlayered rules beat every named-layer rule in the cascade, so a host-written `p-6` / `gap-4` / `max-w-5xl` silently lost to the library's copy of the same utility. The expanded safelist in 4.6.0 made the problem visible everywhere — every Tailwind v4 host trying to override padding/spacing/sizing on library elements saw the override ignored.
- `scripts/strip-layers.mjs` now wraps the final CSS in `@layer system-one { ... }`. The library's styles sit in a named layer with lower cascade priority than host's unlayered rules and later-declared host layers — host `p-6` now wins as expected.
- Inner `@layer` wrappers are still stripped for Tailwind v3 PostCSS pipeline compatibility; the outer named layer is new.
- **Required import order**: host must `import "@sarunyu/system-one/styles.css"` **before** `@import "tailwindcss"` / other utility CSS for the layer ordering to resolve correctly. Documented in README.md and AGENTS.md.

### Deprecated
- `4.6.0` — broken cascade. Upgrade to 4.6.1.

---

## [4.6.0] — 2026-04-24

### Fixed
- **Layout utilities in hosts without Tailwind** — `dist/style.css` was built with `source(none)` + `@source '../components/**'`, so it only shipped utilities used inside library components. Hosts that imported only `@sarunyu/system-one/styles.css` with no host-side Tailwind (e.g. Claude Code / Cursor vibe-coded Vite projects) got broken layouts because `flex`, `grid`, `max-w-[1200px]`, `gap-*`, `mx-auto` etc. had no CSS rules.
- `globals.css` now safelists the layout-oriented utility set from the DESIGN.md / AGENTS.md recipes via `@source inline(...)` — display, flex/grid, spacing (0→24), sizing, responsive grid cols, positioning, z-index, text size/weight, leading/tracking, border/radius, overflow, cursor, opacity, shadow, transitions, backdrop-blur, and `bg-black/*` / `bg-white/*` overlay utilities.
- Lovable / v0 / Figma Make are unaffected — their host Tailwind still compiles utilities normally; safelisted classes produce identical CSS and do not conflict.
- Color utilities (`bg-blue-600`, `text-gray-500`, hex) are deliberately **not** safelisted — the token-first rule in AGENTS.md still stands.

### Changed
- `dist/style.css`: ~81 KB → ~165 KB raw (~15 KB → ~27 KB gzipped). Net +12 KB gzipped for "one import works everywhere" behavior.
- **AGENTS.md** — new hard rule 3: "No arbitrary bracket values for spacing / sizing / typography." The safelist only includes scale utilities and a fixed list of container widths (`max-w-[480/640/720/800/960/1024/1200/1280/1440px]`); any other `[...]` value is a no-op in hosts without Tailwind. Old rules 3–6 renumbered to 4–7.
- **llms.txt** — "The 3 rules" → "The 4 rules"; the new scale-first rule is spelled out with forbidden/allowed examples.
- **DESIGN.md** — added a do/don't row reinforcing scale-first vs arbitrary brackets.

---

## [4.5.2] — 2026-04-24

### Fixed
- `Card` — auto-detects screen size when `size` prop is omitted; mobile (<768px) now defaults to `size="mobile"` instead of `size="desktop"`

---

## [4.5.1] — 2026-04-24

### Added
- `DESIGN.md` — visual identity guide for AI tools (Figma Make, Lovable, v0, Claude) with layout patterns, color values, typography, and spacing rhythm
- `engines` field in `package.json` — requires Node.js ≥ 18

---

## [4.5.0]

### Added
- `Alert` — inline persistent status banner (danger / warning / success / info)
- `Toast` + `ToastStack` — floating notification system with portal rendering
- `Badge` — filter button variant and notification variant
- `Notification` — bell trigger + panel for notification lists

---

## [4.3.1]

### Changed
- Documentation and `llms.txt` updates
- `Card` component: new variants and improved default behavior

---

## [4.1.0]

### Added
- `Toggle` — switch component
- `Modal` — dialog and alert sheet variants
- `BottomSheet` — mobile drawer via Vaul
- Selectable rows feature on `Table` + `TableRow`

---

## [4.0.2]

### Added
- `AGENTS.md` — AI coding agent guidelines (shipped in npm package)
- `llms.txt` — full component catalog for LLM consumption

### Changed
- Design token updates for consistency across light/dark mode
- `TableCell` / `TableHeaderCell` / `TableRow` prop refinements

---

## [3.0.3]

### Added
- `Table` + `TableRow` + `TableHeaderCell` + `TableCell`
- `Checkbox` + `Radio`
- `Card` with size and variant types

---

## [1.0.5]

### Added
- `Tag` + `Chip` + `StatusTag`
- `Tab` + `TabGroup` with icon and notification support
- `DateInput` + `TimeInput`
- `Dropdown` + `DropdownMultiple` + `OptionList`
- `SearchInput` + `TextArea`

### Changed
- Build pipeline: dual ESM + CJS output, `.d.ts` generation, minified CSS

---

## [1.0.0]

### Added
- Initial release: `Button`, `Input`, design token system (Tailwind CSS v4 + CSS custom properties), dark mode support
