import { useState } from "react";
import { Checkbox, type CheckboxChecked, type CheckboxVariant } from "@/components/checkbox";
import { ShowcasePage } from "../components/ShowcasePage";
import { ComponentBlock } from "../components/ComponentBlock";
import { ComponentPlayground } from "../components/ComponentPlayground";

function CheckboxPreview({
  variant,
  disabled,
  error,
  indeterminate,
  description,
}: {
  variant: CheckboxVariant;
  disabled: boolean;
  error: boolean;
  indeterminate: boolean;
  description?: string;
}) {
  const [checked, setChecked] = useState<CheckboxChecked>(false);
  const displayChecked: CheckboxChecked = indeterminate ? "indeterminate" : checked;
  return (
    <Checkbox
      variant={variant}
      checked={displayChecked}
      disabled={disabled}
      error={error}
      errorMessage="This field is required"
      label="Accept terms"
      description={description}
      onChange={(val) => {
        if (!indeterminate) setChecked(val as boolean);
      }}
    />
  );
}

const MULTI_ITEMS = ["Option A", "Option B", "Option C", "Option D"] as const;

function MultiCheckboxPreview({ variant }: { variant: CheckboxVariant }) {
  const [checked, setChecked] = useState<boolean[]>(MULTI_ITEMS.map(() => false));

  const allChecked = checked.every(Boolean);
  const someChecked = checked.some(Boolean);
  const parentState: CheckboxChecked = allChecked ? true : someChecked ? "indeterminate" : false;

  const toggleAll = () => {
    setChecked(MULTI_ITEMS.map(() => !allChecked));
  };

  const toggleItem = (i: number) => {
    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  };

  return (
    <div className="flex flex-col gap-3 min-w-[200px]">
      <Checkbox
        variant={variant}
        label="Select all"
        checked={parentState}
        onChange={toggleAll}
      />
      <div className="border-t border-border" />
      {MULTI_ITEMS.map((item, i) => (
        <Checkbox
          key={item}
          variant={variant}
          label={item}
          checked={checked[i]}
          onChange={() => toggleItem(i)}
        />
      ))}
    </div>
  );
}

export function CheckboxShowcase() {
  return (
    <ShowcasePage
      name="Checkbox"
      description="Text and button variants with indeterminate state and error handling."
    >
      <ComponentPlayground
        
        controls={[
          {
            type: "select",
            key: "variant",
            label: "Variant",
            options: [{ label: "text", value: "text" }, { label: "button", value: "button" }],
            defaultValue: "text",
          },
          { type: "boolean", key: "indeterminate", label: "Indeterminate", defaultValue: false },
          { type: "boolean", key: "disabled", label: "Disabled", defaultValue: false },
          { type: "boolean", key: "error", label: "Error", defaultValue: false },
          { type: "boolean", key: "hasDesc", label: "Show description", defaultValue: false },
        ]}
        render={({ variant, indeterminate, disabled, error, hasDesc }) => {
          const v = variant as CheckboxVariant;
          const ind = indeterminate as boolean;
          const d = disabled as boolean;
          const e = error as boolean;
          const description = (hasDesc as boolean) ? "Lorem ipsum dolor sit amet consectetur." : undefined;
          const descPart = description ? `\n  description="${description}"` : "";
          const disabledPart = d ? "\n  disabled" : "";
          const errorPart = e ? '\n  error\n  errorMessage="This field is required"' : "";
          const checkedStr = ind ? `"indeterminate"` : `{checked}`;
          return {
            preview: (
              <CheckboxPreview
                variant={v}
                disabled={d}
                error={e}
                indeterminate={ind}
                description={description}
              />
            ),
            code: `const [checked, setChecked] = useState(false)\n\n<Checkbox\n  variant="${v}"\n  checked={${checkedStr}}\n  label="Accept terms"${disabledPart}${errorPart}${descPart}\n  onChange={setChecked}\n/>`,
          };
        }}
      />

      <ComponentBlock
        title="Multi-select group"
        codeTabs={[
          {
            label: "example",
            code: `const items = ["Option A", "Option B", "Option C", "Option D"]\nconst [checked, setChecked] = useState(items.map(() => false))\n\nconst allChecked = checked.every(Boolean)\nconst someChecked = checked.some(Boolean)\nconst parentState = allChecked ? true : someChecked ? "indeterminate" : false\n\n<Checkbox\n  label="Select all"\n  checked={parentState}\n  onChange={() => setChecked(items.map(() => !allChecked))}\n/>\n{items.map((item, i) => (\n  <Checkbox\n    key={item}\n    label={item}\n    checked={checked[i]}\n    onChange={() => setChecked(prev => prev.map((v, idx) => idx === i ? !v : v))}\n  />\n))}`,
          },
        ]}
      >
        <div className="flex gap-10">
          <div>
            <p className="text-[11px] text-caption uppercase tracking-wider mb-3">text</p>
            <MultiCheckboxPreview variant="text" />
          </div>
          <div>
            <p className="text-[11px] text-caption uppercase tracking-wider mb-3">button</p>
            <MultiCheckboxPreview variant="button" />
          </div>
        </div>
      </ComponentBlock>
    </ShowcasePage>
  );
}
