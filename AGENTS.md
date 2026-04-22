# AGENTS.md — @sarunyu/system-one

Instructions for AI coding agents (Claude, Cursor, Copilot, v0, Lovable, Figma Make)
working in a project that depends on this library.

**For the full component catalog, token table, and page recipes, read `llms.txt`
in this package.** This file is the short version: the rules you must follow.

## Hard rules

1. **Use the library's components for every element it covers.** Never emit:
   - `<button>` with utility classes → use `<Button>`.
   - `<input>` / `<textarea>` → use `<Input>` / `<TextArea>` / `<SearchInput>`.
   - Custom dropdowns, selects, comboboxes → use `<Dropdown>` / `<DropdownMultiple>`.
   - Custom status pills, category labels → use `<Tag>` / `<StatusTag>` / `<Chip>`.
   - Custom tabs → use `<TabGroup>`.
   - Custom checkbox/radio → use `<Checkbox>` / `<Radio>`.
   - Custom date/time pickers → use `<DateInput>` / `<TimeInput>`.
   - Custom tables → use `<Table>` + `<TableRow>` + `<TableHeaderCell>` + `<TableCell>`.
   - Custom modals/dialogs/alerts → use `<Modal>` (wrap it in your own `fixed inset-0` backdrop).
   - Custom bottom sheets / drawers from the bottom → use `<BottomSheet>` (it ships its own backdrop via Vaul).

2. **Use token-backed Tailwind classes for color.** Never emit hard-coded colors:
   - Hex (`#3b82f6`), arbitrary (`bg-[#...]`), and palette utilities
     (`bg-blue-600`, `text-gray-500`, `border-slate-200`) are all forbidden.
   - Use `text-foreground`, `text-muted-foreground`, `text-primary-action`,
     `bg-background`, `bg-card`, `bg-muted`, `bg-primary-action`,
     `border-border`, `border-divider`, etc. See `llms.txt` for the full table.

3. **Do not add text/font utility classes to `<h1>`–`<h4>`.** They are pre-styled.
   Use them as-is.

4. **Layout is your job, with plain Tailwind.** The library has NO layout primitives.
   Do not import `Page`, `Section`, `Stack`, `CardGrid`, `Toolbar` — they do not exist.
   Build structure with `<div>` + `flex` / `grid` / `max-w-*` / `gap-*` / `p-*`.

5. **Component props are documented in `llms.txt` and in the `.d.ts` files.**
   - `Input.onChange` receives `(value: string)`, not an event.
   - `placeholder` IS the label (floats up on fill). Don't add a separate `<label>`.
   - Checkbox/Radio take their `label` as a prop. Don't wrap them in `<label>`.
   - All tabs in one `TabGroup` must share the same `size`.
   - One `<Button variant="primary">` per context.
   - `Modal` renders the panel only — provide your own `fixed inset-0` backdrop + open/close state. One primary action per modal.
   - `BottomSheet` is mobile-only. On desktop, use `Modal` instead.

6. **Mobile forms and action-heavy modals MUST use `<BottomSheet>`, not `<Modal>`.**
   Login, signup, settings panels, profile editors, any multi-field form,
   multi-step flow, long picker list, or action menu — on mobile (< 768px)
   these render as `<BottomSheet>`. Only simple `variant="alert"` and short
   `variant="dialog"` confirmations (no form) may stay as `<Modal>` on mobile.
   Desktop (≥ 768px) always uses `<Modal>`. Branch with the library's
   `useIsMobile()` hook — do not build a custom "ResponsiveModal" wrapper;
   put the `if (isMobile) return <BottomSheet>… / return <Modal>…` inline and
   share one `const body = …` between the two branches. See the `LoginSheet`
   recipe in `llms.txt`.

## Setup check

Required one-liner in the app entry (App Router: `app/layout.tsx`,
Pages: `pages/_app.tsx`, Vite: `src/main.tsx`):

```tsx
import "@sarunyu/system-one/styles.css";
```

If the screen looks unstyled, this import is missing.

## Dark mode

Add `.dark` to any ancestor (usually `<html>`). All tokens adapt automatically.

## Theming

Override CSS custom properties after the stylesheet import.
**Both `:root` (light) and `.dark` (dark) must be overridden separately** —
the library hard-codes dark-mode colors in its `.dark` block, so a `:root`-only
override leaves dark mode unchanged.

```css
:root {
  --primary-action: #7c3aed;
  --primary-action-hover: #6d28d9;
  --primary-action-active: #5b21b6;
  --font-sans: "Inter", sans-serif;
}

.dark {
  --primary-action: #a78bfa;
  --primary-action-hover: #c4b5fd;
  --primary-action-active: #8b5cf6;
  --primary-action-light: color-mix(in srgb, #a78bfa 10%, transparent);
  --primary-action-muted: color-mix(in srgb, #a78bfa 15%, transparent);
}
```

Do not override `--radius` — it is a legacy var and has no effect on Tailwind
utilities. Use `rounded-*` utility classes instead.

## When you need a component the library doesn't provide

Build it with tokens. Never introduce new colors.

```tsx
// Custom badge — uses library tokens
<span className="inline-flex items-center gap-1 rounded-full bg-primary-action-light text-primary-action px-2 py-0.5 text-xs">
  {text}
</span>
```

If the custom thing is conceptually a button/input/tag/chip/tab/card/table,
**stop and use the library's component instead.** Only build custom when the
concept isn't covered (hero section, chart, breadcrumb, etc.).

## Read this before generating code

- `llms.txt` (this package) — full component catalog + token reference + page recipes.
- `.d.ts` files in `dist/src/` — exact prop types.
