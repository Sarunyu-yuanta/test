import { useState } from "react";
import { TextArea, type TextAreaState } from "@/components/textarea";
import { ShowcasePage } from "../components/ShowcasePage";
import { ComponentPlayground } from "../components/ComponentPlayground";

function TextAreaPreview({
  forceState,
  helperText,
  showCount,
  required,
}: {
  forceState?: TextAreaState;
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
        forceState={forceState}
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
          { type: "boolean", key: "error",     label: "Error",       defaultValue: false },
          { type: "boolean", key: "disabled",  label: "Disabled",    defaultValue: false },
          { type: "boolean", key: "hasHelper", label: "Helper text", defaultValue: false },
          { type: "boolean", key: "hasCount",  label: "Count",       defaultValue: false },
          { type: "boolean", key: "required",  label: "Required",    defaultValue: false },
        ]}
        render={({ error, disabled, hasHelper, hasCount, required }) => {
          const isError = error as boolean;
          const isDisabled = disabled as boolean;
          const forceState: TextAreaState | undefined = isDisabled
            ? "disabled"
            : isError
            ? "error"
            : undefined;
          const helperText = (hasHelper as boolean) ? "Helper text" : undefined;
          const statePart = forceState ? `\n  forceState="${forceState}"` : "";
          const errPart = isError ? '\n  errorMessage="Error message"' : "";
          const helperPart = helperText ? `\n  helperText="${helperText}"` : "";
          const countPart = (hasCount as boolean) ? "\n  showCount\n  maxCount={500}" : "";
          const reqPart = (required as boolean) ? "\n  required" : "";
          return {
            preview: (
              <TextAreaPreview
                forceState={forceState}
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
