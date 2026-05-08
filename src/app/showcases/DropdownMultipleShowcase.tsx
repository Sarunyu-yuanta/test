import { useState } from "react";
import { DropdownMultiple } from "@/components/dropdown-multiple";
import { ShowcasePage } from "../components/ShowcasePage";
import { ComponentPlayground } from "../components/ComponentPlayground";

const DEMO_OPTIONS = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
  { label: "Option 4", value: "4" },
];

function DropdownMultiplePreview({
  forceState,
  helperText,
  required,
}: {
  forceState?: string;
  helperText?: string;
  required: boolean;
}) {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div className="w-[280px]">
      <DropdownMultiple
        placeholder="Select options"
        options={DEMO_OPTIONS}
        value={value}
        forceState={forceState as any}
        helperText={helperText}
        required={required}
        errorMessage="Please select at least one"
        onChange={setValue}
      />
    </div>
  );
}

export function DropdownMultipleShowcase() {
  return (
    <ShowcasePage
      name="Dropdown Multiple"
      description="Multi-select dropdown with pill display and optional search."
    >
      <ComponentPlayground

        controls={[
          { type: "boolean", key: "error",     label: "Error",       defaultValue: false },
          { type: "boolean", key: "disabled",  label: "Disabled",    defaultValue: false },
          { type: "boolean", key: "hasHelper", label: "Helper text", defaultValue: false },
          { type: "boolean", key: "required",  label: "Required",    defaultValue: false },
        ]}
        render={({ error, disabled, hasHelper, required }) => {
          const isError = error as boolean;
          const isDisabled = disabled as boolean;
          const forceState = isDisabled ? "disabled" : isError ? "error" : undefined;
          const helperText = (hasHelper as boolean) ? "Select all that apply" : undefined;
          const statePart = forceState ? `\n  forceState="${forceState}"` : "";
          const errPart = isError ? '\n  errorMessage="Please select at least one"' : "";
          const helperPart = helperText ? `\n  helperText="${helperText}"` : "";
          const reqPart = (required as boolean) ? "\n  required" : "";
          return {
            preview: (
              <DropdownMultiplePreview
                forceState={forceState}
                helperText={helperText}
                required={required as boolean}
              />
            ),
            code: `const [selected, setSelected] = useState<string[]>([])\n\n<DropdownMultiple\n  placeholder="Select options"\n  options={options}\n  value={selected}\n  onChange={setSelected}${statePart}${errPart}${helperPart}${reqPart}\n/>`,
          };
        }}
      />
    </ShowcasePage>
  );
}
