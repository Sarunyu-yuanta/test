import svgPaths from "./svg-1tom9ah53k";
type DropdownFloatingDefaultDefaultFalseFalseProps = {
  className?: string;
  textLabel?: string;
};

function DropdownFloatingDefaultDefaultFalseFalse({ className, textLabel = "Text label" }: DropdownFloatingDefaultDefaultFalseFalseProps) {
  return (
    <div className={className || "bg-white col-1 content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative rounded-[8px] row-1 self-start shrink-0 w-[343px]"} data-name="Dropdown Floating/Default/Default/False/False">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#6a7282] text-[16px] text-ellipsis whitespace-nowrap">{textLabel}</p>
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="caret-down">
        <div className="absolute inset-[34.37%_15.62%_28.12%_15.62%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1258 8.25092">
            <path d={svgPaths.p3310ff00} fill="var(--fill-0, #6A7282)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type DropdownFloatingDefaultFocusFalseFalseProps = {
  className?: string;
  textLabel?: string;
};

function DropdownFloatingDefaultFocusFalseFalse({ className, textLabel = "Text label" }: DropdownFloatingDefaultFocusFalseFalseProps) {
  return (
    <div className={className || "bg-white col-2 content-stretch flex gap-[8px] items-center p-[14px] relative rounded-[8px] row-1 self-start shrink-0 w-[343px]"} data-name="Dropdown Floating/Default/Focus/False/False">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">{textLabel}</p>
      <p className="absolute font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] left-[13px] text-[16px] text-[rgba(2,70,166,0.5)] top-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        |
      </p>
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="caret-up">
        <div className="absolute inset-[28.12%_15.62%_34.37%_15.62%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1259 8.25108">
            <path d={svgPaths.p8486900} fill="var(--fill-0, #6A7282)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="bg-white h-[50px] relative rounded-[8px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[14px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">{textLabel}</p>
          <div className="overflow-clip relative shrink-0 size-[22px]" data-name="caret-down">
            <div className="absolute inset-[34.37%_15.62%_28.12%_15.62%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1258 8.25092">
                <path d={svgPaths.p3310ff00} fill="var(--fill-0, #6A7282)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Error() {
  return (
    <div className="relative shrink-0 w-full" data-name="Error">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#c10007] text-[12px]">Error message</p>
      </div>
    </div>
  );
}
type DropdownFloatingDefaultErrorFalseFalseProps = {
  className?: string;
  textLabel?: string;
};

function DropdownFloatingDefaultErrorFalseFalse({ className, textLabel = "Text label" }: DropdownFloatingDefaultErrorFalseFalseProps) {
  return (
    <div className={className || "col-3 content-stretch flex flex-col gap-[4px] items-start relative row-1 self-start shrink-0 w-[343px]"} data-name="Dropdown Floating/Default/Error/False/False">
      <Dropdown1 />
      <Error />
    </div>
  );
}
type DropdownFloatingDefaultDisableFalseFalseProps = {
  className?: string;
  textLabel?: string;
};

function DropdownFloatingDefaultDisableFalseFalse({ className, textLabel = "Text label" }: DropdownFloatingDefaultDisableFalseFalseProps) {
  return (
    <div className={className || "bg-[#f3f4f6] col-4 content-stretch flex gap-[8px] items-center p-[14px] relative rounded-[8px] row-1 self-start shrink-0 w-[343px]"} data-name="Dropdown Floating/Default/Disable/False/False">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[16px]">{textLabel}</p>
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="caret-down">
        <div className="absolute inset-[34.37%_15.62%_28.12%_15.62%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1258 8.25092">
            <path d={svgPaths.p3310ff00} fill="var(--fill-0, #99A1AF)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function RequireLabel() {
  return (
    <div className="content-stretch flex flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] gap-[2px] items-center min-h-px min-w-px not-italic relative" data-name="Require label">
      <p className="leading-[20px] relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">{textLabel}</p>
      <p className="leading-[16px] relative shrink-0 text-[#c10007] text-[12px] w-[7px]">*</p>
    </div>
  );
}
type DropdownFloatingDefaultDefaultTrueFalseProps = {
  className?: string;
  textLabel?: string;
};

function DropdownFloatingDefaultDefaultTrueFalse({ className, textLabel = "Text label" }: DropdownFloatingDefaultDefaultTrueFalseProps) {
  return (
    <div className={className || "bg-white col-1 content-stretch flex gap-[8px] items-center p-[14px] relative rounded-[8px] row-2 self-start shrink-0 w-[343px]"} data-name="Dropdown Floating/Default/Default/True/False">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <RequireLabel />
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="caret-down">
        <div className="absolute inset-[34.37%_15.62%_28.12%_15.62%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1258 8.25092">
            <path d={svgPaths.p3310ff00} fill="var(--fill-0, #6A7282)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function RequireLabel1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] gap-[2px] items-center min-h-px min-w-px not-italic relative" data-name="Require label">
      <p className="leading-[20px] relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">{textLabel}</p>
      <p className="leading-[16px] relative shrink-0 text-[#c10007] text-[12px] w-[7px]">*</p>
    </div>
  );
}
type DropdownFloatingDefaultFocusTrueFalseProps = {
  className?: string;
  textLabel?: string;
};

function DropdownFloatingDefaultFocusTrueFalse({ className, textLabel = "Text label" }: DropdownFloatingDefaultFocusTrueFalseProps) {
  return (
    <div className={className || "bg-white col-2 content-stretch flex gap-[8px] items-center p-[14px] relative rounded-[8px] row-2 self-start shrink-0 w-[343px]"} data-name="Dropdown Floating/Default/Focus/True/False">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <RequireLabel1 />
      <p className="absolute font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] left-[13px] text-[16px] text-[rgba(2,70,166,0.5)] top-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        |
      </p>
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="caret-up">
        <div className="absolute inset-[28.12%_15.62%_34.37%_15.62%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1259 8.25108">
            <path d={svgPaths.p8486900} fill="var(--fill-0, #6A7282)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function RequireLabel2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-h-px min-w-px relative" data-name="Require label">
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">{textLabel}</p>
      <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#c10007] text-[12px] w-[7px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        *
      </p>
    </div>
  );
}

function Dropdown2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[14px] relative w-full">
          <RequireLabel2 />
          <div className="overflow-clip relative shrink-0 size-[22px]" data-name="caret-down">
            <div className="absolute inset-[34.37%_15.62%_28.12%_15.62%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1258 8.25092">
                <path d={svgPaths.p3310ff00} fill="var(--fill-0, #6A7282)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Error1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Error">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#c10007] text-[12px]">Error message</p>
      </div>
    </div>
  );
}
type DropdownFloatingDefaultErrorTrueFalseProps = {
  className?: string;
  textLabel?: string;
};

function DropdownFloatingDefaultErrorTrueFalse({ className, textLabel = "Text label" }: DropdownFloatingDefaultErrorTrueFalseProps) {
  return (
    <div className={className || "col-3 content-stretch flex flex-col gap-[4px] items-start relative row-2 self-start shrink-0 w-[343px]"} data-name="Dropdown Floating/Default/Error/True/False">
      <Dropdown2 />
      <Error1 />
    </div>
  );
}

function RequireLabel3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] gap-[2px] items-center min-h-px min-w-px not-italic relative text-[#99a1af]" data-name="Require label">
      <p className="leading-[20px] relative shrink-0 text-[16px] whitespace-nowrap">{textLabel}</p>
      <p className="leading-[16px] relative shrink-0 text-[12px] w-[7px]">*</p>
    </div>
  );
}
type DropdownFloatingDefaultDisableTrueFalseProps = {
  className?: string;
  textLabel?: string;
};

function DropdownFloatingDefaultDisableTrueFalse({ className, textLabel = "Text label" }: DropdownFloatingDefaultDisableTrueFalseProps) {
  return (
    <div className={className || "bg-[#f3f4f6] col-4 content-stretch flex gap-[8px] items-center p-[14px] relative rounded-[8px] row-2 self-start shrink-0 w-[343px]"} data-name="Dropdown Floating/Default/Disable/True/False">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <RequireLabel3 />
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="caret-down">
        <div className="absolute inset-[34.37%_15.62%_28.12%_15.62%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1258 8.25092">
            <path d={svgPaths.p3310ff00} fill="var(--fill-0, #99A1AF)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DropdownInput() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Dropdown input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[14px] relative w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">{textLabel}</p>
          <div className="overflow-clip relative shrink-0 size-[22px]" data-name="caret-down">
            <div className="absolute inset-[34.37%_15.62%_28.12%_15.62%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1258 8.25092">
                <path d={svgPaths.p3310ff00} fill="var(--fill-0, #6A7282)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HelperText() {
  return (
    <div className="relative shrink-0 w-full" data-name="Helper text">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">Helper text</p>
      </div>
    </div>
  );
}
type DropdownFloatingDefaultDefaultFalseTrueProps = {
  className?: string;
  textLabel?: string;
};

function DropdownFloatingDefaultDefaultFalseTrue({ className, textLabel = "Text label" }: DropdownFloatingDefaultDefaultFalseTrueProps) {
  return (
    <div className={className || "col-1 content-stretch flex flex-col gap-[4px] items-start relative row-3 self-start shrink-0 w-[343px]"} data-name="Dropdown Floating/Default/Default/False/True">
      <DropdownInput />
      <HelperText />
    </div>
  );
}

function DropdownInput1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Dropdown input">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[14px] relative w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">{textLabel}</p>
          <p className="absolute font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] left-[13px] text-[16px] text-[rgba(2,70,166,0.5)] top-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            |
          </p>
          <div className="overflow-clip relative shrink-0 size-[22px]" data-name="caret-up">
            <div className="absolute inset-[28.12%_15.62%_34.37%_15.62%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1259 8.25108">
                <path d={svgPaths.p8486900} fill="var(--fill-0, #6A7282)" id="Vector" />
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
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">Helper text</p>
      </div>
    </div>
  );
}
type DropdownFloatingDefaultFocusFalseTrueProps = {
  className?: string;
  textLabel?: string;
};

