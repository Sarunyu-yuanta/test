import svgPaths from "./svg-h05a1dtgow";

function FloatingLabelInputDefaultDefaultFalseFalseFalseFalse({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-white content-stretch flex items-center left-[99px] p-[14px] rounded-[8px] top-[119px] w-[343px]"} data-name="Floating Label Input/Default/Default/False/False/False/False">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">Text label</p>
    </div>
  );
}

function FloatingLabelInputDefaultDefaultFalseFalseFalseTrue({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-white content-stretch flex gap-[8px] items-center left-[99px] px-[14px] py-[12px] rounded-[8px] top-[419px] w-[343px]"} data-name="Floating Label Input/Default/Default/False/False/False/True">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">Text label</p>
      <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Unit
      </p>
    </div>
  );
}

function FloatingLabelInputDefaultFocusFalseFalseFalseFalse({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-white content-stretch flex items-center left-[522px] p-[14px] rounded-[8px] top-[119px] w-[343px]"} data-name="Floating Label Input/Default/Focus/False/False/False/False">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">Text label</p>
      <p className="absolute font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] left-[13px] text-[16px] text-[rgba(2,70,166,0.5)] top-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        |
      </p>
    </div>
  );
}

function FloatingLabelInputDefaultFocusFalseFalseFalseTrue({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-white content-stretch flex gap-[8px] items-center left-[522px] px-[14px] py-[12px] rounded-[8px] top-[419px] w-[343px]"} data-name="Floating Label Input/Default/Focus/False/False/False/True">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">Text label</p>
      <p className="absolute font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] left-[13px] text-[16px] text-[rgba(2,70,166,0.5)] top-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        |
      </p>
      <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Unit
      </p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[14px] relative w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">Text label</p>
        </div>
      </div>
    </div>
  );
}

function ErrorMessage() {
  return (
    <div className="relative shrink-0 w-full" data-name="Error message">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#e7000b] text-[12px]">Error message</p>
      </div>
    </div>
  );
}

function FloatingLabelInputDefaultErrorFalseFalseFalseFalse({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[945px] top-[119px] w-[343px]"} data-name="Floating Label Input/Default/Error/False/False/False/False">
      <Input />
      <ErrorMessage />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative text-[#6a7282] text-[16px] w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative">Text label</p>
          <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Unit
          </p>
        </div>
      </div>
    </div>
  );
}

function ErrorMessage1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Error message">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#e7000b] text-[12px]">Error message</p>
      </div>
    </div>
  );
}

function FloatingLabelInputDefaultErrorFalseFalseFalseTrue({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[945px] top-[419px] w-[343px]"} data-name="Floating Label Input/Default/Error/False/False/False/True">
      <Input1 />
      <ErrorMessage1 />
    </div>
  );
}

function FloatingLabelInputDefaultDisableFalseFalseFalseFalse({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#f3f4f6] content-stretch flex items-center left-[1368px] p-[14px] rounded-[8px] top-[119px] w-[343px]"} data-name="Floating Label Input/Default/Disable/False/False/False/False">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[16px]">Text label</p>
    </div>
  );
}

function FloatingLabelInputDefaultDisableFalseFalseFalseTrue({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#f3f4f6] content-stretch flex gap-[8px] items-center left-[1368px] px-[14px] py-[12px] rounded-[8px] top-[419px] w-[343px]"} data-name="Floating Label Input/Default/Disable/False/False/False/True">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[16px]">Text label</p>
      <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#99a1af] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Unit
      </p>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[14px] relative w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">Text label</p>
        </div>
      </div>
    </div>
  );
}

function HelperText() {
  return (
    <div className="content-stretch flex font-['Noto_sans_thai:Regular',sans-serif] gap-[8px] items-start leading-[16px] not-italic px-[4px] relative shrink-0 text-[#6a7282] text-[12px] w-[343px]" data-name="Helper text">
      <p className="flex-[1_0_0] min-h-px min-w-px relative">Helper text</p>
      <p className="relative shrink-0 text-right whitespace-nowrap">0/100</p>
    </div>
  );
}

