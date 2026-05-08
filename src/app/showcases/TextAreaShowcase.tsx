import { useState } from "react";
import { TextArea, type TextAreaState } from "@/components/textarea";
import { ShowcasePage } from "../components/ShowcasePage";
import { ComponentPlayground } from "../components/ComponentPlayground";

function TextAreaPreview({
  state,
  helperText,
  showCount,
  required,
}: {
  state: TextAreaState;
  helperText?: string;
  showCount: boolean;
  required: boolean;
}) {
  const [value, setValue] = useState("");
  return (
    <div className="w-[320px]">
      <TextArea
        placeholder="Enter your message..."
        value={value}
        onChange={setValue}
        forceState={state !== "default" ? state : undefined}
        helperText={helperText}
        showCount={showCount}
        maxCount={500}
        required={required}
        errorMessage="Error message"
      />
    </div>
  );
}

export function TextAreaShowcase() {
  return (
    <ShowcasePage
      name="Text Area"
      description="Multi-line text input with states, helper text, and character count."
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
          { type: "boolean", key: "required", label: "Required", defaultValue: false },
        ]}
        render={({ state, hasHelper, hasCount, required }) => {
          const s = state as TextAreaState;
          const helperText = (hasHelper as boolean) ? "Helper text" : undefined;
          const helperPart = helperText ? `\n  helperText="${helperText}"` : "";
          const countPart = (hasCount as boolean) ? "\n  showCount\n  maxCount={500}" : "";
          const reqPart = (required as boolean) ? "\n  required" : "";
          const statePart = s !== "default" ? `\n  forceState="${s}"` : "";
          const errPart = s === "error" ? '\n  errorMessage="Error message"' : "";
          return {
            preview: (
              <TextAreaPreview
                state={s}
                helperText={helperText}
                showCount={hasCount as boolean}
                required={required as boolean}
              />
            ),
            code: `const [value, setValue] = useState("")\n\n<TextArea\n  placeholder="Enter your message..."\n  value={value}\n  onChange={setValue}${statePart}${errPart}${helperPart}${countPart}${reqPart}\n/>`,
          };
        }}
      />
    </ShowcasePage>
  );
}
