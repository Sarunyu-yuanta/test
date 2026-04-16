"use client";

import { forwardRef } from "react";
import { Check, Plus } from "@phosphor-icons/react";
import { cn } from "../lib/utils";

export type ChipType = "single" | "multiple";
export type ChipSize = "large" | "medium" | "small";

export interface ChipProps {
  /** Label text displayed inside the chip. Default: "Chips Text". */
  label?: string;
  /** "single" shows no icon; "multiple" shows Plus (unselected) / Check (selected). Default: "single". */
  type?: ChipType;
  /** Visual size of the chip. Default: "large". */
  size?: ChipSize;
  /** Whether the chip is in the selected/active state. */
  selected?: boolean;
  /** Whether the chip is non-interactive. */
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const sizeStyles: Record<
  ChipSize,
  {
    container: string;
    text: string;
    icon: string;
  }
> = {
  large: {
    container: "h-9 px-3 gap-1",
    text: "text-sm leading-5",
    icon: "icon-lg",
  },
  medium: {
    container: "h-8 px-3 gap-1",
    text: "text-sm leading-5",
    icon: "icon-lg",
  },
  small: {
    container: "h-7 px-2.5 gap-0.5",
    text: "text-xs leading-4",
    icon: "icon-md",
  },
};

const multiplePaddingBySize: Record<ChipSize, string> = {
  large: "pl-[8px] pr-[12px]",
  medium: "pl-[8px] pr-[12px]",
  small: "pl-[6px] pr-[10px]",
};

export const Chip = forwardRef<HTMLButtonElement, ChipProps>(function Chip(
  {
    label = "Chips Text",
    type = "single",
    size = "large",
    selected = false,
    disabled = false,
    onClick,
    className,
  },
  ref
) {
  const s = sizeStyles[size];
  const isMultiple = type === "multiple";
  const state = disabled
    ? selected
      ? "selected-disabled"
      : "disabled"
    : selected
      ? "selected"
      : "default";

  const containerClass =
    state === "selected"
      ? "bg-primary-action border border-primary-action"
      : state === "selected-disabled"
        ? "bg-selected-light-bg border border-transparent"
        : state === "disabled"
          ? "bg-disabled-bg border border-transparent"
          : "bg-background border border-border";

  const textClass =
    state === "selected"
      ? "text-on-primary-action"
      : state === "selected-disabled"
        ? "text-primary-action/40"
        : state === "disabled"
          ? "text-disabled"
          : "text-subtle-text";

  const iconClass =
    state === "selected"
      ? "text-on-primary-action"
      : state === "selected-disabled"
        ? "text-primary-action/40"
        : state === "disabled"
          ? "text-disabled"
          : "text-subtle-text";

  const icon =
    isMultiple && selected ? (
      <Check aria-hidden="true" weight="regular" className={cn("shrink-0", s.icon, iconClass)} />
    ) : isMultiple ? (
      <Plus aria-hidden="true" weight="regular" className={cn("shrink-0", s.icon, iconClass)} />
    ) : null;

  return (
    <button
      ref={ref}
      type="button"
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      aria-pressed={selected}
      className={cn(
        "inline-flex items-center justify-center rounded-full whitespace-nowrap border transition-colors",
        s.container,
        isMultiple && multiplePaddingBySize[size],
        containerClass,
        disabled ? "cursor-not-allowed" : "cursor-pointer",
        className
      )}
    >
      {icon}
      <span className={cn("font-normal", s.text, textClass)}>{label}</span>
    </button>
  );
});

Chip.displayName = "Chip";
