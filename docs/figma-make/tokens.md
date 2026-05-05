# Tokens — use these classes, never raw colors

All tokens adapt to light/dark mode automatically.

## Text color
- Body / heading: `text-foreground` (alias: `text-default`)
- Secondary: `text-muted-foreground` (alias: `text-default-secondary`)
- Tertiary / placeholder: `text-default-tertiary` / `text-default-placeholder`
- Disabled: `text-disabled`
- Inverse on dark surfaces: `text-default-inverse`
- Caption: `text-caption`
- Brand / link: `text-primary-action` (alias: `text-brand`)
- Status: `text-destructive` / `text-warning` / `text-success` / `text-info`
- On primary surfaces: `text-on-primary-action`

## Background
- Page: `bg-background`
- Card / popover: `bg-card`
- Secondary surface: `bg-default-secondary`
- Tertiary surface: `bg-default-tertiary`
- Input / chip fill: `bg-muted` / `bg-input-background`
- Hover neutral: `bg-hover-bg`
- Disabled: `bg-disabled-bg`
- Brand action: `bg-primary-action` + `hover:bg-primary-action-hover` + `active:bg-primary-action-active`
- Tinted brand: `bg-primary-action-light` / `bg-primary-action-muted`
- Selection row: `bg-selected-bg` / `bg-selected-light-bg`
- Status fills: `bg-destructive` / `bg-warning` / `bg-success` / `bg-info`
- Status soft: `bg-error-bg` / `bg-warning-light` / `bg-success-bg` / `bg-info-light`

## Border
- Default: `border-border`
- Strong: `border-border-muted`
- Subtle divider: `border-divider`
- Disabled: `border-border-disabled`
- Brand: `border-brand`
- Status: `border-danger` / `border-warning` / `border-success` / `border-info`

## Icon color (when applied to SVG)
`text-icon-default` · `text-icon-default-secondary` · `text-icon-default-tertiary` · `text-icon-default-disabled` · `text-icon-brand` · `text-icon-on-brand` · `text-icon-danger` · `text-icon-warning` · `text-icon-success` · `text-icon-info`

## Visual scale (badges, counts, charts — NOT semantic status)
Hues: `neutral` · `purple` · `blue` · `cyan` · `pink` · `red` · `orange`
Steps: `light` · `soft` · `low` · base · `high` · `vivid` · `deep`

Example: `bg-visual-red`, `bg-visual-blue-soft`, `text-visual-purple-deep`

Prefer `visual-*` over `bg-red-500` for notification counts — visual tokens adapt in dark mode.
