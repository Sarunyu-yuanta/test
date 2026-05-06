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
  /**
   * Scroll progress from `0` (start) to `1` (end).
   * Controls the width of the active fill inside the track.
   */
  progress: number;
  /** Width of the track in pixels. Defaults to 40. */
  trackWidth?: number;
  className?: string;
}

export function PaginationCarousel({
  progress,
  trackWidth = 40,
  className,
}: PaginationCarouselProps) {
  const clamped = Math.min(1, Math.max(0, progress));

  return (
    <div
      className={cn("flex items-center", className)}
      role="progressbar"
      aria-valuenow={Math.round(clamped * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="relative h-1.5 overflow-hidden rounded-[48px] bg-black/10 dark:bg-white/10"
        style={{ width: trackWidth }}
      >
        <div
          className="absolute left-0 top-0 h-full rounded-[12px] bg-bg-brand transition-all duration-200"
          style={{ width: Math.round(clamped * trackWidth) }}
        />
      </div>
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

  const cell =
    "flex h-8 w-[39px] shrink-0 items-center justify-center text-sm leading-5 transition-colors select-none";
  const divider = "border-l border-border";

  const ellipsisLeft = ellipsisRef.current
    ? ellipsisRef.current.offsetLeft + ellipsisRef.current.offsetWidth / 2
    : undefined;

  return (
    <div ref={containerRef} className={cn("relative inline-flex w-fit", className)}>
      <nav
        aria-label="Pagination"
        className="inline-flex w-fit overflow-hidden rounded-lg border border-border"
      >
        {/* Previous */}
        <button
          type="button"
          aria-label="Previous page"
          disabled={currentPage <= 1}
          onClick={() => goTo(currentPage - 1)}
          className={cn(
            cell,
            "bg-bg-default text-icon-default hover:bg-bg-default-hover disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer",
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
                cell,
                divider,
                "bg-bg-default text-text-default cursor-pointer hover:bg-bg-default-hover",
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
                cell,
                divider,
                "cursor-pointer",
                item === currentPage
                  ? "bg-bg-brand font-bold text-text-default-white"
                  : "bg-bg-default font-normal text-text-default hover:bg-bg-default-hover",
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
            cell,
            divider,
            "bg-bg-default text-icon-default hover:bg-bg-default-hover disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer",
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
          className="absolute bottom-full mb-1 z-50 flex w-[39px] flex-col overflow-y-auto rounded-lg border border-border bg-bg-default shadow-md [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
                "flex h-8 w-full shrink-0 cursor-pointer items-center justify-center text-sm leading-5 transition-colors select-none",
                page === currentPage
                  ? "bg-bg-brand font-bold text-text-default-white"
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
