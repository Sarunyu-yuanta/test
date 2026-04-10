import svgPaths from "./svg-9fdcfxgadc";
type FloatingLabelInputDefaultDefaultTrueFalseFalseFalseProps = {
  className?: string;
  filledMessage?: string;
  labelText?: string;
};

function FloatingLabelInputDefaultDefaultTrueFalseFalseFalse({ className, filledMessage = "Filled message", labelText = "Text label" }: FloatingLabelInputDefaultDefaultTrueFalseFalseFalseProps) {
  return (
    <div className={className || "absolute bg-white content-stretch flex flex-col items-start justify-center left-[114px] px-[14px] py-[6px] rounded-[8px] top-[143px] w-[343px]"} data-name="Floating Label Input/Default/Default/True/False/False/False">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] w-full">{labelText}</p>
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] w-full">{filledMessage}</p>
    </div>
  );
}

function FillText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center min-h-px min-w-px not-italic relative" data-name="Fill text">
      <p className="leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{labelText}</p>
      <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] w-full">{filledMessage}</p>
    </div>
  );
}
type FloatingLabelInputDefaultDefaultTrueFalseFalseTrueProps = {
  className?: string;
  filledMessage?: string;
  labelText?: string;
  unitText?: string;
};

function FloatingLabelInputDefaultDefaultTrueFalseFalseTrue({ className, filledMessage = "Filled message", labelText = "Text label", unitText = "Unit" }: FloatingLabelInputDefaultDefaultTrueFalseFalseTrueProps) {
  return (
    <div className={className || "absolute bg-white content-stretch flex gap-[8px] items-end left-[114px] px-[14px] py-[6px] rounded-[8px] top-[443px] w-[343px]"} data-name="Floating Label Input/Default/Default/True/False/False/True">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <FillText />
      <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {unitText}
      </p>
    </div>
  );
}
type FloatingLabelInputDefaultFocusTrueFalseFalseFalseProps = {
  className?: string;
  filledMessage?: string;
  labelText?: string;
};

function FloatingLabelInputDefaultFocusTrueFalseFalseFalse({ className, filledMessage = "Filled message", labelText = "Text label" }: FloatingLabelInputDefaultFocusTrueFalseFalseFalseProps) {
  return (
    <div className={className || "absolute bg-white content-stretch flex flex-col items-start justify-center left-[537px] px-[14px] py-[6px] rounded-[8px] top-[143px] w-[343px]"} data-name="Floating Label Input/Default/Focus/True/False/False/False">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] w-full">{labelText}</p>
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] w-full">{filledMessage}</p>
    </div>
  );
}

function FillText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center min-h-px min-w-px not-italic relative" data-name="Fill text">
      <p className="leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{labelText}</p>
      <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] w-full">{filledMessage}</p>
    </div>
  );
}
type FloatingLabelInputDefaultFocusTrueFalseFalseTrueProps = {
  className?: string;
  filledMessage?: string;
  labelText?: string;
  unitText?: string;
};

function FloatingLabelInputDefaultFocusTrueFalseFalseTrue({ className, filledMessage = "Filled message", labelText = "Text label", unitText = "Unit" }: FloatingLabelInputDefaultFocusTrueFalseFalseTrueProps) {
  return (
    <div className={className || "absolute bg-white content-stretch flex gap-[8px] items-end left-[537px] px-[14px] py-[6px] rounded-[8px] top-[443px] w-[343px]"} data-name="Floating Label Input/Default/Focus/True/False/False/True">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <FillText1 />
      <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {unitText}
      </p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center not-italic px-[14px] py-[6px] relative w-full">
          <p className="leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{labelText}</p>
          <p className="leading-[20px] relative shrink-0 text-[#101828] text-[14px] w-full">{filledMessage}</p>
        </div>
      </div>
    </div>
  );
}

function ErrorMessage() {
  return (
    <div className="relative shrink-0 w-full" data-name="Error message">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#c10007] text-[12px]">{errorMessage}</p>
      </div>
    </div>
  );
}
type FloatingLabelInputDefaultErrorTrueFalseFalseFalseProps = {
  className?: string;
  errorMessage?: string;
  filledMessage?: string;
  labelText?: string;
};

function FloatingLabelInputDefaultErrorTrueFalseFalseFalse({ className, errorMessage = "Error message", filledMessage = "Filled message", labelText = "Text label" }: FloatingLabelInputDefaultErrorTrueFalseFalseFalseProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[960px] top-[143px] w-[343px]"} data-name="Floating Label Input/Default/Error/True/False/False/False">
      <Input />
      <ErrorMessage />
    </div>
  );
}

function FillText2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center min-h-px min-w-px not-italic relative" data-name="Fill text">
      <p className="leading-[16px] min-w-full relative shrink-0 text-[#6a7282] text-[12px] w-[min-content]">{labelText}</p>
      <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] w-[271px]">{filledMessage}</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[8px] items-end px-[14px] py-[6px] relative w-full">
          <FillText2 />
          <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {unitText}
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
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#c10007] text-[12px]">{errorMessage}</p>
      </div>
    </div>
  );
}
type FloatingLabelInputDefaultErrorTrueFalseFalseTrueProps = {
  className?: string;
  errorMessage?: string;
  filledMessage?: string;
  labelText?: string;
  unitText?: string;
};

function FloatingLabelInputDefaultErrorTrueFalseFalseTrue({ className, errorMessage = "Error message", filledMessage = "Filled message", labelText = "Text label", unitText = "Unit" }: FloatingLabelInputDefaultErrorTrueFalseFalseTrueProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[960px] top-[443px] w-[343px]"} data-name="Floating Label Input/Default/Error/True/False/False/True">
      <Input1 />
      <ErrorMessage1 />
    </div>
  );
}
type FloatingLabelInputDefaultDisableTrueFalseFalseFalseProps = {
  className?: string;
  filledMessage?: string;
  labelText?: string;
};

function FloatingLabelInputDefaultDisableTrueFalseFalseFalse({ className, filledMessage = "Filled message", labelText = "Text label" }: FloatingLabelInputDefaultDisableTrueFalseFalseFalseProps) {
  return (
    <div className={className || "absolute bg-[#f3f4f6] content-stretch flex flex-col items-start justify-center left-[1383px] px-[14px] py-[6px] rounded-[8px] top-[143px] w-[343px]"} data-name="Floating Label Input/Default/Disable/True/False/False/False">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#99a1af] text-[12px] w-[min-content]">{labelText}</p>
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] w-[311px]">{filledMessage}</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center min-h-px min-w-px not-italic relative text-[#99a1af]" data-name="Content">
      <p className="leading-[16px] min-w-full relative shrink-0 text-[12px] w-[min-content]">{labelText}</p>
      <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px relative text-[14px] w-[275px]">{filledMessage}</p>
    </div>
  );
}
type FloatingLabelInputDefaultDisableTrueFalseFalseTrueProps = {
  className?: string;
  filledMessage?: string;
  labelText?: string;
  unitText?: string;
};

