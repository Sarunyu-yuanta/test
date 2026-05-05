"use client";

import {
  BookmarkSimpleIcon,
  BroadcastIcon,
  CalendarBlank,
  CheckCircle,
  Lock,
  MapPin,
  Users,
  XCircle,
  type Icon,
} from "@phosphor-icons/react";
import { forwardRef, type ReactNode } from "react";
import { cn } from "../lib/utils";
import { useIsMobile } from "./ui/use-mobile";

export type CardVariant = "default" | "event" | "news" | "social" | "live";
export type CardSize = "desktop" | "tablet" | "mobile";
export type CardTagStatus = "not-registered" | "registered" | "full";

/** A chip tag used in the social card variant. */
export type CardSocialTag = {
  label: string;
  /** Background color. Default: "var(--disabled-bg)". */
  bg?: string;
  /** Text color. Default: "var(--text-default-primary)". */
  text?: string;
};

export interface CardProps {
  /** Card type. Default: `"default"` — an empty shell with padding + radius. Switch to `"event"`, `"news"`, `"social"`, or `"live"` only when rendering that specific content pattern. */
  variant?: CardVariant;
  /** Custom body content (`variant="default"`). */
  children?: ReactNode;
  /** Size preset. desktop=308px, tablet=224px, mobile=163px. Auto-detects mobile (<768px) when omitted. */
  size?: CardSize;
  /** Card title (clamped to 2 lines). */
  title?: string;
  /** Shows a lock badge on the banner/thumbnail image. */
  locked?: boolean;
  /** URL for the banner/thumbnail image. */
  image?: string;
  className?: string;

  // ── Event props ──────────────────────────────────────────────────────────
  /** Formatted date string, e.g. "23 มิ.ย. 2567". */
  date?: string;
  /** Time range string, e.g. "08.30 - 12.00". */
  time?: string;
  /** Location/venue name. */
  location?: string;
  /** Whether to show the location row. Default: true. */
  showLocation?: boolean;
  /** Whether to show the audience count row. Default: true. */
  showAudience?: boolean;
  /** Audience count string, e.g. "200/200". */
  count?: string;
  /** Registration status tag shown at the bottom of an event card. */
  tagStatus?: CardTagStatus;

  // ── News props ───────────────────────────────────────────────────────────
  /** Category label shown above the title (news variant). */
  category?: string;
  /** Whether the bookmark is active (news / social variant). */
  bookmarked?: boolean;
  /** Callback fired when the bookmark button is clicked (news / social variant). */
  onBookmarkToggle?: () => void;

  // ── Social props ─────────────────────────────────────────────────────────
  /** Colored chip tags shown above the title (social variant). */
  tags?: CardSocialTag[];
  /** Publisher / source name shown in the footer (social / live variant). */
  source?: string;

  // ── Live props ───────────────────────────────────────────────────────────
  /** Video duration shown as an overlay on the thumbnail, e.g. "1:26:36" (live variant). */
  duration?: string;
}

// ── Banner image ─────────────────────────────────────────────────────────────

/**
 * Banner/thumbnail renderer. When `src` is empty we fall back to a neutral
 * placeholder surface so the card never shows a broken-image icon.
 */
function BannerMedia({ src, alt }: { src: string; alt: string }) {
  if (!src) {
    return <div aria-hidden="true" className="absolute inset-0 bg-muted" />;
  }
  return (
    <img
      alt={alt}
      className="pointer-events-none absolute inset-0 size-full object-cover"
      src={src}
    />
  );
}

// ── Duration badge ────────────────────────────────────────────────────────────

/**
 * Overlay badge shown on the live card thumbnail.
 * `duration="upcoming"` renders the "(•) Up Coming" state.
 * Any other string renders as a time display, e.g. "1:26:36".
 * `size="lg"` is used for desktop, `size="sm"` for mobile.
 */
