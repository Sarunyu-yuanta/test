import React, { useState } from "react";
import {
  DateInput,
  DateInputState,
  DateInputMode,
  DatePickerVariant,
  DateRange,
} from "@/components/date-input";

const FONT = { fontFamily: "'Noto Sans Thai', sans-serif" };

// ─── State columns ────────────────────────────────────────────────────────────
const STATES: { label: string; state: DateInputState }[] = [
  { label: "Default",  state: "default"  },
  { label: "Focus",    state: "focus"    },
  { label: "Error",    state: "error"    },
  { label: "Disabled", state: "disabled" },
];

// ─── Row definitions ──────────────────────────────────────────────────────────
interface RowDef {
  label: string;
  required?: boolean;
  mode: DateInputMode;
  filledDate?: Date;
  filledRange?: DateRange;
}
interface GroupDef {
  title: string;
  rows: RowDef[];
}

const FILLED_DATE: Date = new Date(2024, 0, 1);
const FILLED_RANGE: DateRange = {
  from: new Date(2024, 0, 1),
  to: new Date(2024, 0, 5),
};

const GROUPS: GroupDef[] = [
  {
    title: "1. Default",
    rows: [
      { label: "Default",         mode: "single" },
      { label: "Default (Req.)",  mode: "single", required: true },
    ],
  },
  {
    title: "2. Filled – Single",
    rows: [
      { label: "Single",      mode: "single", filledDate: FILLED_DATE },
      { label: "Single (Req.)", mode: "single", required: true, filledDate: FILLED_DATE },
    ],
  },
  {
    title: "3. Filled – Range",
    rows: [
      { label: "Range",       mode: "range", filledRange: FILLED_RANGE },
      { label: "Range (Req.)", mode: "range", required: true, filledRange: FILLED_RANGE },
    ],
  },
];

// ─── Column headers ───────────────────────────────────────────────────────────
function ColHeaders() {
  return (
    <div className="flex items-center gap-6 mb-5 pl-[128px]">
      {STATES.map(({ label }) => (
        <div
          key={label}
          className="w-[280px] shrink-0 text-[11px] text-[#9ca3af] uppercase tracking-wider"
          style={FONT}
        >
          {label}
        </div>
      ))}
    </div>
  );
}

// ─── Single showcase row ──────────────────────────────────────────────────────
function ShowcaseRow({ row }: { row: RowDef }) {
  return (
    <div className="flex items-start gap-6 mb-7">
      <div
        className="w-[116px] shrink-0 text-[13px] text-[#6b7280] pt-[13px]"
        style={FONT}
      >
        {row.label}
      </div>
      {STATES.map(({ state }) => (
        <div key={state} className="w-[280px] shrink-0">
          <DateInput
            mode={row.mode}
            forceState={state}
            placeholder="Text label"
            required={row.required}
            errorMessage="Error message"
            value={row.filledDate}
            dateRange={row.filledRange}
          />
        </div>
      ))}
    </div>
  );
}

// ─── Group block ──────────────────────────────────────────────────────────────
function GroupBlock({ group, isLast }: { group: GroupDef; isLast: boolean }) {
  return (
    <>
      <div
        className="mb-5 text-[13px] text-[#374151]"
        style={{ ...FONT, fontWeight: 600 }}
      >
        {group.title}
      </div>
      <div className="flex flex-col">
        {group.rows.map((row) => (
          <ShowcaseRow key={`${group.title}-${row.label}`} row={row} />
        ))}
      </div>
      {!isLast && <div className="border-t border-[#e5e7eb] my-8" />}
    </>
  );
}

