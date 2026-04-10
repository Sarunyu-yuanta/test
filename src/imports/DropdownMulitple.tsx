import svgPaths from "./svg-rjhg2lbie9";

function Tags() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-h-px min-w-px overflow-clip relative" data-name="Tags">
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">{`Tag 1 `}</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Tag 2</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">{`Tag 3 `}</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] w-[21px]">{`Tag 4 `}</p>
      </div>
    </div>
  );
}

function FilledTag() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="Filled Tag">
      <Tags />
      <div className="bg-[#eff6ff] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a6ee7] text-[12px] whitespace-nowrap">+99</p>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Body">
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] w-full">{textLabel}</p>
      <FilledTag />
    </div>
  );
}
type DropdownFloatingTagsDefaultFalseFalseProps = {
  className?: string;
  textLabel?: string;
};

function DropdownFloatingTagsDefaultFalseFalse({ className, textLabel = "Text label" }: DropdownFloatingTagsDefaultFalseFalseProps) {
  return (
    <div className={className || "bg-white col-1 content-stretch flex gap-[8px] items-center px-[14px] py-[4px] relative rounded-[8px] row-1 self-start shrink-0 w-[343px]"} data-name="Dropdown Floating/Tags/Default/False/False">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Body />
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

function Tags1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-h-px min-w-px overflow-clip relative" data-name="Tags">
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">{`Tag 1 `}</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Tag 2</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">{`Tag 3 `}</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] w-[21px]">{`Tag 4 `}</p>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="bg-[#eff6ff] content-stretch flex items-center justify-center overflow-clip px-[6px] py-[4px] relative rounded-[8px] shrink-0" data-name="+99">
      <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0a6ee7] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`+99 `}</p>
    </div>
  );
}

function FilledTag1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="Filled Tag">
      <Tags1 />
      <Component />
    </div>
  );
}

function Body1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Body">
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] w-full">{textLabel}</p>
      <FilledTag1 />
    </div>
  );
}
type DropdownFloatingTagsFocusFalseFalseProps = {
  className?: string;
  textLabel?: string;
};

function DropdownFloatingTagsFocusFalseFalse({ className, textLabel = "Text label" }: DropdownFloatingTagsFocusFalseFalseProps) {
  return (
    <div className={className || "bg-white col-2 content-stretch flex gap-[8px] items-center px-[14px] py-[4px] relative rounded-[8px] row-1 self-start shrink-0 w-[343px]"} data-name="Dropdown Floating/Tags/Focus/False/False">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Body1 />
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

function Tags2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-h-px min-w-px overflow-clip relative" data-name="Tags">
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">{`Tag 1 `}</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Tag 2</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">{`Tag 3 `}</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] w-[21px]">{`Tag 4 `}</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-[#eff6ff] content-stretch flex items-center justify-center overflow-clip px-[6px] py-[4px] relative rounded-[8px] shrink-0" data-name="+99">
      <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0a6ee7] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`+99 `}</p>
    </div>
  );
}

function FilledTag2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="Filled Tag">
      <Tags2 />
      <Component1 />
    </div>
  );
}

function Body2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Body">
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] w-full">{textLabel}</p>
      <FilledTag2 />
    </div>
  );
}

function Dropdown() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[4px] relative w-full">
          <Body2 />
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
type DropdownFloatingTagsErrorFalseFalseProps = {
  className?: string;
  textLabel?: string;
};

function DropdownFloatingTagsErrorFalseFalse({ className, textLabel = "Text label" }: DropdownFloatingTagsErrorFalseFalseProps) {
  return (
    <div className={className || "col-3 content-stretch flex flex-col gap-[4px] items-start relative row-1 self-start shrink-0 w-[343px]"} data-name="Dropdown Floating/Tags/Error/False/False">
      <Dropdown />
      <Error />
    </div>
  );
}

