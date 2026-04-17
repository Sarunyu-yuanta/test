# System One — Design System Guidelines

A production-ready React component library built with **Tailwind CSS v4** and CSS custom properties.
Designed for AI-powered generation tools: **Figma Make**, **Lovable**, and **V0**.

---

## Setup

```bash
npm install @sarunyu/system-one
```

### v0 / Next.js (App Router)

```tsx
// app/layout.tsx
import "@sarunyu/system-one/styles.css";
```

Components are pre-annotated with `"use client"`. Safe to import in Server Components, Client Components, and pages without any extra wrapper.

### Next.js (Pages Router)

```tsx
// pages/_app.tsx
import "@sarunyu/system-one/styles.css";
```

### Figma Make / Lovable / Vite

```tsx
// src/main.tsx
import "@sarunyu/system-one/styles.css";
```

Import components directly — no provider or wrapper needed:

```tsx
import { Button, Input, Tag, TabGroup, Chip } from "@sarunyu/system-one";
```

> **Font note:** The library defaults to Noto Sans Thai. If the project uses a different font, override `--font-sans` after the import:
> ```css
> :root { --font-sans: "Inter", sans-serif; }
> ```

> **Tailwind note:** The library ships pre-built CSS — no Tailwind config needed in the consuming project. If the project already uses Tailwind, styles coexist without conflict.

---

## General Rules

- Always import `@sarunyu/system-one/styles.css` — components have no styles without it
- Use `Input` for all text fields, never raw `<input>` elements
- Use `SearchInput` instead of `Input` for search or filter fields
- Use `Button variant="primary"` for the single main CTA per section
- Use `Button variant="outline"` for secondary actions alongside a primary
- Use `Button variant="plain"` for tertiary / low-emphasis actions
- Use `Chip` only in groups of 2 or more
- Use `TabGroup` (not bare `Tab`) for all tab navigation
- Prefer `var(--token-name)` over hard-coded color values
- Use `className` for layout overrides; do not override component internals with inline `style`
- Match `Card` variant to the viewport: `desktop` on wide layouts, `tablet` / `mobile` on narrow

---

## Design Tokens

All tokens are CSS custom properties available once the stylesheet is imported.

### Brand & Action Colors

| Token | Light value | Usage |
|---|---|---|
| `--primary-action` | `#0a6ee7` (p1-600) | Brand blue — primary buttons, links, active states |
| `--primary-action-hover` | `#0557c0` (p1-700) | Hover state for primary-action elements |
| `--primary-action-active` | `#044499` (p1-800) | Pressed/active state |
| `--primary-action-light` | p1-600 @ 6% | Subtle brand tint (chips, selections) |
| `--on-primary-action` | white | Text/icon color on primary-action surfaces |

### Semantic Surface & Text

| Token | Usage |
|---|---|
| `--background` | Page/card background |
| `--foreground` | Default body text |
| `--muted-foreground` | Placeholder, secondary, and caption text |
| `--subtle-text` | Labels and icon colors at lower emphasis |
| `--card` | Card surface background |
| `--popover` | Dropdown / popover surface |

### State Colors

| Token | Usage |
|---|---|
| `--destructive` | Error/danger (red) |
| `--success` | Success/confirmed (green) |
| `--disabled` | Disabled text |
| `--disabled-bg` | Disabled element background |
| `--hover-bg` | Row/item hover background |
| `--selected-bg` | Selected/active item background |
| `--selected-light-bg` | Lightly tinted selected background |
| `--border` | Default border |
| `--border-disabled` | Border on disabled elements |

### Typography

| Token | Value |
|---|---|
| `--font-sans` | Noto Sans Thai |
| `--text-xxs` | 9px |
| `--text-xs` | 12px |
| `--text-sm` | 14px |
| `--text-base` | 16px |
| `--text-lg` | 18px |
| `--text-xl` | 20px |
| `--text-2xl` | 24px |

Base font size: 16px. Use `--font-weight-medium` (500) for labels and headings, `--font-weight-normal` (400) for body text.

