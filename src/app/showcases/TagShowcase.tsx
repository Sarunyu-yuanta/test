import {
  StatusTag,
  Tag,
  type StatusTagType,
  type TagSize,
  type TagState,
  type TagVariant,
} from "@/components/tag";

const sizes: TagSize[] = ["large", "small"];
const states: { label: string; value: TagState }[] = [
  { label: "Default", value: "default" },
  { label: "Hover/Pressed", value: "hover" },
  { label: "Disable", value: "disabled" },
];

const variants: {
  key: string;
  label: string;
  icon: boolean;
  close: boolean;
}[] = [
  { key: "text", label: "Text", icon: false, close: false },
  { key: "icon", label: "Icon", icon: true, close: false },
  { key: "close", label: "Close", icon: false, close: true },
];

const colorVariants: { label: string; value: TagVariant }[] = [
  { label: "Blue", value: "blue" },
  { label: "Green", value: "green" },
  { label: "Yellow", value: "yellow" },
  { label: "Red", value: "red" },
  { label: "Gray", value: "gray" },
  { label: "Lime", value: "lime" },
];

const statusTagTypes: StatusTagType[] = ["stop", "success", "hold", "processing", "error"];

export function TagShowcase() {
  return (
    <div className="bg-background min-h-full">
      <h1 className="mb-1">Tag Component</h1>
      <p className="text-muted-foreground mb-10">Size x State x Variant</p>

      <section className="mb-12">
        <h2 className="mb-5 text-[18px]">Status Tag (Figma)</h2>
        <div className="flex flex-wrap items-center gap-8">
          {statusTagTypes.map((type) => (
            <StatusTag key={type} type={type} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-5 text-[18px]">Figma Color Variants</h2>
        <div className="flex flex-wrap gap-4">
          {colorVariants.map((variant) => (
            <Tag key={variant.value} text={variant.label} variant={variant.value} />
          ))}
        </div>
      </section>

      {sizes.map((size) => (
        <section key={size} className="mb-12">
          <h2 className="mb-5 text-[18px]">
            {size === "large" ? "Large" : "Small"}
          </h2>

          <div className="grid grid-cols-4 gap-x-8 gap-y-4 mb-4">
            <div />
            {states.map((state) => (
              <p
                key={`${size}-${state.value}-header`}
                className="text-[12px] text-muted-foreground uppercase tracking-wider"
              >
                {state.label}
              </p>
            ))}
          </div>

          {variants.map((variant) => (
            <div key={`${size}-${variant.key}`} className="grid grid-cols-4 gap-x-8 items-center mb-4">
              <p className="text-[13px] text-muted-foreground">{variant.label}</p>
              {states.map((state) => (
                <div key={`${size}-${variant.key}-${state.value}`} className="flex items-center">
                  <Tag
                    text="Tag"
                    size={size}
                    state={state.value}
                    icon={variant.icon}
                    close={variant.close}
                  />
                </div>
              ))}
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