function FloatingLabelInputHelperCountDefaultFalseFalseFalseFalse({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[99px] top-[1477px]"} data-name="Floating Label Input/Helper+Count/Default/False/False/False/False">
      <Input2 />
      <HelperText />
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">Text label</p>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="circle">
            <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
                <path d={svgPaths.p2dc6cf00} fill="var(--fill-0, #6A7282)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HelperText1() {
  return (
    <div className="content-stretch flex font-['Noto_sans_thai:Regular',sans-serif] gap-[8px] items-start leading-[16px] not-italic px-[4px] relative shrink-0 text-[#6a7282] text-[12px] w-[343px]" data-name="Helper text">
      <p className="flex-[1_0_0] min-h-px min-w-px relative">Helper text</p>
      <p className="relative shrink-0 text-right whitespace-nowrap">0/100</p>
    </div>
  );
}

function FloatingLabelInputHelperCountDefaultFalseFalseTrueFalse({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[99px] top-[1625px]"} data-name="Floating Label Input/Helper+Count/Default/False/False/True/False">
      <Input3 />
      <HelperText1 />
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative text-[#6a7282] text-[16px] w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative">Text label</p>
          <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Unit
          </p>
        </div>
      </div>
    </div>
  );
}

function HelperText2() {
  return (
    <div className="content-stretch flex font-['Noto_sans_thai:Regular',sans-serif] gap-[8px] items-start leading-[16px] not-italic px-[4px] relative shrink-0 text-[#6a7282] text-[12px] w-[343px]" data-name="Helper text">
      <p className="flex-[1_0_0] min-h-px min-w-px relative">Helper text</p>
      <p className="relative shrink-0 text-right whitespace-nowrap">0/100</p>
    </div>
  );
}

function FloatingLabelInputHelperCountDefaultFalseFalseFalseTrue({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[99px] top-[1777px]"} data-name="Floating Label Input/Helper+Count/Default/False/False/False/True">
      <Input4 />
      <HelperText2 />
    </div>
  );
}

function Input5() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[14px] relative w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">Text label</p>
        </div>
      </div>
    </div>
  );
}

function Count() {
  return (
    <div className="relative shrink-0 w-full" data-name="Count">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px] text-right">0/100</p>
      </div>
    </div>
  );
}

function FloatingLabelInputCountDefaultFalseFalseFalseFalse({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[99px] top-[1025px] w-[343px]"} data-name="Floating Label Input/Count/Default/False/False/False/False">
      <Input5 />
      <Count />
    </div>
  );
}

function Input6() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">Text label</p>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="circle">
            <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
                <path d={svgPaths.p2dc6cf00} fill="var(--fill-0, #6A7282)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Count1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Count">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px] text-right">0/100</p>
      </div>
    </div>
  );
}

function FloatingLabelInputCountDefaultFalseFalseTrueFalse({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[99px] top-[1173px] w-[343px]"} data-name="Floating Label Input/Count/Default/False/False/True/False">
      <Input6 />
      <Count1 />
    </div>
  );
}

function Input7() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative text-[#6a7282] text-[16px] w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative">Text label</p>
          <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Unit
          </p>
        </div>
      </div>
    </div>
  );
}

function Count2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Count">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px] text-right">0/100</p>
      </div>
    </div>
  );
}

function FloatingLabelInputCountDefaultFalseFalseFalseTrue({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[99px] top-[1325px] w-[343px]"} data-name="Floating Label Input/Count/Default/False/False/False/True">
      <Input7 />
      <Count2 />
    </div>
  );
}

function Input8() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[14px] relative w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">Text label</p>
        </div>
      </div>
    </div>
  );
}

function HelperText3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Helper text">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[4px] relative w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">Helper text</p>
        </div>
      </div>
    </div>
  );
}

function FloatingLabelInputHelperDefaultFalseFalseFalseFalse({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[99px] top-[573px] w-[343px]"} data-name="Floating Label Input/Helper/Default/False/False/False/False">
      <Input8 />
      <HelperText3 />
    </div>
  );
}

