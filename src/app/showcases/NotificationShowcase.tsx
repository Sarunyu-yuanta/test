import { BellSimple, Circle } from "@phosphor-icons/react";
import { useMemo, useState } from "react";
import {
  Notification,
  type NotificationGroup,
  type NotificationItem,
} from "@/components/notification";

const MOCK_IMAGE =
  "https://images.unsplash.com/photo-1579033012653-3f0f7af55ce8?q=80&w=600&auto=format&fit=crop";

export function NotificationShowcase() {
  const [open, setOpen] = useState(false);

  const groups = useMemo<NotificationGroup[]>(
    () => [
      {
        label: "วันนี้",
        items: [
          {
            id: "today-1",
            type: "icon",
            unread: true,
            title: "Lorem ipsum dolor sit amet iuofseofv",
            description: "Ullamcorper faucibus nunc bibendum tincidunt aliquet in in ut.",
            time: "13:08",
            icon: <Circle size={20} />,
            actionLabel: "Button",
          },
          {
            id: "today-2",
            type: "image",
            unread: true,
            title: "Lorem ipsum dolor sit amet iuofseofv",
            description: "Aenean vitae eget ut in auctor rhoncus egestas cras.",
            time: "10:24",
            imageSrc: MOCK_IMAGE,
            actionLabel: "Button",
          },
        ],
      },
      {
        label: "เมื่อวาน",
        items: [
          {
            id: "yesterday-1",
            type: "icon",
            title: "Lorem ipsum dolor sit amet iuofseofv",
            description: "Ullamcorper faucibus nunc bibendum tincidunt aliquet in in ut.",
            time: "18:16",
            icon: <BellSimple size={20} />,
            actionLabel: "Button",
          },
          {
            id: "yesterday-2",
            type: "image",
            title: "Lorem ipsum dolor sit amet iuofseofv",
            description: "Aenean vitae eget ut in auctor rhoncus egestas cras.",
            time: "11:05",
            imageSrc: MOCK_IMAGE,
            actionLabel: "Button",
          },
        ],
      },
    ],
    [],
  );

  const unreadCount = useMemo(
    () =>
      groups.reduce(
        (acc, group) =>
          acc + group.items.filter((item) => Boolean(item.unread)).length,
        0,
      ),
    [groups],
  );

  return (
    <div className="min-h-screen bg-background px-6 py-8">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <div className="flex items-start justify-between gap-4 rounded-lg border border-border p-4">
          <div className="min-w-0">
            <h1 className="text-foreground">Notification Component</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              คลิกที่ badge เพื่อเปิด notification list และดูการคั่นตามวัน
            </p>
          </div>

          <Notification
            open={open}
            onOpenChange={setOpen}
            badgeCount={unreadCount}
            groups={groups}
          />
        </div>

        <div className="rounded-lg border border-border p-4">
          <p className="text-sm font-semibold text-foreground">States</p>
          <div className="mt-4 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Default</span>
              <Notification badgeCount={0} groups={[]} />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Unread</span>
              <Notification badgeCount={1} groups={groups} />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Count</span>
              <Notification badgeCount={12} groups={groups} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