### Spacing

4px base grid. `--spacing-1` = 4px, `--spacing-2` = 8px, `--spacing-4` = 16px, up to `--spacing-20` = 80px.

### Border Radius

| Token | Value |
|---|---|
| `--radius` | 4px (default radius) |
| `--radius-sm` | 2px |
| `--radius-md` | 6px |
| `--radius-lg` | 8px |
| `--radius-xl` | 12px |
| `--radius-full` | 999px |

### Elevation / Shadow

| Token | Usage |
|---|---|
| `--elevation-card` | Card shadows |
| `--elevation-popover` | Dropdown / popover shadows |

---

## Component Reference

### Button

```tsx
// Primary — main action, one per section
<Button variant="primary" size="md">Submit</Button>

// Secondary — alternative action alongside a primary
<Button variant="outline" size="md">Cancel</Button>

// Tertiary — low-emphasis action
<Button variant="plain" size="sm">Learn more</Button>

// With icons
<Button variant="primary" size="md" leftIcon={<PlusIcon />}>Add item</Button>
<Button variant="outline" size="md" rightIcon={<ArrowRightIcon />}>Continue</Button>

// Icon-only — always include aria-label
<Button size="icon-md" aria-label="Settings"><GearIcon /></Button>
```

**Variants:** `primary` · `outline` · `plain` · `outline-black` · `plain-black`
**Label sizes:** `xs` · `sm` · `md` · `lg` · `xl`
**Icon-only sizes:** `icon-xs` · `icon-sm` · `icon-md` · `icon-lg` · `icon-xl`

---

### Input

Floating-label text input. The `placeholder` prop doubles as the floating label.

```tsx
<Input placeholder="Email address" value={email} onChange={setEmail} />
<Input placeholder="Amount" unit="THB" />
<Input placeholder="Username" required />
<Input placeholder="Password" type="password" />
<Input placeholder="Bio" showCount maxCount={160} />
<Input forceState="error" errorMessage="This field is required" placeholder="Email" />
<Input forceState="disabled" placeholder="Read only" />
```

**States:** `default` · `focus` · `error` · `disabled`

---

### TextArea

Multi-line text input. API mirrors `Input`.

```tsx
<TextArea placeholder="Description" value={text} onChange={setText} />
<TextArea placeholder="Tweet" showCount maxCount={280} />
<TextArea forceState="error" errorMessage="Required" placeholder="Notes" />
```

---

### SearchInput

Search field with a magnifying glass icon and clear (×) button.

```tsx
<SearchInput placeholder="Search events..." value={q} onChange={setQ} />
<SearchInput size="sm" placeholder="Filter by name..." />
```

**Sizes:** `lg` (default) · `sm`

---

### Dropdown

Single-select dropdown built on Radix UI Popover.

```tsx
<Dropdown
  placeholder="Select category"
  options={[
    { label: "Option A", value: "a" },
    { label: "Option B", value: "b" },
    { label: "Disabled", value: "c", disabled: true },
  ]}
  value={selected}
  onChange={setSelected}
/>
```

---

### DropdownMultiple

Multi-select dropdown with checkboxes.

```tsx
<DropdownMultiple
  placeholder="Select tags"
  options={options}
  values={selected}
  onChange={setSelected}
/>
```

---

### Tag

Compact inline label for categories, statuses, and filters.

```tsx
<Tag text="Active" variant="green" />
<Tag text="Draft" variant="yellow" />
<Tag text="Archived" variant="gray" />
<Tag text="Error" variant="red" />
<Tag text="New" variant="blue" size="small" />
<Tag text="Filter" close />
```

**Variants:** `blue` · `green` · `yellow` · `red` · `gray` · `lime`
**Sizes:** `large` (default) · `small`

Color semantics:
- `green` → positive, active, confirmed
- `red` → error, danger, blocked
- `yellow` → warning, pending, in-review
- `blue` → informational, featured
- `gray` → neutral, inactive, default

---

### StatusTag

Process-flow status indicator with a colored dot.

