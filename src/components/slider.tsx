"use client";

import {
  forwardRef,
  KeyboardEvent,
  useCallback,
  useId,
  useRef,
  useState,
} from "react";
import { cn } from "../lib/utils";

// ── Types ─────────────────────────────────────────────────────────────────────

export type SliderSize = "sm" | "md" | "lg";
export type SliderType = "single" | "range";

export interface SliderProps {
  /** Track height — sm=4 px, md=8 px, lg=12 px. Default: "md" */
  size?: SliderSize;
  /** Single thumb or two-thumb range. Default: "single" */
  type?: SliderType;
  /** Disable interaction. */
  disabled?: boolean;
  /** Show step labels (25 / 50 / 75 / 100) below the track. */
  showSteps?: boolean;
  /** Minimum value. Default: 0 */
  min?: number;
  /** Maximum value. Default: 100 */
  max?: number;
  /** Step increment. Default: 1 */
  step?: number;
  /** Controlled value (single). */
  value?: number;
  /** Controlled values [start, end] (range). */
  rangeValue?: [number, number];
  /** Uncontrolled default single value. Default: 50 */
  defaultValue?: number;
  /** Uncontrolled default range values. Default: [25, 75] */
  defaultRangeValue?: [number, number];
  /** Fires when the single value changes. */
  onChange?: (value: number) => void;
  /** Fires when range values change. */
  onRangeChange?: (values: [number, number]) => void;
  className?: string;
  id?: string;
}

// ── Size maps ─────────────────────────────────────────────────────────────────

const TRACK_HEIGHT: Record<SliderSize, string> = {
  sm: "h-1",
  md: "h-2",
  lg: "h-3",
};

