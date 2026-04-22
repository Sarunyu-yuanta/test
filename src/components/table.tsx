"use client";

import { ArrowDown, ArrowUp, ArrowsDownUp, Circle } from "@phosphor-icons/react";
import {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type HTMLAttributes,
  type MouseEventHandler,
  type ReactNode,
  type TableHTMLAttributes,
  type ThHTMLAttributes,
  type TdHTMLAttributes,
} from "react";
import { Button } from "./button";
import { Checkbox, type CheckboxChecked } from "./checkbox";
import { Tag, type TagVariant } from "./tag";
import { cn } from "../lib/utils";

export type TableHeaderType = "text" | "icon" | "check";
export type TableHeaderState = "default" | "hover" | "disabled";
export type TableCellType = "default" | "text-icon" | "text-image" | "tag" | "icon" | "button" | "checkbox";
export type TableCellTextStyle = "default" | "bold" | "bold-description";

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  /** Wraps the table with horizontal scrolling while keeping native table semantics. */
  responsive?: boolean;
}

export interface TableHeaderCellProps extends ThHTMLAttributes<HTMLTableCellElement> {
  type?: TableHeaderType;
  state?: TableHeaderState;
  sortable?: boolean;
  icon?: ReactNode;
  sortDirection?: "none" | "asc" | "desc";
  onSortChange?: (next: "none" | "asc" | "desc") => void;
  checkState?: CheckboxChecked;
  onCheckChange?: (next: boolean) => void;
  fixed?: "left" | "right";
  fixedOffset?: number;
  fixedShadow?: "left" | "right";
}

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  type?: TableCellType;
  textStyle?: TableCellTextStyle;
  selected?: boolean;
  hovered?: boolean;
  label?: ReactNode;
  description?: ReactNode;
  imageSrc?: string;
  tagText?: string;
  tagVariant?: TagVariant;
  icon?: ReactNode;
  contentAlign?: "start" | "center";
  fixed?: "left" | "right";
  fixedOffset?: number;
  fixedShadow?: "left" | "right";
}

type TableScrollShadowState = {
  hasLeftOverflow: boolean;
  hasRightOverflow: boolean;
};

const TableScrollShadowContext = createContext<TableScrollShadowState>({
  hasLeftOverflow: false,
  hasRightOverflow: false,
});

type TableRowState = {
  selected: boolean;
  hovered: boolean;
};

const TableRowStateContext = createContext<TableRowState>({
  selected: false,
  hovered: false,
});

function getSurface(selected: boolean, hovered: boolean) {
  if (selected) return "bg-[var(--bg-brand-primary-light,#f3f8fe)]";
  if (hovered) return "bg-[var(--bg-default-secondary,#f9fafb)]";
  return "bg-[var(--bg-default-primary-medium,white)]";
}

function getTextClass(textStyle: TableCellTextStyle) {
  return textStyle === "bold" || textStyle === "bold-description"
    ? "font-bold text-foreground"
    : "font-normal text-foreground";
}

function resolveStickyShadowDirection(
  fixed?: "left" | "right",
  fixedShadow?: "left" | "right"
) {
  if (fixedShadow) return fixedShadow;
  if (fixed === "left") return "right";
  if (fixed === "right") return "left";
  return undefined;
}

function StickyShadowEdge({ direction }: { direction: "left" | "right" }) {
  if (direction === "left") {
    return (
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-[-10px] w-2.5"
        style={{
          background:
            "linear-gradient(90deg, rgba(16,24,40,0.00) 0%, rgba(16,24,40,0.03) 55%, rgba(16,24,40,0.08) 100%)",
        }}
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 right-[-10px] w-2.5"
      style={{
        background:
          "linear-gradient(90deg, rgba(16,24,40,0.08) 0%, rgba(16,24,40,0.03) 45%, rgba(16,24,40,0.00) 100%)",
      }}
    />
  );
}

export const Table = forwardRef<HTMLTableElement, TableProps>(function Table(
  { className, responsive = true, ...props },
  ref
) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [shadowState, setShadowState] = useState<TableScrollShadowState>({
    hasLeftOverflow: false,
    hasRightOverflow: false,
  });

  useEffect(() => {
    if (!responsive) return;
    const el = scrollRef.current;
    if (!el) return;

    const updateShadowState = () => {
      const maxScrollLeft = Math.max(0, el.scrollWidth - el.clientWidth);
      setShadowState({
        hasLeftOverflow: el.scrollLeft > 0,
        hasRightOverflow: el.scrollLeft < maxScrollLeft - 1,
      });
    };

    updateShadowState();
    el.addEventListener("scroll", updateShadowState, { passive: true });
    window.addEventListener("resize", updateShadowState);

    const observer = new ResizeObserver(updateShadowState);
    observer.observe(el);
    if (el.firstElementChild instanceof HTMLElement) {
      observer.observe(el.firstElementChild);
    }

    return () => {
      el.removeEventListener("scroll", updateShadowState);
      window.removeEventListener("resize", updateShadowState);
      observer.disconnect();
    };
  }, [responsive]);

  const contextValue = useMemo(() => shadowState, [shadowState]);

  const table = (
    <table
      ref={ref}
      className={cn("w-full border-collapse border-spacing-0 text-sm", className)}
      {...props}
    />
  );

  if (!responsive) return table;
  return (
    <TableScrollShadowContext.Provider value={contextValue}>
      <div ref={scrollRef} className="w-full overflow-x-auto">
        {table}
      </div>
    </TableScrollShadowContext.Provider>
  );
});

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  selected?: boolean;
  /** Enables built-in hover state propagation to cells in this row. */
  hoverable?: boolean;
}

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  function TableRow(
    { className, selected = false, hoverable = true, onMouseEnter, onMouseLeave, ...props },
    ref
  ) {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter: MouseEventHandler<HTMLTableRowElement> = (e) => {
      if (hoverable) setHovered(true);
      onMouseEnter?.(e);
    };

    const handleMouseLeave: MouseEventHandler<HTMLTableRowElement> = (e) => {
      if (hoverable) setHovered(false);
      onMouseLeave?.(e);
    };

    const rowState = useMemo(
      () => ({ selected, hovered: hoverable ? hovered : false }),
      [hoverable, hovered, selected]
    );

    return (
      <TableRowStateContext.Provider value={rowState}>
        <tr
          ref={ref}
          className={cn("align-middle", className)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          {...props}
        />
      </TableRowStateContext.Provider>
    );
  }
);

