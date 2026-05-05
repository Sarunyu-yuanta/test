"use client";

import { CheckCircle, Info, Warning, XCircle } from "@phosphor-icons/react";
import { forwardRef } from "react";
import { cn } from "../lib/utils";

export type AlertStatus =
  | "normal"
  | "information"
  | "success"
  | "warning"
  | "critical";

export interface AlertProps {
  status?: AlertStatus;
  title?: string;
  message: string;
  multiline?: boolean;
  className?: string;
}

const alertStyles: Record<
  AlertStatus,
  {
    container: string;
    text: string;
    icon: string;
  }
> = {
  normal: {
    container: "bg-default-secondary",
    text: "text-default-secondary",
    icon: "text-default-secondary",
  },
  information: {
    container: "bg-[var(--bg-info-light)]",
    text: "text-[var(--text-info-primary)]",
    icon: "text-[var(--icon-brand-primary)]",
  },
  success: {
    container: "bg-[var(--bg-success-light)]",
    text: "text-[var(--text-success-primary)]",
    icon: "text-[var(--icon-success)]",
  },
  warning: {
    container: "bg-[var(--bg-warning-soft)]",
    text: "text-[var(--text-warning-primary)]",
    icon: "text-[var(--icon-warning)]",
  },
  critical: {
    container: "bg-[var(--bg-danger-light)]",
    text: "text-[var(--text-danger-primary)]",
    icon: "text-[var(--icon-danger)]",
  },
};

function AlertStatusIcon({
  status,
  className,
}: {
  status: AlertStatus;
  className?: string;
}) {
  if (status === "success") return <CheckCircle size={16} weight="fill" className={className} />;
  if (status === "warning") return <Warning size={16} weight="fill" className={className} />;
  if (status === "critical") return <XCircle size={16} weight="fill" className={className} />;
  return <Info size={16} weight="fill" className={className} />;
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  { status = "normal", title, message, multiline = false, className },
  ref,
) {
  const style = alertStyles[status];
  const hasTitle = Boolean(title);

  return (
    <div
      ref={ref}
      role="status"
      className={cn(
        "flex w-full items-center gap-1.5 rounded px-2 py-1",
        (multiline || hasTitle) && "items-start",
        style.container,
        className,
      )}
    >
      <AlertStatusIcon
        status={status}
        className={cn("shrink-0 mt-0.5", style.icon)}
      />
      <div className="min-w-0 flex-1 flex flex-col gap-0.5">
        {hasTitle && (
          <p className={cn("text-sm leading-5 font-medium", style.text)}>
            {title}
          </p>
        )}
        <p
          className={cn(
            "text-sm leading-5 font-normal",
            !hasTitle && !multiline && "truncate",
            !hasTitle && multiline && "line-clamp-2",
            style.text,
          )}
        >
          {message}
        </p>
      </div>
    </div>
  );
});

Alert.displayName = "Alert";
