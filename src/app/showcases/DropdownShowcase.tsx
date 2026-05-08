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
  forceState,
  helperText,
  required,
  label,
}: {
  forceState?: DropdownState;
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
        forceState={forceState}
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
          { type: "boolean", key: "error",       label: "Error",         defaultValue: false },
          { type: "boolean", key: "disabled",    label: "Disabled",      defaultValue: false },
          { type: "boolean", key: "hasHelper",   label: "Helper text",   defaultValue: false },
          { type: "boolean", key: "required",    label: "Required",      defaultValue: false },
          { type: "boolean", key: "hasExternal", label: "External label", defaultValue: false },
        ]}
        render={({ error, disabled, hasHelper, required, hasExternal }) => {
          const isError = error as boolean;
          const isDisabled = disabled as boolean;
          const forceState: DropdownState | undefined = isDisabled
            ? "disabled"
            : isError
            ? "error"
            : undefined;
          const helperText = (hasHelper as boolean) ? "Please select one" : undefined;
          const label = (hasExternal as boolean) ? "Label" : undefined;
          const statePart = forceState ? `\n  forceState="${forceState}"` : "";
          const errPart = isError ? '\n  errorMessage="Please select an option"' : "";
          const helperPart = helperText ? `\n  helperText="${helperText}"` : "";
          const reqPart = (required as boolean) ? "\n  required" : "";
          const extPart = label ? `\n  label="${label}"` : "";
          return {
            preview: (
              <DropdownPreview
                forceState={forceState}
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
