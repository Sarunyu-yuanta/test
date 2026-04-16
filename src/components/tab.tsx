"use client";

import { forwardRef } from "react";
import { cn } from "../lib/utils";

export type TabSize = "lg" | "md" | "sm";

export interface TabItem {
  id: string;
  title: string;
  disabled?: boolean;
}

export interface TabProps {
  title?: string;
  size?: TabSize;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const sizeClasses: Record<
  TabSize,
  { pad: string; text: string; leading: string; font: string }
> = {
  lg: {
    pad: "px-[12px] py-[10px]",
    text: "text-[14px]",
    leading: "leading-[20px]",
    font: "font-bold",
  },
  md: {
    pad: "px-[10px] py-[8px]",
    text: "text-[14px]",
    leading: "leading-[20px]",
    font: "font-bold",
  },
  sm: {
    pad: "px-[8px] py-[6px]",
    text: "text-[12px]",
    leading: "leading-[16px]",
    font: "font-semibold",
  },
};

export const Tab = forwardRef<HTMLDivElement, TabProps>(function Tab(
  {
    title = "Tab",
    size = "md",
    active = false,
    disabled = false,
    onClick,
    className,
  },
  ref
) {
  const s = sizeClasses[size];
  const textColor = disabled
    ? "text-disabled"
    : active
      ? "text-primary-action"
      : "text-muted-foreground";
  const borderColor =
    active && !disabled ? "border-primary-action" : "border-border";
  const cursor = disabled ? "cursor-not-allowed" : "cursor-pointer";
  const hoverBg = !disabled && !active ? "hover:bg-hover-bg" : "";

  return (
    <div
      ref={ref}
      role="tab"
      aria-selected={active}
      aria-disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      className={cn(
        "relative flex min-w-[80px] select-none items-center justify-center bg-white transition-colors duration-150",
        s.pad,
        cursor,
        hoverBg,
        className
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 border-b-[1.5px] border-solid",
          borderColor
        )}
      />
      <span
        className={cn(
          "relative overflow-hidden text-ellipsis whitespace-nowrap text-center",
          s.text,
          s.leading,
          s.font,
          textColor
        )}
      >
        {title}
      </span>
    </div>
  );
});

Tab.displayName = "Tab";

export interface TabGroupProps {
  items: TabItem[];
  activeId?: string;
  size?: TabSize;
  onChange?: (id: string) => void;
  className?: string;
}

export const TabGroup = forwardRef<HTMLDivElement, TabGroupProps>(
  function TabGroup(
    { items, activeId, size = "md", onChange, className },
    ref
  ) {
    return (
      <div ref={ref} role="tablist" className={cn("flex", className)}>
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
);

TabGroup.displayName = "TabGroup";
