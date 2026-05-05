"use client";

import type { CSSProperties } from "react";
import { cn } from "../lib/utils";
import { Avatar, type AvatarType, type AvatarSize } from "./avatar";

export type AvatarStackSize = "small" | "medium" | "large";

export interface AvatarStackItem {
  /** Display type — defaults to "photo". */
  type?: AvatarType;
  /** Image URL for photo type. */
  src?: string;
  /** Alt text for photo type. */
  alt?: string;
  /** Initials for text type. */
  initials?: string;
}

export interface AvatarStackProps {
  /** Avatars to display in the stack. */
  items: AvatarStackItem[];
  /** Size variant — small=16px, medium=20px, large=24px. */
  size?: AvatarStackSize;
  /** Maximum number of visible avatars. */
  max?: number;
  /** Additional class names applied to the root element. */
  className?: string;
}

/**
 * Integer overlap values give pixel-perfect equal spacing for every avatar in the
 * stack regardless of count or screen DPR. Fractional values (e.g. 12.33 px) get
 * rounded differently per position by the browser, producing unequal gaps.
 *
 * Derived from Figma (node 7674-9934), rounded to nearest integer:
 *   small  (16 px avatar): Figma spacing ≈ 12.33 px → overlapPx = 4  (spacing = 12 px)
 *   medium (20 px avatar): Figma spacing ≈ 15.33 px → overlapPx = 5  (spacing = 15 px)
 *   large  (24 px avatar): Figma spacing ≈ 18.67 px → overlapPx = 5  (spacing = 19 px)
 */
const STACK_CONFIG: Record<
  AvatarStackSize,
  { avatarSize: AvatarSize; avatarPx: number; overlapPx: number }
> = {
  small:  { avatarSize: "xxs", avatarPx: 16, overlapPx: 4 },
  medium: { avatarSize: "xs",  avatarPx: 20, overlapPx: 5 },
  large:  { avatarSize: "s",   avatarPx: 24, overlapPx: 5 },
};

/**
 * Builds a CSS mask that shows the current avatar as a circle with a circular
 * "bite" removed from the right side — exactly where the next avatar sits.
 *
 * The bite radius is 1 px larger than the avatar radius to leave a thin
 * transparent sliver between the two avatars; the page background (white) shows
 * through this sliver, creating the visible separator ring.
 *
 * Standard CSS: `mask-composite: subtract` subtracts the second layer from the first.
 * Safari:       reversed layer order + `destination-out` achieves the same result.
 */
function subtractMask(avatarPx: number, overlapPx: number): CSSProperties {
  const r = avatarPx / 2;
  const spacingPx = avatarPx - overlapPx; // distance between avatar left edges
  const biteX = spacingPx + r;            // center of next avatar, relative to this one
  const biteY = r;
  const biteR = r + 1;                    // 1 px extra → thin white separator

  const self = `radial-gradient(circle at ${r}px ${r}px, white ${r}px, transparent ${r}px)`;
  const bite = `radial-gradient(circle at ${biteX}px ${biteY}px, white ${biteR}px, transparent ${biteR}px)`;

  return {
    maskImage: `${self}, ${bite}`,
    maskComposite: "subtract" as CSSProperties["maskComposite"],
    WebkitMaskImage: `${bite}, ${self}`,
    WebkitMaskComposite: "destination-out" as CSSProperties["WebkitMaskComposite"],
  };
}

export function AvatarStack({
  items,
  size = "small",
  max = 5,
  className,
}: AvatarStackProps) {
  const { avatarSize, avatarPx, overlapPx } = STACK_CONFIG[size];
  const visible = items.slice(0, max);

  return (
    <div className={cn("flex shrink-0", className)}>
      {visible.map((item, i) => {
        const isLast = i === visible.length - 1;
        return (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            className="relative flex shrink-0"
            style={{
              width: avatarPx,
              height: avatarPx,
              marginLeft: i > 0 ? -overlapPx : 0,
              // Leftmost = highest z-index: its transparent bite reveals the avatar below.
              zIndex: visible.length - i,
              ...(isLast ? {} : subtractMask(avatarPx, overlapPx)),
            }}
          >
            <Avatar
              type={item.type ?? "photo"}
              size={avatarSize}
              src={item.src}
              alt={item.alt}
              initials={item.initials}
            />
          </div>
        );
      })}
    </div>
  );
}
