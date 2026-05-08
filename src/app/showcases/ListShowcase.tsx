import { Circle, Image as ImageIcon } from "@phosphor-icons/react";
import { List, ListItem } from "@/components/list";
import { Avatar } from "@/components/avatar";
import { ShowcasePage } from "../components/ShowcasePage";
import { ComponentPlayground } from "../components/ComponentPlayground";

const IMAGE_PLACEHOLDER = (
  <div className="size-8 shrink-0 rounded-md bg-bg-default-tertiary flex items-center justify-center overflow-hidden">
    <ImageIcon size={20} weight="regular" className="text-muted-foreground" />
  </div>
);

function makeLeading(type: string) {
  if (type === "avatar") return <Avatar type="placeholder" size="s" />;
  if (type === "image") return IMAGE_PLACEHOLDER;
  if (type === "icon") return <Circle size={20} weight="regular" className="text-muted-foreground" />;
  return undefined;
}

const ITEMS = ["Label", "Label", "Label"];

function ListPreview({
  leading,
  action,
  trailing,
}: {
  leading: string;
  action: boolean;
  trailing: boolean;
}) {
  const leadingNode = makeLeading(leading);
  const trailingNode = trailing ? <Circle size={20} weight="regular" /> : undefined;
  const actionLabel = action ? "Action" : undefined;

  return (
    <div className="w-[343px]">
      <List>
        {ITEMS.map((label, i) => (
          <ListItem
            key={i}
            label={label}
            leading={leadingNode}
            action={actionLabel}
            trailing={trailingNode}
            onClick={() => {}}
          />
        ))}
      </List>
    </div>
  );
}

export function ListShowcase() {
  return (
    <ShowcasePage
      name="List"
      description="Vertical list of labelled rows with optional leading slot, action link, and trailing slot. Press and hold to see the highlighted state."
    >
      <ComponentPlayground
        controls={[
          {
            type: "select",
            key: "leading",
            label: "Leading",
            options: [
              { label: "none", value: "none" },
              { label: "avatar", value: "avatar" },
              { label: "image", value: "image" },
              { label: "icon", value: "icon" },
            ],
            defaultValue: "none",
          },
          { type: "boolean", key: "action", label: "Action", defaultValue: false },
          { type: "boolean", key: "trailing", label: "Trailing", defaultValue: false },
        ]}
        render={({ leading, action, trailing }) => {
          const hasAction = action as boolean;
          const hasTrailing = trailing as boolean;
          const leadingStr = leading as string;

          const leadingCode =
            leadingStr === "avatar" ? `\n  leading={<Avatar type="placeholder" size="s" />}`
            : leadingStr === "image" ? `\n  leading={<ImageThumbnail />}`
            : leadingStr === "icon" ? `\n  leading={<Circle size={20} />}`
            : "";
          const actionPart = hasAction ? `\n  action="Action"` : "";
          const trailingPart = hasTrailing ? `\n  trailing={<Circle size={20} />}` : "";

          return {
            preview: (
              <ListPreview
                leading={leadingStr}
                action={hasAction}
                trailing={hasTrailing}
              />
            ),
            code: `<List>\n  <ListItem\n    label="Label"${leadingCode}${actionPart}${trailingPart}\n    onClick={handleClick}\n  />\n</List>`,
          };
        }}
      />
    </ShowcasePage>
  );
}
