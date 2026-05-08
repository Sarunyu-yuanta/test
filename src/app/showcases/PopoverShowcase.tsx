import { Button } from "@/components/button";
import { Popover } from "@/components/popover";
import { ShowcasePage } from "../components/ShowcasePage";
import { ComponentPlayground } from "../components/ComponentPlayground";

export function PopoverShowcase() {
  return (
    <ShowcasePage
      name="Popover"
      description="A floating panel that opens on click over any trigger. Supports four directions and three alignment positions."
    >
      <ComponentPlayground
        
        controls={[
          {
            type: "select",
            key: "side",
            label: "Side",
            options: [
              { label: "top", value: "top" },
              { label: "bottom", value: "bottom" },
              { label: "left", value: "left" },
              { label: "right", value: "right" },
            ],
            defaultValue: "bottom",
          },
          {
            type: "select",
            key: "align",
            label: "Align",
            options: [
              { label: "start", value: "start" },
              { label: "center", value: "center" },
              { label: "end", value: "end" },
            ],
            defaultValue: "center",
          },
        ]}
        render={({ side, align }) => ({
          preview: (
            <Popover
              side={side as any}
              align={align as any}
              content={
                <div className="flex flex-col gap-1 p-1">
                  <p className="text-sm font-medium text-foreground">Popover title</p>
                  <p className="text-xs text-muted-foreground">Click the button to open this popover.</p>
                </div>
              }
            >
              <Button variant="outline" size="md">Open popover</Button>
            </Popover>
          ),
          code: `<Popover\n  side="${side}"\n  align="${align}"\n  content={\n    <div>\n      <p>Popover title</p>\n      <p>Content goes here.</p>\n    </div>\n  }\n>\n  <Button variant="outline" size="md">Open popover</Button>\n</Popover>`,
        })}
      />
    </ShowcasePage>
  );
}