function FloatingLabelInputDefaultDisableTrueFalseFalseTrue({ className, filledMessage = "Filled message", labelText = "Text label", unitText = "Unit" }: FloatingLabelInputDefaultDisableTrueFalseFalseTrueProps) {
  return (
    <div className={className || "absolute bg-[#f3f4f6] content-stretch flex gap-[8px] items-end left-[1383px] px-[14px] py-[6px] rounded-[8px] top-[443px] w-[343px]"} data-name="Floating Label Input/Default/Disable/True/False/False/True">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Content />
      <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#99a1af] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {unitText}
      </p>
    </div>
  );
}

function FillText3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center min-h-px min-w-px not-italic relative" data-name="Fill text">
      <p className="leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{labelText}</p>
      <p className="leading-[20px] relative shrink-0 text-[#101828] text-[14px] w-full">{filledMessage}</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Icon">
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
type FloatingLabelInputDefaultDefaultTrueFalseTrueFalseProps = {
  className?: string;
  filledMessage?: string;
  labelText?: string;
};

function FloatingLabelInputDefaultDefaultTrueFalseTrueFalse({ className, filledMessage = "Filled message", labelText = "Text label" }: FloatingLabelInputDefaultDefaultTrueFalseTrueFalseProps) {
  return (
    <div className={className || "absolute bg-white content-stretch flex gap-[8px] items-center left-[114px] px-[14px] py-[6px] rounded-[8px] top-[291px] w-[343px]"} data-name="Floating Label Input/Default/Default/True/False/True/False">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <FillText3 />
      <div className="flex flex-row items-center self-stretch">
        <Icon />
      </div>
    </div>
  );
}

function FillText4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center min-h-px min-w-px not-italic relative" data-name="Fill text">
      <p className="leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{labelText}</p>
      <p className="leading-[20px] relative shrink-0 text-[#101828] text-[14px] w-full">{filledMessage}</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Icon">
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
type FloatingLabelInputDefaultFocusTrueFalseTrueFalseProps = {
  className?: string;
  filledMessage?: string;
  labelText?: string;
};

function FloatingLabelInputDefaultFocusTrueFalseTrueFalse({ className, filledMessage = "Filled message", labelText = "Text label" }: FloatingLabelInputDefaultFocusTrueFalseTrueFalseProps) {
  return (
    <div className={className || "absolute bg-white content-stretch flex gap-[8px] items-center left-[537px] px-[14px] py-[6px] rounded-[8px] top-[291px] w-[343px]"} data-name="Floating Label Input/Default/Focus/True/False/True/False">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <FillText4 />
      <div className="flex flex-row items-center self-stretch">
        <Icon1 />
      </div>
    </div>
  );
}

function FillText5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center min-h-px min-w-px not-italic relative" data-name="Fill text">
      <p className="leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{labelText}</p>
      <p className="leading-[20px] relative shrink-0 text-[#101828] text-[14px] w-full">{filledMessage}</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[6px] relative w-full">
          <FillText5 />
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
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#c10007] text-[12px]">{errorMessage}</p>
      </div>
    </div>
  );
}
type FloatingLabelInputDefaultErrorTrueFalseTrueFalseProps = {
  className?: string;
  errorMessage?: string;
  filledMessage?: string;
  labelText?: string;
};

function FloatingLabelInputDefaultErrorTrueFalseTrueFalse({ className, errorMessage = "Error message", filledMessage = "Filled message", labelText = "Text label" }: FloatingLabelInputDefaultErrorTrueFalseTrueFalseProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[960px] top-[291px] w-[343px]"} data-name="Floating Label Input/Default/Error/True/False/True/False">
      <Input2 />
      <ErrorMessage2 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center min-h-px min-w-px not-italic relative text-[#99a1af]" data-name="Content">
      <p className="leading-[16px] relative shrink-0 text-[12px] w-full">{labelText}</p>
      <p className="leading-[20px] relative shrink-0 text-[14px] w-full">{filledMessage}</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Icon">
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
type FloatingLabelInputDefaultDisableTrueFalseTrueFalseProps = {
  className?: string;
  filledMessage?: string;
  labelText?: string;
};

function FloatingLabelInputDefaultDisableTrueFalseTrueFalse({ className, filledMessage = "Filled message", labelText = "Text label" }: FloatingLabelInputDefaultDisableTrueFalseTrueFalseProps) {
  return (
    <div className={className || "absolute bg-[#f3f4f6] content-stretch flex gap-[8px] items-center left-[1383px] px-[14px] py-[6px] rounded-[8px] top-[291px] w-[343px]"} data-name="Floating Label Input/Default/Disable/True/False/True/False">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Content1 />
      <div className="flex flex-row items-center self-stretch">
        <Icon2 />
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center not-italic px-[14px] py-[6px] relative w-full">
          <p className="leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{labelText}</p>
          <p className="leading-[20px] relative shrink-0 text-[#101828] text-[14px] w-full">{filledMessage}</p>
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
type FloatingLabelInputCountDefaultTrueFalseFalseFalseProps = {
  className?: string;
  filledMessage?: string;
  labelText?: string;
};

function FloatingLabelInputCountDefaultTrueFalseFalseFalse({ className, filledMessage = "Filled message", labelText = "Text label" }: FloatingLabelInputCountDefaultTrueFalseFalseFalseProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[114px] top-[1049px] w-[343px]"} data-name="Floating Label Input/Count/Default/True/False/False/False">
      <Input3 />
      <Count />
    </div>
  );
}

function FillText6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center min-h-px min-w-px not-italic relative" data-name="Fill text">
      <p className="leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{labelText}</p>
      <p className="leading-[20px] relative shrink-0 text-[#101828] text-[14px] w-full">{filledMessage}</p>
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[6px] relative w-full">
          <FillText6 />
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
type FloatingLabelInputCountDefaultTrueFalseTrueFalseProps = {
  className?: string;
  filledMessage?: string;
  labelText?: string;
};

function FloatingLabelInputCountDefaultTrueFalseTrueFalse({ className, filledMessage = "Filled message", labelText = "Text label" }: FloatingLabelInputCountDefaultTrueFalseTrueFalseProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[114px] top-[1197px] w-[343px]"} data-name="Floating Label Input/Count/Default/True/False/True/False">
      <Input4 />
      <Count1 />
    </div>
  );
}

function FillText7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center min-h-px min-w-px not-italic relative" data-name="Fill text">
      <p className="leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{labelText}</p>
      <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] w-full">{filledMessage}</p>
    </div>
  );
}

function Input5() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[8px] items-end px-[14px] py-[6px] relative w-full">
          <FillText7 />
          <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {unitText}
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
type FloatingLabelInputCountDefaultTrueFalseFalseTrueProps = {
  className?: string;
  filledMessage?: string;
  labelText?: string;
  unitText?: string;
};