function Input9() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative rounded-[8px] shrink-0 w-[343px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">Text label</p>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="circle">
        <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
            <path d={svgPaths.p2dc6cf00} fill="var(--fill-0, #6A7282)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function HelperText4() {
  return (
    <div className="content-stretch flex items-start px-[4px] relative shrink-0 w-[343px]" data-name="Helper text">
      <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">Helper text</p>
    </div>
  );
}

function FloatingLabelInputHelperDefaultFalseFalseTrueFalse({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[99px] top-[721px]"} data-name="Floating Label Input/Helper/Default/False/False/True/False">
      <Input9 />
      <HelperText4 />
    </div>
  );
}

function Input10() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative text-[#6a7282] text-[16px] w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative">Text label</p>
          <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Unit
          </p>
        </div>
      </div>
    </div>
  );
}

function HelperText5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Helper text">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">Helper text</p>
      </div>
    </div>
  );
}

function FloatingLabelInputHelperDefaultFalseFalseFalseTrue({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[99px] top-[873px] w-[343px]"} data-name="Floating Label Input/Helper/Default/False/False/False/True">
      <Input10 />
      <HelperText5 />
    </div>
  );
}

function FloatingLabelInputDefaultDefaultFalseFalseTrueFalse({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-white content-stretch flex gap-[8px] items-center left-[99px] px-[14px] py-[12px] rounded-[8px] top-[267px] w-[343px]"} data-name="Floating Label Input/Default/Default/False/False/True/False">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">Text label</p>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="circle">
        <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
            <path d={svgPaths.p2dc6cf00} fill="var(--fill-0, #6A7282)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FloatingLabelInputDefaultFocusFalseFalseTrueFalse({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-white content-stretch flex gap-[8px] items-center left-[522px] px-[14px] py-[12px] rounded-[8px] top-[267px] w-[343px]"} data-name="Floating Label Input/Default/Focus/False/False/True/False">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">Text label</p>
      <p className="absolute font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] left-[13px] text-[16px] text-[rgba(2,70,166,0.5)] top-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        |
      </p>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="circle">
        <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
            <path d={svgPaths.p2dc6cf00} fill="var(--fill-0, #6A7282)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Input11() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">Text label</p>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="circle">
            <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
                <path d={svgPaths.p2dc6cf00} fill="var(--fill-0, #6A7282)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ErrorMessage2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Error message">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#c10007] text-[12px]">Error message</p>
      </div>
    </div>
  );
}

function FloatingLabelInputDefaultErrorFalseFalseTrueFalse({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[945px] top-[267px] w-[343px]"} data-name="Floating Label Input/Default/Error/False/False/True/False">
      <Input11 />
      <ErrorMessage2 />
    </div>
  );
}

function FloatingLabelInputDefaultDisableFalseFalseTrueFalse({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#f3f4f6] content-stretch flex gap-[8px] items-center left-[1368px] px-[14px] py-[12px] rounded-[8px] top-[267px] w-[343px]"} data-name="Floating Label Input/Default/Disable/False/False/True/False">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[16px]">Text label</p>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="circle">
        <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
            <path d={svgPaths.p2dc6cf00} fill="var(--fill-0, #99A1AF)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Input12() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[14px] relative text-[16px] w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282]">Text label</p>
          <p className="absolute font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] left-[13px] text-[rgba(2,70,166,0.5)] top-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            |
          </p>
        </div>
      </div>
    </div>
  );
}

function Count3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Count">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px] text-right">0/100</p>
      </div>
    </div>
  );
}

function FloatingLabelInputCountFocusFalseFalseFalseFalse({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[522px] top-[1025px] w-[343px]"} data-name="Floating Label Input/Count/Focus/False/False/False/False">
      <Input12 />
      <Count3 />
    </div>
  );
}

function Input13() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">Text label</p>
          <p className="absolute font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] left-[13px] text-[16px] text-[rgba(2,70,166,0.5)] top-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            |
          </p>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="circle">
            <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
                <path d={svgPaths.p2dc6cf00} fill="var(--fill-0, #6A7282)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Count4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Count">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px] text-right">0/100</p>
      </div>
    </div>
  );
}

