# @sarunyu/system-one

A production-ready React design system built with **Tailwind CSS v4** and CSS custom properties.
Designed for AI-powered web generation tools — **Figma Make**, **Lovable**, and **V0**.

## Install

```bash
npm install @sarunyu/system-one
```

**Peer dependencies:** React ≥ 18

## Setup

Import the stylesheet once in your app root:

```tsx
// Next.js: app/layout.tsx or pages/_app.tsx
// Vite: src/main.tsx
import "@sarunyu/system-one/styles.css";
```

Then use components anywhere — no provider or wrapper needed:

```tsx
import { Button, Input, Tag, TabGroup, Chip } from "@sarunyu/system-one";

export default function Example() {
  return (
    <div>
      <Button variant="primary" size="md">Get started</Button>
      <Button variant="outline" size="md">Learn more</Button>
    </div>
  );
}
```

## Components

| Component | Description |
|---|---|
| `Button` | Action button — 6 variants, 10 sizes (label + icon-only) |
| `Input` | Floating-label text input with validation states |
| `TextArea` | Multi-line text input with character counter |
| `SearchInput` | Search field with clear button |
| `Dropdown` | Single-select dropdown |
| `DropdownMultiple` | Multi-select dropdown with checkboxes |
| `Tag` | Compact colored label for status and categories |
| `StatusTag` | Process-state indicator with colored dot |
| `Chip` | Toggleable filter/selection chip |
| `Tab` / `TabGroup` | Tabbed navigation with notification badges |
| `Card` | Responsive event/content card |
| `DateInput` | Calendar date picker (single, range, multiple modes) |
| `TimeInput` | 24-hour time picker |
| `OptionList` | Scrollable option list for custom dropdowns |

## Dark Mode

Add `.dark` class to any ancestor element to activate dark theme:

```tsx
<html className="dark">
```

All components adapt automatically.

## Theming

All design tokens are CSS custom properties. Override them after the stylesheet import:

```css
:root {
  --primary-action: #7c3aed;       /* brand color */
  --primary-action-hover: #6d28d9;
  --font-sans: "Inter", sans-serif;
}
```

Key tokens: `--primary-action`, `--background`, `--foreground`, `--border`, `--muted-foreground`, `--destructive`, `--success`.

## TypeScript

Full type definitions included:

```ts
import type { ButtonVariant, ButtonSize, TagVariant, ChipSize } from "@sarunyu/system-one";
```

## Development

```bash
npm install
npm run dev        # start demo server
npm run build:lib  # build the library
```

## License

MIT