function FloatingLabelInputCountDefaultTrueFalseFalseTrue({ className, filledMessage = "Filled message", labelText = "Text label", unitText = "Unit" }: FloatingLabelInputCountDefaultTrueFalseFalseTrueProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[114px] top-[1349px] w-[343px]"} data-name="Floating Label Input/Count/Default/True/False/False/True">
      <Input5 />
      <Count2 />
    </div>
  );
}

function Input6() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center not-italic px-[14px] py-[6px] relative w-full">
          <p className="leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{labelText}</p>
          <p className="leading-[20px] relative shrink-0 text-[#101828] text-[14px] w-full">{filledMessage}</p>
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
type FloatingLabelInputCountFocusTrueFalseFalseFalseProps = {
  className?: string;
  filledMessage?: string;
  labelText?: string;
};

function FloatingLabelInputCountFocusTrueFalseFalseFalse({ className, filledMessage = "Filled message", labelText = "Text label" }: FloatingLabelInputCountFocusTrueFalseFalseFalseProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[537px] top-[1049px] w-[343px]"} data-name="Floating Label Input/Count/Focus/True/False/False/False">
      <Input6 />
      <Count3 />
    </div>
  );
}

function FillText8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center min-h-px min-w-px not-italic relative" data-name="Fill text">
      <p className="leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{labelText}</p>
      <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] w-full">{filledMessage}</p>
    </div>
  );
}

function Input7() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[8px] items-end px-[14px] py-[6px] relative w-full">
          <FillText8 />
          <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {unitText}
          </p>
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
type FloatingLabelInputCountFocusTrueFalseFalseTrueProps = {
  className?: string;
  filledMessage?: string;
  labelText?: string;
  unitText?: string;
};

function FloatingLabelInputCountFocusTrueFalseFalseTrue({ className, filledMessage = "Filled message", labelText = "Text label", unitText = "Unit" }: FloatingLabelInputCountFocusTrueFalseFalseTrueProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[537px] top-[1349px] w-[343px]"} data-name="Floating Label Input/Count/Focus/True/False/False/True">
      <Input7 />
      <Count4 />
    </div>
  );
}

function FillText9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center min-h-px min-w-px not-italic relative" data-name="Fill text">
      <p className="leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{labelText}</p>
      <p className="leading-[20px] relative shrink-0 text-[#101828] text-[14px] w-full">{filledMessage}</p>
    </div>
  );
}

function Input8() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[6px] relative w-full">
          <FillText9 />
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

function Count5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Count">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px] text-right">0/100</p>
      </div>
    </div>
  );
}
type FloatingLabelInputCountFocusTrueFalseTrueFalseProps = {
  className?: string;
  filledMessage?: string;
  labelText?: string;
};

function FloatingLabelInputCountFocusTrueFalseTrueFalse({ className, filledMessage = "Filled message", labelText = "Text label" }: FloatingLabelInputCountFocusTrueFalseTrueFalseProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[537px] top-[1197px] w-[343px]"} data-name="Floating Label Input/Count/Focus/True/False/True/False">
      <Input8 />
      <Count5 />
    </div>
  );
}

function Input9() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center not-italic px-[14px] py-[6px] relative w-full">
          <p className="leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{labelText}</p>
          <p className="leading-[20px] relative shrink-0 text-[#101828] text-[14px] w-full">{filledMessage}</p>
        </div>
      </div>
    </div>
  );
}

function ErrorMessage3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Error message">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#c10007] text-[12px]">{errorMessage}</p>
      </div>
    </div>
  );
}
type FloatingLabelInputCountErrorTrueFalseFalseFalseProps = {
  className?: string;
  errorMessage?: string;
  filledMessage?: string;
  labelText?: string;
};

function FloatingLabelInputCountErrorTrueFalseFalseFalse({ className, errorMessage = "Error message", filledMessage = "Filled message", labelText = "Text label" }: FloatingLabelInputCountErrorTrueFalseFalseFalseProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[960px] top-[1049px] w-[343px]"} data-name="Floating Label Input/Count/Error/True/False/False/False">
      <Input9 />
      <ErrorMessage3 />
    </div>
  );
}

function FillText10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center min-h-px min-w-px not-italic relative" data-name="Fill text">
      <p className="leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{labelText}</p>
      <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] w-full">{filledMessage}</p>
    </div>
  );
}

function Input10() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[8px] items-end px-[14px] py-[6px] relative w-full">
          <FillText10 />
          <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {unitText}
          </p>
        </div>
      </div>
    </div>
  );
}

function ErrorMessage4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Error message">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#c10007] text-[12px]">{errorMessage}</p>
      </div>
    </div>
  );
}
type FloatingLabelInputCountErrorTrueFalseFalseTrueProps = {
  className?: string;
  errorMessage?: string;
  filledMessage?: string;
  labelText?: string;
  unitText?: string;
};

function FloatingLabelInputCountErrorTrueFalseFalseTrue({ className, errorMessage = "Error message", filledMessage = "Filled message", labelText = "Text label", unitText = "Unit" }: FloatingLabelInputCountErrorTrueFalseFalseTrueProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[960px] top-[1349px] w-[343px]"} data-name="Floating Label Input/Count/Error/True/False/False/True">
      <Input10 />
      <ErrorMessage4 />
    </div>
  );
}

function FillText11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center min-h-px min-w-px not-italic relative" data-name="Fill text">
      <p className="leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{labelText}</p>
      <p className="leading-[20px] relative shrink-0 text-[#101828] text-[14px] w-full">{filledMessage}</p>
    </div>
  );
}

function Input11() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[6px] relative w-full">
          <FillText11 />
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

function ErrorMessage5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Error message">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#c10007] text-[12px]">{errorMessage}</p>
      </div>
    </div>
  );
}
type FloatingLabelInputCountErrorTrueFalseTrueFalseProps = {
  className?: string;
  errorMessage?: string;
  filledMessage?: string;
  labelText?: string;
};

function FloatingLabelInputCountErrorTrueFalseTrueFalse({ className, errorMessage = "Error message", filledMessage = "Filled message", labelText = "Text label" }: FloatingLabelInputCountErrorTrueFalseTrueFalseProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[960px] top-[1197px] w-[343px]"} data-name="Floating Label Input/Count/Error/True/False/True/False">
      <Input11 />
      <ErrorMessage5 />
    </div>
  );
}

function Input12() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center not-italic px-[14px] py-[6px] relative text-[#99a1af] w-full">
          <p className="leading-[16px] relative shrink-0 text-[12px] w-full">{labelText}</p>
          <p className="leading-[20px] relative shrink-0 text-[14px] w-full">{filledMessage}</p>
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
type FloatingLabelInputCountDisableTrueFalseFalseFalseProps = {
  className?: string;
  filledMessage?: string;
  labelText?: string;
};

function FloatingLabelInputCountDisableTrueFalseFalseFalse({ className, filledMessage = "Filled message", labelText = "Text label" }: FloatingLabelInputCountDisableTrueFalseFalseFalseProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[1383px] top-[1049px] w-[343px]"} data-name="Floating Label Input/Count/Disable/True/False/False/False">
      <Input12 />
      <Count6 />
    </div>
  );
}

