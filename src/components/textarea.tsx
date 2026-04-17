"use client";

import React, { forwardRef, useState } from "react";
import { cn } from "../lib/utils";

export type TextAreaState = "default" | "focus" | "error" | "disabled";

export interface TextAreaProps
  extends Omit<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    "onChange" | "value" | "rows"
  > {
  /** Override the visual state of the textarea. Useful for form validation. */
  forceState?: TextAreaState;
  /** Error message displayed below when forceState is "error". Default: "Error message". */
  errorMessage?: string;
  value?: string;
  /** Called with the new string value on every change. */
  onChange?: (value: string) => void;
  /** Helper text shown below the textarea in the default state. */
  helperText?: string;
  /** Show a character count (charCount / maxCount) below the textarea. */
  showCount?: boolean;
  /** Maximum character count enforced when showCount is true. Default: 100. */
  maxCount?: number;
  /** Number of visible text rows. Default: 4. */
  rows?: number;
}

export const TextArea = forwardRef<HTMLDivElement, TextAreaProps>(
  function TextArea(
    {
      placeholder = "Text label",
      required = false,
      forceState,
      errorMessage = "Error message",
      value,
      onChange,
      helperText,
      showCount = false,
      maxCount = 100,
      rows = 4,
      className,
      ...textareaProps
    },
    ref,
  ) {
    const [focused, setFocused] = useState(false);
    const [internalValue, setInternalValue] = useState("");

    const controlled = value !== undefined;
    const currentValue = controlled ? value : internalValue;
    const isDisabled = forceState === "disabled";

    const state: TextAreaState = forceState ?? (focused ? "focus" : "default");
    const isError = state === "error";
    const isFocus = state === "focus";
    const isFilled = currentValue.length > 0;

    const floatLabel = isDisabled ? "var(--disabled)" : "var(--muted-foreground)";
    const filledValue = isDisabled ? "var(--disabled)" : "var(--foreground)";

    const borderInset = isFocus || isError ? "-1px" : "0px";
    const borderRad = isFocus || isError ? "9px" : "8px";
    const borderColor = isDisabled
      ? "var(--border-disabled)"
      : isError
        ? "var(--destructive)"
        : isFocus
          ? "var(--primary-action)"
          : "var(--border)";

    const charCount = currentValue.length;
    const showBelow = isError || Boolean(helperText) || showCount;
    const leftText = isError ? errorMessage : (helperText ?? "");
    const leftColor = isError ? "var(--destructive)" : "var(--muted-foreground)";
    const countColor = isDisabled ? "var(--disabled)" : "var(--muted-foreground)";

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      let newValue = e.target.value;
      if (showCount && newValue.length > maxCount) {
        newValue = newValue.slice(0, maxCount);
      }
      if (!controlled) setInternalValue(newValue);
      onChange?.(newValue);
    };

    return (
      <div ref={ref} className={cn("flex w-full flex-col gap-1", className)}>
        <div
          className={cn(
            "relative h-[116px] rounded-lg",
            isDisabled ? "bg-disabled-bg" : "bg-background",
          )}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute border border-solid"
            style={{ inset: borderInset, borderRadius: borderRad, borderColor }}
          />
          {isFilled ? (
            <div className="flex h-full w-full flex-col px-3.5 pt-3.5 pb-1.5">
              <p
                className="w-full shrink-0 text-xs leading-4 not-italic"
                style={{ color: floatLabel }}
              >
                {placeholder}
                {required && (
                  <span
                    style={{
                      color: isDisabled ? "var(--disabled)" : "var(--error-dark)",
                    }}
                  >
                    {" "}
                    *
                  </span>
                )}
              </p>
              <textarea
                {...textareaProps}
                value={currentValue}
                onChange={handleChange}
                onFocus={(e) => {
                  textareaProps.onFocus?.(e);
                  setFocused(true);
                }}
                onBlur={(e) => {
                  textareaProps.onBlur?.(e);
                  setFocused(false);
                }}
                disabled={isDisabled}
                rows={rows}
                aria-label={placeholder}
                className={cn(
                  "m-0 min-h-0 min-w-0 w-full flex-1 resize-none border-none bg-transparent p-0 text-sm leading-5 not-italic outline-none",
                )}
                style={{
                  ...textareaProps.style,
                  color: filledValue,
                  caretColor: "var(--caret-color)",
                }}
              />
            </div>
          ) : (
            <div className="relative flex size-full items-start p-3.5">
              <p
                className="pointer-events-none relative h-full min-h-[1px] min-w-0 flex-1 text-base leading-5 not-italic"
                style={{ color: floatLabel }}
              >
                {placeholder}
                {required && (
                  <span
                    style={{
                      color: isDisabled ? "var(--disabled)" : "var(--error-dark)",
                    }}
                  >
                    {" "}
                    *
                  </span>
                )}
              </p>
              {!isDisabled && (
                <textarea
                  {...textareaProps}
                  value={currentValue}
                  onChange={handleChange}
                  onFocus={(e) => {
                    textareaProps.onFocus?.(e);
                    setFocused(true);
                  }}
                  onBlur={(e) => {
                    textareaProps.onBlur?.(e);
                    setFocused(false);
                  }}
                  rows={rows}
                  className={cn(
                    "absolute inset-0 h-full w-full cursor-text resize-none border-none bg-transparent text-base outline-none",
                  )}
                  style={{
                    ...textareaProps.style,
                    color: "transparent",
                    caretColor: isFocus ? "var(--caret-color)" : "transparent",
                    padding: "14px",
                  }}
                  aria-label={placeholder}
                />
              )}
            </div>
          )}
        </div>
        {showBelow && (
          <div className="flex items-start gap-2 px-1 text-xs leading-4">
            {leftText ? (
              <span className="min-w-0 flex-1" style={{ color: leftColor }}>
                {leftText}
              </span>
            ) : (
              showCount && <span className="flex-1" />
            )}
            {showCount && (
              <span
                className="shrink-0 whitespace-nowrap text-right"
                style={{ color: countColor }}
              >
                {charCount}/{maxCount}
              </span>
            )}
          </div>
        )}
      </div>
    );
  },
);

TextArea.displayName = "TextArea";
