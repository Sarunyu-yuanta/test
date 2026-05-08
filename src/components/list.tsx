"use client";

import { forwardRef, useState, type MouseEvent, type ReactNode } from "react";
import { cn } from "../lib/utils";

export interface ListItemProps {
  /** Primary text content. */
  label: string;
  /** Element shown at the leading (left) side of the row. */
  leading?: ReactNode;
  /** Action link label shown on the right. */
  action?: string;
  /** Called when action link is clicked. */
  onAction?: (e: MouseEvent<HTMLButtonElement>) => void;
  /** Element shown at the trailing (right) side of the row. */
  trailing?: ReactNode;
  /** Highlighted (gray) background — applied automatically on press when onClick is set. */
  highlighted?: boolean;
  /** Called when the row is clicked. */
  onClick?: () => void;
  className?: string;
}

export interface ListProps {
  children: ReactNode;
  className?: string;
}

export const ListItem = forwardRef<HTMLDivElement, ListItemProps>(
  function ListItem(
    {
      label,
      leading,
      action,
      onAction,
      trailing,
      highlighted = false,
      onClick,
      className,
    },
    ref,
  ) {
    const [pressed, setPressed] = useState(false);
    const isHighlighted = highlighted || (!!onClick && pressed);

    return (
      <div
        ref={ref}
        onClick={onClick}
        onPointerDown={() => { if (onClick) setPressed(true); }}
        onPointerUp={() => setPressed(false)}
        onPointerLeave={() => setPressed(false)}
        className={cn(
          "flex items-center gap-3 p-4 h-[52px] border-b border-border",
          isHighlighted ? "bg-bg-default-pressed" : "bg-background",
          onClick && "cursor-pointer select-none hover:bg-bg-default-pressed",
          className,
        )}
      >
        {leading != null && (
          <span className="shrink-0 flex items-center text-icon-default [&_svg]:text-icon-default [&_svg]:size-6">
            {leading}
          </span>
        )}

        <span className="flex-1 min-w-0 text-sm leading-5 text-foreground truncate">
          {label}
        </span>

        {action && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onAction?.(e);
            }}
            className="shrink-0 text-sm font-medium text-primary-action hover:underline cursor-pointer whitespace-nowrap"
          >
            {action}
          </button>
        )}

        {trailing != null && (
          <span className="shrink-0 flex items-center text-icon-default [&_svg]:text-icon-default [&_svg]:size-6">
            {trailing}
          </span>
        )}
      </div>
    );
  },
);

ListItem.displayName = "ListItem";

export function List({ children, className }: ListProps) {
  return <div className={cn("flex flex-col", className)}>{children}</div>;
}
