"use client";

import React, { forwardRef } from "react";
import { cn } from "../lib/utils";

// ─── Page ────────────────────────────────────────────────────────────────────

export type PageWidth = "sm" | "md" | "lg" | "xl" | "full";

const pageWidthClass: Record<PageWidth, string> = {
  sm: "max-w-[640px]",
  md: "max-w-[960px]",
  lg: "max-w-[1200px]",
  xl: "max-w-[1440px]",
  full: "max-w-none",
};

export interface PageProps extends React.HTMLAttributes<HTMLElement> {
  /** Container max-width. Default "lg" (1200px). */
  width?: PageWidth;
}

export const Page = forwardRef<HTMLElement, PageProps>(function Page(
  { width = "lg", className, children, ...rest },
  ref,
) {
  return (
    <main
      ref={ref}
      className={cn(
        "mx-auto w-full px-6 md:px-8 py-10 flex flex-col gap-12",
        pageWidthClass[width],
        className,
      )}
      {...rest}
    >
      {children}
    </main>
  );
});

// ─── PageHeader ──────────────────────────────────────────────────────────────

export interface PageHeaderProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Right-aligned actions (buttons, links). */
  actions?: React.ReactNode;
  /** Content above the title (badges, breadcrumb). */
  eyebrow?: React.ReactNode;
}

export const PageHeader = forwardRef<HTMLElement, PageHeaderProps>(
  function PageHeader(
    { title, description, actions, eyebrow, className, ...rest },
    ref,
  ) {
    return (
      <header
        ref={ref}
        className={cn(
          "flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between",
          className,
        )}
        {...rest}
      >
        <div className="flex flex-col gap-2 min-w-0">
          {eyebrow && (
            <div className="flex flex-wrap items-center gap-2">{eyebrow}</div>
          )}
          <h1>{title}</h1>
          {description && (
            <p className="text-muted-foreground max-w-[720px]">{description}</p>
          )}
        </div>
        {actions && (
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {actions}
          </div>
        )}
      </header>
    );
  },
);

// ─── Section ─────────────────────────────────────────────────────────────────

export interface SectionProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** Right-aligned actions beside the title. */
  actions?: React.ReactNode;
}

export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { title, description, actions, className, children, ...rest },
  ref,
) {
  const hasHeader = Boolean(title || description || actions);
  return (
    <section
      ref={ref}
      className={cn("flex flex-col gap-6", className)}
      {...rest}
    >
      {hasHeader && (
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-1 min-w-0">
            {title && <h2>{title}</h2>}
            {description && (
              <p className="text-muted-foreground max-w-[720px]">
                {description}
              </p>
            )}
          </div>
          {actions && (
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {actions}
            </div>
          )}
        </div>
      )}
      {children}
    </section>
  );
});

// ─── Toolbar ─────────────────────────────────────────────────────────────────

export interface ToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Right-aligned cluster (pushed with ml-auto). */
  end?: React.ReactNode;
}

export const Toolbar = forwardRef<HTMLDivElement, ToolbarProps>(
  function Toolbar({ end, className, children, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-wrap items-center gap-3",
          className,
        )}
        {...rest}
      >
        {children}
        {end && <div className="ml-auto flex items-center gap-3">{end}</div>}
      </div>
    );
  },
);

// ─── CardGrid ────────────────────────────────────────────────────────────────

export type CardGridCols = 2 | 3 | 4;

const cardGridColsClass: Record<CardGridCols, string> = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
};

export interface CardGridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Max columns at wide breakpoints. Default 3. */
  cols?: CardGridCols;
}

export const CardGrid = forwardRef<HTMLDivElement, CardGridProps>(
  function CardGrid({ cols = 3, className, children, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={cn("grid gap-6", cardGridColsClass[cols], className)}
        {...rest}
      >
        {children}
      </div>
    );
  },
);

// ─── Stack ───────────────────────────────────────────────────────────────────

export type StackGap = 1 | 2 | 3 | 4 | 6 | 8 | 10 | 12;
export type StackDirection = "row" | "col";
export type StackAlign = "start" | "center" | "end" | "stretch";
export type StackJustify =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around";

const stackGapClass: Record<StackGap, string> = {
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  6: "gap-6",
  8: "gap-8",
  10: "gap-10",
  12: "gap-12",
};

const stackAlignClass: Record<StackAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

const stackJustifyClass: Record<StackJustify, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
};

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Flex direction. Default "col". */
  direction?: StackDirection;
  /** Spacing scale (maps to Tailwind gap-*). Default 4 (16px). */
  gap?: StackGap;
  align?: StackAlign;
  justify?: StackJustify;
  /** Wrap children on row direction. */
  wrap?: boolean;
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(function Stack(
  {
    direction = "col",
    gap = 4,
    align,
    justify,
    wrap,
    className,
    children,
    ...rest
  },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(
        "flex",
        direction === "col" ? "flex-col" : "flex-row",
        stackGapClass[gap],
        align && stackAlignClass[align],
        justify && stackJustifyClass[justify],
        wrap && "flex-wrap",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
});