function Tags3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-h-px min-w-px overflow-clip relative" data-name="Tags">
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">{`Tag 1 `}</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Tag 2</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">{`Tag 3 `}</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] w-[21px]">{`Tag 4 `}</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center overflow-clip px-[6px] py-[4px] relative rounded-[8px] shrink-0" data-name="+99">
      <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`+99 `}</p>
    </div>
  );
}

function FilledTag3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="Filled Tag">
      <Tags3 />
      <Component2 />
    </div>
  );
}

function Body3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Body">
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] w-full">{textLabel}</p>
      <FilledTag3 />
    </div>
  );
}
type DropdownFloatingTagsDisableFalseFalseProps = {
  className?: string;
  textLabel?: string;
};

function DropdownFloatingTagsDisableFalseFalse({ className, textLabel = "Text label" }: DropdownFloatingTagsDisableFalseFalseProps) {
  return (
    <div className={className || "bg-[#f3f4f6] col-4 content-stretch flex gap-[8px] items-center px-[14px] py-[4px] relative rounded-[8px] row-1 self-start shrink-0 w-[343px]"} data-name="Dropdown Floating/Tags/Disable/False/False">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Body3 />
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

function RequireText() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full" data-name="Require text">
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">{textLabel}</p>
      <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#c10007] text-[9px] w-[7px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        *
      </p>
    </div>
  );
}

function Tags4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-h-px min-w-px overflow-clip relative" data-name="Tags">
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">{`Tag 1 `}</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Tag 2</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">{`Tag 3 `}</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] w-[21px]">{`Tag 4 `}</p>
      </div>
    </div>
  );
}

function FilledTag4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="Filled Tag">
      <Tags4 />
      <div className="bg-[#eff6ff] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a6ee7] text-[12px] whitespace-nowrap">+99</p>
      </div>
    </div>
  );
}

function Body4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Body">
      <RequireText />
      <FilledTag4 />
    </div>
  );
}
type DropdownFloatingTagsDefaultTrueFalseProps = {
  className?: string;
  textLabel?: string;
};

function DropdownFloatingTagsDefaultTrueFalse({ className, textLabel = "Text label" }: DropdownFloatingTagsDefaultTrueFalseProps) {
  return (
    <div className={className || "bg-white col-1 content-stretch flex gap-[8px] items-center px-[14px] py-[4px] relative rounded-[8px] row-2 self-start shrink-0 w-[343px]"} data-name="Dropdown Floating/Tags/Default/True/False">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Body4 />
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

function RequireText1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full" data-name="Require text">
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">{textLabel}</p>
      <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#c10007] text-[9px] w-[7px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        *
      </p>
    </div>
  );
}

function Tags5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-h-px min-w-px overflow-clip relative" data-name="Tags">
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">{`Tag 1 `}</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Tag 2</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">{`Tag 3 `}</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] w-[21px]">{`Tag 4 `}</p>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="bg-[#eff6ff] content-stretch flex items-center justify-center overflow-clip px-[6px] py-[4px] relative rounded-[8px] shrink-0" data-name="+99">
      <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0a6ee7] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`+99 `}</p>
    </div>
  );
}

function FilledTag5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="Filled Tag">
      <Tags5 />
      <Component3 />
    </div>
  );
}

function Body5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Body">
      <RequireText1 />
      <FilledTag5 />
    </div>
  );
}
type DropdownFloatingTagsFocusTrueFalseProps = {
  className?: string;
  textLabel?: string;
};

function DropdownFloatingTagsFocusTrueFalse({ className, textLabel = "Text label" }: DropdownFloatingTagsFocusTrueFalseProps) {
  return (
    <div className={className || "bg-white col-2 content-stretch flex gap-[8px] items-center px-[14px] py-[4px] relative rounded-[8px] row-2 self-start shrink-0 w-[343px]"} data-name="Dropdown Floating/Tags/Focus/True/False">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Body5 />
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

function RequireText2() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full" data-name="Require text">
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">{textLabel}</p>
      <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#c10007] text-[9px] w-[7px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        *
      </p>
    </div>
  );
}

