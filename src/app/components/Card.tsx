import React from "react";
import { Lock, CalendarBlank, MapPin, Users } from "@phosphor-icons/react";
const imgBanner = "";

export type CardVariant = "desktop" | "tablet" | "mobile";
export type CardTagStatus = "not-registered" | "registered" | "full";

export interface CardProps {
  /** Responsive size variant */
  variant?: CardVariant;
  title?: string;
  date?: string;
  time?: string;
  /** Location / venue text */
  location?: string;
  /** Show the location row */
  showLocation?: boolean;
  /** Show the audience / count row */
  showAudience?: boolean;
  /** e.g. "200/200" */
  count?: string;
  /** Show the lock badge on the banner */
  locked?: boolean;
  /** Registration status tag */
  tagStatus?: CardTagStatus;
  /** Custom banner image src */
  image?: string;
  className?: string;
}

// ─── SVG Icons ────────────────────────────────────────────────────────────────

function LockIcon() {
  return <Lock size={16} weight="regular" color="#4A5565" />;
}

function CalendarIcon() {
  return <CalendarBlank size={16} weight="regular" color="#EB6101" />;
}

function LocationIcon() {
  return <MapPin size={16} weight="regular" color="#4A5565" />;
}

function AudienceIcon() {
  return <Users size={16} weight="regular" color="#4A5565" />;
}

// ─── Tag config ───────────────────────────────────────────────────────────────

const tagConfig: Record<CardTagStatus, { bg: string; text: string; label: string }> = {
  "not-registered": { bg: "#f3f4f6", text: "#99a1af", label: "ยังไม่ลงทะเบียน" },
  "registered":     { bg: "#ecfdf5", text: "#059669", label: "ลงทะเบียนแล้ว"   },
  "full":           { bg: "#fff1f2", text: "#e7000b", label: "เต็มแล้ว"         },
};

// ─── Card ─────────────────────────────────────────────────────────────────────

export function Card({
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
  className = "",
}: CardProps) {
  const FONT = { fontFamily: "'Noto Sans Thai', sans-serif" };

  // Variant-specific sizing
  const widthClass    = variant === "desktop" ? "w-[308px]" : variant === "tablet" ? "w-[224px]" : "w-[163px]";
  const padding       = variant === "desktop" ? "p-[16px]"  : variant === "tablet" ? "p-[12px]"  : "p-[10px]";
  const titleGap      = variant === "desktop" ? "gap-[6px]" : "gap-[4px]";

  // Banner: desktop has a fixed height, tablet/mobile use aspect-video
  const bannerClass   = variant === "desktop" ? "h-[173px]" : "aspect-video w-full";

  const tag = tagConfig[tagStatus];
  const bannerSrc = image ?? imgBanner;

  return (
    <div
      className={`flex flex-col items-start overflow-clip rounded-[8px] shadow-[0px_0px_2px_0px_rgba(102,102,102,0.16),0px_4px_8px_0px_rgba(102,102,102,0.12)] min-h-[120px] ${widthClass} ${className}`}
    >
      {/* ── Banner ── */}
      <div className={`relative shrink-0 overflow-clip w-full ${bannerClass}`}>
        <img
          alt="event banner"
          className="absolute inset-0 size-full object-cover pointer-events-none"
          src={bannerSrc}
        />
        {locked && (
          <div className="absolute top-[8px] left-[8px] bg-[#f9fafb] flex gap-[4px] items-center px-[6px] py-[4px] rounded-[4px]">
            <div aria-hidden="true" className="absolute inset-0 rounded-[4px] border border-solid border-[rgba(0,0,0,0.1)] pointer-events-none" />
            <LockIcon />
            <p className="text-[#4a5565] text-[12px] leading-[18px] whitespace-nowrap" style={FONT}>
              Lock
            </p>
          </div>
        )}
      </div>

      {/* ── Content ── */}
      <div className={`bg-white w-full shrink-0 ${padding}`}>
        <div className={`flex flex-col ${titleGap} items-start w-full`}>
          {/* Title + detail */}
          <div className="flex flex-col gap-[4px] items-start w-full">
            {/* Title */}
            <p
              className="text-[#101828] text-[14px] leading-[20px] overflow-hidden text-ellipsis w-full"
              style={{ ...FONT, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}
            >
              {title}
            </p>

            {/* Date + time */}
            <div className="flex gap-[8px] items-center w-full">
              {/* Date */}
              <div className="flex gap-[4px] h-[22px] items-center shrink-0">
                <CalendarIcon />
                <p className="text-[#eb6101] text-[12px] leading-[16px] whitespace-nowrap" style={FONT}>
                  {date}
                </p>
              </div>
              {/* Divider */}
              <div className="h-[14px] w-px bg-black/10 shrink-0" />
              {/* Time */}
              <p className="flex-1 min-w-0 text-[#4a5565] text-[12px] leading-[16px] overflow-hidden text-ellipsis whitespace-nowrap" style={FONT}>
                {time}
              </p>
            </div>

            {/* Location */}
            {showLocation && (
              <div className="flex gap-[4px] h-[22px] items-center w-full">
                <LocationIcon />
                <p className="flex-1 min-w-0 text-[#4a5565] text-[12px] leading-[16px] overflow-hidden text-ellipsis whitespace-nowrap" style={FONT}>
                  {location}
                </p>
              </div>
            )}

            {/* Audience */}
            {showAudience && (
              <div className="flex gap-[4px] h-[22px] items-center w-full">
                <AudienceIcon />
                <p className="text-[#4a5565] text-[12px] leading-[16px] whitespace-nowrap shrink-0" style={FONT}>
                  ผู้เข้าร่วม
                </p>
                <p className="text-[#0a6ee7] text-[12px] leading-[16px] whitespace-nowrap shrink-0" style={FONT}>
                  {count}
                </p>
              </div>
            )}
          </div>

          {/* Tag */}
          <div className="flex items-start shrink-0">
            <div
              className="flex gap-[2px] items-center justify-center px-[8px] py-[4px] rounded-[4px] overflow-clip"
              style={{ backgroundColor: tag.bg }}
            >
              <p className="text-[12px] leading-[16px] whitespace-nowrap" style={{ ...FONT, color: tag.text }}>
                {tag.label}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}