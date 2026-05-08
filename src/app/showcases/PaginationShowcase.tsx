import { useEffect, useRef, useState } from "react";
import {
  Pagination,
  PaginationBanner,
  PaginationCarousel,
} from "@/components/pagination";
import { ShowcasePage } from "../components/ShowcasePage";
import { ComponentPlayground } from "../components/ComponentPlayground";

function PaginationPreview({ variant, total }: { variant: string; total: number }) {
  const [current, setCurrent] = useState(1);
  const [index, setIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [viewRatio, setViewRatio] = useState(1);
  const carouselScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (variant !== "carousel") return;
    const container = carouselScrollRef.current;
    if (!container) return;
    container.scrollTo({ left: 0, behavior: "auto" });
    setIndex(0);
    setScrollProgress(0);
    setViewRatio(
      container.scrollWidth > 0 ? container.clientWidth / container.scrollWidth : 1,
    );
  }, [variant, total]);

  const goToSlide = (targetIndex: number) => {
    const container = carouselScrollRef.current;
    if (!container) return;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const clampedIndex = Math.min(total - 1, Math.max(0, targetIndex));

    if (clampedIndex <= 0) {
      container.scrollTo({ left: 0, behavior: "smooth" });
      setIndex(0);
      return;
    }

    if (clampedIndex >= total - 1) {
      container.scrollTo({ left: maxScroll, behavior: "smooth" });
      setIndex(total - 1);
      return;
    }

    const item = container.querySelector<HTMLElement>(
      `[data-carousel-index="${clampedIndex}"]`,
    );
    if (!item) return;
    const containerRect = container.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    const scrollTarget =
      container.scrollLeft +
      (itemRect.left - containerRect.left) -
      (container.clientWidth - item.offsetWidth) / 2;
    container.scrollTo({ left: Math.max(0, Math.min(maxScroll, scrollTarget)), behavior: "smooth" });
    setIndex(clampedIndex);
  };

  if (variant === "banner") {
    return (
      <PaginationBanner
        count={total}
        activeIndex={index}
        onIndexChange={setIndex}
      />
    );
  }
  if (variant === "carousel") {
    return (
      <div className="flex w-full max-w-[360px] flex-col items-center gap-3">
        <div
          ref={carouselScrollRef}
          onScroll={(event) => {
            const container = event.currentTarget;
            const maxScroll = container.scrollWidth - container.clientWidth;
            if (maxScroll <= 0) {
              setIndex(0);
              setScrollProgress(0);
              return;
            }

            setScrollProgress(Math.round((container.scrollLeft / maxScroll) * 1000) / 1000);

            if (container.scrollLeft <= 1) {
              setIndex(0);
              return;
            }

            if (container.scrollLeft >= maxScroll - 1) {
              setIndex(total - 1);
              return;
            }

            const items = Array.from(
              container.querySelectorAll<HTMLElement>("[data-carousel-index]"),
            );
            if (items.length === 0) return;

            const containerRect = container.getBoundingClientRect();
            const containerCenter = containerRect.left + containerRect.width / 2;
            const nearest = items.reduce(
              (best, item) => {
                const itemRect = item.getBoundingClientRect();
                const itemCenter = itemRect.left + itemRect.width / 2;
                const distance = Math.abs(itemCenter - containerCenter);
                return distance < best.distance
                  ? { distance, index: Number(item.dataset.carouselIndex ?? 0) }
                  : best;
              },
              { distance: Number.POSITIVE_INFINITY, index: 0 },
            );
            setIndex(nearest.index);
          }}
          className="w-full snap-x snap-mandatory overflow-x-auto rounded-lg border border-border bg-bg-default p-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex min-w-max gap-2">
            {Array.from({ length: total }, (_, i) => (
              <div
                key={`carousel-item-${i}`}
                data-carousel-index={i}
                className="flex h-16 w-24 shrink-0 snap-center items-center justify-center rounded-md bg-bg-subtle text-sm text-text-default"
              >
                Card {i + 1}
              </div>
            ))}
          </div>
        </div>

        <PaginationCarousel
          count={total}
          activeIndex={index}
          viewRatio={viewRatio}
          scrollProgress={scrollProgress}
          onIndexChange={goToSlide}
        />
      </div>
    );
  }
  return (
    <Pagination
      totalPages={total}
      currentPage={current}
      onPageChange={setCurrent}
    />
  );
}

export function PaginationShowcase() {
  return (
    <ShowcasePage
      name="Pagination"
      description="3 variants: Banner Slide, Carousel Free Scroll, Default Pagination"
    >
      <ComponentPlayground
        
        controls={[
          {
            type: "select",
            key: "variant",
            label: "Variant",
            options: [
              { label: "Pagination", value: "pagination" },
              { label: "Banner Slide", value: "banner" },
              { label: "Carousel", value: "carousel" },
            ],
            defaultValue: "pagination",
          },
          {
            type: "select",
            key: "total",
            label: "Total pages",
            options: [
              { label: "5", value: "5" },
              { label: "10", value: "10" },
              { label: "20", value: "20" },
            ],
            defaultValue: "10",
          },
        ]}
        render={({ variant, total }) => {
          const t = Number(total);
          const v = variant as string;
          const code =
            v === "banner"
              ? `<PaginationBanner count={${t}} activeIndex={index} onIndexChange={setIndex} />`
              : v === "carousel"
              ? `<PaginationCarousel count={${t}} activeIndex={activeIndex} onIndexChange={setActiveIndex} />`
              : `<Pagination\n  totalPages={${t}}\n  currentPage={currentPage}\n  onPageChange={setCurrentPage}\n/>`;
          return {
            preview: <PaginationPreview variant={v} total={t} />,
            code,
          };
        }}
      />
    </ShowcasePage>
  );
}
