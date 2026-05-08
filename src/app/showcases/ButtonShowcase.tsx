import { Button, ButtonLabelSize, ButtonVariant } from "@/components/button";
import { ShowcasePage } from "../components/ShowcasePage";
import { ComponentPlayground } from "../components/ComponentPlayground";
import { Circle } from "@phosphor-icons/react";

// ─── Icon pixel sizes per size token ─────────────────────────────────────────
const labelIconPx: Record<ButtonLabelSize, number> = {
  xs: 16, sm: 18, md: 18, lg: 20, xl: 20,
};

function LabelCircle({ size, color = "currentColor" }: { size: ButtonLabelSize; color?: string }) {
  return <Circle size={labelIconPx[size]} weight="regular" color={color} />;
}

// ─── Showcase ─────────────────────────────────────────────────────────────────
export function ButtonShowcase() {
  return (
    <ShowcasePage
      name="Button"
      description="Primary interaction element in five sizes and five variants with icon slot support."
    >
      <ComponentPlayground
        
        controls={[
          {
            type: "select",
            key: "variant",
            label: "Variant",
            options: [
              { label: "primary", value: "primary" },
              { label: "outline", value: "outline" },
              { label: "plain", value: "plain" },
              { label: "outline-black", value: "outline-black" },
              { label: "plain-black", value: "plain-black" },
            ],
            defaultValue: "primary",
          },
          {
            type: "select",
            key: "size",
            label: "Size",
            options: [
              { label: "xs", value: "xs" },
              { label: "sm", value: "sm" },
              { label: "md", value: "md" },
              { label: "lg", value: "lg" },
              { label: "xl", value: "xl" },
            ],
            defaultValue: "md",
          },
          {
            type: "select",
            key: "iconSlot",
            label: "Icon",
            options: [
              { label: "none", value: "none" },
              { label: "left", value: "left" },
              { label: "right", value: "right" },
            ],
            defaultValue: "none",
          },
          {
            type: "boolean",
            key: "disabled",
            label: "Disabled",
            defaultValue: false,
          },
        ]}
        render={({ variant, size, iconSlot, disabled }) => {
          const v = variant as ButtonVariant;
          const s = size as ButtonLabelSize;
          const isDisabled = disabled as boolean;
          const iconColor = v === "primary" && !isDisabled ? "white" : "var(--primary-action)";
          const leftIcon = iconSlot === "left" ? <LabelCircle size={s} color={iconColor} /> : undefined;
          const rightIcon = iconSlot === "right" ? <LabelCircle size={s} color={iconColor} /> : undefined;
          const iconPart = iconSlot === "left"
            ? `\n  leftIcon={<Icon size={${labelIconPx[s]}} />}`
            : iconSlot === "right"
            ? `\n  rightIcon={<Icon size={${labelIconPx[s]}} />}`
            : "";
          const disabledPart = isDisabled ? `\n  disabled` : "";
          return {
            preview: (
              <Button variant={v} size={s} leftIcon={leftIcon} rightIcon={rightIcon} disabled={isDisabled}>
                Button
              </Button>
            ),
            code: `<Button\n  variant="${v}"\n  size="${s}"${disabledPart}${iconPart}\n>\n  Button\n</Button>`,
          };
        }}
      />
    </ShowcasePage>
  );
}
