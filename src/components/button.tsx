"use client";

import React, { useState, forwardRef } from "react";
import { cn } from "../lib/utils";

export type ButtonLabelSize = "xs" | "sm" | "md" | "lg" | "xl";
export type ButtonIconSize  = "icon-xs" | "icon-sm" | "icon-md" | "icon-lg" | "icon-xl";
export type ButtonSize      = ButtonLabelSize | ButtonIconSize;

export type ButtonVariant = "primary" | "outline" | "plain" | "outline-black" | "plain-black" | "disabled";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?:     ButtonSize;
  variant?:  ButtonVariant;
  children?: React.ReactNode;
  /** Icon to the LEFT of the label (label-size buttons only) */
  leftIcon?:  React.ReactNode;
  /** Icon to the RIGHT of the label (label-size buttons only) */
  rightIcon?: React.ReactNode;
}

// ─── Label-size maps ──────────────────────────────────────────────────────────
const labelIconSizeClass: Record<ButtonLabelSize, string> = {
  xs: "size-[16px]",
  sm: "size-[18px]",
  md: "size-[18px]",
  lg: "size-[20px]",
  xl: "size-[20px]",
};

const gapClass: Record<ButtonLabelSize, string> = {
  xs: "gap-[2px]",
  sm: "gap-[2px]",
  md: "gap-[2px]",
  lg: "gap-[4px]",
  xl: "gap-[4px]",
};

const textSizeClass: Record<ButtonLabelSize, string> = {
  xs: "text-[12px] leading-[18px]",
  sm: "text-[14px] leading-[20px]",
  md: "text-[14px] leading-[20px]",
  lg: "text-[14px] leading-[20px]",
  xl: "text-[14px] leading-[20px]",
};

const roundedLabelClass: Record<ButtonLabelSize, string> = {
  xs: "rounded-[4px]",
  sm: "rounded-[6px]",
  md: "rounded-[6px]",
  lg: "rounded-[8px]",
  xl: "rounded-[8px]",
};

function getPaddingClasses(
  size: ButtonLabelSize,
  hasLeft: boolean,
  hasRight: boolean,
): readonly [string, string, string] {
  const pyMap: Record<ButtonLabelSize, string> = {
    xs: "py-[4px]",
    sm: "py-[4px]",
    md: "py-[6px]",
    lg: "py-[8px]",
    xl: "py-[10px]",
  };
  const pxMap: Record<ButtonLabelSize, { l: string; r: string }> = {
    xs: { l: "pl-[6px]",  r: "pr-[6px]"  },
    sm: { l: "pl-[8px]",  r: "pr-[8px]"  },
    md: { l: "pl-[10px]", r: "pr-[10px]" },
    lg: { l: "pl-[14px]", r: "pr-[14px]" },
    xl: { l: "pl-[16px]", r: "pr-[16px]" },
  };
  const reducedMap: Record<ButtonLabelSize, { l: string; r: string }> = {
    xs: { l: "pl-[6px]",  r: "pr-[6px]"  },
    sm: { l: "pl-[6px]",  r: "pr-[6px]"  },
    md: { l: "pl-[8px]",  r: "pr-[8px]"  },
    lg: { l: "pl-[10px]", r: "pr-[10px]" },
    xl: { l: "pl-[12px]", r: "pr-[12px]" },
  };
  return [
    hasLeft ? reducedMap[size].l : pxMap[size].l,
    hasRight ? reducedMap[size].r : pxMap[size].r,
    pyMap[size],
  ] as const;
}

// ─── Icon-size specs (from Figma) ─────────────────────────────────────────────
const iconSizeSpec: Record<ButtonIconSize, { btn: string; icon: number; rounded: string }> = {
  "icon-xs": { btn: "size-[26px]", icon: 16, rounded: "rounded-[4px]" },
  "icon-sm": { btn: "size-[28px]", icon: 18, rounded: "rounded-[6px]" },
  "icon-md": { btn: "size-[32px]", icon: 18, rounded: "rounded-[6px]" },
  "icon-lg": { btn: "size-[36px]", icon: 20, rounded: "rounded-[8px]" },
  "icon-xl": { btn: "size-[40px]", icon: 20, rounded: "rounded-[8px]" },
};

