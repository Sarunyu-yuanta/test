import React from "react";
import { Card, CardVariant, CardSize, CardSocialTag } from "@/components/card";
import { ShowcasePage } from "../components/ShowcasePage";
import { ComponentPlayground } from "../components/ComponentPlayground";

const DEMO_SOCIAL_TAGS: CardSocialTag[] = [
  { label: "Analysis", bg: "var(--tag-bg-blue, #F3F8FE)",   text: "var(--tag-text-blue, #095EC4)"   },
  { label: "Stock",    bg: "var(--tag-bg-cyan, #F3F8FE)",   text: "var(--tag-text-cyan, #095EC4)"   },
  { label: "My Asset", bg: "var(--tag-bg-purple, #F3E8FF)", text: "var(--tag-text-purple, #59168B)" },
];

/** Example banner/thumbnail for showcase previews (Unsplash). */
const MOCK_CARD_IMAGE =
  "https://images.unsplash.com/photo-1770131091439-9aa7274f544f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export function CardShowcase() {
  return (
    <ShowcasePage
      name="Card"
      description="Configurable card component with header, body, and footer layouts."
    >
      <ComponentPlayground
        
        controls={[
          {
            type: "select", key: "variant", label: "Variant",
            options: [
              { label: "event", value: "event" },
              { label: "news", value: "news" },
              { label: "social", value: "social" },
              { label: "live", value: "live" },
              { label: "default", value: "default" },
            ],
            defaultValue: "event",
          },
          {
            type: "select", key: "size", label: "Size",
            options: [
              { label: "desktop", value: "desktop" },
              { label: "tablet", value: "tablet" },
              { label: "mobile", value: "mobile" },
            ],
            defaultValue: "desktop",
          },
          {
            type: "boolean",
            key: "locked",
            label: "Locked",
            defaultValue: false,
            visible: (v) => v.variant !== "live" && v.variant !== "default",
          },
        ]}
        render={({ variant, size, locked }) => {
          const v = variant as CardVariant;
          const s = size as CardSize;
          const isLocked = locked as boolean;
          const lockedPart = isLocked ? "\n  locked" : "";
          let preview: React.ReactNode;
          let extraProps: string;
          if (v === "default") {
            preview = <Card variant="default" size={s}><p className="text-sm text-muted-foreground">Custom content</p></Card>;
            extraProps = "";
          } else if (v === "event") {
            preview = <Card image={MOCK_CARD_IMAGE} variant="event" size={s} locked={isLocked} />;
            extraProps = `\n  image={imageUrl}${lockedPart}`;
          } else if (v === "news") {
            preview = <Card image={MOCK_CARD_IMAGE} variant="news" size={s} locked={isLocked} bookmarked={false} />;
            extraProps = `\n  image={imageUrl}${lockedPart}`;
          } else if (v === "social") {
            preview = <Card image={MOCK_CARD_IMAGE} variant="social" size={s} locked={isLocked} tags={DEMO_SOCIAL_TAGS} bookmarked={false} />;
            extraProps = `\n  image={imageUrl}\n  tags={tags}${lockedPart}`;
          } else {
            preview = <Card image={MOCK_CARD_IMAGE} variant="live" size={s} duration="1:26:36" />;
            extraProps = '\n  image={imageUrl}\n  duration="1:26:36"';
          }
          return {
            preview,
            code: `<Card\n  variant="${v}"\n  size="${s}"${extraProps}\n/>`,
          };
        }}
      />
    </ShowcasePage>
  );
}
