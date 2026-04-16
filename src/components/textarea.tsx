"use client";

import React, { forwardRef, useState } from "react";
import { cn } from "../lib/utils";

export type TextAreaState = "default" | "focus" | "error" | "disabled";

export interface TextAreaProps
  extends Omit<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    "onChange" | "value" | "rows"
  > {
  forceState?: TextAreaState;
  errorMessage?: string;
  value?: string;
  onChange?: (value: string) => void;
  helperText?: string;
  showCount?: boolean;
  maxCount?: number;
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
      <div ref={ref} className={cn("flex w-full flex-col gap-[4px]", className)}>
        <div
          className={cn(
            "relative h-[116px] rounded-[8px]",
            isDisabled ? "bg-disabled-bg" : "bg-white",
          )}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute border border-solid"
            style={{ inset: borderInset, borderRadius: borderRad, borderColor }}
          />
          {isFilled ? (
            <div className="flex h-full w-full flex-col p-[14px] pb-[6px]">
              <p
                className="w-full shrink-0 text-[12px] leading-[16px] not-italic"
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
                  "m-0 min-h-0 min-w-0 w-full flex-1 resize-none border-none bg-transparent p-0 text-[14px] leading-[20px] not-italic outline-none",
                )}
                style={{
                  ...textareaProps.style,
                  color: filledValue,
                  caretColor: "var(--caret-color)",
                }}
              />
            </div>
          ) : (
            <div className="relative flex size-full items-start p-[14px]">
              <p
                className="pointer-events-none relative h-full min-h-[1px] min-w-0 flex-1 text-[16px] leading-[20px] not-italic"
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
                    "absolute inset-0 h-full w-full cursor-text resize-none border-none bg-transparent text-[16px] outline-none",
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
          <div
            className="flex items-start gap-[8px] px-[4px] text-[12px] leading-[16px]"
          >
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
