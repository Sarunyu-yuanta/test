import { useState } from "react";
import { Slider, type SliderSize, type SliderType } from "@/components/slider";
import { ShowcasePage } from "../components/ShowcasePage";
import { ComponentPlayground } from "../components/ComponentPlayground";

function SliderPreview({
  size,
  type,
  disabled,
  showSteps,
}: {
  size: SliderSize;
  type: SliderType;
  disabled: boolean;
  showSteps: boolean;
}) {
  const [value, setValue] = useState(50);
  const [range, setRange] = useState<[number, number]>([25, 75]);

  if (type === "range") {
    return (
      <div className="flex w-[280px] flex-col gap-3">
        <Slider
          size={size}
          type="range"
          disabled={disabled}
          showSteps={showSteps}
          rangeValue={range}
          onRangeChange={setRange}
        />
        <p className="font-mono text-xs text-[var(--text-default-secondary)]">
          [{range[0]}, {range[1]}]
        </p>
      </div>
    );
  }

  return (
    <div className="flex w-[280px] flex-col gap-3">
      <Slider
        size={size}
        type="single"
        disabled={disabled}
        showSteps={showSteps}
        value={value}
        onChange={setValue}
      />
      <p className="font-mono text-xs text-[var(--text-default-secondary)]">
        {value}
      </p>
    </div>
  );
}

export function SliderShowcase() {
  return (
    <ShowcasePage
      name="Slider"
      description="Range input in three sizes, supporting single-thumb and two-thumb range selection with optional step labels."
    >
      <ComponentPlayground
        controls={[
          {
            type: "select",
            key: "size",
            label: "Size",
            options: [
              { label: "sm (4 px track)", value: "sm" },
              { label: "md (8 px track)", value: "md" },
              { label: "lg (12 px track)", value: "lg" },
            ],
            defaultValue: "md",
          },
          {
            type: "select",
            key: "type",
            label: "Type",
            options: [
              { label: "single", value: "single" },
              { label: "range", value: "range" },
            ],
            defaultValue: "single",
          },
          { type: "boolean", key: "disabled", label: "Disabled", defaultValue: false },
          { type: "boolean", key: "showSteps", label: "Show steps", defaultValue: false },
        ]}
        render={({ size, type, disabled, showSteps }) => {
          const s = size as SliderSize;
          const t = type as SliderType;
          const d = disabled as boolean;
          const steps = showSteps as boolean;

          const singleCode = `const [value, setValue] = useState(50)\n\n<Slider\n  size="${s}"\n  type="single"\n  value={value}\n  onChange={setValue}${d ? "\n  disabled" : ""}${steps ? "\n  showSteps" : ""}\n/>`;
          const rangeCode = `const [range, setRange] = useState<[number, number]>([25, 75])\n\n<Slider\n  size="${s}"\n  type="range"\n  rangeValue={range}\n  onRangeChange={setRange}${d ? "\n  disabled" : ""}${steps ? "\n  showSteps" : ""}\n/>`;

          return {
            preview: (
              <SliderPreview size={s} type={t} disabled={d} showSteps={steps} />
            ),
            code: t === "range" ? rangeCode : singleCode,
          };
        }}
      />
    </ShowcasePage>
  );
}
