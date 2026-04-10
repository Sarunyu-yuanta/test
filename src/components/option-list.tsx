"use client";

import React, { forwardRef, SVGProps } from "react";
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

function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="11"
      viewBox="0 0 16 11"
      fill="none"
      {...props}
    >
      <path
        d="M1 5.5L5.5 10L15 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
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
          "flex flex-col items-start overflow-clip rounded-[8px] bg-white px-[8px] py-[8px]",
          className
        )}
        style={{
          boxShadow:
            "0px 20px 25px -5px rgba(0,0,0,0.1), 0px 8px 10px -6px rgba(0,0,0,0.1)",
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
                : "bg-white hover:bg-selected-bg";
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
                <div className="flex w-full items-center gap-[8px] p-[14px]">
                  {opt.icon && (
                    <span
                      className="flex size-[20px] shrink-0 items-center justify-center overflow-clip"
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
                    className="min-h-[1px] min-w-0 flex-1 overflow-hidden text-[14px] leading-[20px] text-ellipsis whitespace-nowrap not-italic"
                    style={{
                      color: disabled
                        ? "var(--disabled)"
                        : "var(--foreground)",
                    }}
                  >
                    {opt.label}
                  </p>
                  {selected && (
                    <span className="flex size-[20px] shrink-0 items-center justify-center">
                      <CheckIcon className="text-primary-action" />
                    </span>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <div className="w-full shrink-0 bg-white">
            <div className="flex w-full items-center p-[14px]">
              <p className="min-h-[1px] min-w-0 flex-1 text-[14px] leading-[20px] not-italic text-disabled">
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
