import { useState } from "react";
import { Button } from "@/components/button";
import {
  Toast,
  Toaster,
  type ToastProps,
  type ToastStatus,
  type ToastVariant,
} from "@/components/toast";
import { ShowcasePage } from "../components/ShowcasePage";
import { ComponentPlayground } from "../components/ComponentPlayground";

type DemoToast = ToastProps & { id: string };

function ToastPreview({
  variant,
  status,
  multiline,
  hasAction,
}: {
  variant: ToastVariant;
  status: ToastStatus;
  multiline: boolean;
  hasAction: boolean;
}) {
  const [toasts, setToasts] = useState<DemoToast[]>([]);

  const msg = multiline
    ? "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries."
    : "Text message";

  const fire = () => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    setToasts((prev) => [
      { id, variant, status, message: msg, multiline,
        actionLabel: hasAction ? "Action" : undefined,
        onActionClick: hasAction ? () => {} : undefined,
      },
      ...prev,
    ].slice(0, 5));
  };

  return (
    <>
      <Button variant="primary" size="md" onClick={fire}>
        Show Toast Notification
      </Button>
      <Toaster
        items={toasts}
        duration={4000}
        onRemove={(id) => setToasts((prev) => prev.filter((t) => t.id !== id))}
      />
    </>
  );
}

export function ToastShowcase() {
  return (
    <ShowcasePage
      name="Toast Message"
      description="Transient notification in default and broadcast variants across four status types."
    >
      <ComponentPlayground
        
        controls={[
          {
            type: "select",
            key: "variant",
            label: "Variant",
            options: [
              { label: "default",   value: "default" },
              { label: "broadcast", value: "broadcast" },
            ],
            defaultValue: "default",
          },
          {
            type: "select",
            key: "status",
            label: "Status",
            options: [
              { label: "information", value: "information" },
              { label: "success",     value: "success" },
              { label: "warning",     value: "warning" },
              { label: "critical",    value: "critical" },
            ],
            defaultValue: "information",
            visible: (v) => v.variant !== "broadcast",
          },
          { type: "boolean", key: "multiline",  label: "Multiline",      defaultValue: false },
          { type: "boolean", key: "actionLabel", label: "Action button", defaultValue: false },
        ]}
        render={({ variant, status, multiline, actionLabel }) => {
          const v = variant as ToastVariant;
          const rawStatus = status as ToastStatus;
          const s: ToastStatus =
            v === "broadcast" && rawStatus === "success" ? "information" : rawStatus;
          const isMultiline = multiline as boolean;
          const hasAction = actionLabel as boolean;
          const msg = isMultiline
            ? "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries."
            : "Text message";
          const multilinePart = isMultiline ? "\n  multiline" : "";
          const actionPart = hasAction
            ? '\n  actionLabel="Action"\n  onActionClick={handleAction}'
            : "";

          return {
            preview: (
              <ToastPreview
                variant={v}
                status={s}
                multiline={isMultiline}
                hasAction={hasAction}
              />
            ),
            code: `addToast({\n  variant: "${v}",\n  status: "${s}",\n  message: "${msg}",${isMultiline ? "\n  multiline: true," : ""}${hasAction ? '\n  actionLabel: "Action",\n  onActionClick: handleAction,' : ""}\n})\n\n// render once at page root:\n<Toaster items={toasts} duration={4000} onRemove={removeToast} />`,
          };
        }}
      />
    </ShowcasePage>
  );
}
