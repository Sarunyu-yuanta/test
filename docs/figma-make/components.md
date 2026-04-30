# Components — @sarunyu/system-one

```tsx
import {
  Button,
  Input, TextArea, SearchInput,
  Dropdown, DropdownMultiple, OptionList,
  Checkbox, Toggle, Radio,
  DateInput, TimeInput,
  Tag, StatusTag, Chip,
  Tab, TabGroup,
  Card,
  Table, TableRow, TableHeaderCell, TableCell,
  Alert,
  Toast, ToastStack,
  Notification,
  Badge,
  Modal, BottomSheet,
  cn, useIsMobile,
} from "@sarunyu/system-one";
```

## Button
Variants: `primary` (main CTA, one per context) | `outline` (secondary) | `plain` (tertiary) | `outline-black` | `plain-black` (neutral tone for toolbars)
Sizes: `xs` `sm` `md` (desktop default) `lg` `xl` (mobile default) + icon variants `icon-xs`…`icon-xl`

```tsx
<Button variant="primary" size="md" leftIcon={<Plus />}>Add item</Button>
<Button size="icon-md" aria-label="Settings"><Gear /></Button>
```

## Input / TextArea
**`onChange` receives `(value: string)` — NOT an event.** Placeholder = floating label, no separate `<label>`.

```tsx
<Input placeholder="Email" value={email} onChange={setEmail} />
<Input placeholder="Amount" unit="THB" value={amt} onChange={setAmt} />
<Input placeholder="Bio" showCount maxCount={160} />
<Input placeholder="Email" forceState="error" errorMessage="Invalid email" />
```

`forceState`: `default` | `focus` | `error` | `disabled`

## SearchInput
```tsx
<SearchInput placeholder="Search…" value={q} onChange={setQ} size="lg" />
```

## Dropdown / DropdownMultiple
```tsx
<Dropdown placeholder="Select" options={[{label:"A",value:"a"}]} value={v} onChange={setV} />
<DropdownMultiple options={opts} value={selected} onChange={setSelected} />
```

DropdownOption shape is `{ label, value }` only — no `disabled` field. To disable the whole dropdown, pass `forceState="disabled"`. DropdownMultiple uses `value: string[]` (NOT `values`).

## Checkbox / Toggle / Radio
```tsx
<Checkbox checked={v} onChange={setV} label="Agree" />
<Checkbox checked="indeterminate" onChange={setAll} label="Select all" />
<Toggle checked={on} onChange={setOn} label="Notifications" description="Optional" />
<Radio name="plan" value="pro" checked={p==="pro"} onChange={() => setP("pro")} label="Pro" />
```

**API note** — Checkbox/Toggle/Radio all use `onChange: (next: boolean) => void` (NOT `onCheckedChange`, NOT an event). Radio's `onChange` fires with `true` when selected — ignore the arg and set the value directly: `onChange={() => setP("pro")}`.

Toggle sizes: `sm` (default with label) · `md` (default standalone)

## Tag vs StatusTag vs Chip
- **Tag** = category/filter pill. Variants: `blue` `green` `yellow` `red` `gray` `lime`. Sizes: `large` (default) | `small`. `close` is **visual only** (no `onClose` prop) — wrap in a clickable parent for dismiss behavior.
- **StatusTag** = workflow state with colored dot. Types: `stop` `success` `hold` `processing` `error`.
- **Chip** = toggleable filter. Always use in groups of 2+. Types: `single` (default) | `multiple`. Sizes: `large` `medium` `small`.

```tsx
<Tag text="Active" variant="green" />
<StatusTag type="processing" text="Uploading…" />
<Chip label="all" selected={f==="all"} onClick={() => setF("all")} />
```

## TabGroup
Always use `TabGroup` (never bare `<Tab>`). All tabs in a group share the same size.

```tsx
<TabGroup
  items={[
    { id: "overview", title: "Overview" },
    { id: "history", title: "History", notification: 3 },
    { id: "settings", title: "Settings", disabled: true },
  ]}
  activeId={active}
  onChange={setActive}
  size="md"
/>
```

Sizes: `lg` | `md` (default) | `sm`

## Card
Default variant is `"default"` — start every Card here. Specialized variants:
- `event` — requires `title` `date` `time` `location` `count` `tagStatus` (`not-registered` | `registered` | `full`)
- `news` — requires `title` `category` `date` (optional `image`)
- `social` — requires `title` `tags` `source` `date`
- `live` — requires `title` `source` `date` `duration`

Sizes (sets width): `desktop` (308px) · `tablet` (224px) · `mobile` (163px). For `default`, set width yourself via `className`.

## Table
Compose with `TableRow` + `TableHeaderCell` + `TableCell`. Sorting and selection are NOT automatic — parent owns state.