// ─── Showcase ─────────────────────────────────────────────────────────────────
export function DateInputShowcase() {
  const [mode, setMode] = useState<DateInputMode>("single");
  const [pickerVariant, setPickerVariant] = useState<DatePickerVariant>("calendar");
  const [required, setRequired] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  // Interactive state
  const [singleDate, setSingleDate] = useState<Date | undefined>(undefined);
  const [rangeDate, setRangeDate] = useState<DateRange | undefined>(undefined);

  const forceState: DateInputState | undefined = isDisabled
    ? "disabled"
    : isError
    ? "error"
    : undefined;

  // Scroll picker only works in single mode
  const effectiveVariant: DatePickerVariant =
    mode === "range" ? "calendar" : pickerVariant;

  return (
    <div className="bg-white min-h-full">
      <h1 className="mb-1" style={FONT}>
        Date Input Component
      </h1>
      <p className="text-[#6b7280] mb-12 text-[14px]" style={FONT}>
        Variants × States
      </p>

      <div className="overflow-x-auto">
        <div className="min-w-max">
          <ColHeaders />
          {GROUPS.map((group, gi) => (
            <GroupBlock
              key={group.title}
              group={group}
              isLast={gi === GROUPS.length - 1}
            />
          ))}

          {/* ── Divider ── */}
          <div className="border-t-2 border-[#e5e7eb] my-12" />

          {/* ── Disabled year demo ── */}
          <h2 className="mb-2" style={FONT}>
            Disabled Years
          </h2>
          <p className="text-[#6b7280] mb-6 text-[13px]" style={FONT}>
            ปี 2570 (พ.ศ.) = 2027 (ค.ศ.) ถูก disable — เปิด year picker แล้วหมุนไปดูที่กริด
          </p>
          <div className="flex gap-6 items-start pl-2 mb-2">
            <div className="w-[280px] shrink-0">
              <DateInput
                mode="single"
                placeholder="วันที่ (ปี 2570 ถูก disable)"
                disabledYears={[2027]}
              />
            </div>
          </div>

          {/* ── Divider ── */}
          <div className="border-t-2 border-[#e5e7eb] my-12" />

          {/* ── Interactive ── */}
          <h2 className="mb-2" style={FONT}>
            Interactive
          </h2>
          <p className="text-[#6b7280] mb-8 text-[13px]" style={FONT}>
            Click the field to open the calendar. Use the toggles to change
            variant and state.
          </p>

          <div className="flex gap-10 items-start pl-2 pb-2">
            {/* Live component */}
            <div className="w-[320px] shrink-0">
              <DateInput
                mode={mode}
                pickerVariant={effectiveVariant}
                placeholder="Text label"
                required={required}
                forceState={forceState}
                errorMessage="Error message"
                value={mode === "single" ? singleDate : undefined}
                onChange={mode === "single" ? setSingleDate : undefined}
                dateRange={mode === "range" ? rangeDate : undefined}
                onRangeChange={mode === "range" ? setRangeDate : undefined}
              />
            </div>

            {/* Controls */}
            <div
              className="flex flex-col gap-4 text-[13px]"
              style={FONT}
            >
              {/* Mode toggle */}
              <div>
                <p className="text-[11px] text-[#9ca3af] uppercase tracking-wider mb-2">
                  Mode
                </p>
                <div className="flex gap-3">
                  {(["single", "range"] as DateInputMode[]).map((m) => (
                    <label
                      key={m}
                      className="flex items-center gap-2 cursor-pointer select-none text-[#374151]"
                    >
                      <input
                        type="radio"
                        name="date-mode"
                        checked={mode === m}
                        onChange={() => setMode(m)}
                        className="accent-[#0a6ee7] w-[14px] h-[14px]"
                      />
                      {m === "single" ? "Single" : "Range"}
                    </label>
                  ))}
                </div>
              </div>

              {/* Picker variant */}
              <div>
                <p className="text-[11px] text-[#9ca3af] uppercase tracking-wider mb-2">
                  Picker
                </p>
                <div className="flex gap-3">
                  {(["calendar", "scroll"] as DatePickerVariant[]).map((v) => {
                    const disabled = v === "scroll" && mode === "range";
                    return (
                      <label
                        key={v}
                        className={`flex items-center gap-2 select-none ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer text-[#374151]"}`}
                      >
                        <input
                          type="radio"
                          name="date-picker"
                          checked={pickerVariant === v}
                          disabled={disabled}
                          onChange={() => setPickerVariant(v)}
                          className="accent-[#0a6ee7] w-[14px] h-[14px]"
                        />
                        {v === "calendar" ? "Calendar" : "Scroll"}
                      </label>
                    );
                  })}
                </div>
                {mode === "range" && (
                  <p className="text-[11px] text-[#9ca3af] mt-1">
                    Scroll ใช้ได้เฉพาะ Single mode
                  </p>
                )}
              </div>

              {/* Checkboxes */}
              <div>
                <p className="text-[11px] text-[#9ca3af] uppercase tracking-wider mb-2">
                  State
                </p>
                <div className="flex flex-col gap-2">
                  {(
                    [
                      ["Required", required, setRequired],
                      ["Error",    isError,   setIsError],
                      ["Disabled", isDisabled, setIsDisabled],
                    ] as [string, boolean, React.Dispatch<React.SetStateAction<boolean>>][]
                  ).map(([lbl, val, setter]) => (
                    <label
                      key={lbl}
                      className="flex items-center gap-2 cursor-pointer select-none text-[#374151]"
                    >
                      <input
                        type="checkbox"
                        checked={val}
                        onChange={() => setter(!val)}
                        className="accent-[#0a6ee7] w-[16px] h-[16px]"
                      />
                      {lbl}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Selected value display */}
          {mode === "single" && singleDate && (
            <div className="mt-4 pl-2 text-[13px] text-[#6b7280]" style={FONT}>
              Selected: {singleDate.toLocaleDateString("th-TH")}
            </div>
          )}
          {mode === "range" && rangeDate?.from && (
            <div className="mt-4 pl-2 text-[13px] text-[#6b7280]" style={FONT}>
              From: {rangeDate.from.toLocaleDateString("th-TH")}
              {rangeDate.to && ` — To: ${rangeDate.to.toLocaleDateString("th-TH")}`}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
