import React, { useState } from "react";

export type InputState = "default" | "focus" | "error" | "disabled";

export interface InputProps {
  /** Placeholder / floating-label text */
  placeholder?: string;
  /** Appends a red asterisk */
  required?: boolean;
  /** Override the visual state (for showcase) */
  forceState?: InputState;
  /** Error message shown below when state is "error" */
  errorMessage?: string;
  /** Controlled value — triggers the filled (floating-label) layout when non-empty */
  value?: string;
  onChange?: (value: string) => void;
  /** Icon shown on the right */
  rightIcon?: React.ReactNode;
  /** Unit text on the right (ignored when rightIcon is set) */
  unit?: string;
  /** Helper text shown below */
  helperText?: string;
  /** Show "n/maxCount" character counter */
  showCount?: boolean;
  maxCount?: number;
  className?: string;
}

export function Input({
  placeholder  = "Text label",
  required     = false,
  forceState,
  errorMessage = "Error message",
  value,
  onChange,
  rightIcon,
  unit,
  helperText,
  showCount    = false,
  maxCount     = 100,
  className    = "",
}: InputProps) {
  const [focused,       setFocused]       = useState(false);
  const [internalValue, setInternalValue] = useState("");

  const controlled   = value !== undefined;
  const currentValue = controlled ? value : internalValue;
  const isDisabled   = forceState === "disabled";

  const state: InputState = forceState ?? (focused ? "focus" : "default");
  const isError  = state === "error";
  const isFocus  = state === "focus";
  const isFilled = currentValue.length > 0;

  // ── Colours ───────────────────────────────────────────────────────────────
  const bg            = isDisabled ? "bg-[#f3f4f6]" : "bg-white";
  const floatLabel    = isDisabled ? "#99a1af" : "#6a7282";  // small top label / placeholder
  const filledValue   = isDisabled ? "#99a1af" : "#101828";  // typed text
  const unitColor     = isDisabled ? "#99a1af" : "#6a7282";

  // ── Border overlay ────────────────────────────────────────────────────────
  const borderInset  = (isFocus || isError) ? "-1px" : "0px";
  const borderRad    = (isFocus || isError) ? "9px"  : "8px";
  const borderColor  = isDisabled ? "rgba(0,0,0,0.05)"
                     : isError    ? "#e7000b"
                     : isFocus    ? "#0a6ee7"
                     : "rgba(0,0,0,0.1)";

  // ── Padding ───────────────────────────────────────────────────────────────
  const hasRight = Boolean(rightIcon) || Boolean(unit);
  const padding  = isFilled
    ? "px-[14px] py-[6px]"
    : hasRight ? "px-[14px] py-[12px]" : "p-[14px]";

  const charCount  = currentValue.length;
  const showBelow  = isError || Boolean(helperText) || showCount;
  const leftText   = isError ? errorMessage : (helperText ?? "");
  const leftColor  = isError ? "#e7000b" : "#6a7282";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!controlled) setInternalValue(e.target.value);
    onChange?.(e.target.value);
  };

  // ── Filled container alignment ────────────────────────────────────────────
  const filledAlign = !hasRight
    ? "flex-col items-start justify-center"
    : rightIcon ? "flex items-center gap-[8px]"
                : "flex items-end gap-[8px]";

  // ── Shared native input styles ────────────────────────────────────────────
  const inputFont: React.CSSProperties = {
    fontFamily: "'Noto Sans Thai', sans-serif",
    caretColor: "#0246a6",
  };

  return (
    <div className={`flex flex-col gap-[4px] w-full ${className}`}>

      {/* ── Input field ── */}
      <div
        className={`relative ${padding} rounded-[8px] ${bg} ${
          isFilled ? filledAlign : `flex items-center ${hasRight ? "gap-[8px]" : ""}`
        }`}
      >
        {/* Border overlay */}
        <div
          aria-hidden="true"
          className="absolute pointer-events-none border border-solid"
          style={{ inset: borderInset, borderRadius: borderRad, borderColor }}
        />

        {isFilled ? (
          /* ─── Filled: floating label + real input ─── */
          <>
            {/* Left text stack */}
            <div
              className={`flex flex-col items-start min-w-0 min-h-[1px] ${
                hasRight ? "flex-1 justify-center" : "w-full justify-center"
              }`}
            >
              <p
                className="shrink-0 w-full leading-[16px] not-italic text-[12px]"
                style={{ color: floatLabel, fontFamily: "'Noto Sans Thai', sans-serif" }}
              >
                {placeholder}
              </p>
              {/* Real visible input */}
              <input
                type="text"
                value={currentValue}
                onChange={handleChange}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                disabled={isDisabled}
                aria-label={placeholder}
                className="w-full leading-[20px] not-italic text-[14px] min-w-0 bg-transparent outline-none border-none p-0 m-0"
                style={{ color: filledValue, ...inputFont }}
              />
            </div>

            {/* Right: icon */}
            {rightIcon && (
              <div className="flex items-center self-stretch shrink-0">
                <span className="flex items-center justify-center size-[24px] overflow-hidden">
                  {rightIcon}
                </span>
              </div>
            )}

            {/* Right: unit */}
            {unit && !rightIcon && (
              <p
                className="shrink-0 whitespace-nowrap text-[16px]"
                style={{
                  color: unitColor,
                  fontFamily: "'Noto Sans Thai', sans-serif",
                  lineHeight: "1.5",
                  fontVariationSettings: "'wdth' 100",
                }}
              >
                {unit}
              </p>
            )}
          </>
        ) : (
          /* ─── Empty: placeholder + transparent real input on top ─── */
          <>
            {/* Placeholder */}
            <p
              className="flex-1 min-w-0 min-h-[1px] text-[16px] leading-[20px] not-italic relative pointer-events-none"
              style={{ color: floatLabel, fontFamily: "'Noto Sans Thai', sans-serif" }}
            >
              {placeholder}
              {required && (
                <span style={{ color: isDisabled ? "#99a1af" : "#c10007" }}> *</span>
              )}
            </p>

            {/* Right: icon */}
            {rightIcon && (
              <span className="shrink-0 flex items-center justify-center size-[24px] overflow-hidden relative">
                {rightIcon}
              </span>
            )}

            {/* Right: unit */}
            {unit && !rightIcon && (
              <p
                className="shrink-0 whitespace-nowrap relative text-[16px]"
                style={{
                  color: unitColor,
                  fontFamily: "'Noto Sans Thai', sans-serif",
                  lineHeight: "1.5",
                  fontVariationSettings: "'wdth' 100",
                }}
              >
                {unit}
              </p>
            )}

            {/* Invisible real input on top for the empty state */}
            {!isDisabled && (
              <input
                type="text"
                value={currentValue}
                onChange={handleChange}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className="absolute inset-0 w-full h-full cursor-text bg-transparent border-none outline-none text-[16px]"
                style={{
                  color: "transparent",
                  caretColor: isFocus ? "#0246a6" : "transparent",
                  fontFamily: "'Noto Sans Thai', sans-serif",
                  padding: hasRight ? "12px 14px" : "14px",
                }}
                aria-label={placeholder}
              />
            )}
          </>
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
              style={{ color: "#6a7282" }}
            >
              {charCount}/{maxCount}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
