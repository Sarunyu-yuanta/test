import React, { useState, useRef, useEffect } from "react";
import { SearchInput } from "./SearchInput";
import { OptionList, OptionItem } from "./OptionList";

const FONT = { fontFamily: "'Noto Sans Thai', sans-serif" };

const SAMPLE_OPTIONS: OptionItem[] = Array.from(
  { length: 12 },
  (_, i) => ({
    label: `Option List ${i + 1}`,
    value: String(i + 1),
  }),
);

export function SearchInputShowcase() {
  const [searchVal, setSearchVal] = useState("");
  const [selectedVal, setSelectedVal] = useState("");
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<"lg" | "sm">("lg");
  const containerRef = useRef<HTMLDivElement>(null);

  const filtered = searchVal.trim()
    ? SAMPLE_OPTIONS.filter((o) =>
        o.label
          .toLowerCase()
          .includes(searchVal.trim().toLowerCase()),
      )
    : SAMPLE_OPTIONS;

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () =>
      document.removeEventListener("mousedown", handler);
  }, [open]);

  const handleSelect = (val: string) => {
    setSelectedVal(val);
    const label =
      SAMPLE_OPTIONS.find((o) => o.value === val)?.label ?? "";
    setSearchVal(label);
    setOpen(false);
  };

  const handleSearchChange = (val: string) => {
    setSearchVal(val);
    if (!open) setOpen(true);
  };

  const handleClear = () => {
    setSearchVal("");
    setSelectedVal("");
    setOpen(false);
  };

  return (
    <div className="bg-white min-h-full">
      <h1 className="mb-1" style={FONT}>
        Search Input Component
      </h1>
      <p
        className="text-[#6b7280] mb-12 text-[14px]"
        style={FONT}
      >
        Interactive Playground
      </p>

      <h2 className="mb-2" style={FONT}>
        Interactive
      </h2>
      <p
        className="text-[#6b7280] mb-8 text-[13px]"
        style={FONT}
      >
        Click input, type to filter, and select an option
      </p>

      <div className="flex gap-10 items-start pl-2 pb-2">
        <div
          ref={containerRef}
          className="w-[343px] shrink-0 flex flex-col"
        >
          <SearchInput
            placeholder="Placeholder"
            value={searchVal}
            onChange={handleSearchChange}
            onClear={handleClear}
            size={size}
          />
          {open && (
            <OptionList
              options={filtered}
              selectedValue={selectedVal}
              onSelect={handleSelect}
              className="mt-[4px]"
            />
          )}
        </div>

        <div
          className="flex flex-wrap gap-x-6 gap-y-3 text-[13px]"
          style={FONT}
        >
          <label className="flex items-center gap-2 cursor-pointer select-none text-[#374151]">
            <input
              type="checkbox"
              checked={size === "lg"}
              onChange={() => setSize("lg")}
              className="accent-[#0a6ee7] w-[16px] h-[16px]"
            />
            lg
          </label>
          <label className="flex items-center gap-2 cursor-pointer select-none text-[#374151]">
            <input
              type="checkbox"
              checked={size === "sm"}
              onChange={() => setSize("sm")}
              className="accent-[#0a6ee7] w-[16px] h-[16px]"
            />
            sm
          </label>
        </div>
      </div>
    </div>
  );
}