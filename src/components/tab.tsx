"use client";

import { forwardRef, type ReactNode } from "react";
import { cn } from "../lib/utils";

export type TabSize = "lg" | "md" | "sm";

export interface TabItem {
  id: string;
  title: string;
  disabled?: boolean;
  icon?: ReactNode | boolean;
  notification?: string | number;
}

export interface TabProps {
  title?: string;
  size?: TabSize;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode | boolean;
  notification?: string | number;
}

const sizeClasses: Record<
  TabSize,
  {
    pad: string;
    text: string;
    leading: string;
    font: string;
    gap: string;
    iconSize: string;
    badgeClass: string;
  }
> = {
  lg: {
    pad: "px-[12px] py-[10px]",
    text: "text-[14px]",
    leading: "leading-[20px]",
    font: "font-bold",
    gap: "gap-[6px]",
    iconSize: "size-[16.25px]",
    badgeClass: "min-w-[18px] px-[5.5px] text-[12px] leading-[16px]",
  },
  md: {
    pad: "px-[10px] py-[8px]",
    text: "text-[14px]",
    leading: "leading-[20px]",
    font: "font-bold",
    gap: "gap-[6px]",
    iconSize: "size-[14.63px]",
    badgeClass: "min-w-[18px] px-[5.5px] text-[12px] leading-[16px]",
  },
  sm: {
    pad: "px-[8px] py-[6px]",
    text: "text-[12px]",
    leading: "leading-[16px]",
    font: "font-semibold",
    gap: "gap-[4px]",
    iconSize: "size-[13px]",
    badgeClass: "size-[14px] text-[9px] leading-[14px]",
  },
};

function DefaultTabIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={cn("shrink-0", className)}
    >
      <circle cx="10" cy="10" r="8.125" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

export const Tab = forwardRef<HTMLDivElement, TabProps>(function Tab(
  {
    title = "Tab",
    size = "md",
    active = false,
    disabled = false,
    onClick,
    className,
    icon,
    notification,
  },
  ref
) {
  const s = sizeClasses[size];
  const hasIcon = Boolean(icon);
  const hasNotification = notification !== undefined && notification !== null;
  const renderedIcon = icon === true ? <DefaultTabIcon className={s.iconSize} /> : icon;
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
        (hasIcon || hasNotification) && s.gap,
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
      {hasIcon && (
        <span
          aria-hidden="true"
          className={cn(
            "relative shrink-0",
            s.iconSize,
            disabled ? "text-disabled" : active ? "text-primary-action" : "text-muted-foreground"
          )}
        >
          {renderedIcon}
        </span>
      )}
      <span
        className={cn(
          "relative overflow-hidden text-ellipsis whitespace-nowrap text-center",
          hasIcon && hasNotification && "flex-1 min-w-px",
          s.text,
          s.leading,
          s.font,
          textColor
        )}
      >
        {title}
      </span>
      {hasNotification && (
        <span
          className={cn(
            "relative flex shrink-0 items-center justify-center rounded-[60px] bg-[#FB2C36] text-center font-normal text-white",
            s.badgeClass
          )}
        >
          {notification}
        </span>
      )}
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
            icon={item.icon}
            notification={item.notification}
            onClick={() => onChange?.(item.id)}
          />
        ))}
      </div>
    );
  }
);

TabGroup.displayName = "TabGroup";
