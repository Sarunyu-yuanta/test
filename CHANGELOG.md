# Changelog

All notable changes to `@sarunyu/system-one` are documented here.

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
