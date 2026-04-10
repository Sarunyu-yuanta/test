import svgPaths from "./svg-x66wm0hie3";
type TimePickerDefaultNoNoNoProps = {
  className?: string;
  textLabel?: string;
};

function TimePickerDefaultNoNoNo({ className, textLabel = "Text label" }: TimePickerDefaultNoNoNoProps) {
  return (
    <div className={className || "bg-white col-1 content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative rounded-[8px] row-1 self-start shrink-0 w-[343px]"} data-name="Time Picker/Default/No/No/No">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">{textLabel}</p>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="clock">
        <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
            <path d={svgPaths.p39498900} fill="var(--fill-0, #6A7282)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type TimePickerActiveNoNoNoProps = {
  className?: string;
  textLabel?: string;
};

function TimePickerActiveNoNoNo({ className, textLabel = "Text label" }: TimePickerActiveNoNoNoProps) {
  return (
    <div className={className || "bg-white col-2 content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative rounded-[8px] row-1 self-start shrink-0 w-[343px]"} data-name="Time Picker/Active/No/No/No">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">{textLabel}</p>
      <p className="absolute font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] left-[13px] text-[16px] text-[rgba(2,70,166,0.5)] top-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        |
      </p>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="clock">
        <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
            <path d={svgPaths.p39498900} fill="var(--fill-0, #6A7282)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TimePicker() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative rounded-[8px] shrink-0 w-[343px]" data-name="Time Picker">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[16px]">{textLabel}</p>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="clock">
        <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
            <path d={svgPaths.p39498900} fill="var(--fill-0, #6A7282)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ErrorMessage() {
  return (
    <div className="content-stretch flex items-start px-[4px] relative shrink-0 w-[343px]" data-name="Error message">
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#c10007] text-[12px] whitespace-nowrap">Error message</p>
    </div>
  );
}
type TimePickerErrorNoNoNoProps = {
  className?: string;
  textLabel?: string;
};

function TimePickerErrorNoNoNo({ className, textLabel = "Text label" }: TimePickerErrorNoNoNoProps) {
  return (
    <div className={className || "col-3 content-stretch flex flex-col gap-[4px] items-start justify-self-start relative row-1 self-start shrink-0"} data-name="Time Picker/Error/No/No/No">
      <TimePicker />
      <ErrorMessage />
    </div>
  );
}
type TimePickerDisableNoNoNoProps = {
  className?: string;
  textLabel?: string;
};

function TimePickerDisableNoNoNo({ className, textLabel = "Text label" }: TimePickerDisableNoNoNoProps) {
  return (
    <div className={className || "bg-[#f3f4f6] col-4 content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative rounded-[8px] row-1 self-start shrink-0 w-[343px]"} data-name="Time Picker/Disable/No/No/No">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[16px]">{textLabel}</p>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="clock">
        <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
            <path d={svgPaths.p39498900} fill="var(--fill-0, #99A1AF)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function RequireLabel() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-h-px min-w-px relative" data-name="Require label">
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">{textLabel}</p>
      <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal h-full leading-[1.5] relative shrink-0 text-[#c10007] text-[12px] w-[7px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        *
      </p>
    </div>
  );
}
type TimePickerDefaultNoYesNoProps = {
  className?: string;
  textLabel?: string;
};

function TimePickerDefaultNoYesNo({ className, textLabel = "Text label" }: TimePickerDefaultNoYesNoProps) {
  return (
    <div className={className || "bg-white col-1 content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative rounded-[8px] row-2 self-start shrink-0 w-[343px]"} data-name="Time Picker/Default/No/Yes/No">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <RequireLabel />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="clock">
        <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
            <path d={svgPaths.p39498900} fill="var(--fill-0, #6A7282)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function RequireLabel1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-h-px min-w-px relative" data-name="Require label">
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">{textLabel}</p>
      <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal h-full leading-[1.5] relative shrink-0 text-[#c10007] text-[12px] w-[7px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        *
      </p>
    </div>
  );
}
type TimePickerActiveNoYesNoProps = {
  className?: string;
  textLabel?: string;
};

function TimePickerActiveNoYesNo({ className, textLabel = "Text label" }: TimePickerActiveNoYesNoProps) {
  return (
    <div className={className || "bg-white col-2 content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative rounded-[8px] row-2 self-start shrink-0 w-[343px]"} data-name="Time Picker/Active/No/Yes/No">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <RequireLabel1 />
      <p className="absolute font-['Noto_Sans_Thai:Regular',sans-serif] font-normal leading-[1.5] left-[13px] text-[16px] text-[rgba(2,70,166,0.5)] top-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        |
      </p>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="clock">
        <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
            <path d={svgPaths.p39498900} fill="var(--fill-0, #6A7282)" id="Vector" />
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
      <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal h-full leading-[1.5] relative shrink-0 text-[#c10007] text-[12px] w-[7px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        *
      </p>
    </div>
  );
}

function TimePicker1() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative rounded-[8px] shrink-0 w-[343px]" data-name="Time Picker">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <RequireLabel2 />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="clock">
        <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
            <path d={svgPaths.p39498900} fill="var(--fill-0, #6A7282)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ErrorMessage1() {
  return (
    <div className="content-stretch flex items-start px-[4px] relative shrink-0 w-[343px]" data-name="Error message">
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#c10007] text-[12px] whitespace-nowrap">Error message</p>
    </div>
  );
}
type TimePickerErrorNoYesNoProps = {
  className?: string;
  textLabel?: string;
};

function TimePickerErrorNoYesNo({ className, textLabel = "Text label" }: TimePickerErrorNoYesNoProps) {
  return (
    <div className={className || "col-3 content-stretch flex flex-col gap-[4px] items-start justify-self-start relative row-2 self-start shrink-0"} data-name="Time Picker/Error/No/Yes/No">
      <TimePicker1 />
      <ErrorMessage1 />
    </div>
  );
}

function RequireLabel3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-h-px min-w-px relative text-[#99a1af]" data-name="Require label">
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] whitespace-nowrap">{textLabel}</p>
      <p className="font-['Noto_Sans_Thai:Regular',sans-serif] font-normal h-full leading-[1.5] relative shrink-0 text-[12px] w-[7px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        *
      </p>
    </div>
  );
}
type TimePickerDisableNoYesNoProps = {
  className?: string;
  textLabel?: string;
};

function TimePickerDisableNoYesNo({ className, textLabel = "Text label" }: TimePickerDisableNoYesNoProps) {
  return (
    <div className={className || "bg-[#f3f4f6] col-4 content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative rounded-[8px] row-2 self-start shrink-0 w-[343px]"} data-name="Time Picker/Disable/No/Yes/No">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <RequireLabel3 />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="clock">
        <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
            <path d={svgPaths.p39498900} fill="var(--fill-0, #99A1AF)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FillText() {
  return (
    <div className="content-stretch flex flex-col font-['Noto_sans_thai:Regular',sans-serif] items-center justify-center not-italic relative shrink-0 w-[281px]" data-name="Fill text">
      <p className="leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{textLabel}</p>
      <p className="leading-[20px] relative shrink-0 text-[#101828] text-[16px] w-full">{time}</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="clock">
        <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
            <path d={svgPaths.p1b264b00} fill="var(--fill-0, #6A7282)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type TimePickerDefaultYesNoNoProps = {
  className?: string;
  textLabel?: string;
  time?: string;
};

function TimePickerDefaultYesNoNo({ className, textLabel = "Text label", time = "00:00" }: TimePickerDefaultYesNoNoProps) {
  return (
    <div className={className || "bg-white col-1 content-stretch flex gap-[8px] items-center justify-self-start px-[14px] py-[6px] relative rounded-[8px] row-3 self-start shrink-0"} data-name="Time Picker/Default/Yes/No/No">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <FillText />
      <div className="flex flex-row items-center self-stretch">
        <Icon />
      </div>
    </div>
  );
}

function FillText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Noto_sans_thai:Regular',sans-serif] items-center justify-center min-h-px min-w-px not-italic relative" data-name="Fill text">
      <p className="leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{textLabel}</p>
      <p className="leading-[20px] relative shrink-0 text-[#101828] text-[16px] w-full">{time}</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="clock">
        <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
            <path d={svgPaths.p1b264b00} fill="var(--fill-0, #6A7282)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type TimePickerActiveYesNoNoProps = {
  className?: string;
  textLabel?: string;
  time?: string;
};

function TimePickerActiveYesNoNo({ className, textLabel = "Text label", time = "00:00" }: TimePickerActiveYesNoNoProps) {
  return (
    <div className={className || "bg-white col-2 content-stretch flex gap-[8px] items-center px-[14px] py-[6px] relative rounded-[8px] row-3 self-start shrink-0 w-[339px]"} data-name="Time Picker/Active/Yes/No/No">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <FillText1 />
      <div className="flex flex-row items-center self-stretch">
        <Icon1 />
      </div>
    </div>
  );
}

function FillText2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Noto_sans_thai:Regular',sans-serif] items-center justify-center min-h-px min-w-px not-italic relative" data-name="Fill text">
      <p className="leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] w-full">{textLabel}</p>
      <p className="leading-[20px] relative shrink-0 text-[#101828] text-[16px] w-full">{time}</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="clock">
        <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
            <path d={svgPaths.p1b264b00} fill="var(--fill-0, #6A7282)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TimePicker2() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[14px] py-[6px] relative rounded-[8px] shrink-0 w-[343px]" data-name="Time Picker">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <FillText2 />
      <div className="flex flex-row items-center self-stretch">
        <Icon2 />
      </div>
    </div>
  );
}

function ErrorMessage2() {
  return (
    <div className="content-stretch flex items-start px-[4px] relative shrink-0 w-[343px]" data-name="Error message">
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#c10007] text-[12px] whitespace-nowrap">Error message</p>
    </div>
  );
}
type TimePickerErrorYesNoNoProps = {
  className?: string;
  textLabel?: string;
  time?: string;
};

function TimePickerErrorYesNoNo({ className, textLabel = "Text label", time = "00:00" }: TimePickerErrorYesNoNoProps) {
  return (
    <div className={className || "col-3 content-stretch flex flex-col gap-[4px] items-start justify-self-start relative row-3 self-start shrink-0"} data-name="Time Picker/Error/Yes/No/No">
      <TimePicker2 />
      <ErrorMessage2 />
    </div>
  );
}

function FillText3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Noto_sans_thai:Regular',sans-serif] items-center justify-center min-h-px min-w-px not-italic relative text-[#99a1af]" data-name="Fill text">
      <p className="leading-[16px] relative shrink-0 text-[12px] w-full">{textLabel}</p>
      <p className="leading-[20px] relative shrink-0 text-[16px] w-full">{time}</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="clock">
        <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
            <path d={svgPaths.p1b264b00} fill="var(--fill-0, #99A1AF)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type TimePickerDisableYesNoNoProps = {
  className?: string;
  textLabel?: string;
  time?: string;
};

