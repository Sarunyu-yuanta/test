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
  state,
  helperText,
  required,
}: {
  state: string;
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
        forceState={state !== "default" ? state as any : undefined}
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
        ]}
        render={({ state, hasHelper, required }) => {
          const s = state as string;
          const helperText = (hasHelper as boolean) ? "Select all that apply" : undefined;
          const statePart = s !== "default" ? `\n  forceState="${s}"` : "";
          const errPart = s === "error" ? '\n  errorMessage="Please select at least one"' : "";
          const helperPart = helperText ? `\n  helperText="${helperText}"` : "";
          const reqPart = (required as boolean) ? "\n  required" : "";
          return {
            preview: (
              <DropdownMultiplePreview
                state={s}
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