```tsx
<StatusTag type="success" />
<StatusTag type="processing" text="In progress" />
<StatusTag type="hold" />
<StatusTag type="error" />
<StatusTag type="stop" />
```

**Types:** `stop` · `success` · `hold` · `processing` · `error`

Use `StatusTag` for workflow states (approval pipelines, task statuses). Use `Tag` for categorical labels.

---

### Chip

Toggleable filter/selection chip. Always use in groups of 2 or more.

```tsx
// Single-select (radio-like)
<div className="flex gap-2">
  <Chip label="All" selected={filter === "all"} onClick={() => setFilter("all")} />
  <Chip label="Active" selected={filter === "active"} onClick={() => setFilter("active")} />
  <Chip label="Archived" selected={filter === "archived"} onClick={() => setFilter("archived")} />
</div>

// Multi-select (additive)
<Chip label="Design" type="multiple" selected={tags.includes("design")} onClick={() => toggle("design")} />
```

**Types:** `single` (default) · `multiple` (shows Plus → Check icon)
**Sizes:** `large` · `medium` · `small`

---

### Tab / TabGroup

Tabbed content navigation. Use `TabGroup` for all tab bars.

```tsx
<TabGroup
  items={[
    { id: "overview", title: "Overview" },
    { id: "details", title: "Details", icon: true },
    { id: "history", title: "History", notification: 3 },
    { id: "settings", title: "Settings", disabled: true },
  ]}
  activeId={activeTab}
  onChange={setActiveTab}
  size="md"
/>
```

**Sizes:** `lg` · `md` (default) · `sm`

---

### Card

Event/content card with banner image and metadata rows.

```tsx
<Card
  variant="desktop"
  title="Annual Conference 2024"
  date="Jun 23, 2024"
  time="08:30 - 12:00"
  location="Main Hall, Floor 7"
  count="150/200"
  tagStatus="registered"
  image="/banner.jpg"
/>
```

**Variants:** `desktop` (308px) · `tablet` (224px) · `mobile` (163px)
**Tag statuses:** `not-registered` · `registered` · `full`

---

### DateInput

Calendar date picker.

```tsx
<DateInput placeholder="Select date" mode="single" value={date} onChange={setDate} />
<DateInput mode="range" value={range} onChange={setRange} />
<DateInput mode="multiple" value={dates} onChange={setDates} />
```

**Modes:** `single` · `range` · `multiple`
**Variants:** `popover` · `modal`

---

### TimeInput

24-hour time picker.

```tsx
<TimeInput placeholder="Start time" value={time} onChange={setTime} />
<TimeInput mode="range" value={timeRange} onChange={setTimeRange} />
```

**Modes:** `single` · `range`

---

### OptionList

Scrollable option list — used inside custom dropdown implementations.

```tsx
<OptionList
  options={[
    { label: "Item A", value: "a" },
    { label: "Item B", value: "b", disabled: true },
  ]}
  selectedValue={value}
  onSelect={setValue}
/>

// Multi-select
<OptionList
  options={options}
  selectedValues={values}
  onToggle={toggleValue}
/>
```

---

## Dark Mode

Add `.dark` to the `<html>` or any ancestor element to activate dark theme:

```tsx
// Next.js
<html className={isDark ? "dark" : ""}>

// Vite / plain React
document.documentElement.classList.toggle("dark", isDark);
```

All components adapt automatically — no extra configuration needed.

---

## Customizing Tokens

Override any CSS variable after the stylesheet import:

```css
/* Custom brand color */
:root {
  --primary-action: #7c3aed;
  --primary-action-hover: #6d28d9;
  --primary-action-active: #5b21b6;
}

/* Custom font */
:root {
  --font-sans: "Inter", sans-serif;
}
```

---

## Tailwind CSS Integration

This library ships pre-built styles — **no Tailwind config required** in the consuming project.

If the project uses Tailwind v4, the CSS variables are fully compatible and can be referenced directly in Tailwind classes (e.g. `bg-[var(--primary-action)]`).