function Tags6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-h-px min-w-px overflow-clip relative" data-name="Tags">
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">{`Tag 1 `}</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Tag 2</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">{`Tag 3 `}</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] w-[21px]">{`Tag 4 `}</p>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="bg-[#eff6ff] content-stretch flex items-center justify-center overflow-clip px-[6px] py-[4px] relative rounded-[8px] shrink-0" data-name="+99">
      <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0a6ee7] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`+99 `}</p>
    </div>
  );
}

function FilledTag6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="Filled Tag">
      <Tags6 />
      <Component4 />
    </div>
  );
}

function Body6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Body">
      <RequireText2 />
      <FilledTag6 />
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[4px] relative w-full">
          <Body6 />
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
type DropdownFloatingTagsErrorTrueFalseProps = {
  className?: string;
  textLabel?: string;
};

function DropdownFloatingTagsErrorTrueFalse({ className, textLabel = "Text label" }: DropdownFloatingTagsErrorTrueFalseProps) {
  return (
    <div className={className || "col-3 content-stretch flex flex-col gap-[4px] items-start relative row-2 self-start shrink-0 w-[343px]"} data-name="Dropdown Floating/Tags/Error/True/False">
      <Dropdown1 />
      <Error1 />
    </div>
  );
}

function RequireText3() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 text-[#99a1af] w-full" data-name="Require text">
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] whitespace-nowrap">{textLabel}</p>
      <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[9px] w-[7px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        *
      </p>
    </div>
  );
}

function Tags7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-h-px min-w-px overflow-clip relative" data-name="Tags">
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">{`Tag 1 `}</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Tag 2</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">{`Tag 3 `}</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] w-[21px]">{`Tag 4 `}</p>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center overflow-clip px-[6px] py-[4px] relative rounded-[8px] shrink-0" data-name="+99">
      <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`+99 `}</p>
    </div>
  );
}

function FilledTag7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="Filled Tag">
      <Tags7 />
      <Component5 />
    </div>
  );
}

function Body7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Body">
      <RequireText3 />
      <FilledTag7 />
    </div>
  );
}
type DropdownFloatingTagsDisableTrueFalseProps = {
  className?: string;
  textLabel?: string;
};

function DropdownFloatingTagsDisableTrueFalse({ className, textLabel = "Text label" }: DropdownFloatingTagsDisableTrueFalseProps) {
  return (
    <div className={className || "bg-[#f3f4f6] col-4 content-stretch flex gap-[8px] items-center px-[14px] py-[4px] relative rounded-[8px] row-2 self-start shrink-0 w-[343px]"} data-name="Dropdown Floating/Tags/Disable/True/False">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Body7 />
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

function Tags8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-h-px min-w-px overflow-clip relative" data-name="Tags">
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">{`Tag 1 `}</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Tag 2</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">{`Tag 3 `}</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] w-[21px]">{`Tag 4 `}</p>
      </div>
    </div>
  );
}

function FilledTag8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="Filled Tag">
      <Tags8 />
      <div className="bg-[#eff6ff] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a6ee7] text-[12px] whitespace-nowrap">+99</p>
      </div>
    </div>
  );
}

function FillText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Fill text">
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] w-full">{textLabel}</p>
      <FilledTag8 />
    </div>
  );
}

function DropdownInput() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Dropdown input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[4px] relative w-full">
          <FillText />
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
type DropdownFloatingTagsDefaultFalseTrueProps = {
  className?: string;
  textLabel?: string;
};

function DropdownFloatingTagsDefaultFalseTrue({ className, textLabel = "Text label" }: DropdownFloatingTagsDefaultFalseTrueProps) {
  return (
    <div className={className || "col-1 content-stretch flex flex-col gap-[4px] items-start relative row-3 self-start shrink-0 w-[343px]"} data-name="Dropdown Floating/Tags/Default/False/True">
      <DropdownInput />
      <HelperText />
    </div>
  );
}

