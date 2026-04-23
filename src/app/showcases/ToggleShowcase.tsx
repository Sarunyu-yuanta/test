import { useState } from "react";
import { Toggle, type ToggleSize } from "@/components/toggle";

const LONG_DESC =
  "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.";

const SHORT_DESC = "Lorem Ipsum is simply dummy";

function SizeRow({ size, title }: { size: ToggleSize; title: string }) {
  const [a, setA] = useState(false);
  const [b, setB] = useState(true);
  return (
    <div className="space-y-4">
      <h2 className="text-sm font-semibold text-foreground">{title}</h2>
      <div className="flex flex-wrap items-end gap-x-16 gap-y-6">
        <div className="flex flex-col items-center gap-2">
          <Toggle size={size} checked={a} onChange={setA} />
          <span className="text-xs text-subtle-text">Default · Off</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Toggle size={size} checked={b} onChange={setB} />
          <span className="text-xs text-subtle-text">Default · On</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Toggle size={size} checked={false} disabled onChange={() => {}} />
          <span className="text-xs text-subtle-text">Disabled · Off</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Toggle size={size} checked disabled onChange={() => {}} />
          <span className="text-xs text-subtle-text">Disabled · On</span>
        </div>
      </div>
    </div>
  );
}

function LabeledDemoCell({
  disabled,
  initialChecked,
  label,
  description,
}: {
  disabled: boolean;
  initialChecked: boolean;
  label: string;
  description?: string;
}) {
  const [checked, setChecked] = useState(initialChecked);
  return (
    <div className="w-full max-w-[343px]">
      <Toggle
        checked={checked}
        disabled={disabled}
        onChange={setChecked}
        label={label}
        description={description}
      />
    </div>
  );
}

/** Matches Figma «Toggle text» (759:4787): 343px row, 16px gap, label left / switch right. */
function LabeledGrid() {
  const [on1, setOn1] = useState(false);
  const [on2, setOn2] = useState(false);
  const [on3, setOn3] = useState(false);

  const states = [
    { key: "def-off", disabled: false, initial: false },
    { key: "dis-off", disabled: true, initial: false },
    { key: "def-on", disabled: false, initial: true },
    { key: "dis-on", disabled: true, initial: true },
  ] as const;

  return (
    <div className="space-y-4">
      <h2 className="text-sm font-semibold text-foreground">Toggle text (Figma — with label)</h2>
      <p className="max-w-2xl text-xs text-subtle-text">
        Row layout: text fills the left, switch on the right (<code className="text-foreground">gap-4</code>
        ). With description, the row uses <code className="text-foreground">items-start</code> so the
        switch lines up with the first line of copy.
      </p>
      <div className="grid gap-10">
        <div className="grid min-w-0 grid-cols-1 gap-4 lg:grid-cols-4">
          {states.map((s) => (
            <LabeledDemoCell
              key={`label-${s.key}`}
              disabled={s.disabled}
              initialChecked={s.initial}
              label="Label"
            />
          ))}
        </div>
        <div className="grid min-w-0 grid-cols-1 gap-4 lg:grid-cols-4">
          {states.map((s) => (
            <LabeledDemoCell
              key={`sub-${s.key}`}
              disabled={s.disabled}
              initialChecked={s.initial}
              label="Label"
              description={SHORT_DESC}
            />
          ))}
        </div>
        <div className="grid min-w-0 grid-cols-1 gap-4 lg:grid-cols-4">
          {states.map((s) => (
            <LabeledDemoCell
              key={`long-${s.key}`}
              disabled={s.disabled}
              initialChecked={s.initial}
              label="Label"
              description={LONG_DESC}
            />
          ))}
        </div>
        <div className="w-full max-w-[343px] space-y-3 border border-border rounded-lg p-4">
          <p className="text-xs text-subtle-text">Interactive (controlled)</p>
          <Toggle checked={on1} onChange={setOn1} label="Label" />
          <Toggle checked={on2} onChange={setOn2} label="Label" description={SHORT_DESC} />
          <Toggle checked={on3} onChange={setOn3} label="Label" description={LONG_DESC} />
        </div>
      </div>
    </div>
  );
}

export function ToggleShowcase() {
  return (
    <div className="bg-background min-h-full space-y-14 p-6">
      <LabeledGrid />
      {[
        { size: "sm" as const, title: "Small only (32×20)" },
        { size: "md" as const, title: "Medium only (40×24)" },
      ].map((row) => (
        <SizeRow key={row.size} size={row.size} title={row.title} />
      ))}
    </div>
  );
}
