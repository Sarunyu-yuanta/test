"use client";

import { useEffect, useRef, useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { cn } from "../lib/utils";

// ─── Banner ───────────────────────────────────────────────────────────────────

export interface PaginationBannerProps {
  /** Total number of slides. */
  count: number;
  /** Zero-based index of the active slide. */
  activeIndex: number;
  /** Called when the user clicks an indicator dot. */
  onIndexChange?: (index: number) => void;
  className?: string;
}

export function PaginationBanner({
  count,
  activeIndex,
  onIndexChange,
  className,
}: PaginationBannerProps) {
  return (
    <div
      className={cn("flex items-center gap-1", className)}
      role="tablist"
      aria-label="Slide indicators"
    >
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          role="tab"
          aria-selected={i === activeIndex}
          aria-label={`Slide ${i + 1}`}
          onClick={() => onIndexChange?.(i)}
          className={cn(
            "h-1.5 rounded-[12px] transition-all duration-200",
            i === activeIndex
              ? "w-8 bg-bg-brand"
              : "w-1.5 bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20",
          )}
        />
      ))}
    </div>
  );
}

// ─── Carousel ─────────────────────────────────────────────────────────────────

export interface PaginationCarouselProps {
  /** Total number of slides/items. */
  count: number;
  /** Zero-based index of the active slide/item. */
  activeIndex: number;
  /** Ratio of visible width to total scroll width (0–1). Controls pill size. */
  viewRatio?: number;
  /** Scroll progress (0–1). When provided, positions the pill smoothly. */
  scrollProgress?: number;
  /** Called when users navigate with arrows or click an indicator. */
  onIndexChange?: (index: number) => void;
  className?: string;
}

export function PaginationCarousel({
  count,
  activeIndex,
  viewRatio,
  scrollProgress,
  onIndexChange,
  className,
}: PaginationCarouselProps) {
  const clampedCount = Math.max(1, count);
  const clampedIndex = Math.min(clampedCount - 1, Math.max(0, activeIndex));
  const trackWidth = 40;
  const pillWidth = Math.max(4, Math.round(trackWidth * (viewRatio ?? 1 / clampedCount)));
  const maxSlide = trackWidth - pillWidth;
  const pillLeft = scrollProgress !== undefined
    ? Math.round(scrollProgress * maxSlide)
    : clampedCount > 1
      ? Math.round((clampedIndex / (clampedCount - 1)) * maxSlide)
      : 0;

  const goTo = (index: number) => {
    const next = Math.min(clampedCount - 1, Math.max(0, index));
    if (next !== clampedIndex) onIndexChange?.(next);
  };

  return (
    <div
      className={cn("flex items-center gap-2", className)}
      role="group"
      aria-label="Carousel pagination"
    >
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => goTo(clampedIndex - 1)}
        disabled={clampedIndex <= 0}
        className="inline-flex h-6 w-6 items-center justify-center rounded-md text-icon-default transition-colors hover:bg-bg-default-hover disabled:cursor-not-allowed disabled:opacity-40"
      >
        <CaretLeft size={16} weight="regular" />
      </button>

      <div
        className="relative h-1.5 overflow-hidden rounded-[48px] bg-black/10 dark:bg-white/10"
        style={{ width: trackWidth }}
        role="progressbar"
        aria-valuenow={clampedIndex + 1}
        aria-valuemin={1}
        aria-valuemax={clampedCount}
      >
        <div
          className="absolute top-0 h-full rounded-[12px] bg-bg-brand transition-all duration-200"
          style={{ width: pillWidth, left: pillLeft }}
        />
      </div>

      <button
        type="button"
        aria-label="Next slide"
        onClick={() => goTo(clampedIndex + 1)}
        disabled={clampedIndex >= clampedCount - 1}
        className="inline-flex h-6 w-6 items-center justify-center rounded-md text-icon-default transition-colors hover:bg-bg-default-hover disabled:cursor-not-allowed disabled:opacity-40"
      >
        <CaretRight size={16} weight="regular" />
      </button>
    </div>
  );
}

// ─── Default (Pagination) ─────────────────────────────────────────────────────

export interface PaginationProps {
  /** Total number of pages. */
  totalPages: number;
  /** Currently active page (1-based). */
  currentPage: number;
  /** Called when the user selects a page or navigates with arrows. */
  onPageChange?: (page: number) => void;
  className?: string;
}

