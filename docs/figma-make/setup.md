## Package Installation

Add to package.json dependencies:

```json
{
  "dependencies": {
    "@sarunyu/system-one": "4.9.22",
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
- DO NOT create `theme-overrides.css` — use library brand colors as-is
- DO NOT install shadcn/ui or other component libraries
- DO NOT use `lucide-react` — use `@phosphor-icons/react` only
- Peer dep: react >= 18. No provider/wrapper needed (components ship with "use client")
- Dark mode: add `.dark` to any ancestor — all tokens adapt automatically

Full API reference: https://unpkg.com/@sarunyu/system-one/llms.txt
