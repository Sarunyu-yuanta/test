import { CodeBlock } from "../components/CodeBlock";

// ── Section helpers ───────────────────────────────────────────────────────────

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[20px] font-bold text-foreground tracking-tight leading-tight">
      {children}
    </h2>
  );
}

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div
        className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold text-white mt-0.5"
        style={{ background: "var(--primary-action)" }}
      >
        {n}
      </div>
      <div className="flex flex-col gap-2 flex-1 min-w-0">
        <p className="text-[15px] font-semibold text-foreground leading-tight">{title}</p>
        {children}
      </div>
    </div>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex gap-2.5 rounded-lg px-4 py-3 text-[13px] leading-[1.6]"
      style={{ background: "var(--overlay-primary-8, #EFF4FF)", color: "var(--primary-action)" }}
    >
      <span className="shrink-0 font-bold">ℹ</span>
      <span>{children}</span>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export function InstallationPage() {
  return (
    <div className="flex flex-col gap-10 pb-20 max-w-4xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col gap-1.5">
        <h1 className="text-foreground text-[30px] font-bold tracking-tight leading-tight">
          Installation
        </h1>
        <p className="text-muted-foreground text-[15px]">
          ติดตั้งและตั้งค่า System One Design System ในโปรเจกต์ของคุณ
        </p>
      </div>

      {/* Requirements */}
      <div className="flex flex-col gap-4">
        <SectionHeading>Requirements</SectionHeading>
        <div className="grid grid-cols-3 gap-3">
          {[
            { name: "React", version: "≥ 18" },
            { name: "Tailwind CSS", version: "≥ 4" },
            { name: "Node.js", version: "≥ 18" },
          ].map(({ name, version }) => (
            <div
              key={name}
              className="flex flex-col gap-0.5 rounded-xl border border-border px-4 py-3"
            >
              <span className="text-[13px] font-semibold text-foreground">{name}</span>
              <span className="text-[12px] text-muted-foreground">{version}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Setup steps */}
      <div className="flex flex-col gap-4">
        <SectionHeading>Getting Started</SectionHeading>
        <div className="flex flex-col gap-6">

          {/* Step 1 */}
          <Step n={1} title="Install the package">
            <p className="text-[13px] text-muted-foreground">
              ติดตั้ง package ผ่าน package manager ที่ใช้อยู่
            </p>
            <CodeBlock
              tabs={[
                { label: "npm",  code: `npm install @sarunyu/system-one` },
                { label: "yarn", code: `yarn add @sarunyu/system-one` },
                { label: "pnpm", code: `pnpm add @sarunyu/system-one` },
              ]}
            />
          </Step>

          {/* Step 2 */}
          <Step n={2} title="Install peer dependencies">
            <p className="text-[13px] text-muted-foreground">
              Package นี้ต้องการ peer dependencies เหล่านี้ในโปรเจกต์ของคุณ
            </p>
            <CodeBlock
              code={`npm install react react-dom @phosphor-icons/react tailwindcss`}
            />
            <Note>
              หากโปรเจกต์ของคุณมี React และ Tailwind CSS อยู่แล้ว ข้ามขั้นตอนนี้ได้เลย
            </Note>
          </Step>

          {/* Step 3 */}
          <Step n={3} title="Add CSS to your entry file">
            <p className="text-[13px] text-muted-foreground">
              Import CSS ของ library เข้าใน entry file (เช่น <code className="text-[12px] bg-muted rounded px-1">main.tsx</code> หรือ <code className="text-[12px] bg-muted rounded px-1">index.tsx</code>)
            </p>
            <CodeBlock code={`import "@sarunyu/system-one/styles";`} />
          </Step>

          {/* Step 4 */}
          <Step n={4} title="Configure Tailwind CSS">
            <p className="text-[13px] text-muted-foreground">
              เพิ่ม path ของ library เข้า Tailwind content เพื่อให้ utility classes ทำงานได้ถูกต้อง
            </p>
            <CodeBlock
              code={`// tailwind.config.ts
export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/@sarunyu/system-one/dist/**/*.js",
  ],
}`}
            />
          </Step>
        </div>
      </div>

      {/* Usage */}
      <div className="flex flex-col gap-4">
        <SectionHeading>Usage</SectionHeading>
        <p className="text-[14px] text-muted-foreground">
          Import component ที่ต้องการได้โดยตรงจาก package
        </p>
        <CodeBlock
          tabs={[
            {
              label: "Button",
              code: `import { Button } from "@sarunyu/system-one"

export function MyComponent() {
  return (
    <Button variant="primary" size="md">
      Click me
    </Button>
  )
}`,
            },
            {
              label: "Dropdown",
              code: `import { useState } from "react"
import { Dropdown } from "@sarunyu/system-one"

const options = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
]

export function MyComponent() {
  const [value, setValue] = useState("")

  return (
    <Dropdown
      placeholder="Select option"
      options={options}
      value={value}
      onChange={setValue}
    />
  )
}`,
            },
            {
              label: "Input",
              code: `import { Input } from "@sarunyu/system-one"

export function MyComponent() {
  return (
    <Input
      placeholder="Enter text..."
      helperText="Helper text"
    />
  )
}`,
            },
          ]}
        />
      </div>

      {/* All exports */}
      <div className="flex flex-col gap-4">
        <SectionHeading>Available Components</SectionHeading>
        <p className="text-[14px] text-muted-foreground">
          ทุก component สามารถ import ได้จาก <code className="text-[13px] bg-muted rounded px-1.5 py-0.5">@sarunyu/system-one</code>
        </p>
        <div className="rounded-xl border border-border overflow-hidden">
          <div className="grid grid-cols-3 sm:grid-cols-4 divide-x divide-y divide-border text-[13px]">
            {[
              "Alert", "Avatar", "Badge", "BottomSheet",
              "Breadcrumb", "Button", "Card", "Checkbox",
              "Chip", "DateInput", "Dropdown", "DropdownMultiple",
              "Input", "Modal", "Notification", "OptionList",
              "Pagination", "Popover", "Radio", "SearchInput",
              "Tab", "Table", "Tag", "TextArea",
              "TimeInput", "Toast", "Toggle", "Tooltip",
            ].map((name) => (
              <div key={name} className="px-3 py-2 font-mono text-foreground bg-background hover:bg-muted transition-colors cursor-default">
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
