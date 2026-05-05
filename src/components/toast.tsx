"use client";

import {
  CheckCircle,
  GearSix,
  Info,
  MegaphoneSimple,
  Warning,
  X,
  XCircle,
} from "@phosphor-icons/react";
import { forwardRef, useEffect, useRef, type ReactNode } from "react";
import { cn } from "../lib/utils";

export type ToastVariant = "default" | "broadcast";
export type ToastStatus = "information" | "success" | "warning" | "critical";

export interface ToastProps {
  variant?: ToastVariant;
  status?: ToastStatus;
  message: string;
  actionLabel?: string;
  multiline?: boolean;
  onActionClick?: () => void;
  onClose?: () => void;
  className?: string;
}

const statusStyles: Record<
  ToastStatus,
  {
    bg: string;
    text: string;
    icon: string;
    link: string;
  }
> = {
  information: {
    bg: "bg-[var(--bg-info-light)]",
    text: "text-[var(--text-info-primary)]",
    icon: "text-[var(--icon-brand-primary)]",
    link: "text-[var(--text-brand-link-primary)]",
  },
  success: {
    bg: "bg-[var(--bg-success-light)]",
    text: "text-[var(--text-success-primary)]",
    icon: "text-[var(--icon-success)]",
    link: "text-[var(--text-success-link)]",
  },
  warning: {
    bg: "bg-[var(--bg-warning-soft)]",
    text: "text-[var(--text-warning-primary)]",
    icon: "text-[var(--icon-warning)]",
    link: "text-[var(--text-warning-link)]",
  },
  critical: {
    bg: "bg-[var(--bg-danger-light)]",
    text: "text-[var(--text-danger-primary)]",
    icon: "text-[var(--icon-danger)]",
    link: "text-[var(--text-danger-link)]",
  },
};

function DefaultIcon({
  status,
  className,
}: {
  status: ToastStatus;
  className?: string;
}) {
  if (status === "success") return <CheckCircle className={className} size={24} weight="fill" />;
  if (status === "warning") return <Warning className={className} size={24} weight="fill" />;
  if (status === "critical") return <XCircle className={className} size={24} weight="fill" />;
  return <Info className={className} size={24} weight="fill" />;
}

function BroadcastIcon({
  status,
  className,
}: {
  status: ToastStatus;
  className?: string;
}) {
  if (status === "information") {
    return <MegaphoneSimple className={className} size={20} weight="fill" />;
  }
  return <GearSix className={className} size={20} weight="fill" />;
}

function ToastCloseButton({
  colorClass,
  onClose,
}: {
  colorClass: string;
  onClose?: () => void;
}) {
  return (
    <button
      type="button"
      aria-label="Close toast"
      className={cn(
        "inline-flex h-[18px] w-[18px] shrink-0 cursor-pointer items-center justify-center",
        colorClass,
      )}
      onClick={onClose}
    >
      <X size={12} weight="bold" />
    </button>
  );
}

export const Toast = forwardRef<HTMLDivElement, ToastProps>(function Toast(
  {
    variant = "default",
    status = "information",
    message,
    actionLabel,
    multiline = false,
    onActionClick,
    onClose,
    className,
  },
  ref,
) {
  const hasAction = Boolean(actionLabel);
  const effectiveStatus = variant === "broadcast" && status === "success" ? "information" : status;
  const effectiveStyle = statusStyles[effectiveStatus];
  const Icon = variant === "broadcast" ? BroadcastIcon : DefaultIcon;
  const showActions = variant === "default";

  return (
    <div
      ref={ref}
      role="status"
      className={cn(
        "flex w-full p-3",
        variant === "default"
          ? "items-center gap-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10),0px_1px_3px_1px_rgba(0,0,0,0.05)]"
          : "items-center gap-2",
        multiline && "items-start",
        effectiveStyle.bg,
        className,
      )}
    >
      <div
        className={cn(
          "flex min-w-0 flex-1 gap-2",
          multiline ? "items-start" : "items-center",
          variant === "default" && !hasAction && "opacity-80",
        )}
      >
        <div className={cn("shrink-0", multiline && "pt-0.5")}>
          <Icon status={effectiveStatus} className={effectiveStyle.icon} />
        </div>
        <p className={cn("min-w-0 flex-1 text-sm leading-5 font-normal", effectiveStyle.text)}>
          {message}
        </p>
      </div>

      {showActions && hasAction ? (
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            className={cn(
              "cursor-pointer text-sm leading-5 underline underline-offset-2",
              effectiveStyle.link,
            )}
            onClick={onActionClick}
          >
            {actionLabel}
          </button>
          <ToastCloseButton colorClass={effectiveStyle.icon} onClose={onClose} />
        </div>
      ) : showActions ? (
        <ToastCloseButton colorClass={effectiveStyle.icon} onClose={onClose} />
      ) : null}
    </div>
  );
});