function FloatingLabelInputCountFocusFalseFalseTrueFalse({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[522px] top-[1173px] w-[343px]"} data-name="Floating Label Input/Count/Focus/False/False/True/False">
      <Input13 />
      <Count4 />
    </div>
  );
}

function Input14() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative text-[16px] w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282]">Text label</p>
          <p className="absolute font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] left-[13px] text-[rgba(2,70,166,0.5)] top-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            |
          </p>
          <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6a7282] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Unit
          </p>
        </div>
      </div>
    </div>
  );
}

function Count5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Count">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px] text-right">0/100</p>
      </div>
    </div>
  );
}

function FloatingLabelInputCountFocusFalseFalseFalseTrue({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[522px] top-[1325px] w-[343px]"} data-name="Floating Label Input/Count/Focus/False/False/False/True">
      <Input14 />
      <Count5 />
    </div>
  );
}

function Input15() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[14px] relative w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">Text label</p>
        </div>
      </div>
    </div>
  );
}

function ErrorMessage3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Error message">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#c10007] text-[12px]">Error message</p>
      </div>
    </div>
  );
}

function FloatingLabelInputCountErrorFalseFalseFalseFalse({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[945px] top-[1025px] w-[343px]"} data-name="Floating Label Input/Count/Error/False/False/False/False">
      <Input15 />
      <ErrorMessage3 />
    </div>
  );
}

function Input16() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">Text label</p>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="circle">
            <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
                <path d={svgPaths.p2dc6cf00} fill="var(--fill-0, #6A7282)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ErrorMessage4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Error message">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#c10007] text-[12px]">Error message</p>
      </div>
    </div>
  );
}

function FloatingLabelInputCountErrorFalseFalseTrueFalse({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[945px] top-[1173px] w-[343px]"} data-name="Floating Label Input/Count/Error/False/False/True/False">
      <Input16 />
      <ErrorMessage4 />
    </div>
  );
}

function Input17() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative text-[#6a7282] text-[16px] w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative">Text label</p>
          <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Unit
          </p>
        </div>
      </div>
    </div>
  );
}

function ErrorMessage5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Error message">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#c10007] text-[12px]">Error message</p>
      </div>
    </div>
  );
}

function FloatingLabelInputCountErrorFalseFalseFalseTrue({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[945px] top-[1325px] w-[343px]"} data-name="Floating Label Input/Count/Error/False/False/False/True">
      <Input17 />
      <ErrorMessage5 />
    </div>
  );
}

function Input18() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[14px] relative w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[16px]">Text label</p>
        </div>
      </div>
    </div>
  );
}

function Count6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Count">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[12px] text-right">0/100</p>
      </div>
    </div>
  );
}

function FloatingLabelInputCountDisableFalseFalseFalseFalse({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[1368px] top-[1025px] w-[343px]"} data-name="Floating Label Input/Count/Disable/False/False/False/False">
      <Input18 />
      <Count6 />
    </div>
  );
}

function Input19() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[16px]">Text label</p>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="circle">
            <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
                <path d={svgPaths.p2dc6cf00} fill="var(--fill-0, #99A1AF)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Count7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Count">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[12px] text-right">0/100</p>
      </div>
    </div>
  );
}

function FloatingLabelInputCountDisableFalseFalseTrueFalse({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[1368px] top-[1173px] w-[343px]"} data-name="Floating Label Input/Count/Disable/False/False/True/False">
      <Input19 />
      <Count7 />
    </div>
  );
}

function Input20() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative text-[#99a1af] text-[16px] w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative">Text label</p>
          <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Unit
          </p>
        </div>
      </div>
    </div>
  );
}

function Count8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Count">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[12px] text-right">0/100</p>
      </div>
    </div>
  );
}

function FloatingLabelInputCountDisableFalseFalseFalseTrue({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[1368px] top-[1325px] w-[343px]"} data-name="Floating Label Input/Count/Disable/False/False/False/True">
      <Input20 />
      <Count8 />
    </div>
  );
}

