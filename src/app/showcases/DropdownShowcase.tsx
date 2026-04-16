import React, { useState } from "react";
import { Dropdown, DropdownState, DropdownOption } from "@/components/dropdown";

const FONT = { fontFamily: "'Noto Sans Thai', sans-serif" };

// ─── State columns ────────────────────────────────────────────────────────────
const STATES: { label: string; state: DropdownState }[] = [
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
      { label: "Helper (Require)", required: true, helperText: "Helper text" },
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
  filledValue,
}: {
  row: RowDef;
  filledValue?: string;
}) {
  return (
    <div className="flex items-start gap-6 mb-7">
      {/* Row label */}
      <div
        className="w-[108px] shrink-0 text-[13px] text-[#6b7280] pt-[14px]"
        style={FONT}
      >
        {row.label}
      </div>

      {/* 4 state cells */}
      {STATES.map(({ state }) => (
        <div key={state} className="w-[280px] shrink-0">
          <Dropdown
            forceState={state}
            placeholder="Placeholder"
            required={row.required}
            helperText={row.helperText}
            errorMessage="Error message"
            value={filledValue}
            options={filledValue ? [{ label: "Option A", value: "a" }] : []}
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
  filledValue,
  isLast,
}: {
  group: GroupDef;
  filledValue?: string;
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
            filledValue={filledValue}
          />
        ))}
      </div>
      {!isLast && <div className="border-t border-[#e5e7eb] my-8" />}
    </>
  );
}

// ─── Sample options for interactive section ───────────────────────────────────
const SAMPLE_OPTIONS: DropdownOption[] = [
  { label: "Option A", value: "a" },
  { label: "Option B", value: "b" },
  { label: "Option C", value: "c" },
  { label: "Option D", value: "d" },
  { label: "Option E", value: "e" },
  { label: "Option F", value: "f" },
  { label: "Option G", value: "g" },
  { label: "Option H", value: "h" },
  { label: "Option I", value: "i" },
  { label: "Option J", value: "j" },
  { label: "Option K", value: "k" },
  { label: "Option L", value: "l" },
];

// ─── Showcase ─────────────────────────────────────────────────────────────────
export function DropdownShowcase() {
  const [interVal, setInterVal] = useState("");
  const [required, setRequired] = useState(false);
  const [helper, setHelper]     = useState(false);
  const [isError, setIsError]   = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [showLabel, setShowLabel]   = useState(false);

  const forceState = isDisabled
    ? ("disabled" as const)
    : isError
      ? ("error" as const)
      : undefined;

  return (
    <div className="bg-white min-h-full">
      <h1 className="mb-1" style={FONT}>
        Dropdown Component
      </h1>
      <p className="text-[#6b7280] mb-12 text-[14px]" style={FONT}>
        Variants × States
      </p>

      <div className="overflow-x-auto">
        <div className="min-w-max">
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
              filledValue="a"
              isLast={gi === GROUPS.length - 1}
            />
          ))}

          {/* ── Divider ── */}
          <div className="border-t-2 border-[#e5e7eb] my-12" />

          {/* ── Interactive ── */}
          <h2 className="mb-2" style={FONT}>
            Interactive
          </h2>
          <p className="text-[#6b7280] mb-8 text-[13px]" style={FONT}>
            Click the dropdown and toggle options to see live behaviour
          </p>

          <div className="flex gap-10 items-start pl-2 pb-2">
            {/* Live dropdown */}
            <div className="w-[320px] shrink-0">
              <Dropdown
                placeholder="Text label"
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
        </div>
      </div>
    </div>
  );
}