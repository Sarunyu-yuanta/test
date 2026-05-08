import { useState } from "react";
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
    return <PaginationCarousel progress={index / Math.max(total - 1, 1)} />;
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
              ? `<PaginationCarousel progress={scrollProgress} />`
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
