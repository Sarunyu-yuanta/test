"use client";

import { forwardRef } from "react";
import { Circle, X } from "@phosphor-icons/react";
import { cn } from "../lib/utils";

export type TagSize = "large" | "small";
export type TagState = "default" | "hover" | "disabled";
export type TagVariant = "blue" | "green" | "yellow" | "red" | "gray" | "lime";
export type StatusTagType = "stop" | "success" | "hold" | "processing" | "error";

export interface TagProps {
  /** Label text displayed inside the tag. Default: "Tag". */
  text?: string;
  /** Size of the tag. Default: "large". */
  size?: TagSize;
  /** Visual state. Default: "default". */
  state?: TagState;
  /** Color variant. Use green=positive, red=danger, yellow=warning, gray=neutral. Default: "gray". */
  variant?: TagVariant;
  /** Show a small circle dot icon on the left side of the label. */
  icon?: boolean;
  /** Show a close/remove (×) button on the right side. */
  close?: boolean;
  className?: string;
}

const sizeStyles: Record<
  TagSize,
  {
    container: string;
    text: string;
    closeIcon: string;
    closeButton: string;
  }
> = {
  large: {
    container: "px-2 py-1",
    text: "text-xs leading-4",
    closeIcon: "h-4 w-4",
    closeButton: "h-4 w-4",
  },
  small: {
    container: "px-1 py-0.5",
    text: "text-[9px] leading-3",
    closeIcon: "h-3.5 w-3.5",
    closeButton: "h-3.5 w-3.5",
  },
};

const variantStyles: Record<
  TagVariant,
  {
    bg: string;
    text: string;
    color: string;
  }
> = {
  blue: {
    bg: "bg-[var(--fill-blue-50)]",
    text: "text-[var(--fill-blue-700)]",
    color: "var(--fill-blue-700)",
  },
  green: {
    bg: "bg-[var(--fill-green-100)]",
    text: "text-[var(--fill-green-600)]",
    color: "var(--fill-green-600)",
  },
  yellow: {
    bg: "bg-[var(--fill-yellow-100)]",
    text: "text-[var(--fill-yellow-600)]",
    color: "var(--fill-yellow-600)",
  },
  red: {
    bg: "bg-[var(--fill-red-100)]",
    text: "text-[var(--fill-red-600)]",
    color: "var(--fill-red-600)",
  },
  gray: {
    bg: "bg-[var(--fill-gray-100)]",
    text: "text-subtle-text",
    color: "var(--subtle-text)",
  },
  lime: {
    bg: "bg-[var(--fill-lime-100)]",
    text: "text-[var(--fill-lime-600)]",
    color: "var(--fill-lime-600)",
  },
};

function CircleIcon({ disabled, color }: { disabled: boolean; color: string }) {
  return (
    <Circle
      aria-hidden="true"
      weight="regular"
      className="h-3.5 w-3.5 shrink-0"
      color={disabled ? "var(--disabled)" : color}
    />
  );
}

function CloseIcon({ disabled, className }: { disabled: boolean; className?: string }) {
  return (
    <X
      aria-hidden="true"
      weight="regular"
      className={cn("shrink-0", className)}
      color={disabled ? "var(--disabled)" : "var(--subtle-text)"}
    />
  );
}

export const Tag = forwardRef<HTMLDivElement, TagProps>(function Tag(
  {
    text = "Tag",
    size = "large",
    state = "default",
    variant = "gray",
    icon = false,
    close = false,
    className,
  },
  ref
) {
  const isDisabled = state === "disabled";
  const s = sizeStyles[size] ?? sizeStyles.large;
  const v = variantStyles[variant] ?? variantStyles.gray;
  const bgClass = state === "disabled" ? "bg-disabled-bg" : state === "hover" ? "bg-hover-bg" : v.bg;
  const textClass = isDisabled ? "text-disabled" : v.text;

  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-[4px]",
        (icon || close) && "gap-[2px]",
        s.container,
        bgClass,
        className
      )}
    >
      {icon && <CircleIcon disabled={isDisabled} color={v.color} />}
      <span className={cn("whitespace-nowrap font-normal", s.text, textClass)}>
        {text}
      </span>
      {close && (
        <span
          className={cn(
            "inline-flex items-center justify-center rounded-[2px] transition-colors",
            s.closeButton,
            !isDisabled && "cursor-pointer hover:bg-black/10"
          )}
        >
          <CloseIcon disabled={isDisabled} className={s.closeIcon} />
        </span>
      )}
    </div>
  );
});

Tag.displayName = "Tag";

export interface StatusTagProps {
  /** Process status type — drives the dot color and default label. Default: "stop". */
  type?: StatusTagType;
  /** Override the default label for the given type. */
  text?: string;
  className?: string;
}

const statusTagStyles: Record<
  StatusTagType,
  {
    label: string;
    dot: string;
  }
> = {
  stop: {
    label: "Stop",
    dot: "var(--fill-gray-500)",
  },
  success: {
    label: "Success",
    dot: "var(--fill-emerald-500)",
  },
  hold: {
    label: "Hold",
    dot: "var(--fill-yellow-500)",
  },
  processing: {
    label: "Processing",
    dot: "var(--fill-blue-500)",
  },
  error: {
    label: "Error",
    dot: "var(--fill-rose-500)",
  },
};

export function StatusTag({ type = "stop", text, className }: StatusTagProps) {
  const style = statusTagStyles[type] ?? statusTagStyles.stop;

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center gap-1 rounded-[8px] px-2 py-1",
        className
      )}
    >
      <Circle aria-hidden="true" weight="fill" className="size-[8px] shrink-0" color={style.dot} />
      <span className="whitespace-nowrap text-[14px] leading-[20px] font-normal text-disabled">
        {text ?? style.label}
      </span>
    </div>
  );
}
