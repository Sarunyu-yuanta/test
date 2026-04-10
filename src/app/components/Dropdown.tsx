import React, { useState, useRef, useEffect } from "react";
import svgPaths from "../../imports/svg-1tom9ah53k";

export type DropdownState = "default" | "focus" | "error" | "disabled";

export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps {
  /** Placeholder / floating-label text */
  placeholder?: string;
  /** External label rendered above the trigger */
  label?: string;
  /** Appends a red asterisk */
  required?: boolean;
  /** Override the visual state (for showcase) */
  forceState?: DropdownState;
  /** Error message shown below when state is "error" */
  errorMessage?: string;
  /** Helper text shown below */
  helperText?: string;
  /** Controlled selected value */
  value?: string;
  onChange?: (value: string) => void;
  /** Options list */
  options?: DropdownOption[];
  className?: string;
}

// ── Caret icons ─────────────────────────────────────────────────────────────
function CaretDown({ color = "#6A7282" }: { color?: string }) {
  return (
    <div className="overflow-clip relative shrink-0 size-[22px]">
      <div className="absolute" style={{ inset: "34.37% 15.62% 28.12% 15.62%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1258 8.25092">
          <path d={svgPaths.p3310ff00} fill={color} />
        </svg>
      </div>
    </div>
  );
}

function CaretUp({ color = "#6A7282" }: { color?: string }) {
  return (
    <div className="overflow-clip relative shrink-0 size-[22px]">
      <div className="absolute" style={{ inset: "28.12% 15.62% 34.37% 15.62%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1259 8.25108">
          <path d={svgPaths.p8486900} fill={color} />
        </svg>
      </div>
    </div>
  );
}

export function Dropdown({
  placeholder  = "Text label",
  label,
  required     = false,
  forceState,
  errorMessage = "Error message",
  helperText,
  value,
  onChange,
  options      = [],
  className    = "",
}: DropdownProps) {
  const [open, setOpen]                   = useState(false);
  const [internalValue, setInternalValue] = useState("");
  const [search, setSearch]               = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef     = useRef<HTMLInputElement>(null);

  const controlled    = value !== undefined;
  const currentValue  = controlled ? value : internalValue;
  const isDisabled    = forceState === "disabled";
  const selectedLabel = options.find((o) => o.value === currentValue)?.label;
  const isFilled      = Boolean(selectedLabel);

  // Derive visual state
  const state: DropdownState = forceState ?? (open ? "focus" : "default");
  const isError = state === "error";
  const isFocus = state === "focus";

  // ── Colours ───────────────────────────────────────────────────────────────
  const bg          = isDisabled ? "bg-[#f3f4f6]" : "bg-white";
  const labelColor  = isDisabled ? "#99a1af" : "#6a7282";
  const filledColor = isDisabled ? "#99a1af" : "#101828";
  const caretColor  = isDisabled ? "#99A1AF" : "#6A7282";

  const hasExternalLabel = Boolean(label);

  // ── Border overlay ────────────────────────────────────────────────────────
  const borderInset = (isFocus || isError) ? "-1px" : "0px";
  const borderRad   = (isFocus || isError) ? "9px"  : "8px";
  const borderColor = isDisabled ? "rgba(0,0,0,0.05)"
                    : isError    ? "#e7000b"
                    : isFocus    ? "#0a6ee7"
                    : "rgba(0,0,0,0.1)";

  const showBelow = isError || Boolean(helperText);
  const leftText  = isError ? errorMessage : (helperText ?? "");
  const leftColor = isError ? "#e7000b" : "#6a7282";

  // ── Filtered options ──────────────────────────────────────────────────────
  const filteredOptions = search.trim()
    ? options.filter((o) =>
        o.label.toLowerCase().includes(search.trim().toLowerCase())
      )
    : options;

  // Auto-focus input when open
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  // Clear search when closing
  useEffect(() => {
    if (!open) setSearch("");
  }, [open]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const handleSelect = (val: string) => {
    if (!controlled) setInternalValue(val);
    onChange?.(val);
    setOpen(false);
  };

  const handleToggle = () => {
    if (isDisabled) return;
    if (forceState) return; // showcase static – don't open
    setOpen((prev) => !prev);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setOpen(false);
    } else if (e.key === "Enter" && filteredOptions.length === 1) {
      handleSelect(filteredOptions[0].value);
    }
  };

  // ── Required asterisk helper ──────────────────────────────────────────────
  const Asterisk = ({ color }: { color: string }) => (
    <span
      className="leading-[16px] not-italic text-[12px]"
      style={{ color }}
    >
      {" "}*
    </span>
  );

  return (
    <div ref={containerRef} className={`flex flex-col gap-[4px] w-full ${className}`}>
      {/* ── External label ── */}
      {label && (
        <div className="relative shrink-0 w-full">
          <div className="flex items-start px-[4px] w-full">
            <p
              className="leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] whitespace-nowrap"
              style={{ fontFamily: "'Noto Sans Thai', sans-serif", fontWeight: 700 }}
            >
              {label}
            </p>
          </div>
        </div>
      )}
      {/* ── Trigger ── */}
      <div
        onClick={handleToggle}
        className={`relative flex gap-[8px] items-center rounded-[8px] ${bg} px-[14px] ${
          hasExternalLabel
            ? "h-[38px]"
            : isFilled && !open
              ? "py-[6px]"
              : "p-[14px]"
        } ${!isDisabled && !forceState ? "cursor-pointer" : ""}`}
      >
        {/* Border overlay */}
        <div
          aria-hidden="true"
          className="absolute pointer-events-none border border-solid"
          style={{ inset: borderInset, borderRadius: borderRad, borderColor }}
        />

        {open && !forceState ? (
          /* ─── Open: search input ─── */
          hasExternalLabel ? (
            /* External label + open → single-line search input */
            <input
              ref={inputRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleInputKeyDown}
              placeholder={isFilled ? selectedLabel : placeholder + (required ? " *" : "")}
              className="flex-1 min-w-0 min-h-[1px] text-[14px] leading-[20px] not-italic bg-transparent outline-none border-none p-0 m-0 placeholder:text-[#99a1af]"
              style={{
                color: filledColor,
                fontFamily: "'Noto Sans Thai', sans-serif",
                caretColor: "#0246a6",
              }}
              onClick={(e) => e.stopPropagation()}
            />
          ) : isFilled ? (
            /* Filled + open → floating label + search input */
            <div className="flex flex-col items-start justify-center flex-1 min-w-0 min-h-[1px]">
              <p
                className="shrink-0 w-full leading-[16px] not-italic text-[12px]"
                style={{ color: labelColor, fontFamily: "'Noto Sans Thai', sans-serif" }}
              >
                {placeholder}
                {required && <Asterisk color={isDisabled ? "#99a1af" : "#c10007"} />}
              </p>
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder={selectedLabel}
                className="w-full leading-[20px] not-italic text-[14px] min-w-0 bg-transparent outline-none border-none p-0 m-0 placeholder:text-[#99a1af]"
                style={{
                  color: filledColor,
                  fontFamily: "'Noto Sans Thai', sans-serif",
                  caretColor: "#0246a6",
                }}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          ) : (
            /* Empty + open → inline search input */
            <input
              ref={inputRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleInputKeyDown}
              placeholder={placeholder + (required ? " *" : "")}
              className="flex-1 min-w-0 min-h-[1px] text-[16px] leading-[20px] not-italic bg-transparent outline-none border-none p-0 m-0 placeholder:text-[#6a7282]"
              style={{
                color: "#101828",
                fontFamily: "'Noto Sans Thai', sans-serif",
                caretColor: "#0246a6",
              }}
              onClick={(e) => e.stopPropagation()}
            />
          )
        ) : isFilled ? (
          /* ─── Closed + Filled ─── */
          hasExternalLabel ? (
            /* External label → single-line selected value */
            <p
              className="flex-1 min-w-0 min-h-[1px] leading-[20px] not-italic text-[14px] overflow-hidden text-ellipsis whitespace-nowrap"
              style={{ color: filledColor, fontFamily: "'Noto Sans Thai', sans-serif" }}
            >
              {selectedLabel}
              {required && <Asterisk color={isDisabled ? "#99a1af" : "#c10007"} />}
            </p>
          ) : (
            /* Default → floating label + selected value */
            <div className="flex flex-col items-start justify-center flex-1 min-w-0 min-h-[1px]">
              <p
                className="shrink-0 w-full leading-[16px] not-italic text-[12px]"
                style={{ color: labelColor, fontFamily: "'Noto Sans Thai', sans-serif" }}
              >
                {placeholder}
                {required && <Asterisk color={isDisabled ? "#99a1af" : "#c10007"} />}
              </p>
              <p
                className="w-full leading-[20px] not-italic text-[14px] min-w-0 min-h-[1px]"
                style={{ color: filledColor, fontFamily: "'Noto Sans Thai', sans-serif" }}
              >
                {selectedLabel}
              </p>
            </div>
          )
        ) : (
          /* ─── Closed + Empty: placeholder ─── */
          required ? (
            <div
              className="flex flex-1 min-w-0 min-h-[1px] gap-[2px] items-center"
              style={{ fontFamily: "'Noto Sans Thai', sans-serif" }}
            >
              <p
                className="leading-[20px] not-italic text-[16px] whitespace-nowrap"
                style={{ color: labelColor }}
              >
                {placeholder}
              </p>
              <p
                className="leading-[16px] not-italic text-[12px] w-[7px]"
                style={{ color: isDisabled ? "#99a1af" : "#c10007" }}
              >
                *
              </p>
            </div>
          ) : (
            <p
              className="flex-1 min-w-0 min-h-[1px] text-[16px] leading-[20px] not-italic overflow-hidden text-ellipsis whitespace-nowrap"
              style={{ color: labelColor, fontFamily: "'Noto Sans Thai', sans-serif" }}
            >
              {placeholder}
            </p>
          )
        )}

        {/* Caret */}
        {isFocus ? <CaretUp color={caretColor} /> : <CaretDown color={caretColor} />}
      </div>

      {/* ── Dropdown menu ── */}
      {open && !forceState && options.length > 0 && (
        <div
          className={`relative bg-white rounded-[8px] overflow-clip p-[8px] z-20 flex flex-col items-start ${
            filteredOptions.length > 10 ? "overflow-y-auto" : ""
          }`}
          style={{
            boxShadow: "0px 20px 25px -5px rgba(0,0,0,0.1), 0px 8px 10px -6px rgba(0,0,0,0.1)",
            ...(filteredOptions.length > 10 ? { maxHeight: 10 * 48 + 16 } : {}),
          }}
        >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((opt) => (
              <div
                key={opt.value}
                onClick={() => handleSelect(opt.value)}
                className={`w-full shrink-0 rounded-[4px] cursor-pointer transition-colors duration-100 ${
                  opt.value === currentValue
                    ? "bg-[rgba(10,110,231,0.06)]"
                    : "bg-white hover:bg-[#f3f4f6]"
                }`}
              >
                <div className="flex flex-row items-center size-full">
                  <div className="flex items-center p-[14px] relative w-full">
                    <p
                      className={`flex-1 min-w-0 min-h-[1px] leading-[20px] not-italic overflow-hidden text-[14px] text-ellipsis whitespace-nowrap ${
                        opt.value === currentValue ? "text-[#0a6ee7]" : "text-[#101828]"
                      }`}
                      style={{ fontFamily: "'Noto Sans Thai', sans-serif" }}
                    >
                      {opt.label}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full shrink-0 bg-white">
              <div className="flex flex-row items-center size-full">
                <div className="flex items-center p-[14px] relative w-full">
                  <p
                    className="flex-1 min-w-0 min-h-[1px] leading-[20px] not-italic text-[14px] text-[#99a1af]"
                    style={{ fontFamily: "'Noto Sans Thai', sans-serif" }}
                  >
                    No results found
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── Below: helper / error ── */}
      {showBelow && (
        <div
          className="flex items-start px-[4px] text-[12px] leading-[16px]"
          style={{ fontFamily: "'Noto Sans Thai', sans-serif" }}
        >
          <span className="flex-1 min-w-0" style={{ color: leftColor }}>
            {leftText}
          </span>
        </div>
      )}
    </div>
  );
}