function Input21() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[14px] relative text-[16px] w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282]">Text label</p>
          <p className="absolute font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] left-[13px] text-[rgba(2,70,166,0.5)] top-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            |
          </p>
        </div>
      </div>
    </div>
  );
}

function HelperText6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Helper text">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">Helper text</p>
      </div>
    </div>
  );
}

function FloatingLabelInputHelperFocusFalseFalseFalseFalse({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[522px] top-[573px] w-[343px]"} data-name="Floating Label Input/Helper/Focus/False/False/False/False">
      <Input21 />
      <HelperText6 />
    </div>
  );
}

function Input22() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">Text label</p>
          <p className="absolute font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] left-[13px] text-[16px] text-[rgba(2,70,166,0.5)] top-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            |
          </p>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="circle">
            <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
                <path d={svgPaths.p2dc6cf00} fill="var(--fill-0, #6A7282)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HelperText7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Helper text">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">Helper text</p>
      </div>
    </div>
  );
}

function FloatingLabelInputHelperFocusFalseFalseTrueFalse({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[522px] top-[721px] w-[343px]"} data-name="Floating Label Input/Helper/Focus/False/False/True/False">
      <Input22 />
      <HelperText7 />
    </div>
  );
}

function Input23() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative text-[16px] w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282]">Text label</p>
          <p className="absolute font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] left-[13px] text-[rgba(2,70,166,0.5)] top-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            |
          </p>
          <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6a7282] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Unit
          </p>
        </div>
      </div>
    </div>
  );
}

function HelperText8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Helper text">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">Helper text</p>
      </div>
    </div>
  );
}

function FloatingLabelInputHelperFocusFalseFalseFalseTrue({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[522px] top-[873px] w-[343px]"} data-name="Floating Label Input/Helper/Focus/False/False/False/True">
      <Input23 />
      <HelperText8 />
    </div>
  );
}

function Input24() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[14px] relative w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">Text label</p>
        </div>
      </div>
    </div>
  );
}

function ErrorMessage6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Error message">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#c10007] text-[12px]">Error message</p>
      </div>
    </div>
  );
}

function FloatingLabelInputHelperErrorFalseFalseFalseFalse({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[945px] top-[573px] w-[343px]"} data-name="Floating Label Input/Helper/Error/False/False/False/False">
      <Input24 />
      <ErrorMessage6 />
    </div>
  );
}

function Input25() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">Text label</p>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="circle">
            <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
                <path d={svgPaths.p2dc6cf00} fill="var(--fill-0, #6A7282)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ErrorMessage7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Error message">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[4px] relative w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#c10007] text-[12px]">Error message</p>
        </div>
      </div>
    </div>
  );
}

function FloatingLabelInputHelperErrorFalseFalseTrueFalse({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[945px] top-[721px] w-[343px]"} data-name="Floating Label Input/Helper/Error/False/False/True/False">
      <Input25 />
      <ErrorMessage7 />
    </div>
  );
}

function Input26() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative text-[#6a7282] text-[16px] w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative">Text label</p>
          <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Unit
          </p>
        </div>
      </div>
    </div>
  );
}

function ErrorMessage8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Error message">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#c10007] text-[12px]">Error message</p>
      </div>
    </div>
  );
}

function FloatingLabelInputHelperErrorFalseFalseFalseTrue({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[945px] top-[873px] w-[343px]"} data-name="Floating Label Input/Helper/Error/False/False/False/True">
      <Input26 />
      <ErrorMessage8 />
    </div>
  );
}

function Input27() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[14px] relative w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[16px]">Text label</p>
        </div>
      </div>
    </div>
  );
}

function HelperText9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Helper text">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[12px]">Helper text</p>
      </div>
    </div>
  );
}

function FloatingLabelInputHelperDisableFalseFalseFalseFalse({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[1368px] top-[573px] w-[343px]"} data-name="Floating Label Input/Helper/Disable/False/False/False/False">
      <Input27 />
      <HelperText9 />
    </div>
  );
}

