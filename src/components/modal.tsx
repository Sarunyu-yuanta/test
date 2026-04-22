"use client";

import type React from "react";
import { X } from "@phosphor-icons/react";
import { Button } from "./button";
import { cn } from "../lib/utils";

export type ModalVariant = "dialog" | "content" | "alert";
export type ModalActionLayout = "none" | "single" | "double";
export type ModalResponsive = "mobile" | "desktop";
export type ModalAlertStatus = "warning" | "success" | "danger";

type AlertLayer = { inset: string; src: string };
type AlertConfig = { titleColor: string; background: string; layers: AlertLayer[] };

const ALERT_CONFIG: Record<ModalAlertStatus, AlertConfig> = {
  warning: {
    titleColor: "var(--accent-orange)",
    background: "https://www.figma.com/api/mcp/asset/f4ca68ad-5732-4124-9ff4-cfb69330cc02",
    layers: [
      { inset: "12.5%", src: "https://www.figma.com/api/mcp/asset/7052a092-a432-4e8c-b559-6b51d28d878f" },
      { inset: "22.5%", src: "https://www.figma.com/api/mcp/asset/a291a1b2-06c8-455c-8e21-29755aa05c57" },
      { inset: "28.57% 30.71% 32.86% 30.71%", src: "https://www.figma.com/api/mcp/asset/a22c7520-55fe-4003-ba78-65dab40b9e23" },
    ],
  },
  success: {
    titleColor: "var(--success)",
    background: "https://www.figma.com/api/mcp/asset/2a865e6f-8a92-4496-88b5-71ac99e2c385",
    layers: [
      { inset: "12.77%", src: "https://www.figma.com/api/mcp/asset/5878ce35-4f9a-4203-97a8-70a2f17b182c" },
      { inset: "22.55%", src: "https://www.figma.com/api/mcp/asset/cea74180-b261-4db7-8712-6d32c4ccdeaf" },
    ],
  },
  danger: {
    titleColor: "var(--destructive)",
    background: "https://www.figma.com/api/mcp/asset/c7a65595-684e-4a04-b7fd-d443951f680a",
    layers: [
      { inset: "12.77%", src: "https://www.figma.com/api/mcp/asset/10090345-ae32-4fc4-aff6-cba04ea93700" },
      { inset: "22.55%", src: "https://www.figma.com/api/mcp/asset/3aa1156e-e48b-411f-ab98-93e1da98ecc1" },
    ],
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
  children?: React.ReactNode;
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
  const isDesktop = responsive === "desktop";
  const alert = ALERT_CONFIG[alertStatus];

  return (
    <div
      className={cn(
        "max-w-full overflow-hidden border border-border bg-background",
        isAlert ? "w-[343px] rounded-2xl" : "rounded-xl",
        isContent ? "w-[343px]" : isAlert ? undefined : "w-[375px]",
        className,
      )}
    >
      <div className={cn("flex items-center px-4 pt-4", isAlert ? "justify-end" : "justify-between gap-4")}>
        {!isAlert ? <p className="text-[18px] leading-7 font-bold text-foreground">{title}</p> : null}
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
          children ?? <p className="text-sm leading-5 text-muted-foreground">{description}</p>
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
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="relative size-[100px]">
        <img alt="" className="absolute inset-0 size-full" src={config.background} />
        {config.layers.map((layer) => (
          <div key={layer.src} className="absolute" style={{ inset: layer.inset }}>
            <img alt="" className="absolute inset-0 size-full" src={layer.src} />
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-[18px] leading-7 font-bold" style={{ color: config.titleColor }}>
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
  const buttonClass = isContent ? (isDesktop ? undefined : "w-full") : "min-w-0 flex-1";

  return (
    <div className={containerClass}>
      <Button className={buttonClass} onClick={onSecondaryClick} size="xl" variant="outline">
        {secondaryLabel}
      </Button>
      <Button className={buttonClass} onClick={onPrimaryClick} size="xl" variant="primary">
        {primaryLabel}
      </Button>
    </div>
  );
}
