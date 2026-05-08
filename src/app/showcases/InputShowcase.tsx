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
          { type: "boolean", key: "error",     label: "Error",       defaultValue: false },
          { type: "boolean", key: "disabled",  label: "Disabled",    defaultValue: false },
          { type: "boolean", key: "hasHelper", label: "Helper text", defaultValue: false },
          { type: "boolean", key: "hasCount",  label: "Count",       defaultValue: false },
          { type: "boolean", key: "hasUnit",   label: "Unit",        defaultValue: false },
          { type: "boolean", key: "required",  label: "Required",    defaultValue: false },
        ]}
        render={({ error, disabled, hasHelper, hasCount, hasUnit, required }) => {
          const isError = error as boolean;
          const isDisabled = disabled as boolean;
          const forceState: InputState | undefined = isDisabled
            ? "disabled"
            : isError
            ? "error"
            : undefined;
          const helperText = (hasHelper as boolean) ? "Helper text" : undefined;
          const unit = (hasUnit as boolean) ? "Unit" : undefined;
          const statePart = forceState ? `\n  forceState="${forceState}"` : "";
          const errPart = isError ? '\n  errorMessage="Error message"' : "";
          const helperPart = helperText ? `\n  helperText="${helperText}"` : "";
          const countPart = (hasCount as boolean) ? "\n  showCount\n  maxCount={100}" : "";
          const unitPart = unit ? `\n  unit="${unit}"` : "";
          const reqPart = (required as boolean) ? "\n  required" : "";
          return {
            preview: (
              <div className="w-[280px]">
                <Input
                  placeholder="Text label"
                  forceState={forceState}
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
