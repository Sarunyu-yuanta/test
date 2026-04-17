import React, { useState } from "react";
import { Circle } from "@phosphor-icons/react";
import { OptionList, OptionItem } from "@/components/option-list";

const FONT = { fontFamily: "'Noto Sans Thai', sans-serif" };

const STATES = ["Default", "Active (Hover)", "Selected", "Disabled"] as const;

function makeOptions(withIcon: boolean, disabled: boolean): OptionItem[] {
  return Array.from({ length: 4 }, (_, i) => ({
    label: `Option List ${i + 1}`,
    value: String(i + 1),
    icon: withIcon ? <Circle size={20} weight="regular" /> : undefined,
    disabled,
  }));
}

function StaticRow({
  stateLabel,
  withIcon,
}: {
  stateLabel: (typeof STATES)[number];
  withIcon: boolean;
}) {
  const disabled = stateLabel === "Disabled";
  const selected = stateLabel === "Selected" ? "2" : undefined;
  const options = makeOptions(withIcon, disabled);

  return (
    <div className="w-[343px] shrink-0">
      <OptionList
        options={options}
        selectedValue={selected}
        maxVisible={4}
      />
    </div>
  );
}

const SAMPLE_OPTIONS: OptionItem[] = Array.from({ length: 15 }, (_, i) => ({
  label: `Option List ${i + 1}`,
  value: String(i + 1),
  disabled: i === 7,
}));

const SAMPLE_OPTIONS_ICON: OptionItem[] = SAMPLE_OPTIONS.map((o) => ({
  ...o,
  icon: <Circle size={20} weight="regular" />,
}));

export function OptionListShowcase() {
  const [selectedVal, setSelectedVal] = useState("");
  const [showIcon, setShowIcon] = useState(false);
  const [multiSelect, setMultiSelect] = useState(false);
  const [selectedMulti, setSelectedMulti] = useState<string[]>([]);

  const options = showIcon ? SAMPLE_OPTIONS_ICON : SAMPLE_OPTIONS;

  const handleToggle = (val: string) => {
    setSelectedMulti((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val],
    );
  };

  return (
    <div className="bg-background min-h-full">
      <h1 className="mb-1" style={FONT}>
        Option List Component
      </h1>
      <p className="text-muted-foreground mb-12 text-[14px]" style={FONT}>
        4 States × 2 Variants
      </p>

      <div className="overflow-x-auto">
        <div className="min-w-max">
          {/* ── Default (No Icon) ── */}
          <div
            className="mb-3 text-[11px] text-caption uppercase tracking-wider"
            style={FONT}
          >
            Default
          </div>
          <div className="flex items-center gap-6 mb-5">
            {STATES.map((s) => (
              <div
                key={s}
                className="w-[343px] text-[11px] text-caption uppercase tracking-wider"
                style={FONT}
              >
                {s}
              </div>
            ))}
          </div>
          <div className="flex items-start gap-6 mb-10">
            {STATES.map((s) => (
              <StaticRow key={s} stateLabel={s} withIcon={false} />
            ))}
          </div>

          {/* ── Default (Icon) ── */}
          <div
            className="mb-3 text-[11px] text-caption uppercase tracking-wider"
            style={FONT}
          >
            Default (Icon)
          </div>
          <div className="flex items-center gap-6 mb-5">
            {STATES.map((s) => (
              <div
                key={s}
                className="w-[343px] text-[11px] text-caption uppercase tracking-wider"
                style={FONT}
              >
                {s}
              </div>
            ))}
          </div>
          <div className="flex items-start gap-6 mb-10">
            {STATES.map((s) => (
              <StaticRow key={s} stateLabel={s} withIcon={true} />
            ))}
          </div>

          {/* ── Divider ── */}
          <div className="border-t-2 border-divider my-12" />

          {/* ── Interactive ── */}
          <h2 className="mb-2" style={FONT}>
            Interactive
          </h2>
          <p className="text-muted-foreground mb-8 text-[13px]" style={FONT}>
            Click options to select. Last item is disabled.
          </p>

          <div className="flex gap-10 items-start pl-2 pb-2">
            <div className="w-[343px] shrink-0">
              {multiSelect ? (
                <OptionList
                  options={options}
                  selectedValues={selectedMulti}
                  onToggle={handleToggle}
                />
              ) : (
                <OptionList
                  options={options}
                  selectedValue={selectedVal}
                  onSelect={setSelectedVal}
                />
              )}
            </div>

            <div
              className="flex flex-wrap gap-x-6 gap-y-3 text-[13px]"
              style={FONT}
            >
              {(
                [
                  ["Icon", showIcon, () => setShowIcon(!showIcon)],
                  ["Multi-select", multiSelect, () => setMultiSelect(!multiSelect)],
                ] as [string, boolean, () => void][]
              ).map(([label, checked, onToggle]) => (
                <label
                  key={label}
                  className="flex items-center gap-2 cursor-pointer select-none text-nav-link"
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={onToggle}
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
