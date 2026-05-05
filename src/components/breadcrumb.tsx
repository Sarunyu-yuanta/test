"use client";

import { cn } from "../lib/utils";

export interface BreadcrumbItem {
  /** Display label for this breadcrumb segment. */
  label: string;
  /** Optional href — when provided the item renders as an anchor. */
  href?: string;
}

export interface BreadcrumbProps {
  /**
   * Ordered list of breadcrumb segments.
   * The last item is always rendered as the current (active) page.
   */
  items: BreadcrumbItem[];
  /** Additional class names applied to the root element. */
  className?: string;
}

function BreadcrumbLabel({ item, isLast }: { item: BreadcrumbItem; isLast: boolean }) {
  const base = "shrink-0 text-sm leading-5";
  if (isLast) {
    return (
      <span aria-current="page" className={`${base} text-text-brand-secondary`}>
        {item.label}
      </span>
    );
  }
  if (item.href) {
    return (
      <a href={item.href} className={`${base} text-text-default-secondary hover:text-foreground transition-colors`}>
        {item.label}
      </a>
    );
  }
  return (
    <span className={`${base} text-text-default-secondary`}>
      {item.label}
    </span>
  );
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center gap-1", className)}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={index} className="flex items-center gap-1">
            <BreadcrumbLabel item={item} isLast={isLast} />
            {!isLast && (
              <span aria-hidden="true" className="shrink-0 text-sm leading-5 text-text-default-placeholder select-none">
                /
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
