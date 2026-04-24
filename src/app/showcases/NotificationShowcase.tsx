import { Gift } from "@phosphor-icons/react";
import { useState, useMemo } from "react";
import {
  Notification,
  type NotificationGroup,
} from "@/components/notification";

export function NotificationShowcase() {
  const [open, setOpen] = useState(false);

  const groups = useMemo<NotificationGroup[]>(
    () => [
      {
        label: "",
        items: [
          {
            id: "new-1",
            type: "icon",
            status: "new",
            title: "โอนหุ้นมาหยวนต้า เทรดฟรี ไม่มีค่าคอม",
            description:
              "ลูกค้าเปิดบัญชีใหม่และโอนหุ้นเข้าพอร์ตหยวนต้า มูลค่าขั้นต่ำ 1,000,000 บาท ภายใน 7 วันหลังเปิดบัญชีสำเร็จ ฟรีค่าธรรมเนียมการซื้อ-ขาย 5 วัน*",
            time: "01 Oct 2025 - 13:08",
            icon: <Gift size={20} />,
          },
          {
            type: "icon",
            id: "unread-1",
            status: "unread",
            title:
              "งานสัมมนา Healthcare Revolution: From Innovation to Investment",
            description:
              "ลงทะเบียนด่วน! ตั้งแต่วันที่ 9 - 22 ต.ค. 68 (จำนวนจำกัด 40 ที่นั่งเท่านั้น) กรอกฟอร์มเพื่อลงทะเบียนเข้าร่วมงาน หมายเหตุ: ผู้ได้รับสิทธิ์จะได้รับอีเมลพร้อม QRcode ยืนยันเข้างาน",
            time: "01 Oct 2025 - 13:08",
            icon: <Gift size={20} />,
          },
          {
            id: "read-1",
            type: "icon",
            status: "read",
            title:
              "งานสัมมนา Healthcare Revolution: From Innovation to Investment",
            description:
              "ลงทะเบียนด่วน! ตั้งแต่วันที่ 9 - 22 ต.ค. 68 (จำนวนจำกัด 40 ที่นั่งเท่านั้น) กรอกฟอร์มเพื่อลงทะเบียนเข้าร่วมงาน หมายเหตุ: ผู้ได้รับสิทธิ์จะได้รับอีเมลพร้อม QRcode ยืนยันเข้างาน",
            time: "01 Oct 2025 - 13:08",
            icon: <Gift size={20} />,
          },
          {
            id: "unread-2",
            type: "icon",
            status: "unread",
            title: "แจ้งเตือนสิทธิประโยชน์สำหรับลูกค้าใหม่",
            description:
              "โปรดตรวจสอบสิทธิพิเศษของบัญชีใหม่ในแอปภายใน 24 ชั่วโมง เพื่อไม่ให้พลาดข้อเสนอและแคมเปญประจำเดือน",
            time: "30 Sep 2025 - 09:42",
            icon: <Gift size={20} />,
          },
          {
            id: "read-2",
            type: "icon",
            status: "read",
            title: "ประกาศวันหยุดทำการตลาดหลักทรัพย์",
            description:
              "ระบบซื้อขายจะปิดให้บริการในวันหยุดนักขัตฤกษ์ตามประกาศตลาดหลักทรัพย์ โปรดวางแผนการลงทุนล่วงหน้า",
            time: "29 Sep 2025 - 16:20",
            icon: <Gift size={20} />,
          },
        ],
      },
    ],
    [],
  );

  return (
    <div className="min-h-screen bg-background px-6 py-8">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <div className="flex items-start justify-between gap-4 rounded-lg border border-border p-4">
          <div className="min-w-0">
            <h1 className="text-foreground">Notification Component</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              คลิกที่ badge เพื่อเปิด notification list ตาม Figma
              (ใหม่/ยังไม่อ่าน/อ่านแล้ว)
            </p>
          </div>

          <Notification
            open={open}
            onOpenChange={setOpen}
            groups={groups}
            showGroupLabels={false}
          />
        </div>
      </div>
    </div>
  );
}