function DurationBadge({
  duration,
  size,
}: {
  duration: string;
  size: "lg" | "sm";
}) {
  const isUpcoming = duration === "upcoming";
  return (
    <div
      className={cn(
        "absolute flex items-center gap-[4px] rounded-[4px] bg-black/60",
        size === "lg"
          ? "bottom-[6px] right-[6px] h-[20px] px-[4px]"
          : "bottom-[4px] right-[4px] h-[16px] px-[2px]",
      )}
    >
      {isUpcoming && <BroadcastIcon size={14} className="text-white" />}
      <p
        className={cn(
          "whitespace-nowrap font-normal text-white",
          size === "lg"
            ? "text-[14px] leading-[20px]"
            : "text-[12px] leading-[16px]",
        )}
      >
        {isUpcoming ? "Up Coming" : duration}
      </p>
    </div>
  );
}

// ── Shared icons ─────────────────────────────────────────────────────────────

/** Lock label + icon (no outer positioning). */
function LockBadgeChip({ flush = false }: { flush?: boolean }) {
  const corner = flush ? "rounded-none rounded-bl-[4px]" : "rounded-[4px]";
  const borderRing = flush
    ? "border-0 border-b border-l border-solid border-border"
    : "border border-solid border-border";

  return (
    <div
      className={cn(
        "relative flex items-center gap-[4px] bg-hover-bg px-[6px] py-[4px]",
        corner,
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0",
          borderRing,
          corner,
        )}
      />
      <Lock size={16} weight="regular" color="var(--subtle-text)" />
      <p className="whitespace-nowrap text-[12px] leading-[18px] text-subtle-text">
        Lock
      </p>
    </div>
  );
}

function LockBadge({
  align = "left",
  flush = false,
  size = "desktop",
}: {
  align?: "left" | "right";
  /** When true, pin to the corner with no inset (top/right or top/left). */
  flush?: boolean;
  size?: CardSize;
}) {
  return (
    <div
      className={cn(
        "absolute z-10",
        flush ? "top-0" : size === "mobile" ? "top-[6px]" : "top-[8px]",
        align === "left"
          ? flush
            ? "left-0"
            : size === "mobile"
              ? "left-[6px]"
              : "left-[8px]"
          : flush
            ? "right-0"
            : size === "mobile"
              ? "right-[6px]"
              : "right-[8px]",
      )}
    >
      <LockBadgeChip flush={flush} />
    </div>
  );
}

// ── Event card helpers ────────────────────────────────────────────────────────

type TagConfig = { bg: string; text: string; label: string; Icon?: Icon };

const tagConfig: Record<CardTagStatus, TagConfig> = {
  "not-registered": {
    bg: "var(--disabled-bg)",
    text: "var(--disabled)",
    label: "ยังไม่ลงทะเบียน",
  },
  registered: {
    bg: "var(--success-bg)",
    text: "var(--success)",
    label: "ลงทะเบียนแล้ว",
    Icon: CheckCircle,
  },
  full: {
    bg: "var(--error-bg)",
    text: "var(--bg-danger-primary)",
    label: "เต็มแล้ว",
    Icon: XCircle,
  },
};

