import { type AlertStatus, Alert } from "@/components/alert";

const ONE_LINE_MESSAGE = "Text message Lorem text mockup designsystem";
const TWO_LINE_MESSAGE = "Text message Lorem text mockup designsystem";
const STATUSES: AlertStatus[] = [
  "normal",
  "information",
  "success",
  "warning",
  "critical",
];

export function AlertShowcase() {
  return (
    <div className="min-h-screen bg-background px-6 py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <div>
          <h1 className="text-foreground">Alert Component</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Inline message สำหรับใช้งานใน form หรือ section, อยู่ใน flow ของ layout และไม่หายเอง
          </p>
        </div>

        <section className="rounded-lg border border-border p-4">
          <p className="text-sm font-semibold text-foreground">Figma Variants</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-2">
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">1 line</p>
              {STATUSES.map((status) => (
                <Alert
                  key={`one-${status}`}
                  status={status}
                  message={ONE_LINE_MESSAGE}
                  className="max-w-[295px]"
                />
              ))}
            </div>

            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">2 line</p>
              {STATUSES.map((status) => (
                <Alert
                  key={`two-${status}`}
                  status={status}
                  multiline
                  message={TWO_LINE_MESSAGE}
                  className="max-w-[289px]"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-lg border border-border p-4">
          <p className="text-sm font-semibold text-foreground">Usage in Form / Section</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-md border border-divider p-4">
              <p className="text-sm text-foreground">Payment details</p>
              <div className="mt-3">
                <Alert
                  status="information"
                  message="กรุณาตรวจสอบข้อมูลบัตรก่อนยืนยันการชำระเงิน"
                />
              </div>
            </div>
            <div className="rounded-md border border-divider p-4">
              <p className="text-sm text-foreground">Profile section</p>
              <div className="mt-3">
                <Alert
                  status="warning"
                  multiline
                  message="บัญชีนี้ยังไม่ได้ยืนยันอีเมล หากยังไม่ยืนยันภายใน 24 ชั่วโมง จะไม่สามารถเปลี่ยนข้อมูลส่วนตัวได้"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
