import React, { useState } from "react";

export type TextAreaState = "default" | "focus" | "error" | "disabled";

export interface TextAreaProps {
  placeholder?: string;
  required?: boolean;
  forceState?: TextAreaState;
  errorMessage?: string;
  value?: string;
  onChange?: (value: string) => void;
  helperText?: string;
  showCount?: boolean;
  maxCount?: number;
  rows?: number;
  className?: string;
}

export function TextArea({
  placeholder  = "Text label",
  required     = false,
  forceState,
  errorMessage = "Error message",
  value,
  onChange,
  helperText,
  showCount    = false,
  maxCount     = 100,
  rows         = 4,
  className    = "",
}: TextAreaProps) {
  const [focused, setFocused]             = useState(false);
  const [internalValue, setInternalValue] = useState("");

  const controlled   = value !== undefined;
  const currentValue = controlled ? value : internalValue;
  const isDisabled   = forceState === "disabled";

  const state: TextAreaState = forceState ?? (focused ? "focus" : "default");
  const isError = state === "error";
  const isFocus = state === "focus";
  const isFilled = currentValue.length > 0;

  // ── Colours ─────────────────────────────────────────────────────────────────
  const bg          = isDisabled ? "bg-[#f3f4f6]" : "bg-white";
  const floatLabel  = isDisabled ? "#99a1af" : "#6a7282";
  const filledValue = isDisabled ? "#99a1af" : "#101828";

  // ── Border overlay ──────────────────────────────────────────────────────────
  const borderInset = (isFocus || isError) ? "-1px" : "0px";
  const borderRad   = (isFocus || isError) ? "9px"  : "8px";
  const borderColor = isDisabled ? "rgba(0,0,0,0.05)"
                    : isError    ? "#e7000b"
                    : isFocus    ? "#0a6ee7"
                    : "rgba(0,0,0,0.1)";

  const charCount = currentValue.length;
  const showBelow = isError || Boolean(helperText) || showCount;
  const leftText  = isError ? errorMessage : (helperText ?? "");
  const leftColor = isError ? "#e7000b" : "#6a7282";
  const countColor = isDisabled ? "#99a1af" : "#6a7282";

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let newValue = e.target.value;
    if (showCount && newValue.length > maxCount) {
      newValue = newValue.slice(0, maxCount);
    }
    if (!controlled) setInternalValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div className={`flex flex-col gap-[4px] w-full ${className}`}>
      {/* ── Textarea field ── */}
      <div className={`relative rounded-[8px] ${bg} h-[116px]`}>
        {/* Border overlay */}
        <div
          aria-hidden="true"
          className="absolute pointer-events-none border border-solid"
          style={{ inset: borderInset, borderRadius: borderRad, borderColor }}
        />

        {isFilled ? (
          /* ─── Filled: floating label + real textarea ─── */
          <div className="flex flex-col items-start w-full h-full p-[14px] pb-[6px]">
            <p
              className="shrink-0 w-full leading-[16px] not-italic text-[12px]"
              style={{ color: floatLabel, fontFamily: "'Noto Sans Thai', sans-serif" }}
            >
              {placeholder}
            </p>
            <textarea
              value={currentValue}
              onChange={handleChange}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              disabled={isDisabled}
              rows={rows}
              aria-label={placeholder}
              className="w-full leading-[20px] not-italic text-[14px] min-w-0 flex-1 bg-transparent outline-none border-none p-0 m-0 resize-none"
              style={{
                color: filledValue,
                fontFamily: "'Noto Sans Thai', sans-serif",
                caretColor: "#0246a6",
              }}
            />
          </div>
        ) : (
          /* ─── Empty: placeholder + transparent textarea on top ─── */
          <div className="flex items-start p-[14px] size-full relative">
            <p
              className="flex-1 min-w-0 min-h-[1px] h-full text-[16px] leading-[20px] not-italic relative pointer-events-none"
              style={{ color: floatLabel, fontFamily: "'Noto Sans Thai', sans-serif" }}
            >
              {placeholder}
              {required && (
                <span style={{ color: isDisabled ? "#99a1af" : "#c10007" }}> *</span>
              )}
            </p>

            {/* Invisible real textarea for the empty state */}
            {!isDisabled && (
              <textarea
                value={currentValue}
                onChange={handleChange}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                rows={rows}
                className="absolute inset-0 w-full h-full cursor-text bg-transparent border-none outline-none resize-none text-[16px]"
                style={{
                  color: "transparent",
                  caretColor: isFocus ? "#0246a6" : "transparent",
                  fontFamily: "'Noto Sans Thai', sans-serif",
                  padding: "14px",
                }}
                aria-label={placeholder}
              />
            )}
          </div>
        )}
      </div>

      {/* ── Below: helper / error / count ── */}
      {showBelow && (
        <div
          className="flex items-start gap-[8px] px-[4px] text-[12px] leading-[16px]"
          style={{ fontFamily: "'Noto Sans Thai', sans-serif" }}
        >
          {leftText ? (
            <span className="flex-1 min-w-0" style={{ color: leftColor }}>
              {leftText}
            </span>
          ) : (
            showCount && <span className="flex-1" />
          )}

          {showCount && (
            <span
              className="shrink-0 text-right whitespace-nowrap"
              style={{ color: countColor }}
            >
              {charCount}/{maxCount}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
