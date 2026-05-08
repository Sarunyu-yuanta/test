"use client";

import { forwardRef, useId } from "react";
import { cn } from "../lib/utils";

// ─── LinearProgress ──────────────────────────────────────────────────────────

export interface LinearProgressProps {
  /** Progress value from 0 to 100. */
  value: number;
  className?: string;
}

export const LinearProgress = forwardRef<HTMLDivElement, LinearProgressProps>(
  function LinearProgress({ value, className }, ref) {
    const pct = Math.min(100, Math.max(0, value));
    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        className={cn(
          "relative h-1 w-full rounded-full bg-bg-default-tertiary overflow-hidden",
          className,
        )}
      >
        <div
          className="absolute inset-y-0 left-0 h-full rounded-full bg-bg-brand transition-[width] duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    );
  },
);

LinearProgress.displayName = "LinearProgress";

// ─── CircleProgress ──────────────────────────────────────────────────────────

export type CircleProgressSize = "sm" | "md" | "lg";

export interface CircleProgressProps {
  /** Progress value from 0 to 100. */
  value: number;
  /**
   * Visual size of the indicator.
   * - `"lg"` — 128 × 128 px, large label inside
   * - `"md"` — 48 × 48 px, small label inside
   * - `"sm"` — 24 × 24 px, no label
   *
   * Default: `"lg"`
   */
  size?: CircleProgressSize;
  className?: string;
}

type SizeConfig = {
  dimension: number;
  r: number;
  strokeWidth: number;
  /** CSS color for the background track ring (differs per size in Figma) */
  trackColor: string;
  /** px — Noto Sans Thai / H4 (lg) or Subtitle2 (md) per Figma */
  fontSize: number;
  /** leading — used as dy nudge to match Figma label positioning */
  lineHeight: number;
  showLabel: boolean;
};

// r/strokeWidth/fontSize derived from Figma: lg=128px, md=48px, sm=24px (no label)
const SIZE_CONFIG: Record<CircleProgressSize, SizeConfig> = {
  lg: { dimension: 128, r: 60, strokeWidth: 8, trackColor: "var(--bg-default-tertiary)", fontSize: 24, lineHeight: 36, showLabel: true  },
  md: { dimension: 48,  r: 22, strokeWidth: 3, trackColor: "var(--bg-default-tertiary)", fontSize: 14, lineHeight: 20, showLabel: true  },
  sm: { dimension: 24,  r: 8,  strokeWidth: 2, trackColor: "var(--fill-black-200)",      fontSize: 0,  lineHeight: 0,  showLabel: false },
};

export const CircleProgress = forwardRef<SVGSVGElement, CircleProgressProps>(
  function CircleProgress({ value, size = "lg", className }, ref) {
    const pct = Math.min(100, Math.max(0, value));
    const cfg = SIZE_CONFIG[size];
    const circumference = 2 * Math.PI * cfg.r;
    const offset = circumference * (1 - pct / 100);
    const cx = cfg.dimension / 2;
    const isZero = pct === 0;

    // Unique gradient ID — each SVG instance needs its own so they don't
    // collide when multiple CircleProgress components appear on one page.
    const uid = useId();
    const gradientId = `cp-grad-${uid}`;

    return (
      <svg
        ref={ref}
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        width={cfg.dimension}
        height={cfg.dimension}
        viewBox={`0 0 ${cfg.dimension} ${cfg.dimension}`}
        className={cn("shrink-0", className)}
      >
        <defs>
          {/* Vertical gradient: cyan at top (#00a1e9) → navy at bottom (#004eba), aligns with arc start */}
          <linearGradient
            id={gradientId}
            gradientUnits="userSpaceOnUse"
            x1={cx}
            y1={0}
            x2={cx}
            y2={cfg.dimension}
          >
            <stop offset="0%"   stopColor="#00a1e9" />
            <stop offset="100%" stopColor="#004eba" />
          </linearGradient>
        </defs>

        {/* Background track */}
        <circle
          cx={cx}
          cy={cx}
          r={cfg.r}
          fill="none"
          stroke={cfg.trackColor}
          strokeWidth={cfg.strokeWidth}
        />

        {/* Progress arc — only rendered when value > 0 */}
        {pct > 0 && (
          <circle
            cx={cx}
            cy={cx}
            r={cfg.r}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth={cfg.strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform={`rotate(-90 ${cx} ${cx})`}
            style={{ transition: "stroke-dashoffset 0.3s ease" }}
          />
        )}

        {/* Percentage label — lg and md only; fontVariationSettings forces bold on Noto Sans Thai variable font */}
        {cfg.showLabel && (
          <text
            x={cx}
            y={cx}
            textAnchor="middle"
            dominantBaseline="central"
            style={{
              fontSize: cfg.fontSize,
              lineHeight: cfg.lineHeight,
              fontWeight: 700,
              fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700",
              fill: isZero
                ? "var(--text-default-placeholder)"
                : "var(--text-brand-primary)",
              fontFamily: "'Noto Sans Thai', sans-serif",
            }}
          >
            {pct}%
          </text>
        )}
      </svg>
    );
  },
);

CircleProgress.displayName = "CircleProgress";