Toast.displayName = "Toast";

export interface ToastStackProps {
  items: Array<ToastProps & { id: string }>;
  className?: string;
  renderItem?: (item: ToastProps & { id: string }) => ReactNode;
}

export function ToastStack({ items = [], className, renderItem }: ToastStackProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {items.map((item) =>
        renderItem ? (
          <div key={item.id}>{renderItem(item)}</div>
        ) : (
          <Toast key={item.id} {...item} />
        ),
      )}
    </div>
  );
}

export interface ToasterProps {
  items: Array<ToastProps & { id: string }>;
  renderItem?: (item: ToastProps & { id: string }) => ReactNode;
  className?: string;
  /**
   * Auto-dismiss duration in ms. Calls onRemove(id) after the delay.
   * Set to 0 to disable auto-dismiss. Default: 4000.
   */
  duration?: number;
  /** Called with the toast id when it should be removed (timeout or close). */
  onRemove?: (id: string) => void;
}

/**
 * Fixed-position toast container.
 * - Desktop (≥ md): top-right
 * - Tablet & mobile (< md): top-center, full width with horizontal padding
 *
 * Place once at the root of your app (e.g. inside App.tsx or layout).
 *
 * @example
 * const [toasts, setToasts] = useState([]);
 * const remove = (id) => setToasts(t => t.filter(x => x.id !== id));
 * <Toaster items={toasts} onRemove={remove} />
 */
export function Toaster({ items, renderItem, className, duration = 4000, onRemove }: ToasterProps) {
  const timers = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());

  useEffect(() => {
    if (duration > 0 && !onRemove) {
      console.warn("[Toaster] duration is set but onRemove is not provided — toasts will never dismiss. Pass onRemove={(id) => setToasts(t => t.filter(x => x.id !== id))} to enable auto-dismiss.");
    }
    if (!onRemove || duration === 0) return;

    // start timer for newly added items
    items.forEach((item) => {
      if (!timers.current.has(item.id)) {
        const t = setTimeout(() => {
          onRemove(item.id);
          timers.current.delete(item.id);
        }, duration);
        timers.current.set(item.id, t);
      }
    });

    // clear timers for items that were already removed externally
    const live = new Set(items.map((i) => i.id));
    timers.current.forEach((t, id) => {
      if (!live.has(id)) {
        clearTimeout(t);
        timers.current.delete(id);
      }
    });
  });

  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timers.current.forEach(clearTimeout);
    };
  }, []);

  if (items.length === 0) return null;

  const enriched = items.map((item) => ({
    ...item,
    onClose: onRemove ? () => onRemove(item.id) : item.onClose,
  }));

  return (
    <div
      className={cn(
        "fixed z-50 top-4",
        "md:right-4 md:w-[360px]",
        "max-md:left-1/2 max-md:-translate-x-1/2 max-md:w-[calc(100vw-32px)]",
        className,
      )}
    >
      <ToastStack items={enriched} renderItem={renderItem} />
    </div>
  );
}
