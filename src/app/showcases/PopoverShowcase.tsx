import { useState } from "react";
import { Info, Bell, Gear, User, DotsThree } from "@phosphor-icons/react";
import { Button } from "@/components/button";
import { Popover } from "@/components/popover";

export function PopoverShowcase() {
  const [controlled, setControlled] = useState(false);

  return (
    <div className="min-h-screen bg-background px-6 py-8">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        <div>
          <h1 className="text-foreground">Popover Component</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            A floating panel that opens on click over any trigger. Supports four
            directions and three alignment positions.
          </p>
        </div>

        {/* Side variants */}
        <section className="rounded-lg border border-border p-4">
          <p className="mb-6 text-sm font-semibold text-foreground">
            Side variants
          </p>
          <div className="flex flex-wrap items-center gap-6">
            {(["top", "bottom", "left", "right"] as const).map((side) => (
              <div key={side} className="flex flex-col items-center gap-2">
                <p className="text-xs text-muted-foreground">side={side}</p>
                <Popover
                  side={side}
                  content={
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-medium text-foreground">
                        {side} popover
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Content appears on the {side}.
                      </p>
                    </div>
                  }
                >
                  <Button variant="outline" size="md">
                    {side}
                  </Button>
                </Popover>
              </div>
            ))}
          </div>
        </section>

        {/* Align variants */}
        <section className="rounded-lg border border-border p-4">
          <p className="mb-6 text-sm font-semibold text-foreground">
            Alignment variants (side=bottom)
          </p>
          <div className="flex flex-wrap items-start gap-6">
            {(["start", "center", "end"] as const).map((align) => (
              <div key={align} className="flex flex-col items-center gap-2">
                <Popover
                  side="bottom"
                  align={align}
                  content={
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-medium text-foreground">
                        align={align}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Popover is aligned to the {align}.
                      </p>
                    </div>
                  }
                >
                  <Button variant="outline" size="md">
                    {align}
                  </Button>
                </Popover>
                <p className="text-xs text-muted-foreground">align={align}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Rich content example */}
        <section className="rounded-lg border border-border p-4">
          <p className="mb-6 text-sm font-semibold text-foreground">
            Rich content
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Popover
              content={
                <div className="flex flex-col gap-3 min-w-[200px]">
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-muted-foreground" />
                    <p className="text-sm text-foreground">โปรไฟล์</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bell size={16} className="text-muted-foreground" />
                    <p className="text-sm text-foreground">การแจ้งเตือน</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gear size={16} className="text-muted-foreground" />
                    <p className="text-sm text-foreground">ตั้งค่า</p>
                  </div>
                  <div className="border-t border-border" />
                  <Button variant="plain" size="sm" className="justify-start px-0">
                    ออกจากระบบ
                  </Button>
                </div>
              }
            >
              <Button variant="outline" size="md" leftIcon={<User size={16} />}>
                บัญชีของฉัน
              </Button>
            </Popover>

            <Popover
              content={
                <div className="flex flex-col gap-2 min-w-[220px]">
                  <div className="flex items-start gap-2">
                    <Info
                      size={16}
                      weight="fill"
                      className="mt-0.5 shrink-0 text-primary-action"
                    />
                    <p className="text-sm text-foreground leading-relaxed">
                      ข้อมูลนี้จะถูกบันทึกอัตโนมัติทุก 30 วินาที และสามารถกู้คืนได้หากเกิดข้อผิดพลาด
                    </p>
                  </div>
                </div>
              }
            >
              <Button
                variant="outline"
                size="icon-md"
                aria-label="ข้อมูลเพิ่มเติม"
              >
                <Info size={18} />
              </Button>
            </Popover>

            <Popover
              content={
                <div className="flex flex-col gap-1 min-w-[140px]">
                  {["แก้ไข", "คัดลอก", "แชร์", "ลบ"].map((item) => (
                    <button
                      key={item}
                      className="w-full rounded px-2 py-1.5 text-left text-sm text-foreground hover:bg-[var(--overlay-primary-4)] transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              }
            >
              <Button
                variant="outline"
                size="icon-md"
                aria-label="เพิ่มเติม"
              >
                <DotsThree size={18} weight="bold" />
              </Button>
            </Popover>
          </div>
        </section>

        {/* Controlled example */}
        <section className="rounded-lg border border-border p-4">
          <p className="mb-2 text-sm font-semibold text-foreground">
            Controlled open state
          </p>
          <p className="mb-4 text-xs text-muted-foreground">
            Use <code className="font-mono text-foreground">open</code> and{" "}
            <code className="font-mono text-foreground">onOpenChange</code> to
            control the popover programmatically.
          </p>
          <div className="flex items-center gap-4">
            <Popover
              open={controlled}
              onOpenChange={setControlled}
              content={
                <div className="flex flex-col gap-3 min-w-[200px]">
                  <p className="text-sm font-medium text-foreground">
                    Controlled Popover
                  </p>
                  <p className="text-xs text-muted-foreground">
                    สถานะนี้ถูกควบคุมจากภายนอก
                  </p>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => setControlled(false)}
                  >
                    ปิด Popover
                  </Button>
                </div>
              }
            >
              <Button variant="outline" size="md">
                {controlled ? "กำลังแสดง" : "เปิด Popover"}
              </Button>
            </Popover>
            <Button
              variant="plain"
              size="md"
              onClick={() => setControlled((v) => !v)}
            >
              Toggle จากภายนอก
            </Button>
          </div>
        </section>

        {/* Props reference */}
        <section className="rounded-lg border border-border p-4">
          <p className="mb-2 text-sm font-semibold text-foreground">Props</p>
          <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-2 pr-4 text-left text-muted-foreground">Prop</th>
                  <th className="py-2 pr-4 text-left text-muted-foreground">Type</th>
                  <th className="py-2 pr-4 text-left text-muted-foreground">Default</th>
                  <th className="py-2 text-left text-muted-foreground">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  {
                    prop: "children",
                    type: "ReactNode",
                    def: "—",
                    desc: "The trigger element that opens the popover on click.",
                  },
                  {
                    prop: "content",
                    type: "ReactNode",
                    def: "—",
                    desc: "Content rendered inside the popover bubble.",
                  },
                  {
                    prop: "side",
                    type: '"top" | "bottom" | "left" | "right"',
                    def: '"bottom"',
                    desc: "Which side of the trigger the popover appears on.",
                  },
                  {
                    prop: "align",
                    type: '"start" | "center" | "end"',
                    def: '"start"',
                    desc: "Alignment of the popover relative to the trigger edge.",
                  },
                  {
                    prop: "sideOffset",
                    type: "number",
                    def: "4",
                    desc: "Gap in px between the trigger and the popover bubble.",
                  },
                  {
                    prop: "open",
                    type: "boolean",
                    def: "—",
                    desc: "Controlled open state. Omit for uncontrolled usage.",
                  },
                  {
                    prop: "onOpenChange",
                    type: "(open: boolean) => void",
                    def: "—",
                    desc: "Callback when the open state changes.",
                  },
                  {
                    prop: "className",
                    type: "string?",
                    def: "—",
                    desc: "Extra classes applied to the popover content bubble.",
                  },
                ].map(({ prop, type, def, desc }) => (
                  <tr key={prop}>
                    <td className="py-2 pr-4 font-mono text-foreground">{prop}</td>
                    <td className="py-2 pr-4 font-mono text-muted-foreground">{type}</td>
                    <td className="py-2 pr-4 text-muted-foreground">{def}</td>
                    <td className="py-2 text-muted-foreground">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
