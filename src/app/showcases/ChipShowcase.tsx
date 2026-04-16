import { Chip, type ChipSize, type ChipType } from "@/components/chip";

const sizes: ChipSize[] = ["large", "medium", "small"];

const states: {
  key: string;
  label: string;
  selected: boolean;
  disabled: boolean;
}[] = [
  { key: "default", label: "Default", selected: false, disabled: false },
  { key: "disabled", label: "Disabled", selected: false, disabled: true },
  { key: "selected", label: "Selected", selected: true, disabled: false },
  { key: "selected-disabled", label: "Selected + Disabled", selected: true, disabled: true },
];

const types: { key: ChipType; label: string }[] = [
  { key: "single", label: "Single Select" },
  { key: "multiple", label: "Multiple Select" },
];

export function ChipShowcase() {
  return (
    <div className="bg-white min-h-full">
      <h1 className="mb-1">Chip Component</h1>
      <p className="text-muted-foreground mb-10">Type x Size x State</p>

      {types.map((chipType) => (
        <section key={chipType.key} className="mb-12">
          <h2 className="mb-5 text-[18px]">{chipType.label}</h2>

          {sizes.map((size) => (
            <div key={`${chipType.key}-${size}`} className="mb-6">
              <p className="mb-3 text-[12px] uppercase tracking-wider text-muted-foreground">
                {size}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                {states.map((state) => (
                  <div key={`${chipType.key}-${size}-${state.key}`} className="flex items-center gap-2">
                    <Chip
                      type={chipType.key}
                      size={size}
                      selected={state.selected}
                      disabled={state.disabled}
                    />
                    <span className="text-[11px] text-muted-foreground">{state.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
