"use client";

import React, { useState, useRef, useEffect, forwardRef } from "react";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { cn } from "../lib/utils";

export type DropdownState = "default" | "focus" | "error" | "disabled";

export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps {
  /** Placeholder / floating-label text */
  placeholder?: string;
  /** External label rendered above the trigger */
  label?: string;
  /** Appends a red asterisk */
  required?: boolean;
  /** Override the visual state (for showcase) */
  forceState?: DropdownState;
  /** Error message shown below when state is "error" */
  errorMessage?: string;
  /** Helper text shown below */
  helperText?: string;
  /** Controlled selected value */
  value?: string;
  onChange?: (value: string) => void;
  /** Options list */
  options?: DropdownOption[];
  className?: string;
}

// ── Component ───────────────────────────────────────────────────────────────

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      placeholder = "Text label",
      label,
      required = false,
      forceState,
      errorMessage = "Error message",
      helperText,
      value,
      onChange,
      options = [],
      className,
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const [internalValue, setInternalValue] = useState("");
    const [search, setSearch] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const controlled = value !== undefined;
    const currentValue = controlled ? value : internalValue;
    const isDisabled = forceState === "disabled";
    const selectedLabel = options.find((o) => o.value === currentValue)?.label;
    const isFilled = Boolean(selectedLabel);

    // Derive visual state
    const state: DropdownState = forceState ?? (open ? "focus" : "default");
    const isError = state === "error";
    const isFocus = state === "focus";

    // ── Colours ─────────────────────────────────────────────────────────────
    const bg = isDisabled ? "bg-disabled-bg" : "bg-background";
    const labelColor = isDisabled ? "var(--disabled)" : "var(--muted-foreground)";
    const filledColor = isDisabled ? "var(--disabled)" : "var(--text-default-primary)";
    const caretClassName = isDisabled ? "text-disabled" : "text-muted-foreground";

    const hasExternalLabel = Boolean(label);

    // ── Border overlay ──────────────────────────────────────────────────────
    const borderInset = (isFocus || isError) ? "-1px" : "0px";
    const borderRad = (isFocus || isError) ? "9px" : "8px";
    const borderColor = isDisabled
      ? "var(--border-disabled)"
      : isError
        ? "var(--border-danger)"
        : isFocus
          ? "var(--primary-action)"
          : "var(--border-default)";

    const showBelow = isError || Boolean(helperText);
    const leftText = isError ? errorMessage : (helperText ?? "");
    const leftColor = isError ? "var(--bg-danger-primary)" : "var(--muted-foreground)";

    // ── Filtered options ────────────────────────────────────────────────────
    const filteredOptions = search.trim()
      ? options.filter((o) =>
          o.label.toLowerCase().includes(search.trim().toLowerCase())
        )
      : options;

    // Auto-focus input when open
    useEffect(() => {
      if (open && inputRef.current) {
        inputRef.current.focus();
      }
    }, [open]);

    // Clear search when closing
    useEffect(() => {
      if (!open) setSearch("");
    }, [open]);

    // Close on outside click
    useEffect(() => {
      if (!open) return;
      const handler = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handler);
      return () => document.removeEventListener("mousedown", handler);
    }, [open]);

    const handleSelect = (val: string) => {
      if (!controlled) setInternalValue(val);
      onChange?.(val);
      setOpen(false);
    };

    const handleToggle = () => {
      if (isDisabled) return;
      if (forceState) return;
      setOpen((prev) => !prev);
    };

    const handleInputKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      } else if (e.key === "Enter" && filteredOptions.length === 1) {
        handleSelect(filteredOptions[0].value);
      }
    };

    // ── Required asterisk helper ────────────────────────────────────────────
    const Asterisk = ({ color }: { color: string }) => (
      <span className="leading-[16px] not-italic text-[12px]" style={{ color }}>
        {" "}*
      </span>
    );

    return (
      <div
        ref={(node) => {
          (containerRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        className={cn("flex flex-col gap-1 w-full", className)}
      >
        {/* ── External label ── */}
        {label && (
          <div className="relative shrink-0 w-full">
            <div className="flex items-start px-1 w-full">
              <p className="leading-5 not-italic relative shrink-0 text-foreground text-sm font-bold whitespace-nowrap">
                {label}
              </p>
            </div>
          </div>
        )}

        {/* ── Trigger ── */}
        <div
          onClick={handleToggle}
          className={cn(
            "relative flex gap-2 items-center rounded-lg px-3.5",
            bg,
            hasExternalLabel
              ? "h-[38px]"
              : isFilled
                ? "py-1.5"
                : "py-3.5",
            !isDisabled && !forceState && "cursor-pointer"
          )}
        >
          {/* Border overlay */}
          <div
            aria-hidden="true"
            className="absolute pointer-events-none border border-solid"
            style={{ inset: borderInset, borderRadius: borderRad, borderColor }}
          />

          {open && !forceState ? (
            /* ─── Open: search input ─── */
            hasExternalLabel ? (
              /* External label + open → single-line search input */
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder={isFilled ? selectedLabel : placeholder + (required ? " *" : "")}
                className="flex-1 min-w-0 min-h-[1px] text-sm leading-5 not-italic bg-transparent outline-none border-none p-0 m-0 placeholder:text-disabled"
                style={{
                  color: filledColor,
                  caretColor: "var(--caret-color)",
                }}
                onClick={(e) => e.stopPropagation()}
              />
            ) : isFilled ? (
              /* Filled + open → floating label + search input */
              <div className="flex flex-col items-start justify-center flex-1 min-w-0 min-h-[1px]">
                <p
                  className="shrink-0 w-full leading-[16px] not-italic text-[12px]"
                  style={{ color: labelColor }}
                >
                  {placeholder}
                  {required && <Asterisk color={isDisabled ? "var(--disabled)" : "var(--error-dark)"} />}
                </p>
                <input
                  ref={inputRef}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={handleInputKeyDown}
                  placeholder={selectedLabel}
                  className="w-full leading-[20px] not-italic text-[14px] min-w-0 bg-transparent outline-none border-none p-0 m-0 placeholder:text-disabled"
                  style={{
                    color: filledColor,
                    caretColor: "var(--caret-color)",
                  }}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            ) : (
              /* Empty + open → inline search input */
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder={placeholder + (required ? " *" : "")}
                className="flex-1 min-w-0 min-h-[1px] text-base leading-5 not-italic bg-transparent outline-none border-none p-0 m-0 placeholder:text-muted-foreground"
                style={{
                  color: "var(--text-default-primary)",
                  caretColor: "var(--caret-color)",
                }}
                onClick={(e) => e.stopPropagation()}
              />
            )
          ) : isFilled ? (
            /* ─── Closed + Filled ─── */
            hasExternalLabel ? (
              /* External label → single-line selected value */
              <p
                className="flex-1 min-w-0 min-h-[1px] leading-5 not-italic text-sm overflow-hidden text-ellipsis whitespace-nowrap"
                style={{ color: filledColor }}
              >
                {selectedLabel}
                {required && <Asterisk color={isDisabled ? "var(--disabled)" : "var(--error-dark)"} />}
              </p>
            ) : (
              /* Default → floating label + selected value */
              <div className="flex flex-col items-start justify-center flex-1 min-w-0 min-h-[1px]">
                <p
                  className="shrink-0 w-full leading-4 not-italic text-xs"
                  style={{ color: labelColor }}
                >
                  {placeholder}
                  {required && <Asterisk color={isDisabled ? "var(--disabled)" : "var(--error-dark)"} />}
                </p>
                <p
                  className="w-full leading-5 not-italic text-sm min-w-0 min-h-[1px]"
                  style={{ color: filledColor }}
                >
                  {selectedLabel}
                </p>
              </div>
            )
          ) : (
            /* ─── Closed + Empty: placeholder ─── */
            required ? (
              <div className="flex flex-1 min-w-0 min-h-[1px] gap-[2px] items-center">
                <p
                  className="leading-5 not-italic text-base whitespace-nowrap"
                  style={{ color: labelColor }}
                >
                  {placeholder}
                </p>
                <p
                  className="leading-4 not-italic text-xs w-[7px]"
                  style={{ color: isDisabled ? "var(--disabled)" : "var(--error-dark)" }}
                >
                  *
                </p>
              </div>
            ) : (
              <p
                className="flex-1 min-w-0 min-h-[1px] text-base leading-5 not-italic overflow-hidden text-ellipsis whitespace-nowrap"
                style={{ color: labelColor }}
              >
                {placeholder}
              </p>
            )
          )}

          {/* Caret */}
          {isFocus ? (
            <CaretUp size={22} className={cn("shrink-0", caretClassName)} />
          ) : (
            <CaretDown size={22} className={cn("shrink-0", caretClassName)} />
          )}

          {/* ── Dropdown menu ── */}
          {open && !forceState && options.length > 0 && (
          <div
            className={cn(
              "absolute top-full left-0 w-full mt-1 bg-popover rounded-lg overflow-clip p-2 z-50 flex flex-col items-start text-popover-foreground",
              filteredOptions.length > 10 && "overflow-y-auto"
            )}
            style={{
              boxShadow: "var(--elevation-popover)",
              ...(filteredOptions.length > 10 ? { maxHeight: 10 * 48 + 16 } : {}),
            }}
          >
            {filteredOptions.length > 0 ? (
              filteredOptions.map((opt) => (
                <div
                  key={opt.value}
                  onClick={() => handleSelect(opt.value)}
                  className={cn(
                  "w-full shrink-0 rounded-[4px] cursor-pointer transition-colors duration-100",
                    opt.value === currentValue
                      ? "bg-primary-action-light"
                      : "bg-popover hover:bg-disabled-bg"
                  )}
                >
                  <div className="flex flex-row items-center size-full">
                    <div className="flex items-center p-3.5 relative w-full">
                      <p
                        className={cn(
                          "flex-1 min-w-0 min-h-[1px] leading-5 not-italic overflow-hidden text-sm text-ellipsis whitespace-nowrap",
                          opt.value === currentValue ? "text-primary-action" : "text-foreground"
                        )}
                      >
                        {opt.label}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full shrink-0 bg-popover">
                <div className="flex flex-row items-center size-full">
                  <div className="flex items-center p-[14px] relative w-full">
                    <p className="flex-1 min-w-0 min-h-[1px] leading-[20px] not-italic text-[14px] text-disabled">
                      No results found
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
          )}
        </div>

        {/* ── Below: helper / error ── */}
        {showBelow && (
          <div className="flex items-start px-[4px] text-[12px] leading-[16px]">
            <span className="flex-1 min-w-0" style={{ color: leftColor }}>
              {leftText}
            </span>
          </div>
        )}
      </div>
    );
  }
);

Dropdown.displayName = "Dropdown";

export { Dropdown };
