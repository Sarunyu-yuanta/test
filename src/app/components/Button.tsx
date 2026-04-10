import React, { useState } from "react";

export type ButtonLabelSize = "xs" | "sm" | "md" | "lg" | "xl";
export type ButtonIconSize  = "icon-xs" | "icon-sm" | "icon-md" | "icon-lg" | "icon-xl";
export type ButtonSize      = ButtonLabelSize | ButtonIconSize;

export type ButtonVariant = "primary" | "outline" | "plain" | "outline-black" | "plain-black" | "disabled";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
  xs: "size-[13px]",
  sm: "size-[15px]",
  md: "size-[15px]",
  lg: "size-[16px]",
  xl: "size-[16px]",
};

const gapClass: Record<ButtonLabelSize, string> = {
  xs: "gap-[4px]",
  sm: "gap-[4px]",
  md: "gap-[4px]",
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
): string {
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
  return `${hasLeft ? reducedMap[size].l : pxMap[size].l} ${hasRight ? reducedMap[size].r : pxMap[size].r} ${pyMap[size]}`;
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
      return "bg-[#f3f4f6] text-[#99a1af] border border-[rgba(0,0,0,0.05)] cursor-not-allowed";
    return "bg-[#f3f4f6] text-[#99a1af] cursor-not-allowed";
  }
  if (variant === "outline")
    return "bg-white text-[#0a6ee7] border border-[rgba(0,0,0,0.1)] hover:bg-[#f9fafb] active:bg-[#f3f4f6]";
  if (variant === "plain")
    return "bg-transparent text-[#0a6ee7] hover:bg-[#f9fafb] active:bg-[#f3f4f6]";
  // Black label variants — hover only, no active state (by design)
  if (variant === "outline-black")
    return "bg-white text-[#101828] border border-[rgba(0,0,0,0.1)] hover:bg-[#f9fafb]";
  if (variant === "plain-black")
    return "bg-transparent text-[#101828] hover:bg-[#f9fafb]";
  // primary
  return "bg-[#0a6ee7] text-white hover:bg-[#095ec4] active:bg-[#074ea4]";
}

// ─── Component ────────────────────────────────────────────────────────────────
export function Button({
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
}: ButtonProps) {
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
    ? { backgroundColor: "#f3f4f6", color: "#99a1af" }
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
    "inline-flex items-center justify-center font-semibold whitespace-nowrap transition-colors duration-150 select-none";

  // ── Icon-only (size = "icon-*") ────────────────────────────────────────────
  if (isIconOnly) {
    const spec = iconSizeSpec[size as ButtonIconSize];
    return (
      <button
        className={`${baseClasses} ${spec.rounded} ${spec.btn} shrink-0 ${variantClasses} ${cursorClass} ${className}`}
        style={ghostPressStyle}
        disabled={isDisabled}
        aria-label="icon button"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerLeave}
        {...props}
      >
        <span
          className="flex items-center justify-center"
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
  const padding   = getPaddingClasses(labelSize, hasLeft, hasRight);
  const gap       = hasLeft || hasRight ? gapClass[labelSize] : "";

  return (
    <button
      className={`${baseClasses} ${roundedLabelClass[labelSize]} ${padding} ${gap} ${variantClasses} ${cursorClass} ${textSizeClass[labelSize]} ${className}`}
      style={{ fontFamily: "'Noto Sans Thai', sans-serif" }}
      disabled={isDisabled}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerLeave}
      {...props}
    >
      {hasLeft && (
        <span
          className={`flex items-center justify-center shrink-0 overflow-hidden ${labelIconSizeClass[labelSize]}`}
          aria-hidden="true"
        >
          {leftIcon}
        </span>
      )}

      {children ?? "Button"}

      {hasRight && (
        <span
          className={`flex items-center justify-center shrink-0 overflow-hidden ${labelIconSizeClass[labelSize]}`}
          aria-hidden="true"
        >
          {rightIcon}
        </span>
      )}
    </button>
  );
}