function TimePickerDisableYesNoNo({ className, textLabel = "Text label", time = "00:00" }: TimePickerDisableYesNoNoProps) {
  return (
    <div className={className || "bg-[#f3f4f6] col-4 content-stretch flex gap-[8px] items-center px-[14px] py-[6px] relative rounded-[8px] row-3 self-start shrink-0 w-[339px]"} data-name="Time Picker/Disable/Yes/No/No">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <FillText3 />
      <div className="flex flex-row items-center self-stretch">
        <Icon3 />
      </div>
    </div>
  );
}

function RangeTime() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Range time">
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[16px] whitespace-nowrap">{time}</p>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="minus">
        <div className="absolute inset-[46.88%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 1.25">
            <path d={svgPaths.p1bc5b600} fill="var(--fill-0, #6A7282)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#101828] text-[16px]">{time2}</p>
    </div>
  );
}

function FillText4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[281px]" data-name="Fill text">
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] w-full">{textLabel}</p>
      <RangeTime />
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="clock">
        <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
            <path d={svgPaths.p1b264b00} fill="var(--fill-0, #6A7282)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type TimePickerDefaultYesNoYesProps = {
  className?: string;
  textLabel?: string;
  time?: string;
  time2?: string;
};

function TimePickerDefaultYesNoYes({ className, textLabel = "Text label", time = "00:00", time2 = "00:00" }: TimePickerDefaultYesNoYesProps) {
  return (
    <div className={className || "bg-white col-1 content-stretch flex gap-[8px] items-center justify-self-start px-[14px] py-[6px] relative rounded-[8px] row-4 self-start shrink-0"} data-name="Time Picker/Default/Yes/No/Yes">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <FillText4 />
      <div className="flex flex-row items-center self-stretch">
        <Icon4 />
      </div>
    </div>
  );
}

