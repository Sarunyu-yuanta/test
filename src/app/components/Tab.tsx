
export type TabSize = "lg" | "md" | "sm";

export interface TabItem {
  id: string;
  title: string;
  disabled?: boolean;
}

// ─── Single Tab ───────────────────────────────────────────────────────────────

interface TabProps {
  title?: string;
  size?: TabSize;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const sizeClasses: Record<TabSize, { pad: string; text: string; leading: string; font: string }> = {
  lg: { pad: "px-[12px] py-[10px]", text: "text-[14px]", leading: "leading-[20px]", font: "font-bold" },
  md: { pad: "px-[10px] py-[8px]", text: "text-[14px]", leading: "leading-[20px]", font: "font-bold" },
  sm: { pad: "px-[8px] py-[6px]", text: "text-[12px]", leading: "leading-[16px]", font: "font-semibold" },
};

export function Tab({ title = "Tab", size = "md", active = false, disabled = false, onClick, className = "" }: TabProps) {
  const s = sizeClasses[size];

  const textColor = disabled
    ? "text-[#99a1af]"
    : active
      ? "text-[#0a6ee7]"
      : "text-[#6a7282]";

  const borderColor = active && !disabled ? "border-[#0a6ee7]" : "border-[rgba(0,0,0,0.1)]";

  const cursor = disabled ? "cursor-not-allowed" : "cursor-pointer";
  const hoverBg = !disabled && !active ? "hover:bg-[#f9fafb]" : "";

  return (
    <div
      role="tab"
      aria-selected={active}
      aria-disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      className={`relative bg-white flex items-center justify-center min-w-[80px] select-none transition-colors duration-150 ${s.pad} ${cursor} ${hoverBg} ${className}`}
      style={{ fontFamily: "'Noto Sans Thai', sans-serif" }}
    >
      {/* bottom border overlay */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 border-b-[1.5px] border-solid pointer-events-none ${borderColor}`}
      />
      <span
        className={`relative overflow-hidden text-ellipsis whitespace-nowrap text-center ${s.text} ${s.leading} ${s.font} ${textColor}`}
      >
        {title}
      </span>
    </div>
  );
}

// ─── Tab Group ────────────────────────────────────────────────────────────────

interface TabGroupProps {
  items: TabItem[];
  activeId?: string;
  size?: TabSize;
  onChange?: (id: string) => void;
  className?: string;
}

export function TabGroup({ items, activeId, size = "md", onChange, className = "" }: TabGroupProps) {
  return (
    <div role="tablist" className={`flex ${className}`}>
      {items.map((item) => (
        <Tab
          key={item.id}
          title={item.title}
          size={size}
          active={item.id === activeId}
          disabled={item.disabled}
          onClick={() => onChange?.(item.id)}
        />
      ))}
    </div>
  );
}
