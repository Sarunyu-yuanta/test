import React, { useState } from "react";
import { TimeInput, TimeInputState, TimeInputMode, TimeValue } from "@/components/time-input";

const FONT = { fontFamily: "'Noto Sans Thai', sans-serif" };

// ─── State columns ─────────────────────────────────────────────────────────────
const STATES: { label: string; state: TimeInputState }[] = [
  { label: "Default",  state: "default"  },
  { label: "Focus",    state: "focus"    },
  { label: "Error",    state: "error"    },
  { label: "Disabled", state: "disabled" },
];

// ─── Static demo values ────────────────────────────────────────────────────────
const FILLED_TIME: TimeValue = { hour: 0, minute: 0 };
const RANGE_START: TimeValue = { hour: 0, minute: 0 };
const RANGE_END: TimeValue   = { hour: 0, minute: 0 };

interface RowDef {
  label: string;
  required?: boolean;
  mode: TimeInputMode;
  filled?: boolean;
  range?: boolean;
}
interface GroupDef {
  title: string;
  rows: RowDef[];
}

const GROUPS: GroupDef[] = [
  {
    title: "1. Default",
    rows: [
      { label: "Default",        mode: "single" },
      { label: "Default (Req.)", mode: "single", required: true },
    ],
  },
  {
    title: "2. Filled – Single",
    rows: [
      { label: "Single",         mode: "single", filled: true },
      { label: "Single (Req.)",  mode: "single", required: true, filled: true },
    ],
  },
  {
    title: "3. Filled – Range",
    rows: [
      { label: "Range",          mode: "range", range: true },
      { label: "Range (Req.)",   mode: "range", required: true, range: true },
    ],
  },
];

// ─── Column headers ────────────────────────────────────────────────────────────
function ColHeaders() {
  return (
    <div className="flex items-center gap-6 mb-5 pl-[128px]">
      {STATES.map(({ label }) => (
        <div key={label} className="w-[280px] shrink-0 text-[11px] text-[#9ca3af] uppercase tracking-wider" style={FONT}>
          {label}
        </div>
      ))}
    </div>
  );
}

// ─── Single showcase row ───────────────────────────────────────────────────────
function ShowcaseRow({ row }: { row: RowDef }) {
  return (
    <div className="flex items-start gap-6 mb-7">
      <div className="w-[116px] shrink-0 text-[13px] text-[#6b7280] pt-[13px]" style={FONT}>
        {row.label}
      </div>
      {STATES.map(({ state }) => (
        <div key={state} className="w-[280px] shrink-0">
          <TimeInput
            mode={row.mode}
            forceState={state}
            placeholder="Text label"
            required={row.required}
            errorMessage="Error message"
            value={row.filled ? FILLED_TIME : undefined}
            startTime={row.range ? RANGE_START : undefined}
            endTime={row.range ? RANGE_END : undefined}
          />
        </div>
      ))}
    </div>
  );
}

// ─── Group block ───────────────────────────────────────────────────────────────
function GroupBlock({ group, isLast }: { group: GroupDef; isLast: boolean }) {
  return (
    <>
      <div className="mb-5 text-[13px] text-[#374151]" style={{ ...FONT, fontWeight: 600 }}>
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

// ─── Showcase ──────────────────────────────────────────────────────────────────
export function TimeInputShowcase() {
  const [mode, setMode] = useState<TimeInputMode>("single");
  const [required, setRequired] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const [singleVal, setSingleVal] = useState<TimeValue | undefined>(undefined);
  const [startVal, setStartVal] = useState<TimeValue>({ hour: 0, minute: 0 });
  const [endVal, setEndVal] = useState<TimeValue>({ hour: 0, minute: 0 });

  const forceState: TimeInputState | undefined = isDisabled
    ? "disabled"
    : isError
    ? "error"
    : undefined;

  return (
    <div className="bg-white min-h-full">
      <h1 className="mb-1" style={FONT}>Time Input Component</h1>
      <p className="text-[#6b7280] mb-12 text-[14px]" style={FONT}>Variants × States</p>

      <div className="overflow-x-auto">
        <div className="min-w-max">
          <ColHeaders />

          {GROUPS.map((group, gi) => (
            <GroupBlock key={group.title} group={group} isLast={gi === GROUPS.length - 1} />
          ))}

          {/* Divider */}
          <div className="border-t-2 border-[#e5e7eb] my-12" />

          {/* Interactive */}
          <h2 className="mb-2" style={FONT}>Interactive</h2>
          <p className="text-[#6b7280] mb-8 text-[13px]" style={FONT}>
            Click the field to open the time picker. Scroll or click a number to select.
          </p>

          <div className="flex gap-10 items-start pl-2 pb-2">
            {/* Live component */}
            <div className="w-[320px] shrink-0">
              <TimeInput
                mode={mode}
                placeholder="Text label"
                required={required}
                forceState={forceState}
                errorMessage="Error message"
                value={mode === "single" ? singleVal : undefined}
                onChange={mode === "single" ? setSingleVal : undefined}
                startTime={mode === "range" ? startVal : undefined}
                endTime={mode === "range" ? endVal : undefined}
                onStartChange={mode === "range" ? setStartVal : undefined}
                onEndChange={mode === "range" ? setEndVal : undefined}
              />
            </div>

            {/* Controls */}
            <div className="flex flex-col gap-4 text-[13px]" style={FONT}>
              {/* Mode */}
              <div>
                <p className="text-[11px] text-[#9ca3af] uppercase tracking-wider mb-2">Mode</p>
                <div className="flex gap-3">
                  {(["single", "range"] as TimeInputMode[]).map((m) => (
                    <label key={m} className="flex items-center gap-2 cursor-pointer select-none text-[#374151]">
                      <input
                        type="radio"
                        name="time-mode"
                        checked={mode === m}
                        onChange={() => setMode(m)}
                        className="accent-[#0a6ee7] w-[14px] h-[14px]"
                      />
                      {m === "single" ? "Single" : "Range"}
                    </label>
                  ))}
                </div>
              </div>

              {/* State toggles */}
              <div>
                <p className="text-[11px] text-[#9ca3af] uppercase tracking-wider mb-2">State</p>
                <div className="flex flex-col gap-2">
                  {(
                    [
                      ["Required", required,   setRequired],
                      ["Error",    isError,     setIsError],
                      ["Disabled", isDisabled,  setIsDisabled],
                    ] as [string, boolean, React.Dispatch<React.SetStateAction<boolean>>][]
                  ).map(([lbl, val, setter]) => (
                    <label key={lbl} className="flex items-center gap-2 cursor-pointer select-none text-[#374151]">
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

          {/* Selected value */}
          {mode === "single" && singleVal && (
            <div className="mt-4 pl-2 text-[13px] text-[#6b7280]" style={FONT}>
              Selected: {singleVal.hour.toString().padStart(2,"0")}:{singleVal.minute.toString().padStart(2,"0")}
            </div>
          )}
          {mode === "range" && (
            <div className="mt-4 pl-2 text-[13px] text-[#6b7280]" style={FONT}>
              Start: {startVal.hour.toString().padStart(2,"0")}:{startVal.minute.toString().padStart(2,"0")}
              {" — "}
              End: {endVal.hour.toString().padStart(2,"0")}:{endVal.minute.toString().padStart(2,"0")}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
