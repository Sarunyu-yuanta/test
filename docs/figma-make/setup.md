## Package Installation

Add to package.json dependencies:

```json
{
  "dependencies": {
    "@sarunyu/system-one": "4.9.16",
    "@phosphor-icons/react": "^2.1.7"
  }
}
```

## Setup (src/main.tsx — BEFORE any app code)

```tsx
import "./index.css";
import "@sarunyu/system-one/styles.css";
```

Rules:
- DO NOT install shadcn/ui or other component libraries
- DO NOT use `lucide-react` — use `@phosphor-icons/react` only
- Peer dep: react >= 18. No provider/wrapper needed (components ship with "use client")
- Dark mode: add `.dark` to any ancestor — all tokens adapt automatically

## Brand color (non-blue designs)

If the design uses a brand color other than the library default (P1 blue), you **MUST** create `src/theme-overrides.css` and import it — never hardcode hex values.

```css
/* src/theme-overrides.css */
:root {
  --primary-action: #C48B3C;        /* brand 600 */
  --primary-action-hover: #A87530;  /* brand 700 */
  --primary-action-active: #8C5E20; /* brand 800 */
  /* Also override light/muted — use rgb(r g b / alpha%) NOT color-mix() */
  --primary-action-light: rgb(196 139 60 / 6%);
  --primary-action-muted: rgb(196 139 60 / 10%);
}
.dark {
  --primary-action: #E5A84F;
  --primary-action-hover: #F0BB6A;
  --primary-action-active: #D49030;
  --primary-action-light: rgb(229 168 79 / 10%);
  --primary-action-muted: rgb(229 168 79 / 15%);
}
```

```tsx
// src/main.tsx — import order matters
import "./index.css";
import "@sarunyu/system-one/styles.css";
import "./theme-overrides.css";   // ← after library styles
```

Then use token classes throughout — **never raw hex**:
```tsx
// ✅ correct
<Button variant="primary">…</Button>          // picks up brand color automatically
<p className="text-brand">ผลิตภัณฑ์ของเรา</p>
<div className="bg-primary-action-light">…</div>

// ❌ wrong
<p style={{ color: "#C48B3C" }}>…</p>
<p className="text-[#C48B3C]">…</p>
```

Full API reference: https://unpkg.com/@sarunyu/system-one/llms.txt