function Tags9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-h-px min-w-px overflow-clip relative" data-name="Tags">
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">{`Tag 1 `}</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Tag 2</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">{`Tag 3 `}</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] w-[21px]">{`Tag 4 `}</p>
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="bg-[#eff6ff] content-stretch flex items-center justify-center overflow-clip px-[6px] py-[4px] relative rounded-[8px] shrink-0" data-name="+99">
      <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0a6ee7] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`+99 `}</p>
    </div>
  );
}

function FilledTag9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="Filled Tag">
      <Tags9 />
      <Component6 />
    </div>
  );
}

function FillText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Fill text">
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] w-full">{textLabel}</p>
      <FilledTag9 />
    </div>
  );
}

function DropdownInput1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Dropdown input">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[4px] relative w-full">
          <FillText1 />
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
type DropdownFloatingTagsFocusFalseTrueProps = {
  className?: string;
  textLabel?: string;
};

function DropdownFloatingTagsFocusFalseTrue({ className, textLabel = "Text label" }: DropdownFloatingTagsFocusFalseTrueProps) {
  return (
    <div className={className || "col-2 content-stretch flex flex-col gap-[4px] items-start relative row-3 self-start shrink-0 w-[343px]"} data-name="Dropdown Floating/Tags/Focus/False/True">
      <DropdownInput1 />
      <HelperText1 />
    </div>
  );
}

function Tags10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-h-px min-w-px overflow-clip relative" data-name="Tags">
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">{`Tag 1 `}</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Tag 2</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">{`Tag 3 `}</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] w-[21px]">{`Tag 4 `}</p>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="bg-[#eff6ff] content-stretch flex items-center justify-center overflow-clip px-[6px] py-[4px] relative rounded-[8px] shrink-0" data-name="+99">
      <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0a6ee7] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`+99 `}</p>
    </div>
  );
}

function FilledTag10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="Filled Tag">
      <Tags10 />
      <Component7 />
    </div>
  );
}

function FillText2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Fill text">
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] w-full">{textLabel}</p>
      <FilledTag10 />
    </div>
  );
}

function Dropdown2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[4px] relative w-full">
          <FillText2 />
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
type DropdownFloatingTagsErrorFalseTrueProps = {
  className?: string;
  textLabel?: string;
};

function DropdownFloatingTagsErrorFalseTrue({ className, textLabel = "Text label" }: DropdownFloatingTagsErrorFalseTrueProps) {
  return (
    <div className={className || "col-3 content-stretch flex flex-col gap-[4px] items-start relative row-3 self-start shrink-0 w-[343px]"} data-name="Dropdown Floating/Tags/Error/False/True">
      <Dropdown2 />
      <Error2 />
    </div>
  );
}

function Tags11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-h-px min-w-px overflow-clip relative" data-name="Tags">
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">{`Tag 1 `}</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Tag 2</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">{`Tag 3 `}</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] w-[21px]">{`Tag 4 `}</p>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center overflow-clip px-[6px] py-[4px] relative rounded-[8px] shrink-0" data-name="+99">
      <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`+99 `}</p>
    </div>
  );
}

function FilledTag11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="Filled Tag">
      <Tags11 />
      <Component8 />
    </div>
  );
}

function FillText3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Fill text">
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] w-full">{textLabel}</p>
      <FilledTag11 />
    </div>
  );
}

function DropdownInput2() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[8px] shrink-0 w-full" data-name="Dropdown input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[4px] relative w-full">
          <FillText3 />
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
type DropdownFloatingTagsDisableFalseTrueProps = {
  className?: string;
  textLabel?: string;
};

