import { useState } from "react";
import {
  TimeInput,
  type TimeInputState,
  type TimeInputMode,
  type TimeValue,
} from "@/components/time-input";
import { ShowcasePage } from "../components/ShowcasePage";
import { ComponentPlayground } from "../components/ComponentPlayground";

const fmt = (v: TimeValue) =>
  `${v.hour.toString().padStart(2, "0")}:${v.minute.toString().padStart(2, "0")}`;

function TimeInputPreview({
  mode,
  required,
  forceState,
}: {
  mode: TimeInputMode;
  required: boolean;
  forceState?: TimeInputState;
}) {
  const [singleVal, setSingleVal] = useState<TimeValue | undefined>(undefined);
  const [startVal, setStartVal] = useState<TimeValue>({ hour: 0, minute: 0 });
  const [endVal, setEndVal] = useState<TimeValue>({ hour: 0, minute: 0 });

  return (
    <div className="flex flex-col gap-3 w-[320px]">
      <TimeInput
        mode={mode}
        placeholder="Text label"
        required={required}
        forceState={forceState}
        errorMessage="Error message"
        value={mode === "single" ? singleVal : undefined}
        onChange={mode === "single" ? setSingleVal : undefined}
        startTime={mode === "range" ? startVal : undefined}
        endTime={mode === "range" ? endVal : undefined}
        onStartChange={mode === "range" ? setStartVal : undefined}
        onEndChange={mode === "range" ? setEndVal : undefined}
      />
      <p
        className="text-[13px] text-muted-foreground min-h-[20px] transition-opacity"
        style={{ opacity: mode === "single" ? (singleVal ? 1 : 0) : 1 }}
      >
        {mode === "single"
          ? `Selected: ${singleVal ? fmt(singleVal) : "—"}`
          : `Start: ${fmt(startVal)} — End: ${fmt(endVal)}`}
      </p>
    </div>
  );
}

export function TimeInputShowcase() {
  return (
    <ShowcasePage
      name="Time Input"
      description="Time picker with clock interface in four states."
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
          { type: "boolean", key: "required", label: "Required", defaultValue: false },
          { type: "boolean", key: "error",    label: "Error",    defaultValue: false, visible: (v) => v.disabled !== true },
          { type: "boolean", key: "disabled", label: "Disabled", defaultValue: false },
        ]}
        render={({ mode, required, error, disabled }) => {
          const m = mode as TimeInputMode;
          const req = required as boolean;
          const forceState: TimeInputState | undefined =
            (disabled as boolean) ? "disabled" : (error as boolean) ? "error" : undefined;

          const statePart = forceState ? `\n  forceState="${forceState}"` : "";
          const reqPart = req ? "\n  required" : "";
          const errPart = forceState === "error" ? '\n  errorMessage="Error message"' : "";

          const code =
            m === "single"
              ? `const [time, setTime] = useState<TimeValue | undefined>()\n\n<TimeInput\n  placeholder="HH:MM"\n  value={time}\n  onChange={setTime}${reqPart}${statePart}${errPart}\n/>`
              : `const [start, setStart] = useState<TimeValue>({ hour: 0, minute: 0 })\nconst [end, setEnd] = useState<TimeValue>({ hour: 0, minute: 0 })\n\n<TimeInput\n  mode="range"\n  startTime={start}\n  endTime={end}\n  onStartChange={setStart}\n  onEndChange={setEnd}${reqPart}${statePart}${errPart}\n/>`;

          return {
            preview: (
              <TimeInputPreview mode={m} required={req} forceState={forceState} />
            ),
            code,
          };
        }}
      />
    </ShowcasePage>
  );
}