- `TableRow` props: `header` `selected` `onSelectedChange` `hoverable` `onClick`
- `TableHeaderCell` props: `type` (`text` | `icon` | `check`) `checkState` `onCheckChange` `sortable` (default true) `sortDirection` (`none` | `asc` | `desc`) `onSortChange` `contentAlign`
- `TableCell` props: `type` (`default` | `text-icon` | `text-image` | `tag` | `icon` | `button` | `checkbox`) — use `type="checkbox"` (NOT nested `<Checkbox>`) for selectable rows
- Pass content as children (`<TableCell>{value}</TableCell>`). Omitting children shows placeholder "Text label".

## DateInput / TimeInput
Modes: `single` (default) | `range` only. There is **no `multiple` mode**. Range mode uses different prop names — NOT `value`/`onChange`.

```tsx
// Single
<DateInput placeholder="Date" mode="single" value={d} onChange={setD} />
<TimeInput placeholder="Time" value={t} onChange={setT} />

// Range — different props!
<DateInput mode="range" dateRange={r} onRangeChange={setR} />
<TimeInput mode="range" startTime={s} endTime={e} onStartChange={setS} onEndChange={setE} />
```

Types: `value: Date | undefined` (DateInput single), `dateRange: { from?: Date; to?: Date }` (DateInput range), `value: { hour: 0–23, minute: 0–59 }` (TimeInput single). Auto-swaps to BottomSheet on mobile.

## Alert vs Toast vs Notification
| Component | Pattern | Lifetime |
|---|---|---|
| `Alert` | Inline, anchored to form/section | Persistent |
| `Toast` | Floating screen edge | Transient |
| `Notification` | Bell icon → popover panel | On-demand |

```tsx
<Alert status="warning" message="Profile incomplete" multiline />
<Toast status="success" message="Saved" onClose={dismiss} />
<Toast variant="broadcast" status="information" message="Maintenance Sat 02–04" />
<Notification groups={groups} onItemClick={handle} />
```

Alert statuses: `normal` (default) | `information` | `success` | `warning` | `critical`
Toast statuses: `information` | `success` | `warning` | `critical`. Variants: `default` | `broadcast`.

**Alert limitations:** `message` is a single string — no title, no multiple paragraphs. For multi-paragraph notices or disclaimers, do NOT build a custom component with inline styles. Use token classes:

```tsx
// ✅ multi-paragraph notice / disclaimer
<div className="bg-default-secondary border border-border rounded-xl p-6 flex gap-3">
  <Warning size={16} weight="fill" className="text-icon-default-secondary shrink-0 mt-0.5" />
  <div className="flex flex-col gap-2">
    <p className="text-sm font-medium text-foreground">คำเตือนความเสี่ยง</p>
    <p className="text-xs text-muted-foreground leading-normal">Paragraph 1…</p>
    <p className="text-xs text-muted-foreground leading-normal">Paragraph 2…</p>
  </div>
</div>
```

## Badge
- `variant="button"` (default) — filter button with count. Use in toolbars.
- `variant="notification"` — INTERNAL only. Never wire your own onClick. For a notification bell + list, use `<Notification>`.

```tsx
<Badge label="Filter" count={3} onClick={openFilter} />
```

## Modal
Caller owns open state and supplies backdrop. Widths fixed by variant — DON'T enlarge.
- `dialog` (375px) — confirmation (title + text + 1–2 buttons)
- `content` (343px) — custom body via children
- `alert` (343px) — status moment, requires `alertStatus` (`warning` | `success` | `danger`)

```tsx
{open && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
    <Modal variant="dialog" actionLayout="double" title="Delete?" description="Can't undo."
      primaryLabel="Delete" secondaryLabel="Cancel"
      onPrimaryClick={confirm} onSecondaryClick={close} onClose={close} />
  </div>
)}
```

Action layout: `none` | `single` | `double`. Only one primary per modal.

## BottomSheet
Mobile-only (use Modal on desktop). Built on Vaul — ships own backdrop/portal.

```tsx
<BottomSheet open={open} onOpenChange={setOpen} title="Filters" rightSide="icon">
  <div>{/* content */}</div>
</BottomSheet>
```

- `headerType`: `text` | `icon` (+ `leftIcon`) | `image` (+ `imageSrc`)
- `rightSide`: `icon` (close) | `action` (+ `actionLabel` + `onActionClick`) | `none`
- `showHandle` default `true`, `showHeader` default `true`

## OptionList
Raw option rows for custom dropdowns or sidebar menus. Otherwise prefer `Dropdown`.

```tsx
<OptionList options={opts} selectedValue={v} onSelect={setV} />
```
