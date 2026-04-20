import { useState } from "react";
import { Radio } from "@/components/radio";

const stateVariants: {
  key: string;
  label: string;
  checked: boolean;
  disabled: boolean;
}[] = [
  { key: "default", label: "Default", checked: false, disabled: false },
  { key: "checked", label: "Checked", checked: true, disabled: false },
  { key: "default-disabled", label: "Default + Disabled", checked: false, disabled: true },
  { key: "checked-disabled", label: "Checked + Disabled", checked: true, disabled: true },
];

const DESCRIPTION = "Lorem ipsum dolor sit amet consectetur.";

export function RadioShowcase() {
  const [selected, setSelected] = useState<string | null>(null);
  const options = ["Option A", "Option B", "Option C"];

  return (
    <div className="bg-background min-h-full">
      <h1 className="mb-1">Radio Component</h1>
      <p className="text-muted-foreground mb-10">State</p>

      <section className="mb-12">
        <h2 className="mb-5 text-[18px]">Bare (radio only)</h2>
        <div className="flex flex-wrap items-center gap-8">
          {stateVariants.map((s) => (
            <div key={s.key} className="flex items-center gap-2">
              <Radio checked={s.checked} disabled={s.disabled} />
              <span className="text-[11px] text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-5 text-[18px]">Label</h2>
        <div className="flex flex-wrap items-start gap-6">
          {stateVariants.map((s) => (
            <div key={s.key} className="flex flex-col gap-2">
              <Radio checked={s.checked} disabled={s.disabled} label="Label" />
              <span className="text-[11px] text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-5 text-[18px]">Label + Description</h2>
        <div className="flex flex-wrap items-start gap-6">
          {stateVariants.map((s) => (
            <div key={s.key} className="flex flex-col gap-2">
              <Radio
                checked={s.checked}
                disabled={s.disabled}
                label="Label"
                description={DESCRIPTION}
              />
              <span className="text-[11px] text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-5 text-[18px]">Button — Label</h2>
        <div className="flex flex-wrap items-start gap-4">
          {stateVariants.map((s) => (
            <div key={s.key} className="flex flex-col gap-2">
              <Radio variant="button" checked={s.checked} disabled={s.disabled} label="Label" />
              <span className="text-[11px] text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-5 text-[18px]">Button — Label + Description</h2>
        <div className="flex flex-wrap items-start gap-4">
          {stateVariants.map((s) => (
            <div key={s.key} className="flex flex-col gap-2">
              <Radio
                variant="button"
                checked={s.checked}
                disabled={s.disabled}
                label="Label"
                description={DESCRIPTION}
              />
              <span className="text-[11px] text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-5 text-[18px]">Interactive — radio group</h2>
        <div className="flex flex-col gap-2">
          {options.map((opt) => (
            <Radio
              key={opt}
              name="demo"
              value={opt}
              label={opt}
              checked={selected === opt}
              onChange={() => setSelected(opt)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
