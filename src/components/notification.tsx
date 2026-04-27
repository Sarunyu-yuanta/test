"use client";

import { Gift, ImageSquare } from "@phosphor-icons/react";
import * as Popover from "@radix-ui/react-popover";
import {
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Button } from "./button";
import { Badge } from "./badge";
import { cn } from "../lib/utils";

export type NotificationItemType = "icon" | "image";
export type NotificationItemStatus = "new" | "unread" | "read";

export interface NotificationItem {
  id: string;
  title: string;
  description: string;
  time: string;
  /** Shows unread dot and tinted row background. Default: false */
  unread?: boolean;
  /** Visual state for the notification row. Default: "read" */
  status?: NotificationItemStatus;
  /** Icon row or image row. Default: "icon" */
  type?: NotificationItemType;
  /** Image source for image-type rows. */
  imageSrc?: string;
  /** Optional leading icon for icon-type rows. */
  icon?: ReactNode;
  /** Optional action button label rendered below description. */
  actionLabel?: string;
  onActionClick?: () => void;
}

export interface NotificationGroup {
  /** Divider label, e.g. "25 ก.ค. 2567" or "เมื่อวาน" */
  label: string;
  items: NotificationItem[];
}

export interface NotificationProps {
  /** Notification groups rendered in order under date dividers. */
  groups: NotificationGroup[];
  /** Badge count shown on the trigger. Default: number of new items. */
  badgeCount?: number;
  /** Width of the popover panel in px. Default: 375 */
  panelWidth?: number;
  /** Placeholder text when no notifications are available. */
  emptyText?: string;
  /** Auto clear badge to default when the list is opened. Default: true */
  clearBadgeOnOpen?: boolean;
  /** Controlled open state */
  open?: boolean;
  /** Uncontrolled open initial state */
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  onBadgeCleared?: () => void;
  onItemClick?: (item: NotificationItem) => void;
  className?: string;
  panelClassName?: string;
}


function NotificationRow({
  item,
  onItemClick,
  hideIndicator = false,
  demoteNewBackground = false,
}: {
  item: NotificationItem;
  onItemClick?: (item: NotificationItem) => void;
  hideIndicator?: boolean;
  demoteNewBackground?: boolean;
}) {
  const rowType = item.type ?? "icon";
  const showImage = rowType === "image";
  const status = item.status ?? (item.unread ? "unread" : "read");
  const showIndicator = (status === "new" || status === "unread") && !hideIndicator;
  const rowBackground =
    status === "new" && !demoteNewBackground ? "bg-muted" : "bg-background";

  return (
    <div
      className={cn("flex w-full items-start gap-3 px-4 py-3", rowBackground)}
      role="button"
      tabIndex={0}
      onClick={() => onItemClick?.(item)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onItemClick?.(item);
        }
      }}
    >
      <div className="flex w-10 shrink-0 items-start justify-center py-0.5">
        {showImage ? (
          item.imageSrc ? (
            <img
              alt=""
              className="h-10 w-10 rounded object-cover"
              src={item.imageSrc}
            />
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded bg-disabled-bg text-disabled">
              <ImageSquare size={20} weight="regular" />
            </div>
          )
        ) : (
          <div className="flex h-6 w-6 items-center justify-center text-subtle-text">
            {item.icon ?? <Gift size={20} weight="regular" />}
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1 space-y-1">
        <p className="line-clamp-2 text-base leading-6 font-semibold text-foreground">
          {item.title}
        </p>
        <p className="line-clamp-3 text-sm leading-5 text-muted-foreground">
          {item.description}
        </p>
        <p className="text-xs leading-4 text-muted-foreground">{item.time}</p>

        {item.actionLabel && (
          <Button
            className="mt-2"
            size="md"
            variant="primary"
            onClick={(e) => {
              e.stopPropagation();
              item.onActionClick?.();
            }}
          >
            {item.actionLabel}
          </Button>
        )}
      </div>

      <div className="flex w-2 shrink-0 items-start justify-center pt-2">
        {showIndicator ? (
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-destructive"
          />
        ) : null}
      </div>
    </div>
  );
}

