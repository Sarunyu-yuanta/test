"use client";

import React, {
  forwardRef,
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
  useLayoutEffect,
} from "react";
import { CaretDown, CaretUp, Check, X } from "@phosphor-icons/react";
import { cn } from "../lib/utils";

export type DropdownMultipleState =
  | "default"
  | "focus"
  | "error"
  | "disabled";

export interface DropdownMultipleOption {
  label: string;
  value: string;
}

export interface DropdownMultipleProps {
  /** Placeholder / floating-label text */
  placeholder?: string;
  /** Text label rendered above the input */
  label?: string;
  /** Appends a red asterisk */
  required?: boolean;
  /** Override the visual state (for showcase) */
  forceState?: DropdownMultipleState;
  /** Error message shown below when state is "error" */
  errorMessage?: string;
  /** Helper text shown below */
  helperText?: string;
  /** Controlled selected values */
  value?: string[];
  onChange?: (value: string[]) => void;
  /** Options list */
  options?: DropdownMultipleOption[];
  className?: string;
}

const TAG_GAP = 4;
const MAX_COMPONENT_WIDTH = 343;

// ── Tag chip (removable) ────────────────────────────────────────────────────
function RemovableTag({
  label,
  disabled,
  onRemove,
  maxWidth,
}: {
  label: string;
  disabled?: boolean;
  onRemove?: () => void;
  maxWidth?: number;
}) {
  const textColor = disabled ? "var(--disabled)" : "var(--subtle-text)";
  const iconColor = disabled ? "var(--disabled)" : "var(--muted-foreground)";

  return (
    <div
      className="bg-disabled-bg flex items-center overflow-hidden pl-[8px] pr-[8px] py-[4px] rounded-[4px] shrink-0 relative group"
      style={
        maxWidth !== undefined
          ? { maxWidth, flexShrink: 1 }
          : undefined
      }
    >
      <p
        className="leading-[16px] not-italic text-[12px] whitespace-nowrap overflow-hidden text-ellipsis pr-[4px]"
        style={{ color: textColor }}
      >
        {label}{" "}
      </p>

      {!disabled && onRemove && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="absolute right-[4px] top-1/2 -translate-y-1/2 flex items-center justify-center rounded-[2px] p-[1px] cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-150 bg-[#e5e7eb]"
        >
          <X
            size={12}
            weight="bold"
            color={iconColor}
            className="shrink-0"
          />
        </button>
      )}
    </div>
  );
}

// ── Tag chip (static, for showcase forceState) ──────────────────────────────
function StaticTag({
  label,
  disabled,
  maxWidth,
}: {
  label: string;
  disabled?: boolean;
  maxWidth?: number;
}) {
  const textColor = disabled ? "var(--disabled)" : "var(--subtle-text)";
  return (
    <div
      className="bg-disabled-bg flex items-center justify-center overflow-clip px-[8px] py-[4px] rounded-[4px] shrink-0"
      style={
        maxWidth !== undefined
          ? { maxWidth, flexShrink: 1 }
          : undefined
      }
    >
      <p
        className="leading-[16px] not-italic text-[12px] whitespace-nowrap overflow-hidden text-ellipsis"
        style={{ color: textColor }}
      >
        {label}
      </p>
    </div>
  );
}

