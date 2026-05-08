import { useState } from "react";
import { Toggle, type ToggleSize } from "@/components/toggle";
import { ShowcasePage } from "../components/ShowcasePage";
import { ComponentPlayground } from "../components/ComponentPlayground";

function TogglePreview({
  size,
  disabled,
  label,
  description,
}: {
  size: ToggleSize;
  disabled: boolean;
  label?: string;
  description?: string;
}) {
  const [checked, setChecked] = useState(false);
  return (
    <Toggle
      size={size}
      checked={checked}
      disabled={disabled}
      label={label}
      description={description}
      onChange={setChecked}
    />
  );
}

export function ToggleShowcase() {
  return (
    <ShowcasePage
      name="Toggle"
      description="Controlled on/off switch in two sizes with optional label and description."
    >
      <ComponentPlayground
        
        controls={[
          {
            type: "select",
            key: "size",
            label: "Size",
            options: [{ label: "sm (32×20)", value: "sm" }, { label: "md (40×24)", value: "md" }],
            defaultValue: "md",
          },
          { type: "boolean", key: "disabled", label: "Disabled", defaultValue: false },
          { type: "boolean", key: "hasLabel", label: "Show label", defaultValue: false },
          { type: "boolean", key: "hasDesc", label: "Show description", defaultValue: false },
        ]}
        render={({ size, disabled, hasLabel, hasDesc }) => {
          const s = size as ToggleSize;
          const d = disabled as boolean;
          const label = (hasLabel as boolean) ? "Label" : undefined;
          const description = (hasDesc as boolean) ? "Lorem Ipsum is simply dummy text" : undefined;
          const labelPart = label ? `\n  label="${label}"` : "";
          const descPart = description ? `\n  description="${description}"` : "";
          const disabledPart = d ? "\n  disabled" : "";
          return {
            preview: (
              <TogglePreview size={s} disabled={d} label={label} description={description} />
            ),
            code: `const [checked, setChecked] = useState(false)\n\n<Toggle\n  size="${s}"\n  checked={checked}\n  onChange={setChecked}${disabledPart}${labelPart}${descPart}\n/>`,
          };
        }}
      />
    </ShowcasePage>
  );
}
