"use client";

import { Clock, Minus } from "@phosphor-icons/react";
import * as Popover from "@radix-ui/react-popover";
import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "../lib/utils";
import { BottomSheet } from "./bottom-sheet";
import { Button } from "./button";
import { useIsMobile } from "./ui/use-mobile";

// ─── Types ─────────────────────────────────────────────────────────────────────
export type TimeInputState =
  | "default"
  | "focus"
  | "error"
  | "disabled";
export type TimeInputMode = "single" | "range";

export interface TimeValue {
  hour: number; // 0–23
  minute: number; // 0–59
}

export interface TimeInputProps {
  mode?: TimeInputMode;
  /** Floating label / placeholder text */
  placeholder?: string;
  /** Shows red asterisk */
  required?: boolean;
  /** Override visual state (for showcase) */
  forceState?: TimeInputState;
  /** Error message shown below in error state */
  errorMessage?: string;
  /** Helper text shown below */
  helperText?: string;
  /** Single mode value */
  value?: TimeValue;
  onChange?: (v: TimeValue) => void;
  /** Range mode values */
  startTime?: TimeValue;
  endTime?: TimeValue;
  onStartChange?: (v: TimeValue) => void;
  onEndChange?: (v: TimeValue) => void;
  className?: string;
}

// ─── Constants ─────────────────────────────────────────────────────────────────
const HOURS = Array.from({ length: 24 }, (_, i) => i);
const MINUTES = Array.from({ length: 60 }, (_, i) => i);
const ITEM_H = 40;
const DRUM_H = 248;
const SPACER = (DRUM_H - ITEM_H) / 2;

// ─── Time Slot helpers (range mode) ───────────────────────────────────────────
export interface TimeSlot {
  start: TimeValue;
  end: TimeValue;
  label: string; // "HH:MM - HH:MM"
}

/** Generate 1-hour slots for the full day (00:00-01:00 … 23:00-00:00) */
function generateHourlySlots(): TimeSlot[] {
  return Array.from({ length: 24 }, (_, i) => ({
    start: { hour: i, minute: 0 },
    end: { hour: (i + 1) % 24, minute: 0 },
    label: `${pad2(i)}:00 - ${pad2((i + 1) % 24)}:00`,
  }));
}

function slotMatches(
  slot: TimeSlot,
  start: TimeValue,
  end: TimeValue,
) {
  return (
    slot.start.hour === start.hour &&
    slot.start.minute === start.minute &&
    slot.end.hour === end.hour &&
    slot.end.minute === end.minute
  );
}

function pad2(n: number) {
  return n.toString().padStart(2, "0");
}
function formatTime(v: TimeValue) {
  return `${pad2(v.hour)}:${pad2(v.minute)}`;
}

