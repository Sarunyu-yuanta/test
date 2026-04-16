"use client";

import { forwardRef, type ReactNode } from "react";
import { Circle } from "@phosphor-icons/react";
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
    pad: "px-3 py-2.5",
    text: "text-sm",
    leading: "leading-5",
    font: "font-bold",
    gap: "gap-1.5",
    iconSize: "h-5 w-5",
    badgeClass:
      "min-w-[18px] px-[5.5px] text-[length:var(--text-xs)] leading-[var(--leading-4)]",
  },
  md: {
    pad: "px-2.5 py-2",
    text: "text-sm",
    leading: "leading-5",
    font: "font-bold",
    gap: "gap-1.5",
    iconSize: "h-[18px] w-[18px]",
    badgeClass:
      "min-w-[18px] px-[5.5px] text-[length:var(--text-xs)] leading-[var(--leading-4)]",
  },
  sm: {
    pad: "px-2 py-1.5",
    text: "text-xs",
    leading: "leading-4",
    font: "font-semibold",
    gap: "gap-1",
    iconSize: "h-4 w-4",
    badgeClass:
      "min-h-[14px] px-1 text-[length:var(--text-xxs)] leading-[var(--leading-3)]",
  },
};

function DefaultTabIcon({ className }: { className?: string }) {
  return <Circle aria-hidden="true" weight="regular" className={cn("shrink-0", className)} />;
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
  const s = sizeClasses[size] ?? sizeClasses.md;
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
        "relative flex min-w-[80px] select-none items-center justify-center bg-background transition-colors duration-150",
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
            "relative flex shrink-0 items-center justify-center rounded-[60px] bg-visual-red-default text-center font-normal text-on-visual-red",
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
  /** Tab definitions. Defaults to `[]` if omitted (invalid usage at runtime). */
  items?: TabItem[];
  activeId?: string;
  size?: TabSize;
  onChange?: (id: string) => void;
  className?: string;
}

export const TabGroup = forwardRef<HTMLDivElement, TabGroupProps>(
  function TabGroup(
    { items = [], activeId, size = "md", onChange, className },
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
