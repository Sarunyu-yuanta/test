import React, { useState } from "react";
import { Circle } from "@phosphor-icons/react";
import { Input, InputState } from "@/components/input";

const FONT = { fontFamily: "'Noto Sans Thai', sans-serif" };

// ─── State columns ────────────────────────────────────────────────────────────
const STATES: { label: string; state: InputState }[] = [
  { label: "Default", state: "default" },
  { label: "Focus", state: "focus" },
  { label: "Error", state: "error" },
  { label: "Disabled", state: "disabled" },
];

// ─── Icon — colour changes for disabled ───────────────────────────────────────
function CircleIcon({ state }: { state: InputState }) {
  return (
    <Circle
      size={24}
      weight="regular"
      color={state === "disabled" ? "var(--disabled)" : "var(--muted-foreground)"}
    />
  );
}

// ─── Row / Group definitions ──────────────────────────────────────────────────
interface RowDef {
  label: string;
  useIcon?: boolean;
  unit?: string;
  helperText?: string;
  showCount?: boolean;
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
      { label: "Icon", useIcon: true },
      { label: "Unit", unit: "Unit" },
    ],
  },
  {
    title: "2. Helper",
    rows: [
      { label: "Default", helperText: "Helper text" },
      {
        label: "Icon",
        helperText: "Helper text",
        useIcon: true,
      },
      {
        label: "Unit",
        helperText: "Helper text",
        unit: "Unit",
      },
    ],
  },
  {
    title: "3. Count",
    rows: [
      { label: "Default", showCount: true },
      { label: "Icon", showCount: true, useIcon: true },
      { label: "Unit", showCount: true, unit: "Unit" },
    ],
  },
  {
    title: "4. Helper + Count",
    rows: [
      {
        label: "Default",
        helperText: "Helper text",
        showCount: true,
      },
      {
        label: "Icon",
        helperText: "Helper text",
        showCount: true,
        useIcon: true,
      },
      {
        label: "Unit",
        helperText: "Helper text",
        showCount: true,
        unit: "Unit",
      },
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
          className="w-[280px] text-[11px] text-caption uppercase tracking-wider"
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
        className="w-[108px] shrink-0 text-[13px] text-muted-foreground pt-[14px]"
        style={FONT}
      >
        {row.label}
      </div>

      {/* 4 state cells */}
      {STATES.map(({ state }) => (
        <div key={state} className="w-[280px] shrink-0">
          <Input
            forceState={state}
            placeholder="Text label"
            value={filledValue}
            rightIcon={
              row.useIcon ? (
                <CircleIcon state={state} />
              ) : undefined
            }
            unit={row.unit}
            helperText={row.helperText}
            showCount={row.showCount}
            errorMessage="Error message"
          />
        </div>
      ))}
    </div>
  );
}

// ─── Reusable group block ─────────────────────────────────────────────────────
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
        className="mb-5 text-[13px] text-nav-link"
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
      {!isLast && (
        <div className="border-t border-divider my-8" />
      )}
    </>
  );
}

// ─── Showcase ─────────────────────────────────────────────────────────────────
export function InputShowcase() {
  const [interVal, setInterVal] = useState("");
  const [showIcon, setShowIcon] = useState(false);
  const [showUnit, setShowUnit] = useState(false);
  const [helper, setHelper] = useState(false);
  const [count, setCount] = useState(false);
  const [required, setRequired] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const forceState = isDisabled
    ? ("disabled" as const)
    : isError
      ? ("error" as const)
      : undefined;

  return (
    <div className="bg-background min-h-full">
      <h1 className="mb-1" style={FONT}>
        Input Component
      </h1>
      <p
        className="text-muted-foreground mb-12 text-[14px]"
        style={FONT}
      >
        Variants × States
      </p>

      <div className="overflow-x-auto">
        <div className="min-w-max">
          {/* ── Empty ── */}
          <div
            className="mb-3 text-[11px] text-caption uppercase tracking-wider"
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
          <div className="border-t-2 border-divider my-12" />

          {/* ── Filled ── */}
          <div
            className="mb-3 text-[11px] text-caption uppercase tracking-wider"
            style={FONT}
          >
            Filled
          </div>
          <ColHeaders />
          {GROUPS.map((group, gi) => (
            <GroupBlock
              key={`filled-${group.title}`}
              group={group}
              filledValue="Filled message"
              isLast={gi === GROUPS.length - 1}
            />
          ))}

          {/* ── Divider ── */}
          <div className="border-t-2 border-divider my-12" />

          {/* ── Interactive ── */}
          <h2 className="mb-2" style={FONT}>
            Interactive
          </h2>
          <p
            className="text-muted-foreground mb-8 text-[13px]"
            style={FONT}
          >
            Type into the input and toggle options to see live
            behaviour
          </p>

          <div className="flex gap-10 items-start pl-2 pb-2">
            {/* Live input */}
            <div className="w-[320px] shrink-0">
              <Input
                placeholder="Text label"
                value={interVal}
                onChange={setInterVal}
                required={required}
                forceState={forceState}
                rightIcon={
                  showIcon ? (
                    <Circle
                      size={24}
                      weight="regular"
                      color={isDisabled ? "var(--disabled)" : "var(--muted-foreground)"}
                    />
                  ) : undefined
                }
                unit={
                  showUnit && !showIcon ? "Unit" : undefined
                }
                helperText={helper ? "Helper text" : undefined}
                showCount={count}
                maxCount={50}
                errorMessage="Error message"
              />
            </div>

            {/* Controls */}
            <div
              className="flex flex-wrap gap-x-6 gap-y-3 text-[13px]"
              style={FONT}
            >
              {(
                [
                  ["Icon", showIcon, setShowIcon],
                  ["Unit", showUnit, setShowUnit],
                  ["Helper", helper, setHelper],
                  ["Count", count, setCount],
                  ["Required", required, setRequired],
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
                  className="flex items-center gap-2 cursor-pointer select-none text-nav-link"
                >
                  <input
                    type="checkbox"
                    checked={val}
                    onChange={() => setter(!val)}
                    className="accent-primary-action w-[16px] h-[16px]"
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