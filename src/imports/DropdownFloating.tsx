import svgPaths from "./svg-bgvu8bft3c";

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
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] w-full">Text label</p>
      <FilledTag />
    </div>
  );
}

export default function DropdownFloating() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[14px] py-[4px] relative rounded-[8px] size-full" data-name="Dropdown Floating">
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