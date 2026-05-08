import { Button } from "@/components/button";
import { Tooltip } from "@/components/tooltip";
import { ShowcasePage } from "../components/ShowcasePage";
import { ComponentPlayground } from "../components/ComponentPlayground";

export function TooltipShowcase() {
  return (
    <ShowcasePage
      name="Tooltip"
      description="Contextual information bubble shown on hover. Supports four directions and three alignment positions."
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
            defaultValue: "top",
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
          {
            type: "select",
            key: "delay",
            label: "Delay",
            options: [
              { label: "300ms (default)", value: "300" },
              { label: "0ms (instant)", value: "0" },
              { label: "700ms (slow)", value: "700" },
            ],
            defaultValue: "300",
          },
        ]}
        render={({ side, align, delay }) => {
          const delayNum = Number(delay);
          const delayPart = delayNum !== 300 ? `\n  delayDuration={${delayNum}}` : "";
          return {
            preview: (
              <Tooltip
                content="Helpful tooltip content that provides context."
                side={side as any}
                align={align as any}
                delayDuration={delayNum}
              >
                <Button variant="outline" size="md">Hover me</Button>
              </Tooltip>
            ),
            code: `<Tooltip\n  content="Helpful tooltip content."\n  side="${side}"\n  align="${align}"${delayPart}\n>\n  <Button variant="outline" size="md">Hover me</Button>\n</Tooltip>`,
          };
        }}
      />
    </ShowcasePage>
  );
}
