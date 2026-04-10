type TextAreaDefaultNoNoNoNoProps = {
  className?: string;
  textLabel?: string;
};

function TextAreaDefaultNoNoNoNo({ className, textLabel = "Text label" }: TextAreaDefaultNoNoNoNoProps) {
  return (
    <div className={className || "absolute bg-white content-stretch flex h-[116px] items-start left-[180px] p-[14px] rounded-[8px] top-[176px] w-[343px]"} data-name="Text area/Default/No/No/No/No">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] h-full leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">{textLabel}</p>
    </div>
  );
}
type TextAreaActiveNoNoNoNoProps = {
  className?: string;
  textLabel?: string;
};

function TextAreaActiveNoNoNoNo({ className, textLabel = "Text label" }: TextAreaActiveNoNoNoNoProps) {
  return (
    <div className={className || "absolute bg-white content-stretch flex h-[116px] items-start left-[603px] p-[14px] rounded-[8px] top-[176px] w-[343px]"} data-name="Text area/Active/No/No/No/No">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] h-full leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">{textLabel}</p>
      <p className="absolute font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] left-[13px] text-[16px] text-[rgba(2,70,166,0.5)] top-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        |
      </p>
    </div>
  );
}
type TextAreaDisableNoNoNoNoProps = {
  className?: string;
  textLabel?: string;
};

function TextAreaDisableNoNoNoNo({ className, textLabel = "Text label" }: TextAreaDisableNoNoNoNoProps) {
  return (
    <div className={className || "absolute bg-[#f3f4f6] content-stretch flex h-[116px] items-start left-[1449px] p-[14px] rounded-[8px] top-[176px] w-[343px]"} data-name="Text area/Disable/No/No/No/No">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] h-full leading-[20px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[16px]">{textLabel}</p>
    </div>
  );
}

function TextArea1() {
  return (
    <div className="bg-white h-[116px] relative rounded-[8px] shrink-0 w-full" data-name="Text area">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-start p-[14px] relative size-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] h-full leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">{textLabel}</p>
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
type TextAreaDefaultNoYesYesNoProps = {
  className?: string;
  textLabel?: string;
};

function TextAreaDefaultNoYesYesNo({ className, textLabel = "Text label" }: TextAreaDefaultNoYesYesNoProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[180px] top-[392px]"} data-name="Text area/Default/No/Yes/Yes/No">
      <TextArea1 />
      <HelperText />
    </div>
  );
}

function TextArea2() {
  return (
    <div className="bg-white h-[116px] relative rounded-[8px] shrink-0 w-full" data-name="Text area">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-start p-[14px] relative size-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] h-full leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">{textLabel}</p>
      </div>
    </div>
  );
}

function HelperText1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Helper text">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">Helper text</p>
      </div>
    </div>
  );
}
type TextAreaDefaultNoYesNoNoProps = {
  className?: string;
  textLabel?: string;
};

function TextAreaDefaultNoYesNoNo({ className, textLabel = "Text label" }: TextAreaDefaultNoYesNoNoProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[180px] top-[824px] w-[343px]"} data-name="Text area/Default/No/Yes/No/No">
      <TextArea2 />
      <HelperText1 />
    </div>
  );
}

function TextArea3() {
  return (
    <div className="bg-white h-[116px] relative rounded-[8px] shrink-0 w-full" data-name="Text area">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-start p-[14px] relative size-full text-[16px]">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] h-full leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282]">{textLabel}</p>
        <p className="absolute font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] left-[13px] text-[rgba(2,70,166,0.5)] top-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          |
        </p>
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
type TextAreaActiveNoNoYesNoProps = {
  className?: string;
  textLabel?: string;
};

function TextAreaActiveNoNoYesNo({ className, textLabel = "Text label" }: TextAreaActiveNoNoYesNoProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[603px] top-[608px] w-[343px]"} data-name="Text area/Active/No/No/Yes/No">
      <TextArea3 />
      <Count />
    </div>
  );
}

function TextArea4() {
  return (
    <div className="bg-white h-[116px] relative rounded-[8px] shrink-0 w-full" data-name="Text area">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-start p-[14px] relative size-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] h-full leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">{textLabel}</p>
      </div>
    </div>
  );
}

function ErrorMessage() {
  return (
    <div className="content-stretch flex items-start px-[4px] relative shrink-0 w-[343px]" data-name="Error message">
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#c10007] text-[12px] whitespace-nowrap">{errorMessage}</p>
    </div>
  );
}
type TextAreaErrorNoNoYesNoProps = {
  className?: string;
  errorMessage?: string;
  textLabel?: string;
};

