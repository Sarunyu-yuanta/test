import { useState } from "react";
import { Chip, type ChipSize, type ChipType } from "@/components/chip";
import { ShowcasePage } from "../components/ShowcasePage";
import { ComponentPlayground } from "../components/ComponentPlayground";

const CHIP_LABELS = ["Technology", "Design", "Finance"] as const;

function ChipPreview({
  type,
  size,
  disabled,
}: {
  type: ChipType;
  size: ChipSize;
  disabled: boolean;
}) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (label: string) => {
    if (type === "single") {
      setSelected((prev) => (prev.includes(label) ? [] : [label]));
    } else {
      setSelected((prev) =>
        prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label],
      );
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {CHIP_LABELS.map((label) => (
        <Chip
          key={label}
          type={type}
          size={size}
          label={label}
          selected={selected.includes(label)}
          disabled={disabled}
          onClick={() => toggle(label)}
        />
      ))}
    </div>
  );
}

export function ChipShowcase() {
  return (
    <ShowcasePage
      name="Chip"
      description="Single and multiple select chips in three sizes."
    >
      <ComponentPlayground
        
        controls={[
          {
            type: "select",
            key: "type",
            label: "Type",
            options: [{ label: "single", value: "single" }, { label: "multiple", value: "multiple" }],
            defaultValue: "single",
          },
          {
            type: "select",
            key: "size",
            label: "Size",
            options: [
              { label: "large", value: "large" },
              { label: "medium", value: "medium" },
              { label: "small", value: "small" },
            ],
            defaultValue: "large",
          },
          { type: "boolean", key: "disabled", label: "Disabled", defaultValue: false },
        ]}
        render={({ type, size, disabled }) => {
          const t = type as ChipType;
          const s = size as ChipSize;
          const dis = disabled as boolean;
          return {
            preview: <ChipPreview type={t} size={s} disabled={dis} />,
            code: `const [selected, setSelected] = useState(false)\n\n<Chip\n  type="${t}"\n  size="${s}"\n  label="Technology"\n  selected={selected}${dis ? "\n  disabled" : ""}\n  onClick={() => setSelected(s => !s)}\n/>`,
          };
        }}
      />
    </ShowcasePage>
  );
}