// ── Card ─────────────────────────────────────────────────────────────────────

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  {
    variant = "default",
    size: sizeProp,
    children,
    title,
    locked = true,
    image,
    className,
    // event
    date,
    time,
    location,
    showLocation = true,
    showAudience = true,
    count = "200/200",
    tagStatus = "not-registered",
    // news
    category,
    bookmarked = false,
    onBookmarkToggle,
    // social
    tags,
    source,
    // live
    duration,
  },
  ref,
) {
  const isMobile = useIsMobile();
  const size = sizeProp ?? (isMobile ? "mobile" : "desktop");

  const bannerSrc = image ?? "";

  // ── Default: token shell for arbitrary content ─────────────────────────────
  if (variant === "default") {
    const shellPadding = size === "desktop" ? "p-4" : "p-3";
    const shellRadius =
      size === "mobile" ? "rounded-[6px]" : "rounded-[8px]";

    return (
      <div
        ref={ref}
        className={cn(
          "flex min-h-0 min-w-0 flex-col bg-card text-foreground shadow-card",
          shellRadius,
          shellPadding,
          className,
        )}
      >
        {children}
      </div>
    );
  }

  // ── Social card ──────────────────────────────────────────────────────────
  if (variant === "social") {
    const isDesktop = size === "desktop";
    const cardWidth = isDesktop ? "w-[587px]" : "w-[343px]";
    const cardPadding = isDesktop ? "p-4" : "p-3";
    const cardGap = isDesktop ? "gap-3" : "gap-2";
    const contentGap = isDesktop ? "gap-6" : "gap-3";
    const textGap = isDesktop ? "gap-[10px]" : "gap-[6px]";
    const titleText = isDesktop
      ? "text-[16px] leading-[24px]"
      : "text-[12px] leading-[16px]";
    const tagChip = isDesktop
      ? "rounded-[4px] px-[6px] py-[4px] text-[12px] leading-[16px]"
      : "rounded-[4px] px-[4px] py-[2px] text-[9px] leading-[14px]";

    const resolvedTags: CardSocialTag[] = tags ?? [
      {
        label: "Analysis",
        bg: "var(--tag-bg-blue, #F3F8FE)",
        text: "var(--tag-text-blue, #095EC4)",
      },
      {
        label: "Stock",
        bg: "var(--tag-bg-cyan, #F3F8FE)",
        text: "var(--tag-text-cyan, #095EC4)",
      },
      {
        label: "My Asset",
        bg: "var(--tag-bg-purple, #F3E8FF)",
        text: "var(--tag-text-purple, #59168B)",
      },
    ];
    const resolvedTitle =
      title ??
      "การออกแบบที่ตอบโจทย์ผู้ใช้: สร้างประสบการณ์ที่น่าจดจำ asdasdasdas";
    const resolvedSource = source ?? "Wealth Design Daily";
    const resolvedDate = date ?? "9 ธันวาคม 2567";

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex flex-col overflow-clip bg-card shadow-card",
          isDesktop ? "rounded-[8px]" : "rounded-[6px]",
          cardWidth,
          cardPadding,
          cardGap,
          className,
        )}
      >
        {locked && <LockBadge align="right" flush />}
        {/* Top: content + image */}
        <div className={cn("flex flex-row items-start", contentGap)}>
          {/* Left: tags + title */}
          <div className={cn("flex min-w-0 flex-1 flex-col", textGap)}>
            <div className="flex flex-wrap gap-[8px]">
              {resolvedTags.map((t) => (
                <span
                  key={t.label}
                  className={cn(
                    "inline-flex whitespace-nowrap font-normal",
                    tagChip,
                  )}
                  style={{
                    backgroundColor: t.bg ?? "var(--disabled-bg)",
                    color: t.text ?? "var(--text-default-primary)",
                  }}
                >
                  {t.label}
                </span>
              ))}
            </div>
            <p
              className={cn(
                "line-clamp-2 font-semibold text-foreground",
                titleText,
              )}
            >
              {resolvedTitle}
            </p>
          </div>
          {/* Right: thumbnail */}
          <div className="relative h-[84px] w-[149px] shrink-0 overflow-clip rounded-[6px]">
            <BannerMedia src={bannerSrc} alt="social thumbnail" />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          {isDesktop ? (
            <div className="flex min-w-0 items-center gap-[12px]">
              <p className="shrink-0 text-[12px] leading-[16px] text-subtle-text">
                {resolvedSource}
              </p>
              <p className="min-w-0 truncate text-[12px] leading-[16px] text-muted-foreground">
                {resolvedDate}
              </p>
            </div>
          ) : (
            <div className="flex min-w-0 flex-col">
              <p className="text-[12px] leading-[16px] text-subtle-text">
                {resolvedSource}
              </p>
              <p className="text-[12px] leading-[16px] text-muted-foreground">
                {resolvedDate}
              </p>
            </div>
          )}
          <button
            aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
            className="flex size-6 shrink-0 items-center justify-center rounded transition-colors hover:bg-hover-bg cursor-pointer"
            onClick={onBookmarkToggle}
            type="button"
          >
            <BookmarkSimpleIcon
              size={23.65}
              weight={bookmarked ? "fill" : "regular"}
              color={
                bookmarked ? "var(--primary-action)" : "var(--subtle-text)"
              }
            />
          </button>
        </div>
      </div>
    );
  }

  // ── Live card ────────────────────────────────────────────────────────────
  if (variant === "live") {
    const isDesktop = size === "desktop";
    const cardWidth = isDesktop ? "w-[704px]" : "w-[343px]";
    const imgWidth = isDesktop ? "w-[212px]" : "w-[149px]";
    const imgHeight = isDesktop ? "h-[119px]" : "h-[84px]";
    const padding = isDesktop ? "p-4" : "p-3";
    const gap = isDesktop ? "gap-6" : "gap-3";
    const cardRadius = isDesktop ? "rounded-[8px]" : "rounded-[6px]";
    const thumbRadius = isDesktop ? "rounded-[6px]" : "rounded-[4px]";
    const metaTextClass = isDesktop
      ? "flex min-w-0 items-center gap-[12px]"
      : "flex min-w-0 flex-col";

    const resolvedTitle =
      title ??
      "6 หุ้นเด่นทางเทคนิค OSP, BTS, BANPU, SECURE, AH, DCC [TECHNICAL VIEW 17/07/2567]";
    const resolvedSource = source ?? "Wealth Design Daily";
    const resolvedDate = date ?? "9 ธันวาคม 2567";
    const resolvedDuration = duration ?? "1:26:36";

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col overflow-clip bg-card shadow-card",
          cardRadius,
          cardWidth,
          className,
        )}
      >
        {/* Top: title + thumbnail */}
        <div className={cn("flex flex-row items-stretch", padding, gap)}>
          <div className="flex min-w-0 flex-1 flex-col justify-between">
            <p
              className={cn(
                "min-w-0 line-clamp-2 font-semibold text-foreground",
                isDesktop
                  ? "text-[16px] leading-[24px]"
                  : "text-[12px] leading-[16px]",
              )}
            >
              {resolvedTitle}
            </p>
            {/* Footer */}
            <div className={metaTextClass}>
              <p className="shrink-0 text-xs leading-4 text-subtle-text">
                {resolvedSource}
              </p>
              <p className="min-w-0 truncate text-xs leading-4 text-muted-foreground">
                {resolvedDate}
              </p>
            </div>
          </div>
          {/* Thumbnail */}
          <div
            className={cn(
              "relative shrink-0 overflow-clip",
              thumbRadius,
              imgWidth,
              imgHeight,
            )}
          >
            <BannerMedia src={bannerSrc} alt="live thumbnail" />
            {/* Live badge — top-left */}
            <div
              className="absolute h-[22px] left-[6px] top-[6px] flex items-center gap-[4px] rounded-[4px] px-[6px]"
              style={{ backgroundColor: "#FB2C36" }}
            >
              <span className="size-[6px] shrink-0 rounded-full bg-white" />
              <p className="whitespace-nowrap text-[12px] font-semibold leading-[16px] text-white">
                Live
              </p>
            </div>
            {/* Duration badge — bottom-right, always shown */}
            <DurationBadge
              duration={resolvedDuration}
              size={isDesktop ? "lg" : "sm"}
            />
          </div>
        </div>
      </div>
    );
  }

  // ── Desktop news: vertical layout (Figma parity) ───────────────────────
  if (variant === "news" && size === "desktop") {
    return (
      <div
        ref={ref}
        className={cn(
          "flex w-[343px] min-h-[120px] flex-col items-start overflow-clip rounded-[8px] bg-card shadow-card",
          className,
        )}
      >
        <div className="relative h-[184px] w-full shrink-0 overflow-clip">
          <BannerMedia src={bannerSrc} alt="news banner" />
          {locked && <LockBadge />}
        </div>
        <NewsContent
          padding="px-4 py-3"
          category={category ?? "Category"}
          title={
            title ??
            "Great design begins with understanding user needs and creating memorable"
          }
          date={date ?? "01 มกราคม 2025"}
          bookmarked={bookmarked}
          onBookmarkToggle={onBookmarkToggle}
          tone="desktop"
        />
      </div>
    );
  }

  // ── Mobile news: horizontal layout ──────────────────────────────────────
  if (variant === "news" && size === "mobile") {
    return (
      <div
        ref={ref}
        className={cn(
          "flex h-[114px] w-[343px] flex-row overflow-clip rounded-[8px] bg-card shadow-card",
          className,
        )}
      >
        <div className="relative h-[114px] w-[171px] shrink-0 overflow-clip">
          <BannerMedia src={bannerSrc} alt="news banner" />
          {locked && <LockBadge />}
        </div>
        <NewsContent
          padding="p-3"
          category={category ?? "Category"}
          title={
            title ??
            "Great design begins with understanding user needs and creating memorable"
          }
          date={date ?? "01 มกราคม 2025"}
          bookmarked={bookmarked}
          onBookmarkToggle={onBookmarkToggle}
          tone="mobile"
        />
      </div>
    );
  }

  // ── Vertical layout (event + news desktop/tablet) ────────────────────────
  const widthClass =
    size === "desktop"
      ? "w-[308px]"
      : size === "tablet"
        ? "w-[224px]"
        : "w-[163px]";
  const padding =
    size === "desktop" ? "p-4" : size === "tablet" ? "p-3" : "p-2.5";
  const bannerClass = size === "desktop" ? "h-[173px]" : "aspect-video w-full";

  return (
    <div
      ref={ref}
      className={cn(
        "flex min-h-[120px] flex-col items-start overflow-clip rounded-[8px] shadow-card",
        widthClass,
        className,
      )}
    >
      {/* Banner */}
      <div
        className={cn("relative w-full shrink-0 overflow-clip", bannerClass)}
      >
        <BannerMedia
          src={bannerSrc}
          alt={variant === "news" ? "news banner" : "event banner"}
        />
        {locked && <LockBadge size={size} />}
      </div>

      {/* Content */}
      {variant === "news" ? (
        <NewsContent
          padding={padding}
          category={category ?? "Category"}
          title={
            title ??
            "Great design begins with understanding user needs and creating memorable"
          }
          date={date ?? "01 มกราคม 2025"}
          bookmarked={bookmarked}
          onBookmarkToggle={onBookmarkToggle}
          tone="default"
        />
      ) : (
        <EventContent
          size={size}
          padding={padding}
          title={
            title ??
            "Lorem ipsum dolor sit amet consectetur. Lectus viverraasdasd"
          }
          date={date ?? "23 มิ.ย. 2567"}
          time={time ?? "08.30 - 12.00"}
          location={
            location ??
            "ณ หอประชุมศาสตราจารย์สังเวียน อินทรวิชัย ชั้น 7 ตลาดหลักทรัพย์แห่งประเทศไทย"
          }
          showLocation={showLocation}
          showAudience={showAudience}
          count={count}
          tagStatus={tagStatus}
        />
      )}
    </div>
  );
});