const THUMB_SIZE_CLASS: Record<SliderSize, string> = {
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function clamp(v: number, lo: number, hi: number) {
  return Math.min(Math.max(v, lo), hi);
}

function snapToStep(raw: number, min: number, max: number, step: number) {
  return clamp(Math.round((raw - min) / step) * step + min, min, max);
}

function pctToValue(pct: number, min: number, max: number, step: number) {
  return snapToStep(min + (pct / 100) * (max - min), min, max, step);
}

function valueToPct(value: number, min: number, max: number): number {
  if (max <= min) return 0;
  return clamp(((value - min) / (max - min)) * 100, 0, 100);
}

// ── Component ─────────────────────────────────────────────────────────────────

export const Slider = forwardRef<HTMLDivElement, SliderProps>(function Slider(
  {
    size = "md",
    type = "single",
    disabled = false,
    showSteps = false,
    min = 0,
    max = 100,
    step = 1,
    value: valueProp,
    rangeValue: rangeProp,
    defaultValue = 50,
    defaultRangeValue = [25, 75],
    onChange,
    onRangeChange,
    className,
    id: idProp,
  },
  ref,
) {
  const autoId = useId();
  const trackRef = useRef<HTMLDivElement>(null);
  const activeThumb = useRef<"start" | "end" | null>(null);

  const [internalValue, setInternalValue] = useState<number>(() =>
    clamp(defaultValue, min, max),
  );
  const [internalRange, setInternalRange] = useState<[number, number]>(() => [
    clamp(defaultRangeValue[0], min, max),
    clamp(defaultRangeValue[1], min, max),
  ]);

  const isSingle = type === "single";
  const value = valueProp !== undefined ? valueProp : internalValue;
  const range: [number, number] =
    rangeProp !== undefined ? rangeProp : internalRange;

  // ── Value helpers ────────────────────────────────────────────────────────────

  const getValueFromClientX = useCallback(
    (clientX: number): number => {
      const track = trackRef.current;
      if (!track) return min;
      const { left, width } = track.getBoundingClientRect();
      const pct = clamp(((clientX - left) / width) * 100, 0, 100);
      return pctToValue(pct, min, max, step);
    },
    [min, max, step],
  );

  const commitSingle = useCallback(
    (newValue: number) => {
      if (valueProp === undefined) setInternalValue(newValue);
      onChange?.(newValue);
    },
    [valueProp, onChange],
  );

  const commitRange = useCallback(
    (newValue: number, thumb: "start" | "end") => {
      const [s, e] = rangeProp !== undefined ? rangeProp : internalRange;
      const next: [number, number] =
        thumb === "start"
          ? [clamp(newValue, min, e), e]
          : [s, clamp(newValue, s, max)];
      if (rangeProp === undefined) setInternalRange(next);
      onRangeChange?.(next);
    },
    [rangeProp, internalRange, min, max, onRangeChange],
  );

  // ── Pointer events ───────────────────────────────────────────────────────────

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (disabled) return;
      e.currentTarget.setPointerCapture(e.pointerId);
      const newValue = getValueFromClientX(e.clientX);

      if (isSingle) {
        activeThumb.current = "end";
        commitSingle(newValue);
      } else {
        const track = trackRef.current;
        if (track) {
          const { left, width } = track.getBoundingClientRect();
          const clickPct = ((e.clientX - left) / width) * 100;
          const distToStart = Math.abs(clickPct - valueToPct(range[0], min, max));
          const distToEnd = Math.abs(clickPct - valueToPct(range[1], min, max));
          activeThumb.current = distToStart <= distToEnd ? "start" : "end";
        } else {
          activeThumb.current = "end";
        }
        commitRange(newValue, activeThumb.current!);
      }
    },
    [disabled, getValueFromClientX, isSingle, range, min, max, commitSingle, commitRange],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!activeThumb.current || disabled) return;
      const newValue = getValueFromClientX(e.clientX);
      if (isSingle) {
        commitSingle(newValue);
      } else {
        commitRange(newValue, activeThumb.current);
      }
    },
    [disabled, getValueFromClientX, isSingle, commitSingle, commitRange],
  );

  const handlePointerUp = useCallback(() => {
    activeThumb.current = null;
  }, []);

  // ── Keyboard events ──────────────────────────────────────────────────────────

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>, thumb: "start" | "end") => {
      if (disabled) return;
      let delta = 0;
      if (e.key === "ArrowRight" || e.key === "ArrowUp") delta = step;
      else if (e.key === "ArrowLeft" || e.key === "ArrowDown") delta = -step;
      else if (e.key === "Home") delta = min - (isSingle ? value : range[thumb === "start" ? 0 : 1]);
      else if (e.key === "End") delta = max - (isSingle ? value : range[thumb === "start" ? 0 : 1]);
      if (!delta && e.key !== "Home" && e.key !== "End") return;
      e.preventDefault();

      if (isSingle) {
        commitSingle(clamp(value + delta, min, max));
      } else {
        const thumbVal = thumb === "start" ? range[0] : range[1];
        commitRange(clamp(thumbVal + delta, min, max), thumb);
      }
    },
    [disabled, step, min, max, isSingle, value, range, commitSingle, commitRange],
  );

  // ── Layout computations ──────────────────────────────────────────────────────

  const startPct = isSingle ? 0 : valueToPct(range[0], min, max);
  const endPct = isSingle
    ? valueToPct(value, min, max)
    : valueToPct(range[1], min, max);


  const thumbInteractive = cn(
    "absolute rounded-full",
    "shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10),0px_1px_2px_-1px_rgba(0,0,0,0.10)]",
    THUMB_SIZE_CLASS[size],
    disabled
      ? "bg-[var(--bg-default-secondary)] cursor-not-allowed"
      : "bg-[var(--fill-white-1000)] cursor-grab active:cursor-grabbing",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--bg-brand-primary)] focus-visible:ring-offset-2",
  );

  // ── Step label values ────────────────────────────────────────────────────────

  const stepLabels = [0, 0.25, 0.5, 0.75, 1].map((f) =>
    Math.round(min + (max - min) * f),
  );

  // ── Render ───────────────────────────────────────────────────────────────────

  return (
    <div
      ref={ref}
      id={idProp ?? autoId}
      className={cn("flex w-full flex-col", showSteps ? "gap-1.5" : "", className)}
    >
      {/* Track */}
      <div
        ref={trackRef}
        className={cn(
          "relative w-full rounded-full",
          TRACK_HEIGHT[size],
          "bg-[var(--fill-gray-200)]",
          disabled ? "cursor-not-allowed" : "cursor-pointer",
        )}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        {/* Filled range */}
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute top-0 h-full rounded-full",
            disabled
              ? "bg-[var(--fill-gray-300)]"
              : "bg-[var(--bg-brand-primary)]",
          )}
          style={{ left: `${startPct}%`, width: `${endPct - startPct}%` }}
        />

        {/* Single thumb */}
        {isSingle && (
          <div
            role="slider"
            tabIndex={disabled ? -1 : 0}
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={value}
            aria-disabled={disabled}
            className={thumbInteractive}
            style={{
              left: `${endPct}%`,
              top: "50%",
              transform: "translateX(-50%) translateY(-50%)",
            }}
            onKeyDown={(e) => handleKeyDown(e, "end")}
          />
        )}

        {/* Range start thumb */}
        {!isSingle && (
          <>
            <div
              role="slider"
              tabIndex={disabled ? -1 : 0}
              aria-valuemin={min}
              aria-valuemax={range[1]}
              aria-valuenow={range[0]}
              aria-label="Start value"
              aria-disabled={disabled}
              className={thumbInteractive}
              style={{
                left: `${startPct}%`,
                top: "50%",
                transform: "translateX(-50%) translateY(-50%)",
              }}
              onKeyDown={(e) => handleKeyDown(e, "start")}
            />
            {/* Range end thumb */}
            <div
              role="slider"
              tabIndex={disabled ? -1 : 0}
              aria-valuemin={range[0]}
              aria-valuemax={max}
              aria-valuenow={range[1]}
              aria-label="End value"
              aria-disabled={disabled}
              className={cn(thumbInteractive, "z-10")}
              style={{
                left: `${endPct}%`,
                top: "50%",
                transform: "translateX(-50%) translateY(-50%)",
              }}
              onKeyDown={(e) => handleKeyDown(e, "end")}
            />
          </>
        )}
      </div>

      {/* Step labels — absolutely positioned to match thumb centres */}
      {showSteps && (
        <div
          aria-hidden="true"
          className="relative w-full h-4"
        >
          {stepLabels.map((label) => {
            const pct = valueToPct(label, min, max);
            return (
              <span
                key={label}
                className="absolute text-xs leading-4 text-[var(--text-default-primary)] whitespace-nowrap"
                style={{ left: `${pct}%`, transform: "translateX(-50%)" }}
              >
                {label}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
});

Slider.displayName = "Slider";
