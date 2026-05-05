import { Avatar } from "@/components/avatar";
import { AvatarStack } from "@/components/avatar-stack";

const SIZES = ["xxs", "xs", "s", "m", "l", "xl", "xxl"] as const;
const STACK_SIZES = ["small", "medium", "large"] as const;

const PHOTOS = [
  "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
];

const STACK_ITEMS = PHOTOS.map((src, i) => ({ src, alt: `User ${i + 1}` }));

export function AvatarShowcase() {
  return (
    <div className="min-h-screen bg-background px-6 py-8">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        <div>
          <h1 className="text-foreground">Avatar Component</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Three types (photo, placeholder, text) across seven sizes with an optional status indicator.
          </p>
        </div>

        {/* Photo — no status */}
        <section className="rounded-lg border border-border p-4">
          <p className="text-sm font-semibold text-foreground">Photo</p>
          <div className="mt-4 flex flex-wrap items-end gap-4">
            {SIZES.map((size) => (
              <div key={size} className="flex flex-col items-center gap-2">
                <Avatar type="photo" size={size} src={PHOTOS[0]} alt="User" />
                <span className="text-xs text-muted-foreground">{size}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Photo — with status */}
        <section className="rounded-lg border border-border p-4">
          <p className="text-sm font-semibold text-foreground">Photo + Status</p>
          <div className="mt-4 flex flex-wrap items-end gap-4">
            {SIZES.map((size) => (
              <div key={size} className="flex flex-col items-center gap-2">
                <Avatar type="photo" size={size} src={PHOTOS[0]} alt="User" status />
                <span className="text-xs text-muted-foreground">{size}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Placeholder */}
        <section className="rounded-lg border border-border p-4">
          <p className="text-sm font-semibold text-foreground">Placeholder</p>
          <div className="mt-4 flex flex-wrap items-end gap-4">
            {SIZES.map((size) => (
              <div key={size} className="flex flex-col items-center gap-2">
                <Avatar type="placeholder" size={size} />
                <span className="text-xs text-muted-foreground">{size}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Text — single character */}
        <section className="rounded-lg border border-border p-4">
          <p className="text-sm font-semibold text-foreground">Text</p>
          <div className="mt-4 flex flex-wrap items-end gap-4">
            {SIZES.map((size) => (
              <div key={size} className="flex flex-col items-center gap-2">
                <Avatar type="text" size={size} initials="Y" />
                <span className="text-xs text-muted-foreground">{size}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Avatar Stack */}
        <section className="rounded-lg border border-border p-4">
          <p className="text-sm font-semibold text-foreground">Avatar Stack</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Stacked avatars with a circular "bite" cut-out so each avatar sits cleanly on top of the previous.
          </p>
          <div className="mt-4 flex flex-wrap items-end gap-8">
            {STACK_SIZES.map((size) => (
              <div key={size} className="flex flex-col items-start gap-2">
                <AvatarStack size={size} items={STACK_ITEMS} />
                <span className="text-xs text-muted-foreground">{size}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Avatar Stack — mixed types */}
        <section className="rounded-lg border border-border p-4">
          <p className="text-sm font-semibold text-foreground">Avatar Stack — mixed types</p>
          <div className="mt-4 flex flex-wrap items-end gap-8">
            {STACK_SIZES.map((size) => (
              <div key={size} className="flex flex-col items-start gap-2">
                <AvatarStack
                  size={size}
                  items={[
                    { type: "photo",       src: PHOTOS[0], alt: "User 1" },
                    { type: "placeholder" },
                    { type: "text",        initials: "Y" },
                    { type: "photo",       src: PHOTOS[3], alt: "User 4" },
                  ]}
                />
                <span className="text-xs text-muted-foreground">{size}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
