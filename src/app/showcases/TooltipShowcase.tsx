import { Button } from "@/components/button";
import { Tooltip } from "@/components/tooltip";

const LOREM =
  "Lorem ipsum dolor sit amet consectetur. Auctor et pellentesque sit fermentum ac quis adipiscing.";

export function TooltipShowcase() {
  return (
    <div className="min-h-screen bg-background px-6 py-8">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        <div>
          <h1 className="text-foreground">Tooltip Component</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Contextual information bubble shown on hover. Supports four
            directions and three alignment positions.
          </p>
        </div>

        {/* Side variants — top */}
        <section className="rounded-lg border border-border p-4">
          <p className="mb-6 text-sm font-semibold text-foreground">
            Direction: Top
          </p>
          <div className="flex flex-wrap items-end gap-6">
            <div className="flex flex-col items-center gap-2">
              <p className="text-xs text-muted-foreground">align=start</p>
              <Tooltip content={LOREM} side="top" align="start">
                <Button variant="outline" size="md">
                  Hover me
                </Button>
              </Tooltip>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-xs text-muted-foreground">align=center</p>
              <Tooltip content={LOREM} side="top" align="center">
                <Button variant="outline" size="md">
                  Hover me
                </Button>
              </Tooltip>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-xs text-muted-foreground">align=end</p>
              <Tooltip content={LOREM} side="top" align="end">
                <Button variant="outline" size="md">
                  Hover me
                </Button>
              </Tooltip>
            </div>
          </div>
        </section>

        {/* Side variants — bottom */}
        <section className="rounded-lg border border-border p-4">
          <p className="mb-6 text-sm font-semibold text-foreground">
            Direction: Bottom
          </p>
          <div className="flex flex-wrap items-start gap-6">
            <div className="flex flex-col items-center gap-2">
              <Tooltip content={LOREM} side="bottom" align="start">
                <Button variant="outline" size="md">
                  Hover me
                </Button>
              </Tooltip>
              <p className="text-xs text-muted-foreground">align=start</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Tooltip content={LOREM} side="bottom" align="center">
                <Button variant="outline" size="md">
                  Hover me
                </Button>
              </Tooltip>
              <p className="text-xs text-muted-foreground">align=center</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Tooltip content={LOREM} side="bottom" align="end">
                <Button variant="outline" size="md">
                  Hover me
                </Button>
              </Tooltip>
              <p className="text-xs text-muted-foreground">align=end</p>
            </div>
          </div>
        </section>

        {/* Side variants — left & right */}
        <section className="rounded-lg border border-border p-4">
          <p className="mb-6 text-sm font-semibold text-foreground">
            Direction: Left / Right
          </p>
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <p className="text-xs text-muted-foreground">side=left</p>
              <Tooltip content={LOREM} side="left" align="center">
                <Button variant="outline" size="md">
                  Hover me
                </Button>
              </Tooltip>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-xs text-muted-foreground">side=right</p>
              <Tooltip content={LOREM} side="right" align="center">
                <Button variant="outline" size="md">
                  Hover me
                </Button>
              </Tooltip>
            </div>
          </div>
        </section>

        {/* Short label example */}
        <section className="rounded-lg border border-border p-4">
          <p className="mb-6 text-sm font-semibold text-foreground">
            Short label content
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Tooltip content="Save changes" side="top">
              <Button variant="primary" size="md">
                Save
              </Button>
            </Tooltip>
            <Tooltip content="Discard all unsaved changes" side="top">
              <Button variant="outline" size="md">
                Cancel
              </Button>
            </Tooltip>
            <Tooltip content="Permanently delete this record" side="top">
              <Button variant="plain" size="md">
                Delete
              </Button>
            </Tooltip>
          </div>
        </section>

        {/* No delay example */}
        <section className="rounded-lg border border-border p-4">
          <p className="mb-2 text-sm font-semibold text-foreground">
            delayDuration=0
          </p>
          <p className="mb-4 text-xs text-muted-foreground">
            Tooltip appears immediately on hover, no delay.
          </p>
          <Tooltip content="Appears immediately" side="top" delayDuration={0}>
            <Button variant="outline" size="md">
              Instant tooltip
            </Button>
          </Tooltip>
        </section>

        {/* Props reference */}
        <section className="rounded-lg border border-border p-4">
          <p className="mb-2 text-sm font-semibold text-foreground">Props</p>
          <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-2 pr-4 text-left text-muted-foreground">
                    Prop
                  </th>
                  <th className="py-2 pr-4 text-left text-muted-foreground">
                    Type
                  </th>
                  <th className="py-2 pr-4 text-left text-muted-foreground">
                    Default
                  </th>
                  <th className="py-2 text-left text-muted-foreground">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-2 pr-4 font-mono text-foreground">
                    children
                  </td>
                  <td className="py-2 pr-4 font-mono text-muted-foreground">
                    ReactNode
                  </td>
                  <td className="py-2 pr-4 text-muted-foreground">—</td>
                  <td className="py-2 text-muted-foreground">
                    The trigger element that activates the tooltip on hover.
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-foreground">
                    content
                  </td>
                  <td className="py-2 pr-4 font-mono text-muted-foreground">
                    ReactNode
                  </td>
                  <td className="py-2 pr-4 text-muted-foreground">—</td>
                  <td className="py-2 text-muted-foreground">
                    Content rendered inside the tooltip bubble.
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-foreground">side</td>
                  <td className="py-2 pr-4 font-mono text-muted-foreground">
                    "top" | "bottom" | "left" | "right"
                  </td>
                  <td className="py-2 pr-4 text-muted-foreground">"top"</td>
                  <td className="py-2 text-muted-foreground">
                    Which side of the trigger the tooltip appears on.
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-foreground">
                    align
                  </td>
                  <td className="py-2 pr-4 font-mono text-muted-foreground">
                    "start" | "center" | "end"
                  </td>
                  <td className="py-2 pr-4 text-muted-foreground">"center"</td>
                  <td className="py-2 text-muted-foreground">
                    Alignment of the tooltip relative to the trigger edge.
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-foreground">
                    delayDuration
                  </td>
                  <td className="py-2 pr-4 font-mono text-muted-foreground">
                    number
                  </td>
                  <td className="py-2 pr-4 text-muted-foreground">300</td>
                  <td className="py-2 text-muted-foreground">
                    Delay in ms before the tooltip appears on hover.
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-foreground">
                    sideOffset
                  </td>
                  <td className="py-2 pr-4 font-mono text-muted-foreground">
                    number
                  </td>
                  <td className="py-2 pr-4 text-muted-foreground">6</td>
                  <td className="py-2 text-muted-foreground">
                    Gap in px between the trigger and tooltip bubble.
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-foreground">
                    className
                  </td>
                  <td className="py-2 pr-4 font-mono text-muted-foreground">
                    string?
                  </td>
                  <td className="py-2 pr-4 text-muted-foreground">—</td>
                  <td className="py-2 text-muted-foreground">
                    Extra classes applied to the tooltip content bubble.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