export const Notification = forwardRef<HTMLDivElement, NotificationProps>(
  function Notification(
    {
      groups,
      badgeCount,
      panelWidth = 375,
      emptyText = "No notifications",
      clearBadgeOnOpen = true,
      open,
      defaultOpen,
      onOpenChange,
      onBadgeCleared,
      onItemClick,
      className,
      panelClassName,
    },
    ref,
  ) {
    const [internalOpen, setInternalOpen] = useState(defaultOpen ?? false);
    const [isBadgeCleared, setIsBadgeCleared] = useState(false);
    const [clickedItemIds, setClickedItemIds] = useState<Set<string>>(new Set());
    const [wasDismissed, setWasDismissed] = useState(false);
    const [mobileAlign, setMobileAlign] = useState<{ alignOffset: number; width: number } | null>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const controlled = open !== undefined;
    const resolvedOpen = controlled ? open : internalOpen;
    const newCount = useMemo(
      () =>
        groups.reduce(
          (acc, group) =>
            acc +
            group.items.filter((item) => {
              const status = item.status ?? (item.unread ? "unread" : "read");
              return status === "new";
            }).length,
          0,
        ),
      [groups],
    );
    const nextCount = badgeCount ?? newCount;
    const prevCountRef = useRef(nextCount);

    useEffect(() => {
      const prevCount = prevCountRef.current;
      if (nextCount <= 0 || nextCount > prevCount) {
        setIsBadgeCleared(false);
      }
      prevCountRef.current = nextCount;
    }, [nextCount]);

    useEffect(() => {
      const update = () => {
        if (window.innerWidth > 640 || !triggerRef.current) {
          setMobileAlign(null);
          return;
        }
        const contentWidth = Math.min(panelWidth, window.innerWidth - 32);
        const triggerLeft = triggerRef.current.getBoundingClientRect().left;
        // position left edge of panel at (viewportWidth - panelWidth) / 2
        setMobileAlign({
          alignOffset: (window.innerWidth - contentWidth) / 2 - triggerLeft,
          width: contentWidth,
        });
      };
      update();
      window.addEventListener("resize", update);
      return () => window.removeEventListener("resize", update);
    }, [panelWidth]);

    const displayCount = clearBadgeOnOpen && isBadgeCleared ? 0 : nextCount;
    const hasItems = groups.some((group) => group.items.length > 0);

    const handleOpenChange = (next: boolean) => {
      if (resolvedOpen && !next) {
        setWasDismissed(true);
      }
      if (next && clearBadgeOnOpen && nextCount > 0) {
        setIsBadgeCleared(true);
        onBadgeCleared?.();
      }
      if (!controlled) setInternalOpen(next);
      onOpenChange?.(next);
    };

    const handleItemClick = (item: NotificationItem) => {
      setClickedItemIds((prev) => {
        if (prev.has(item.id)) return prev;
        const next = new Set(prev);
        next.add(item.id);
        return next;
      });
      onItemClick?.(item);
    };

    return (
      <Popover.Root open={resolvedOpen} onOpenChange={handleOpenChange}>
        <div ref={ref} className={cn("inline-flex", className)}>
          <Popover.Trigger asChild>
            <div ref={triggerRef} className="relative">
              <Badge
                variant="notification"
                count={displayCount}
                maxCount={99}
                notificationState={
                  displayCount > 0
                    ? "noti"
                    : resolvedOpen
                      ? "active"
                      : "default"
                }
                aria-label="Open notifications"
              />
            </div>
          </Popover.Trigger>
        </div>

        <Popover.Portal>
          <Popover.Content
            align={mobileAlign ? "start" : "end"}
            alignOffset={mobileAlign?.alignOffset ?? 0}
            avoidCollisions={!mobileAlign}
            sideOffset={10}
            className={cn(
              "z-50 overflow-hidden rounded-lg border border-border bg-background shadow-lg",
              panelClassName,
            )}
            style={{ width: mobileAlign?.width ?? panelWidth }}
          >
            <div className="max-h-[480px] overflow-y-auto">
              {!hasItems && (
                <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                  {emptyText}
                </div>
              )}

              {groups.map((group) => (
                <div key={group.label} className="w-full">
                  <div>
                    {group.items.map((item) => (
                      <NotificationRow
                        key={item.id}
                        item={item}
                        onItemClick={handleItemClick}
                        hideIndicator={clickedItemIds.has(item.id)}
                        demoteNewBackground={wasDismissed}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    );
  },
);

Notification.displayName = "Notification";
