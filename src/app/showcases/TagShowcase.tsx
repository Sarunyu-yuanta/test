import {
  Tag,
  type TagSize,
  type TagState,
  type TagVariant,
} from "@/components/tag";
import { ShowcasePage } from "../components/ShowcasePage";
import { ComponentPlayground } from "../components/ComponentPlayground";

export function TagShowcase() {
  return (
    <ShowcasePage
      name="Tag"
      description="Status tags and color variants with size × state × variant matrix."
    >
      <ComponentPlayground
        
        controls={[
          {
            type: "select",
            key: "variant",
            label: "Color",
            options: [
              { label: "blue", value: "blue" },
              { label: "green", value: "green" },
              { label: "yellow", value: "yellow" },
              { label: "red", value: "red" },
              { label: "gray", value: "gray" },
              { label: "lime", value: "lime" },
            ],
            defaultValue: "blue",
          },
          {
            type: "select",
            key: "size",
            label: "Size",
            options: [{ label: "large", value: "large" }, { label: "small", value: "small" }],
            defaultValue: "large",
          },
          {
            type: "select",
            key: "state",
            label: "State",
            options: [
              { label: "default", value: "default" },
              { label: "hover", value: "hover" },
              { label: "disabled", value: "disabled" },
            ],
            defaultValue: "default",
          },
          { type: "boolean", key: "icon", label: "Icon", defaultValue: false },
          { type: "boolean", key: "close", label: "Close btn", defaultValue: false },
        ]}
        render={({ variant, size, state, icon, close }) => {
          const st = state as TagState;
          const s = size as TagSize;
          const v = variant as TagVariant;
          const ic = icon as boolean;
          const cl = close as boolean;
          const statePart = st !== "default" ? `\n  state="${st}"` : "";
          const iconPart = ic ? "\n  icon" : "";
          const closePart = cl ? "\n  close" : "";
          return {
            preview: <Tag text="Tag" variant={v} size={s} state={st} icon={ic} close={cl} />,
            code: `<Tag\n  text="Tag"\n  variant="${v}"\n  size="${s}"${statePart}${iconPart}${closePart}\n/>`,
          };
        }}
      />
    </ShowcasePage>
  );
}
