import { Avatar } from "@/components/avatar";
import { ShowcasePage } from "../components/ShowcasePage";
import { ComponentPlayground } from "../components/ComponentPlayground";

const PHOTOS = [
  "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200&h=200&fit=crop&crop=face",
];

export function AvatarShowcase() {
  return (
    <ShowcasePage
      name="Avatar"
      description="Three types (photo, placeholder, text) across seven sizes with an optional status indicator."
    >
      <ComponentPlayground
        
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
          { type: "boolean", key: "status", label: "Status dot", defaultValue: false },
        ]}
        render={({ type, size, status }) => {
          const t = type as "photo" | "placeholder" | "text";
          const s = size as any;
          const st = status as boolean;
          const preview =
            t === "photo" ? (
              <Avatar type="photo" size={s} src={PHOTOS[0]} alt="User" status={st} />
            ) : t === "text" ? (
              <Avatar type="text" size={s} initials="YS" status={st} />
            ) : (
              <Avatar type="placeholder" size={s} status={st} />
            );
          const code =
            t === "photo"
              ? `<Avatar type="photo" size="${s}" src="https://..." alt="User"${st ? " status" : ""} />`
              : t === "text"
              ? `<Avatar type="text" size="${s}" initials="YS"${st ? " status" : ""} />`
              : `<Avatar type="placeholder" size="${s}"${st ? " status" : ""} />`;
          return { preview, code };
        }}
      />
    </ShowcasePage>
  );
}
