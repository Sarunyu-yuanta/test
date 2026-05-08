import { useState } from "react";
import { Dropdown, type DropdownState, type DropdownOption } from "@/components/dropdown";
import { ShowcasePage } from "../components/ShowcasePage";
import { ComponentPlayground } from "../components/ComponentPlayground";

const DEMO_OPTIONS: DropdownOption[] = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
];

function DropdownPreview({
  state,
  helperText,
  required,
  label,
}: {
  state: DropdownState;
  helperText?: string;
  required: boolean;
  label?: string;
}) {
  const [value, setValue] = useState("");
  const selectedLabel = DEMO_OPTIONS.find((o) => o.value === value)?.label;

  return (
    <div className="flex flex-col gap-3 w-[280px]">
      <Dropdown
        placeholder="Select option"
        options={DEMO_OPTIONS}
        value={value}
        forceState={state !== "default" ? state : undefined}
        helperText={helperText}
        required={required}
        label={label}
        errorMessage="Please select an option"
        onChange={setValue}
      />
      <p
        className="text-[13px] text-muted-foreground min-h-[20px] transition-opacity"
        style={{ opacity: selectedLabel ? 1 : 0 }}
      >
        Selected: {selectedLabel ?? "—"}
      </p>
    </div>
  );
}

export function DropdownShowcase() {
  return (
    <ShowcasePage
      name="Dropdown"
      description="Select dropdown in four states with optional helper text, external label, and required indicator."
    >
      <ComponentPlayground
        
        controls={[
          {
            type: "select",
            key: "state",
            label: "State",
            options: [
              { label: "default", value: "default" },
              { label: "focus", value: "focus" },
              { label: "error", value: "error" },
              { label: "disabled", value: "disabled" },
            ],
            defaultValue: "default",
          },
          { type: "boolean", key: "hasHelper", label: "Helper text", defaultValue: false },
          { type: "boolean", key: "required", label: "Required", defaultValue: false },
          { type: "boolean", key: "hasExternal", label: "External label", defaultValue: false },
        ]}
        render={({ state, hasHelper, required, hasExternal }) => {
          const s = state as DropdownState;
          const helperText = (hasHelper as boolean) ? "Please select one" : undefined;
          const label = (hasExternal as boolean) ? "Label" : undefined;
          const helperPart = helperText ? `\n  helperText="${helperText}"` : "";
          const reqPart = (required as boolean) ? "\n  required" : "";
          const extPart = label ? `\n  label="${label}"` : "";
          const statePart = s !== "default" ? `\n  forceState="${s}"` : "";
          const errPart = s === "error" ? '\n  errorMessage="Please select an option"' : "";
          return {
            preview: (
              <DropdownPreview
                state={s}
                helperText={helperText}
                required={required as boolean}
                label={label}
              />
            ),
            code: `const [value, setValue] = useState("")\n\n<Dropdown\n  placeholder="Select option"\n  options={options}\n  value={value}\n  onChange={setValue}${statePart}${errPart}${helperPart}${reqPart}${extPart}\n/>`,
          };
        }}
      />
    </ShowcasePage>
  );
}
