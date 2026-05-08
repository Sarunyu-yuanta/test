import { UploadArea, UploadItem, type UploadItemVariant, type UploadItemStatus } from "@/components/upload";
import { ShowcasePage } from "../components/ShowcasePage";
import { ComponentPlayground } from "../components/ComponentPlayground";

export function UploadShowcase() {
  return (
    <ShowcasePage
      name="Upload"
      description="Upload dropzone and file list items with loading, success, and error states."
    >
      {/* Upload Area */}
      <ComponentPlayground
        title="Upload Area"
        controls={[
          {
            type: "boolean",
            key: "disabled",
            label: "Disabled",
            defaultValue: false,
          },
          {
            type: "select",
            key: "label",
            label: "Label",
            options: [
              { label: "อัปโหลดไฟล์",   value: "อัปโหลดไฟล์"   },
              { label: "Upload File",  value: "Upload File"  },
              { label: "Browse Files", value: "Browse Files" },
            ],
            defaultValue: "อัปโหลดไฟล์",
          },
        ]}
        render={({ disabled, label }) => {
          const isDisabled = disabled as boolean;
          const labelStr   = label as string;
          return {
            preview: (
              <div className="w-[343px]">
                <UploadArea disabled={isDisabled} label={labelStr} />
              </div>
            ),
            code: [
              "<UploadArea",
              isDisabled ? "  disabled" : null,
              labelStr !== "อัปโหลดไฟล์" ? `  label="${labelStr}"` : null,
              "  onClick={() => inputRef.current?.click()}",
              "/>",
            ]
              .filter(Boolean)
              .join("\n"),
          };
        }}
      />

      {/* Upload Item — Text variant */}
      <ComponentPlayground
        title="Upload Item — Text"
        controls={[
          {
            type: "select",
            key: "status",
            label: "Status",
            options: [
              { label: "loading", value: "loading" },
              { label: "success", value: "success" },
              { label: "error",   value: "error"   },
            ],
            defaultValue: "loading",
          },
          {
            type: "select",
            key: "progress",
            label: "Progress (loading)",
            options: [
              { label: "0%",   value: "0"   },
              { label: "25%",  value: "25"  },
              { label: "50%",  value: "50"  },
              { label: "75%",  value: "75"  },
              { label: "100%", value: "100" },
            ],
            defaultValue: "50",
            visible: (v) => v.status === "loading",
          },
        ]}
        render={({ status, progress }) => {
          const s = status as UploadItemStatus;
          const p = Number(progress ?? 50);
          return {
            preview: (
              <UploadItem
                variant="text"
                status={s}
                fileName="filename.pdf"
                progress={p}
                errorText="ไฟล์ไม่ถูกต้อง"
              />
            ),
            code: [
              "<UploadItem",
              '  variant="text"',
              `  status="${s}"`,
              '  fileName="filename.pdf"',
              s === "loading" ? `  progress={${p}}` : null,
              s === "error" ? '  errorText="ไฟล์ไม่ถูกต้อง"' : null,
              '  onDelete={handleDelete}',
              "/>",
            ]
              .filter(Boolean)
              .join("\n"),
          };
        }}
      />

      {/* Upload Item — Card variant */}
      <ComponentPlayground
        title="Upload Item — Card"
        controls={[
          {
            type: "select",
            key: "status",
            label: "Status",
            options: [
              { label: "loading", value: "loading" },
              { label: "success", value: "success" },
              { label: "error",   value: "error"   },
            ],
            defaultValue: "loading",
          },
          {
            type: "select",
            key: "progress",
            label: "Progress (loading)",
            options: [
              { label: "0%",   value: "0"   },
              { label: "25%",  value: "25"  },
              { label: "50%",  value: "50"  },
              { label: "75%",  value: "75"  },
              { label: "100%", value: "100" },
            ],
            defaultValue: "50",
            visible: (v) => v.status === "loading",
          },
        ]}
        render={({ status, progress }) => {
          const s = status as UploadItemStatus;
          const p = Number(progress ?? 50);
          return {
            preview: (
              <UploadItem
                variant="card"
                status={s}
                fileName="filename.png"
                fileSize="1.66KB"
                progress={p}
                errorText="อัปโหลดไม่สำเร็จ"
              />
            ),
            code: [
              "<UploadItem",
              '  variant="card"',
              `  status="${s}"`,
              '  fileName="filename.png"',
              '  fileSize="1.66KB"',
              s === "loading" ? `  progress={${p}}` : null,
              s === "error"   ? '  errorText="อัปโหลดไม่สำเร็จ"' : null,
              '  onDelete={handleDelete}',
              "/>",
            ]
              .filter(Boolean)
              .join("\n"),
          };
        }}
      />
    </ShowcasePage>
  );
}
