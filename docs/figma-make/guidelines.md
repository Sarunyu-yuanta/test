# System One — Core Rules

1. **Use library components for every element it provides.** Never recreate Button, Input, Tag, Dropdown, Card, Tab, Checkbox, Toggle, Radio, DateInput, TimeInput, Table, SearchInput, TextArea, Chip, Modal, BottomSheet, Alert, Toast, Notification, Badge as raw HTML.

2. **Never override component built-in styles.** Components manage their own colors, shadows, padding, radius, typography. `className` on library components is for **layout only** (`w-*`, `max-w-*`, `flex`, `grid`, `gap-*`, `m-*`, `col-span-*`). Never pass `bg-*`, `shadow-*`, `text-*`, `p-*`, `rounded-*`, `border-*`.

3. **Use design-token classes.** Never `text-blue-600`, `bg-gray-100`, `text-[#3b82f6]`. If a token isn't listed in tokens.md, use `text-foreground` / `bg-card`.

4. **Icons: `@phosphor-icons/react` only.**
   ```tsx
   import { House, MagnifyingGlass, CaretDown } from "@phosphor-icons/react";
   ```
   Props: `size`, `weight` (`regular` | `bold` | `fill` | `duotone` | `light` | `thin`), `className`.

5. **No arbitrary bracket values for spacing/sizing/typography.**
   - Forbidden: `h-[317px]`, `w-[272px]`, `gap-[14px]`, `p-[10px]`, `text-[13px]`, `leading-[22px]`, `rounded-[10px]`, `top-[7px]`
   - Allowed: scale utilities (`h-80`, `w-64`, `gap-4`, `p-6`, `text-sm`, `leading-6`, `rounded-lg`)
   - 4px scale: `0.5 / 1 / 2 / 3 / 4 / 5 / 6 / 8 / 10 / 12 / 16 / 20 / 24`
   - Container-width safelist: `max-w-[480px]`, `max-w-[640px]`, `max-w-[720px]`, `max-w-[800px]`, `max-w-[960px]`, `max-w-[1024px]`, `max-w-[1200px]`, `max-w-[1280px]`, `max-w-[1440px]` — otherwise use `max-w-{xs…7xl}`

6. **Layout = plain `<div>` + Tailwind utilities.** The library does NOT ship `Page`, `Section`, `Stack`, `CardGrid`, `Toolbar` — they don't exist. Use `flex`, `grid`, `container`, `max-w-*`, `gap-*`, `p-*`, `mx-auto`.

## Responsive rule (CRITICAL)

On mobile (< 768px), content/action-heavy modals MUST render as `<BottomSheet>`, not `<Modal>`. Use `useIsMobile()` to branch.

- Mobile → BottomSheet: login/signup, settings, multi-field forms, option pickers, action menus
- Mobile → Modal OK: `variant="alert"` (success/warning/danger), short `variant="dialog"` confirmations
- Desktop (≥768px) → always Modal
