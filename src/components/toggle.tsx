"use client";

import { forwardRef, useId, type ReactNode } from "react";
import { cn } from "../lib/utils";

export type ToggleSize = "sm" | "md";

export interface ToggleProps {
  /** On state. Default: `false`. */
  checked?: boolean;
  /** Disable interaction. */
  disabled?: boolean;
  /** Fires with the next boolean state when toggled. */
  onChange?: (next: boolean) => void;
  /** Label text rendered to the right of the switch. */
  label?: ReactNode;
  /** Secondary description text rendered below the label. */
  description?: ReactNode;
  /**
   * `sm` — 32×20 (Figma Small). `md` — 40×24 (Figma Medium).
   * Default: `sm` when `label` or `description` is set (Figma «Toggle text»), otherwise `md`.
   */
  size?: ToggleSize;
  /** HTML id forwarded to the switch control. */
  id?: string;
  /** Accessible name when there is no visible label. */
  ariaLabel?: string;
  className?: string;
}

const trackClass: Record<ToggleSize, string> = {
  sm: "w-8 h-5",
  md: "w-10 h-6",
};

const thumbClass: Record<ToggleSize, string> = {
  sm: "top-0.5 left-0.5 size-4",
  md: "top-0.5 left-0.5 size-5",
};

const thumbTranslate: Record<ToggleSize, string> = {
  sm: "translate-x-3",
  md: "translate-x-4",
};

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(function Toggle(
  {
    checked = false,
    disabled = false,
    onChange,
    label,
    description,
    size: sizeProp,
    id: idProp,
    ariaLabel,
    className,
  },
  ref
) {
  const generatedId = useId();
  const switchId = idProp ?? generatedId;
  const hasText = label !== undefined || description !== undefined;
  const hasDescription = description !== undefined;
  const size = sizeProp ?? (hasText ? "sm" : "md");

  const trackBg = disabled
    ? checked
      ? "bg-switch-on-disabled"
      : "bg-switch-background"
    : checked
      ? "bg-primary-action"
      : "bg-switch-background";

  /**
   * Knob fill from Figma SVG: white (#fff) except disabled+off (knob #F3F4F6 = track).
   * Use primitive white so the circle stays pure white on any `--background`.
   */
  const thumbBg =
    disabled && !checked
      ? "bg-switch-background"
      : "bg-[var(--fill-white-1000)]";

  const switchEl = (
    <button
      ref={ref}
      id={switchId}
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={hasText ? undefined : ariaLabel}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={cn(
        "relative shrink-0 rounded-full p-0 transition-colors duration-200 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        disabled ? "cursor-not-allowed" : "cursor-pointer",
        trackClass[size],
        trackBg
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute rounded-full transition-transform duration-200 ease-out",
          "shadow-[var(--toggle-knob-shadow)]",
          thumbClass[size],
          thumbBg,
          checked && thumbTranslate[size]
        )}
      />
    </button>
  );

  if (!hasText) {
    return <span className={cn("inline-flex", className)}>{switchEl}</span>;
  }

  return (
    <label
      className={cn(
        "flex w-full min-w-0 gap-4 select-none",
        hasDescription ? "items-start" : "items-center",
        disabled ? "cursor-not-allowed" : "cursor-pointer",
        className
      )}
    >
      <span className="flex min-w-0 flex-1 flex-col gap-0 text-sm font-normal leading-5">
        {label !== undefined && (
          <span
            className={cn(
              disabled ? "text-disabled" : "text-foreground"
            )}
          >
            {label}
          </span>
        )}
        {hasDescription && (
          <span
            className={cn(
              "whitespace-pre-wrap font-normal",
              disabled
                ? "text-disabled"
                : "text-[color:var(--text-default-secondary)]"
            )}
          >
            {description}
          </span>
        )}
      </span>
      <span className="shrink-0">{switchEl}</span>
    </label>
  );
});

Toggle.displayName = "Toggle";
