import { useState } from "react";
import { Radio } from "@/components/radio";
import { ShowcasePage } from "../components/ShowcasePage";
import { ComponentPlayground } from "../components/ComponentPlayground";

const RADIO_OPTIONS = ["Option A", "Option B", "Option C"] as const;

function RadioGroupPreview({
  variant,
  disabled,
  showLabel,
  showDesc,
}: {
  variant: "text" | "button";
  disabled: boolean;
  showLabel: boolean;
  showDesc: boolean;
}) {
  const [selected, setSelected] = useState("Option A");
  return (
    <div className="flex flex-col gap-3">
      {RADIO_OPTIONS.map((opt) => (
        <Radio
          key={opt}
          variant={variant}
          checked={selected === opt}
          disabled={disabled}
          label={showLabel ? opt : undefined}
          description={showDesc && opt === "Option A" ? "Lorem ipsum dolor sit amet consectetur." : undefined}
          onChange={() => setSelected(opt)}
        />
      ))}
    </div>
  );
}

export function RadioShowcase() {
  return (
    <ShowcasePage
      name="Radio"
      description="Radio input in text and button variants with full state coverage."
    >
      <ComponentPlayground
        
        controls={[
          {
            type: "select",
            key: "variant",
            label: "Variant",
            options: [{ label: "text", value: "text" }, { label: "button", value: "button" }],
            defaultValue: "text",
          },
          { type: "boolean", key: "disabled", label: "Disabled", defaultValue: false },
          { type: "boolean", key: "hasLabel", label: "Show label", defaultValue: true },
          { type: "boolean", key: "hasDesc", label: "Show description", defaultValue: false },
        ]}
        render={({ variant, disabled, hasLabel, hasDesc }) => {
          const v = variant as "text" | "button";
          const d = disabled as boolean;
          const sl = hasLabel as boolean;
          const sd = hasDesc as boolean;
          const variantProp = v === "button" ? `\n  variant="button"` : "";
          const labelPart = sl ? `\n  label="Option A"` : "";
          const descPart = sd ? `\n  description="Lorem ipsum dolor sit amet consectetur."` : "";
          const disabledPart = d ? "\n  disabled" : "";
          return {
            preview: (
              <RadioGroupPreview variant={v} disabled={d} showLabel={sl} showDesc={sd} />
            ),
            code: `const [selected, setSelected] = useState("A")\n\n<Radio${variantProp}\n  checked={selected === "A"}${disabledPart}${labelPart}${descPart}\n  onChange={() => setSelected("A")}\n/>`,
          };
        }}
      />
    </ShowcasePage>
  );
}
