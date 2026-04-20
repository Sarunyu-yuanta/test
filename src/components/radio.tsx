"use client";

import { forwardRef, type ReactNode } from "react";
import { cn } from "../lib/utils";

export type RadioVariant = "text" | "button";

export interface RadioProps {
  /** Whether the radio is selected. Default: `false`. */
  checked?: boolean;
  /** Disable interaction. */
  disabled?: boolean;
  /** Label text rendered to the right of the radio. */
  label?: ReactNode;
  /** Secondary description text rendered below the label. */
  description?: ReactNode;
  /** "text" — plain radio + text. "button" — bordered card surface. Default: "text". */
  variant?: RadioVariant;
  /** Fires with `true` when the radio is selected. */
  onChange?: (next: boolean) => void;
  /** HTML name — group radios by sharing the same name. */
  name?: string;
  /** HTML value forwarded to the underlying input. */
  value?: string;
  /** HTML id — auto-generated if omitted. */
  id?: string;
  /** aria-label for the input when no visible label is provided. */
  ariaLabel?: string;
  className?: string;
}

function RadioVisual({ checked, disabled }: { checked: boolean; disabled: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "w-[18px] h-[18px] rounded-full border-[1.5px] flex items-center justify-center",
        disabled
          ? "bg-disabled-bg border-[rgba(0,0,0,0.05)]"
          : checked
            ? "bg-background border-primary-action"
            : "bg-background border-[rgba(0,0,0,0.1)]"
      )}
    >
      {checked && (
        <span
          className={cn(
            "w-2 h-2 rounded-full",
            disabled ? "bg-[#99A1AF]" : "bg-primary-action"
          )}
        />
      )}
    </span>
  );
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  {
    checked = false,
    disabled = false,
    label,
    description,
    variant = "text",
    onChange,
    name,
    value,
    id,
    ariaLabel,
    className,
  },
  ref
) {
  const hasText = label !== undefined || description !== undefined;
  const isButton = variant === "button";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
  };

  const buttonBorder = disabled
    ? "border-[rgba(0,0,0,0.05)]"
    : checked
      ? "border-primary-action"
      : "border-[rgba(0,0,0,0.1)]";

  return (
    <label
      className={cn(
        "inline-flex gap-1 select-none",
        description ? "items-start" : "items-center",
        disabled ? "cursor-not-allowed" : "cursor-pointer",
        isButton && cn("bg-background rounded-lg border py-2.5 pl-3 pr-4", buttonBorder),
        className
      )}
    >
      <span className="relative inline-flex items-center justify-center w-6 h-6 shrink-0">
        <input
          ref={ref}
          id={id}
          name={name}
          value={value}
          type="radio"
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          aria-label={ariaLabel}
          className="absolute inset-0 w-full h-full opacity-0 m-0 cursor-[inherit] disabled:cursor-[inherit]"
        />
        <RadioVisual checked={checked} disabled={disabled} />
      </span>
      {hasText && (
        <span className="flex flex-col">
          {label !== undefined && (
            <span
              className={cn(
                "text-base leading-6",
                disabled ? "text-disabled" : "text-foreground"
              )}
            >
              {label}
            </span>
          )}
          {description !== undefined && (
            <span
              className={cn(
                "text-xs leading-4",
                disabled ? "text-disabled" : "text-subtle-text"
              )}
            >
              {description}
            </span>
          )}
        </span>
      )}
    </label>
  );
});

Radio.displayName = "Radio";
