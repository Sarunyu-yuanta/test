"use client";

import { forwardRef, useCallback, useEffect, useRef, type ReactNode } from "react";
import { cn } from "../lib/utils";

export type CheckboxChecked = boolean | "indeterminate";
export type CheckboxVariant = "text" | "button";

export interface CheckboxProps {
  /** Checkbox state. `true`, `false`, or `"indeterminate"`. Default: `false`. */
  checked?: CheckboxChecked;
  /** Disable interaction. */
  disabled?: boolean;
  /** Mark the field as invalid. Shows a red border and displays `errorMessage`. */
  error?: boolean;
  /** Error message shown below when `error` is true. Default: "Error message". */
  errorMessage?: string;
  /** Label text rendered to the right of the checkbox. */
  label?: ReactNode;
  /** Secondary description text rendered below the label. */
  description?: ReactNode;
  /** "text" — plain checkbox + text. "button" — bordered card surface. Default: "text". */
  variant?: CheckboxVariant;
  /** Fires with the next boolean state when toggled. Indeterminate becomes `true`. */
  onChange?: (next: boolean) => void;
  /** HTML name forwarded to the underlying input. */
  name?: string;
  /** HTML value forwarded to the underlying input. */
  value?: string;
  /** HTML id — auto-generated if omitted. */
  id?: string;
  /** aria-label for the input when no visible label is provided. */
  ariaLabel?: string;
  className?: string;
}

type VisualState = "default" | "checked" | "indeterminate";

function CheckboxVisual({
  state,
  disabled,
  error,
}: {
  state: VisualState;
  disabled: boolean;
  error: boolean;
}) {
  if (state === "default") {
    return (
      <span
        aria-hidden="true"
        className={cn(
          "block w-4 h-4 rounded-[2px] border-[1.5px]",
          disabled
            ? "bg-disabled-bg border-[var(--fill-black-100)]"
            : error
            ? "bg-background border-destructive"
            : "bg-background border-[var(--fill-black-200)]"
        )}
      />
    );
  }

  const containerFill = disabled ? "var(--disabled-bg)" : "var(--fill-p1-600)";
  const iconFill = disabled ? "var(--fill-gray-400)" : "var(--fill-white-1000)";

  if (state === "checked") {
    return (
      <svg
        aria-hidden="true"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.2222 0H1.77778C0.8 0 0 0.8 0 1.77778V14.2222C0 15.2 0.8 16 1.77778 16H14.2222C15.2 16 16 15.2 16 14.2222V8V1.77778C16 0.8 15.2 0 14.2222 0ZM6.85333 11.8133C6.50667 12.16 5.94667 12.16 5.6 11.8133L2.40889 8.62222C2.06222 8.27556 2.06222 7.71556 2.40889 7.36889C2.75556 7.02222 3.31556 7.02222 3.66222 7.36889L6.22222 9.92889L12.3378 3.81333C12.6844 3.46667 13.2444 3.46667 13.5911 3.81333C13.9378 4.16 13.9378 4.72 13.5911 5.06667L6.85333 11.8133Z"
          fill={containerFill}
        />
        <path
          d="M5.6 11.8133C5.94667 12.16 6.50667 12.16 6.85333 11.8133L13.5911 5.06667C13.9378 4.72 13.9378 4.16 13.5911 3.81333C13.2444 3.46667 12.6844 3.46667 12.3378 3.81333L6.22222 9.92889L3.66222 7.36889C3.31556 7.02222 2.75556 7.02222 2.40889 7.36889C2.06222 7.71556 2.06222 8.27556 2.40889 8.62222L5.6 11.8133Z"
          fill={iconFill}
        />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.2222 0H1.77778C0.8 0 0 0.8 0 1.77778V14.2222C0 15.2 0.8 16 1.77778 16H14.2222C15.2 16 16 15.2 16 14.2222V1.77778C16 0.8 15.2 0 14.2222 0ZM11.5556 8.88889H4.44444C3.95556 8.88889 3.55556 8.48889 3.55556 8C3.55556 7.51111 3.95556 7.11111 4.44444 7.11111H11.5556C12.0444 7.11111 12.4444 7.51111 12.4444 8C12.4444 8.48889 12.0444 8.88889 11.5556 8.88889Z"
        fill={containerFill}
      />
      <path
        d="M4.44444 8.88889H11.5556C12.0444 8.88889 12.4444 8.48889 12.4444 8C12.4444 7.51111 12.0444 7.11111 11.5556 7.11111H4.44444C3.95556 7.11111 3.55556 7.51111 3.55556 8C3.55556 8.48889 3.95556 8.88889 4.44444 8.88889Z"
        fill={iconFill}
      />
    </svg>
  );
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  {
    checked = false,
    disabled = false,
    error = false,
    errorMessage = "Error message",
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
  const localRef = useRef<HTMLInputElement | null>(null);
  const state: VisualState =
    checked === "indeterminate" ? "indeterminate" : checked ? "checked" : "default";

  useEffect(() => {
    if (localRef.current) {
      localRef.current.indeterminate = checked === "indeterminate";
    }
  }, [checked]);

  const setRefs = useCallback(
    (node: HTMLInputElement | null) => {
      localRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
    },
    [ref]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
  };

  const hasText = label !== undefined || description !== undefined;
  const hasActiveBorder = state === "checked" || state === "indeterminate";
  const isButton = variant === "button";

  const buttonBorder = disabled
    ? "border-[var(--fill-black-100)]"
    : error
    ? "border-destructive"
    : hasActiveBorder
    ? "border-primary-action"
    : "border-[var(--fill-black-200)]";

  const showError = error && !disabled;

  return (
    <label
      className={cn(
        "flex flex-col select-none",
        disabled ? "cursor-not-allowed" : "cursor-pointer",
        className
      )}
    >
      <span
        className={cn(
          "inline-flex gap-1",
          description ? "items-start" : "items-center",
          isButton && cn("bg-background rounded-lg border py-2.5 pl-3 pr-4", buttonBorder)
        )}
      >
        <span className="relative inline-flex items-center justify-center w-6 h-6 shrink-0">
          <input
            ref={setRefs}
            id={id}
            name={name}
            value={value}
            type="checkbox"
            checked={checked === true}
            disabled={disabled}
            onChange={handleChange}
            aria-label={ariaLabel}
            aria-checked={checked === "indeterminate" ? "mixed" : checked}
            aria-invalid={showError || undefined}
            className="absolute inset-0 w-full h-full opacity-0 m-0 cursor-[inherit] disabled:cursor-[inherit]"
          />
          <CheckboxVisual state={state} disabled={disabled} error={showError} />
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
      </span>
      {showError && (
        <span className="mt-1 ml-7 text-xs text-destructive">{errorMessage}</span>
      )}
    </label>
  );
});

Checkbox.displayName = "Checkbox";