function TextAreaErrorNoNoYesNo({ className, errorMessage = "Error message", textLabel = "Text label" }: TextAreaErrorNoNoYesNoProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[1026px] top-[608px]"} data-name="Text area/Error/No/No/Yes/No">
      <TextArea4 />
      <ErrorMessage />
    </div>
  );
}

function TextArea5() {
  return (
    <div className="bg-[#f3f4f6] h-[116px] relative rounded-[8px] shrink-0 w-full" data-name="Text area">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-start p-[14px] relative size-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] h-full leading-[20px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[16px]">{textLabel}</p>
      </div>
    </div>
  );
}

function Count1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Count">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[12px] text-right">0/100</p>
      </div>
    </div>
  );
}
type TextAreaDisableNoNoYesNoProps = {
  className?: string;
  textLabel?: string;
};

function TextAreaDisableNoNoYesNo({ className, textLabel = "Text label" }: TextAreaDisableNoNoYesNoProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[1449px] top-[608px] w-[343px]"} data-name="Text area/Disable/No/No/Yes/No">
      <TextArea5 />
      <Count1 />
    </div>
  );
}

function TextArea6() {
  return (
    <div className="bg-white h-[116px] relative rounded-[8px] shrink-0 w-full" data-name="Text area">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-start p-[14px] relative size-full text-[16px]">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] h-full leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282]">{textLabel}</p>
        <p className="absolute font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] left-[13px] text-[rgba(2,70,166,0.5)] top-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          |
        </p>
      </div>
    </div>
  );
}

function HelperText2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Helper text">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">Helper text</p>
      </div>
    </div>
  );
}
type TextAreaActiveNoYesNoNoProps = {
  className?: string;
  textLabel?: string;
};

function TextAreaActiveNoYesNoNo({ className, textLabel = "Text label" }: TextAreaActiveNoYesNoNoProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[603px] top-[824px] w-[343px]"} data-name="Text area/Active/No/Yes/No/No">
      <TextArea6 />
      <HelperText2 />
    </div>
  );
}

function TextArea7() {
  return (
    <div className="bg-white h-[116px] relative rounded-[8px] shrink-0 w-full" data-name="Text area">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-start p-[14px] relative size-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] h-full leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">{textLabel}</p>
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
type TextAreaErrorNoYesNoNoProps = {
  className?: string;
  errorMessage?: string;
  textLabel?: string;
};

function TextAreaErrorNoYesNoNo({ className, errorMessage = "Error message", textLabel = "Text label" }: TextAreaErrorNoYesNoNoProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[1026px] top-[824px] w-[343px]"} data-name="Text area/Error/No/Yes/No/No">
      <TextArea7 />
      <ErrorMessage1 />
    </div>
  );
}

function TextArea8() {
  return (
    <div className="bg-[#f3f4f6] h-[116px] relative rounded-[8px] shrink-0 w-full" data-name="Text area">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-start p-[14px] relative size-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] h-full leading-[20px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[16px]">{textLabel}</p>
      </div>
    </div>
  );
}

function HelperText3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Helper text">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[12px]">Helper text</p>
      </div>
    </div>
  );
}
type TextAreaDisableNoYesNoNoProps = {
  className?: string;
  textLabel?: string;
};

function TextAreaDisableNoYesNoNo({ className, textLabel = "Text label" }: TextAreaDisableNoYesNoNoProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[1449px] top-[824px] w-[343px]"} data-name="Text area/Disable/No/Yes/No/No">
      <TextArea8 />
      <HelperText3 />
    </div>
  );
}

function TextArea9() {
  return (
    <div className="bg-white h-[116px] relative rounded-[8px] shrink-0 w-full" data-name="Text area">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-start p-[14px] relative size-full text-[16px]">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] h-full leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282]">{textLabel}</p>
        <p className="absolute font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] left-[13px] text-[rgba(2,70,166,0.5)] top-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          |
        </p>
      </div>
    </div>
  );
}

function HelperText4() {
  return (
    <div className="content-stretch flex font-['Noto_sans_thai:Regular',sans-serif] gap-[8px] items-start leading-[16px] not-italic px-[4px] relative shrink-0 text-[#6a7282] text-[12px] w-[343px]" data-name="Helper text">
      <p className="flex-[1_0_0] min-h-px min-w-px relative">Helper text</p>
      <p className="relative shrink-0 text-right whitespace-nowrap">0/100</p>
    </div>
  );
}
type TextAreaActiveNoYesYesNoProps = {
  className?: string;
  textLabel?: string;
};

function TextAreaActiveNoYesYesNo({ className, textLabel = "Text label" }: TextAreaActiveNoYesYesNoProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[603px] top-[392px]"} data-name="Text area/Active/No/Yes/Yes/No">
      <TextArea9 />
      <HelperText4 />
    </div>
  );
}