function DropdownFloatingTagsDisableFalseTrue({ className, textLabel = "Text label" }: DropdownFloatingTagsDisableFalseTrueProps) {
  return (
    <div className={className || "col-4 content-stretch flex flex-col gap-[4px] items-start relative row-3 self-start shrink-0 w-[343px]"} data-name="Dropdown Floating/Tags/Disable/False/True">
      <DropdownInput2 />
      <HelperText2 />
    </div>
  );
}

function RequireText4() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full" data-name="Require text">
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">{textLabel}</p>
      <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#c10007] text-[9px] w-[7px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        *
      </p>
    </div>
  );
}

function Tags12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-h-px min-w-px overflow-clip relative" data-name="Tags">
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">{`Tag 1 `}</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Tag 2</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">{`Tag 3 `}</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] w-[21px]">{`Tag 4 `}</p>
      </div>
    </div>
  );
}

function FilledTag12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="Filled Tag">
      <Tags12 />
      <div className="bg-[#eff6ff] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a6ee7] text-[12px] whitespace-nowrap">+99</p>
      </div>
    </div>
  );
}

function FillText4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Fill text">
      <RequireText4 />
      <FilledTag12 />
    </div>
  );
}

function DropdownInput3() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Dropdown input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[4px] relative w-full">
          <FillText4 />
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
type DropdownFloatingTagsDefaultTrueTrueProps = {
  className?: string;
  textLabel?: string;
};

function DropdownFloatingTagsDefaultTrueTrue({ className, textLabel = "Text label" }: DropdownFloatingTagsDefaultTrueTrueProps) {
  return (
    <div className={className || "col-1 content-stretch flex flex-col gap-[4px] items-start relative row-4 self-start shrink-0 w-[343px]"} data-name="Dropdown Floating/Tags/Default/True/True">
      <DropdownInput3 />
      <HelperText3 />
    </div>
  );
}

function RequireText5() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full" data-name="Require text">
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">{textLabel}</p>
      <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#c10007] text-[9px] w-[7px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        *
      </p>
    </div>
  );
}

function Tags13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-h-px min-w-px overflow-clip relative" data-name="Tags">
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">{`Tag 1 `}</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Tag 2</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">{`Tag 3 `}</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] w-[21px]">{`Tag 4 `}</p>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="bg-[#eff6ff] content-stretch flex items-center justify-center overflow-clip px-[6px] py-[4px] relative rounded-[8px] shrink-0" data-name="+99">
      <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0a6ee7] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`+99 `}</p>
    </div>
  );
}

function FilledTag13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="Filled Tag">
      <Tags13 />
      <Component9 />
    </div>
  );
}

function FillText5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Fill text">
      <RequireText5 />
      <FilledTag13 />
    </div>
  );
}

function DropdownInput4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Dropdown input">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[4px] relative w-full">
          <FillText5 />
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
type DropdownFloatingTagsFocusTrueTrueProps = {
  className?: string;
  textLabel?: string;
};

function DropdownFloatingTagsFocusTrueTrue({ className, textLabel = "Text label" }: DropdownFloatingTagsFocusTrueTrueProps) {
  return (
    <div className={className || "col-2 content-stretch flex flex-col gap-[4px] items-start relative row-4 self-start shrink-0 w-[343px]"} data-name="Dropdown Floating/Tags/Focus/True/True">
      <DropdownInput4 />
      <HelperText4 />
    </div>
  );
}

function RequireText6() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full" data-name="Require text">
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">{textLabel}</p>
      <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#c10007] text-[9px] w-[7px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        *
      </p>
    </div>
  );
}

function Tags14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-h-px min-w-px overflow-clip relative" data-name="Tags">
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">{`Tag 1 `}</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Tag 2</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">{`Tag 3 `}</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] w-[21px]">{`Tag 4 `}</p>
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="bg-[#eff6ff] content-stretch flex items-center justify-center overflow-clip px-[6px] py-[4px] relative rounded-[8px] shrink-0" data-name="+99">
      <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0a6ee7] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`+99 `}</p>
    </div>
  );
}

