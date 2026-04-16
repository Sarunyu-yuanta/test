import React, { useState } from "react";
import {
  DropdownMultiple,
  DropdownMultipleState,
  DropdownMultipleOption,
} from "@/components/dropdown-multiple";

const FONT = { fontFamily: "'Noto Sans Thai', sans-serif" };

// ─── State columns ────────────────────────────────────────────────────────────
const STATES: {
  label: string;
  state: DropdownMultipleState;
}[] = [
  { label: "Default", state: "default" },
  { label: "Focus", state: "focus" },
  { label: "Error", state: "error" },
  { label: "Disabled", state: "disabled" },
];

// ─── Row definitions ──────────────────────────────────────────────────────────
interface RowDef {
  label: string;
  required?: boolean;
  helperText?: string;
  externalLabel?: boolean;
}
interface GroupDef {
  title: string;
  rows: RowDef[];
}

const GROUPS: GroupDef[] = [
  {
    title: "1. Default",
    rows: [
      { label: "Default" },
      { label: "Default (Require)", required: true },
    ],
  },
  {
    title: "2. Helper",
    rows: [
      { label: "Helper", helperText: "Helper text" },
      {
        label: "Helper (Require)",
        required: true,
        helperText: "Helper text",
      },
    ],
  },
  {
    title: "3. Label",
    rows: [
      { label: "Label", externalLabel: true },
      { label: "Label (Require)", required: true, externalLabel: true },
    ],
  },
];

// ─── Showcase filled values ───────────────────────────────────────────────────
const FILLED_VALUES = [
  "tag1",
  "tag2",
  "tag3",
  "tag4",
  "tag5",
  "tag6",
  "tag7",
  "tag8",
  "tag9",
  "tag10",
];
const FILLED_OPTIONS: DropdownMultipleOption[] =
  FILLED_VALUES.map((v, i) => ({
    label: `Tag ${i + 1}`,
    value: v,
  }));

// ─── Column headers ───────────────────────────────────────────────────────────
function ColHeaders() {
  return (
    <div className="flex items-center gap-6 mb-5 pl-[120px]">
      {STATES.map(({ label }) => (
        <div
          key={label}
          className="w-[280px] text-[11px] text-[#9ca3af] uppercase tracking-wider"
          style={FONT}
        >
          {label}
        </div>
      ))}
    </div>
  );
}

// ─── Single row ───────────────────────────────────────────────────────────────
function ShowcaseRow({
  row,
  filledValues,
}: {
  row: RowDef;
  filledValues?: string[];
}) {
  return (
    <div className="flex items-start gap-6 mb-7">
      <div
        className="w-[108px] shrink-0 text-[13px] text-[#6b7280] pt-[14px]"
        style={FONT}
      >
        {row.label}
      </div>
      {STATES.map(({ state }) => (
        <div key={state} className="w-full max-w-[343px]">
          <DropdownMultiple
            forceState={state}
            placeholder="Placeholder"
            required={row.required}
            helperText={row.helperText}
            errorMessage="Error message"
            value={filledValues}
            options={filledValues ? FILLED_OPTIONS : []}
            label={row.externalLabel ? "Text label" : undefined}
          />
        </div>
      ))}
    </div>
  );
}

// ─── Group block ──────────────────────────────────────────────────────────────
function GroupBlock({
  group,
  filledValues,
  isLast,
}: {
  group: GroupDef;
  filledValues?: string[];
  isLast: boolean;
}) {
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
          <ShowcaseRow
            key={`${group.title}-${row.label}`}
            row={row}
            filledValues={filledValues}
          />
        ))}
      </div>
      {!isLast && (
        <div className="border-t border-[#e5e7eb] my-8" />
      )}
    </>
  );
}

