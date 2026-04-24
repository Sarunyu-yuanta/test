"use client";

import { Circle, ImageSquare } from "@phosphor-icons/react";
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

export interface NotificationItem {
  id: string;
  title: string;
  description: string;
  time: string;
  /** Shows unread dot and tinted row background. Default: false */
  unread?: boolean;
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
  /** Badge count shown on the trigger. Default: number of unread items. */
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

function NotificationDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 px-4 py-2">
      <p className="shrink-0 text-sm leading-5 text-subtle-text">{label}</p>
      <div aria-hidden="true" className="h-px min-w-0 flex-1 bg-divider" />
    </div>
  );
}

function NotificationRow({
  item,
  onItemClick,
}: {
  item: NotificationItem;
  onItemClick?: (item: NotificationItem) => void;
}) {
  const rowType = item.type ?? "icon";
  const showImage = rowType === "image";
  const showUnread = Boolean(item.unread);

  return (
    <div
      className={cn(
        "flex w-full items-start gap-3 px-4 py-3",
        showUnread ? "bg-primary-action-light/40" : "bg-background",
      )}
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
            {item.icon ?? <Circle size={20} weight="regular" />}
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-2">
          <p className="min-w-0 flex-1 truncate text-base leading-6 font-bold text-foreground">
            {item.title}
          </p>
          <div className="flex shrink-0 items-center gap-2">
            {showUnread && (
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-primary-action"
              />
            )}
            <p className="text-xs leading-4 text-muted-foreground">{item.time}</p>
          </div>
          <p className="col-start-1 mt-1 line-clamp-2 text-sm leading-5 text-muted-foreground">
            {item.description}
          </p>
        </div>

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
    const controlled = open !== undefined;
    const resolvedOpen = controlled ? open : internalOpen;
    const unreadCount = useMemo(
      () =>
        groups.reduce(
          (acc, group) =>
            acc + group.items.filter((item) => Boolean(item.unread)).length,
          0,
        ),
      [groups],
    );
    const nextCount = badgeCount ?? unreadCount;
    const prevCountRef = useRef(nextCount);

    useEffect(() => {
      const prevCount = prevCountRef.current;
      if (nextCount <= 0 || nextCount > prevCount) {
        setIsBadgeCleared(false);
      }
      prevCountRef.current = nextCount;
    }, [nextCount]);

    const displayCount = clearBadgeOnOpen && isBadgeCleared ? 0 : nextCount;
    const hasBadge = displayCount > 0;
    const hasItems = groups.some((group) => group.items.length > 0);

    const handleOpenChange = (next: boolean) => {
      if (next && clearBadgeOnOpen && nextCount > 0) {
        setIsBadgeCleared(true);
        onBadgeCleared?.();
      }
      if (!controlled) setInternalOpen(next);
      onOpenChange?.(next);
    };

    return (
      <Popover.Root open={resolvedOpen} onOpenChange={handleOpenChange}>
        <div ref={ref} className={cn("inline-flex", className)}>
          <Popover.Trigger asChild>
            <div className="relative">
              <Badge
                variant="notification"
                count={displayCount}
                maxCount={99}
                notificationState={
                  displayCount > 0 ? "noti" : resolvedOpen ? "active" : "default"
                }
                aria-label="Open notifications"
              />
            </div>
          </Popover.Trigger>
        </div>

        <Popover.Portal>
          <Popover.Content
            align="end"
            sideOffset={10}
            className={cn(
              "z-50 overflow-hidden rounded-lg border border-border bg-background shadow-lg",
              panelClassName,
            )}
            style={{ width: panelWidth }}
          >
            <div className="max-h-[480px] overflow-y-auto py-2">
              {!hasItems && (
                <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                  {emptyText}
                </div>
              )}

              {groups.map((group) => (
                <div key={group.label} className="w-full">
                  <NotificationDivider label={group.label} />
                  <div className="divide-y divide-divider">
                    {group.items.map((item) => (
                      <NotificationRow
                        key={item.id}
                        item={item}
                        onItemClick={onItemClick}
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