Card.displayName = "Card";

// ── EventContent ──────────────────────────────────────────────────────────────

interface EventContentProps {
  size: CardSize;
  padding: string;
  title: string;
  date: string;
  time: string;
  location: string;
  showLocation: boolean;
  showAudience: boolean;
  count: string;
  tagStatus: CardTagStatus;
}

function EventContent({
  size,
  padding,
  title,
  date,
  time,
  location,
  showLocation,
  showAudience,
  count,
  tagStatus,
}: EventContentProps) {
  const titleGap = size === "desktop" ? "gap-1.5" : "gap-1";
  const tag = tagConfig[tagStatus];

  return (
    <div className={cn("w-full shrink-0 bg-card", padding)}>
      <div className={cn("flex w-full flex-col items-start", titleGap)}>
        <div className="flex w-full flex-col items-start gap-1">
          <p className="line-clamp-2 w-full overflow-hidden text-ellipsis text-sm font-bold leading-5 text-foreground">
            {title}
          </p>
          <div className="flex w-full items-center gap-2">
            <div className="flex h-[22px] shrink-0 items-center gap-1">
              <CalendarBlank
                size={16}
                weight="regular"
                color="var(--accent-orange)"
              />
              <p className="whitespace-nowrap text-xs font-semibold leading-4 text-accent-orange">
                {date}
              </p>
            </div>
            <div className="h-4 w-px shrink-0 bg-border" />
            <p className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-xs leading-4 text-subtle-text">
              {time}
            </p>
          </div>
          {showLocation && (
            <div className="flex h-[22px] w-full items-center gap-1">
              <MapPin size={16} weight="regular" color="var(--subtle-text)" />
              <p className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-xs leading-4 text-subtle-text">
                {location}
              </p>
            </div>
          )}
          {showAudience && (
            <div className="flex h-[22px] w-full items-center gap-1">
              <Users size={16} weight="regular" color="var(--subtle-text)" />
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
            className="flex items-center justify-center gap-1 overflow-clip rounded-[4px] px-[8px] py-[4px]"
            style={{ backgroundColor: tag.bg }}
          >
            {tag.Icon && <tag.Icon size={14} weight="fill" color={tag.text} />}
            <p
              className="whitespace-nowrap text-[12px] leading-[16px]"
              style={{ color: tag.text }}
            >
              {tag.label}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── NewsContent ───────────────────────────────────────────────────────────────

interface NewsContentProps {
  padding: string;
  category: string;
  title: string;
  date: string;
  bookmarked: boolean;
  onBookmarkToggle?: () => void;
  tone?: "default" | "desktop" | "mobile";
}

function NewsContent({
  padding,
  category,
  title,
  date,
  bookmarked,
  onBookmarkToggle,
  tone = "default",
}: NewsContentProps) {
  const isDesktopTone = tone === "desktop";
  const isMobileTone = tone === "mobile";

  return (
    <div
      className={cn(
        "flex w-full flex-1 shrink-0 flex-col bg-card",
        isDesktopTone || isMobileTone ? "gap-[10px]" : "gap-2",
        padding,
      )}
    >
      <div className="flex flex-col gap-1">
        <p
          className={cn(
            "text-primary-action",
            isMobileTone
              ? "text-[9px] font-semibold leading-[14px]"
              : isDesktopTone
                ? "text-xs font-semibold leading-4"
                : "text-xs leading-4",
          )}
        >
          {category}
        </p>
        <p
          className={cn(
            "line-clamp-2 text-foreground",
            isMobileTone
              ? "text-xs font-semibold leading-4"
              : isDesktopTone
                ? "text-sm font-bold leading-5"
                : "text-sm font-semibold leading-5",
          )}
        >
          {title}
        </p>
      </div>
      <div className="flex w-full items-center justify-between">
        <p
          className={cn(
            "text-xs leading-4",
            isDesktopTone ? "text-muted-foreground" : "text-subtle-text",
          )}
        >
          {date}
        </p>
        <button
          aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
          className={cn(
            "flex shrink-0 items-center justify-center rounded transition-colors hover:bg-hover-bg cursor-pointer",
            isMobileTone ? "size-5" : isDesktopTone ? "size-6" : "p-0.5",
          )}
          onClick={onBookmarkToggle}
          type="button"
        >
          <BookmarkSimpleIcon
            size={isMobileTone ? 20 : 23.65}
            weight={bookmarked ? "fill" : "regular"}
            color={bookmarked ? "var(--primary-action)" : "var(--subtle-text)"}
          />
        </button>
      </div>
    </div>
  );
}