function Input28() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[16px]">Text label</p>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="circle">
            <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
                <path d={svgPaths.p2dc6cf00} fill="var(--fill-0, #99A1AF)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HelperText10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Helper text">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[12px]">Helper text</p>
      </div>
    </div>
  );
}

function FloatingLabelInputHelperDisableFalseFalseTrueFalse({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[1368px] top-[721px] w-[343px]"} data-name="Floating Label Input/Helper/Disable/False/False/True/False">
      <Input28 />
      <HelperText10 />
    </div>
  );
}

function Input29() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative text-[#99a1af] text-[16px] w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative">Text label</p>
          <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Unit
          </p>
        </div>
      </div>
    </div>
  );
}

function HelperText11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Helper text">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[12px]">Helper text</p>
      </div>
    </div>
  );
}

function FloatingLabelInputHelperDisableFalseFalseFalseTrue({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[1368px] top-[873px] w-[343px]"} data-name="Floating Label Input/Helper/Disable/False/False/False/True">
      <Input29 />
      <HelperText11 />
    </div>
  );
}

function Input30() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[14px] relative text-[16px] w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282]">Text label</p>
          <p className="absolute font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] left-[13px] text-[rgba(2,70,166,0.5)] top-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            |
          </p>
        </div>
      </div>
    </div>
  );
}

function HelperText12() {
  return (
    <div className="content-stretch flex font-['Noto_sans_thai:Regular',sans-serif] gap-[8px] items-start leading-[16px] not-italic px-[4px] relative shrink-0 text-[#6a7282] text-[12px] w-[343px]" data-name="Helper text">
      <p className="flex-[1_0_0] min-h-px min-w-px relative">Helper text</p>
      <p className="relative shrink-0 text-right whitespace-nowrap">0/100</p>
    </div>
  );
}

function FloatingLabelInputHelperCountFocusFalseFalseFalseFalse({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[522px] top-[1477px]"} data-name="Floating Label Input/Helper+Count/Focus/False/False/False/False">
      <Input30 />
      <HelperText12 />
    </div>
  );
}

function Input31() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">Text label</p>
          <p className="absolute font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] left-[13px] text-[16px] text-[rgba(2,70,166,0.5)] top-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            |
          </p>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="circle">
            <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
                <path d={svgPaths.p2dc6cf00} fill="var(--fill-0, #6A7282)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HelperText13() {
  return (
    <div className="content-stretch flex font-['Noto_sans_thai:Regular',sans-serif] gap-[8px] items-start leading-[16px] not-italic px-[4px] relative shrink-0 text-[#6a7282] text-[12px] w-[343px]" data-name="Helper text">
      <p className="flex-[1_0_0] min-h-px min-w-px relative">Helper text</p>
      <p className="relative shrink-0 text-right whitespace-nowrap">0/100</p>
    </div>
  );
}

function FloatingLabelInputHelperCountFocusFalseFalseTrueFalse({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[522px] top-[1625px]"} data-name="Floating Label Input/Helper+Count/Focus/False/False/True/False">
      <Input31 />
      <HelperText13 />
    </div>
  );
}

function Input32() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative text-[16px] w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282]">Text label</p>
          <p className="absolute font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] left-[13px] text-[rgba(2,70,166,0.5)] top-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            |
          </p>
          <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6a7282] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Unit
          </p>
        </div>
      </div>
    </div>
  );
}

function HelperText14() {
  return (
    <div className="content-stretch flex font-['Noto_sans_thai:Regular',sans-serif] gap-[8px] items-start leading-[16px] not-italic px-[4px] relative shrink-0 text-[#6a7282] text-[12px] w-[343px]" data-name="Helper text">
      <p className="flex-[1_0_0] min-h-px min-w-px relative">Helper text</p>
      <p className="relative shrink-0 text-right whitespace-nowrap">0/100</p>
    </div>
  );
}

function FloatingLabelInputHelperCountFocusFalseFalseFalseTrue({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[522px] top-[1777px]"} data-name="Floating Label Input/Helper+Count/Focus/False/False/False/True">
      <Input32 />
      <HelperText14 />
    </div>
  );
}

