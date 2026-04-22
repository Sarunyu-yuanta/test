"use client";

import type React from "react";
import { Circle } from "@phosphor-icons/react";
import { Button } from "./button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { cn } from "../lib/utils";

export type BottomSheetHeaderType = "text" | "icon" | "image";
export type BottomSheetRightSide = "icon" | "action" | "none";

export interface BottomSheetProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: React.ReactNode;
  headerType?: BottomSheetHeaderType;
  showHeader?: boolean;
  rightSide?: BottomSheetRightSide;
  title?: string;
  actionLabel?: string;
  imageSrc?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onActionClick?: () => void;
  showHandle?: boolean;
  children?: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

export function BottomSheet({
  open,
  onOpenChange,
  trigger,
  headerType = "text",
  showHeader = true,
  rightSide = "icon",
  title = "Title",
  actionLabel = "Action",
  imageSrc,
  leftIcon,
  rightIcon,
  onActionClick,
  showHandle = true,
  children,
  className,
  contentClassName,
}: BottomSheetProps) {
  return (
    <Drawer direction="bottom" open={open} onOpenChange={onOpenChange}>
      {trigger ? <DrawerTrigger asChild>{trigger}</DrawerTrigger> : null}
      <DrawerContent
        className={cn(
          "[&>div:first-child]:hidden rounded-t-[24px] border-t-0 px-4 pb-6 pt-2",
          className,
        )}
      >
        <DrawerTitle className="sr-only">{title}</DrawerTitle>

        {showHandle ? (
          <div className="mb-2 flex justify-center">
            <div className="h-1 w-10 rounded-full bg-muted" />
          </div>
        ) : null}

        {showHeader ? (
          <Header
            headerType={headerType}
            rightSide={rightSide}
            title={title}
            actionLabel={actionLabel}
            imageSrc={imageSrc}
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            onActionClick={onActionClick}
          />
        ) : null}

        {children ? <div className={cn("pt-2", contentClassName)}>{children}</div> : null}
      </DrawerContent>
    </Drawer>
  );
}

function Header({
  headerType,
  rightSide,
  title,
  actionLabel,
  imageSrc,
  leftIcon,
  rightIcon,
  onActionClick,
}: {
  headerType: BottomSheetHeaderType;
  rightSide: BottomSheetRightSide;
  title: string;
  actionLabel: string;
  imageSrc?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onActionClick?: () => void;
}) {
  return (
    <div className={cn("flex items-center gap-3", rightSide === "action" ? "pr-2" : undefined)}>
      <div className="flex min-w-0 flex-1 items-center gap-2">
        <Leading headerType={headerType} imageSrc={imageSrc} leftIcon={leftIcon} />
        <p className="truncate text-base leading-6 font-bold text-foreground">{title}</p>
      </div>
      <Trailing
        rightSide={rightSide}
        actionLabel={actionLabel}
        rightIcon={rightIcon}
        onActionClick={onActionClick}
      />
    </div>
  );
}

function Leading({
  headerType,
  imageSrc,
  leftIcon,
}: {
  headerType: BottomSheetHeaderType;
  imageSrc?: string;
  leftIcon?: React.ReactNode;
}) {
  if (headerType === "image") {
    return imageSrc ? (
      <img alt="" className="size-8 shrink-0 rounded-md object-cover" src={imageSrc} />
    ) : (
      <div className="size-8 shrink-0 rounded-md bg-muted" />
    );
  }
  if (headerType === "icon") {
    return (
      <span aria-hidden="true" className="text-foreground">
        {leftIcon ?? <Circle size={22} />}
      </span>
    );
  }
  return null;
}

function Trailing({
  rightSide,
  actionLabel,
  rightIcon,
  onActionClick,
}: {
  rightSide: BottomSheetRightSide;
  actionLabel: string;
  rightIcon?: React.ReactNode;
  onActionClick?: () => void;
}) {
  if (rightSide === "action") {
    return (
      <Button
        className="px-0 py-0 text-base leading-6 font-bold"
        onClick={onActionClick}
        size="md"
        variant="plain"
      >
        {actionLabel}
      </Button>
    );
  }
  if (rightSide === "icon") {
    return (
      <DrawerClose asChild>
        <Button
          aria-label="Close bottom sheet"
          className="text-foreground"
          size="icon-xs"
          variant="plain-black"
        >
          {rightIcon ?? <Circle size={22} />}
        </Button>
      </DrawerClose>
    );
  }
  return null;
}
