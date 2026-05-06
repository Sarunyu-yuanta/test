## Package Installation

**CRITICAL**: You MUST explicitly install every package listed below as a direct dependency, exactly as written.

Rules:
- Even if a package is already available as a transitive dependency (i.e., installed by another package), you MUST still add it as a direct dependency. Transitive availability does NOT count as installed.
- Use the **exact** package name shown. Packages with similar names (e.g., `@scope-a/foo` vs `@scope-b/foo`, or `foo` vs `foo-core`) are **different packages** and are NOT interchangeable. Never substitute one for another.
- Do not skip any package. Do not reorder, rename, or omit any entry.

### Required Direct Dependencies

Install these as **explicit** direct dependencies (not transitive):

```json
{
  "@sarunyu/system-one": "4.9.36",
  "@phosphor-icons/react": "^2.1.10"
}
```

> **Icon rule**: use `@phosphor-icons/react` for **all** icons. Never import from `lucide-react` or any other icon library. `@phosphor-icons/react` is a direct dependency of the design system but must also be listed as a direct dependency in the consuming project.

### Peer Dependencies

| Package | Constraint |
|---|---|
| `react` | `>= 18` |
| `react-dom` | `>= 18` |
| `tailwindcss` | `>= 4` (optional — required only if you write your own Tailwind classes) |

---

## CSS Import Order (CRITICAL)

The library CSS **must** be imported **before** Tailwind. The library wraps its styles in `@layer system-one`; if host Tailwind is declared first, the library's scale utilities override your own.

### Recommended file layout

**`src/styles/index.css`** — the single entry imported by `src/main.tsx`:

```css
@import './fonts.css';                      /* 1. custom fonts (empty if unused) */
@import '@sarunyu/system-one/styles.css';   /* 2. design system — MUST come before Tailwind */
@import './tailwind.css';                   /* 3. Tailwind v4 */
```

**`src/styles/tailwind.css`**:

```css
@import 'tailwindcss' source(none);
@source '../**/*.{js,ts,jsx,tsx}';

@import 'tw-animate-css';
```

> **`source(none)` is required.** Without it, Tailwind scans `node_modules/` for class names, inflating the compiled stylesheet and causing conflicts.

**`src/main.tsx`**:

```tsx
import './styles/index.css';   /* must be first — before React, before App */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode><App /></React.StrictMode>
);
```

---

## No Provider Required

The library ships with `"use client"` on every component. **No provider, no wrapper, no context** is needed at the app root.

```tsx
// App.tsx — no SystemOneProvider, ThemeProvider, etc.
export default function App() {
  return <div>your app here</div>;
}
```

---

## Vite Configuration

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),   // required — do not remove even if Tailwind isn't actively used
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    // CRITICAL — prevents duplicate copies of React / Vaul / Radix UI when
    // @sarunyu/system-one (which bundles vaul + Radix) and the host project
    // both depend on them. Without this, forwardRef/ref warnings appear and
    // BottomSheet / Modal portals may fail silently.
    dedupe: [
      'react',
      'react-dom',
      'vaul',
      '@radix-ui/react-dialog',
      '@radix-ui/react-slot',
    ],
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
});
```

Required Vite dev-dependencies:

```json
{
  "@tailwindcss/vite": "4.1.12",
  "@vitejs/plugin-react": "4.7.0",
  "tailwindcss": "4.1.12",
  "vite": "6.3.5"
}
```

---

## All Exported Components & Utilities

Import from `@sarunyu/system-one`:

```tsx
import {
  // Form inputs
  Button, Input, TextArea, SearchInput,
  Dropdown, DropdownMultiple, OptionList,
  Checkbox, Toggle, Radio,
  DateInput, TimeInput,

  // Display
  Avatar, AvatarStack,
  Tag, StatusTag, Chip,
  TabGroup, Tab,
  Card,
  Badge,

  // Data
  Table, TableHead, TableBody, TableRow, TableHeaderCell, TableCell,

  // Feedback
  Alert,
  Toast, ToastStack, Toaster,
  Notification,

  // Overlays
  Modal, BottomSheet,

  // Navigation
  Breadcrumb,
  Pagination, PaginationBanner, PaginationCarousel,

  // Floating UI
  Tooltip, Popover,

  // Utils
  cn, useIsMobile,
} from '@sarunyu/system-one';

// Type-only imports
import type { DateRange } from '@sarunyu/system-one'; // re-exported from react-day-picker
```

> **`Pagination` / `PaginationBanner` / `PaginationCarousel`** are available from **`4.9.35`** onward. They are absent in `4.9.34` — using that version will throw `SyntaxError: … does not provide an export named 'Pagination'`.
>
> **`data-theme="dark"` section theming** is available from **`4.9.36`** onward.

---

## Dark Mode

**Global dark mode** — add `.dark` to `<html>`. All tokens adapt automatically. No JS toggle library required.

```tsx
document.documentElement.classList.toggle('dark');
```

**Section-level dark mode** — add `data-theme="dark"` to any container with a dark background. All child components auto-switch to dark tokens. Never use `class="dark"` on a section.

```tsx
<div data-theme="dark" className="bg-bg-brand-primary rounded-2xl p-8">
  <Button>ติดต่อ Online Service</Button>
  <p className="text-text-default-primary">สีปรับอัตโนมัติตาม dark token</p>
