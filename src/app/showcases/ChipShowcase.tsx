import { useState } from "react";
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

const demoLabels = ["Technology", "Design", "Finance", "Marketing", "Engineering", "Product"];

function SingleSelectDemo({ size }: { size: ChipSize }) {
  const [selected, setSelected] = useState<string | null>("Design");

  return (
    <div className="flex flex-wrap gap-2">
      {demoLabels.map((label) => (
        <Chip
          key={label}
          type="single"
          size={size}
          label={label}
          selected={selected === label}
          onClick={() => setSelected(selected === label ? null : label)}
        />
      ))}
    </div>
  );
}

function MultipleSelectDemo({ size }: { size: ChipSize }) {
  const [selected, setSelected] = useState<Set<string>>(new Set(["Design", "Product"]));

  const toggle = (label: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(label) ? next.delete(label) : next.add(label);
      return next;
    });
  };

  return (
    <div className="flex flex-wrap gap-2">
      {demoLabels.map((label) => (
        <Chip
          key={label}
          type="multiple"
          size={size}
          label={label}
          selected={selected.has(label)}
          onClick={() => toggle(label)}
        />
      ))}
    </div>
  );
}

function InteractiveSection() {
  const [activeSize, setActiveSize] = useState<ChipSize>("large");

  return (
    <section className="mb-12">
      <h2 className="mb-1 text-[18px]">Interactive</h2>
      <p className="mb-5 text-xs text-muted-foreground">Click chips to toggle selection state</p>

      <div className="mb-6 flex items-center gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setActiveSize(size)}
            className={`rounded-full border px-3 py-1 text-xs capitalize transition-colors ${
              activeSize === size
                ? "border-primary-action bg-primary-action text-on-primary-action"
                : "border-border bg-background text-subtle-text hover:border-primary-action"
            }`}
          >
            {size}
          </button>
        ))}
      </div>

      <div className="space-y-6 rounded-xl border border-border p-6">
        <div>
          <p className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">
            Single Select
          </p>
          <SingleSelectDemo size={activeSize} />
        </div>

        <div className="border-t border-border" />

        <div>
          <p className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">
            Multiple Select
          </p>
          <MultipleSelectDemo size={activeSize} />
        </div>

        <div className="border-t border-border" />

        <div>
          <p className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">
            Disabled
          </p>
          <div className="flex flex-wrap gap-2">
            {demoLabels.map((label, i) => (
              <Chip
                key={label}
                type={i % 2 === 0 ? "single" : "multiple"}
                size={activeSize}
                label={label}
                selected={i % 3 === 0}
                disabled
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ChipShowcase() {
  return (
    <div className="bg-background min-h-full">
      <h1 className="mb-1">Chip Component</h1>
      <p className="text-muted-foreground mb-10">Type x Size x State</p>

      <InteractiveSection />

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
