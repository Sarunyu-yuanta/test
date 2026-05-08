import { useState } from "react";
import { Button } from "@/components/button";
import {
  BottomSheet,
  type BottomSheetHeaderType,
  type BottomSheetRightSide,
} from "@/components/bottom-sheet";
import { ShowcasePage } from "../components/ShowcasePage";
import { ComponentPlayground } from "../components/ComponentPlayground";

const IMAGE_SRC =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop";

function BottomSheetPreview({
  headerType,
  rightSide,
  showHeader,
}: {
  headerType: BottomSheetHeaderType;
  rightSide: BottomSheetRightSide;
  showHeader: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)} variant="primary" size="xl">
        Open Bottom Sheet
      </Button>
      <BottomSheet
        open={open}
        onOpenChange={setOpen}
        headerType={headerType}
        rightSide={rightSide}
        showHeader={showHeader}
        title="Title"
        actionLabel="Action"
        imageSrc={IMAGE_SRC}
        onActionClick={() => setOpen(false)}
      >
        <div className="pb-2 pt-1 text-sm leading-5 text-muted-foreground">
          Bottom sheet content slot
        </div>
      </BottomSheet>
    </>
  );
}

export function BottomSheetShowcase() {
  return (
    <ShowcasePage
      name="Bottom Sheet"
      description="Mobile-style sliding panel with configurable header and action variants."
    >
      <ComponentPlayground
        
        controls={[
          {
            type: "boolean",
            key: "showHeader",
            label: "Show header",
            defaultValue: true,
          },
          {
            type: "select",
            key: "headerType",
            label: "Header",
            options: [
              { label: "text", value: "text" },
              { label: "icon", value: "icon" },
              { label: "image", value: "image" },
            ],
            defaultValue: "text",
            visible: (v) => v.showHeader === true,
          },
          {
            type: "select",
            key: "rightSide",
            label: "Right side",
            options: [
              { label: "icon", value: "icon" },
              { label: "action", value: "action" },
              { label: "none", value: "none" },
            ],
            defaultValue: "icon",
            visible: (v) => v.showHeader === true,
          },
        ]}
        render={({ headerType, rightSide, showHeader }) => {
          const ht = headerType as BottomSheetHeaderType;
          const rs = rightSide as BottomSheetRightSide;
          const sh = showHeader as boolean;

          const headerPart = sh
            ? `\n  headerType="${ht}"\n  rightSide="${rs}"${ht === "image" ? '\n  imageSrc="https://..."' : ""}${rs === "action" ? '\n  actionLabel="Action"\n  onActionClick={handleAction}' : ""}`
            : "\n  showHeader={false}";

          return {
            preview: (
              <BottomSheetPreview headerType={ht} rightSide={rs} showHeader={sh} />
            ),
            code: `<BottomSheet\n  open={open}\n  onOpenChange={setOpen}${headerPart}\n  title="Title"\n>\n  {/* content */}\n</BottomSheet>`,
          };
        }}
      />
    </ShowcasePage>
  );
}
