type ButtonPlainDefaultXsBlackNoNoNoProps = {
  className?: string;
  textButton?: string;
};

function ButtonPlainDefaultXsBlackNoNoNo({ className, textButton = "Button" }: ButtonPlainDefaultXsBlackNoNoNoProps) {
  return (
    <div className={className || "content-stretch flex items-center justify-center max-w-[343px] px-[6px] py-[4px] relative rounded-[4px] shrink-0"} data-name="Button/Plain/Default/xs/Black/No/No/No">
      <p className="font-['Noto_Sans_Thai:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#101828] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {textButton}
      </p>
    </div>
  );
}
type ButtonPlainDefaultSmBlackNoNoNoProps = {
  className?: string;
  textButton?: string;
};

function ButtonPlainDefaultSmBlackNoNoNo({ className, textButton = "Button" }: ButtonPlainDefaultSmBlackNoNoNoProps) {
  return (
    <div className={className || "content-stretch flex items-center justify-center max-w-[343px] px-[8px] py-[4px] relative rounded-[6px] shrink-0"} data-name="Button/Plain/Default/sm/Black/No/No/No">
      <p className="font-['Noto_sans_thai:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] text-center whitespace-nowrap">{textButton}</p>
    </div>
  );
}
type ButtonPlainDefaultBaseBlackNoNoNoProps = {
  className?: string;
  textButton?: string;
};

function ButtonPlainDefaultBaseBlackNoNoNo({ className, textButton = "Button" }: ButtonPlainDefaultBaseBlackNoNoNoProps) {
  return (
    <div className={className || "content-stretch flex items-center justify-center max-w-[343px] px-[10px] py-[6px] relative rounded-[6px] shrink-0"} data-name="Button/Plain/Default/base/Black/No/No/No">
      <p className="font-['Noto_sans_thai:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] text-center whitespace-nowrap">{textButton}</p>
    </div>
  );
}
type ButtonPlainDefaultLgBlackNoNoNoProps = {
  className?: string;
  textButton?: string;
};

function ButtonPlainDefaultLgBlackNoNoNo({ className, textButton = "Button" }: ButtonPlainDefaultLgBlackNoNoNoProps) {
  return (
    <div className={className || "content-stretch flex items-center justify-center max-w-[343px] px-[14px] py-[8px] relative rounded-[8px] shrink-0"} data-name="Button/Plain/Default/lg/Black/No/No/No">
      <p className="font-['Noto_sans_thai:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] text-center whitespace-nowrap">{textButton}</p>
    </div>
  );
}
type ButtonPlainDefaultXlBlackNoNoNoProps = {
  className?: string;
  textButton?: string;
};

function ButtonPlainDefaultXlBlackNoNoNo({ className, textButton = "Button" }: ButtonPlainDefaultXlBlackNoNoNoProps) {
  return (
    <div className={className || "content-stretch flex items-center justify-center max-w-[343px] px-[16px] py-[10px] relative rounded-[8px] shrink-0"} data-name="Button/Plain/Default/xl/Black/No/No/No">
      <p className="font-['Noto_sans_thai:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] text-center whitespace-nowrap">{textButton}</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[119px] items-center relative shrink-0">
      <ButtonPlainDefaultXsBlackNoNoNo />
      <ButtonPlainDefaultSmBlackNoNoNo />
      <ButtonPlainDefaultBaseBlackNoNoNo />
      <ButtonPlainDefaultLgBlackNoNoNo />
      <ButtonPlainDefaultXlBlackNoNoNo />
    </div>
  );
}
type ButtonPlainHoverXsBlackNoNoNoProps = {
  className?: string;
  textButton?: string;
};

function ButtonPlainHoverXsBlackNoNoNo({ className, textButton = "Button" }: ButtonPlainHoverXsBlackNoNoNoProps) {
  return (
    <div className={className || "bg-[#f9fafb] content-stretch flex items-center justify-center max-w-[343px] px-[6px] py-[4px] relative rounded-[4px] shrink-0"} data-name="Button/Plain/Hover/xs/Black/No/No/No">
      <p className="font-['Noto_Sans_Thai:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#101828] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {textButton}
      </p>
    </div>
  );
}
type ButtonPlainHoverSmBlackNoNoNoProps = {
  className?: string;
  textButton?: string;
};

function ButtonPlainHoverSmBlackNoNoNo({ className, textButton = "Button" }: ButtonPlainHoverSmBlackNoNoNoProps) {
  return (
    <div className={className || "bg-[#f9fafb] content-stretch flex items-center justify-center max-w-[343px] px-[8px] py-[4px] relative rounded-[6px] shrink-0"} data-name="Button/Plain/Hover/sm/Black/No/No/No">
      <p className="font-['Noto_sans_thai:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] text-center whitespace-nowrap">{textButton}</p>
    </div>
  );
}
type ButtonPlainHoverBaseBlackNoNoNoProps = {
  className?: string;
  textButton?: string;
};

function ButtonPlainHoverBaseBlackNoNoNo({ className, textButton = "Button" }: ButtonPlainHoverBaseBlackNoNoNoProps) {
  return (
    <div className={className || "bg-[#f9fafb] content-stretch flex items-center justify-center max-w-[343px] px-[10px] py-[6px] relative rounded-[6px] shrink-0"} data-name="Button/Plain/Hover/base/Black/No/No/No">
      <p className="font-['Noto_sans_thai:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] text-center whitespace-nowrap">{textButton}</p>
    </div>
  );
}
type ButtonPlainHoverLgBlackNoNoNoProps = {
  className?: string;
  textButton?: string;
};