function FillText12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center min-h-px min-w-px not-italic relative" data-name="Fill text">
      <p className="leading-[16px] relative shrink-0 text-[12px] w-full">{labelText}</p>
      <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px relative text-[14px] w-full">{filledMessage}</p>
    </div>
  );
}

function Input13() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[8px] items-end px-[14px] py-[6px] relative text-[#99a1af] w-full">
          <FillText12 />
          <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {unitText}
          </p>
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
type FloatingLabelInputCountDisableTrueFalseFalseTrueProps = {
  className?: string;
  filledMessage?: string;
  labelText?: string;
  unitText?: string;
};

function FloatingLabelInputCountDisableTrueFalseFalseTrue({ className, filledMessage = "Filled message", labelText = "Text label", unitText = "Unit" }: FloatingLabelInputCountDisableTrueFalseFalseTrueProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[1383px] top-[1349px] w-[343px]"} data-name="Floating Label Input/Count/Disable/True/False/False/True">
      <Input13 />
      <Count7 />
    </div>
  );
}

function FillText13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center min-h-px min-w-px not-italic relative text-[#99a1af]" data-name="Fill text">
      <p className="leading-[16px] relative shrink-0 text-[12px] w-full">{labelText}</p>
      <p className="leading-[20px] relative shrink-0 text-[14px] w-full">{filledMessage}</p>
    </div>
  );
}

function Input14() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[6px] relative w-full">
          <FillText13 />
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

function Count8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Count">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[12px] text-right">0/100</p>
      </div>
    </div>
  );
}
type FloatingLabelInputCountDisableTrueFalseTrueFalseProps = {
  className?: string;
  filledMessage?: string;
  labelText?: string;
};

function FloatingLabelInputCountDisableTrueFalseTrueFalse({ className, filledMessage = "Filled message", labelText = "Text label" }: FloatingLabelInputCountDisableTrueFalseTrueFalseProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[1383px] top-[1197px] w-[343px]"} data-name="Floating Label Input/Count/Disable/True/False/True/False">
      <Input14 />
      <Count8 />
    </div>
  );
}

function Input15() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center not-italic px-[14px] py-[6px] relative w-full">
          <p className="leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{labelText}</p>
          <p className="leading-[20px] relative shrink-0 text-[#101828] text-[14px] w-full">{filledMessage}</p>
        </div>
      </div>
    </div>
  );
}

function HelperText() {
  return (
    <div className="relative shrink-0 w-full" data-name="Helper text">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">{helperText}</p>
      </div>
    </div>
  );
}
type FloatingLabelInputHelperDefaultTrueFalseFalseFalseProps = {
  className?: string;
  filledMessage?: string;
  helperText?: string;
  labelText?: string;
};

function FloatingLabelInputHelperDefaultTrueFalseFalseFalse({ className, filledMessage = "Filled message", helperText = "Helper text", labelText = "Text label" }: FloatingLabelInputHelperDefaultTrueFalseFalseFalseProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[114px] top-[597px] w-[343px]"} data-name="Floating Label Input/Helper/Default/True/False/False/False">
      <Input15 />
      <HelperText />
    </div>
  );
}

function FillText14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center min-h-px min-w-px not-italic relative" data-name="Fill text">
      <p className="leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{labelText}</p>
      <p className="leading-[20px] relative shrink-0 text-[#101828] text-[14px] w-full">{filledMessage}</p>
    </div>
  );
}

function Input16() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[6px] relative w-full">
          <FillText14 />
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
    <div className="relative shrink-0 w-full" data-name="Helper text">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">{helperText}</p>
      </div>
    </div>
  );
}
type FloatingLabelInputHelperDefaultTrueFalseTrueFalseProps = {
  className?: string;
  filledMessage?: string;
  helperText?: string;
  labelText?: string;
};

function FloatingLabelInputHelperDefaultTrueFalseTrueFalse({ className, filledMessage = "Filled message", helperText = "Helper text", labelText = "Text label" }: FloatingLabelInputHelperDefaultTrueFalseTrueFalseProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[114px] top-[745px] w-[343px]"} data-name="Floating Label Input/Helper/Default/True/False/True/False">
      <Input16 />
      <HelperText1 />
    </div>
  );
}

function FillText15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center min-h-px min-w-px not-italic relative" data-name="Fill text">
      <p className="leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{labelText}</p>
      <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] w-full">{filledMessage}</p>
    </div>
  );
}

function Input17() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[8px] items-end px-[14px] py-[6px] relative w-full">
          <FillText15 />
          <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {unitText}
          </p>
        </div>
      </div>
    </div>
  );
}

function HelperText2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Helper text">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">{helperText}</p>
      </div>
    </div>
  );
}
type FloatingLabelInputHelperDefaultTrueFalseFalseTrueProps = {
  className?: string;
  filledMessage?: string;
  helperText?: string;
  labelText?: string;
  unitText?: string;
};

function FloatingLabelInputHelperDefaultTrueFalseFalseTrue({ className, filledMessage = "Filled message", helperText = "Helper text", labelText = "Text label", unitText = "Unit" }: FloatingLabelInputHelperDefaultTrueFalseFalseTrueProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[114px] top-[897px] w-[343px]"} data-name="Floating Label Input/Helper/Default/True/False/False/True">
      <Input17 />
      <HelperText2 />
    </div>
  );
}

function Input18() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center not-italic px-[14px] py-[6px] relative w-full">
          <p className="leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{labelText}</p>
          <p className="leading-[20px] relative shrink-0 text-[#101828] text-[14px] w-full">{filledMessage}</p>
        </div>
      </div>
    </div>
  );
}

function HelperText3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Helper text">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">{helperText}</p>
      </div>
    </div>
  );
}
type FloatingLabelInputHelperFocusTrueFalseFalseFalseProps = {
  className?: string;
  filledMessage?: string;
  helperText?: string;
  labelText?: string;
};

function FloatingLabelInputHelperFocusTrueFalseFalseFalse({ className, filledMessage = "Filled message", helperText = "Helper text", labelText = "Text label" }: FloatingLabelInputHelperFocusTrueFalseFalseFalseProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[537px] top-[597px] w-[343px]"} data-name="Floating Label Input/Helper/Focus/True/False/False/False">
      <Input18 />
      <HelperText3 />
    </div>
  );
}

function FillText16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center min-h-px min-w-px not-italic relative" data-name="Fill text">
      <p className="leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{labelText}</p>
      <p className="leading-[20px] relative shrink-0 text-[#101828] text-[14px] w-full">{filledMessage}</p>
    </div>
  );
}

function Input19() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[6px] relative w-full">
          <FillText16 />
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

function HelperText4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Helper text">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">{helperText}</p>
      </div>
    </div>
  );
}
type FloatingLabelInputHelperFocusTrueFalseTrueFalseProps = {
  className?: string;
  filledMessage?: string;
  helperText?: string;
  labelText?: string;
};

