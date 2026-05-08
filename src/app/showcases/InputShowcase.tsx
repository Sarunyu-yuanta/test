import { Input, InputState } from "@/components/input";
import { ShowcasePage } from "../components/ShowcasePage";
import { ComponentPlayground } from "../components/ComponentPlayground";

export function InputShowcase() {
  return (
    <ShowcasePage
      name="Input"
      description="Text input in four states with optional icon, unit, helper text, and character count."
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
          { type: "boolean", key: "hasCount", label: "Count", defaultValue: false },
          { type: "boolean", key: "hasUnit", label: "Unit", defaultValue: false },
          { type: "boolean", key: "required", label: "Required", defaultValue: false },
        ]}
        render={({ state, hasHelper, hasCount, hasUnit, required }) => {
          const s = state as InputState;
          const helperText = (hasHelper as boolean) ? "Helper text" : undefined;
          const unit = (hasUnit as boolean) ? "Unit" : undefined;
          const helperPart = helperText ? `\n  helperText="${helperText}"` : "";
          const countPart = (hasCount as boolean) ? "\n  showCount\n  maxCount={100}" : "";
          const unitPart = unit ? `\n  unit="${unit}"` : "";
          const reqPart = (required as boolean) ? "\n  required" : "";
          const statePart = s !== "default" ? `\n  forceState="${s}"` : "";
          const errPart = s === "error" ? '\n  errorMessage="Error message"' : "";
          return {
            preview: (
              <div className="w-[280px]">
                <Input
                  placeholder="Text label"
                  forceState={s}
                  helperText={helperText}
                  showCount={hasCount as boolean}
                  maxCount={100}
                  unit={unit}
                  required={required as boolean}
                  errorMessage="Error message"
                />
              </div>
            ),
            code: `<Input\n  placeholder="Text label"${statePart}${errPart}${helperPart}${countPart}${unitPart}${reqPart}\n/>`,
          };
        }}
      />
    </ShowcasePage>
  );
}