function DropdownFloatingDefaultFocusFalseTrue({ className, textLabel = "Text label" }: DropdownFloatingDefaultFocusFalseTrueProps) {
  return (
    <div className={className || "col-2 content-stretch flex flex-col gap-[4px] items-start relative row-3 self-start shrink-0 w-[343px]"} data-name="Dropdown Floating/Default/Focus/False/True">
      <DropdownInput1 />
      <HelperText1 />
    </div>
  );
}

function Dropdown3() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[14px] relative w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">{textLabel}</p>
          <div className="overflow-clip relative shrink-0 size-[22px]" data-name="caret-down">
            <div className="absolute inset-[34.37%_15.62%_28.12%_15.62%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1258 8.25092">
                <path d={svgPaths.p3310ff00} fill="var(--fill-0, #6A7282)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Error2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Error">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#c10007] text-[12px]">Error message</p>
      </div>
    </div>
  );
}
type DropdownFloatingDefaultErrorFalseTrueProps = {
  className?: string;
  textLabel?: string;
};

function DropdownFloatingDefaultErrorFalseTrue({ className, textLabel = "Text label" }: DropdownFloatingDefaultErrorFalseTrueProps) {
  return (
    <div className={className || "col-3 content-stretch flex flex-col gap-[4px] items-start relative row-3 self-start shrink-0 w-[343px]"} data-name="Dropdown Floating/Default/Error/False/True">
      <Dropdown3 />
      <Error2 />
    </div>
  );
}

