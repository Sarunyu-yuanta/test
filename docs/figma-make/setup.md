## Package Installation

**CRITICAL**: You MUST explicitly install every package listed below as a direct dependency, exactly as written.

Rules:
- Even if a package is already available as a transitive dependency (i.e., installed by another package), you MUST still add it as a direct dependency. Transitive availability does NOT count as installed.
- Use the **exact** package name shown. Packages with similar names (e.g., `@scope-a/foo` vs `@scope-b/foo`, or `foo` vs `foo-core`) are **different packages** and are NOT interchangeable. Never substitute one for another.
- Do not skip any package. Do not reorder, rename, or omit any entry.

---

## @sarunyu/system-one — Setup Guide

> Target version: **4.9.37** (minimum 4.9.35 for `Pagination` / `PaginationBanner` / `PaginationCarousel`; minimum 4.9.36 for `data-theme="dark"` section theming).

---

### 1. Required Direct Dependencies

Install these as **explicit** direct dependencies (not transitive):

```json
{
  "@sarunyu/system-one": "4.9.37",
  "@phosphor-icons/react": "^2.1.10"
}
```

> **Icon rule**: `@phosphor-icons/react` is the **only** permitted icon library. Never import from `lucide-react` or any other source. It is a direct dep of the design system but must also be listed in the consuming project.

---

### 2. Peer Dependencies

| Package | Constraint | Required? |
| --- | --- | --- |
| `react` | `>= 18` | ✅ required |
| `react-dom` | `>= 18` | ✅ required |
| `tailwindcss` | `>= 4` | Optional — required only if host writes Tailwind classes |

---

### 3. CSS Import Order (CRITICAL)

The library CSS **must** be imported **before** Tailwind. The library wraps styles in `@layer system-one`; if host Tailwind is declared first, library scale utilities will win over host-authored ones.

**`src/styles/index.css`** — the single entry imported by `src/main.tsx`:

```css
@import "./fonts.css";                     /* 1. custom fonts (empty if unused) */
@import "@sarunyu/system-one/styles.css";  /* 2. design system — MUST come before Tailwind */
@import "./tailwind.css";                  /* 3. Tailwind v4 */
```

**`src/styles/tailwind.css`**:

```css
@import "tailwindcss" source(none);
@source '../**/*.{js,ts,jsx,tsx}';

@import "tw-animate-css";
```

> **`source(none)` is required.** Without it Tailwind scans `node_modules/`, inflating the stylesheet and causing conflicts.

**`src/main.tsx`**:

```tsx
import "./styles/index.css"; /* must be first — before React, before App */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

---

### 4. No Provider Required

Every component ships with `"use client"`. No provider, no wrapper, no context is needed at the app root.

```tsx
// App.tsx — no SystemOneProvider, ThemeProvider, etc.
export default function App() {
  return <div>your app here</div>;
}
```

---

### 5. Vite Configuration

```ts
// vite.config.ts
import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
    // CRITICAL — prevents duplicate copies of React / Vaul / Radix UI when
    // @sarunyu/system-one (which bundles vaul + Radix) and the host project
    // both depend on them. Without this, forwardRef/ref warnings appear and
    // BottomSheet / Modal portals may fail silently.
    dedupe: [
      "react",
      "react-dom",
      "vaul",
      "@radix-ui/react-dialog",
      "@radix-ui/react-slot",
    ],
  },
  assetsInclude: ["**/*.svg", "**/*.csv"],
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

### 6. All Exported Components & Utilities

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
  TabGroup, Tab, Card, Badge,

  // Data
  Table, TableHead, TableBody,
  TableRow, TableHeaderCell, TableCell,

  // Feedback
  Alert, Toast, ToastStack, Toaster, Notification,

  // Overlays
  Modal, BottomSheet,

  // Navigation
  Breadcrumb, Pagination, PaginationBanner, PaginationCarousel,

  // Floating UI
  Tooltip, Popover,

  // Utils
  cn, useIsMobile,
} from "@sarunyu/system-one";

// Type-only imports — MUST use `import type`, not value import
import type { DateRange } from "@sarunyu/system-one"; // re-exported from react-day-picker
```

---

### 7. Dark Mode

**Global dark mode** — add `.dark` to `<html>`. All tokens adapt automatically.

```ts
document.documentElement.classList.toggle("dark");
```

**Section-level dark mode** — add `data-theme="dark"` to any container with a dark background. All child components auto-switch to dark tokens. **Never use `class="dark"` on a section** — that resets the entire page theme.

```tsx
<div data-theme="dark" className="bg-bg-brand-primary rounded-2xl p-8">
  <Button>ติดต่อ Online Service</Button>
  <p className="text-text-default-primary">สีปรับอัตโนมัติตาม dark token</p>
</div>
```

---

### 8. Common Gotchas

#### 8.1 CSS import order reversed → unstyled components

`@sarunyu/system-one/styles.css` must come **before** `@import 'tailwindcss'`. Reversing them causes the library's scale utilities to win over host-written ones.

#### 8.2 Missing `resolve.dedupe` → SlotClone `forwardRef` warnings / broken portals

`vaul` (used by `BottomSheet`) and `@radix-ui/react-slot` / `@radix-ui/react-dialog` must appear in `resolve.dedupe`. Without this, two separate copies of React internals load and `SlotClone`'s `forwardRef` triggers a React warning; in severe cases, portals (Modal, BottomSheet) render in the wrong tree.

#### 8.3 `<BottomSheet>` MUST use the lazy-mount pattern

**This is the most common runtime error.** Vaul mounts its `DrawerOverlay` portal the moment `<BottomSheet>` enters the React tree — even with `open={false}`. This triggers a `SlotClone` `forwardRef` warning immediately on page load.

Always guard with an `everOpened` flag so the component never mounts until the user first opens it:

```tsx
// Button-triggered (e.g. ComponentsShowcase)
const [open, setOpen] = useState(false);
const [everOpened, setEverOpened] = useState(false);