function Input33() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[14px] relative w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">Text label</p>
        </div>
      </div>
    </div>
  );
}

function ErrorMessage9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Error message">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#c10007] text-[12px]">Error message</p>
      </div>
    </div>
  );
}

function FloatingLabelInputHelperCountErrorFalseFalseFalseFalse({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[945px] top-[1477px] w-[343px]"} data-name="Floating Label Input/Helper+Count/Error/False/False/False/False">
      <Input33 />
      <ErrorMessage9 />
    </div>
  );
}

function Input34() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">Text label</p>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="circle">
            <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
                <path d={svgPaths.p2dc6cf00} fill="var(--fill-0, #6A7282)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ErrorMessage10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Error message">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#c10007] text-[12px]">Error message</p>
      </div>
    </div>
  );
}

function FloatingLabelInputHelperCountErrorFalseFalseTrueFalse({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[945px] top-[1625px] w-[343px]"} data-name="Floating Label Input/Helper+Count/Error/False/False/True/False">
      <Input34 />
      <ErrorMessage10 />
    </div>
  );
}

function Input35() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative text-[#6a7282] text-[16px] w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative">Text label</p>
          <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Unit
          </p>
        </div>
      </div>
    </div>
  );
}

function ErrorMessage11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Error message">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#c10007] text-[12px]">Error message</p>
      </div>
    </div>
  );
}

function FloatingLabelInputHelperCountErrorFalseFalseFalseTrue({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[945px] top-[1777px] w-[343px]"} data-name="Floating Label Input/Helper+Count/Error/False/False/False/True">
      <Input35 />
      <ErrorMessage11 />
    </div>
  );
}

function Input36() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[14px] relative w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[16px]">Text label</p>
        </div>
      </div>
    </div>
  );
}

function HelperText15() {
  return (
    <div className="content-stretch flex font-['Noto_sans_thai:Regular',sans-serif] gap-[8px] items-start leading-[16px] not-italic px-[4px] relative shrink-0 text-[#99a1af] text-[12px] w-[343px]" data-name="Helper text">
      <p className="flex-[1_0_0] min-h-px min-w-px relative">Helper text</p>
      <p className="relative shrink-0 text-right whitespace-nowrap">0/100</p>
    </div>
  );
}

function FloatingLabelInputHelperCountDisableFalseFalseFalseFalse({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[1368px] top-[1477px]"} data-name="Floating Label Input/Helper+Count/Disable/False/False/False/False">
      <Input36 />
      <HelperText15 />
    </div>
  );
}

function Input37() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[16px]">Text label</p>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="circle">
            <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
                <path d={svgPaths.p2dc6cf00} fill="var(--fill-0, #99A1AF)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HelperText16() {
  return (
    <div className="content-stretch flex font-['Noto_sans_thai:Regular',sans-serif] gap-[8px] items-start leading-[16px] not-italic px-[4px] relative shrink-0 text-[#99a1af] text-[12px] w-[343px]" data-name="Helper text">
      <p className="flex-[1_0_0] min-h-px min-w-px relative">Helper text</p>
      <p className="relative shrink-0 text-right whitespace-nowrap">0/100</p>
    </div>
  );
}

function FloatingLabelInputHelperCountDisableFalseFalseTrueFalse({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[1368px] top-[1625px]"} data-name="Floating Label Input/Helper+Count/Disable/False/False/True/False">
      <Input37 />
      <HelperText16 />
    </div>
  );
}

function Input38() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative text-[#99a1af] text-[16px] w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative">Text label</p>
          <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Unit
          </p>
        </div>
      </div>
    </div>
  );
}

function HelperText17() {
  return (
    <div className="content-stretch flex font-['Noto_sans_thai:Regular',sans-serif] gap-[8px] items-start leading-[16px] not-italic px-[4px] relative shrink-0 text-[#99a1af] text-[12px] w-[343px]" data-name="Helper text">
      <p className="flex-[1_0_0] min-h-px min-w-px relative">Helper text</p>
      <p className="relative shrink-0 text-right whitespace-nowrap">0/100</p>
    </div>
  );
}

