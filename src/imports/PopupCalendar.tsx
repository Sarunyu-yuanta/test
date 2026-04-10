export default function PopupCalendar() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Popup Calendar">
      <div className="content-center flex flex-wrap gap-y-[32px] items-center justify-between overflow-clip px-[40px] py-[24px] relative rounded-[inherit] size-full">
        <div className="content-stretch flex h-[25px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Years">
          <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#101828] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            00:00 - 01:00
          </p>
        </div>
        <div className="content-stretch flex h-[25px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Years">
          <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#101828] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`01:00 - 02:00 `}</p>
        </div>
        <div className="content-stretch flex h-[25px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Years">
          <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#101828] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`03:00 - 04:00 `}</p>
        </div>
        <div className="bg-[#0a6ee7] content-stretch flex h-[25px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Years">
          <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-center text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`04:00  - 05:00 `}</p>
        </div>
        <div className="content-stretch flex h-[25px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Years">
          <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#101828] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`05:00 - 06:00 `}</p>
        </div>
        <div className="content-stretch flex h-[25px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Years">
          <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#101828] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`06:00 - 07:00 `}</p>
        </div>
        <div className="content-stretch flex h-[25px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Years">
          <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#101828] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`07:00 - 08:00 `}</p>
        </div>
        <div className="content-stretch flex h-[25px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Years">
          <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#101828] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`08:00 - 09:00 `}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}