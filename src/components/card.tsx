"use client";

import { forwardRef } from "react";
import { CalendarBlank, Lock, MapPin, Users } from "@phosphor-icons/react";
import { cn } from "../lib/utils";

const imgBanner = "";

export type CardVariant = "desktop" | "tablet" | "mobile";
export type CardTagStatus = "not-registered" | "registered" | "full";

export interface CardProps {
  variant?: CardVariant;
  title?: string;
  date?: string;
  time?: string;
  location?: string;
  showLocation?: boolean;
  showAudience?: boolean;
  count?: string;
  locked?: boolean;
  tagStatus?: CardTagStatus;
  image?: string;
  className?: string;
}

function LockIcon() {
  return <Lock size={16} weight="regular" color="var(--subtle-text)" />;
}
function CalendarIcon() {
  return <CalendarBlank size={16} weight="regular" color="var(--accent-orange)" />;
}
function LocationIcon() {
  return <MapPin size={16} weight="regular" color="var(--subtle-text)" />;
}
function AudienceIcon() {
  return <Users size={16} weight="regular" color="var(--subtle-text)" />;
}

const tagConfig: Record<CardTagStatus, { bg: string; text: string; label: string }> = {
  "not-registered": {
    bg: "var(--disabled-bg)",
    text: "var(--disabled)",
    label: "ยังไม่ลงทะเบียน",
  },
  registered: {
    bg: "var(--success-bg)",
    text: "var(--success)",
    label: "ลงทะเบียนแล้ว",
  },
  full: {
    bg: "var(--error-bg)",
    text: "var(--destructive)",
    label: "เต็มแล้ว",
  },
};

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  {
    variant = "desktop",
    title = "Lorem ipsum dolor sit amet consectetur. Lectus viverraasdasd",
    date = "23 มิ.ย. 2567",
    time = "08.30 - 12.00",
    location = "ณ หอประชุมศาสตราจารย์สังเวียน อินทรวิชัย ชั้น 7 ตลาดหลักทรัพย์แห่งประเทศไทย",
    showLocation = true,
    showAudience = true,
    count = "200/200",
    locked = true,
    tagStatus = "not-registered",
    image,
    className,
  },
  ref,
) {
  const widthClass =
    variant === "desktop" ? "w-[308px]" : variant === "tablet" ? "w-[224px]" : "w-[163px]";
  const padding =
    variant === "desktop" ? "p-4" : variant === "tablet" ? "p-3" : "p-2.5";
  const titleGap = variant === "desktop" ? "gap-1.5" : "gap-1";
  const bannerClass = variant === "desktop" ? "h-[173px]" : "aspect-video w-full";
  const tag = tagConfig[tagStatus];
  const bannerSrc = image ?? imgBanner;

  return (
    <div
      ref={ref}
      className={cn(
        "flex min-h-[120px] flex-col items-start overflow-clip rounded-[8px]",
        "shadow-[0px_0px_2px_0px_rgba(102,102,102,0.16),0px_4px_8px_0px_rgba(102,102,102,0.12)]",
        widthClass,
        className,
      )}
    >
      <div className={cn("relative w-full shrink-0 overflow-clip", bannerClass)}>
        <img
          alt="event banner"
          className="pointer-events-none absolute inset-0 size-full object-cover"
          src={bannerSrc}
        />
        {locked && (
          <div
            className={cn(
              "absolute left-[8px] top-[8px] flex items-center gap-[4px] rounded-[4px] bg-hover-bg px-[6px] py-[4px]",
            )}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[4px] border border-solid border-border"
            />
            <LockIcon />
            <p className="whitespace-nowrap text-[12px] leading-[18px] text-subtle-text">Lock</p>
          </div>
        )}
      </div>
      <div className={cn("w-full shrink-0 bg-card", padding)}>
        <div className={cn("flex w-full flex-col items-start", titleGap)}>
          <div className="flex w-full flex-col items-start gap-1">
            <p
              className={cn(
                "line-clamp-2 w-full overflow-hidden text-ellipsis text-sm leading-5 text-foreground",
              )}
            >
              {title}
            </p>
            <div className="flex w-full items-center gap-2">
              <div className="flex h-[22px] shrink-0 items-center gap-1">
                <CalendarIcon />
                <p className="whitespace-nowrap text-xs leading-4 text-accent-orange">
                  {date}
                </p>
              </div>
              <div className="h-[14px] w-px shrink-0 bg-border" />
              <p
                className={cn(
                  "min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-xs leading-4 text-subtle-text",
                )}
              >
                {time}
              </p>
            </div>
            {showLocation && (
              <div className="flex h-[22px] w-full items-center gap-1">
                <LocationIcon />
                <p
                  className={cn(
                    "min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-xs leading-4 text-subtle-text",
                  )}
                >
                  {location}
                </p>
              </div>
            )}
            {showAudience && (
              <div className="flex h-[22px] w-full items-center gap-1">
                <AudienceIcon />
                <p className="shrink-0 whitespace-nowrap text-xs leading-4 text-subtle-text">
                  ผู้เข้าร่วม
                </p>
                <p className="shrink-0 whitespace-nowrap text-xs leading-4 text-primary-action">
                  {count}
                </p>
              </div>
            )}
          </div>
          <div className="flex shrink-0 items-start">
            <div
              className="flex items-center justify-center gap-[2px] overflow-clip rounded-[4px] px-[8px] py-[4px]"
              style={{ backgroundColor: tag.bg }}
            >
              <p className="whitespace-nowrap text-[12px] leading-[16px]" style={{ color: tag.text }}>
                {tag.label}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

Card.displayName = "Card";
