"use client";

import React, { forwardRef, useState } from "react";
import { cn } from "../lib/utils";

export type InputState = "default" | "focus" | "error" | "disabled";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  /** Override the visual state of the input. Useful for form validation. */
  forceState?: InputState;
  /** Error message displayed below the input when forceState is "error". Default: "Error message". */
  errorMessage?: string;
  value?: string;
  /** Called with the new string value on every change. */
  onChange?: (value: string) => void;
  /** Icon element rendered on the right side of the input. */
  rightIcon?: React.ReactNode;
  /** Unit label on the right side, e.g. "kg" or "THB". */
  unit?: string;
  /** Helper text displayed below the input in the default state. */
  helperText?: string;
  /** Show a character count (charCount / maxCount) below the input. */
  showCount?: boolean;
  /** Maximum character count enforced when showCount is true. Default: 100. */
  maxCount?: number;
}

export const Input = forwardRef<HTMLDivElement, InputProps>(function Input(
  {
    placeholder = "Text label",
    required = false,
    forceState,
    errorMessage = "Error message",
    value,
    onChange,
    rightIcon,
    unit,
    helperText,
    showCount = false,
    maxCount = 100,
    className = "",
    type = "text",
    style: inputStyleProp,
    onFocus: onFocusProp,
    onBlur: onBlurProp,
    disabled: _disabledProp,
    maxLength: maxLengthProp,
    ...inputRest
  },
  ref,
) {
  const [focused, setFocused] = useState(false);
  const [internalValue, setInternalValue] = useState("");

  const controlled = value !== undefined;
  const currentValue = controlled ? value : internalValue;
  const isDisabled = forceState === "disabled";

  const state: InputState = forceState ?? (focused ? "focus" : "default");
  const isError = state === "error";
  const isFocus = state === "focus";
  const isFilled = currentValue.length > 0;

  const bg = isDisabled ? "bg-disabled-bg" : "bg-background";
  const floatLabel = isDisabled ? "var(--disabled)" : "var(--muted-foreground)";
  const filledValue = isDisabled ? "var(--disabled)" : "var(--foreground)";
  const unitColor = isDisabled ? "var(--disabled)" : "var(--muted-foreground)";

  const borderInset = isFocus || isError ? "-1px" : "0px";
  const borderRad = isFocus || isError ? "9px" : "8px";
  const borderColor = isDisabled
    ? "var(--border-disabled)"
    : isError
      ? "var(--border-danger)"
      : isFocus
        ? "var(--primary-action)"
        : "var(--border-default)";

  const hasRight = Boolean(rightIcon) || Boolean(unit);
  const padding = isFilled
    ? "px-[14px] py-[6px]"
    : hasRight
      ? "px-[14px] py-[14px]"
      : "p-[14px]";

  const charCount = currentValue.length;
  const showBelow = isError || Boolean(helperText) || showCount;
  const leftText = isError ? errorMessage : (helperText ?? "");
  const leftColor = isError ? "var(--destructive)" : "var(--muted-foreground)";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isDisabled) return;
    let next = e.target.value;
    if (showCount && maxCount >= 0 && next.length > maxCount) {
      next = next.slice(0, maxCount);
    }
    if (!controlled) setInternalValue(next);
    onChange?.(next);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    onFocusProp?.(e);
    setFocused(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    onBlurProp?.(e);
    setFocused(false);
  };

  const containerFlex = isFilled
    ? !hasRight
      ? "flex-col items-start justify-center"
      : rightIcon
        ? "flex items-center gap-[8px]"
        : "flex items-end gap-[8px]"
    : cn("flex items-center", hasRight && "gap-[8px]");

  const inputCaretStyle: React.CSSProperties = {
    caretColor: "var(--caret-color)",
  };

  return (
    <div ref={ref} className={cn("flex flex-col gap-1 w-full", className)}>
      <div
        className={cn(
          "relative rounded-lg min-h-[48px]",
          padding,
          bg,
          containerFlex,
        )}
      >
        <div
          aria-hidden="true"
          className="absolute pointer-events-none border border-solid"
          style={{
            inset: borderInset,
            borderRadius: borderRad,
            borderColor,
          }}
        />

        <div
          className={cn(
            "flex flex-col min-w-0 min-h-[1px]",
            hasRight ? "flex-1 justify-center" : "w-full justify-center",
          )}
        >
          <p
            className={cn(
              "shrink-0 w-full not-italic",
              isFilled
                ? "leading-4 text-xs"
                : "text-base leading-5 pointer-events-none",
            )}
            style={{ color: floatLabel }}
          >
            {placeholder}
            {required && (
              <span
                className="text-xs leading-4"
                style={{
                  color: isDisabled ? "var(--disabled)" : "var(--error-dark)",
                }}
              >
                {" *"}
              </span>
            )}
          </p>
          <input
            {...inputRest}
            type={type}
            value={currentValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isDisabled}
            maxLength={showCount ? maxCount : maxLengthProp}
            aria-label={placeholder}
            className={cn(
              "w-full bg-transparent outline-none border-none min-w-0",
              isFilled
                ? "leading-5 not-italic text-sm p-0 m-0"
                : cn(
                    "absolute inset-0 h-full text-base",
                    isDisabled ? "cursor-not-allowed" : "cursor-text",
                  ),
            )}
            style={
              isFilled
                ? {
                    ...inputStyleProp,
                    color: filledValue,
                    ...inputCaretStyle,
                    fontSize: "14px",
                    lineHeight: "20px",
                  }
                : {
                    ...inputStyleProp,
                    color: "transparent",
                    caretColor: isFocus ? "var(--caret-color)" : "transparent",
                    padding: hasRight ? "12px 14px" : "14px",
                    fontSize: "16px",
                    lineHeight: "24px",
                  }
            }
          />
        </div>

        {rightIcon && (
          <div
            className={cn(
              "shrink-0 flex items-center",
              isFilled && "self-stretch",
              !isFilled && "relative",
            )}
          >
            <span className="flex items-center justify-center size-[24px] overflow-hidden">
              {rightIcon}
            </span>
          </div>
        )}
        {unit && !rightIcon && (
          <p
            className={cn(
              "shrink-0 whitespace-nowrap text-[16px] leading-[20px]",
              !isFilled && "relative",
            )}
            style={{
              color: unitColor,
              lineHeight: "1.5",
              fontVariationSettings: "'wdth' 100",
            }}
          >
            {unit}
          </p>
        )}
      </div>
      {showBelow && (
        <div className="flex items-start gap-2 px-1 text-xs leading-4">
          {leftText ? (
            <span className="flex-1 min-w-0" style={{ color: leftColor }}>
              {leftText}
            </span>
          ) : (
            showCount && <span className="flex-1" />
          )}
          {showCount && (
            <span
              className="shrink-0 text-right whitespace-nowrap"
              style={{ color: "var(--muted-foreground)" }}
            >
              {charCount}/{maxCount}
            </span>
          )}
        </div>
      )}
    </div>
  );
});

Input.displayName = "Input";
