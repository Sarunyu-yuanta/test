import { Checkbox, type CheckboxVariant } from "@/components/checkbox";

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

export function CheckboxShowcase() {
  return (
    <div className="bg-background min-h-full">
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
    </div>
  );
}
