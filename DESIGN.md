# DESIGN.md — @sarunyu/system-one

Visual identity guide for AI coding tools (Figma Make, Lovable, v0, Claude).
Read this before generating any UI. For component API and token class names, read `AGENTS.md` and `llms.txt`.

---

## Overview

**Personality:** Corporate — structured, trustworthy, data-dense, professional.
**Feel:** Clean surfaces, strong hierarchy, controlled whitespace. Never playful, never decorative.
**Target context:** Enterprise web applications — dashboards, data tables, form-heavy workflows, financial UIs.

Design decisions lean toward clarity over expression. Every element earns its space.

---

## Colors

### Brand palette

| Role | Light mode | Dark mode | Tailwind class |
|---|---|---|---|
| Primary action (buttons, links, active) | `#0a6ee7` | `#4792ed` | `bg-primary-action` / `text-primary-action` |
| Primary hover | `#095ec4` | `#91bef4` | `bg-primary-action-hover` |
| Primary active/pressed | `#074ea4` | — | `bg-primary-action-active` |
| Primary light tint | `#dae9fb` | — | `bg-primary-action-light` |
| Secondary accent (highlights, badges) | `#eb6101` | — | use `bg-visual-orange` |

### Surfaces

| Role | Value | Tailwind class |
|---|---|---|
| Page background | `#ffffff` (light) / `#0f172a` (dark) | `bg-background` |
| Card / panel | `#ffffff` (light) / `#1e293b` (dark) | `bg-card` |
| Subtle secondary surface | `#f9fafb` | `bg-default-secondary` |
| Input background | `#f9fafb` | `bg-muted` |
| Hover state | `#f3f4f6` | `bg-hover-bg` |
| Disabled | `#f3f4f6` | `bg-disabled-bg` |

### Status colors

| Status | Fill | Light surface | Tailwind class |
|---|---|---|---|
| Danger / error | `#fb2c36` | `#fef2f2` | `bg-destructive` / `bg-error-bg` |
| Warning | `#f0b100` | `#fefce8` | `bg-warning` / `bg-warning-light` |
| Success | `#00c951` | `#f0fdf4` | `bg-success` / `bg-success-bg` |
| Info | blue-500 | blue-50 | `bg-info` / `bg-info-light` |

### Borders

Default border: `1px solid` — `border-border` (`#e5e7eb` light).
Dividers between sections: `border-divider` (lighter than border).
Never hard-code border colors.

---

## Typography

**Font family:** `Noto Sans Thai`, sans-serif — loaded via Google Fonts (wght 400 / 500 / 600).
Override globally: `--font-sans: "Your Font", sans-serif;`

### Heading scale (pre-styled — do NOT add Tailwind text-* overrides)

| Tag | Size | Weight | Use for |
|---|---|---|---|
| `<h1>` | 24px | 600 | Page title |
| `<h2>` | 20px | 600 | Section title |
| `<h3>` | 18px | 600 | Card / panel heading |
| `<h4>` | 16px | 500 | Sub-section, field group label |

### Body scale

| Class | Size | Use for |
|---|---|---|
| (default, no class) | 16px | Body text, form values |
| `text-sm` | 14px | Secondary labels, table cells, helper text |
| `text-xs` | 12px | Captions, timestamps, fine print |

### Color rules

- Body / headings: `text-foreground`
- Secondary labels: `text-muted-foreground`
- Disabled: `text-disabled`
- Brand / link: `text-primary-action`
- Error: `text-destructive`

Never use `text-gray-*`, `text-blue-*`, or hex colors for text.

---

## Spacing

**Base unit:** 4px. All spacing values are multiples of 4px.

### Layout spacing

| Context | Value | Tailwind |
|---|---|---|
| Page horizontal padding | 24px (desktop) / 16px (mobile) | `px-6 md:px-8` |
| Page vertical padding | 40px | `py-10` |
| Between major page sections | 48px | `gap-12` |
| Between related content blocks | 24px | `gap-6` |
| Between items in a cluster | 16px | `gap-4` |
| Inside a card / panel | 24px | `p-6` |
| Dense toolbar / header row | 12–16px | `gap-3` or `gap-4` |

### Content width

| Layout | Max-width |
|---|---|
| Dashboard / wide content | `max-w-[1200px]` |
| Standard content page | `max-w-[960px]` |
| Form / narrow content | `max-w-[640px]` |
| Dialog / modal body | `max-w-[480px]` |

---

## Border radius

Default: **4px** (`rounded`). Corporate contexts use tight radius — avoid large curves.

| Usage | Value | Tailwind |
|---|---|---|
| Default (inputs, cards, buttons) | 4px | `rounded` |
| Tags, badges, chips | 6px | `rounded-md` |
| Pills | 999px | `rounded-full` |
| Modals, large panels | 8px | `rounded-lg` |