function FloatingLabelInputHelperFocusTrueFalseTrueFalse({ className, filledMessage = "Filled message", helperText = "Helper text", labelText = "Text label" }: FloatingLabelInputHelperFocusTrueFalseTrueFalseProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[537px] top-[745px] w-[343px]"} data-name="Floating Label Input/Helper/Focus/True/False/True/False">
      <Input19 />
      <HelperText4 />
    </div>
  );
}

function FillText17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center min-h-px min-w-px not-italic relative" data-name="Fill text">
      <p className="leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{labelText}</p>
      <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] w-full">{filledMessage}</p>
    </div>
  );
}

function Input20() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[8px] items-end px-[14px] py-[6px] relative w-full">
          <FillText17 />
          <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {unitText}
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
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">{helperText}</p>
      </div>
    </div>
  );
}
type FloatingLabelInputHelperFocusTrueFalseFalseTrueProps = {
  className?: string;
  filledMessage?: string;
  helperText?: string;
  labelText?: string;
  unitText?: string;
};

function FloatingLabelInputHelperFocusTrueFalseFalseTrue({ className, filledMessage = "Filled message", helperText = "Helper text", labelText = "Text label", unitText = "Unit" }: FloatingLabelInputHelperFocusTrueFalseFalseTrueProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[537px] top-[897px] w-[343px]"} data-name="Floating Label Input/Helper/Focus/True/False/False/True">
      <Input20 />
      <HelperText5 />
    </div>
  );
}

function Input21() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center px-[14px] py-[6px] relative rounded-[8px] shrink-0 w-[343px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] w-full">{labelText}</p>
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] w-full">{filledMessage}</p>
    </div>
  );
}

function ErrorMessage6() {
  return (
    <div className="content-stretch flex items-start px-[4px] relative shrink-0 w-[343px]" data-name="Error message">
      <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#c10007] text-[12px]">{errorMessage}</p>
    </div>
  );
}
type FloatingLabelInputHelperErrorTrueFalseFalseFalseProps = {
  className?: string;
  errorMessage?: string;
  filledMessage?: string;
  labelText?: string;
};

function FloatingLabelInputHelperErrorTrueFalseFalseFalse({ className, errorMessage = "Error message", filledMessage = "Filled message", labelText = "Text label" }: FloatingLabelInputHelperErrorTrueFalseFalseFalseProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[960px] top-[597px]"} data-name="Floating Label Input/Helper/Error/True/False/False/False">
      <Input21 />
      <ErrorMessage6 />
    </div>
  );
}

function FillText18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center min-h-px min-w-px not-italic relative" data-name="Fill text">
      <p className="leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{labelText}</p>
      <p className="leading-[20px] relative shrink-0 text-[#101828] text-[14px] w-full">{filledMessage}</p>
    </div>
  );
}

function Input22() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[6px] relative w-full">
          <FillText18 />
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
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#c10007] text-[12px]">{errorMessage}</p>
      </div>
    </div>
  );
}
type FloatingLabelInputHelperErrorTrueFalseTrueFalseProps = {
  className?: string;
  errorMessage?: string;
  filledMessage?: string;
  labelText?: string;
};

function FloatingLabelInputHelperErrorTrueFalseTrueFalse({ className, errorMessage = "Error message", filledMessage = "Filled message", labelText = "Text label" }: FloatingLabelInputHelperErrorTrueFalseTrueFalseProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[960px] top-[745px] w-[343px]"} data-name="Floating Label Input/Helper/Error/True/False/True/False">
      <Input22 />
      <ErrorMessage7 />
    </div>
  );
}

function FillText19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center min-h-px min-w-px not-italic relative" data-name="Fill text">
      <p className="leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{labelText}</p>
      <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] w-full">{filledMessage}</p>
    </div>
  );
}

function Input23() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[8px] items-end px-[14px] py-[6px] relative w-full">
          <FillText19 />
          <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {unitText}
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
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#c10007] text-[12px]">{errorMessage}</p>
      </div>
    </div>
  );
}
type FloatingLabelInputHelperErrorTrueFalseFalseTrueProps = {
  className?: string;
  errorMessage?: string;
  filledMessage?: string;
  labelText?: string;
  unitText?: string;
};

function FloatingLabelInputHelperErrorTrueFalseFalseTrue({ className, errorMessage = "Error message", filledMessage = "Filled message", labelText = "Text label", unitText = "Unit" }: FloatingLabelInputHelperErrorTrueFalseFalseTrueProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[960px] top-[897px] w-[343px]"} data-name="Floating Label Input/Helper/Error/True/False/False/True">
      <Input23 />
      <ErrorMessage8 />
    </div>
  );
}

function Input24() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center not-italic px-[14px] py-[6px] relative text-[#99a1af] w-full">
          <p className="leading-[16px] relative shrink-0 text-[12px] w-full">{labelText}</p>
          <p className="leading-[20px] relative shrink-0 text-[14px] w-full">{filledMessage}</p>
        </div>
      </div>
    </div>
  );
}

function HelperText6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Helper text">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[12px]">{helperText}</p>
      </div>
    </div>
  );
}
type FloatingLabelInputHelperDisableTrueFalseFalseFalseProps = {
  className?: string;
  filledMessage?: string;
  helperText?: string;
  labelText?: string;
};

function FloatingLabelInputHelperDisableTrueFalseFalseFalse({ className, filledMessage = "Filled message", helperText = "Helper text", labelText = "Text label" }: FloatingLabelInputHelperDisableTrueFalseFalseFalseProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[1383px] top-[597px] w-[343px]"} data-name="Floating Label Input/Helper/Disable/True/False/False/False">
      <Input24 />
      <HelperText6 />
    </div>
  );
}

function FillText20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center min-h-px min-w-px not-italic relative text-[#99a1af]" data-name="Fill text">
      <p className="leading-[16px] relative shrink-0 text-[12px] w-full">{labelText}</p>
      <p className="leading-[20px] relative shrink-0 text-[14px] w-full">{filledMessage}</p>
    </div>
  );
}

function Input25() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[6px] relative w-full">
          <FillText20 />
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

function HelperText7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Helper text">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[12px]">{helperText}</p>
      </div>
    </div>
  );
}
type FloatingLabelInputHelperDisableTrueFalseTrueFalseProps = {
  className?: string;
  filledMessage?: string;
  helperText?: string;
  labelText?: string;
};

function FloatingLabelInputHelperDisableTrueFalseTrueFalse({ className, filledMessage = "Filled message", helperText = "Helper text", labelText = "Text label" }: FloatingLabelInputHelperDisableTrueFalseTrueFalseProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[1383px] top-[745px] w-[343px]"} data-name="Floating Label Input/Helper/Disable/True/False/True/False">
      <Input25 />
      <HelperText7 />
    </div>
  );
}