function DropdownInput2() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[8px] shrink-0 w-full" data-name="Dropdown input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[14px] relative w-full">
          <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[16px]">{textLabel}</p>
          <div className="overflow-clip relative shrink-0 size-[22px]" data-name="caret-down">
            <div className="absolute inset-[34.37%_15.62%_28.12%_15.62%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1258 8.25092">
                <path d={svgPaths.p3310ff00} fill="var(--fill-0, #99A1AF)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HelperText2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Helper text">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[12px]">Helper text</p>
      </div>
    </div>
  );
}
type DropdownFloatingDefaultDisableFalseTrueProps = {
  className?: string;
  textLabel?: string;
};

function DropdownFloatingDefaultDisableFalseTrue({ className, textLabel = "Text label" }: DropdownFloatingDefaultDisableFalseTrueProps) {
  return (
    <div className={className || "col-4 content-stretch flex flex-col gap-[4px] items-start relative row-3 self-start shrink-0 w-[343px]"} data-name="Dropdown Floating/Default/Disable/False/True">
      <DropdownInput2 />
      <HelperText2 />
    </div>
  );
}

function RequireLabel4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] gap-[2px] items-center min-h-px min-w-px not-italic relative" data-name="Require label">
      <p className="leading-[20px] relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">{textLabel}</p>
      <p className="leading-[16px] relative shrink-0 text-[#c10007] text-[12px] w-[7px]">*</p>
    </div>
  );
}