<Button onClick={() => { setEverOpened(true); setOpen(true); }}>Open</Button>
{everOpened && (
  <BottomSheet open={open} onOpenChange={setOpen}>
    …
  </BottomSheet>
)}
```

```tsx
// Prop-driven (e.g. FilterPanel receiving open from parent)
const [everOpened, setEverOpened] = useState(false);
useEffect(() => { if (open) setEverOpened(true); }, [open]);

if (isMobile) {
  if (!everOpened) return null;
  return <BottomSheet open={open} onOpenChange={onOpenChange}>…</BottomSheet>;
}
```

#### 8.4 `Input.onChange` is not a DOM event handler

```tsx
// ❌ wrong — onChange receives a string, not an event
<Input onChange={(e) => setVal(e.target.value)} />
// ✅ correct — receives the string value directly
<Input value={val} onChange={setVal} />
```

#### 8.5 `Checkbox` / `Toggle` / `Radio.onChange` signature

All three use `onChange: (next: boolean) => void`, not `onCheckedChange` and not a DOM event:

```tsx
<Checkbox checked={v} onChange={setV} />
<Radio name="x" value="a" checked={v === "a"} onChange={() => setV("a")} />
```

#### 8.6 `DateInput` range mode — different props

```tsx
// ❌ wrong for range
<DateInput mode="range" value={r} onChange={setR} />
// ✅ correct
<DateInput mode="range" dateRange={r} onRangeChange={setR} />
```

`DateRange` is a **type-only** re-export from `react-day-picker`. Always use `import type`:

```tsx
// ❌ wrong — value import of a type
import { DateRange } from "@sarunyu/system-one";
// ✅ correct
import type { DateRange } from "@sarunyu/system-one";
```

#### 8.7 `DropdownMultiple` — prop is `value`, not `values`

```tsx
<DropdownMultiple value={selected} onChange={setSelected} options={opts} />
```

#### 8.8 `Table` checkbox + sort must be fully controlled

- Header checkbox: `checkState` + `onCheckChange` on `<TableHeaderCell type="check">`
- Every body row: `selected` + `onSelectedChange` on `<TableRow>`
- Sortable columns: `sortDirection` + `onSortChange` on each `<TableHeaderCell>`. **Never pass a no-op `onSortChange={() => {}}`** — the icon will not update.

#### 8.9 `Toaster.onRemove` is required

Without `onRemove`, neither auto-dismiss nor the × button work:

```tsx
const [toasts, setToasts] = useState([]);
const remove = (id) => setToasts((t) => t.filter((x) => x.id !== id));
<Toaster items={toasts} duration={4000} onRemove={remove} />;
```

#### 8.10 `Modal` needs its own backdrop

`Modal` renders the panel only. Always wrap it in a `fixed inset-0` backdrop and gate it with your own open state:

```tsx
{open && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
    <Modal variant="dialog" … />
  </div>
)}
```

#### 8.11 `BottomSheet` is mobile-only — combine with lazy-mount

Use `useIsMobile()` to branch — `BottomSheet` on mobile, `Modal` on desktop. Apply the lazy-mount pattern (see 8.3) to both branches as needed:

```tsx
const isMobile = useIsMobile();
const [everOpened, setEverOpened] = useState(false);
useEffect(() => { if (open) setEverOpened(true); }, [open]);

const body = <div>…shared form content…</div>;

if (isMobile) {
  if (!everOpened) return null;
  return <BottomSheet open={open} onOpenChange={setOpen}>{body}</BottomSheet>;
}
return open ? (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
    <Modal …>{body}</Modal>
  </div>
) : null;
```

#### 8.12 No arbitrary `[…]` values

The library's `styles.css` only contains scale utilities + safelisted container widths. Any other arbitrary value (`h-[317px]`, `gap-[14px]`) is a no-op in hosts without a full Tailwind compile.

**Safelisted widths**: `max-w-[480px]` `max-w-[640px]` `max-w-[720px]` `max-w-[800px]` `max-w-[960px]` `max-w-[1024px]` `max-w-[1200px]` `max-w-[1280px]` `max-w-[1440px]`

#### 8.13 Never use `style={{}}` with raw colors

Bypasses design tokens and breaks dark mode. Use token classes instead.

```tsx
// ❌ wrong
<div style={{ backgroundColor: "#F8F8F5", color: "#6A6A7A" }}>
// ✅ correct
<div className="bg-default-secondary text-muted-foreground">
```

#### 8.14 `Pagination` / `PaginationBanner` / `PaginationCarousel` require ≥ 4.9.35

These components are absent in `4.9.34` — using that version throws `SyntaxError: … does not provide an export named 'Pagination'`.

#### 8.15 `data-theme="dark"` requires ≥ 4.9.36

Section-level dark theming via `data-theme="dark"` is available from `4.9.36` onward.

---

### 9. Design Token Quick Reference

| Purpose | Tailwind class |
| --- | --- |
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
| Status — success | `text-success` / `bg-success-bg` |
| Status — warning | `text-warning` / `bg-warning-light` |
| Status — error | `text-destructive` / `bg-error-bg` |

Full token reference: `node_modules/@sarunyu/system-one/llms.txt`