function TextArea10() {
  return (
    <div className="bg-white h-[116px] relative rounded-[8px] shrink-0 w-full" data-name="Text area">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-start p-[14px] relative size-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] h-full leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">{textLabel}</p>
      </div>
    </div>
  );
}

function ErrorMessage2() {
  return (
    <div className="content-stretch flex items-start px-[4px] relative shrink-0 w-[343px]" data-name="Error message">
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#c10007] text-[12px] whitespace-nowrap">{errorMessage}</p>
    </div>
  );
}
type TextAreaErrorNoYesYesNoProps = {
  className?: string;
  errorMessage?: string;
  textLabel?: string;
};

function TextAreaErrorNoYesYesNo({ className, errorMessage = "Error message", textLabel = "Text label" }: TextAreaErrorNoYesYesNoProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[1026px] top-[392px]"} data-name="Text area/Error/No/Yes/Yes/No">
      <TextArea10 />
      <ErrorMessage2 />
    </div>
  );
}

function TextArea11() {
  return (
    <div className="bg-white h-[116px] relative rounded-[8px] shrink-0 w-full" data-name="Text area">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-start p-[14px] relative size-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] h-full leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">{textLabel}</p>
      </div>
    </div>
  );
}

function ErrorMessage3() {
  return (
    <div className="content-stretch flex items-start px-[4px] relative shrink-0 w-[343px]" data-name="Error message">
      <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#c10007] text-[12px]">{errorMessage}</p>
    </div>
  );
}
type TextAreaErrorNoNoNoNoProps = {
  className?: string;
  errorMessage?: string;
  textLabel?: string;
};

function TextAreaErrorNoNoNoNo({ className, errorMessage = "Error message", textLabel = "Text label" }: TextAreaErrorNoNoNoNoProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[1026px] top-[176px]"} data-name="Text area/Error/No/No/No/No">
      <TextArea11 />
      <ErrorMessage3 />
    </div>
  );
}

function TextArea12() {
  return (
    <div className="bg-[#f3f4f6] h-[116px] relative rounded-[8px] shrink-0 w-full" data-name="Text area">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-start p-[14px] relative size-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] h-full leading-[20px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[16px]">{textLabel}</p>
      </div>
    </div>
  );
}

function HelperText5() {
  return (
    <div className="content-stretch flex font-['Noto_sans_thai:Regular',sans-serif] gap-[8px] items-start leading-[16px] not-italic px-[4px] relative shrink-0 text-[#99a1af] text-[12px] w-[343px]" data-name="Helper text">
      <p className="flex-[1_0_0] min-h-px min-w-px relative">Helper text</p>
      <p className="relative shrink-0 text-right whitespace-nowrap">0/100</p>
    </div>
  );
}
type TextAreaDisableNoYesYesNoProps = {
  className?: string;
  textLabel?: string;
};

function TextAreaDisableNoYesYesNo({ className, textLabel = "Text label" }: TextAreaDisableNoYesYesNoProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[1449px] top-[392px]"} data-name="Text area/Disable/No/Yes/Yes/No">
      <TextArea12 />
      <HelperText5 />
    </div>
  );
}

function TextArea13() {
  return (
    <div className="bg-white h-[116px] relative rounded-[8px] shrink-0 w-full" data-name="Text area">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-start p-[14px] relative size-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] h-full leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">{textLabel}</p>
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
type TextAreaDefaultNoNoYesNoProps = {
  className?: string;
  textLabel?: string;
};

function TextAreaDefaultNoNoYesNo({ className, textLabel = "Text label" }: TextAreaDefaultNoNoYesNoProps) {
  return (
    <div className={className || "absolute content-stretch flex flex-col gap-[4px] items-start left-[180px] top-[608px] w-[343px]"} data-name="Text area/Default/No/No/Yes/No">
      <TextArea13 />
      <Count2 />
    </div>
  );
}

export default function TextArea() {
  return (
    <div className="bg-white relative size-full" data-name="Text Area">
      <TextAreaDefaultNoNoNoNo />
      <TextAreaActiveNoNoNoNo />
      <TextAreaDisableNoNoNoNo />
      <TextAreaDefaultNoYesYesNo />
      <TextAreaDefaultNoYesNoNo />
      <TextAreaActiveNoNoYesNo />
      <TextAreaErrorNoNoYesNo />
      <TextAreaDisableNoNoYesNo />
      <TextAreaActiveNoYesNoNo />
      <TextAreaErrorNoYesNoNo />
      <TextAreaDisableNoYesNoNo />
      <TextAreaActiveNoYesYesNo />
      <TextAreaErrorNoYesYesNo />
      <TextAreaErrorNoNoNoNo />
      <TextAreaDisableNoYesYesNo />
      <TextAreaDefaultNoNoYesNo />
    </div>
  );
}