function DropdownInput3() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Dropdown input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[14px] relative w-full">
          <RequireLabel4 />
          <div className="overflow-clip relative shrink-0 size-[22px]" data-name="caret-down">
            <div className="absolute inset-[34.37%_15.62%_28.12%_15.62%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1258 8.25092">
                <path d={svgPaths.p3310ff00} fill="var(--fill-0, #6A7282)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HelperText3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Helper text">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">Helper text</p>
      </div>
    </div>
  );
}
type DropdownFloatingDefaultDefaultTrueTrueProps = {
  className?: string;
  textLabel?: string;
};

function DropdownFloatingDefaultDefaultTrueTrue({ className, textLabel = "Text label" }: DropdownFloatingDefaultDefaultTrueTrueProps) {
  return (
    <div className={className || "col-1 content-stretch flex flex-col gap-[4px] items-start relative row-4 self-start shrink-0 w-[343px]"} data-name="Dropdown Floating/Default/Default/True/True">
      <DropdownInput3 />
      <HelperText3 />
    </div>
  );
}

function RequireLabel5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] gap-[2px] items-center min-h-px min-w-px not-italic relative" data-name="Require label">
      <p className="leading-[20px] relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">{textLabel}</p>
      <p className="leading-[16px] relative shrink-0 text-[#c10007] text-[12px] w-[7px]">*</p>
    </div>
  );
}

function DropdownInput4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Dropdown input">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[14px] relative w-full">
          <RequireLabel5 />
          <p className="absolute font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] left-[13px] text-[16px] text-[rgba(2,70,166,0.5)] top-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            |
          </p>
          <div className="overflow-clip relative shrink-0 size-[22px]" data-name="caret-up">
            <div className="absolute inset-[28.12%_15.62%_34.37%_15.62%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1259 8.25108">
                <path d={svgPaths.p8486900} fill="var(--fill-0, #6A7282)" id="Vector" />
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
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">Helper text</p>
      </div>
    </div>
  );
}
type DropdownFloatingDefaultFocusTrueTrueProps = {
  className?: string;
  textLabel?: string;
};

function DropdownFloatingDefaultFocusTrueTrue({ className, textLabel = "Text label" }: DropdownFloatingDefaultFocusTrueTrueProps) {
  return (
    <div className={className || "col-2 content-stretch flex flex-col gap-[4px] items-start relative row-4 self-start shrink-0 w-[343px]"} data-name="Dropdown Floating/Default/Focus/True/True">
      <DropdownInput4 />
      <HelperText4 />
    </div>
  );
}