</div>
```

---

## Common Gotchas

### 1. CSS import order reversed → unstyled components
`@sarunyu/system-one/styles.css` must come **before** `@import 'tailwindcss'`. Reversing them causes the library's scale utilities to win over host-written ones.

### 2. `BottomSheet` triggers `SlotClone` ref warning on initial render
Vaul mounts its `DrawerOverlay` portal **immediately** when `<BottomSheet>` enters the React tree — even with `open={false}`. In environments that can't dedupe React (e.g. Figma Make), this causes:
```
Warning: Function components cannot be given refs … Check the render method of `SlotClone`.
```

**Fix — lazy-mount pattern (always required):** never render `<BottomSheet>` until the user actually opens it.

```tsx
// ✅ button-triggered sheet
const [everOpened, setEverOpened] = useState(false);
const [open, setOpen] = useState(false);

<Button onClick={() => { setEverOpened(true); setOpen(true); }}>Open</Button>
{everOpened && (
  <BottomSheet open={open} onOpenChange={setOpen} title="Options">
    {/* content */}
  </BottomSheet>
)}
```

```tsx
// ✅ prop-driven sheet (e.g. FilterPanel receiving open from parent)
function FilterPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [everOpened, setEverOpened] = useState(false);
  useEffect(() => { if (open) setEverOpened(true); }, [open]);

  if (!everOpened) return null;
  return (
    <BottomSheet open={open} onOpenChange={(v) => { if (!v) onClose(); }} title="Filters">
      {/* content */}
    </BottomSheet>
  );
}
```

Never write `<BottomSheet open={someState} …>` at the top level of a component that renders before the user interacts — always guard with the `everOpened` flag.

### 3. `Input.onChange` is not a DOM event handler
```tsx
// ❌ wrong — onChange receives a string, not an event
<Input onChange={(e) => setVal(e.target.value)} />
// ✅ correct — receives the string value directly
<Input value={val} onChange={setVal} />
```

### 4. `Checkbox` / `Toggle` / `Radio.onChange` signature
All three use `onChange: (next: boolean) => void`, not `onCheckedChange` and not a DOM event:
```tsx
<Checkbox checked={v} onChange={setV} />
<Radio name="x" value="a" checked={v === "a"} onChange={() => setV("a")} />
```

### 5. `DateInput` range mode — different props
```tsx
// ❌ wrong for range
<DateInput mode="range" value={r} onChange={setR} />
// ✅ correct
<DateInput mode="range" dateRange={r} onRangeChange={setR} />
```
`DateRange` type must be imported from `@sarunyu/system-one` (it re-exports from `react-day-picker`).

### 6. `DropdownMultiple` — prop is `value`, not `values`
```tsx
<DropdownMultiple value={selected} onChange={setSelected} options={opts} />
```

### 7. `Table` checkbox + sort must be fully controlled
- Header checkbox: `checkState` + `onCheckChange` on `<TableHeaderCell type="check">`
- Every body row: `selected` + `onSelectedChange` on `<TableRow>`
- Sortable columns: `sortDirection` + `onSortChange` on each `<TableHeaderCell>`. **Never pass a no-op `onSortChange={() => {}}`** — the icon will not update.

### 8. `Toaster.onRemove` is required
Without `onRemove`, neither auto-dismiss nor the × button work — toasts stay on screen forever:
```tsx
const [toasts, setToasts] = useState([]);
const remove = (id) => setToasts(t => t.filter(x => x.id !== id));
<Toaster items={toasts} duration={4000} onRemove={remove} />
```

### 9. `Modal` needs its own backdrop
`Modal` renders the panel only. Always wrap it in a `fixed inset-0` backdrop and gate it with your own open state:
```tsx
{open && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
    <Modal variant="dialog" … />
  </div>
)}
```

### 10. `BottomSheet` is mobile-only
Use `useIsMobile()` to branch — `BottomSheet` on mobile, `Modal` on desktop. `BottomSheet` ships its own Vaul; never wrap it in your own overlay div.
```tsx
const isMobile = useIsMobile();
if (isMobile) return <BottomSheet open={open} onOpenChange={setOpen} …>{content}</BottomSheet>;
return open ? <div className="fixed inset-0 …"><Modal …>{content}</Modal></div> : null;
```

### 11. No arbitrary `[...]` values
The library's shipped `styles.css` only contains scale utilities + safelisted container widths. Any other arbitrary value (`h-[317px]`, `gap-[14px]`, etc.) is a no-op in hosts without a full Tailwind compile step.  
**Safelisted container widths**: `max-w-[480px]` `max-w-[640px]` `max-w-[720px]` `max-w-[800px]` `max-w-[960px]` `max-w-[1024px]` `max-w-[1200px]` `max-w-[1280px]` `max-w-[1440px]`.

### 12. Never use `style={{}}` with raw colors
Bypasses design tokens and breaks dark mode. Use token classes instead (`bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`, etc.).

---

## Design Token Quick Reference

| Purpose | Tailwind class |
|---|---|
| Body text / headings | `text-foreground` |
| Secondary text | `text-muted-foreground` |
| Brand / link / active | `text-primary-action` |
| Icon (default) | `text-icon-default` |
| Icon (brand) | `text-icon-brand` |
| Page background | `bg-background` |
| Card / popover surface | `bg-card` |
| Secondary surface | `bg-default-secondary` |
| Hover on neutral | `bg-hover-bg` |
| Default border | `border-border` |
| Light separator | `border-divider` |
| Card shadow | `shadow-card` |

Full token reference: https://unpkg.com/@sarunyu/system-one/llms.txt