function FillText21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center min-h-px min-w-px not-italic relative" data-name="Fill text">
      <p className="leading-[16px] relative shrink-0 text-[12px] w-full">{labelText}</p>
      <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px relative text-[14px] w-full">{filledMessage}</p>
    </div>
  );
}

function Input26() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[8px] items-end px-[14px] py-[6px] relative text-[#99a1af] w-full">
          <FillText21 />
          <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {unitText}
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
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[12px]">{helperText}</p>
      </div>
    </div>
  );
}
type FloatingLabelInputHelperDisableTrueFalseFalseTrueProps = {
  className?: string;
  filledMessage?: string;
  helperText?: string;
  labelText?: string;
  unitText?: string;
};

function FloatingLabelInputHelperDisableTrueFalseFalseTrue({ className, filledMessage = "Filled message", helperText = "Helper text", labelText = "Text label", unitText = "Unit" }: FloatingLabelInputHelperDisableTrueFalseFalseTrueProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[1383px] top-[897px] w-[343px]"} data-name="Floating Label Input/Helper/Disable/True/False/False/True">
      <Input26 />
      <HelperText8 />
    </div>
  );
}

function Input27() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center not-italic px-[14px] py-[6px] relative w-full">
          <p className="leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{labelText}</p>
          <p className="leading-[20px] relative shrink-0 text-[#101828] text-[14px] w-full">{filledMessage}</p>
        </div>
      </div>
    </div>
  );
}

function HelperText9() {
  return (
    <div className="content-stretch flex font-['Noto_sans_thai:Regular',sans-serif] gap-[8px] items-start leading-[16px] not-italic px-[4px] relative shrink-0 text-[#6a7282] text-[12px] w-[343px]" data-name="Helper text">
      <p className="flex-[1_0_0] min-h-px min-w-px relative">{helperText}</p>
      <p className="relative shrink-0 text-right whitespace-nowrap">0/100</p>
    </div>
  );
}
type FloatingLabelInputHelperCountDefaultTrueFalseFalseFalseProps = {
  className?: string;
  filledMessage?: string;
  helperText?: string;
  labelText?: string;
};

function FloatingLabelInputHelperCountDefaultTrueFalseFalseFalse({ className, filledMessage = "Filled message", helperText = "Helper text", labelText = "Text label" }: FloatingLabelInputHelperCountDefaultTrueFalseFalseFalseProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[114px] top-[1501px]"} data-name="Floating Label Input/Helper+Count/Default/True/False/False/False">
      <Input27 />
      <HelperText9 />
    </div>
  );
}

function FillText22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center min-h-px min-w-px not-italic relative" data-name="Fill text">
      <p className="leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{labelText}</p>
      <p className="leading-[20px] relative shrink-0 text-[#101828] text-[14px] w-full">{filledMessage}</p>
    </div>
  );
}

function Input28() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[6px] relative w-full">
          <FillText22 />
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

function HelperText10() {
  return (
    <div className="content-stretch flex font-['Noto_sans_thai:Regular',sans-serif] gap-[8px] items-start leading-[16px] not-italic px-[4px] relative shrink-0 text-[#6a7282] text-[12px] w-[343px]" data-name="Helper text">
      <p className="flex-[1_0_0] min-h-px min-w-px relative">{helperText}</p>
      <p className="relative shrink-0 text-right whitespace-nowrap">0/100</p>
    </div>
  );
}
type FloatingLabelInputHelperCountDefaultTrueFalseTrueFalseProps = {
  className?: string;
  filledMessage?: string;
  helperText?: string;
  labelText?: string;
};

function FloatingLabelInputHelperCountDefaultTrueFalseTrueFalse({ className, filledMessage = "Filled message", helperText = "Helper text", labelText = "Text label" }: FloatingLabelInputHelperCountDefaultTrueFalseTrueFalseProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[114px] top-[1649px]"} data-name="Floating Label Input/Helper+Count/Default/True/False/True/False">
      <Input28 />
      <HelperText10 />
    </div>
  );
}

function FillText23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center min-h-px min-w-px not-italic relative" data-name="Fill text">
      <p className="leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{labelText}</p>
      <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] w-full">{filledMessage}</p>
    </div>
  );
}

function Input29() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[8px] items-end px-[14px] py-[6px] relative w-full">
          <FillText23 />
          <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {unitText}
          </p>
        </div>
      </div>
    </div>
  );
}

function HelperText11() {
  return (
    <div className="content-stretch flex font-['Noto_sans_thai:Regular',sans-serif] gap-[8px] items-start leading-[16px] not-italic px-[4px] relative shrink-0 text-[#6a7282] text-[12px] w-[343px]" data-name="Helper text">
      <p className="flex-[1_0_0] min-h-px min-w-px relative">{helperText}</p>
      <p className="relative shrink-0 text-right whitespace-nowrap">0/100</p>
    </div>
  );
}
type FloatingLabelInputHelperCountDefaultTrueFalseFalseTrueProps = {
  className?: string;
  filledMessage?: string;
  helperText?: string;
  labelText?: string;
  unitText?: string;
};

function FloatingLabelInputHelperCountDefaultTrueFalseFalseTrue({ className, filledMessage = "Filled message", helperText = "Helper text", labelText = "Text label", unitText = "Unit" }: FloatingLabelInputHelperCountDefaultTrueFalseFalseTrueProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[114px] top-[1801px]"} data-name="Floating Label Input/Helper+Count/Default/True/False/False/True">
      <Input29 />
      <HelperText11 />
    </div>
  );
}

function Input30() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center not-italic px-[14px] py-[6px] relative w-full">
          <p className="leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{labelText}</p>
          <p className="leading-[20px] relative shrink-0 text-[#101828] text-[14px] w-full">{filledMessage}</p>
        </div>
      </div>
    </div>
  );
}

function HelperText12() {
  return (
    <div className="content-stretch flex font-['Noto_sans_thai:Regular',sans-serif] gap-[8px] items-start leading-[16px] not-italic px-[4px] relative shrink-0 text-[#6a7282] text-[12px] w-[343px]" data-name="Helper text">
      <p className="flex-[1_0_0] min-h-px min-w-px relative">{helperText}</p>
      <p className="relative shrink-0 text-right whitespace-nowrap">0/100</p>
    </div>
  );
}
type FloatingLabelInputHelperCountFocusTrueFalseFalseFalseProps = {
  className?: string;
  filledMessage?: string;
  helperText?: string;
  labelText?: string;
};

function FloatingLabelInputHelperCountFocusTrueFalseFalseFalse({ className, filledMessage = "Filled message", helperText = "Helper text", labelText = "Text label" }: FloatingLabelInputHelperCountFocusTrueFalseFalseFalseProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[537px] top-[1501px]"} data-name="Floating Label Input/Helper+Count/Focus/True/False/False/False">
      <Input30 />
      <HelperText12 />
    </div>
  );
}