// ─── Sample options for interactive section ───────────────────────────────────
const SAMPLE_OPTIONS: DropdownMultipleOption[] = [
  { label: "tag 1", value: "a" },
  { label: "tag 2", value: "b" },
  { label: "tag 3", value: "c" },
  { label: "tag 4", value: "d" },
  { label: "tag 5", value: "e" },
  { label: "tag 6", value: "f" },
  { label: "tag 7", value: "g" },
  { label: "tag 8", value: "h" },
  { label: "tag 9", value: "i" },
  { label: "tag 10", value: "j" },
  { label: "tag 11", value: "k" },
  { label: "tag 12", value: "l" },
];

// ─── Showcase ─────────────────────────────────────────────────────────────────
export function DropdownMultipleShowcase() {
  const [interVal, setInterVal] = useState<string[]>([]);
  const [required, setRequired] = useState(false);
  const [helper, setHelper] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [showLabel, setShowLabel] = useState(false);

  const forceState = isDisabled
    ? ("disabled" as const)
    : isError
      ? ("error" as const)
      : undefined;

  return (
    <div className="bg-white min-h-full">
      <h1 className="mb-1" style={FONT}>
        Dropdown Multiple Component
      </h1>
      <p
        className="text-[#6b7280] mb-12 text-[14px]"
        style={FONT}
      >
        Variants × States
      </p>

      <div className="overflow-x-auto">
        <div className="">
          {/* ── Empty ── */}
          <div
            className="mb-3 text-[11px] text-[#9ca3af] uppercase tracking-wider"
            style={FONT}
          >
            Empty
          </div>
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

          {/* ── Filled ── */}
          <div
            className="mb-3 text-[11px] text-[#9ca3af] uppercase tracking-wider"
            style={FONT}
          >
            Filled
          </div>
          <ColHeaders />
          {GROUPS.map((group, gi) => (
            <GroupBlock
              key={`filled-${group.title}`}
              group={group}
              filledValues={FILLED_VALUES}
              isLast={gi === GROUPS.length - 1}
            />
          ))}

          {/* ── Divider ── */}
          <div className="border-t-2 border-[#e5e7eb] my-12" />

          {/* ── Interactive ── */}
          <h2 className="mb-2" style={FONT}>
            Interactive
          </h2>
          <p
            className="text-[#6b7280] mb-8 text-[13px]"
            style={FONT}
          >
            Click the dropdown, type to filter, select multiple
            options. Click × on tags to remove.
          </p>

          <div className="flex gap-10 items-start pl-2 pb-2">
            {/* Live dropdown */}
            <div className="w-[343px] shrink-0">
              <DropdownMultiple
                placeholder="Placeholder"
                value={interVal}
                onChange={setInterVal}
                required={required}
                forceState={forceState}
                helperText={helper ? "Helper text" : undefined}
                errorMessage="Error message"
                options={SAMPLE_OPTIONS}
                label={showLabel ? "Text label" : undefined}
              />
            </div>

            {/* Controls */}
            <div
              className="flex flex-wrap gap-x-6 gap-y-3 text-[13px]"
              style={FONT}
            >
              {(
                [
                  ["Required", required, setRequired],
                  ["Helper", helper, setHelper],
                  ["Label", showLabel, setShowLabel],
                  ["Error", isError, setIsError],
                  ["Disabled", isDisabled, setIsDisabled],
                ] as [
                  string,
                  boolean,
                  React.Dispatch<React.SetStateAction<boolean>>,
                ][]
              ).map(([label, val, setter]) => (
                <label
                  key={label}
                  className="flex items-center gap-2 cursor-pointer select-none text-[#374151]"
                >
                  <input
                    type="checkbox"
                    checked={val}
                    onChange={() => setter(!val)}
                    className="accent-[#0a6ee7] w-[16px] h-[16px]"
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>

          {/* Selected display */}
          {interVal.length > 0 && (
            <div
              className="mt-4 pl-2 text-[13px] text-[#6b7280]"
              style={FONT}
            >
              Selected: {interVal.join(", ")}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}