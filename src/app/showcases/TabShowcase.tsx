import React, { useState } from "react";
import { Tab, TabGroup, TabSize } from "@/components/tab";

const sizes: TabSize[] = ["lg", "md", "sm"];

const FONT = { fontFamily: "'Noto Sans Thai', sans-serif" };

const demoTabs = [
  { id: "overview",  title: "Overview" },
  { id: "analytics", title: "Analytics" },
  { id: "reports",   title: "Reports" },
  { id: "settings",  title: "Settings", disabled: true },
];

export function TabShowcase() {
  const [activeIds, setActiveIds] = useState<Record<TabSize, string>>({
    lg: "overview",
    md: "overview",
    sm: "overview",
  });

  return (
    <div className="bg-white min-h-full">
      <h1 className="mb-1" style={FONT}>Tab Component</h1>
      <p className="text-[#6b7280] mb-12" style={FONT}>Sizes × States</p>

      {/* ── States grid ── */}
      {sizes.map((size) => (
        <div key={size} className="mb-12">
          <p className="text-[12px] text-[#9ca3af] uppercase tracking-wider mb-4" style={FONT}>
            {size === "lg" ? "Large" : size === "md" ? "Medium" : "Small"}
          </p>

          {/* Header row */}
          <div className="flex items-center gap-10 mb-3 pl-[100px]">
            {["Default", "Active", "Disabled"].map((label) => (
              <div
                key={label}
                className="w-[80px] text-center text-[11px] text-[#9ca3af] uppercase tracking-wider"
                style={FONT}
              >
                {label}
              </div>
            ))}
          </div>

          {/* Tab row */}
          <div className="flex items-center gap-10">
            <div className="w-[90px] shrink-0 text-[13px] text-[#6b7280]" style={FONT} />
            <div className="w-[80px] flex justify-center">
              <Tab title="Tab" size={size} active={false} />
            </div>
            <div className="w-[80px] flex justify-center">
              <Tab title="Tab" size={size} active={true} />
            </div>
            <div className="w-[80px] flex justify-center">
              <Tab title="Tab" size={size} disabled={true} />
            </div>
          </div>
        </div>
      ))}

      {/* ── Divider ── */}
      <div className="border-t border-[#e5e7eb] my-10" />

      {/* ── Interactive TabGroup ── */}
      <h2 className="mb-6" style={FONT}>Interactive</h2>

      {sizes.map((size) => (
        <div key={size} className="mb-8">
          <p className="text-[12px] text-[#9ca3af] uppercase tracking-wider mb-2" style={FONT}>
            {size === "lg" ? "Large" : size === "md" ? "Medium" : "Small"}
          </p>
          <TabGroup
            items={demoTabs}
            size={size}
            activeId={activeIds[size]}
            onChange={(id) => setActiveIds((prev) => ({ ...prev, [size]: id }))}
          />
        </div>
      ))}
    </div>
  );
}