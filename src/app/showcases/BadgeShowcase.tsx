import { FunnelSimple } from "@phosphor-icons/react";
import { Badge } from "@/components/badge";

export function BadgeShowcase() {
  return (
    <div className="min-h-screen bg-background px-6 py-8">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        <div>
          <h1 className="text-foreground">Badge Component</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Variant: `notification` และ `button`
          </p>
        </div>

        <section className="rounded-lg border border-border p-4">
          <p className="text-sm font-semibold text-foreground">Notification Variant</p>
          <div className="mt-4 flex items-center gap-6">
            <Badge variant="notification" notificationState="default" count={0} />
            <Badge variant="notification" notificationState="active" count={0} />
            <Badge variant="notification" notificationState="noti" count={2} />
          </div>
        </section>

        <section className="rounded-lg border border-border p-4">
          <p className="text-sm font-semibold text-foreground">Button Variant</p>
          <div className="mt-4 flex flex-wrap items-center gap-6">
            <Badge variant="button" iconOnly count={0} />
            <Badge variant="button" iconOnly count={2} />
            <Badge variant="button" label="Filter" count={0} />
            <Badge variant="button" label="Filter" count={2} />
            <Badge
              variant="button"
              label="Custom"
              icon={<FunnelSimple size={18} weight="regular" />}
              count={12}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