function RangeTime1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Range time">
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[16px] whitespace-nowrap">{time}</p>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="minus">
        <div className="absolute inset-[46.88%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 1.25">
            <path d={svgPaths.p1bc5b600} fill="var(--fill-0, #6A7282)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#101828] text-[16px]">{time2}</p>
    </div>
  );
}

function FillText5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="Fill text">
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] w-full">{textLabel}</p>
      <RangeTime1 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="clock">
        <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
            <path d={svgPaths.p1b264b00} fill="var(--fill-0, #6A7282)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type TimePickerActiveYesNoYesProps = {
  className?: string;
  textLabel?: string;
  time?: string;
  time2?: string;
};

function TimePickerActiveYesNoYes({ className, textLabel = "Text label", time = "00:00", time2 = "00:00" }: TimePickerActiveYesNoYesProps) {
  return (
    <div className={className || "bg-white col-2 content-stretch flex gap-[8px] items-center px-[14px] py-[6px] relative rounded-[8px] row-4 self-start shrink-0 w-[339px]"} data-name="Time Picker/Active/Yes/No/Yes">
      <div aria-hidden="true" className="absolute border border-[#0a6ee7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <FillText5 />
      <div className="flex flex-row items-center self-stretch">
        <Icon5 />
      </div>
    </div>
  );
}