export const TableHeaderCell = forwardRef<HTMLTableCellElement, TableHeaderCellProps>(
  function TableHeaderCell(
    {
      className,
      type = "text",
      state = "default",
      sortable = true,
      icon,
      sortDirection,
      onSortChange,
      checkState = false,
      onCheckChange,
      fixed,
      fixedOffset = 0,
      fixedShadow,
      children = "Title text",
      style: styleProp,
      onClick: onClickProp,
      ...props
    },
    ref
  ) {
    const { hasLeftOverflow, hasRightOverflow } = useContext(TableScrollShadowContext);
    const [internalDirection, setInternalDirection] = useState<"none" | "asc" | "desc">("none");
    const isControlledSort = sortDirection !== undefined;
    const currentDirection = isControlledSort ? sortDirection : internalDirection;

    const stateClass =
      state === "disabled"
        ? "bg-[var(--bg-default-tertiary,#f3f4f6)] text-[var(--text-default-tertiary,#6a7282)]"
        : state === "hover"
          ? "bg-[var(--bg-default-secondary,#f9fafb)] text-[var(--text-default-tertiary,#6a7282)]"
          : "bg-[var(--bg-default-primary,white)] text-[var(--text-default-tertiary,#6a7282)]";
    const interactiveHoverClass =
      state === "default" ? "hover:bg-[var(--bg-default-secondary,#f9fafb)]" : "";

    const sortIcon =
      currentDirection === "asc" ? (
        <ArrowUp size={16} weight="fill" className="shrink-0" />
      ) : currentDirection === "desc" ? (
        <ArrowDown size={16} weight="fill" className="shrink-0" />
      ) : (
        <ArrowsDownUp size={16} weight="fill" className="shrink-0" />
      );

    const handleClick: MouseEventHandler<HTMLTableCellElement> = (e) => {
      onClickProp?.(e);
      if (type !== "text" || !sortable || state === "disabled") return;
      const nextDirection =
        currentDirection === "none"
          ? "asc"
          : currentDirection === "asc"
            ? "desc"
            : "none";
      if (!isControlledSort) setInternalDirection(nextDirection);
      onSortChange?.(nextDirection);
    };

    const content =
      type === "text" ? (
        <>
          <span className="text-sm leading-5 font-normal">{children}</span>
          {sortable && sortIcon}
        </>
      ) : type === "icon" ? (
        icon ?? <Circle size={20} weight="regular" className="shrink-0" />
      ) : (
        <Checkbox
          checked={checkState}
          disabled={state === "disabled"}
          onChange={onCheckChange}
          ariaLabel="Select all rows"
        />
      );

    const fixedStyle =
      fixed === "left"
        ? { left: fixedOffset }
        : fixed === "right"
          ? { right: fixedOffset }
          : undefined;

    const shadowDirection = resolveStickyShadowDirection(fixed, fixedShadow);
    const shouldShowShadow =
      shadowDirection === "right"
        ? hasLeftOverflow
        : shadowDirection === "left"
          ? hasRightOverflow
          : false;

    return (
      <th
        ref={ref}
        className={cn(
          "relative h-12 border-b border-border px-4 py-3",
          type === "text" ? "min-w-[284px] text-left" : "w-[56px] text-center",
          stateClass,
          interactiveHoverClass,
          fixed && "sticky z-20",
          sortable && type === "text" && state !== "disabled" && "cursor-pointer select-none",
          className
        )}
        style={{ ...fixedStyle, ...styleProp }}
        {...props}
        onClick={handleClick}
      >
        {shadowDirection && shouldShowShadow && (
          <StickyShadowEdge direction={shadowDirection} />
        )}
        <div
          className={cn(
            "flex items-center",
            type === "text" ? "justify-start gap-1" : "justify-center gap-0"
          )}
        >
          {content}
        </div>
      </th>
    );
  }
);

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(function TableCell(
  {
    className,
    type = "default",
    textStyle = "default",
    selected,
    hovered,
    label,
    description = "Text Description",
    imageSrc,
    tagText = "Tag",
    tagVariant = "gray",
    icon,
    contentAlign = "start",
    fixed,
    fixedOffset = 0,
    fixedShadow,
    style: styleProp,
    children,
    ...props
  },
  ref
) {
  const { hasLeftOverflow, hasRightOverflow } = useContext(TableScrollShadowContext);
  const rowState = useContext(TableRowStateContext);
  const cellSelected = selected ?? rowState.selected;
  const cellHovered = hovered ?? rowState.hovered;
  const surfaceClass = getSurface(cellSelected, cellHovered);
  const primaryTextClass = getTextClass(textStyle);
  const hasDescription = textStyle === "bold-description";
  const iconSize = hasDescription ? 24 : 20;
  const imageSize = hasDescription ? "size-8" : "size-5";

  const fixedStyle =
    fixed === "left"
      ? { left: fixedOffset }
      : fixed === "right"
        ? { right: fixedOffset }
        : undefined;

  const shadowDirection = resolveStickyShadowDirection(fixed, fixedShadow);
  const shouldShowShadow =
    shadowDirection === "right"
      ? hasLeftOverflow
      : shadowDirection === "left"
        ? hasRightOverflow
        : false;

  const primaryContent = children ?? label ?? "Text label";

  return (
    <td
      ref={ref}
      className={cn(
        "relative border-b border-border px-4",
        hasDescription ? "py-3 align-top" : "py-3.5 align-middle",
        surfaceClass,
        type === "default" || type === "text-icon" || type === "text-image" || type === "tag"
          ? "min-w-[284px]"
          : "w-[56px]",
        fixed && "sticky z-10",
        className
      )}
      style={{ ...fixedStyle, ...styleProp }}
      {...props}
    >
      {shadowDirection && shouldShowShadow && (
        <StickyShadowEdge direction={shadowDirection} />
      )}
      {type === "default" && (
        <div className="flex min-w-0 flex-col">
          <span className={cn("text-sm leading-5", primaryTextClass)}>{primaryContent}</span>
          {hasDescription && (
            <span className="text-xs leading-4 font-normal text-subtle-text">{description}</span>
          )}
        </div>
      )}

      {type === "text-icon" && (
        <div className="flex items-center gap-2">
          {icon ?? <Circle size={iconSize} weight="regular" className="shrink-0 text-subtle-text" />}
          <div className="flex min-w-0 flex-col">
            <span className={cn("text-sm leading-5", primaryTextClass)}>{primaryContent}</span>
            {hasDescription && (
              <span className="text-xs leading-4 font-normal text-subtle-text">{description}</span>
            )}
          </div>
        </div>
      )}

      {type === "text-image" && (
        <div className="flex items-center gap-2">
          <div className={cn("shrink-0 overflow-hidden rounded", imageSize)}>
            {imageSrc ? (
              <img
                alt=""
                className="pointer-events-none size-full object-cover"
                src={imageSrc}
              />
            ) : (
              <div className="size-full bg-hover-bg" />
            )}
          </div>
          <div className="flex min-w-0 flex-col">
            <span className={cn("text-sm leading-5", primaryTextClass)}>{primaryContent}</span>
            {hasDescription && (
              <span className="text-xs leading-4 font-normal text-subtle-text">{description}</span>
            )}
          </div>
        </div>
      )}

      {type === "tag" && (
        <div className="flex items-center">
          <Tag text={tagText} size="large" variant={tagVariant} />
        </div>
      )}

      {type === "icon" && (
        <div
          className={cn(
            "flex items-center",
            contentAlign === "start" ? "justify-start" : "justify-center"
          )}
        >
          {icon ?? <Circle size={24} weight="regular" className="text-subtle-text" />}
        </div>
      )}

      {type === "button" && (
        <div
          className={cn(
            "flex items-center",
            contentAlign === "start" ? "justify-start" : "justify-center"
          )}
        >
          <Button size="xs" variant="outline-black">
            Button
          </Button>
        </div>
      )}

      {type === "checkbox" && (
        <div
          className={cn(
            "flex items-center",
            contentAlign === "start" ? "justify-start" : "justify-center"
          )}
        >
          <Checkbox checked={cellSelected} />
        </div>
      )}
    </td>
  );
});

Table.displayName = "Table";
TableRow.displayName = "TableRow";
TableHeaderCell.displayName = "TableHeaderCell";
TableCell.displayName = "TableCell";