function FilledTag14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="Filled Tag">
      <Tags14 />
      <Component10 />
    </div>
  );
}

function FillText6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Fill text">
      <RequireText6 />
      <FilledTag14 />
    </div>
  );
}

function Dropdown3() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[4px] relative w-full">
          <FillText6 />
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
type DropdownFloatingTagsErrorTrueTrueProps = {
  className?: string;
  textLabel?: string;
};

function DropdownFloatingTagsErrorTrueTrue({ className, textLabel = "Text label" }: DropdownFloatingTagsErrorTrueTrueProps) {
  return (
    <div className={className || "col-3 content-stretch flex flex-col gap-[4px] items-start relative row-4 self-start shrink-0 w-[343px]"} data-name="Dropdown Floating/Tags/Error/True/True">
      <Dropdown3 />
      <Error3 />
    </div>
  );
}

function RequireText7() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 text-[#99a1af] w-full" data-name="Require text">
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] whitespace-nowrap">{textLabel}</p>
      <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[9px] w-[7px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        *
      </p>
    </div>
  );
}

function Tags15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-h-px min-w-px overflow-clip relative" data-name="Tags">
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">{`Tag 1 `}</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">Tag 2</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">{`Tag 3 `}</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] w-[21px]">{`Tag 4 `}</p>
      </div>
    </div>
  );
}

function Component11() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center overflow-clip px-[6px] py-[4px] relative rounded-[8px] shrink-0" data-name="+99">
      <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`+99 `}</p>
    </div>
  );
}

function FilledTag15() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="Filled Tag">
      <Tags15 />
      <Component11 />
    </div>
  );
}

function FillText7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Fill text">
      <RequireText7 />
      <FilledTag15 />
    </div>
  );
}

function DropdownInput5() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[8px] shrink-0 w-full" data-name="Dropdown input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[4px] relative w-full">
          <FillText7 />
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
type DropdownFloatingTagsDisableTrueTrueProps = {
  className?: string;
  textLabel?: string;
};

function DropdownFloatingTagsDisableTrueTrue({ className, textLabel = "Text label" }: DropdownFloatingTagsDisableTrueTrueProps) {
  return (
    <div className={className || "col-4 content-stretch flex flex-col gap-[4px] items-start relative row-4 self-start shrink-0 w-[343px]"} data-name="Dropdown Floating/Tags/Disable/True/True">
      <DropdownInput5 />
      <HelperText5 />
    </div>
  );
}

export default function DropdownMulitple() {
  return (
    <div className="bg-white gap-x-[80px] gap-y-[80px] grid grid-cols-[repeat(4,fit-content(100%))] grid-rows-[repeat(4,fit-content(100%))] px-[104px] py-[98px] relative size-full" data-name="Dropdown (Mulitple)">
      <DropdownFloatingTagsDefaultFalseFalse />
      <DropdownFloatingTagsFocusFalseFalse />
      <DropdownFloatingTagsErrorFalseFalse />
      <DropdownFloatingTagsDisableFalseFalse />
      <DropdownFloatingTagsDefaultTrueFalse />
      <DropdownFloatingTagsFocusTrueFalse />
      <DropdownFloatingTagsErrorTrueFalse />
      <DropdownFloatingTagsDisableTrueFalse />
      <DropdownFloatingTagsDefaultFalseTrue />
      <DropdownFloatingTagsFocusFalseTrue />
      <DropdownFloatingTagsErrorFalseTrue />
      <DropdownFloatingTagsDisableFalseTrue />
      <DropdownFloatingTagsDefaultTrueTrue />
      <DropdownFloatingTagsFocusTrueTrue />
      <DropdownFloatingTagsErrorTrueTrue />
      <DropdownFloatingTagsDisableTrueTrue />
    </div>
  );
}