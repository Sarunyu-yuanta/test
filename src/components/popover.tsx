"use client";

import * as PopoverPrimitive from "@radix-ui/react-popover";
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ElementRef,
  type ReactNode,
} from "react";
import { cn } from "../lib/utils";

export type PopoverSide = "top" | "bottom" | "left" | "right";
export type PopoverAlign = "start" | "center" | "end";

export interface PopoverProps {
  /** Trigger element that opens the popover on click. */
  children: ReactNode;
  /** Content rendered inside the popover bubble. Accepts any ReactNode. */
  content: ReactNode;
  /** Which side of the trigger to render the popover on. Default: "bottom". */
  side?: PopoverSide;
  /** Alignment of popover relative to the trigger. Default: "start". */
  align?: PopoverAlign;
  /** Offset in px along the alignment axis. */
  alignOffset?: number;
  /** Whether to shift the popover to avoid viewport collisions. Default: true. */
  avoidCollisions?: boolean;
  /** Gap in px between trigger and popover bubble. Default: 4. */
  sideOffset?: number;
  /** Controlled open state. */
  open?: boolean;
  /** Callback when open state changes. */
  onOpenChange?: (open: boolean) => void;
  /** Extra classes applied to the popover content bubble. */
  className?: string;
  /** Inline styles applied to the popover content bubble (e.g. dynamic width). */
  contentStyle?: CSSProperties;
}

const PopoverContent = forwardRef<
  ElementRef<typeof PopoverPrimitive.Content>,
  ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, sideOffset, children, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 rounded-lg border border-border bg-popover p-3 outline-none shadow-popover text-popover-foreground [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        className,
      )}
      onOpenAutoFocus={(e) => e.preventDefault()}
      {...props}
    >
      {children}
    </PopoverPrimitive.Content>
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = "PopoverContent";

/**
 * Popover — a floating panel that appears on click over any trigger element.
 *
 * Wraps `@radix-ui/react-popover` with the System One panel style —
 * white background, border, and elevation shadow matching Time Input's picker.
 * The `children` prop is the trigger; `content` is what appears inside the bubble.
 *
 * @example
 * <Popover content={<div>Panel content here</div>}>
 *   <Button variant="outline" size="md">Open</Button>
 * </Popover>
 */
export function Popover({
  children,
  content,
  side = "bottom",
  align = "start",
  alignOffset,
  avoidCollisions,
  sideOffset = 4,
  open,
  onOpenChange,
  className,
  contentStyle,
}: PopoverProps) {
  return (
    <PopoverPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <PopoverPrimitive.Trigger asChild>
        {children}
      </PopoverPrimitive.Trigger>
      <PopoverContent
        side={side}
        align={align}
        alignOffset={alignOffset}
        avoidCollisions={avoidCollisions}
        sideOffset={sideOffset}
        className={className}
        style={contentStyle}
      >
        {content}
      </PopoverContent>
    </PopoverPrimitive.Root>
  );
}
