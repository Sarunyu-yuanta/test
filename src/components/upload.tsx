"use client";

import { forwardRef, type HTMLAttributes, type MouseEvent } from "react";
import { UploadSimpleIcon, TrashIcon } from "@phosphor-icons/react";
import { cn } from "../lib/utils";
import { LinearProgress, CircleProgress } from "./progress";

// ─── UploadArea ──────────────────────────────────────────────────────────────

export interface UploadAreaProps extends HTMLAttributes<HTMLDivElement> {
  /** Disables interaction and dims the component. */
  disabled?: boolean;
  /** Text label displayed next to the upload icon. Default: "อัปโหลดไฟล์" */
  label?: string;
}

export const UploadArea = forwardRef<HTMLDivElement, UploadAreaProps>(
  function UploadArea(
    { disabled = false, label = "อัปโหลดไฟล์", className, onClick, ...props },
    ref,
  ) {
    return (
      <div
        ref={ref}
        role={disabled ? undefined : "button"}
        tabIndex={disabled ? undefined : 0}
        aria-disabled={disabled}
        onClick={disabled ? undefined : onClick}
        onKeyDown={
          disabled
            ? undefined
            : (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onClick?.(e as unknown as MouseEvent<HTMLDivElement>);
                }
              }
        }
        className={cn(
          "flex items-center justify-center gap-2 min-h-12 py-3.5 rounded-lg",
          "border border-dashed border-border-default",
          disabled
            ? "bg-bg-default-secondary cursor-not-allowed"
            : "bg-background cursor-pointer hover:bg-bg-default-secondary transition-colors",
          className,
        )}
        {...props}
      >
        <span
          className={cn(
            "flex items-center justify-center w-5 h-5 shrink-0",
            disabled ? "text-disabled" : "text-primary-action",
          )}
        >
          <UploadSimpleIcon size={20} weight="regular" />
        </span>
        <span
          className={cn(
            "text-sm font-medium leading-5 whitespace-nowrap",
            disabled ? "text-disabled" : "text-primary-action",
          )}
        >
          {label}
        </span>
      </div>
    );
  },
);

UploadArea.displayName = "UploadArea";

// ─── UploadItem ──────────────────────────────────────────────────────────────

export type UploadItemVariant = "text" | "card";
export type UploadItemStatus  = "loading" | "success" | "error";

export interface UploadItemProps {
  /**
   * Display style:
   * - `"text"` — compact inline row, no card border or file-size column
   * - `"card"` — bordered card with file-size and a separate delete button
   *
   * Default: `"text"`
   */
  variant?: UploadItemVariant;
  /** Upload status. Default: `"loading"` */
  status?: UploadItemStatus;
  /** Displayed file name. */
  fileName?: string;
  /**
   * Formatted file size string shown in the `"card"` variant (e.g. `"1.66KB"`).
   * Ignored in the `"text"` variant.
   */
  fileSize?: string;
  /** Error message displayed when `status === "error"`. */
  errorText?: string;
  /** Progress value (0–100) shown while `status === "loading"`. */
  progress?: number;
  /** Called when the delete/trash button is clicked. */
  onDelete?: () => void;
  className?: string;
}

export const UploadItem = forwardRef<HTMLDivElement, UploadItemProps>(
  function UploadItem(
    {
      variant   = "text",
      status    = "loading",
      fileName  = "filename.pdf",
      fileSize  = "1.66KB",
      errorText = "Error Text",
      progress  = 50,
      onDelete,
      className,
    },
    ref,
  ) {
    const isLoading = status === "loading";
    const isSuccess = status === "success";
    const isError   = status === "error";

    // ── Text variant ──────────────────────────────────────────────────────────
    if (variant === "text") {
      return (
        <div
          ref={ref}
          className={cn(
            "flex max-w-[500px] w-[300px] overflow-hidden",
            isError ? "flex-col gap-1 items-start" : "gap-2 items-center",
            className,
          )}
        >
          {isLoading && (
            <>
              <p className="flex-1 min-w-0 text-sm leading-5 text-text-default-placeholder truncate">
                {fileName}
              </p>
              <CircleProgress size="sm" value={progress} className="shrink-0" />
            </>
          )}

          {isSuccess && (
            <>
              <p className="flex-1 min-w-0 text-sm leading-5 text-text-info truncate">
                {fileName}
              </p>
              <TrashButton onDelete={onDelete} />
            </>
          )}

          {isError && (
            <>
              <div className="flex gap-2 items-center w-full py-px">
                <p className="flex-1 min-w-0 text-sm leading-5 text-text-danger truncate">
                  {fileName}
                </p>
                <TrashButton onDelete={onDelete} />
              </div>
              <div className="flex items-center gap-0.5 px-0.5 text-text-danger">
                <span className="text-[7.74px] leading-none">*</span>
                <p className="text-xs leading-4">{errorText}</p>
              </div>
            </>
          )}
        </div>
      );
    }

    // ── Card variant ──────────────────────────────────────────────────────────
    // text-base (16px) + leading-6 (24px) = Body1 per Figma spec
    const cardBase =
      "flex-1 min-w-0 flex items-center gap-2 p-3.5 bg-background border border-border-default rounded-lg text-base leading-6 whitespace-nowrap";

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col gap-1 items-start w-[343px]",
          className,
        )}
      >
        {isLoading && (
          <div className="w-full flex flex-col gap-1 px-3.5 py-2.5 bg-background border border-border-default rounded-lg">
            <div className="flex gap-2 items-center h-5 text-sm leading-5 text-text-default-placeholder">
              <p className="flex-1 min-w-0 truncate">{fileName}</p>
              <p className="shrink-0 text-right w-[46px]">{fileSize}</p>
            </div>
            <LinearProgress value={progress} />
          </div>
        )}

        {(isSuccess || isError) && (
          <div className="flex gap-1 items-center w-full">
            <div
              className={cn(
                cardBase,
                isSuccess ? "text-text-info" : "text-text-danger",
              )}
            >
              <p className="flex-1 min-w-0 overflow-hidden text-ellipsis">
                {fileName}
              </p>
              <p className="shrink-0 text-right">{fileSize}</p>
            </div>

            {/* Separate square delete button */}
            <button
              type="button"
              onClick={onDelete}
              className={cn(
                "flex items-center justify-center size-12 shrink-0",
                "bg-background border border-border-default rounded-lg",
                "text-icon-danger cursor-pointer",
              )}
              aria-label="ลบไฟล์"
            >
              <TrashIcon size={20} />
            </button>
          </div>
        )}

        {isError && (
          <div className="flex items-center px-1 py-0 w-full text-text-danger">
            <p className="text-xs leading-4 whitespace-nowrap">{errorText}</p>
          </div>
        )}
      </div>
    );
  },
);

UploadItem.displayName = "UploadItem";

// ─── Internal helpers ─────────────────────────────────────────────────────────

function TrashButton({ onDelete }: { onDelete?: () => void }) {
  return (
    <button
      type="button"
      onClick={onDelete}
      className="flex items-center justify-center w-5 h-5 shrink-0 text-text-danger cursor-pointer"
      aria-label="ลบไฟล์"
    >
      <TrashIcon size={20} />
    </button>
  );
}