function FillText24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center min-h-px min-w-px not-italic relative" data-name="Fill text">
      <p className="leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{labelText}</p>
      <p className="leading-[20px] relative shrink-0 text-[#101828] text-[14px] w-full">{filledMessage}</p>
    </div>
  );
}

function Input31() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[6px] relative w-full">
          <FillText24 />
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
      <p className="flex-[1_0_0] min-h-px min-w-px relative">{helperText}</p>
      <p className="relative shrink-0 text-right whitespace-nowrap">0/100</p>
    </div>
  );
}
type FloatingLabelInputHelperCountFocusTrueFalseTrueFalseProps = {
  className?: string;
  filledMessage?: string;
  helperText?: string;
  labelText?: string;
};

function FloatingLabelInputHelperCountFocusTrueFalseTrueFalse({ className, filledMessage = "Filled message", helperText = "Helper text", labelText = "Text label" }: FloatingLabelInputHelperCountFocusTrueFalseTrueFalseProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[537px] top-[1649px]"} data-name="Floating Label Input/Helper+Count/Focus/True/False/True/False">
      <Input31 />
      <HelperText13 />
    </div>
  );
}

function FillText25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center min-h-px min-w-px not-italic relative" data-name="Fill text">
      <p className="leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{labelText}</p>
      <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] w-full">{filledMessage}</p>
    </div>
  );
}

function Input32() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[8px] items-end px-[14px] py-[6px] relative w-full">
          <FillText25 />
          <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {unitText}
          </p>
        </div>
      </div>
    </div>
  );
}

function HelperText14() {
  return (
    <div className="content-stretch flex font-['Noto_sans_thai:Regular',sans-serif] gap-[8px] items-start leading-[16px] not-italic px-[4px] relative shrink-0 text-[#6a7282] text-[12px] w-[343px]" data-name="Helper text">
      <p className="flex-[1_0_0] min-h-px min-w-px relative">{helperText}</p>
      <p className="relative shrink-0 text-right whitespace-nowrap">0/100</p>
    </div>
  );
}
type FloatingLabelInputHelperCountFocusTrueFalseFalseTrueProps = {
  className?: string;
  filledMessage?: string;
  helperText?: string;
  labelText?: string;
  unitText?: string;
};

function FloatingLabelInputHelperCountFocusTrueFalseFalseTrue({ className, filledMessage = "Filled message", helperText = "Helper text", labelText = "Text label", unitText = "Unit" }: FloatingLabelInputHelperCountFocusTrueFalseFalseTrueProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[537px] top-[1801px] w-[343px]"} data-name="Floating Label Input/Helper+Count/Focus/True/False/False/True">
      <Input32 />
      <HelperText14 />
    </div>
  );
}

function Input33() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center not-italic px-[14px] py-[6px] relative w-full">
          <p className="leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{labelText}</p>
          <p className="leading-[20px] relative shrink-0 text-[#101828] text-[14px] w-full">{filledMessage}</p>
        </div>
      </div>
    </div>
  );
}

function ErrorMessage9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Error message">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#c10007] text-[12px]">{errorMessage}</p>
      </div>
    </div>
  );
}
type FloatingLabelInputHelperCountErrorTrueFalseFalseFalseProps = {
  className?: string;
  errorMessage?: string;
  filledMessage?: string;
  labelText?: string;
};

function FloatingLabelInputHelperCountErrorTrueFalseFalseFalse({ className, errorMessage = "Error message", filledMessage = "Filled message", labelText = "Text label" }: FloatingLabelInputHelperCountErrorTrueFalseFalseFalseProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[960px] top-[1501px] w-[343px]"} data-name="Floating Label Input/Helper+Count/Error/True/False/False/False">
      <Input33 />
      <ErrorMessage9 />
    </div>
  );
}

function FillText26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center min-h-px min-w-px not-italic relative" data-name="Fill text">
      <p className="leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{labelText}</p>
      <p className="leading-[20px] relative shrink-0 text-[#101828] text-[14px] w-full">{filledMessage}</p>
    </div>
  );
}

function Input34() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[6px] relative w-full">
          <FillText26 />
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
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#c10007] text-[12px]">{errorMessage}</p>
      </div>
    </div>
  );
}
type FloatingLabelInputHelperCountErrorTrueFalseTrueFalseProps = {
  className?: string;
  errorMessage?: string;
  filledMessage?: string;
  labelText?: string;
};

function FloatingLabelInputHelperCountErrorTrueFalseTrueFalse({ className, errorMessage = "Error message", filledMessage = "Filled message", labelText = "Text label" }: FloatingLabelInputHelperCountErrorTrueFalseTrueFalseProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[960px] top-[1649px] w-[343px]"} data-name="Floating Label Input/Helper+Count/Error/True/False/True/False">
      <Input34 />
      <ErrorMessage10 />
    </div>
  );
}

function FillText27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center min-h-px min-w-px not-italic relative" data-name="Fill text">
      <p className="leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{labelText}</p>
      <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] w-full">{filledMessage}</p>
    </div>
  );
}

function Input35() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[8px] items-end px-[14px] py-[6px] relative w-full">
          <FillText27 />
          <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {unitText}
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
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#c10007] text-[12px]">{errorMessage}</p>
      </div>
    </div>
  );
}
type FloatingLabelInputHelperCountErrorTrueFalseFalseTrueProps = {
  className?: string;
  errorMessage?: string;
  filledMessage?: string;
  labelText?: string;
  unitText?: string;
};

function FloatingLabelInputHelperCountErrorTrueFalseFalseTrue({ className, errorMessage = "Error message", filledMessage = "Filled message", labelText = "Text label", unitText = "Unit" }: FloatingLabelInputHelperCountErrorTrueFalseFalseTrueProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[960px] top-[1801px] w-[343px]"} data-name="Floating Label Input/Helper+Count/Error/True/False/False/True">
      <Input35 />
      <ErrorMessage11 />
    </div>
  );
}

function Input36() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center not-italic px-[14px] py-[6px] relative text-[#99a1af] w-full">
          <p className="leading-[16px] relative shrink-0 text-[12px] w-full">{labelText}</p>
          <p className="leading-[20px] relative shrink-0 text-[14px] w-full">{filledMessage}</p>
        </div>
      </div>
    </div>
  );
}

function HelperText15() {
  return (
    <div className="content-stretch flex font-['Noto_sans_thai:Regular',sans-serif] gap-[8px] items-start leading-[16px] not-italic px-[4px] relative shrink-0 text-[#99a1af] text-[12px] w-[343px]" data-name="Helper text">
      <p className="flex-[1_0_0] min-h-px min-w-px relative">{helperText}</p>
      <p className="relative shrink-0 text-right whitespace-nowrap">0/100</p>
    </div>
  );
}
type FloatingLabelInputHelperCountDisableTrueFalseFalseFalseProps = {
  className?: string;
  filledMessage?: string;
  helperText?: string;
  labelText?: string;
};

