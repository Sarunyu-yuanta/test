import { Badge } from "@/components/badge";
import { ShowcasePage } from "../components/ShowcasePage";
import { ComponentPlayground } from "../components/ComponentPlayground";

export function BadgeShowcase() {
  return (
    <ShowcasePage
      name="Badge"
      description="Variant: `notification` และ `button`"
    >
      <ComponentPlayground
        
        controls={[
          {
            type: "select",
            key: "variant",
            label: "Variant",
            options: [
              { label: "notification", value: "notification" },
              { label: "button", value: "button" },
            ],
            defaultValue: "notification",
          },
          {
            type: "select",
            key: "notificationState",
            label: "State",
            options: [
              { label: "default", value: "default" },
              { label: "active", value: "active" },
              { label: "noti", value: "noti" },
            ],
            defaultValue: "noti",
            visible: (v) => v.variant === "notification",
          },
          {
            type: "select",
            key: "count",
            label: "Count",
            options: [
              { label: "0", value: "0" },
              { label: "1", value: "1" },
              { label: "5", value: "5" },
              { label: "12", value: "12" },
              { label: "99", value: "99" },
            ],
            defaultValue: "5",
          },
          { type: "boolean", key: "iconOnly",   label: "Icon only",   defaultValue: false, visible: (v) => v.variant === "button" },
          { type: "boolean", key: "showLabel",  label: "Show label",  defaultValue: false, visible: (v) => v.variant === "button" },
        ]}
        render={({ variant, notificationState, count, iconOnly, showLabel }) => {
          const c = Number(count);
          const isNotif = variant === "notification";
          const preview = isNotif ? (
            <Badge variant="notification" notificationState={notificationState as any} count={c} />
          ) : (
            <Badge
              variant="button"
              iconOnly={iconOnly as boolean}
              label={(showLabel as boolean) ? "Filter" : undefined}
              count={c}
            />
          );
          const code = isNotif
            ? `<Badge\n  variant="notification"\n  notificationState="${notificationState}"\n  count={${c}}\n/>`
            : `<Badge\n  variant="button"${iconOnly ? "\n  iconOnly" : ""}${showLabel ? '\n  label="Filter"' : ""}\n  count={${c}}\n/>`;
          return { preview, code };
        }}
      />
    </ShowcasePage>
  );
}
