"use client";

import React, { forwardRef } from "react";
import { Check } from "@phosphor-icons/react";
import { cn } from "../lib/utils";

export interface OptionItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface OptionListProps {
  options: OptionItem[];
  selectedValue?: string;
  selectedValues?: string[];
  onSelect?: (value: string) => void;
  onToggle?: (value: string) => void;
  maxVisible?: number;
  emptyText?: string;
  className?: string;
}

export const OptionList = forwardRef<HTMLDivElement, OptionListProps>(
  function OptionList(
    {
      options,
      selectedValue,
      selectedValues,
      onSelect,
      onToggle,
      maxVisible = 10,
      emptyText = "No results found",
      className,
    },
    ref
  ) {
    const isMulti =
      selectedValues !== undefined || onToggle !== undefined;
    const isScrollable = options.length > maxVisible;
    const maxHeight = isScrollable ? maxVisible * 48 + 16 : undefined;
    const isSelected = (val: string) =>
      isMulti
        ? (selectedValues ?? []).includes(val)
        : val === selectedValue;
    const handleClick = (opt: OptionItem) => {
      if (opt.disabled) return;
      if (isMulti) {
        onToggle?.(opt.value);
      } else {
        onSelect?.(opt.value);
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-start overflow-clip rounded-lg bg-popover px-2 py-2 text-popover-foreground",
          className
        )}
        style={{
          boxShadow: "var(--elevation-popover)",
          ...(isScrollable
            ? { maxHeight, overflowY: "auto" as const }
            : {}),
        }}
      >
        {options.length > 0 ? (
          options.map((opt) => {
            const selected = isSelected(opt.value);
            const disabled = opt.disabled === true;
              const rowBg = disabled
                ? "bg-disabled-bg"
                : selected
                  ? "bg-selected-bg"
                  : "bg-popover hover:bg-selected-bg";
            return (
              <div
                key={opt.value}
                onClick={() => handleClick(opt)}
                className={cn(
                  "w-full shrink-0 rounded-[4px] transition-colors duration-100",
                  rowBg,
                  disabled ? "cursor-default" : "cursor-pointer"
                )}
              >
                <div className="flex w-full items-center gap-2 p-3.5">
                  {opt.icon && (
                    <span
                      className="flex h-5 w-5 shrink-0 items-center justify-center overflow-clip"
                      style={{
                        color: disabled
                          ? "var(--disabled)"
                          : "var(--muted-foreground)",
                      }}
                    >
                      {opt.icon}
                    </span>
                  )}
                  <p
                    className="min-h-[1px] min-w-0 flex-1 overflow-hidden text-sm leading-5 text-ellipsis whitespace-nowrap not-italic"
                    style={{
                      color: disabled
                        ? "var(--disabled)"
                        : "var(--foreground)",
                    }}
                  >
                    {opt.label}
                  </p>
                  {selected && (
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                      <Check
                        size={16}
                        weight="bold"
                        className="text-primary-action"
                      />
                    </span>
                  )}
                </div>
              </div>
            );
          })
        ) : (
            <div className="w-full shrink-0 bg-popover">
            <div className="flex w-full items-center p-3.5">
              <p className="min-h-[1px] min-w-0 flex-1 text-sm leading-5 not-italic text-disabled">
                {emptyText}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
);

OptionList.displayName = "OptionList";
