import { useState } from "react";
import { SearchInput } from "@/components/search-input";
import { ShowcasePage } from "../components/ShowcasePage";
import { ComponentPlayground } from "../components/ComponentPlayground";

function SearchInputPreview({ size }: { size: "lg" | "sm" }) {
  const [value, setValue] = useState("");
  return (
    <div className="w-[280px]">
      <SearchInput
        value={value}
        onChange={setValue}
        placeholder="Search..."
        size={size}
      />
    </div>
  );
}

export function SearchInputShowcase() {
  return (
    <ShowcasePage
      name="Search Input"
      description="Search field with optional dropdown autocomplete and keyboard navigation."
    >
      <ComponentPlayground
        
        controls={[
          {
            type: "select",
            key: "size",
            label: "Size",
            options: [
              { label: "lg", value: "lg" },
              { label: "sm", value: "sm" },
            ],
            defaultValue: "lg",
          },
        ]}
        render={({ size }) => {
          const s = size as "lg" | "sm";
          const sizePart = s !== "lg" ? `\n  size="${s}"` : "";
          return {
            preview: <SearchInputPreview size={s} />,
            code: `const [search, setSearch] = useState("")\n\n<SearchInput\n  value={search}\n  onChange={setSearch}\n  placeholder="Search..."${sizePart}\n/>`,
          };
        }}
      />
    </ShowcasePage>
  );
}