// ─── Scroll Drum Column ────────────────────────────────────────────────────────
function ScrollColumn({
  items,
  value,
  onChange,
}: {
  items: number[];
  value: number;
  onChange: (v: number) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<
    ReturnType<typeof setTimeout> | undefined
  >(undefined);
  const [localValue, setLocalValue] = useState(value);
  const isUserScrolling = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      el.scrollTop = items.indexOf(value) * ITEM_H;
      setLocalValue(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isUserScrolling.current) return;
    const el = containerRef.current;
    if (el) {
      const idx = items.indexOf(value);
      if (idx >= 0) {
        el.scrollTo({ top: idx * ITEM_H, behavior: "smooth" });
        setLocalValue(value);
      }
    }
  }, [value, items]);

  const handleScroll = useCallback(() => {
    isUserScrolling.current = true;
    const el = containerRef.current;
    if (!el) return;

    const rawIdx = el.scrollTop / ITEM_H;
    const idx = Math.max(
      0,
      Math.min(Math.round(rawIdx), items.length - 1),
    );
    setLocalValue(items[idx]);

    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      isUserScrolling.current = false;
      const finalIdx = Math.max(
        0,
        Math.min(
          Math.round(el.scrollTop / ITEM_H),
          items.length - 1,
        ),
      );
      const finalValue = items[finalIdx];
      el.scrollTo({
        top: finalIdx * ITEM_H,
        behavior: "smooth",
      });
      onChange(finalValue);
      setLocalValue(finalValue);
    }, 120);
  }, [items, onChange]);

  const handleItemClick = useCallback(
    (item: number) => {
      const idx = items.indexOf(item);
      setLocalValue(item);
      onChange(item);
      containerRef.current?.scrollTo({
        top: idx * ITEM_H,
        behavior: "smooth",
      });
    },
    [items, onChange],
  );

  return (
    <div
      ref={containerRef}
      className="relative [&::-webkit-scrollbar]:hidden"
      style={{
        width: 39,
        height: DRUM_H,
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
        scrollbarWidth: "none",
      }}
      onScroll={handleScroll}
    >
      <div style={{ height: SPACER, flexShrink: 0 }} />

      {items.map((item) => {
        const isSel = item === localValue;
        return (
          <div
            key={item}
            style={{
              height: ITEM_H,
              scrollSnapAlign: "center",
            }}
            className="flex items-center justify-center cursor-pointer select-none"
            onClick={() => handleItemClick(item)}
          >
            <span
              style={{
                fontSize: isSel ? 32 : 14,
                lineHeight: 1,
                color: isSel
                  ? "var(--text-default-primary)"
                  : "var(--disabled)",
                transition: "font-size 0.1s, color 0.1s",
              }}
            >
              {pad2(item)}
            </span>
          </div>
        );
      })}

      <div style={{ height: SPACER, flexShrink: 0 }} />
    </div>
  );
}

// ─── Range Slot Grid (PopupCalendar design) ────────────────────────────────────
const DEFAULT_SLOTS = generateHourlySlots();

