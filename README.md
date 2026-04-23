# @sarunyu/system-one

A production-ready React design system built with **Tailwind CSS v4** and CSS custom properties.
Designed for AI-powered UI generation — **Figma Make**, **Lovable**, **v0**, **Cursor**.

> **Using this library from an AI tool?** Read [`llms.txt`](./llms.txt) and
> [`AGENTS.md`](./AGENTS.md). They are the contract for correct use.

## Install

```bash
npm install @sarunyu/system-one
```

Peer dep: `react >= 18`.

## Setup

One import in your app entry:

```tsx
// Next.js App Router: app/layout.tsx
// Next.js Pages:      pages/_app.tsx
// Vite / Figma Make:  src/main.tsx
import "@sarunyu/system-one/styles.css";
```

No provider, no wrapper. Components ship with `"use client"`.

## Use

```tsx
import { Button, Input, Tag, TabGroup } from "@sarunyu/system-one";

export default function Example() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <h1>Hello</h1>
      <Input placeholder="Email" />
      <Button variant="primary" size="md">Continue</Button>
    </div>
  );
}
```

## Philosophy — components strict, layout free

The library is responsible for **components**: every Button, Input, Tag, Card, etc.
must come from the library — never hand-rolled from raw HTML + utility classes.
That keeps the visual language consistent.

The library is **not** responsible for **layout**. Design page structure yourself
using plain `<div>` + Tailwind (`flex`, `grid`, `max-w-*`, `gap-*`). The library
ships no `Page`/`Section`/`Stack` primitives — use whatever layout looks right.

## Components

| Component | Purpose |
|---|---|
| `Button` | Action button — 5 variants, 10 sizes |
| `Input` / `TextArea` / `SearchInput` | Text input, multiline, search field |
| `Dropdown` / `DropdownMultiple` / `OptionList` | Select controls |
| `Checkbox` / `Toggle` / `Radio` | Checkbox, boolean switch (on/off), single-choice |
| `DateInput` / `TimeInput` | Date and time pickers |
| `Tag` / `StatusTag` / `Chip` | Labels, workflow states, filter chips |
| `Tab` / `TabGroup` | Tabbed navigation |
| `Card` | Event/content card (desktop / tablet / mobile variants) |
| `Table` | Data tables (`TableRow` / `TableHeaderCell` / `TableCell`) |
| `Modal` | Centered overlay — dialog / content / alert variants |
| `BottomSheet` | Mobile-first bottom sheet (Vaul-based, with backdrop) |

Full prop reference: [`llms.txt`](./llms.txt).

## Dark mode

Add `.dark` to any ancestor:

```tsx
<html className={isDark ? "dark" : ""}>
```

All components and tokens adapt.

## Theming

Override CSS custom properties after importing the stylesheet. **Override
both `:root` and `.dark` — they are independent blocks.**

The hex values below are **placeholders for your brand palette** (shown in
violet for contrast). They are not part of System One — the library's own
defaults live in `tokens/color.json` (P1 blue).

```css
/* Light mode — replace with YOUR brand palette */
:root {
  --primary-action: #7c3aed;        /* your brand 600 */
  --primary-action-hover: #6d28d9;  /* your brand 700 */
  --primary-action-active: #5b21b6; /* your brand 800 */
  --font-sans: "Inter", sans-serif;
}

/* Dark mode — independent; set separately */
.dark {
  --primary-action: #a78bfa;        /* your brand 400 */
  --primary-action-hover: #c4b5fd;  /* your brand 300 */
  --primary-action-active: #8b5cf6; /* your brand 500 */
  --primary-action-light: color-mix(in srgb, #a78bfa 10%, transparent);
  --primary-action-muted: color-mix(in srgb, #a78bfa 15%, transparent);
}
```

Key tokens: `--primary-action`, `--background`, `--foreground`, `--border`,
`--muted-foreground`, `--destructive`, `--success`. See [`llms.txt`](./llms.txt)
for the full token table mapped to Tailwind utility classes.

## TypeScript

Full types included:

```ts
import type {
  ButtonVariant, ButtonSize,
  TagVariant, ChipSize,
  InputProps, DropdownOption,
  ToggleSize, ToggleProps,
  ModalVariant, ModalActionLayout,
} from "@sarunyu/system-one";
```

## Development

```bash
npm install
npm run dev         # showcase demo
npm run build:lib   # build the library
```

## License

MIT
