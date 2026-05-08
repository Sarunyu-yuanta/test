# Components — @sarunyu/system-one

```tsx
import {
  Button,
  Input, TextArea, SearchInput,
  Dropdown, DropdownMultiple, OptionList,
  Checkbox, Toggle, Radio,
  DateInput, TimeInput,
  Slider,
  UploadArea, UploadItem,
  Avatar, AvatarStack,
  Breadcrumb,
  Pagination, PaginationBanner, PaginationCarousel,
  Tooltip, Popover,
  Tag, StatusTag, Chip,
  Tab, TabGroup,
  Card,
  Table, TableHead, TableBody, TableRow, TableHeaderCell, TableCell,
  LinearProgress, CircleProgress,
  Alert,
  Toast, Toaster,
  Notification,
  Badge,
  Modal, BottomSheet,
  List, ListItem,
  cn, useIsMobile,
} from "@sarunyu/system-one";
```

## Button
Variants: `primary` (main CTA, one per context) | `outline` (secondary) | `plain` (tertiary) | `outline-black` | `plain-black` (neutral tone for toolbars)
Sizes: `xs` `sm` `md` (desktop default) `lg` `xl` (mobile default) + icon variants `icon-xs`…`icon-xl`

```tsx
<Button variant="primary" size="md" leftIcon={<Plus />}>Add item</Button>
<Button size="icon-md" aria-label="Settings"><GearIcon /></Button>
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
Compose with `TableHead` + `TableBody` + `TableRow` + `TableHeaderCell` + `TableCell`. Sorting and selection are NOT automatic — parent owns state. **Always wrap header rows in `<TableHead>` and body rows in `<TableBody>`** to avoid DOM nesting warnings.

**Checkbox selection — MUST wire `selected` + `onSelectedChange` on every `TableRow`, otherwise the checkbox does nothing:**

```tsx
const [sel, setSel] = useState<Set<string>>(new Set());
const toggle = (id: string) =>
  setSel(prev => { const s = new Set(prev); s.has(id) ? s.delete(id) : s.add(id); return s; });
const allSelected = rows.length > 0 && rows.every(r => sel.has(r.id));

