import svgPaths from "./svg-ijpl4n28gw";

function Label() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <p className="font-['Noto_sans_thai:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] whitespace-nowrap">Text label</p>
      </div>
    </div>
  );
}

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

function Component() {
  return (
    <div className="bg-[#eff6ff] content-stretch flex items-center justify-center overflow-clip px-[6px] py-[4px] relative rounded-[8px] shrink-0" data-name="+99">
      <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#155dfc] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`+99 `}</p>
    </div>
  );
}

function FilledTag() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px overflow-clip relative" data-name="Filled Tag">
      <Tags />
      <Component />
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-white min-h-[32px] relative rounded-[8px] shrink-0 w-full" data-name="Text Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] px-[14px] py-[7px] relative w-full">
          <FilledTag />
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

export default function DropdownTextField() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full" data-name="Dropdown Text Field">
      <Label />
      <TextInput />
    </div>
  );
}