function RequireLabel6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-h-px min-w-px relative" data-name="Require label">
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">{textLabel}</p>
      <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#c10007] text-[12px] w-[7px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        *
      </p>
    </div>
  );
}

function Dropdown4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[14px] relative w-full">
          <RequireLabel6 />
          <div className="overflow-clip relative shrink-0 size-[22px]" data-name="caret-down">
            <div className="absolute inset-[34.37%_15.62%_28.12%_15.62%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1258 8.25092">
                <path d={svgPaths.p3310ff00} fill="var(--fill-0, #6A7282)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Error3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Error">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#c10007] text-[12px]">Error message</p>
      </div>
    </div>
  );
}
type DropdownFloatingDefaultErrorTrueTrueProps = {
  className?: string;
  textLabel?: string;
};

function DropdownFloatingDefaultErrorTrueTrue({ className, textLabel = "Text label" }: DropdownFloatingDefaultErrorTrueTrueProps) {
  return (
    <div className={className || "col-3 content-stretch flex flex-col gap-[4px] items-start relative row-4 self-start shrink-0 w-[343px]"} data-name="Dropdown Floating/Default/Error/True/True">
      <Dropdown4 />
      <Error3 />
    </div>
  );
}

function RequireLabel7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] gap-[2px] items-center min-h-px min-w-px not-italic relative text-[#99a1af]" data-name="Require label">
      <p className="leading-[20px] relative shrink-0 text-[16px] whitespace-nowrap">{textLabel}</p>
      <p className="leading-[16px] relative shrink-0 text-[12px] w-[7px]">*</p>
    </div>
  );
}

function DropdownInput5() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[8px] shrink-0 w-full" data-name="Dropdown input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[14px] relative w-full">
          <RequireLabel7 />
          <div className="overflow-clip relative shrink-0 size-[22px]" data-name="caret-down">
            <div className="absolute inset-[34.37%_15.62%_28.12%_15.62%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1258 8.25092">
                <path d={svgPaths.p3310ff00} fill="var(--fill-0, #99A1AF)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HelperText5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Helper text">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[12px]">Helper text</p>
      </div>
    </div>
  );
}
type DropdownFloatingDefaultDisableTrueTrueProps = {
  className?: string;
  textLabel?: string;
};

function DropdownFloatingDefaultDisableTrueTrue({ className, textLabel = "Text label" }: DropdownFloatingDefaultDisableTrueTrueProps) {
  return (
    <div className={className || "col-4 content-stretch flex flex-col gap-[4px] items-start relative row-4 self-start shrink-0 w-[343px]"} data-name="Dropdown Floating/Default/Disable/True/True">
      <DropdownInput5 />
      <HelperText5 />
    </div>
  );
}

export default function Dropdown() {
  return (
    <div className="bg-white gap-x-[80px] gap-y-[80px] grid grid-cols-[repeat(4,fit-content(100%))] grid-rows-[repeat(4,fit-content(100%))] px-[86px] py-[132px] relative size-full" data-name="Dropdown">
      <DropdownFloatingDefaultDefaultFalseFalse />
      <DropdownFloatingDefaultFocusFalseFalse />
      <DropdownFloatingDefaultErrorFalseFalse />
      <DropdownFloatingDefaultDisableFalseFalse />
      <DropdownFloatingDefaultDefaultTrueFalse />
      <DropdownFloatingDefaultFocusTrueFalse />
      <DropdownFloatingDefaultErrorTrueFalse />
      <DropdownFloatingDefaultDisableTrueFalse />
      <DropdownFloatingDefaultDefaultFalseTrue />
      <DropdownFloatingDefaultFocusFalseTrue />
      <DropdownFloatingDefaultErrorFalseTrue />
      <DropdownFloatingDefaultDisableFalseTrue />
      <DropdownFloatingDefaultDefaultTrueTrue />
      <DropdownFloatingDefaultFocusTrueTrue />
      <DropdownFloatingDefaultErrorTrueTrue />
      <DropdownFloatingDefaultDisableTrueTrue />
    </div>
  );
}