function buildPageItems(total: number): (number | "...")[] {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
  return [1, 2, 3, "...", total];
}

function buildHiddenPages(total: number): number[] {
  if (total <= 5) return [];
  return Array.from({ length: total - 4 }, (_, i) => i + 4);
}

export function Pagination({
  totalPages,
  currentPage,
  onPageChange,
  className,
}: PaginationProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const ellipsisRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!dropdownOpen) return;
    function handleOutside(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [dropdownOpen]);

  const pageItems = buildPageItems(totalPages);
  const hiddenPages = buildHiddenPages(totalPages);

  const goTo = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange?.(page);
      setDropdownOpen(false);
    }
  };

  const cellPage =
    "box-border flex h-full min-h-0 shrink-0 items-center justify-center px-4 py-1 text-sm font-normal leading-5 text-text-default transition-colors select-none";
  const cellNav =
    "box-border inline-flex h-full min-h-0 w-[39px] shrink-0 items-center justify-center p-0 leading-none text-icon-default transition-colors select-none [&_svg]:block [&_svg]:shrink-0";
  const divider = "border-l border-border";

  const ellipsisLeft = ellipsisRef.current
    ? ellipsisRef.current.offsetLeft + ellipsisRef.current.offsetWidth / 2
    : undefined;

  return (
    <div ref={containerRef} className={cn("relative inline-flex w-fit", className)}>
      <nav
        aria-label="Pagination"
        className="box-border inline-flex h-8 w-fit items-stretch overflow-hidden rounded-lg border border-border"
      >
        {/* Previous */}
        <button
          type="button"
          aria-label="Previous page"
          disabled={currentPage <= 1}
          onClick={() => goTo(currentPage - 1)}
          className={cn(
            cellNav,
            "bg-bg-default hover:bg-bg-default-hover disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer",
          )}
        >
          <CaretLeft size={16} weight="regular" />
        </button>

        {/* Page items */}
        {pageItems.map((item, idx) =>
          item === "..." ? (
            <button
              key={`ellipsis-${idx}`}
              ref={ellipsisRef}
              type="button"
              aria-label="More pages"
              aria-expanded={dropdownOpen}
              aria-haspopup="listbox"
              onClick={() => setDropdownOpen((v) => !v)}
              className={cn(
                cellPage,
                divider,
                "bg-bg-default cursor-pointer hover:bg-bg-default-hover",
              )}
            >
              ...
            </button>
          ) : (
            <button
              key={item}
              type="button"
              aria-label={`Page ${item}`}
              aria-current={item === currentPage ? "page" : undefined}
              onClick={() => goTo(item)}
              className={cn(
                cellPage,
                divider,
                "cursor-pointer",
                item === currentPage
                  ? "bg-bg-default font-bold text-text-brand hover:bg-bg-default-hover"
                  : "bg-bg-default hover:bg-bg-default-hover",
              )}
            >
              {item}
            </button>
          ),
        )}

        {/* Next */}
        <button
          type="button"
          aria-label="Next page"
          disabled={currentPage >= totalPages}
          onClick={() => goTo(currentPage + 1)}
          className={cn(
            cellNav,
            divider,
            "bg-bg-default hover:bg-bg-default-hover disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer",
          )}
        >
          <CaretRight size={16} weight="regular" />
        </button>
      </nav>

      {/* Dropdown — rendered outside <nav> to escape overflow:hidden */}
      {dropdownOpen && hiddenPages.length > 0 && (
        <div
          role="listbox"
          aria-label="Select page"
          className="absolute bottom-full z-50 mb-1 flex min-w-[39px] w-max flex-col overflow-y-auto rounded-lg border border-border bg-bg-default shadow-md [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ left: ellipsisLeft, transform: "translateX(-50%)", maxHeight: 160 }}
        >
          {hiddenPages.map((page) => (
            <button
              key={page}
              type="button"
              role="option"
              aria-selected={page === currentPage}
              onClick={() => goTo(page)}
              className={cn(
                "box-border flex h-8 w-full min-w-full shrink-0 cursor-pointer items-center justify-center px-4 py-1 text-sm leading-5 transition-colors select-none",
                page === currentPage
                  ? "bg-bg-default font-bold text-text-brand hover:bg-bg-default-hover"
                  : "bg-bg-default font-normal text-text-default hover:bg-bg-default-hover",
              )}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
