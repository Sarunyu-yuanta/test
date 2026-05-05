"use client";

import { cn } from "../lib/utils";
import avatarPlaceholder from "../assets/avatar-placeholder.png";

export type AvatarSize = "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl";
export type AvatarType = "photo" | "text" | "placeholder";

export interface AvatarProps {
  /** Display type of the avatar. */
  type?: AvatarType;
  /** Size variant of the avatar. */
  size?: AvatarSize;
  /** Show a green online-status indicator dot (photo type only). */
  status?: boolean;
  /** Image URL — used when type is `photo`. */
  src?: string;
  /** Alt text for the photo image. */
  alt?: string;
  /** Up to 2 characters shown when type is `text`. */
  initials?: string;
  /** Additional class names applied to the root element. */
  className?: string;
}

const TEXT_GRADIENT = "linear-gradient(to top right, #B5D3F8, #E6F6FB)";
const TEXT_COLOR = "#00A2D9";

const SIZE_CONFIG: Record<
  AvatarSize,
  { container: string; fontSize: string; dotSize: string; dotRing: string }
> = {
  xxs: { container: "size-4",  fontSize: "text-[11px]", dotSize: "size-[5px]",  dotRing: "ring-[1.5px]" },
  xs:  { container: "size-5",  fontSize: "text-sm",     dotSize: "size-[5px]",  dotRing: "ring-[1.5px]" },
  s:   { container: "size-6",  fontSize: "text-base",   dotSize: "size-[6px]",  dotRing: "ring-[1.5px]" },
  m:   { container: "size-8",  fontSize: "text-xl",     dotSize: "size-[7px]",  dotRing: "ring-2"       },
  l:   { container: "size-10", fontSize: "text-[26px]", dotSize: "size-[9px]",  dotRing: "ring-2"       },
  xl:  { container: "size-12", fontSize: "text-[32px]", dotSize: "size-[11px]", dotRing: "ring-2"       },
  xxl: { container: "size-13", fontSize: "text-[37px]", dotSize: "size-[13px]", dotRing: "ring-2"       },
};

export function Avatar({
  type = "photo",
  size = "m",
  status = false,
  src,
  alt = "",
  initials,
  className,
}: AvatarProps) {
  const { container, fontSize, dotSize, dotRing } = SIZE_CONFIG[size];

  return (
    <div className={cn("relative inline-flex shrink-0", container, className)}>
      {type === "photo" && (
        <img
          src={src}
          alt={alt}
          className="size-full rounded-full object-cover bg-bg-default-tertiary"
        />
      )}

      {type === "placeholder" && (
        <img
          src={avatarPlaceholder}
          alt=""
          className="size-full rounded-full object-cover"
          aria-hidden="true"
        />
      )}

      {type === "text" && (
        <div
          className="relative size-full rounded-full overflow-hidden"
          style={{ background: TEXT_GRADIENT }}
        >
          <span
            className={cn(
              "absolute left-1/2 top-1/2 font-bold leading-none select-none whitespace-nowrap",
              fontSize,
            )}
            style={{
              color: TEXT_COLOR,
              transform: "translate(-50%, calc(-50% + 0.07em))",
            }}
          >
            {(initials ?? "").slice(0, 2).toUpperCase()}
          </span>
        </div>
      )}

      {status && type === "photo" && (
        <span
          aria-label="Online"
          className={cn(
            "absolute bottom-0 right-0 block rounded-full bg-bg-success",
            dotSize,
            dotRing,
            "ring-white",
          )}
        />
      )}
    </div>
  );
}
