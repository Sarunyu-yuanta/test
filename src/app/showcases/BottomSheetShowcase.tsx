import { useState } from "react";
import { Button } from "@/components/button";
import {
  BottomSheet,
  type BottomSheetHeaderType,
  type BottomSheetRightSide,
} from "@/components/bottom-sheet";

export function BottomSheetShowcase() {
  const [openState, setOpenState] = useState<{
    showHeader: boolean;
    headerType: BottomSheetHeaderType;
    rightSide: BottomSheetRightSide;
  } | null>(null);

  const openBottomSheet = (
    headerType: BottomSheetHeaderType,
    rightSide: BottomSheetRightSide,
    showHeader = true,
  ) => setOpenState({ showHeader, headerType, rightSide });
  const closeBottomSheet = () => setOpenState(null);

  return (
    <div className="min-h-full p-6">
      <div className="mx-auto mb-8 flex w-fit flex-col gap-3 rounded-lg p-4">
        <p className="text-sm font-semibold text-foreground">Bottom Sheet</p>
        <Button onClick={() => openBottomSheet("text", "icon")} size="xl" variant="primary">
          Open Text + Icon
        </Button>
        <Button onClick={() => openBottomSheet("text", "action")} size="xl" variant="primary">
          Open Text + Action
        </Button>
        <Button onClick={() => openBottomSheet("text", "none")} size="xl" variant="primary">
          Open Text Only
        </Button>
        <Button onClick={() => openBottomSheet("icon", "icon")} size="xl" variant="primary">
          Open Icon + Icon
        </Button>
        <Button onClick={() => openBottomSheet("icon", "action")} size="xl" variant="primary">
          Open Icon + Action
        </Button>
        <Button onClick={() => openBottomSheet("image", "icon")} size="xl" variant="primary">
          Open Image + Icon
        </Button>
        <Button onClick={() => openBottomSheet("image", "action")} size="xl" variant="primary">
          Open Image + Action
        </Button>
        <Button onClick={() => openBottomSheet("text", "none", false)} size="xl" variant="primary">
          Open Content Only
        </Button>
      </div>

      {openState ? (
        <BottomSheet
          actionLabel="Action"
          headerType={openState.headerType}
          imageSrc="https://www.figma.com/api/mcp/asset/2af58abb-6922-446e-9575-46402f41d204"
          onActionClick={closeBottomSheet}
          onOpenChange={(open) => {
            if (!open) closeBottomSheet();
          }}
          open={Boolean(openState)}
          rightSide={openState.rightSide}
          showHeader={openState.showHeader}
          title="Title"
        >
          <div className="pb-2 pt-1 text-sm leading-5 text-muted-foreground">
            Bottom sheet content slot
          </div>
        </BottomSheet>
      ) : null}
    </div>
  );
}
