"use client";

import { BellSimple, FunnelSimple } from "@phosphor-icons/react";
import { type ReactNode } from "react";
import { Button, type ButtonProps } from "./button";
import { cn } from "../lib/utils";

export type BadgeVariant = "button" | "notification";
export type BadgeNotificationState = "default" | "active" | "noti";

export interface BadgeProps extends Omit<ButtonProps, "children" | "size" | "variant" | "leftIcon"> {
  /** `button` for filter-style button badge, `notification` for bell badge. */
  variant?: BadgeVariant;
  /** Count shown in top-right badge. Hidden when <= 0. */
  count?: number;
  /** Max visible count before appending +. Default: 99 */
  maxCount?: number;
  /** Label used by `button` variant (non icon-only). Default: "Filter" */
  label?: string;
  /** Render icon-only button for `button` variant. Default: false */
  iconOnly?: boolean;
  /** Optional icon override for `button` variant. */
  icon?: ReactNode;
  /** Visual state for `notification` variant. */
  notificationState?: BadgeNotificationState;
  className?: string;
}

function formatCount(count: number, maxCount: number) {
  if (count > maxCount) return `${maxCount}+`;
  return String(count);
}

export function Badge({
  variant = "button",
  count = 0,
  maxCount = 99,
  label = "Filter",
  iconOnly = false,
  icon,
  notificationState,
  className,
  ...props
}: BadgeProps) {
  const hasCount = count > 0;
  const resolvedNotificationState: BadgeNotificationState =
    notificationState ?? (hasCount ? "noti" : "default");
  const notificationIsFilled =
    resolvedNotificationState === "active" || resolvedNotificationState === "noti";
  const showNotificationDot = resolvedNotificationState === "noti" && hasCount;

  const visualIcon =
    variant === "notification" ? (
      <BellSimple size={18} weight={notificationIsFilled ? "fill" : "regular"} />
    ) : (
      icon ?? <FunnelSimple size={18} weight="regular" />
    );

  return (
    <div className={cn("relative inline-flex", className)}>
      {variant === "notification" ? (
        <Button
          aria-label="Notification"
          size="icon-xs"
          variant="plain-black"
          className="text-icon-brand [&>span]:!h-[18px] [&>span]:!w-[18px]"
          {...props}
        >
          {visualIcon}
        </Button>
      ) : iconOnly ? (
        <Button
          aria-label={label}
          size="icon-md"
          variant={hasCount ? "outline" : "outline-black"}
          className={cn(hasCount && "bg-primary-action-light border-primary-action-light")}
          {...props}
        >
          {visualIcon}
        </Button>
      ) : (
        <Button
          size="md"
          leftIcon={visualIcon}
          variant={hasCount ? "outline" : "outline-black"}
          className={cn(hasCount && "bg-primary-action-light border-primary-action-light")}
          {...props}
        >
          {label}
        </Button>
      )}

      {(variant === "notification" ? showNotificationDot : hasCount) && (
        <div
          className={cn(
            "absolute flex h-[14px] min-h-[14px] min-w-[14px] items-center justify-center rounded-[60px]",
            variant === "notification"
              ? "-right-0.5 -top-0.5 bg-destructive px-[2.5px]"
              : "-right-1 -top-[7px] h-4 min-w-4 bg-primary-action",
          )}
        >
          <p className="text-center text-xs leading-4 font-normal text-text-default-white">
            {formatCount(count, maxCount)}
          </p>
        </div>
      )}
    </div>
  );
}