---

## Elevation / shadow

Use sparingly. Corporate UIs prefer border separation over heavy elevation.

| Level | Usage | Tailwind |
|---|---|---|
| None | Flat cards separated by border | — |
| Subtle | Floating cards, content panels | `shadow-sm` |
| Card | Event cards, interactive tiles | `shadow-card` |
| Popover | Dropdowns, menus, tooltips | `shadow-popover` |

---

## Layout patterns

### Standard dashboard page

```tsx
<main className="mx-auto w-full max-w-[1200px] px-6 md:px-8 py-10 flex flex-col gap-12">
  <header className="flex items-start justify-between gap-4">
    <div className="flex flex-col gap-1">
      <h1>Page Title</h1>
      <p className="text-sm text-muted-foreground">Supporting description</p>
    </div>
    <Button variant="primary" size="md">Primary action</Button>
  </header>

  <section className="flex flex-col gap-6">
    <h2>Section</h2>
    {/* content */}
  </section>
</main>
```

### Sidebar + content

```tsx
<div className="flex min-h-screen bg-background">
  <aside className="w-64 shrink-0 border-r border-divider bg-card p-6 flex flex-col gap-2">
    {/* navigation items */}
  </aside>
  <main className="flex-1 px-8 py-10 flex flex-col gap-12">
    {/* page content */}
  </main>
</div>
```

### Card grid (data tiles)

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => (
    <Card key={item.id} title={item.title} description={item.description} />
  ))}
</div>
```

### Form page

```tsx
<main className="mx-auto w-full max-w-[640px] px-6 py-10 flex flex-col gap-8">
  <h1>Form Title</h1>
  <section className="flex flex-col gap-4">
    <Input placeholder="Field label" value={v} onChange={setV} />
    <Input placeholder="Another field" value={v2} onChange={setV2} />
    <Dropdown placeholder="Select option" options={opts} value={sel} onChange={setSel} />
  </section>
  <div className="flex justify-end gap-3">
    <Button variant="outline" size="md">Cancel</Button>
    <Button variant="primary" size="md">Submit</Button>
  </div>
</main>
```

### Data table page

```tsx
<main className="mx-auto w-full max-w-[1200px] px-6 md:px-8 py-10 flex flex-col gap-6">
  <header className="flex items-center justify-between gap-4">
    <h1>Table Title</h1>
    <div className="flex items-center gap-3">
      <SearchInput placeholder="Search..." value={q} onChange={setQ} />
      <Button variant="primary" size="md">Add new</Button>
    </div>
  </header>
  <Table>
    <TableRow header>
      <TableHeaderCell>Column A</TableHeaderCell>
      <TableHeaderCell>Column B</TableHeaderCell>
    </TableRow>
    {rows.map(row => (
      <TableRow key={row.id}>
        <TableCell>{row.a}</TableCell>
        <TableCell>{row.b}</TableCell>
      </TableRow>
    ))}
  </Table>
</main>
```

---

## Visual do / don't

| Do | Don't |
|---|---|
| Use `bg-background`, `bg-card` for surfaces | Hard-code `#ffffff` or `bg-white` |
| Use `text-foreground` for body text | Use `text-gray-900` or `text-black` |
| Use `border-border` for dividers | Use `border-gray-200` |
| Use `rounded` (4px) by default | Use `rounded-xl` or `rounded-2xl` on data elements |
| Keep whitespace controlled: `gap-4`–`gap-6` inside sections | Over-pad with `gap-10`+ inside cards |
| One `variant="primary"` Button per context | Two or more primary buttons side by side |
| Separate sections with `gap-12` or a `border-divider` line | Use heavy drop shadows to separate sections |
| Use scale values — `max-w-5xl`, `h-80`, `w-64`, `gap-4`, `p-6`, `text-sm` | Use arbitrary brackets — `max-w-[1100px]`, `h-[317px]`, `gap-[14px]`, `text-[13px]` (won't compile in hosts without Tailwind; see AGENTS.md rule 3) |

---

## Component library

This design system ships 24 pre-built components. **Always use them — never recreate with raw HTML.**

Key components: `Button`, `Input`, `TextArea`, `SearchInput`, `Dropdown`, `DropdownMultiple`, `Checkbox`, `Radio`, `Toggle`, `DateInput`, `TimeInput`, `Tag`, `StatusTag`, `Chip`, `TabGroup`, `Card`, `Table` + `TableRow` + `TableHeaderCell` + `TableCell`, `Modal`, `BottomSheet`, `Alert`, `Toast`, `ToastStack`, `Notification`, `Badge`.

For props, variants, and usage rules → read `AGENTS.md` and `llms.txt` in this package.

### Setup (required)

```tsx
import "@sarunyu/system-one/styles.css";
```

If the screen looks unstyled, this import is missing.