function FloatingLabelInputHelperCountDisableTrueFalseFalseFalse({ className, filledMessage = "Filled message", helperText = "Helper text", labelText = "Text label" }: FloatingLabelInputHelperCountDisableTrueFalseFalseFalseProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[1383px] top-[1501px]"} data-name="Floating Label Input/Helper+Count/Disable/True/False/False/False">
      <Input36 />
      <HelperText15 />
    </div>
  );
}

function FillText28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center min-h-px min-w-px not-italic relative text-[#99a1af]" data-name="Fill text">
      <p className="leading-[16px] relative shrink-0 text-[12px] w-full">{labelText}</p>
      <p className="leading-[20px] relative shrink-0 text-[14px] w-full">{filledMessage}</p>
    </div>
  );
}

function Input37() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[6px] relative w-full">
          <FillText28 />
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
      <p className="flex-[1_0_0] min-h-px min-w-px relative">{helperText}</p>
      <p className="relative shrink-0 text-right whitespace-nowrap">0/100</p>
    </div>
  );
}
type FloatingLabelInputHelperCountDisableTrueFalseTrueFalseProps = {
  className?: string;
  filledMessage?: string;
  helperText?: string;
  labelText?: string;
};

function FloatingLabelInputHelperCountDisableTrueFalseTrueFalse({ className, filledMessage = "Filled message", helperText = "Helper text", labelText = "Text label" }: FloatingLabelInputHelperCountDisableTrueFalseTrueFalseProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[1383px] top-[1649px]"} data-name="Floating Label Input/Helper+Count/Disable/True/False/True/False">
      <Input37 />
      <HelperText16 />
    </div>
  );
}

function FillText29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Noto_sans_thai:Regular',sans-serif] items-start justify-center min-h-px min-w-px not-italic relative" data-name="Fill text">
      <p className="leading-[16px] relative shrink-0 text-[12px] w-full">{labelText}</p>
      <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px relative text-[14px] w-full">{filledMessage}</p>
    </div>
  );
}

function Input38() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[6px] relative text-[#99a1af] w-full">
          <FillText29 />
          <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {unitText}
          </p>
        </div>
      </div>
    </div>
  );
}

function HelperText17() {
  return (
    <div className="content-stretch flex font-['Noto_sans_thai:Regular',sans-serif] gap-[8px] items-start leading-[16px] not-italic px-[4px] relative shrink-0 text-[#99a1af] text-[12px] w-[343px]" data-name="Helper text">
      <p className="flex-[1_0_0] min-h-px min-w-px relative">{helperText}</p>
      <p className="relative shrink-0 text-right whitespace-nowrap">0/100</p>
    </div>
  );
}
type FloatingLabelInputHelperCountDisableTrueFalseFalseTrueProps = {
  className?: string;
  filledMessage?: string;
  helperText?: string;
  labelText?: string;
  unitText?: string;
};

function FloatingLabelInputHelperCountDisableTrueFalseFalseTrue({ className, filledMessage = "Filled message", helperText = "Helper text", labelText = "Text label", unitText = "Unit" }: FloatingLabelInputHelperCountDisableTrueFalseFalseTrueProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[1383px] top-[1801px]"} data-name="Floating Label Input/Helper+Count/Disable/True/False/False/True">
      <Input38 />
      <HelperText17 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <FloatingLabelInputDefaultDefaultTrueFalseFalseFalse />
      <FloatingLabelInputDefaultDefaultTrueFalseFalseTrue />
      <FloatingLabelInputDefaultFocusTrueFalseFalseFalse />
      <FloatingLabelInputDefaultFocusTrueFalseFalseTrue />
      <FloatingLabelInputDefaultErrorTrueFalseFalseFalse />
      <FloatingLabelInputDefaultErrorTrueFalseFalseTrue />
      <FloatingLabelInputDefaultDisableTrueFalseFalseFalse />
      <FloatingLabelInputDefaultDisableTrueFalseFalseTrue />
      <FloatingLabelInputDefaultDefaultTrueFalseTrueFalse />
      <FloatingLabelInputDefaultFocusTrueFalseTrueFalse />
      <FloatingLabelInputDefaultErrorTrueFalseTrueFalse />
      <FloatingLabelInputDefaultDisableTrueFalseTrueFalse />
      <FloatingLabelInputCountDefaultTrueFalseFalseFalse />
      <FloatingLabelInputCountDefaultTrueFalseTrueFalse />
      <FloatingLabelInputCountDefaultTrueFalseFalseTrue />
      <FloatingLabelInputCountFocusTrueFalseFalseFalse />
      <FloatingLabelInputCountFocusTrueFalseFalseTrue />
      <FloatingLabelInputCountFocusTrueFalseTrueFalse />
      <FloatingLabelInputCountErrorTrueFalseFalseFalse />
      <FloatingLabelInputCountErrorTrueFalseFalseTrue />
      <FloatingLabelInputCountErrorTrueFalseTrueFalse />
      <FloatingLabelInputCountDisableTrueFalseFalseFalse />
      <FloatingLabelInputCountDisableTrueFalseFalseTrue />
      <FloatingLabelInputCountDisableTrueFalseTrueFalse />
      <FloatingLabelInputHelperDefaultTrueFalseFalseFalse />
      <FloatingLabelInputHelperDefaultTrueFalseTrueFalse />
      <FloatingLabelInputHelperDefaultTrueFalseFalseTrue />
      <FloatingLabelInputHelperFocusTrueFalseFalseFalse />
      <FloatingLabelInputHelperFocusTrueFalseTrueFalse />
      <FloatingLabelInputHelperFocusTrueFalseFalseTrue />
      <FloatingLabelInputHelperErrorTrueFalseFalseFalse />
      <FloatingLabelInputHelperErrorTrueFalseTrueFalse />
      <FloatingLabelInputHelperErrorTrueFalseFalseTrue />
      <FloatingLabelInputHelperDisableTrueFalseFalseFalse />
      <FloatingLabelInputHelperDisableTrueFalseTrueFalse />
      <FloatingLabelInputHelperDisableTrueFalseFalseTrue />
      <FloatingLabelInputHelperCountDefaultTrueFalseFalseFalse />
      <FloatingLabelInputHelperCountDefaultTrueFalseTrueFalse />
      <FloatingLabelInputHelperCountDefaultTrueFalseFalseTrue />
      <FloatingLabelInputHelperCountFocusTrueFalseFalseFalse />
      <FloatingLabelInputHelperCountFocusTrueFalseTrueFalse />
      <FloatingLabelInputHelperCountFocusTrueFalseFalseTrue />
      <FloatingLabelInputHelperCountErrorTrueFalseFalseFalse />
      <FloatingLabelInputHelperCountErrorTrueFalseTrueFalse />
      <FloatingLabelInputHelperCountErrorTrueFalseFalseTrue />
      <FloatingLabelInputHelperCountDisableTrueFalseFalseFalse />
      <FloatingLabelInputHelperCountDisableTrueFalseTrueFalse />
      <FloatingLabelInputHelperCountDisableTrueFalseFalseTrue />
    </div>
  );
}