function RangeSlotPicker({
  slots = DEFAULT_SLOTS,
  startValue,
  endValue,
  onSelect,
}: {
  slots?: TimeSlot[];
  startValue: TimeValue;
  endValue: TimeValue;
  onSelect: (slot: TimeSlot) => void;
}) {
  return (
    <div
      className="overflow-y-auto [&::-webkit-scrollbar]:hidden"
      style={{ maxHeight: 320, scrollbarWidth: "none", minWidth: 300 }}
    >
      <div
        className="content-center grid grid-cols-2 gap-x-[20px] gap-y-[32px] items-center justify-between overflow-clip relative"
        style={{ padding: "24px 40px" }}
      >
        {slots.map((slot, idx) => {
          const isSelected = slotMatches(
            slot,
            startValue,
            endValue,
          );
          return (
            <div
              key={idx}
              onClick={() => onSelect(slot)}
              className={cn(
                "content-stretch flex h-[25px] items-center justify-center relative rounded-[4px] shrink-0 cursor-pointer select-none transition-colors duration-100",
                isSelected
                  ? "bg-primary-action"
                  : "hover:bg-primary-action-light",
              )}
              style={{ padding: "2px 8px" }}
            >
              <p
                className="leading-[22px] relative shrink-0 text-[14px] text-center whitespace-nowrap"
                style={{
                  fontVariationSettings: "'wdth' 100",
                  color: isSelected
                    ? "var(--on-primary-action)"
                    : "var(--text-default-primary)",
                }}
              >
                {slot.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Action Buttons (ยกเลิก / ตกลง) ────────────────────────────────────────────
function PickerActions({
  onCancel,
  onConfirm,
  px = 24,
}: {
  onCancel?: () => void;
  onConfirm?: () => void;
  px?: number;
}) {
  return (
    <div
      className="flex gap-[12px] items-center"
      style={{ padding: `16px ${px}px` }}
    >
      <Button
        variant="outline"
        size="lg"
        className="flex-1"
        onClick={onCancel}
      >
        ยกเลิก
      </Button>
      <Button
        variant="primary"
        size="lg"
        className="flex-1"
        onClick={onConfirm}
      >
        ตกลง
      </Button>
    </div>
  );
}

// ─── Time Picker Content (drums / slots only — no bg, no buttons) ──────────────
function TimePickerContent({
  mode,
  singleValue,
  onSingleChange,
  startValue,
  endValue,
  onStartChange,
  onEndChange,
}: {
  mode: TimeInputMode;
  singleValue: TimeValue;
  onSingleChange: (v: TimeValue) => void;
  startValue: TimeValue;
  endValue: TimeValue;
  onStartChange: (v: TimeValue) => void;
  onEndChange: (v: TimeValue) => void;
}) {
  // ── Range mode → slot grid ─────────────────────────────────────────────────
  if (mode === "range") {
    return (
      <RangeSlotPicker
        startValue={startValue}
        endValue={endValue}
        onSelect={(slot) => {
          onStartChange(slot.start);
          onEndChange(slot.end);
        }}
      />
    );
  }

  // ── Single mode → drum scroll ──────────────────────────────────────────────
  const handleHour = (h: number) =>
    onSingleChange({ ...singleValue, hour: h });
  const handleMinute = (m: number) =>
    onSingleChange({ ...singleValue, minute: m });

  return (
    <div className="relative w-full">
      {/* Highlight band */}
      <div
        className="absolute left-0 right-0 rounded-[4px] bg-selected-light-bg pointer-events-none"
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          height: ITEM_H,
          zIndex: 0,
        }}
      />
      <div
        className="relative flex gap-[8px] items-center justify-center"
        style={{ zIndex: 1 }}
      >
        <ScrollColumn
          items={HOURS}
          value={singleValue.hour}
          onChange={handleHour}
        />
        <div
          className="flex items-center justify-center shrink-0"
          style={{ height: ITEM_H, width: 8 }}
        >
          <span
            style={{
              fontSize: 32,
              lineHeight: 1,
              color: "var(--text-default-primary)",
            }}
          >
            :
          </span>
        </div>
        <ScrollColumn
          items={MINUTES}
          value={singleValue.minute}
          onChange={handleMinute}
        />
      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
const TimeInput = forwardRef<HTMLDivElement, TimeInputProps>(
  (
    {
      mode = "single",
      placeholder = "Text label",
      required = false,
      forceState,
      errorMessage = "Error message",
      helperText,
      value,
      onChange,
      startTime,
      endTime,
      onStartChange,
      onEndChange,
      className,
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false);
    const isMobile = useIsMobile();

    const [internalSingle, setInternalSingle] = useState<
      TimeValue | undefined
    >(undefined);
    const [internalStart, setInternalStart] = useState<TimeValue>({
      hour: 0,
      minute: 0,
    });
    const [internalEnd, setInternalEnd] = useState<TimeValue>({
      hour: 0,
      minute: 0,
    });

    const [draftSingle, setDraftSingle] = useState<TimeValue>({
      hour: 0,
      minute: 0,
    });
    const [draftStart, setDraftStart] = useState<TimeValue>({
      hour: 0,
      minute: 0,
    });
    const [draftEnd, setDraftEnd] = useState<TimeValue>({
      hour: 0,
      minute: 0,
    });

    const isStatic = Boolean(forceState);
    const isDisabled = forceState === "disabled";

    const currentValue =
      value !== undefined ? value : internalSingle;
    const currentStart =
      startTime !== undefined ? startTime : internalStart;
    const currentEnd =
      endTime !== undefined ? endTime : internalEnd;

    const state: TimeInputState =
      forceState ?? (open ? "focus" : "default");
    const isError = state === "error";
    const isFocus = state === "focus";

    const isFilled =
      mode === "single" ? Boolean(currentValue) : true;

    // ── Colours ──────────────────────────────────────────────────────────────────
    const bgClass = isDisabled ? "bg-disabled-bg" : "bg-background";
    const labelColor = isDisabled
      ? "var(--disabled)"
      : "var(--muted-foreground)";
    const valueColor = isDisabled
      ? "var(--disabled)"
      : "var(--text-default-primary)";
    const iconColor = isDisabled
      ? "var(--disabled)"
      : "var(--muted-foreground)";
    const minusColor = isDisabled
      ? "var(--disabled)"
      : "var(--muted-foreground)";
    const asteriskColor = isDisabled
      ? "var(--disabled)"
      : "var(--error-dark)";
    const asteriskSmall = isDisabled
      ? "var(--disabled)"
      : "var(--error-dark)";

    // ── Border ────────────────────────────────────────────────────────────────────
    const borderInset = isFocus || isError ? "-1px" : "0px";
    const borderRad = isFocus || isError ? "9px" : "8px";
    const borderColor = isDisabled
      ? "var(--border-disabled)"
      : isError
        ? "var(--bg-danger-primary)"
        : isFocus
          ? "var(--primary-action)"
          : "var(--border-default)";

    const showBelow = isError || Boolean(helperText);
    const leftText = isError ? errorMessage : (helperText ?? "");
    const leftColor = isError
      ? "var(--error-dark)"
      : "var(--muted-foreground)";

    // ── Handlers ─────────────────────────────────────────────────────────────────
    const commitSingle = useCallback(
      (v: TimeValue) => {
        if (value === undefined) setInternalSingle(v);
        onChange?.(v);
      },
      [value, onChange],
    );
    const commitStart = useCallback(
      (v: TimeValue) => {
        if (startTime === undefined) setInternalStart(v);
        onStartChange?.(v);
      },
      [startTime, onStartChange],
    );
    const commitEnd = useCallback(
      (v: TimeValue) => {
        if (endTime === undefined) setInternalEnd(v);
        onEndChange?.(v);
      },
      [endTime, onEndChange],
    );

    // ── Trigger content ───────────────────────────────────────────────────────────
    const renderContent = () => {
      if (isFilled && (mode === "range" || currentValue)) {
        const floatLabel = required ? (
          <div className="flex gap-[2px] items-center shrink-0 w-full">
            <p
              className="leading-[16px] not-italic shrink-0 text-[12px] whitespace-nowrap"
              style={{ color: labelColor }}
            >
              {placeholder}
            </p>
            <p
              className="leading-[1.5] not-italic shrink-0 text-[9px] w-[7px]"
              style={{ color: asteriskSmall }}
            >
              *
            </p>
          </div>
        ) : (
          <p
            className="leading-[16px] not-italic shrink-0 text-[12px] w-full"
            style={{ color: labelColor }}
          >
            {placeholder}
          </p>
        );

        const valueRow =
          mode === "single" && currentValue ? (
            <p
              className="leading-[20px] not-italic shrink-0 text-[16px] w-full"
              style={{ color: valueColor }}
            >
              {formatTime(currentValue)}
            </p>
          ) : mode === "range" ? (
            <div className="flex gap-[8px] items-center shrink-0 w-full">
              <p
                className="leading-[20px] not-italic shrink-0 text-[16px] whitespace-nowrap"
                style={{ color: valueColor }}
              >
                {formatTime(currentStart)}
              </p>
              <Minus
                size={20}
                color={minusColor}
              />
              <p
                className="leading-[20px] not-italic shrink-0 text-[16px] whitespace-nowrap"
                style={{ color: valueColor }}
              >
                {formatTime(currentEnd)}
              </p>
            </div>
          ) : null;

        return (
          <div className="content-stretch flex flex-1 flex-col items-center justify-center min-h-px min-w-px relative">
            {floatLabel}
            {valueRow}
          </div>
        );
      }

      if (required) {
        return (
          <div className="content-stretch flex flex-1 min-w-px min-h-px gap-[2px] items-center relative">
            <p
              className="leading-[20px] not-italic shrink-0 text-[16px] whitespace-nowrap"
              style={{ color: labelColor }}
            >
              {placeholder}
            </p>
            <p
              className="font-normal h-full leading-[1.5] not-italic shrink-0 text-[12px] w-[7px]"
              style={{ color: asteriskColor }}
            >
              *
            </p>
          </div>
        );
      }

      return (
        <p
          className="flex-1 min-w-0 min-h-px text-[16px] leading-[20px] not-italic overflow-hidden text-ellipsis whitespace-nowrap relative"
          style={{ color: labelColor }}
        >
          {placeholder}
        </p>
      );
    };

    const isTriggerFilled =
      isFilled && (mode === "range" || currentValue);
    const triggerPadding = isTriggerFilled
      ? "py-1.5"
      : "py-3";
    const triggerBase = cn(
      "relative flex gap-2 items-center rounded-lg px-3.5 w-full",
      bgClass,
      triggerPadding,
    );

    const triggerInner = (
      <>
        <div
          aria-hidden="true"
          className="absolute pointer-events-none border border-solid"
          style={{
            inset: borderInset,
            borderRadius: borderRad,
            borderColor,
          }}
        />
        {renderContent()}
        <div
          className={cn(
            "flex flex-row items-center shrink-0",
            isTriggerFilled && "self-stretch",
          )}
        >
          <Clock
            size={isTriggerFilled ? 22 : 24}
            color={iconColor}
            weight="regular"
          />
        </div>
      </>
    );

    const belowMsg = showBelow && (
      <div className="flex items-start px-1 text-xs leading-4">
        <span
          className="flex-1 min-w-0"
          style={{ color: leftColor }}
        >
          {leftText}
        </span>
      </div>
    );

    // ── Static (forceState) ───────────────────────────────────────────────────────
    if (isStatic) {
      return (
        <div
          ref={ref}
          className={cn(
            "flex flex-col gap-[4px] w-full",
            className,
          )}
        >
          <div className={triggerBase}>{triggerInner}</div>
          {belowMsg}
        </div>
      );
    }

    const handleOpenChange = (o: boolean) => {
      if (!isDisabled) {
        if (o) {
          setDraftSingle(
            currentValue ?? { hour: 0, minute: 0 },
          );
          setDraftStart(currentStart);
          setDraftEnd(currentEnd);
        }
        setOpen(o);
      }
    };

    const handleCancel = () => setOpen(false);

    const handleConfirm = () => {
      if (mode === "single") {
        commitSingle(draftSingle);
      } else {
        commitStart(draftStart);
        commitEnd(draftEnd);
      }
      setOpen(false);
    };

    const triggerButton = (
      <button
        type="button"
        disabled={isDisabled}
        className={cn(
          triggerBase,
          "text-left cursor-pointer disabled:cursor-default",
        )}
      >
        {triggerInner}
      </button>
    );

    const pickerContent = (
      <TimePickerContent
        mode={mode}
        singleValue={draftSingle}
        onSingleChange={setDraftSingle}
        startValue={draftStart}
        endValue={draftEnd}
        onStartChange={setDraftStart}
        onEndChange={setDraftEnd}
      />
    );

    const actionButtons = (
      <div className="flex gap-[12px] items-center pt-[12px]">
        <Button
          variant="outline"
          size="lg"
          className="flex-1"
          onClick={handleCancel}
        >
          ยกเลิก
        </Button>
        <Button
          variant="primary"
          size="lg"
          className="flex-1"
          onClick={handleConfirm}
        >
          ตกลง
        </Button>
      </div>
    );

    // ── Interactive ───────────────────────────────────────────────────────────────
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col gap-[4px] w-full",
          className,
        )}
      >
        {isMobile ? (
          <BottomSheet
            open={open}
            onOpenChange={handleOpenChange}
            trigger={triggerButton}
            title="เลือกเวลา"
            showHeader={false}
            rightSide="none"
            contentClassName="pt-0"
          >
            <div className="overflow-auto px-4 pt-2 pb-8 w-full">
              {pickerContent}
              {actionButtons}
            </div>
          </BottomSheet>
        ) : (
          <Popover.Root
            open={open}
            onOpenChange={handleOpenChange}
          >
            <Popover.Trigger asChild>
              {triggerButton}
            </Popover.Trigger>

            <Popover.Portal>
              <Popover.Content
                align="start"
                sideOffset={4}
                className="z-50 rounded-[8px] bg-popover p-3 outline-none max-w-[340px] text-popover-foreground"
                style={{
                  boxShadow: "var(--elevation-popover)",
                  border: "1px solid var(--border-default)",
                  minWidth:
                    mode === "single" ? 327 : undefined,
                }}
                onOpenAutoFocus={(e) => e.preventDefault()}
              >
                {pickerContent}
                {actionButtons}
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        )}
        {belowMsg}
      </div>
    );
  },
);

TimeInput.displayName = "TimeInput";

export { TimeInput };
