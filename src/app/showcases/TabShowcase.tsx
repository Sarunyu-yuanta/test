import { Tab, TabGroup, TabSize } from "@/components/tab";
import { useState } from "react";

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
  const [showIcon, setShowIcon] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const interactiveTabs = demoTabs.map((item, index) => ({
    ...item,
    icon: showIcon,
    notification: showNotification ? index + 1 : undefined,
  }));

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

      {/* ── Figma variants ── */}
      <h2 className="mb-6" style={FONT}>Figma Variants</h2>
      {sizes.map((size) => (
        <div key={`variant-${size}`} className="mb-8">
          <p className="text-[12px] text-[#9ca3af] uppercase tracking-wider mb-2" style={FONT}>
            {size === "lg" ? "Large" : size === "md" ? "Medium" : "Small"}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Tab title="Tab" size={size} icon />
              <span className="text-[11px] text-[#6b7280]" style={FONT}>Icon only</span>
            </div>
            <div className="flex items-center gap-2">
              <Tab title="Tab" size={size} notification={1} />
              <span className="text-[11px] text-[#6b7280]" style={FONT}>Notification only</span>
            </div>
            <div className="flex items-center gap-2">
              <Tab title="Tab" size={size} icon notification={1} />
              <span className="text-[11px] text-[#6b7280]" style={FONT}>Icon + Notification</span>
            </div>
          </div>
        </div>
      ))}

      {/* ── Divider ── */}
      <div className="border-t border-[#e5e7eb] my-10" />

      {/* ── Interactive TabGroup ── */}
      <h2 className="mb-6" style={FONT}>Interactive</h2>
      <div className="mb-6 flex flex-wrap items-center gap-6">
        <label className="inline-flex items-center gap-2 text-[13px] text-[#4b5563]" style={FONT}>
          <input
            type="checkbox"
            checked={showIcon}
            onChange={(event) => setShowIcon(event.target.checked)}
          />
          Show icon
        </label>
        <label className="inline-flex items-center gap-2 text-[13px] text-[#4b5563]" style={FONT}>
          <input
            type="checkbox"
            checked={showNotification}
            onChange={(event) => setShowNotification(event.target.checked)}
          />
          Show notification
        </label>
      </div>

      {sizes.map((size) => (
        <div key={size} className="mb-8">
          <p className="text-[12px] text-[#9ca3af] uppercase tracking-wider mb-2" style={FONT}>
            {size === "lg" ? "Large" : size === "md" ? "Medium" : "Small"}
          </p>
          <TabGroup
            items={interactiveTabs}
            size={size}
            activeId={activeIds[size]}
            onChange={(id) => setActiveIds((prev) => ({ ...prev, [size]: id }))}
          />
        </div>
      ))}
    </div>
  );
}