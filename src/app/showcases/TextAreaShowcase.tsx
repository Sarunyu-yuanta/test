import React, { useState } from "react";
import { TextArea, TextAreaState } from "@/components/textarea";

const FONT = { fontFamily: "'Noto Sans Thai', sans-serif" };

const STATES: { label: string; state: TextAreaState }[] = [
  { label: "Default", state: "default" },
  { label: "Focus", state: "focus" },
  { label: "Error", state: "error" },
  { label: "Disabled", state: "disabled" },
];

interface RowDef {
  label: string;
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
    rows: [{ label: "Default" }],
  },
  {
    title: "2. Helper + Count",
    rows: [
      {
        label: "Default",
        helperText: "Helper text",
        showCount: true,
      },
    ],
  },
  {
    title: "3. Count",
    rows: [{ label: "Default", showCount: true }],
  },
  {
    title: "4. Helper",
    rows: [{ label: "Default", helperText: "Helper text" }],
  },
];

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

function ShowcaseRow({
  row,
  filledValue,
}: {
  row: RowDef;
  filledValue?: string;
}) {
  return (
    <div className="flex items-start gap-6 mb-7">
      <div
        className="w-[108px] shrink-0 text-[13px] text-muted-foreground pt-[14px]"
        style={FONT}
      >
        {row.label}
      </div>

      {STATES.map(({ state }) => (
        <div key={state} className="w-[280px] shrink-0">
          <TextArea
            forceState={state}
            placeholder="Text label"
            value={filledValue}
            helperText={row.helperText}
            showCount={row.showCount}
            errorMessage="Error message"
          />
        </div>
      ))}
    </div>
  );
}

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

export function TextAreaShowcase() {
  const [interVal, setInterVal] = useState("");
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
        Text Area Component
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
            Type into the textarea and toggle options to see
            live behaviour
          </p>

          <div className="flex gap-10 items-start pl-2 pb-2">
            <div className="w-[343px] shrink-0">
              <TextArea
                placeholder="Text label"
                value={interVal}
                onChange={setInterVal}
                required={required}
                forceState={forceState}
                helperText={helper ? "Helper text" : undefined}
                showCount={count}
                maxCount={100}
                errorMessage="Error message"
              />
            </div>

            <div
              className="flex flex-wrap gap-x-6 gap-y-3 text-[13px]"
              style={FONT}
            >
              {(
                [
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