import React, { SVGProps } from "react";

const FONT = "'Noto Sans Thai', sans-serif";

export interface OptionItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface OptionListProps {
  options: OptionItem[];
  /** Single-select: currently selected value */
  selectedValue?: string;
  /** Multi-select: currently selected values */
  selectedValues?: string[];
  /** Fires for single-select click */
  onSelect?: (value: string) => void;
  /** Fires for multi-select toggle */
  onToggle?: (value: string) => void;
  maxVisible?: number;
  emptyText?: string;
  className?: string;
}

function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="11"
      viewBox="0 0 16 11"
      fill="none"
      {...props}
    >
      <path
        d="M1 5.5L5.5 10L15 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function OptionList({
  options,
  selectedValue,
  selectedValues,
  onSelect,
  onToggle,
  maxVisible = 10,
  emptyText = "No results found",
  className = "",
}: OptionListProps) {
  const isMulti =
    selectedValues !== undefined || onToggle !== undefined;
  const isScrollable = options.length > maxVisible;
  const maxHeight = isScrollable
    ? maxVisible * 48 + 16
    : undefined;

  const isSelected = (val: string) =>
    isMulti
      ? (selectedValues ?? []).includes(val)
      : val === selectedValue;

  const handleClick = (opt: OptionItem) => {
    if (opt.disabled) return;
    if (isMulti) {
      onToggle?.(opt.value);
    } else {
      onSelect?.(opt.value);
    }
  };

  return (
    <div
      className={`bg-white rounded-[8px] overflow-clip px-[8px] py-[8px] flex flex-col items-start ${className}`}
      style={{
        boxShadow:
          "0px 20px 25px -5px rgba(0,0,0,0.1), 0px 8px 10px -6px rgba(0,0,0,0.1)",
        ...(isScrollable
          ? { maxHeight, overflowY: "auto" as const }
          : {}),
      }}
    >
      {options.length > 0 ? (
        options.map((opt) => {
          const selected = isSelected(opt.value);
          const disabled = opt.disabled === true;

          const rowBg = disabled
            ? "bg-[#f3f4f6]"
            : selected
              ? "bg-[#eff6ff]"
              : "bg-white hover:bg-[#eff6ff]";

          const textColor = disabled ? "#99a1af" : "#101828";
          const iconColor = disabled ? "#99a1af" : "#6A7282";

          return (
            <div
              key={opt.value}
              onClick={() => handleClick(opt)}
              className={`w-full shrink-0 rounded-[4px] transition-colors duration-100 ${rowBg} ${
                disabled ? "cursor-default" : "cursor-pointer"
              }`}
            >
              <div className="flex items-center gap-[8px] p-[14px] w-full">
                {opt.icon && (
                  <span
                    className="shrink-0 flex items-center justify-center size-[20px] overflow-clip"
                    style={{ color: iconColor }}
                  >
                    {opt.icon}
                  </span>
                )}
                <p
                  className="flex-1 min-w-0 min-h-[1px] leading-[20px] not-italic overflow-hidden text-[14px] text-ellipsis whitespace-nowrap"
                  style={{ fontFamily: FONT, color: textColor }}
                >
                  {opt.label}
                </p>
                {selected && (
                  <span className="shrink-0 flex items-center justify-center size-[20px]">
                    <CheckIcon className="text-[#0a6ee7]" />
                  </span>
                )}
              </div>
            </div>
          );
        })
      ) : (
        <div className="w-full shrink-0 bg-white">
          <div className="flex items-center p-[14px] w-full">
            <p
              className="flex-1 min-w-0 min-h-[1px] leading-[20px] not-italic text-[14px] text-[#99a1af]"
              style={{ fontFamily: FONT }}
            >
              {emptyText}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}