function RangeTime2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Range time">
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[16px] whitespace-nowrap">{time}</p>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="minus">
        <div className="absolute inset-[46.88%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 1.25">
            <path d={svgPaths.p1bc5b600} fill="var(--fill-0, #6A7282)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#101828] text-[16px]">{time2}</p>
    </div>
  );
}

function FillText6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="Fill text">
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] w-full">{textLabel}</p>
      <RangeTime2 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="clock">
        <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
            <path d={svgPaths.p1b264b00} fill="var(--fill-0, #6A7282)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TimePicker3() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[14px] py-[6px] relative rounded-[8px] shrink-0 w-[343px]" data-name="Time Picker">
      <div aria-hidden="true" className="absolute border border-[#e7000b] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <FillText6 />
      <div className="flex flex-row items-center self-stretch">
        <Icon6 />
      </div>
    </div>
  );
}

function ErrorMessage3() {
  return (
    <div className="content-stretch flex items-start px-[4px] relative shrink-0 w-[343px]" data-name="Error message">
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#c10007] text-[12px] whitespace-nowrap">Error message</p>
    </div>
  );
}
type TimePickerErrorYesNoYesProps = {
  className?: string;
  textLabel?: string;
  time?: string;
  time2?: string;
};

function TimePickerErrorYesNoYes({ className, textLabel = "Text label", time = "00:00", time2 = "00:00" }: TimePickerErrorYesNoYesProps) {
  return (
    <div className={className || "col-3 content-stretch flex flex-col gap-[4px] items-start justify-self-start relative row-4 self-start shrink-0"} data-name="Time Picker/Error/Yes/No/Yes">
      <TimePicker3 />
      <ErrorMessage3 />
    </div>
  );
}

function RangeTime3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Range time">
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[16px] whitespace-nowrap">{time}</p>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="minus">
        <div className="absolute inset-[46.88%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 1.25">
            <path d={svgPaths.p1bc5b600} fill="var(--fill-0, #99A1AF)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Noto_sans_thai:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[16px]">{time2}</p>
    </div>
  );
}

function FillText7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="Fill text">
      <p className="font-['Noto_sans_thai:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] w-full">{textLabel}</p>
      <RangeTime3 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="clock">
        <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.875 17.875">
            <path d={svgPaths.p1b264b00} fill="var(--fill-0, #99A1AF)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type TimePickerDisableYesNoYesProps = {
  className?: string;
  textLabel?: string;
  time?: string;
  time2?: string;
};

function TimePickerDisableYesNoYes({ className, textLabel = "Text label", time = "00:00", time2 = "00:00" }: TimePickerDisableYesNoYesProps) {
  return (
    <div className={className || "bg-[#f3f4f6] col-4 content-stretch flex gap-[8px] items-center px-[14px] py-[6px] relative rounded-[8px] row-4 self-start shrink-0 w-[339px]"} data-name="Time Picker/Disable/Yes/No/Yes">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <FillText7 />
      <div className="flex flex-row items-center self-stretch">
        <Icon7 />
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white gap-x-[80px] gap-y-[86px] grid grid-cols-[repeat(4,fit-content(100%))] grid-rows-[repeat(4,fit-content(100%))] px-[103px] py-[131px] relative size-full">
      <TimePickerDefaultNoNoNo />
      <TimePickerActiveNoNoNo />
      <TimePickerErrorNoNoNo />
      <TimePickerDisableNoNoNo />
      <TimePickerDefaultNoYesNo />
      <TimePickerActiveNoYesNo />
      <TimePickerErrorNoYesNo />
      <TimePickerDisableNoYesNo />
      <TimePickerDefaultYesNoNo />
      <TimePickerActiveYesNoNo />
      <TimePickerErrorYesNoNo />
      <TimePickerDisableYesNoNo />
      <TimePickerDefaultYesNoYes />
      <TimePickerActiveYesNoYes />
      <TimePickerErrorYesNoYes />
      <TimePickerDisableYesNoYes />
    </div>
  );
}