// ─── Variant colours ──────────────────────────────────────────────────────────
function getVariantClasses(variant: ButtonVariant, isDisabled: boolean): string {
  if (isDisabled) {
    if (variant === "outline" || variant === "outline-black")
      return "bg-disabled-bg text-disabled border border-border-disabled cursor-not-allowed";
    return "bg-disabled-bg text-disabled cursor-not-allowed";
  }
  if (variant === "outline")
    return "bg-white text-primary-action border border-border hover:bg-hover-bg active:bg-disabled-bg";
  if (variant === "plain")
    return "bg-transparent text-primary-action hover:bg-hover-bg active:bg-disabled-bg";
  // Black label variants — hover only, no active state (by design)
  if (variant === "outline-black")
    return "bg-white text-foreground border border-border hover:bg-hover-bg";
  if (variant === "plain-black")
    return "bg-transparent text-foreground hover:bg-hover-bg";
  // primary
  return "bg-primary-action text-white hover:bg-primary-action-hover active:bg-primary-action-active";
}

// ─── Component ────────────────────────────────────────────────────────────────
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    size      = "md",
    variant   = "primary",
    children,
    leftIcon,
    rightIcon,
    disabled,
    className = "",
    // Destructure pointer events so we can merge with ghost-icon active handlers
    onPointerDown,
    onPointerUp,
    onPointerLeave,
    ...props
  },
  ref,
) {
  const isDisabled  = variant === "disabled" || !!disabled;
  const isGhost     = variant === "outline-black" || variant === "plain-black";
  const isIconOnly  = size.startsWith("icon-");

  // ── Ghost icon-only active state ──────────────────────────────────────────
  // Ghost icon-only buttons have a Press state: bg #f3f4f6 + icon turns #99a1af.
  // We drive this via React state so it works regardless of Tailwind cascade order.
  // Ghost LABEL buttons have no active state (by design).
  const [ghostPressed, setGhostPressed] = useState(false);

  const needsGhostPress = isGhost && isIconOnly && !isDisabled;

  const ghostPressStyle: React.CSSProperties | undefined = needsGhostPress && ghostPressed
    ? { backgroundColor: "var(--disabled-bg)", color: "var(--disabled)" }
    : undefined;

  // Merged pointer handlers (preserve any consumer-supplied handlers)
  const handlePointerDown = needsGhostPress
    ? (e: React.PointerEvent<HTMLButtonElement>) => { setGhostPressed(true);  onPointerDown?.(e); }
    : onPointerDown;
  const handlePointerUp = needsGhostPress
    ? (e: React.PointerEvent<HTMLButtonElement>) => { setGhostPressed(false); onPointerUp?.(e); }
    : onPointerUp;
  const handlePointerLeave = needsGhostPress
    ? (e: React.PointerEvent<HTMLButtonElement>) => { setGhostPressed(false); onPointerLeave?.(e); }
    : onPointerLeave;

  const variantClasses = getVariantClasses(variant, isDisabled);
  const cursorClass    = isDisabled ? "cursor-not-allowed" : "cursor-pointer";
  const baseClasses    =
    "inline-flex items-center justify-center font-medium whitespace-nowrap transition-colors duration-150 select-none";

  // ── Icon-only (size = "icon-*") ────────────────────────────────────────────
  if (isIconOnly) {
    const spec = iconSizeSpec[size as ButtonIconSize];
    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          spec.rounded,
          spec.btn,
          "shrink-0",
          variantClasses,
          cursorClass,
          className,
        )}
        style={ghostPressStyle}
        disabled={isDisabled}
        aria-label="icon button"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerLeave}
        {...props}
      >
        <span
          className={cn("flex items-center justify-center")}
          aria-hidden="true"
          style={{ width: spec.icon, height: spec.icon }}
        >
          {children}
        </span>
      </button>
    );
  }

  // ── Labelled button ────────────────────────────────────────────────────────
  const labelSize = size as ButtonLabelSize;
  const hasLeft   = Boolean(leftIcon);
  const hasRight  = Boolean(rightIcon);
  const paddingParts = getPaddingClasses(labelSize, hasLeft, hasRight);

  return (
    <button
      ref={ref}
      className={cn(
        baseClasses,
        roundedLabelClass[labelSize],
        paddingParts[0],
        paddingParts[1],
        paddingParts[2],
        hasLeft || hasRight ? gapClass[labelSize] : undefined,
        variantClasses,
        cursorClass,
        textSizeClass[labelSize],
        className,
      )}
      disabled={isDisabled}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerLeave}
      {...props}
    >
      {hasLeft && (
        <span
          className={cn(
            "flex items-center justify-center shrink-0 overflow-hidden",
            labelIconSizeClass[labelSize],
          )}
          aria-hidden="true"
        >
          {leftIcon}
        </span>
      )}

      {children ?? "Button"}

      {hasRight && (
        <span
          className={cn(
            "flex items-center justify-center shrink-0 overflow-hidden",
            labelIconSizeClass[labelSize],
          )}
          aria-hidden="true"
        >
          {rightIcon}
        </span>
      )}
    </button>
  );
});

Button.displayName = "Button";