function FloatingLabelInputHelperCountDisableFalseFalseFalseTrue({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[1368px] top-[1777px]"} data-name="Floating Label Input/Helper+Count/Disable/False/False/False/True">
      <Input38 />
      <HelperText17 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <FloatingLabelInputDefaultDefaultFalseFalseFalseFalse />
      <FloatingLabelInputDefaultDefaultFalseFalseFalseTrue />
      <FloatingLabelInputDefaultFocusFalseFalseFalseFalse />
      <FloatingLabelInputDefaultFocusFalseFalseFalseTrue />
      <FloatingLabelInputDefaultErrorFalseFalseFalseFalse />
      <FloatingLabelInputDefaultErrorFalseFalseFalseTrue />
      <FloatingLabelInputDefaultDisableFalseFalseFalseFalse />
      <FloatingLabelInputDefaultDisableFalseFalseFalseTrue />
      <FloatingLabelInputHelperCountDefaultFalseFalseFalseFalse />
      <FloatingLabelInputHelperCountDefaultFalseFalseTrueFalse />
      <FloatingLabelInputHelperCountDefaultFalseFalseFalseTrue />
      <FloatingLabelInputCountDefaultFalseFalseFalseFalse />
      <FloatingLabelInputCountDefaultFalseFalseTrueFalse />
      <FloatingLabelInputCountDefaultFalseFalseFalseTrue />
      <FloatingLabelInputHelperDefaultFalseFalseFalseFalse />
      <FloatingLabelInputHelperDefaultFalseFalseTrueFalse />
      <FloatingLabelInputHelperDefaultFalseFalseFalseTrue />
      <FloatingLabelInputDefaultDefaultFalseFalseTrueFalse />
      <FloatingLabelInputDefaultFocusFalseFalseTrueFalse />
      <FloatingLabelInputDefaultErrorFalseFalseTrueFalse />
      <FloatingLabelInputDefaultDisableFalseFalseTrueFalse />
      <FloatingLabelInputCountFocusFalseFalseFalseFalse />
      <FloatingLabelInputCountFocusFalseFalseTrueFalse />
      <FloatingLabelInputCountFocusFalseFalseFalseTrue />
      <FloatingLabelInputCountErrorFalseFalseFalseFalse />
      <FloatingLabelInputCountErrorFalseFalseTrueFalse />
      <FloatingLabelInputCountErrorFalseFalseFalseTrue />
      <FloatingLabelInputCountDisableFalseFalseFalseFalse />
      <FloatingLabelInputCountDisableFalseFalseTrueFalse />
      <FloatingLabelInputCountDisableFalseFalseFalseTrue />
      <FloatingLabelInputHelperFocusFalseFalseFalseFalse />
      <FloatingLabelInputHelperFocusFalseFalseTrueFalse />
      <FloatingLabelInputHelperFocusFalseFalseFalseTrue />
      <FloatingLabelInputHelperErrorFalseFalseFalseFalse />
      <FloatingLabelInputHelperErrorFalseFalseTrueFalse />
      <FloatingLabelInputHelperErrorFalseFalseFalseTrue />
      <FloatingLabelInputHelperDisableFalseFalseFalseFalse />
      <FloatingLabelInputHelperDisableFalseFalseTrueFalse />
      <FloatingLabelInputHelperDisableFalseFalseFalseTrue />
      <FloatingLabelInputHelperCountFocusFalseFalseFalseFalse />
      <FloatingLabelInputHelperCountFocusFalseFalseTrueFalse />
      <FloatingLabelInputHelperCountFocusFalseFalseFalseTrue />
      <FloatingLabelInputHelperCountErrorFalseFalseFalseFalse />
      <FloatingLabelInputHelperCountErrorFalseFalseTrueFalse />
      <FloatingLabelInputHelperCountErrorFalseFalseFalseTrue />
      <FloatingLabelInputHelperCountDisableFalseFalseFalseFalse />
      <FloatingLabelInputHelperCountDisableFalseFalseTrueFalse />
      <FloatingLabelInputHelperCountDisableFalseFalseFalseTrue />
    </div>
  );
}