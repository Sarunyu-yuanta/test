import { useMemo } from "react";
import { Gift, Bell, ShoppingCart } from "@phosphor-icons/react";
import {
  Notification,
  type NotificationGroup,
  type NotificationItemStatus,
} from "@/components/notification";
import { ShowcasePage } from "../components/ShowcasePage";
import { ComponentPlayground } from "../components/ComponentPlayground";

const ALL_ITEMS = [
  {
    id: "1",
    type: "icon" as const,
    title: "โอนหุ้นมาหยวนต้า เทรดฟรี ไม่มีค่าคอม",
    description: "ลูกค้าเปิดบัญชีใหม่และโอนหุ้นเข้าพอร์ตหยวนต้า มูลค่าขั้นต่ำ 1,000,000 บาท ภายใน 7 วันหลังเปิดบัญชีสำเร็จ",
    time: "01 Oct 2025 - 13:08",
    icon: <Gift size={20} />,
    defaultStatus: "new" as NotificationItemStatus,
  },
  {
    id: "2",
    type: "icon" as const,
    title: "งานสัมมนา Healthcare Revolution: From Innovation to Investment",
    description: "ลงทะเบียนด่วน! ตั้งแต่วันที่ 9 - 22 ต.ค. 68 (จำนวนจำกัด 40 ที่นั่งเท่านั้น)",
    time: "01 Oct 2025 - 13:08",
    icon: <Bell size={20} />,
    defaultStatus: "unread" as NotificationItemStatus,
  },
  {
    id: "3",
    type: "icon" as const,
    title: "แจ้งเตือนสิทธิประโยชน์สำหรับลูกค้าใหม่",
    description: "โปรดตรวจสอบสิทธิพิเศษของบัญชีใหม่ในแอปภายใน 24 ชั่วโมง",
    time: "30 Sep 2025 - 09:42",
    icon: <ShoppingCart size={20} />,
    defaultStatus: "read" as NotificationItemStatus,
  },
  {
    id: "4",
    type: "icon" as const,
    title: "ประกาศวันหยุดทำการตลาดหลักทรัพย์",
    description: "ระบบซื้อขายจะปิดให้บริการในวันหยุดนักขัตฤกษ์ตามประกาศตลาดหลักทรัพย์",
    time: "29 Sep 2025 - 16:20",
    icon: <Bell size={20} />,
    defaultStatus: "read" as NotificationItemStatus,
  },
];

function NotificationPreview({
  status,
}: {
  status: "mixed" | NotificationItemStatus;
}) {
  const groups = useMemo<NotificationGroup[]>(() => {
    const items = ALL_ITEMS.map((item) => ({
      id: item.id,
      type: item.type,
      title: item.title,
      description: item.description,
      time: item.time,
      icon: item.icon,
      status: status === "mixed" ? item.defaultStatus : status,
    }));
    return [{ label: "", items }];
  }, [status]);

  return <Notification groups={groups} />;
}

export function NotificationShowcase() {
  return (
    <ShowcasePage
      name="Notification"
      description="คลิกที่ bell icon เพื่อเปิด notification list"
    >
      <ComponentPlayground
        
        controls={[
          {
            type: "select",
            key: "status",
            label: "Status",
            options: [
              { label: "mixed", value: "mixed" },
              { label: "new", value: "new" },
              { label: "unread", value: "unread" },
              { label: "read", value: "read" },
            ],
            defaultValue: "mixed",
          },
        ]}
        render={({ status }) => {
          const s = status as "mixed" | NotificationItemStatus;
          const statusPart = s !== "mixed" ? `\n    status: "${s}",` : "";
          return {
            preview: <NotificationPreview status={s} />,
            code: `<Notification\n  open={open}\n  onOpenChange={setOpen}\n  groups={[{\n    label: "",\n    items: [{\n      id: "1", type: "icon",${statusPart}\n      title: "...",\n      description: "...",\n      time: "01 Oct 2025 - 13:08",\n      icon: <Gift size={20} />,\n    }],\n  }]}\n/>`,
          };
        }}
      />
    </ShowcasePage>
  );
}
