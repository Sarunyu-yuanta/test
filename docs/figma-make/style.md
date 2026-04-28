# Style — spacing, typography, radius, shadow

## Typography
Pre-styled HTML headings (do NOT add `text-*` / `font-*` overrides):
- `<h1>` 24px
- `<h2>` 20px
- `<h3>` 18px
- `<h4>` 16px

Body text inherits `--foreground`. Font: Noto Sans Thai (override globally via `--font-sans`).

## Radius
`rounded-sm` 2px · `rounded` 4px (default) · `rounded-md` 6px · `rounded-lg` 8px · `rounded-xl` 12px · `rounded-2xl` 16px · `rounded-3xl` 24px · `rounded-full`

## Shadow
`shadow-xs` · `shadow-sm` · `shadow-md` · `shadow-lg` · `shadow-card` (event/content cards) · `shadow-popover` (dropdowns/menus)

## Spacing scale (4px base)
Standard Tailwind. Fine-grained: `p-0.5` (2px) · `p-1.5` (6px) · `p-2.5` (10px) · `p-3.5` (14px) · `p-13` (56px)

## Layout principles
- Build pages with `<div>` + flex/grid (no layout primitives shipped)
- Use container max-widths from the safelist (see guidelines.md)
- Stack horizontally on desktop, vertically on mobile via Tailwind responsive prefixes
- Use `useIsMobile()` (768px breakpoint) for component-level branching, not just CSS

## Date formatting
Display: `"DD MMM YYYY"` (system format). Don't mix Thai month names with C.E. year.
