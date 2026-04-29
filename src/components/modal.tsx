"use client";

import { type ReactNode } from "react";
import { X, Warning, Check } from "@phosphor-icons/react";
import { Button } from "./button";
import { cn } from "../lib/utils";

export type ModalVariant = "dialog" | "content" | "alert";
export type ModalActionLayout = "none" | "single" | "double";
export type ModalResponsive = "mobile" | "desktop";
export type ModalAlertStatus = "warning" | "success" | "danger";

type AlertConfig = {
  titleColor: string;
  solidBg: string;
  boxShadow: string;
  Icon: React.ElementType;
};

const ALERT_CONFIG: Record<ModalAlertStatus, AlertConfig> = {
  warning: {
    titleColor: "var(--text-warning-primary)",
    solidBg: "#f0b100",
    boxShadow: "0 0 0 8px rgba(240,177,0,0.2), 0 0 0 20px rgba(240,177,0,0.08)",
    Icon: Warning,
  },
  success: {
    titleColor: "var(--text-success-primary)",
    solidBg: "#00c951",
    boxShadow: "0 0 0 8px rgba(0,201,81,0.2), 0 0 0 20px rgba(0,201,81,0.08)",
    Icon: Check,
  },
  danger: {
    titleColor: "var(--text-danger-primary)",
    solidBg: "#fb2c36",
    boxShadow: "0 0 0 8px rgba(251,44,54,0.2), 0 0 0 20px rgba(251,44,54,0.08)",
    Icon: X,
  },
};

export interface ModalProps {
  variant?: ModalVariant;
  actionLayout?: ModalActionLayout;
  responsive?: ModalResponsive;
  alertStatus?: ModalAlertStatus;
  showClose?: boolean;
  title?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  children?: ReactNode;
  className?: string;
  onClose?: () => void;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export function Modal({
  variant = "dialog",
  actionLayout = "none",
  responsive = "mobile",
  alertStatus = "warning",
  showClose = true,
  title = "Text label",
  description = "Lorem ipsum dolor sit amet consectetur. Mi id nunc ac tempus turpis. Ipsum consectetur dictum volutpat viverra arcu rhoncus sit arcu.",
  primaryLabel = "Accept",
  secondaryLabel = "Cancel",
  children,
  className,
  onClose,
  onPrimaryClick,
  onSecondaryClick,
}: ModalProps) {
  const isContent = variant === "content";
  const isAlert = variant === "alert";
  const isDialog = variant === "dialog";
  const isDesktop = responsive === "desktop";
  const alert = ALERT_CONFIG[alertStatus];

  return (
    <div
      className={cn(
        "w-auto overflow-hidden border border-border bg-background",
        isAlert ? "w-[343px] rounded-2xl" : "rounded-xl",
        isContent
          ? "min-w-[343px] max-w-[500px] "
          : isAlert
            ? undefined
            : isDialog && "min-w-[375px] max-w-[500px]",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center px-4 pt-4",
          isAlert ? "justify-end" : "justify-between gap-4",
        )}
      >
        {!isAlert ? (
          <p className="text-[18px] leading-7 font-bold text-foreground">
            {title}
          </p>
        ) : null}
        {showClose ? (
          <Button
            aria-label="Close dialog"
            className="h-5 w-5 shrink-0 rounded-none text-subtle-text"
            onClick={onClose}
            size="icon-xs"
            variant="plain-black"
          >
            <X size={20} weight="regular" />
          </Button>
        ) : null}
      </div>

      <div className={cn("px-4 pb-6", isAlert ? "pt-0" : "pt-4")}>
        {isAlert ? (
          <AlertBody config={alert} title={title} description={description} />
        ) : isContent ? (
          <div className="w-full">{children ?? null}</div>
        ) : (
          (children ?? (
            <p className="text-sm leading-5 text-muted-foreground">
              {description}
            </p>
          ))
        )}
      </div>

      {actionLayout !== "none" ? (
        <div className="px-4 pb-4">
          <ModalActions
            layout={actionLayout}
            isContent={isContent}
            isDesktop={isDesktop}
            primaryLabel={primaryLabel}
            secondaryLabel={secondaryLabel}
            onPrimaryClick={onPrimaryClick}
            onSecondaryClick={onSecondaryClick}
          />
        </div>
      ) : null}
    </div>
  );
}

function AlertBody({
  config,
  title,
  description,
}: {
  config: AlertConfig;
  title: string;
  description: string;
}) {
  const { Icon, titleColor, solidBg, boxShadow } = config;
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="flex items-center justify-center size-[100px]">
        <div
          className="flex items-center justify-center size-[56px] rounded-full"
          style={{ backgroundColor: solidBg, boxShadow }}
        >
          <Icon size={40} color="white" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p
          className="text-[18px] leading-7 font-bold"
          style={{ color: titleColor }}
        >
          {title}
        </p>
        <p className="text-sm leading-5 text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function ModalActions({
  layout,
  isContent,
  isDesktop,
  primaryLabel,
  secondaryLabel,
  onPrimaryClick,
  onSecondaryClick,
}: {
  layout: Exclude<ModalActionLayout, "none">;
  isContent: boolean;
  isDesktop: boolean;
  primaryLabel: string;
  secondaryLabel: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}) {
  // Content variant on desktop right-aligns actions; every other case uses full-width stretched buttons.
  const desktopInline = isContent && isDesktop;

  if (layout === "single") {
    return (
      <div className={cn(desktopInline ? "flex justify-end" : undefined)}>
        <Button
          className={cn(desktopInline ? undefined : "w-full")}
          onClick={onPrimaryClick}
          size="xl"
          variant="primary"
        >
          {primaryLabel}
        </Button>
      </div>
    );
  }

  const containerClass = isContent
    ? cn("flex gap-4", isDesktop ? "justify-end" : "flex-col")
    : "flex items-center gap-4";
  const buttonClass = isContent
    ? isDesktop
      ? undefined
      : "w-full"
    : "min-w-0 flex-1";

  return (
    <div className={containerClass}>
      <Button
        className={buttonClass}
        onClick={onSecondaryClick}
        size="xl"
        variant="outline"
      >
        {secondaryLabel}
      </Button>
      <Button
        className={buttonClass}
        onClick={onPrimaryClick}
        size="xl"
        variant="primary"
      >
        {primaryLabel}
      </Button>
    </div>
  );
}
