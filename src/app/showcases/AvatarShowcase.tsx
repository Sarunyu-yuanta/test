import { Avatar } from "@/components/avatar";
import {
  AvatarStack,
  type AvatarStackItem,
  type AvatarStackSize,
} from "@/components/avatar-stack";
import { ShowcasePage } from "../components/ShowcasePage";
import { ComponentPlayground } from "../components/ComponentPlayground";

const PHOTOS = [
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
];

const INITIALS = ["Y", "A", "S", "O", "M", "W"];

function makeStackItems(type: string, count: number): AvatarStackItem[] {
  return Array.from({ length: count }, (_, i) => {
    if (type === "photo")
      return {
        type: "photo" as const,
        src: PHOTOS[i % PHOTOS.length],
        alt: `User ${i + 1}`,
      };
    if (type === "text")
      return { type: "text" as const, initials: INITIALS[i % INITIALS.length] };
    return { type: "placeholder" as const };
  });
}

function itemsToCode(items: AvatarStackItem[]): string {
  return items
    .map((item) => {
      if (item.type === "photo")
        return `    { type: "photo", src: "https://...", alt: "User" },`;
      if (item.type === "text")
        return `    { type: "text", initials: "${item.initials}" },`;
      return `    { type: "placeholder" },`;
    })
    .join("\n");
}

export function AvatarShowcase() {
  return (
    <ShowcasePage
      name="Avatar"
      description="Three types (photo, placeholder, text) across seven sizes with an optional status indicator."
    >
      {/* Single Avatar */}
      <ComponentPlayground
        title="Avatar"
        controls={[
          {
            type: "select",
            key: "type",
            label: "Type",
            options: [
              { label: "photo", value: "photo" },
              { label: "placeholder", value: "placeholder" },
              { label: "text", value: "text" },
            ],
            defaultValue: "photo",
          },
          {
            type: "select",
            key: "size",
            label: "Size",
            options: [
              { label: "xxs", value: "xxs" },
              { label: "xs", value: "xs" },
              { label: "s", value: "s" },
              { label: "m", value: "m" },
              { label: "l", value: "l" },
              { label: "xl", value: "xl" },
              { label: "xxl", value: "xxl" },
            ],
            defaultValue: "m",
          },
          {
            type: "boolean",
            key: "status",
            label: "Status dot",
            defaultValue: false,
          },
        ]}
        render={({ type, size, status }) => {
          const t = type as "photo" | "placeholder" | "text";
          const s = size as any;
          const st = status as boolean;
          const preview =
            t === "photo" ? (
              <Avatar
                type="photo"
                size={s}
                src={PHOTOS[0]}
                alt="User"
                status={st}
              />
            ) : t === "text" ? (
              <Avatar type="text" size={s} initials="Y" status={st} />
            ) : (
              <Avatar type="placeholder" size={s} status={st} />
            );
          const code =
            t === "photo"
              ? `<Avatar type="photo" size="${s}" src="https://..." alt="User"${st ? " status" : ""} />`
              : t === "text"
                ? `<Avatar type="text" size="${s}" initials="Y"${st ? " status" : ""} />`
                : `<Avatar type="placeholder" size="${s}"${st ? " status" : ""} />`;
          return { preview, code };
        }}
      />

      {/* Avatar Stack */}
      <ComponentPlayground
        title="Avatar Stack"
        controls={[
          {
            type: "select",
            key: "type",
            label: "Type",
            options: [
              { label: "photo", value: "photo" },
              { label: "placeholder", value: "placeholder" },
              { label: "text", value: "text" },
            ],
            defaultValue: "photo",
          },
          {
            type: "select",
            key: "size",
            label: "Size",
            options: [
              { label: "small", value: "small" },
              { label: "medium", value: "medium" },
              { label: "large", value: "large" },
            ],
            defaultValue: "large",
          },
          {
            type: "select",
            key: "max",
            label: "Max visible",
            options: [
              { label: "3", value: "3" },
              { label: "4", value: "4" },
              { label: "5", value: "5" },
              { label: "6", value: "6" },
            ],
            defaultValue: "5",
          },
        ]}
        render={({ type, size, max }) => {
          const t = type as string;
          const s = size as AvatarStackSize;
          const m = Number(max);
          const items = makeStackItems(t, 6);
          const sizePart = s !== "small" ? `\n  size="${s}"` : "";
          const maxPart = m !== 5 ? `\n  max={${m}}` : "";
          return {
            preview: <AvatarStack items={items} size={s} max={m} />,
            code: `<AvatarStack${sizePart}${maxPart}\n  items={[\n${itemsToCode(items.slice(0, m))}\n  ]}\n/>`,
          };
        }}
      />
    </ShowcasePage>
  );
}
