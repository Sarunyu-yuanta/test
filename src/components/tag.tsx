"use client";

import { forwardRef } from "react";
import { Circle, X } from "@phosphor-icons/react";
import { cn } from "../lib/utils";

export type TagSize = "large" | "small";
export type TagState = "default" | "hover" | "disabled";
export type TagVariant = "blue" | "green" | "yellow" | "red" | "gray" | "lime";
export type StatusTagType = "stop" | "success" | "hold" | "processing" | "error";

export interface TagProps {
  text?: string;
  size?: TagSize;
  state?: TagState;
  variant?: TagVariant;
  icon?: boolean;
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
    container: "px-[8px] py-[4px]",
    text: "text-[12px] leading-[16px]",
    closeIcon: "size-[16px]",
    closeButton: "size-[16px]",
  },
  small: {
    container: "px-[4px] py-[2px]",
    text: "text-[9px] leading-[14px]",
    closeIcon: "size-[14px]",
    closeButton: "size-[14px]",
  },
};

const variantStyles: Record<
  TagVariant,
  {
    bg: string;
    text: string;
  }
> = {
  blue: {
    bg: "bg-[#eff6ff]",
    text: "text-[#1447e6]",
  },
  green: {
    bg: "bg-[#dbfce7]",
    text: "text-[#00a63e]",
  },
  yellow: {
    bg: "bg-[#fef9c2]",
    text: "text-[#d08700]",
  },
  red: {
    bg: "bg-[#ffe2e2]",
    text: "text-[#e7000b]",
  },
  gray: {
    bg: "bg-[#f3f4f6]",
    text: "text-subtle-text",
  },
  lime: {
    bg: "bg-[#ecfcca]",
    text: "text-[#5ea500]",
  },
};

function CircleIcon({ disabled }: { disabled: boolean }) {
  return (
    <Circle
      aria-hidden="true"
      weight="regular"
      className="size-[14px] shrink-0"
      color={disabled ? "var(--disabled)" : "var(--subtle-text)"}
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
  const s = sizeStyles[size];
  const v = variantStyles[variant];
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
      {icon && <CircleIcon disabled={isDisabled} />}
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
  type?: StatusTagType;
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
    dot: "#81848B",
  },
  success: {
    label: "Success",
    dot: "#10B981",
  },
  hold: {
    label: "Hold",
    dot: "#E9B307",
  },
  processing: {
    label: "Processing",
    dot: "#2F7DE6",
  },
  error: {
    label: "Error",
    dot: "#F43F5E",
  },
};

export function StatusTag({ type = "stop", text, className }: StatusTagProps) {
  const style = statusTagStyles[type];

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
