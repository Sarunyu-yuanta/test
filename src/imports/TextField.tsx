function Label() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="font-['Noto_sans_thai:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] whitespace-nowrap">Text label</p>
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-white min-h-[32px] relative rounded-[8px] shrink-0 w-full" data-name="Text Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center min-h-[inherit] px-[14px] py-[8px] relative w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[16px]">Placeholder</p>
        </div>
      </div>
    </div>
  );
}

export default function TextField() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full" data-name="Text Field">
      <Label />
      <TextInput />
    </div>
  );
}