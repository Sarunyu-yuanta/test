"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
  type ReactNode,
} from "react";
import { cn } from "../lib/utils";

export type TooltipSide = "top" | "bottom" | "left" | "right";
export type TooltipAlign = "start" | "center" | "end";

export interface TooltipProps {
  /** Trigger element that shows the tooltip on hover. */
  children: ReactNode;
  /** Content displayed inside the tooltip bubble. Accepts string or ReactNode. */
  content: ReactNode;
  /** Which side of the trigger to render the tooltip on. Default: "top". */
  side?: TooltipSide;
  /** Alignment of tooltip relative to the trigger. Default: "center". */
  align?: TooltipAlign;
  /** Delay in ms before the tooltip shows on hover. Default: 300. */
  delayDuration?: number;
  /** Gap in px between trigger and tooltip bubble. Default: 6. */
  sideOffset?: number;
  className?: string;
}

const TooltipContent = forwardRef<
  ElementRef<typeof TooltipPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset, children, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 max-w-64 rounded-lg bg-[var(--bg-default-dark)] p-2 text-sm leading-normal text-[var(--text-default-white)]",
        className,
      )}
      {...props}
    >
      {children}
      <TooltipPrimitive.Arrow
        width={8}
        height={4}
        style={{ fill: "var(--bg-default-dark)" }}
      />
    </TooltipPrimitive.Content>
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = "TooltipContent";

/**
 * Tooltip — shows contextual text on hover over any trigger element.
 *
 * Wraps `@radix-ui/react-tooltip` with the System One dark-bubble style.
 * The `children` prop is the trigger; `content` is what appears inside the bubble.
 *
 * @example
 * <Tooltip content="Delete this item">
 *   <Button variant="outline" size="icon-md">
 *     <Trash size={16} />
 *   </Button>
 * </Tooltip>
 */
export function Tooltip({
  children,
  content,
  side = "top",
  align = "center",
  delayDuration = 300,
  sideOffset = 6,
  className,
}: TooltipProps) {
  return (
    <TooltipPrimitive.Provider delayDuration={delayDuration}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          {children}
        </TooltipPrimitive.Trigger>
        <TooltipContent
          side={side}
          align={align}
          sideOffset={sideOffset}
          className={className}
        >
          {content}
        </TooltipContent>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
