import { useState } from "react";
import { TabGroup, type TabSize, type TabItem } from "@/components/tab";
import { ShowcasePage } from "../components/ShowcasePage";
import { ComponentPlayground } from "../components/ComponentPlayground";

const BASE_TABS: TabItem[] = [
  { id: "overview", title: "Overview" },
  { id: "analytics", title: "Analytics" },
  { id: "reports", title: "Reports" },
];

function TabGroupPreview({
  size,
  disabled,
  icon,
  notification,
}: {
  size: TabSize;
  disabled: boolean;
  icon: boolean;
  notification?: number;
}) {
  const [active, setActive] = useState("overview");

  const items: TabItem[] = BASE_TABS.map((tab) => ({
    ...tab,
    disabled,
    icon: icon ? true : undefined,
    notification: tab.id === "overview" ? notification : undefined,
  }));

  return <TabGroup size={size} items={items} activeId={active} onChange={setActive} />;
}

export function TabShowcase() {
  return (
    <ShowcasePage
      name="Tab"
      description="Navigation tabs in three sizes with optional icon and notification badge."
    >
      <ComponentPlayground
        
        controls={[
          {
            type: "select",
            key: "size",
            label: "Size",
            options: [
              { label: "lg", value: "lg" },
              { label: "md", value: "md" },
              { label: "sm", value: "sm" },
            ],
            defaultValue: "lg",
          },
          { type: "boolean", key: "disabled", label: "Disabled", defaultValue: false },
          { type: "boolean", key: "icon", label: "Icon", defaultValue: false },
          { type: "boolean", key: "notification", label: "Notification badge", defaultValue: false },
        ]}
        render={({ size, disabled, icon, notification }) => {
          const s = size as TabSize;
          const d = disabled as boolean;
          const ic = icon as boolean;
          const notif = (notification as boolean) ? 3 : undefined;
          const disabledPart = d ? "\n  disabled" : "";
          const iconPart = ic ? "\n  icon" : "";
          const notifPart = notif ? `\n  notification={${notif}}` : "";
          return {
            preview: (
              <TabGroupPreview size={s} disabled={d} icon={ic} notification={notif} />
            ),
            code: `const [active, setActive] = useState("overview")\n\n<TabGroup\n  size="${s}"\n  activeId={active}\n  onChange={setActive}\n  items={[\n    { id: "overview", title: "Overview"${disabledPart}${iconPart}${notifPart} },\n    { id: "analytics", title: "Analytics"${disabledPart}${iconPart} },\n    { id: "reports", title: "Reports"${disabledPart}${iconPart} },\n  ]}\n/>`,
          };
        }}
      />
    </ShowcasePage>
  );
}
