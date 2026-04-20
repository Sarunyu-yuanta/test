import { useState } from "react";
import { Checkbox, type CheckboxChecked, type CheckboxVariant } from "@/components/checkbox";

const stateVariants: {
  key: string;
  label: string;
  checked: CheckboxChecked;
  disabled: boolean;
}[] = [
  { key: "default", label: "Default", checked: false, disabled: false },
  { key: "check", label: "Checked", checked: true, disabled: false },
  { key: "indeterminate", label: "Indeterminate", checked: "indeterminate", disabled: false },
  { key: "default-disabled", label: "Default + Disabled", checked: false, disabled: true },
  { key: "check-disabled", label: "Checked + Disabled", checked: true, disabled: true },
  { key: "indeterminate-disabled", label: "Indeterminate + Disabled", checked: "indeterminate", disabled: true },
];

const DESCRIPTION = "Lorem ipsum dolor sit amet consectetur.";

function VariantGrid({
  variant,
  withDescription,
}: {
  variant: CheckboxVariant;
  withDescription: boolean;
}) {
  return (
    <div className="flex flex-wrap items-start gap-6">
      {stateVariants.map((s) => (
        <div key={s.key} className="flex flex-col gap-2">
          <Checkbox
            variant={variant}
            checked={s.checked}
            disabled={s.disabled}
            label="Label"
            description={withDescription ? DESCRIPTION : undefined}
          />
          <span className="text-[11px] text-muted-foreground">{s.label}</span>
        </div>
      ))}
    </div>
  );
}

export function CheckboxShowcase() {
  const [single, setSingle] = useState<boolean>(false);
  const [items, setItems] = useState<boolean[]>([false, true, false]);

  const allChecked = items.every(Boolean);
  const someChecked = items.some(Boolean) && !allChecked;
  const parentState: CheckboxChecked = allChecked ? true : someChecked ? "indeterminate" : false;

  return (
    <div className="bg-background min-h-full">
      <h1 className="mb-1">Checkbox Component</h1>
      <p className="text-muted-foreground mb-10">Type x Description x State</p>

      <section className="mb-12">
        <h2 className="mb-5 text-[18px]">Bare (checkbox only)</h2>
        <div className="flex flex-wrap items-center gap-8">
          {stateVariants.map((s) => (
            <div key={s.key} className="flex items-center gap-2">
              <Checkbox checked={s.checked} disabled={s.disabled} />
              <span className="text-[11px] text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-5 text-[18px]">Label</h2>
        <VariantGrid variant="text" withDescription={false} />
      </section>

      <section className="mb-12">
        <h2 className="mb-5 text-[18px]">Label + Description</h2>
        <VariantGrid variant="text" withDescription={true} />
      </section>

      <section className="mb-12">
        <h2 className="mb-5 text-[18px]">Label (Button)</h2>
        <VariantGrid variant="button" withDescription={false} />
      </section>

      <section className="mb-12">
        <h2 className="mb-5 text-[18px]">Label + Description (Button)</h2>
        <VariantGrid variant="button" withDescription={true} />
      </section>

      <section className="mb-12">
        <h2 className="mb-5 text-[18px]">Interactive — single</h2>
        <Checkbox
          label={single ? "Subscribed" : "Subscribe to updates"}
          description="Get product updates in your inbox."
          checked={single}
          onChange={setSingle}
        />
      </section>

      <section className="mb-12">
        <h2 className="mb-5 text-[18px]">Interactive — parent / children</h2>
        <div className="flex flex-col gap-2">
          <Checkbox
            label="Select all"
            checked={parentState}
            onChange={(next) => setItems(items.map(() => next))}
          />
          <div className="pl-6 flex flex-col gap-2">
            {items.map((c, i) => (
              <Checkbox
                key={i}
                label={`Option ${i + 1}`}
                checked={c}
                onChange={(next) => {
                  const copy = [...items];
                  copy[i] = next;
                  setItems(copy);
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