<Table>
  <TableHead>
    <TableRow>
      <TableHeaderCell type="check" sortable={false}
        checkState={allSelected ? true : sel.size > 0 ? "indeterminate" : false}
        onCheckChange={(v) => setSel(v ? new Set(rows.map(r => r.id)) : new Set())} />
      <TableHeaderCell>Name</TableHeaderCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {rows.map(row => (
      <TableRow key={row.id} hoverable
        selected={sel.has(row.id)}
        onSelectedChange={() => toggle(row.id)}>
        <TableCell type="checkbox" />
        <TableCell>{row.name}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

**Sorting — MUST wire `sortDirection` + `onSortChange` to parent state, otherwise the icon never changes:**

```tsx
type SortDir = "none" | "asc" | "desc";
const [sortCol, setSortCol] = useState<string | null>(null);
const [sortDir, setSortDir] = useState<SortDir>("none");

const handleSort = (col: string) => (next: SortDir) => {
  setSortCol(col);
  setSortDir(next);
};

<TableHead>
  <TableRow>
    <TableHeaderCell
      sortable
      sortDirection={sortCol === "name" ? sortDir : "none"}
      onSortChange={handleSort("name")}
    >Name</TableHeaderCell>
    <TableHeaderCell
      sortable
      sortDirection={sortCol === "date" ? sortDir : "none"}
      onSortChange={handleSort("date")}
    >Date</TableHeaderCell>
  </TableRow>
</TableHead>
```

`onSortChange` receives `"asc"` | `"desc"` | `"none"`. **Never pass a hardcoded `sortDirection` or a no-op `onSortChange={() => {}}`** — the component is fully controlled.

- `TableHeaderCell` props: `type` (`text` | `icon` | `check`) `checkState` `onCheckChange` `sortable` (default true) `sortDirection` (`none` | `asc` | `desc`) `onSortChange`
- `TableRow` props: `selected` `onSelectedChange` (required for checkbox to work) `hoverable` `onClick`
- `TableCell` props: `type` (`default` | `text-icon` | `text-image` | `tag` | `icon` | `button` | `checkbox`) `contentAlign` (`start` | `center`) — use `type="checkbox"` (NOT nested `<Checkbox>`) for selectable rows
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
Alert props: `status?` · `title?` (bold header above message) · `message` (required) · `multiline?` · `className?`

```tsx
// single-line
<Alert status="warning" message="Profile incomplete" />
// with title (for notices, disclaimers)
<Alert status="normal" title="คำเตือนความเสี่ยง" message="การลงทุนมีความเสี่ยง..." multiline />
```
Toast statuses: `information` | `success` | `warning` | `critical`. Variants: `default` | `broadcast`.

**Three toast components — do NOT confuse them:**

| Component | Role | Has auto-dismiss? | Has fixed position? |
|---|---|---|---|
| `Toaster` | Full managed container — place once at app root | ✅ `duration` + `onRemove` | ✅ top-right desktop / top-center mobile |
| `ToastStack` | Bare list renderer — custom layout only | ❌ | ❌ |
| `Toast` | Single item only — no state management | ❌ | ❌ |

**Always use `Toaster` for normal toast usage:**
```tsx
// App.tsx or layout root
const [toasts, setToasts] = useState<Array<ToastProps & { id: string }>>([]);
const remove = (id: string) => setToasts(t => t.filter(x => x.id !== id));
const add = (t: Omit<ToastProps, "onClose"> & { id: string }) => setToasts(p => [...p, t]);

<Toaster items={toasts} onRemove={remove} duration={4000} />

// To trigger a toast:
add({ id: crypto.randomUUID(), status: "success", message: "Saved" });
```

`ToastStack` has NO `duration` / `onRemove` props — those belong to `Toaster` only. `Toaster` still exists and was never removed.

**`onRemove` is required for toasts to dismiss.** Without it, toasts stay on screen forever — neither auto-dismiss nor the × button will work. Always wire it up:
```tsx
const remove = (id: string) => setToasts(t => t.filter(x => x.id !== id));
<Toaster items={toasts} onRemove={remove} />
```


## Avatar / AvatarStack
Three display types: `"photo"` (default) | `"text"` (initials) | `"placeholder"` (generic silhouette).
Seven sizes: `"xxs"` (16px) | `"xs"` (20px) | `"s"` (24px) | `"m"` (32px, default) | `"l"` (40px) | `"xl"` (48px) | `"xxl"` (56px).

```tsx
// Photo with online dot
<Avatar src={user.photo} alt={user.name} status />

// Initials
<Avatar type="text" initials="JD" size="m" />

// Placeholder
<Avatar type="placeholder" size="s" />

// Stack — items can mix types; max= caps visible count
<AvatarStack
  items={[
    { src: u1.photo, alt: u1.name },
    { src: u2.photo, alt: u2.name },
    { type: "text", initials: "JD" },
    { type: "placeholder" },
  ]}
  size="medium"
  max={5}
/>
```

AvatarStack sizes: `"small"` (16px avatars) | `"medium"` (20px) | `"large"` (24px).
`status` prop (online dot) is available on `photo` type only.
**Never override avatar `width`/`height` or apply color/filter styles** — use the `size` prop only.
**Use the same `size` for all avatars within one list** — mixing sizes breaks visual consistency.

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
Mobile-only (use Modal on desktop). Built on Vaul — ships own backdrop/portal. **No lazy-mounting needed** — the component suppresses its internal portal until first open automatically.

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

## Breadcrumb
Horizontal navigation trail with `/` separators. Last item = current page (brand color, no link). Pass `href` on every item except the last.

```tsx
<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Detail" },
  ]}
/>
```

`items`: `{ label: string; href?: string }[]` — required. `className?` for layout overrides only.

## Pagination

Three variants — use the one that matches the content type.

| Component | Use for |
|---|---|
| `<Pagination>` | Numbered pages — datasets, search results, news lists |
| `<PaginationBanner>` | Banner/hero slide dot indicator |
| `<PaginationCarousel>` | Free-scroll carousel progress bar |

```tsx
// Numbered pagination
<Pagination totalPages={10} currentPage={currentPage} onPageChange={setCurrentPage} />

// Banner slide dots (active dot is a wider pill)
<PaginationBanner count={5} activeIndex={bannerIndex} onIndexChange={setBannerIndex} />

// Carousel — pill slides as user scrolls
<PaginationCarousel
  count={total}
  activeIndex={activeIndex}
  viewRatio={clientWidth / scrollWidth}
  scrollProgress={scrollLeft / maxScroll}
  onIndexChange={goToSlide}
/>
```

Props:
- `Pagination` — `totalPages`, `currentPage`, `onPageChange?`, `className?`. When `totalPages > 5`, pages 4…(n-1) collapse behind a `…` dropdown.
- `PaginationBanner` — `count`, `activeIndex`, `onIndexChange?`, `className?`.
- `PaginationCarousel` — `count`, `activeIndex`, `viewRatio?` (pill width ratio, default `1/count`), `scrollProgress?` (0–1, overrides index-based position), `onIndexChange?`, `className?`.

## Tooltip

Dark-bubble hint shown on hover. `children` = trigger element; `content` = bubble text.

```tsx
<Tooltip content="Delete this item">
  <Button variant="outline" size="icon-md" aria-label="Delete"><TrashIcon size={16} /></Button>
</Tooltip>
```

Props:
- `children` — trigger (`ReactNode`, required)
- `content` — bubble content (`ReactNode`, required)
- `side` — `"top"` | `"bottom"` | `"left"` | `"right"` (default `"top"`)
- `align` — `"start"` | `"center"` | `"end"` (default `"center"`)
- `delayDuration` — ms before tooltip shows (default `300`)
- `sideOffset` — gap in px between trigger and bubble (default `6`)
- `className?` — layout-only classes on the bubble

## Popover

Floating panel that opens on **click** over any trigger element. Pass the trigger as `children` and the panel body as `content`.

```tsx
<Popover content={<div>Panel content here</div>}>
  <Button variant="outline" size="md">Open</Button>
</Popover>

// With side and alignment
<Popover side="top" align="center" content={<p className="text-sm text-foreground">Above</p>}>
  <Button variant="outline" size="md">Open</Button>
</Popover>

// Controlled
<Popover open={open} onOpenChange={setOpen} content={<p>Controlled panel</p>}>
  <Button variant="outline" size="md">Open</Button>
</Popover>
```

Props:
- `children` — trigger element (`ReactNode`, required)
- `content` — panel body (`ReactNode`, required)
- `side` — `"top"` | `"bottom"` | `"left"` | `"right"` (default `"bottom"`)
- `align` — `"start"` | `"center"` | `"end"` (default `"start"`)
- `sideOffset` — gap in px between trigger and panel (default `4`)
- `open` — controlled open state
- `onOpenChange` — `(open: boolean) => void`
- `className?` — layout-only classes on the panel bubble

## Slider
Range input in three track heights, single-thumb or two-thumb range. Never `<input type="range">`.

```tsx
// Single thumb
const [value, setValue] = useState(50)
<Slider value={value} onChange={setValue} />
<Slider size="sm" value={value} onChange={setValue} />
<Slider size="lg" showSteps value={value} onChange={setValue} />
<Slider disabled value={value} onChange={setValue} />

// Two-thumb range
const [range, setRange] = useState<[number, number]>([25, 75])
<Slider type="range" rangeValue={range} onRangeChange={setRange} />
```

Props: `size` (`"sm"` 4px | `"md"` 8px default | `"lg"` 12px), `type` (`"single"` default | `"range"`), `disabled`, `showSteps`, `min` (default 0), `max` (default 100), `step` (default 1), `value`, `rangeValue: [number, number]`, `defaultValue` (50), `defaultRangeValue` ([25, 75]), `onChange(value)`, `onRangeChange([start, end])`, `className`.

## LinearProgress / CircleProgress
Deterministic progress indicators. `value` is 0–100 (clamped). Never `<progress>` HTML.

```tsx
<LinearProgress value={65} />
<LinearProgress value={30} className="w-64" />

<CircleProgress value={75} />           // lg (128 px, default) — shows % label
<CircleProgress value={50} size="md" /> // md (48 px) — shows % label
<CircleProgress value={30} size="sm" /> // sm (24 px) — arc only, no label
```

Props `LinearProgress`: `value`, `className`.
Props `CircleProgress`: `value`, `size` (`"sm"` | `"md"` | `"lg"` default), `className`.

## UploadArea / UploadItem
Upload dropzone and per-file status rows. Never hand-roll dashed upload areas.

```tsx
const inputRef = useRef<HTMLInputElement>(null)
<UploadArea onClick={() => inputRef.current?.click()} />
<UploadArea disabled />

// Text variant — compact inline row
<UploadItem variant="text" status="loading" fileName="report.pdf" progress={42} />
<UploadItem variant="text" status="success" fileName="report.pdf" onDelete={handleDelete} />
<UploadItem variant="text" status="error"   fileName="report.pdf" errorText="File too large" onDelete={handleDelete} />

// Card variant — bordered card with file size + separate delete button
<UploadItem variant="card" status="loading" fileName="photo.png" fileSize="1.66KB" progress={42} />
<UploadItem variant="card" status="success" fileName="photo.png" fileSize="1.66KB" onDelete={handleDelete} />
<UploadItem variant="card" status="error"   fileName="photo.png" fileSize="1.66KB" errorText="Upload failed" onDelete={handleDelete} />
```

Props `UploadArea`: `disabled`, `label` (default `"อัปโหลดไฟล์"`), plus native `<div>` props.
Props `UploadItem`: `variant` (`"text"` default | `"card"`), `status` (`"loading"` | `"success"` | `"error"`), `fileName`, `fileSize` (card only), `errorText`, `progress` (0–100), `onDelete`, `className`.

## List / ListItem

Vertical list of rows with optional leading icon, action link, and trailing element. Never hand-roll `<ul>` / `<li>` rows for this pattern.

```tsx
<List>
  <ListItem label="Settings" />
  <ListItem label="Profile" leading={<UserIcon size={24} />} />
  <ListItem label="Documents" trailing={<CaretRightIcon size={24} />} onClick={() => navigate("/docs")} />
  <ListItem label="Account" action="Edit" onAction={openEdit} />
</List>
```

Props `ListItem`: `label` (required), `leading?` (ReactNode — left slot, icon or avatar), `trailing?` (ReactNode — right slot), `action?` (string — link label on the right), `onAction?` (fires when action is clicked), `highlighted?` (gray background), `onClick?` (makes row tappable — press state applied automatically), `className`.
Props `List`: `children`, `className`.
