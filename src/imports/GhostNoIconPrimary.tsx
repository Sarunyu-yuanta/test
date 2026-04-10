type ButtonOutlineDefaultXsBlackNoNoNoProps = {
  className?: string;
  textButton?: string;
};

function ButtonOutlineDefaultXsBlackNoNoNo({ className, textButton = "Button" }: ButtonOutlineDefaultXsBlackNoNoNoProps) {
  return (
    <div className={className || "bg-white content-stretch flex items-center justify-center max-w-[343px] px-[6px] py-[4px] relative rounded-[4px] shrink-0"} data-name="Button/Outline/Default/xs/Black/No/No/No">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Noto_Sans_Thai:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#101828] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {textButton}
      </p>
    </div>
  );
}
type ButtonOutlineDefaultSmBlackNoNoNoProps = {
  className?: string;
  textButton?: string;
};

function ButtonOutlineDefaultSmBlackNoNoNo({ className, textButton = "Button" }: ButtonOutlineDefaultSmBlackNoNoNoProps) {
  return (
    <div className={className || "bg-white content-stretch flex items-center justify-center max-w-[343px] px-[8px] py-[4px] relative rounded-[6px] shrink-0"} data-name="Button/Outline/Default/sm/Black/No/No/No">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Noto_sans_thai:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] text-center whitespace-nowrap">{textButton}</p>
    </div>
  );
}
type ButtonOutlineDefaultBaseBlackNoNoNoProps = {
  className?: string;
  textButton?: string;
};

function ButtonOutlineDefaultBaseBlackNoNoNo({ className, textButton = "Button" }: ButtonOutlineDefaultBaseBlackNoNoNoProps) {
  return (
    <div className={className || "bg-white content-stretch flex items-center justify-center max-w-[343px] px-[10px] py-[6px] relative rounded-[6px] shrink-0"} data-name="Button/Outline/Default/base/Black/No/No/No">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Noto_sans_thai:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] text-center whitespace-nowrap">{textButton}</p>
    </div>
  );
}
type ButtonOutlineDefaultLgBlackNoNoNoProps = {
  className?: string;
  textButton?: string;
};

function ButtonOutlineDefaultLgBlackNoNoNo({ className, textButton = "Button" }: ButtonOutlineDefaultLgBlackNoNoNoProps) {
  return (
    <div className={className || "bg-white content-stretch flex items-center justify-center max-w-[343px] px-[14px] py-[8px] relative rounded-[8px] shrink-0"} data-name="Button/Outline/Default/lg/Black/No/No/No">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Noto_sans_thai:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] text-center whitespace-nowrap">{textButton}</p>
    </div>
  );
}
type ButtonOutlineDefaultXlBlackNoNoNoProps = {
  className?: string;
  textButton?: string;
};

function ButtonOutlineDefaultXlBlackNoNoNo({ className, textButton = "Button" }: ButtonOutlineDefaultXlBlackNoNoNoProps) {
  return (
    <div className={className || "bg-white content-stretch flex items-center justify-center max-w-[343px] px-[16px] py-[10px] relative rounded-[8px] shrink-0"} data-name="Button/Outline/Default/xl/Black/No/No/No">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Noto_sans_thai:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] text-center whitespace-nowrap">{textButton}</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[119px] items-center relative shrink-0">
      <ButtonOutlineDefaultXsBlackNoNoNo />
      <ButtonOutlineDefaultSmBlackNoNoNo />
      <ButtonOutlineDefaultBaseBlackNoNoNo />
      <ButtonOutlineDefaultLgBlackNoNoNo />
      <ButtonOutlineDefaultXlBlackNoNoNo />
    </div>
  );
}
type ButtonOutlineHoverXsBlackNoNoNoProps = {
  className?: string;
  textButton?: string;
};

function ButtonOutlineHoverXsBlackNoNoNo({ className, textButton = "Button" }: ButtonOutlineHoverXsBlackNoNoNoProps) {
  return (
    <div className={className || "bg-[#f9fafb] content-stretch flex items-center justify-center max-w-[343px] px-[6px] py-[4px] relative rounded-[4px] shrink-0"} data-name="Button/Outline/Hover/xs/Black/No/No/No">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Noto_Sans_Thai:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#101828] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {textButton}
      </p>
    </div>
  );
}
type ButtonOutlineHoverSmBlackNoNoNoProps = {
  className?: string;
  textButton?: string;
};

function ButtonOutlineHoverSmBlackNoNoNo({ className, textButton = "Button" }: ButtonOutlineHoverSmBlackNoNoNoProps) {
  return (
    <div className={className || "bg-[#f9fafb] content-stretch flex items-center justify-center max-w-[343px] px-[8px] py-[4px] relative rounded-[6px] shrink-0"} data-name="Button/Outline/Hover/sm/Black/No/No/No">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Noto_sans_thai:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] text-center whitespace-nowrap">{textButton}</p>
    </div>
  );
}
type ButtonOutlineHoverBaseBlackNoNoNoProps = {
  className?: string;
  textButton?: string;
};

function ButtonOutlineHoverBaseBlackNoNoNo({ className, textButton = "Button" }: ButtonOutlineHoverBaseBlackNoNoNoProps) {
  return (
    <div className={className || "bg-[#f9fafb] content-stretch flex items-center justify-center max-w-[343px] px-[10px] py-[6px] relative rounded-[6px] shrink-0"} data-name="Button/Outline/Hover/base/Black/No/No/No">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Noto_sans_thai:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] text-center whitespace-nowrap">{textButton}</p>
    </div>
  );
}
type ButtonOutlineHoverLgBlackNoNoNoProps = {
  className?: string;
  textButton?: string;
};

