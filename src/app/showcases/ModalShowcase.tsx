import { useState } from "react";
import { Button } from "@/components/button";
import {
  Modal,
  type ModalActionLayout,
  type ModalAlertStatus,
  type ModalResponsive,
  type ModalVariant,
} from "@/components/modal";

export function ModalShowcase() {
  const [openState, setOpenState] = useState<{
    variant: ModalVariant;
    actionLayout: ModalActionLayout;
    responsive: ModalResponsive;
    alertStatus: ModalAlertStatus;
  } | null>(null);

  const openModal = (
    variant: ModalVariant,
    actionLayout: ModalActionLayout,
    responsive: ModalResponsive = "mobile",
    alertStatus: ModalAlertStatus = "warning",
  ) => setOpenState({ variant, actionLayout, responsive, alertStatus });
  const closeModal = () => setOpenState(null);

  return (
    <div className="min-h-full p-6">
      <div className="mx-auto mb-8 flex w-fit flex-col gap-3 rounded-lg p-4">
        <p className="text-sm font-semibold text-foreground">Modal Dialog</p>
        <Button onClick={() => openModal("dialog", "none")} size="xl" variant="primary">
          Open Dialog (No Button)
        </Button>
        <Button onClick={() => openModal("dialog", "single")} size="xl" variant="primary">
          Open Dialog (1 Button)
        </Button>
        <Button onClick={() => openModal("dialog", "double")} size="xl" variant="primary">
          Open Dialog (2 Button)
        </Button>
      </div>

      <div className="mx-auto mt-8 flex w-fit flex-col gap-3 rounded-lg p-4">
        <p className="text-sm font-semibold text-foreground">Modal Content</p>
        <Button onClick={() => openModal("content", "none", "mobile")} size="xl" variant="primary">
          Open Content (No Button / Mobile)
        </Button>
        <Button onClick={() => openModal("content", "single", "mobile")} size="xl" variant="primary">
          Open Content (1 Button / Mobile)
        </Button>
        <Button onClick={() => openModal("content", "double", "mobile")} size="xl" variant="primary">
          Open Content (2 Button / Mobile)
        </Button>
        <Button onClick={() => openModal("content", "double", "desktop")} size="xl" variant="primary">
          Open Content (2 Button / Desktop)
        </Button>
      </div>

      <div className="mx-auto mt-8 flex w-fit flex-col gap-3 rounded-lg p-4">
        <p className="text-sm font-semibold text-foreground">Modal Alert</p>
        <Button onClick={() => openModal("alert", "none", "mobile", "warning")} size="xl" variant="primary">
          Open Alert Warning (No Button)
        </Button>
        <Button onClick={() => openModal("alert", "single", "mobile", "success")} size="xl" variant="primary">
          Open Alert Success (1 Button)
        </Button>
        <Button onClick={() => openModal("alert", "double", "mobile", "danger")} size="xl" variant="primary">
          Open Alert Danger (2 Button)
        </Button>
      </div>

      {openState ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
          <Modal
            actionLayout={openState.actionLayout}
            alertStatus={openState.alertStatus}
            onClose={closeModal}
            onPrimaryClick={closeModal}
            onSecondaryClick={closeModal}
            responsive={openState.responsive}
            variant={openState.variant}
          />
        </div>
      ) : null}
    </div>
  );
}