function ButtonPlainHoverLgBlackNoNoNo({ className, textButton = "Button" }: ButtonPlainHoverLgBlackNoNoNoProps) {
  return (
    <div className={className || "bg-[#f9fafb] content-stretch flex items-center justify-center max-w-[343px] px-[14px] py-[8px] relative rounded-[8px] shrink-0"} data-name="Button/Plain/Hover/lg/Black/No/No/No">
      <p className="font-['Noto_sans_thai:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] text-center whitespace-nowrap">{textButton}</p>
    </div>
  );
}
type ButtonPlainHoverXlBlackNoNoNoProps = {
  className?: string;
  textButton?: string;
};

function ButtonPlainHoverXlBlackNoNoNo({ className, textButton = "Button" }: ButtonPlainHoverXlBlackNoNoNoProps) {
  return (
    <div className={className || "bg-[#f9fafb] content-stretch flex items-center justify-center max-w-[343px] px-[16px] py-[10px] relative rounded-[8px] shrink-0"} data-name="Button/Plain/Hover/xl/Black/No/No/No">
      <p className="font-['Noto_sans_thai:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] text-center whitespace-nowrap">{textButton}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[119px] items-center relative shrink-0">
      <ButtonPlainHoverXsBlackNoNoNo />
      <ButtonPlainHoverSmBlackNoNoNo />
      <ButtonPlainHoverBaseBlackNoNoNo />
      <ButtonPlainHoverLgBlackNoNoNo />
      <ButtonPlainHoverXlBlackNoNoNo />
    </div>
  );
}
type ButtonPlainPressXsBlackNoNoNoProps = {
  className?: string;
  textButton?: string;
};

function ButtonPlainPressXsBlackNoNoNo({ className, textButton = "Button" }: ButtonPlainPressXsBlackNoNoNoProps) {
  return (
    <div className={className || "bg-[#f3f4f6] content-stretch flex items-center justify-center max-w-[343px] px-[6px] py-[4px] relative rounded-[4px] shrink-0"} data-name="Button/Plain/Press/xs/Black/No/No/No">
      <p className="font-['Noto_Sans_Thai:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#99a1af] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {textButton}
      </p>
    </div>
  );
}
type ButtonPlainPressSmBlackNoNoNoProps = {
  className?: string;
  textButton?: string;
};

function ButtonPlainPressSmBlackNoNoNo({ className, textButton = "Button" }: ButtonPlainPressSmBlackNoNoNoProps) {
  return (
    <div className={className || "bg-[#f3f4f6] content-stretch flex items-center justify-center max-w-[343px] px-[8px] py-[4px] relative rounded-[6px] shrink-0"} data-name="Button/Plain/Press/sm/Black/No/No/No">
      <p className="font-['Noto_sans_thai:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-center whitespace-nowrap">{textButton}</p>
    </div>
  );
}
type ButtonPlainPressBaseBlackNoNoNoProps = {
  className?: string;
  textButton?: string;
};

function ButtonPlainPressBaseBlackNoNoNo({ className, textButton = "Button" }: ButtonPlainPressBaseBlackNoNoNoProps) {
  return (
    <div className={className || "bg-[#f3f4f6] content-stretch flex items-center justify-center max-w-[343px] px-[10px] py-[6px] relative rounded-[6px] shrink-0"} data-name="Button/Plain/Press/base/Black/No/No/No">
      <p className="font-['Noto_sans_thai:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-center whitespace-nowrap">{textButton}</p>
    </div>
  );
}
type ButtonPlainPressLgBlackNoNoNoProps = {
  className?: string;
  textButton?: string;
};

function ButtonPlainPressLgBlackNoNoNo({ className, textButton = "Button" }: ButtonPlainPressLgBlackNoNoNoProps) {
  return (
    <div className={className || "bg-[#f3f4f6] content-stretch flex items-center justify-center max-w-[343px] px-[14px] py-[8px] relative rounded-[8px] shrink-0"} data-name="Button/Plain/Press/lg/Black/No/No/No">
      <p className="font-['Noto_sans_thai:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-center whitespace-nowrap">{textButton}</p>
    </div>
  );
}
type ButtonPlainPressXlBlackNoNoNoProps = {
  className?: string;
  textButton?: string;
};

function ButtonPlainPressXlBlackNoNoNo({ className, textButton = "Button" }: ButtonPlainPressXlBlackNoNoNoProps) {
  return (
    <div className={className || "bg-[#f3f4f6] content-stretch flex items-center justify-center max-w-[343px] px-[16px] py-[10px] relative rounded-[8px] shrink-0"} data-name="Button/Plain/Press/xl/Black/No/No/No">
      <p className="font-['Noto_sans_thai:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-center whitespace-nowrap">{textButton}</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[119px] items-center relative shrink-0">
      <ButtonPlainPressXsBlackNoNoNo />
      <ButtonPlainPressSmBlackNoNoNo />
      <ButtonPlainPressBaseBlackNoNoNo />
      <ButtonPlainPressLgBlackNoNoNo />
      <ButtonPlainPressXlBlackNoNoNo />
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

export default function GhostNoIconPlain() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[80px] py-[82px] relative size-full" data-name="Ghost No Icon - Plain">
      <Frame3 />
    </div>
  );
}