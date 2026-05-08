import { useState } from "react";
import { Button } from "@/components/button";
import {
  Modal,
  type ModalActionLayout,
  type ModalAlertStatus,
  type ModalResponsive,
  type ModalVariant,
} from "@/components/modal";
import { ShowcasePage } from "../components/ShowcasePage";
import { ComponentPlayground } from "../components/ComponentPlayground";

function ModalPreview({
  variant,
  actionLayout,
  responsive,
  alertStatus,
}: {
  variant: ModalVariant;
  actionLayout: ModalActionLayout;
  responsive: ModalResponsive;
  alertStatus: ModalAlertStatus;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)} variant="primary" size="xl">
        Open Modal
      </Button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
          <Modal
            variant={variant}
            actionLayout={actionLayout}
            responsive={responsive}
            alertStatus={alertStatus}
            onClose={() => setOpen(false)}
            onPrimaryClick={() => setOpen(false)}
            onSecondaryClick={() => setOpen(false)}
          />
        </div>
      )}
    </>
  );
}

export function ModalShowcase() {
  return (
    <ShowcasePage
      name="Modal"
      description="Dialog, content, and alert variants with single or double action layouts."
    >
      <ComponentPlayground
        
        controls={[
          {
            type: "select",
            key: "variant",
            label: "Variant",
            options: [
              { label: "dialog", value: "dialog" },
              { label: "content", value: "content" },
              { label: "alert", value: "alert" },
            ],
            defaultValue: "dialog",
          },
          {
            type: "select",
            key: "actionLayout",
            label: "Actions",
            options: [
              { label: "none", value: "none" },
              { label: "single", value: "single" },
              { label: "double", value: "double" },
            ],
            defaultValue: "double",
          },
          {
            type: "select",
            key: "responsive",
            label: "Responsive",
            options: [
              { label: "mobile", value: "mobile" },
              { label: "desktop", value: "desktop" },
            ],
            defaultValue: "mobile",
            visible: (v) => v.variant === "content",
          },
          {
            type: "select",
            key: "alertStatus",
            label: "Alert status",
            options: [
              { label: "warning", value: "warning" },
              { label: "success", value: "success" },
              { label: "danger", value: "danger" },
            ],
            defaultValue: "warning",
            visible: (v) => v.variant === "alert",
          },
        ]}
        render={({ variant, actionLayout, responsive, alertStatus }) => {
          const v = variant as ModalVariant;
          const al = actionLayout as ModalActionLayout;
          const r = responsive as ModalResponsive;
          const as = alertStatus as ModalAlertStatus;

          const responsivePart = v === "content" ? `\n  responsive="${r}"` : "";
          const alertPart = v === "alert" ? `\n  alertStatus="${as}"` : "";
          const primaryPart = al !== "none" ? "\n  onPrimaryClick={handleConfirm}" : "";
          const secondaryPart = al === "double" ? "\n  onSecondaryClick={handleClose}" : "";

          return {
            preview: (
              <ModalPreview
                variant={v}
                actionLayout={al}
                responsive={r}
                alertStatus={as}
              />
            ),
            code: `<Modal\n  variant="${v}"\n  actionLayout="${al}"${responsivePart}${alertPart}\n  onClose={handleClose}${primaryPart}${secondaryPart}\n/>`,
          };
        }}
      />
    </ShowcasePage>
  );
}
