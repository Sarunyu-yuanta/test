import { useState } from "react";
import {
  DateInput,
  type DateInputState,
  type DateInputMode,
  type DatePickerVariant,
  type DateRange,
} from "@/components/date-input";
import { ShowcasePage } from "../components/ShowcasePage";
import { ComponentPlayground } from "../components/ComponentPlayground";

function DateInputPreview({
  mode,
  pickerVariant,
  required,
  forceState,
}: {
  mode: DateInputMode;
  pickerVariant: DatePickerVariant;
  required: boolean;
  forceState?: DateInputState;
}) {
  const [singleDate, setSingleDate] = useState<Date | undefined>(undefined);
  const [rangeDate, setRangeDate] = useState<DateRange | undefined>(undefined);

  const effectiveVariant: DatePickerVariant =
    mode === "range" ? "calendar" : pickerVariant;

  return (
    <div className="w-[320px]">
      <DateInput
        mode={mode}
        pickerVariant={effectiveVariant}
        placeholder="Text label"
        required={required}
        forceState={forceState}
        errorMessage="Error message"
        value={mode === "single" ? singleDate : undefined}
        onChange={mode === "single" ? setSingleDate : undefined}
        dateRange={mode === "range" ? rangeDate : undefined}
        onRangeChange={mode === "range" ? setRangeDate : undefined}
      />
    </div>
  );
}

export function DateInputShowcase() {
  return (
    <ShowcasePage
      name="Date Input"
      description="Date picker with calendar popover in four states."
    >
      <ComponentPlayground
        
        controls={[
          {
            type: "select",
            key: "mode",
            label: "Mode",
            options: [
              { label: "single", value: "single" },
              { label: "range", value: "range" },
            ],
            defaultValue: "single",
          },
          {
            type: "select",
            key: "picker",
            label: "Picker",
            options: [
              { label: "calendar", value: "calendar" },
              { label: "scroll", value: "scroll" },
            ],
            defaultValue: "calendar",
            visible: (v) => v.mode === "single",
          },
          { type: "boolean", key: "required", label: "Required", defaultValue: false },
          { type: "boolean", key: "error",    label: "Error",    defaultValue: false, visible: (v) => v.disabled !== true },
          { type: "boolean", key: "disabled", label: "Disabled", defaultValue: false },
        ]}
        render={({ mode, picker, required, error, disabled }) => {
          const m = mode as DateInputMode;
          const pv: DatePickerVariant = m === "range" ? "calendar" : picker as DatePickerVariant;
          const req = required as boolean;
          const forceState: DateInputState | undefined =
            (disabled as boolean) ? "disabled" : (error as boolean) ? "error" : undefined;

          const statePart = forceState ? `\n  forceState="${forceState}"` : "";
          const reqPart = req ? "\n  required" : "";
          const errPart = forceState === "error" ? '\n  errorMessage="Error message"' : "";
          const pickerPart = m === "single" && pv !== "calendar" ? `\n  pickerVariant="${pv}"` : "";

          const code =
            m === "single"
              ? `const [date, setDate] = useState<Date | undefined>()\n\n<DateInput\n  placeholder="DD/MM/YYYY"\n  value={date}\n  onChange={setDate}${pickerPart}${reqPart}${statePart}${errPart}\n/>`
              : `const [range, setRange] = useState<DateRange | undefined>()\n\n<DateInput\n  mode="range"\n  placeholder="DD/MM/YYYY"\n  dateRange={range}\n  onRangeChange={setRange}${reqPart}${statePart}${errPart}\n/>`;

          return {
            preview: (
              <DateInputPreview
                mode={m}
                pickerVariant={pv}
                required={req}
                forceState={forceState}
              />
            ),
            code,
          };
        }}
      />
    </ShowcasePage>
  );
}
