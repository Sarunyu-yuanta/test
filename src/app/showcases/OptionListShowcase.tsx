import { useState } from "react";
import { Circle } from "@phosphor-icons/react";
import { OptionList, type OptionItem } from "@/components/option-list";
import { ShowcasePage } from "../components/ShowcasePage";
import { ComponentPlayground } from "../components/ComponentPlayground";

function makeOptions(withIcon: boolean, total: number, allDisabled: boolean): OptionItem[] {
  return Array.from({ length: total }, (_, i) => ({
    label: `Option List ${i + 1}`,
    value: String(i + 1),
    disabled: allDisabled || i === 4,
    icon: withIcon ? <Circle size={20} weight="regular" /> : undefined,
  }));
}

function OptionListPreview({
  withIcon,
  multiSelect,
  total,
  allDisabled,
}: {
  withIcon: boolean;
  multiSelect: boolean;
  total: number;
  allDisabled: boolean;
}) {
  const [selected, setSelected] = useState("");
  const [selectedMulti, setSelectedMulti] = useState<string[]>([]);
  const options = makeOptions(withIcon, total, allDisabled);

  const handleToggle = (val: string) =>
    setSelectedMulti((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val],
    );

  return (
    <div className="w-[343px]">
      {multiSelect ? (
        <OptionList
          options={options}
          selectedValues={selectedMulti}
          onToggle={handleToggle}
        />
      ) : (
        <OptionList
          options={options}
          selectedValue={selected}
          onSelect={setSelected}
        />
      )}
    </div>
  );
}

export function OptionListShowcase() {
  return (
    <ShowcasePage
      name="Option List"
      description="Scrollable list of selectable items with optional icons, multi-select, and keyboard navigation."
    >
      <ComponentPlayground
        
        controls={[
          {
            type: "select",
            key: "total",
            label: "Total items",
            options: [
              { label: "0 (empty)", value: "0" },
              { label: "4", value: "4" },
              { label: "8", value: "8" },
              { label: "15", value: "15" },
            ],
            defaultValue: "8",
          },
          { type: "boolean", key: "icon", label: "Icon", defaultValue: false },
          { type: "boolean", key: "multi", label: "Multi-select", defaultValue: false },
          { type: "boolean", key: "disabled", label: "Disabled", defaultValue: false },
        ]}
        render={({ total, icon, multi, disabled }) => {
          const t = Number(total);
          const withIcon = icon as boolean;
          const isMulti = multi as boolean;
          const allDisabled = disabled as boolean;
          const iconPart = withIcon
            ? "\n  // each item: { label, value, icon: <Circle size={20} /> }"
            : "";
          const modePart = isMulti
            ? "\n  selectedValues={selected}\n  onToggle={handleToggle}"
            : "\n  selectedValue={selected}\n  onSelect={setSelected}";
          return {
            preview: <OptionListPreview withIcon={withIcon} multiSelect={isMulti} total={t} allDisabled={allDisabled} />,
            code: `<OptionList\n  options={options}${modePart}${iconPart}\n/>`,
          };
        }}
      />
    </ShowcasePage>
  );
}
