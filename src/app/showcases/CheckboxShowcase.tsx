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

const errorVariants: {
  key: string;
  label: string;
  checked: CheckboxChecked;
}[] = [
  { key: "error-default", label: "Error", checked: false },
  { key: "error-checked", label: "Error + Checked", checked: true },
  { key: "error-indeterminate", label: "Error + Indeterminate", checked: "indeterminate" },
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
    <div className="grid grid-cols-6 gap-x-14">
      {stateVariants.map((s) => (
        <div key={s.key}>
          <Checkbox
            variant={variant}
            checked={s.checked}
            disabled={s.disabled}
            label="Label"
            description={withDescription ? DESCRIPTION : undefined}
          />
        </div>
      ))}
    </div>
  );
}

function ErrorGrid({
  variant,
  withDescription,
}: {
  variant: CheckboxVariant;
  withDescription: boolean;
}) {
  return (
    <div className="grid grid-cols-3 gap-x-14">
      {errorVariants.map((s) => (
        <div key={s.key}>
          <Checkbox
            variant={variant}
            checked={s.checked}
            error
            errorMessage="This field is required"
            label="Label"
            description={withDescription ? DESCRIPTION : undefined}
          />
        </div>
      ))}
    </div>
  );
}

const ITEM_OPTIONS = ["Option A", "Option B", "Option C", "Option D"];

function SelectAllGroup({ variant }: { variant: CheckboxVariant }) {
  const [checked, setChecked] = useState<boolean[]>(ITEM_OPTIONS.map(() => false));

  const allChecked = checked.every(Boolean);
  const someChecked = checked.some(Boolean);
  const parentState: CheckboxChecked = allChecked ? true : someChecked ? "indeterminate" : false;

  function toggleAll(next: boolean) {
    setChecked(ITEM_OPTIONS.map(() => next));
  }

  function toggleOne(index: number, next: boolean) {
    setChecked((prev) => prev.map((v, i) => (i === index ? next : v)));
  }

  return (
    <div className="space-y-2">
      <Checkbox
        variant={variant}
        checked={parentState}
        label="Select all"
        onChange={(next) => toggleAll(parentState === "indeterminate" ? true : next)}
      />
      <div className={variant === "button" ? "flex flex-wrap gap-2 pl-6" : "flex flex-col gap-1 pl-6"}>
        {ITEM_OPTIONS.map((opt, i) => (
          <Checkbox
            key={opt}
            variant={variant}
            checked={checked[i]}
            label={opt}
            onChange={(next) => toggleOne(i, next)}
          />
        ))}
      </div>
    </div>
  );
}

function IndividualGroup({ variant }: { variant: CheckboxVariant }) {
  const [states, setStates] = useState<boolean[]>(ITEM_OPTIONS.map(() => false));

  return (
    <div className={variant === "button" ? "flex flex-wrap gap-2" : "flex flex-col gap-2"}>
      {ITEM_OPTIONS.map((opt, i) => (
        <Checkbox
          key={opt}
          variant={variant}
          checked={states[i]}
          label={opt}
          description={variant === "text" ? DESCRIPTION : undefined}
          onChange={(next) => setStates((prev) => prev.map((v, j) => (j === i ? next : v)))}
        />
      ))}
    </div>
  );
}

function ErrorInteractiveCard() {
  const [checked, setChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const hasError = submitted && !checked;

  return (
    <div className="space-y-3 rounded-lg border border-border p-4">
      <p className="text-xs text-subtle-text">Error — form validation pattern</p>
      <Checkbox
        checked={checked}
        error={hasError}
        errorMessage="You must accept the terms"
        label="I accept the terms and conditions"
        onChange={(next) => setChecked(next)}
      />
      <button
        type="button"
        onClick={() => setSubmitted(true)}
        className="mt-2 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground"
      >
        Submit
      </button>
    </div>
  );
}

export function CheckboxShowcase() {
  return (
    <div className="bg-background min-h-full space-y-14">
      <div className="space-y-12 overflow-x-auto">
        <div className="min-w-[1100px] space-y-10">
          <VariantGrid variant="text" withDescription={false} />
          <VariantGrid variant="text" withDescription />
        </div>
        <div className="min-w-[1100px] space-y-10">
          <VariantGrid variant="button" withDescription={false} />
          <VariantGrid variant="button" withDescription />
        </div>
      </div>

      <section className="space-y-8">
        <h2 className="text-sm font-semibold text-foreground">Error state</h2>
        <div className="space-y-12 overflow-x-auto">
          <div className="min-w-[600px] space-y-10">
            <ErrorGrid variant="text" withDescription={false} />
            <ErrorGrid variant="text" withDescription />
          </div>
          <div className="min-w-[600px] space-y-10">
            <ErrorGrid variant="button" withDescription={false} />
            <ErrorGrid variant="button" withDescription />
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-sm font-semibold text-foreground">Interactive</h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-3 rounded-lg border border-border p-4">
            <p className="text-xs text-subtle-text">Text — select all (indeterminate)</p>
            <SelectAllGroup variant="text" />
          </div>

          <div className="space-y-3 rounded-lg border border-border p-4">
            <p className="text-xs text-subtle-text">Button — select all (indeterminate)</p>
            <SelectAllGroup variant="button" />
          </div>

          <div className="space-y-3 rounded-lg border border-border p-4">
            <p className="text-xs text-subtle-text">Text — individual controlled</p>
            <IndividualGroup variant="text" />
          </div>

          <div className="space-y-3 rounded-lg border border-border p-4">
            <p className="text-xs text-subtle-text">Button — individual controlled</p>
            <IndividualGroup variant="button" />
          </div>

          <ErrorInteractiveCard />
        </div>
      </section>
    </div>
  );
}
