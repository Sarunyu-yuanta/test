import { useState } from "react";
import { Button } from "@/components/button";
import { Toast, type ToastStatus } from "@/components/toast";
import { cn } from "@/lib/utils";

const DEFAULT_ONE_LINE = "Text message";
const DEFAULT_TWO_LINES = "Lorem ipsum is placeholder text commonly used in the mockups.";
const BROADCAST_ONE_LINE = "Text Message";
const BROADCAST_TWO_LINES =
  "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.";

const DEFAULT_STATUSES: ToastStatus[] = ["information", "success", "warning", "critical"];
const BROADCAST_STATUSES: ToastStatus[] = ["information", "warning", "critical"];

type DemoToast = {
  id: string;
  variant: "default" | "broadcast";
  status: ToastStatus;
  message: string;
  multiline?: boolean;
  actionLabel?: string;
};

function prettifyStatus(status: ToastStatus) {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

export function ToastShowcase() {
  const [logs, setLogs] = useState<string[]>([]);
  const [activeToasts, setActiveToasts] = useState<DemoToast[]>([]);

  const pushLog = (next: string) =>
    setLogs((prev) => [next, ...prev].slice(0, 8));

  const removeToast = (id: string) => {
    setActiveToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const addToast = (toast: Omit<DemoToast, "id">) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    setActiveToasts((prev) => [{ id, ...toast }, ...prev].slice(0, 5));

    // Broadcast follows the banner behavior in Figma, auto-hide in showcase demo.
    if (toast.variant === "broadcast") {
      window.setTimeout(() => removeToast(id), 3500);
    }
  };

  return (
    <div className="min-h-screen bg-background px-6 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <div>
          <h1 className="text-foreground">Toast Message Component</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Variant: `default` และ `broadcast`
          </p>
        </div>

        <section className="rounded-lg border border-border p-4">
          <p className="text-sm font-semibold text-foreground">Interactive Playground</p>
          <p className="mt-1 text-sm text-muted-foreground">
            กดปุ่มเพื่อแสดง Toast แบบ interaction จริง (fixed ที่มุมขวาบนของ viewport)
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Button
              variant="outline"
              size="md"
              onClick={() =>
                addToast({
                  variant: "default",
                  status: "information",
                  message: DEFAULT_ONE_LINE,
                  actionLabel: "Action",
                })
              }
            >
              Default Info
            </Button>
            <Button
              variant="outline"
              size="md"
              onClick={() =>
                addToast({
                  variant: "default",
                  status: "success",
                  multiline: true,
                  message: DEFAULT_TWO_LINES,
                  actionLabel: "Action",
                })
              }
            >
              Default Success (2 lines)
            </Button>
            <Button
              variant="outline"
              size="md"
              onClick={() =>
                addToast({
                  variant: "default",
                  status: "critical",
                  message: DEFAULT_ONE_LINE,
                })
              }
            >
              Default Critical
            </Button>
            <Button
              variant="outline"
              size="md"
              onClick={() =>
                addToast({
                  variant: "broadcast",
                  status: "information",
                  multiline: true,
                  message: BROADCAST_TWO_LINES,
                })
              }
            >
              Broadcast Info
            </Button>
            <Button
              variant="outline-black"
              size="md"
              onClick={() => setActiveToasts([])}
            >
              Clear Toasts
            </Button>
          </div>

          <div className="mt-5 rounded-lg border border-divider bg-default-secondary p-4">
            <p className="text-sm text-muted-foreground">
              Toast จะโชว์ที่มุมขวาบนของหน้าจอจริงทันทีเมื่อกดปุ่ม
            </p>
          </div>
        </section>

        <section className="rounded-lg border border-border p-4">
          <p className="text-sm font-semibold text-foreground">Default Variant</p>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {DEFAULT_STATUSES.map((status) => (
              <div key={`default-${status}`} className="flex flex-col gap-2">
                <p className="text-xs text-muted-foreground">{prettifyStatus(status)}</p>
                <div className="flex w-[343px] flex-col gap-2">
                  <Toast
                    variant="default"
                    status={status}
                    message={DEFAULT_ONE_LINE}
                    onClose={() => pushLog(`${prettifyStatus(status)}: closed (1 line)`)}
                  />
                  <Toast
                    variant="default"
                    status={status}
                    message={DEFAULT_ONE_LINE}
                    actionLabel="Action"
                    onActionClick={() => pushLog(`${prettifyStatus(status)}: action clicked (1 line)`)}
                    onClose={() => pushLog(`${prettifyStatus(status)}: closed (1 line + action)`)}
                  />
                  <Toast
                    variant="default"
                    status={status}
                    multiline
                    message={DEFAULT_TWO_LINES}
                    onClose={() => pushLog(`${prettifyStatus(status)}: closed (2 lines)`)}
                  />
                  <Toast
                    variant="default"
                    status={status}
                    multiline
                    message={DEFAULT_TWO_LINES}
                    actionLabel="Action"
                    onActionClick={() => pushLog(`${prettifyStatus(status)}: action clicked (2 lines)`)}
                    onClose={() => pushLog(`${prettifyStatus(status)}: closed (2 lines + action)`)}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-border p-4">
          <p className="text-sm font-semibold text-foreground">Broadcast Variant</p>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {BROADCAST_STATUSES.map((status) => (
              <div key={`broadcast-${status}`} className="flex flex-col gap-2">
                <p className="text-xs text-muted-foreground">{prettifyStatus(status)}</p>
                <div className="flex w-[375px] flex-col gap-3">
                  <Toast
                    variant="broadcast"
                    status={status}
                    message={BROADCAST_ONE_LINE}
                    onClose={() => pushLog(`Broadcast ${prettifyStatus(status)}: closed (1 line)`)}
                  />
                  <Toast
                    variant="broadcast"
                    status={status}
                    multiline
                    message={BROADCAST_TWO_LINES}
                    onClose={() => pushLog(`Broadcast ${prettifyStatus(status)}: closed (2 lines)`)}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-border p-4">
          <p className="text-sm font-semibold text-foreground">Interaction logs</p>
          <div className="mt-3 space-y-1">
            {logs.length === 0 ? (
              <p className="text-sm text-muted-foreground">ยังไม่มี interaction</p>
            ) : (
              logs.map((log) => (
                <p key={log} className="text-sm text-foreground">
                  {log}
                </p>
              ))
            )}
          </div>
        </section>
      </div>

      <div className="pointer-events-none fixed top-5 right-5 z-50 flex max-h-[calc(100vh-40px)] w-[375px] flex-col gap-2 overflow-y-auto">
        {activeToasts.map((toast) => (
          <Toast
            key={toast.id}
            variant={toast.variant}
            status={toast.status}
            message={toast.message}
            multiline={toast.multiline}
            actionLabel={toast.actionLabel}
            className={cn(
              "pointer-events-auto",
              toast.variant === "default" ? "ml-auto w-[343px]" : "w-[375px]",
            )}
            onActionClick={() => pushLog(`${prettifyStatus(toast.status)}: action clicked`)}
            onClose={() => {
              removeToast(toast.id);
              pushLog(`${prettifyStatus(toast.status)}: closed`);
            }}
          />
        ))}
      </div>
    </div>
  );
}
