"use client";

import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { forwardRef, useRef, useState } from "react";
import { cn } from "../lib/utils";

export type SearchInputSize = "lg" | "sm";

export interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  size?: SearchInputSize;
  className?: string;
  onClear?: () => void;
}

export const SearchInput = forwardRef<HTMLDivElement, SearchInputProps>(
  function SearchInput(
    {
      placeholder = "Placeholder",
      value,
      onChange,
      size = "lg",
      className,
      onClear,
    },
    ref
  ) {
    const [focused, setFocused] = useState(false);
    const [internalValue, setInternalValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const controlled = value !== undefined;
    const currentValue = controlled ? value : internalValue;
    const isFilled = currentValue.length > 0;
    const iconSize = size === "lg" ? 24 : 22;
    const minHeight = size === "sm" ? "min-h-[32px]" : "";
    const padding =
      size === "sm" ? "px-[14px] py-[8px]" : "px-[14px] py-[12px]";
    const borderInset = focused ? "-1px" : "0px";
    const borderRad = focused ? "9px" : "8px";
    const borderColor = focused
      ? "var(--primary-action)"
      : "var(--border)";
    const handleChange = (next: string) => {
      if (!controlled) setInternalValue(next);
      onChange?.(next);
    };
    const handleClear = () => {
      if (!controlled) setInternalValue("");
      onChange?.("");
      onClear?.();
      inputRef.current?.focus();
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex cursor-text items-center gap-[8px] rounded-[8px] bg-white",
          padding,
          minHeight,
          className
        )}
        onClick={() => inputRef.current?.focus()}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute border border-solid"
          style={{
            inset: borderInset,
            borderRadius: borderRad,
            borderColor,
          }}
        />
        <span className="flex shrink-0 items-center justify-center">
          <MagnifyingGlass
            size={iconSize}
            color="var(--muted-foreground)"
            weight="regular"
          />
        </span>
        <div className="relative min-w-0 flex-1">
          {!isFilled && (
            <p
              className="pointer-events-none absolute inset-0 flex items-center text-[16px] leading-[20px] not-italic"
              style={{ color: "var(--muted-foreground)" }}
            >
              {placeholder}
            </p>
          )}
          <input
            ref={inputRef}
            type="text"
            aria-label={placeholder}
            value={currentValue}
            onChange={(e) => handleChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="m-0 w-full border-none bg-transparent p-0 text-[16px] leading-[20px] outline-none"
            style={{
              color: isFilled ? "var(--foreground)" : "transparent",
              caretColor: "var(--caret-color)",
            }}
          />
        </div>
        {focused && isFilled && (
          <button
            type="button"
            aria-label="Clear search"
            onMouseDown={(e) => e.preventDefault()}
            onClick={handleClear}
            className="m-0 flex shrink-0 cursor-pointer items-center justify-center border-none bg-transparent p-0"
          >
            <X
              size={iconSize}
              color="var(--muted-foreground)"
              weight="regular"
            />
          </button>
        )}
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";