function ButtonOutlineHoverLgBlackNoNoNo({ className, textButton = "Button" }: ButtonOutlineHoverLgBlackNoNoNoProps) {
  return (
    <div className={className || "bg-[#f9fafb] content-stretch flex items-center justify-center max-w-[343px] px-[14px] py-[8px] relative rounded-[8px] shrink-0"} data-name="Button/Outline/Hover/lg/Black/No/No/No">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Noto_sans_thai:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] text-center whitespace-nowrap">{textButton}</p>
    </div>
  );
}
type ButtonOutlineHoverXlBlackNoNoNoProps = {
  className?: string;
  textButton?: string;
};

function ButtonOutlineHoverXlBlackNoNoNo({ className, textButton = "Button" }: ButtonOutlineHoverXlBlackNoNoNoProps) {
  return (
    <div className={className || "bg-[#f9fafb] content-stretch flex items-center justify-center max-w-[343px] px-[16px] py-[10px] relative rounded-[8px] shrink-0"} data-name="Button/Outline/Hover/xl/Black/No/No/No">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Noto_sans_thai:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] text-center whitespace-nowrap">{textButton}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[119px] items-center relative shrink-0">
      <ButtonOutlineHoverXsBlackNoNoNo />
      <ButtonOutlineHoverSmBlackNoNoNo />
      <ButtonOutlineHoverBaseBlackNoNoNo />
      <ButtonOutlineHoverLgBlackNoNoNo />
      <ButtonOutlineHoverXlBlackNoNoNo />
    </div>
  );
}
type ButtonOutlinePressXsBlackNoNoNoProps = {
  className?: string;
  textButton?: string;
};

function ButtonOutlinePressXsBlackNoNoNo({ className, textButton = "Button" }: ButtonOutlinePressXsBlackNoNoNoProps) {
  return (
    <div className={className || "bg-[#f3f4f6] content-stretch flex items-center justify-center max-w-[343px] px-[6px] py-[4px] relative rounded-[4px] shrink-0"} data-name="Button/Outline/Press/xs/Black/No/No/No">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Noto_Sans_Thai:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#99a1af] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {textButton}
      </p>
    </div>
  );
}
type ButtonOutlinePressSmBlackNoNoNoProps = {
  className?: string;
  textButton?: string;
};

function ButtonOutlinePressSmBlackNoNoNo({ className, textButton = "Button" }: ButtonOutlinePressSmBlackNoNoNoProps) {
  return (
    <div className={className || "bg-[#f3f4f6] content-stretch flex items-center justify-center max-w-[343px] px-[8px] py-[4px] relative rounded-[6px] shrink-0"} data-name="Button/Outline/Press/sm/Black/No/No/No">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Noto_sans_thai:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-center whitespace-nowrap">{textButton}</p>
    </div>
  );
}
type ButtonOutlinePressBaseBlackNoNoNoProps = {
  className?: string;
  textButton?: string;
};

function ButtonOutlinePressBaseBlackNoNoNo({ className, textButton = "Button" }: ButtonOutlinePressBaseBlackNoNoNoProps) {
  return (
    <div className={className || "bg-[#f3f4f6] content-stretch flex items-center justify-center max-w-[343px] px-[10px] py-[6px] relative rounded-[6px] shrink-0"} data-name="Button/Outline/Press/base/Black/No/No/No">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Noto_sans_thai:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-center whitespace-nowrap">{textButton}</p>
    </div>
  );
}
type ButtonOutlinePressLgBlackNoNoNoProps = {
  className?: string;
  textButton?: string;
};

function ButtonOutlinePressLgBlackNoNoNo({ className, textButton = "Button" }: ButtonOutlinePressLgBlackNoNoNoProps) {
  return (
    <div className={className || "bg-[#f3f4f6] content-stretch flex items-center justify-center max-w-[343px] px-[14px] py-[8px] relative rounded-[8px] shrink-0"} data-name="Button/Outline/Press/lg/Black/No/No/No">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Noto_sans_thai:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-center whitespace-nowrap">{textButton}</p>
    </div>
  );
}
type ButtonOutlinePressXlBlackNoNoNoProps = {
  className?: string;
  textButton?: string;
};

function ButtonOutlinePressXlBlackNoNoNo({ className, textButton = "Button" }: ButtonOutlinePressXlBlackNoNoNoProps) {
  return (
    <div className={className || "bg-[#f3f4f6] content-stretch flex items-center justify-center max-w-[343px] px-[16px] py-[10px] relative rounded-[8px] shrink-0"} data-name="Button/Outline/Press/xl/Black/No/No/No">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Noto_sans_thai:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-center whitespace-nowrap">{textButton}</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[119px] items-center relative shrink-0">
      <ButtonOutlinePressXsBlackNoNoNo />
      <ButtonOutlinePressSmBlackNoNoNo />
      <ButtonOutlinePressBaseBlackNoNoNo />
      <ButtonOutlinePressLgBlackNoNoNo />
      <ButtonOutlinePressXlBlackNoNoNo />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[100px] items-start justify-center relative shrink-0 w-full">
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

export default function GhostNoIconPrimary() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[67px] py-[82px] relative size-full" data-name="Ghost No Icon - Primary">
      <Frame3 />
    </div>
  );
}