// ── Overflow count badge ────────────────────────────────────────────────────
function OverflowBadge({
  count,
  disabled,
}: {
  count: number;
  disabled?: boolean;
}) {
  const bg = disabled ? "bg-[#fafafa]" : "bg-selected-bg";
  const textColor = disabled ? "var(--disabled)" : "var(--primary-action)";
  return (
    <div
      className={cn(
        bg,
        "flex items-center justify-center overflow-clip px-[8px] py-[4px] rounded-[4px] shrink-0",
      )}
    >
      <p
        className="leading-[16px] not-italic text-[12px] whitespace-nowrap"
        style={{ color: textColor }}
      >
        +{count}
      </p>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// Hook: measure how many tags fit within the available width
// ════════════════════════════════════════════════════════════════════════════
interface ChipLayout {
  visibleCount: number;
  lastTagMaxWidth: number | undefined;
}

function useChipLayout(
  selectedOptions: DropdownMultipleOption[],
  measureRef: React.RefObject<HTMLDivElement | null>,
  containerRef: React.RefObject<HTMLDivElement | null>,
): ChipLayout {
  const [layout, setLayout] = useState<ChipLayout>({
    visibleCount: selectedOptions.length,
    lastTagMaxWidth: undefined,
  });

  useLayoutEffect(() => {
    const calculate = () => {
      const total = selectedOptions.length;

      if (!measureRef.current || total === 0) {
        setLayout({
          visibleCount: total,
          lastTagMaxWidth: undefined,
        });
        return;
      }

      const tagEls = Array.from(
        measureRef.current.children,
      ) as HTMLElement[];

      const containerWidth =
        containerRef.current?.offsetWidth ??
        MAX_COMPONENT_WIDTH;

      const RIGHT_SECTION_WIDTH = 60;

      const budget =
        containerWidth * 0.72 - RIGHT_SECTION_WIDTH;

      let used = 0;
      let count = 0;

      for (let i = 0; i < tagEls.length; i++) {
        const w = tagEls[i].offsetWidth;
        const gap = count > 0 ? TAG_GAP : 0;
        const nextUsed = used + gap + w;

        if (nextUsed <= budget) {
          used = nextUsed;
          count++;
        } else {
          count++;
          break;
        }
      }

      count = Math.max(1, count);

      const overflowCount = total - count;

      const isFullWidth = used >= budget * 0.98;
      let lastTagMaxWidth: number | undefined;

      if (overflowCount > 0 || isFullWidth) {
        const prevTagsWidth = tagEls
          .slice(0, count - 1)
          .reduce(
            (sum, el, i) =>
              sum + el.offsetWidth + (i > 0 ? TAG_GAP : 0),
            0,
          );

        const gapBeforeLast = count > 1 ? TAG_GAP : 0;

        const remaining =
          budget - prevTagsWidth - gapBeforeLast;

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const lastNaturalW =
          tagEls[count - 1]?.offsetWidth ?? 0;

        if (remaining > 0) {
          lastTagMaxWidth = remaining;
        }
      }

      setLayout({ visibleCount: count, lastTagMaxWidth });
    };

    calculate();
    document.fonts?.ready?.then(calculate);
  }, [selectedOptions, measureRef, containerRef]);

  return layout;
}

// ════════════════════════════════════════════════════════════════════════════
// Main component
// ════════════════════════════════════════════════════════════════════════════
export const DropdownMultiple = forwardRef<HTMLDivElement, DropdownMultipleProps>(
  function DropdownMultiple(
    {
      placeholder = "Placeholder",
      label,
      required = false,
      forceState,
      errorMessage = "Error message",
      helperText,
      value,
      onChange,
      options = [],
      className = "",
    },
    ref,
  ) {
    const [open, setOpen] = useState(false);
    const [internalValue, setInternalValue] = useState<string[]>([]);
    const [search, setSearch] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const measureRef = useRef<HTMLDivElement>(null);

    React.useImperativeHandle(ref, () => containerRef.current as HTMLDivElement);

    const controlled = value !== undefined;
    const currentValue = controlled ? value : internalValue;
    const isDisabled = forceState === "disabled";
    const isStatic = Boolean(forceState);
    const isFilled = currentValue.length > 0;

    const state: DropdownMultipleState =
      forceState ?? (open ? "focus" : "default");
    const isError = state === "error";
    const isFocus = state === "focus";

    // ── Colours ─────────────────────────────────────────────────────────────
  const bg = isDisabled ? "bg-disabled-bg" : "bg-white";
    const labelColor = isDisabled ? "var(--disabled)" : "var(--muted-foreground)";
    const caretColor = isDisabled ? "var(--disabled)" : "var(--muted-foreground)";

    // ── Border overlay ──────────────────────────────────────────────────────
    const borderInset = isFocus || isError ? "-1px" : "0px";
    const borderRad = isFocus || isError ? "9px" : "8px";
    const borderColor = isDisabled
      ? "var(--border-disabled)"
      : isError
        ? "var(--destructive)"
        : isFocus
          ? "var(--primary-action)"
          : "var(--border)";

    const showBelow = isError || Boolean(helperText);
    const leftText = isError ? errorMessage : (helperText ?? "");
    const leftColor = isError ? "var(--destructive)" : "var(--muted-foreground)";

    // ── Selected options ────────────────────────────────────────────────────
    const selectedOptions = useMemo(
      () =>
        currentValue
          .map((v) => options.find((o) => o.value === v))
          .filter(Boolean) as DropdownMultipleOption[],
      [currentValue, options],
    );

    // ── Dynamic visible count ───────────────────────────────────────────────
    const { visibleCount, lastTagMaxWidth } = useChipLayout(
      selectedOptions,
      measureRef,
      containerRef,
    );

    const visibleTags = selectedOptions.slice(0, visibleCount);
    const overflowCount = Math.max(
      0,
      selectedOptions.length - visibleCount,
    );

    // ── Filtered options ────────────────────────────────────────────────────
    const filteredOptions = useMemo(() => {
      if (!search.trim()) return options;
      const q = search.trim().toLowerCase();
      return options.filter((o) =>
        o.label.toLowerCase().includes(q),
      );
    }, [search, options]);

    useEffect(() => {
      if (open && inputRef.current) inputRef.current.focus();
    }, [open]);

    useEffect(() => {
      if (!open) setSearch("");
    }, [open]);

    useEffect(() => {
      if (!open) return;
      const handler = (e: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(e.target as Node)
        ) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handler);
      return () =>
        document.removeEventListener("mousedown", handler);
    }, [open]);

    const updateValue = useCallback(
      (next: string[]) => {
        if (!controlled) setInternalValue(next);
        onChange?.(next);
      },
      [controlled, onChange],
    );

    const handleToggleOption = useCallback(
      (val: string) => {
        const next = currentValue.includes(val)
          ? currentValue.filter((v) => v !== val)
          : [...currentValue, val];
        updateValue(next);
      },
      [currentValue, updateValue],
    );

    const handleRemoveTag = useCallback(
      (val: string) => {
        updateValue(currentValue.filter((v) => v !== val));
      },
      [currentValue, updateValue],
    );

    const handleTriggerClick = () => {
      if (isDisabled || isStatic) return;
      if (!open) setOpen(true);
      inputRef.current?.focus();
    };

    const handleInputKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (
        e.key === "Backspace" &&
        search === "" &&
        currentValue.length > 0
      ) {
        updateValue(currentValue.slice(0, -1));
      }
    };

    // ── Floating label ──────────────────────────────────────────────────────
    const FloatingLabel = () =>
      required ? (
        <div className="flex gap-[2px] items-center shrink-0 w-full">
          <p
            className="shrink-0 leading-4 not-italic text-xs"
            style={{ color: labelColor }}
          >
            {placeholder}
          </p>
          <p
            className="leading-[1.5] not-italic text-[9px] w-[7px]"
            style={{
              color: isDisabled ? "var(--disabled)" : "var(--error-dark)",
            }}
          >
            *
          </p>
        </div>
      ) : (
        <p
          className="shrink-0 w-full leading-4 not-italic text-xs"
          style={{ color: labelColor }}
        >
          {placeholder}
        </p>
      );

    // ── Placeholder (empty state) ───────────────────────────────────────────
    const Placeholder = () =>
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
          className="flex-1 min-w-0 min-h-[1px] text-base leading-5 not-italic overflow-hidden text-ellipsis whitespace-nowrap py-[7px]"
          style={{ color: labelColor }}
        >
          {placeholder}
        </p>
      );

    // ── Hidden measurement layer ────────────────────────────────────────────
    const MeasurementLayer = () => (
      <div
        ref={measureRef}
        aria-hidden
        className="absolute flex gap-1 items-center pointer-events-none"
        style={{
          visibility: "hidden",
          top: 0,
          left: 0,
          height: 0,
          overflow: "hidden",
        }}
      >
        {selectedOptions.map((opt) =>
          isStatic ? (
            <StaticTag
              key={opt.value}
              label={opt.label}
              disabled={isDisabled}
            />
          ) : (
            <RemovableTag
              key={opt.value}
              label={opt.label}
              disabled={isDisabled}
            />
          ),
        )}
      </div>
    );

    // ── Render: trigger content ─────────────────────────────────────────────
    const renderTriggerContent = () => {
      const hasExternalLabel = Boolean(label);

      // ─── STATIC SHOWCASE ───
      if (isStatic) {
        if (isFilled) {
          return (
            <div className="flex flex-col items-start flex-1 min-w-0 min-h-[1px] relative">
              <MeasurementLayer />{" "}
              {!hasExternalLabel && <FloatingLabel />}
              <div
                className="flex gap-[4px] items-center shrink-0 overflow-hidden"
                style={{ maxWidth: "100%" }}
              >
                {visibleTags.map((opt, i) => (
                  <StaticTag
                    key={opt.value}
                    label={opt.label}
                    disabled={isDisabled}
                    maxWidth={
                      i === visibleTags.length - 1
                        ? lastTagMaxWidth
                        : undefined
                    }
                  />
                ))}
              </div>
            </div>
          );
        }
        if (!isFilled) {
          return <Placeholder />;
        }

        return null;
      }

      // ─── INTERACTIVE FILLED ───
      if (isFilled) {
        return (
          <div className="flex flex-col items-start flex-1 min-w-0 min-h-[1px] relative">
            <MeasurementLayer />
            {!hasExternalLabel && <FloatingLabel />}
            <div
              className="flex gap-[4px] items-center overflow-hidden"
              style={{ maxWidth: "100%" }}
            >
              {visibleTags.map((opt, i) => (
                <RemovableTag
                  key={opt.value}
                  label={opt.label}
                  onRemove={() => handleRemoveTag(opt.value)}
                  maxWidth={
                    i === visibleTags.length - 1
                      ? lastTagMaxWidth
                      : undefined
                  }
                />
              ))}

              {open && (
                <input
                  ref={inputRef}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={handleInputKeyDown}
                  className="flex-1 min-w-[40px] outline-none border-none bg-transparent text-[14px] leading-[20px]"
                  style={{
                    color: "var(--foreground)",
                    caretColor: "var(--caret-color)",
                  }}
                  onClick={(e) => e.stopPropagation()}
                />
              )}
            </div>
          </div>
        );
      }

      // ─── EMPTY OPEN ───
      if (open) {
        return (
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleInputKeyDown}
            className="flex-1 min-w-[40px] outline-none border-none bg-transparent text-[14px] leading-[20px]"
            style={{
              color: "var(--foreground)",
              caretColor: "var(--caret-color)",
            }}
            onClick={(e) => e.stopPropagation()}
          />
        );
      }

      // ─── EMPTY CLOSED ───
      if (!isFilled) {
        return <Placeholder />;
      }

      return null;
    };

    const hasExternalLabel = Boolean(label);

    return (
      <div
        ref={containerRef}
        className={cn("flex flex-col gap-[4px] w-full max-w-[343px]", className)}
      >
        {label && (
          <div className="relative shrink-0 w-full">
            <div className="flex items-start px-[4px] w-full">
              <p
                className="leading-[20px] not-italic relative shrink-0 text-foreground text-[14px] whitespace-nowrap"
                style={{ fontWeight: 700 }}
              >
                {label}
              </p>
            </div>
          </div>
        )}

        <div
          onClick={handleTriggerClick}
          className={cn(
            "relative flex gap-[8px] items-center rounded-[8px]",
            bg,
            "px-3.5",
            hasExternalLabel ? "h-10" : "py-1 min-h-12",
            !isDisabled && !isStatic && "cursor-pointer",
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
          {renderTriggerContent()}

          {isFilled && overflowCount > 0 && (
            <div
              className={hasExternalLabel ? "self-center" : "self-end"}
            >
              <OverflowBadge
                count={overflowCount}
                disabled={isDisabled}
              />
            </div>
          )}

          <span className="shrink-0" style={{ color: caretColor }}>
            {isFocus ? <CaretUp size={22} /> : <CaretDown size={22} />}
          </span>
        </div>

        {open && !isStatic && options.length > 0 && (
          <div
            className="relative bg-white rounded-[8px] overflow-clip p-[8px] z-20 flex flex-col items-start"
            style={{
              boxShadow:
                "0px 20px 25px -5px rgba(0,0,0,0.1), 0px 8px 10px -6px rgba(0,0,0,0.1)",
            }}
          >
            <div
              className={cn(
                "w-full flex flex-col",
                filteredOptions.length > 10 && "overflow-y-auto",
              )}
              style={
                filteredOptions.length > 10
                  ? { maxHeight: 10 * 48 }
                  : undefined
              }
            >
              {filteredOptions.length > 0 ? (
                filteredOptions.map((opt) => {
                  const isSelected = currentValue.includes(opt.value);
                  return (
                    <div
                      key={opt.value}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToggleOption(opt.value);
                        inputRef.current?.focus();
                      }}
                      className={cn(
                        "w-full shrink-0 rounded-[4px] cursor-pointer transition-colors duration-100",
                        isSelected
                          ? "bg-primary-action-light"
                          : "bg-white hover:bg-disabled-bg",
                      )}
                    >
                      <div className="flex flex-row items-center size-full">
                        <div className="flex items-center gap-[8px] p-[14px] relative w-full">
                          <p
                            className={cn(
                              "flex-1 min-w-0 min-h-[1px] leading-[20px] not-italic overflow-hidden text-[14px] text-ellipsis whitespace-nowrap",
                              isSelected
                                ? "text-primary-action"
                                : "text-foreground",
                            )}
                          >
                            {opt.label}
                          </p>
                          <div
                            className={cn(
                              "shrink-0 w-[16px] h-[16px] rounded-[3px] flex items-center justify-center transition-colors duration-100",
                              "bg-transparent",
                            )}
                          >
                            {isSelected && (
                              <Check
                                size={12}
                                weight="bold"
                                className="text-primary-action"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="w-full shrink-0 bg-white">
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
          </div>
        )}

        {showBelow && (
          <div className="flex items-start px-[4px] text-[12px] leading-[16px]">
            <span
              className="flex-1 min-w-0"
              style={{ color: leftColor }}
            >
              {leftText}
            </span>
          </div>
        )}
      </div>
    );
  },
);

DropdownMultiple.displayName = "DropdownMultiple";
