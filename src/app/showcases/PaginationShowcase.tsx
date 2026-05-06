import { useState } from "react";
import {
  Pagination,
  PaginationBanner,
  PaginationCarousel,
} from "@/components/pagination";

export function PaginationShowcase() {
  const [bannerIndex, setBannerIndex] = useState(0);
  const [carouselProgress, setCarouselProgress] = useState(0.5);
  const [currentPage, setCurrentPage] = useState(3);
  const [manyPage, setManyPage] = useState(7);

  return (
    <div className="min-h-screen bg-background px-6 py-8">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        <div>
          <h1 className="text-foreground">Pagination</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            3 variants: Banner Slide, Carousel Free Scroll, Default Pagination
          </p>
        </div>

        {/* Banner Slide */}
        <section className="rounded-lg border border-border p-6 flex flex-col gap-4">
          <div>
            <p className="text-sm font-semibold text-foreground">Banner Slide</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Dot-style indicator — active slide is a wider pill.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-6">
              <PaginationBanner
                count={3}
                activeIndex={bannerIndex}
                onIndexChange={setBannerIndex}
              />
              <span className="text-xs text-muted-foreground">
                Slide {bannerIndex + 1} of 3 (click to change)
              </span>
            </div>
            <div className="flex items-center gap-6">
              <PaginationBanner count={5} activeIndex={2} />
              <span className="text-xs text-muted-foreground">5 slides, index 2</span>
            </div>
            <div className="flex items-center gap-6">
              <PaginationBanner count={4} activeIndex={0} />
              <span className="text-xs text-muted-foreground">4 slides, index 0</span>
            </div>
          </div>
        </section>

        {/* Carousel Free Scroll */}
        <section className="rounded-lg border border-border p-6 flex flex-col gap-4">
          <div>
            <p className="text-sm font-semibold text-foreground">Carousel Free Scroll</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Scrollbar-style indicator — fill width reflects scroll progress.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-6">
              <PaginationCarousel progress={carouselProgress} />
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={carouselProgress}
                onChange={(e) => setCarouselProgress(Number(e.target.value))}
                className="w-40"
              />
              <span className="text-xs text-muted-foreground">
                {Math.round(carouselProgress * 100)}%
              </span>
            </div>
            <div className="flex items-center gap-6">
              <PaginationCarousel progress={0} />
              <span className="text-xs text-muted-foreground">0% (start)</span>
            </div>
            <div className="flex items-center gap-6">
              <PaginationCarousel progress={0.5} />
              <span className="text-xs text-muted-foreground">50%</span>
            </div>
            <div className="flex items-center gap-6">
              <PaginationCarousel progress={1} />
              <span className="text-xs text-muted-foreground">100% (end)</span>
            </div>
          </div>
        </section>

        {/* Default Pagination */}
        <section className="rounded-lg border border-border p-6 flex flex-col gap-6">
          <div>
            <p className="text-sm font-semibold text-foreground">Default Pagination</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Numbered pagination with prev/next arrows and smart ellipsis collapsing.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-xs text-muted-foreground">10 pages — interactive</span>
              <Pagination
                totalPages={10}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs text-muted-foreground">20 pages — interactive</span>
              <Pagination
                totalPages={20}
                currentPage={manyPage}
                onPageChange={setManyPage}
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs text-muted-foreground">5 pages — static (all visible)</span>
              <Pagination totalPages={5} currentPage={2} />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs text-muted-foreground">1 page — prev/next disabled</span>
              <Pagination totalPages={1} currentPage={1} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
