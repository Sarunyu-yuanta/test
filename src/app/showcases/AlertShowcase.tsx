import { type AlertStatus, Alert } from "@/components/alert";
import { ShowcasePage } from "../components/ShowcasePage";
import { ComponentPlayground } from "../components/ComponentPlayground";

export function AlertShowcase() {
  return (
    <ShowcasePage
      name="Alert"
      description="Inline message สำหรับใช้งานใน form หรือ section, อยู่ใน flow ของ layout และไม่หายเอง"
    >
      <ComponentPlayground
        
        controls={[
          {
            type: "select",
            key: "status",
            label: "Status",
            options: [
              { label: "normal", value: "normal" },
              { label: "information", value: "information" },
              { label: "success", value: "success" },
              { label: "warning", value: "warning" },
              { label: "critical", value: "critical" },
            ],
            defaultValue: "information",
          },
          { type: "boolean", key: "multiline", label: "Multiline", defaultValue: false },
        ]}
        render={({ status, multiline }) => ({
          preview: (
            <Alert
              status={status as AlertStatus}
              multiline={multiline as boolean}
              message={
                (multiline as boolean)
                  ? "บัญชีนี้ยังไม่ได้ยืนยันอีเมล หากยังไม่ยืนยันภายใน 24 ชั่วโมง จะไม่สามารถเปลี่ยนข้อมูลส่วนตัวได้"
                  : "Text message Lorem text mockup designsystem"
              }
              className="max-w-[340px]"
            />
          ),
          code: `<Alert\n  status="${status}"${multiline ? "\n  multiline" : ""}\n  message="${(multiline as boolean) ? "บัญชีนี้ยังไม่ได้ยืนยันอีเมล..." : "Text message Lorem text mockup designsystem"}"\n/>`,
        })}
      />
    </ShowcasePage>
  );
}
