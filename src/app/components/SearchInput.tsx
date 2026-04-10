import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { useRef, useState } from "react";

export type SearchInputSize = "lg" | "sm";

export interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  size?: SearchInputSize;
  className?: string;
  onClear?: () => void;
}

const FONT = "'Noto Sans Thai', sans-serif";

export function SearchInput({
  placeholder = "Placeholder",
  value,
  onChange,
  size = "lg",
  className = "",
  onClear,
}: SearchInputProps) {
  const [focused, setFocused] = useState(false);
  const [internalValue, setInternalValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const controlled = value !== undefined;
  const currentValue = controlled ? value : internalValue;
  const isFilled = currentValue.length > 0;

  const iconSize = size === "lg" ? 24 : 22;
  const minHeight = size === "sm" ? "min-h-[32px]" : "";
  const padding =
    size === "sm"
      ? "px-[14px] py-[8px]"
      : "px-[14px] py-[12px]";

  const borderInset = focused ? "-1px" : "0px";
  const borderRad = focused ? "9px" : "8px";
  const borderColor = focused ? "#0a6ee7" : "rgba(0,0,0,0.1)";

  const handleChange = (next: string) => {
    if (!controlled) setInternalValue(next);
    onChange?.(next);
  };

  const handleClear = () => {
    if (!controlled) setInternalValue("");
    onChange?.("");
    onClear?.();
    inputRef.current?.focus();
  };

  return (
    <div
      className={`relative bg-white flex items-center gap-[8px] ${padding} ${minHeight} rounded-[8px] cursor-text ${className}`}
      onClick={() => inputRef.current?.focus()}
    >
      <div
        aria-hidden="true"
        className="absolute pointer-events-none border border-solid"
        style={{
          inset: borderInset,
          borderRadius: borderRad,
          borderColor,
        }}
      />

      <span className="shrink-0 flex items-center justify-center">
        <MagnifyingGlass
          size={iconSize}
          color="#6A7282"
          weight="regular"
        />
      </span>

      <div className="flex-1 min-w-0 relative">
        {!isFilled && (
          <p
            className="absolute inset-0 text-[16px] leading-[20px] not-italic pointer-events-none flex items-center"
            style={{ color: "#6a7282", fontFamily: FONT }}
          >
            {placeholder}
          </p>
        )}
        <input
          ref={inputRef}
          type="text"
          aria-label={placeholder}
          value={currentValue}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-transparent border-none outline-none text-[16px] leading-[20px] p-0 m-0"
          style={{
            fontFamily: FONT,
            color: isFilled ? "#101828" : "transparent",
            caretColor: "#0246a6",
          }}
        />
      </div>

      {focused && isFilled && (
        <button
          type="button"
          aria-label="Clear search"
          onMouseDown={(e) => e.preventDefault()}
          onClick={handleClear}
          className="shrink-0 flex items-center justify-center bg-transparent border-none p-0 m-0 cursor-pointer"
        >
          <X size={iconSize} color="#6A7282" weight="regular" />
        </button>
      )}
    </div>
  );
}