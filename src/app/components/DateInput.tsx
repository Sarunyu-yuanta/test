import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import type { DateRange, CaptionProps } from "react-day-picker";
import { DayPicker, useNavigation } from "react-day-picker";
import * as Popover from "@radix-ui/react-popover";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import svgPaths from "../../imports/svg-loajaibmku";
import { useIsMobile } from "./ui/use-mobile";
import { Button } from "./Button";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerTitle,
} from "./ui/drawer";

export type { DateRange };
export type DateInputState =
  | "default"
  | "focus"
  | "error"
  | "disabled";
export type DateInputMode = "single" | "range";
/** "calendar" = DayPicker grid (default), "scroll" = drum-scroll picker (single mode only) */
export type DatePickerVariant = "calendar" | "scroll";

export interface DateInputProps {
  mode?: DateInputMode;
  /** Floating label / placeholder text */
  placeholder?: string;
  /** Shows red asterisk */
  required?: boolean;
  /** Override visual state (for showcase) */
  forceState?: DateInputState;
  /** Error message shown below in error state */
  errorMessage?: string;
  /** Helper text shown below */
  helperText?: string;
  /** "calendar" (default) or "scroll" drum picker. Scroll only works with mode="single". */
  pickerVariant?: DatePickerVariant;
  /** Controlled value – single mode */
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  /** Controlled value – range mode */
  dateRange?: DateRange;
  onRangeChange?: (range: DateRange | undefined) => void;
  /** Gregorian years that are disabled in the year picker grid */
  disabledYears?: number[];
  className?: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────
const FONT = "'Noto Sans Thai', sans-serif";

const THAI_MONTHS_SHORT = [
  "ม.ค.",
  "ก.พ.",
  "มี.ค.",
  "เม.ย.",
  "พ.ค.",
  "มิ.ย.",
  "ก.ค.",
  "ส.ค.",
  "ก.ย.",
  "ต.ค.",
  "พ.ย.",
  "ธ.ค.",
];
const THAI_MONTHS_FULL = [
  "มกราคม",
  "กุมภาพันธ์",
  "มีนาคม",
  "เมษายน",
  "พฤษภาคม",
  "มิถุนายน",
  "กรกฎาคม",
  "สิงหาคม",
  "กันยายน",
  "ตุลาคม",
  "พฤศจิกายน",
  "ธันวาคม",
];
const THAI_WEEKDAYS = ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"];

function formatThaiDate(date: Date): string {
  return `${date.getDate()} ${THAI_MONTHS_SHORT[date.getMonth()]} ${date.getFullYear() + 543}`;
}

// ─── Icons ────────────────────────────────────────────────────────────────────
function CalendarIconLarge({
  color = "#6A7282",
}: {
  color?: string;
}) {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div
        className="absolute"
        style={{ inset: "6.25% 12.5% 12.5% 12.5%" }}
      >
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 18 19.5"
        >
          <path d={svgPaths.p36b70e00} fill={color} />
        </svg>
      </div>
    </div>
  );
}

function CalendarIconSmall({
  color = "#6A7282",
}: {
  color?: string;
}) {
  return (
    <div className="overflow-clip relative shrink-0 size-[22px]">
      <div
        className="absolute"
        style={{ inset: "6.25% 12.5% 12.5% 12.5%" }}
      >
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 16.5 17.875"
        >
          <path d={svgPaths.p3d3fa800} fill={color} />
        </svg>
      </div>
    </div>
  );
}

function MinusIcon({ color = "#101828" }: { color?: string }) {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div
        className="absolute"
        style={{ inset: "46.88% 12.5%" }}
      >
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 15 1.25"
        >
          <path d={svgPaths.p1bc5b600} fill={color} />
        </svg>
      </div>
    </div>
  );
}

// ─── Context: tells Caption it's inside a Drawer range picker ────────────────
const DrawerRangeCtx = React.createContext(false);

// ─── Context: disabled years / months passed into CustomCaption ──────────────
interface DisabledDatesCtxValue {
  disabledYears?: number[];
}
const DisabledDatesCtx = React.createContext<DisabledDatesCtxValue>({});

// ─── Custom Caption with << < label > >> ─────────────────────────────────────
const NAV_BTN_CLASS = [
  "h-[28px] w-[28px] inline-flex items-center justify-center",
  "rounded-[6px] bg-transparent border border-[rgba(0,0,0,0.1)] cursor-pointer",
  "text-[#6a7282] hover:bg-[#f3f4f6] transition-colors duration-100",
  "p-0 outline-none",
].join(" ");

type CaptionView = "days" | "months" | "years";

function CustomCaption({
  displayMonth,
  displayIndex,
}: CaptionProps) {
  const { goToMonth, previousMonth, nextMonth, displayMonths } =
    useNavigation();
  const isDrawerRange = React.useContext(DrawerRangeCtx);
  const { disabledYears = [] } = React.useContext(DisabledDatesCtx);
  const [view, setView] = useState<CaptionView>("days");
  const [pickerYear, setPickerYear] = useState(
    displayMonth.getFullYear(),
  );
  const [yearRangeStart, setYearRangeStart] = useState(
    Math.floor(displayMonth.getFullYear() / 12) * 12,
  );

  const isFirst =
    displayMonths[0].getTime() === displayMonth.getTime();
  const isLast =
    displayMonths[displayMonths.length - 1].getTime() ===
    displayMonth.getTime();
  const idx = displayIndex ?? 0;

  const handlePrevYear = () => {
    const d = new Date(displayMonth);
    d.setFullYear(d.getFullYear() - 1);
    goToMonth(d);
  };
  const handleNextYear = () => {
    const d = new Date(displayMonth);
    d.setFullYear(d.getFullYear() + 1);
    goToMonth(d);
  };

  // ── Drawer range: non-first months show only centered label ──
  if (isDrawerRange && !isFirst) {
    return (
      <div
        className="flex items-center justify-center pt-3 mb-2"
        style={{ fontFamily: FONT }}
      >
        <button
          type="button"
          className="text-[14px] leading-[20px] text-[#101828] font-medium hover:text-[#0A6EE7] cursor-pointer bg-transparent border-0 outline-none transition-colors"
          style={{ fontFamily: FONT }}
          onClick={() => {
            setPickerYear(displayMonth.getFullYear());
            setView("months");
          }}
        >
          {THAI_MONTHS_FULL[displayMonth.getMonth()]}{" "}
          {displayMonth.getFullYear() + 543}
        </button>
      </div>
    );
  }

  // ── Header text & click per view ────────────────────────────
  let headerText: string;
  let onHeaderClick: () => void;

  if (view === "years") {
    headerText = `${yearRangeStart + 543} - ${yearRangeStart + 11 + 543}`;
    onHeaderClick = () => setView("months");
  } else if (view === "months") {
    headerText = `${pickerYear + 543}`;
    onHeaderClick = () => {
      setYearRangeStart(Math.floor(pickerYear / 12) * 12);
      setView("years");
    };
  } else {
    headerText = `${THAI_MONTHS_FULL[displayMonth.getMonth()]} ${displayMonth.getFullYear() + 543}`;
    onHeaderClick = () => {
      setPickerYear(displayMonth.getFullYear());
      setView("months");
    };
  }

  // ── Nav buttons per view ────────────────────────────────────
  let leftNav: React.ReactNode = null;
  let rightNav: React.ReactNode = null;

  if (view === "years") {
    leftNav = (
      <button
        type="button"
        className={NAV_BTN_CLASS}
        onClick={() => setYearRangeStart((s) => s - 12)}
      >
        <ChevronLeft size={16} className="text-[#0A6EE7]" />
      </button>
    );
    rightNav = (
      <button
        type="button"
        className={NAV_BTN_CLASS}
        onClick={() => setYearRangeStart((s) => s + 12)}
      >
        <ChevronRight size={16} className="text-[#0A6EE7]" />
      </button>
    );
  } else if (view === "months") {
    leftNav = (
      <button
        type="button"
        className={NAV_BTN_CLASS}
        onClick={() => setPickerYear((y) => y - 1)}
      >
        <ChevronLeft size={16} className="text-[#0A6EE7]" />
      </button>
    );
    rightNav = (
      <button
        type="button"
        className={NAV_BTN_CLASS}
        onClick={() => setPickerYear((y) => y + 1)}
      >
        <ChevronRight size={16} className="text-[#0A6EE7]" />
      </button>
    );
  } else if (isDrawerRange) {
    leftNav = (
      <>
        <button
          type="button"
          className={NAV_BTN_CLASS}
          onClick={handlePrevYear}
        >
          <ChevronsLeft size={16} className="text-[#0A6EE7]" />
        </button>
        <button
          type="button"
          className={NAV_BTN_CLASS}
          onClick={() =>
            previousMonth && goToMonth(previousMonth)
          }
        >
          <ChevronLeft size={16} className="text-[#0A6EE7]" />
        </button>
      </>
    );
    rightNav = (
      <>
        <button
          type="button"
          className={NAV_BTN_CLASS}
          onClick={() => nextMonth && goToMonth(nextMonth)}
        >
          <ChevronRight size={16} className="text-[#0A6EE7]" />
        </button>
        <button
          type="button"
          className={NAV_BTN_CLASS}
          onClick={handleNextYear}
        >
          <ChevronsRight size={16} className="text-[#0A6EE7]" />
        </button>
      </>
    );
  } else {
    if (isFirst) {
      leftNav = (
        <>
          <button
            type="button"
            className={NAV_BTN_CLASS}
            onClick={handlePrevYear}
          >
            <ChevronsLeft
              size={16}
              className="text-[#0A6EE7]"
            />
          </button>
          <button
            type="button"
            className={NAV_BTN_CLASS}
            onClick={() =>
              previousMonth && goToMonth(previousMonth)
            }
          >
            <ChevronLeft size={16} className="text-[#0A6EE7]" />
          </button>
        </>
      );
    }
    if (isLast) {
      rightNav = (
        <>
          <button
            type="button"
            className={NAV_BTN_CLASS}
            onClick={() => nextMonth && goToMonth(nextMonth)}
          >
            <ChevronRight
              size={16}
              className="text-[#0A6EE7]"
            />
          </button>
          <button
            type="button"
            className={NAV_BTN_CLASS}
            onClick={handleNextYear}
          >
            <ChevronsRight
              size={16}
              className="text-[#0A6EE7]"
            />
          </button>
        </>
      );
    }
  }

  // ── Shared grid button style ────────────────────────────────
  const now = new Date();
  const gridBtnClass = (
    active: boolean,
    isToday: boolean,
    isItemDisabled = false,
  ) =>
    `py-[10px] text-[13px] rounded-[6px] border-0 outline-none transition-colors ${
      isItemDisabled
        ? "bg-[#F3F4F6] text-[#99a1af] cursor-not-allowed"
        : active
          ? "bg-[#0A6EE7] text-white cursor-pointer"
          : isToday
            ? "bg-[rgba(10,110,231,0.1)] text-[#0A6EE7] cursor-pointer"
            : "bg-transparent text-[#101828] hover:bg-[#f3f4f6] cursor-pointer"
    }`;

  return (
    <>
      <div
        className="flex items-center justify-between pt-1 mb-2"
        style={{ fontFamily: FONT }}
      >
        <div className="flex gap-1">{leftNav}</div>
        <button
          type="button"
          className="text-[14px] leading-[20px] text-[#101828] font-medium hover:text-[#0A6EE7] cursor-pointer bg-transparent border-0 outline-none transition-colors"
          style={{ fontFamily: FONT }}
          onClick={onHeaderClick}
        >
          {headerText}
        </button>
        <div className="flex gap-1">{rightNav}</div>
      </div>

      {view === "months" && (
        <div
          className="absolute left-0 right-0 z-10 bg-white grid grid-cols-3 gap-1 p-2 content-center"
          style={{ top: "42px", bottom: "0", fontFamily: FONT }}
        >
          {THAI_MONTHS_SHORT.map((name, i) => {
            const isCurrent =
              pickerYear === displayMonth.getFullYear() &&
              i === displayMonth.getMonth();
            const isToday =
              pickerYear === now.getFullYear() &&
              i === now.getMonth();
            return (
              <button
                key={i}
                type="button"
                onClick={() => {
                  goToMonth(new Date(pickerYear, i - idx));
                  setView("days");
                }}
                className={gridBtnClass(isCurrent, isToday)}
                style={{ fontFamily: FONT }}
              >
                {name}
              </button>
            );
          })}
        </div>
      )}

      {view === "years" && (
        <div
          className="absolute left-0 right-0 z-10 bg-white grid grid-cols-3 gap-1 p-2 content-center"
          style={{ top: "42px", bottom: "0", fontFamily: FONT }}
        >
          {Array.from({ length: 12 }, (_, i) => {
            const year = yearRangeStart + i;
            const isCurrent =
              year === displayMonth.getFullYear();
            const isToday = year === now.getFullYear();
            const isYearDisabled = disabledYears.includes(year);
            return (
              <button
                key={year}
                type="button"
                disabled={isYearDisabled}
                onClick={() => {
                  if (isYearDisabled) return;
                  setPickerYear(year);
                  setView("months");
                }}
                className={gridBtnClass(isCurrent, isToday, isYearDisabled)}
                style={{ fontFamily: FONT }}
              >
                {year + 543}
              </button>
            );
          })}
        </div>
      )}
    </>
  );
}

// ─── DayPicker classNames ─────────────────────────────────────────────────────
const DAY_PICKER_CLASSES = {
  months: "flex flex-col sm:flex-row sm:gap-6",
  month: "space-y-2 relative",
  caption:
    "flex justify-center pt-1 relative items-center mb-2",
  caption_label: "text-[14px] leading-[20px] text-[#101828]",
  nav: "hidden",
  nav_button: [
    "h-[28px] w-[28px] inline-flex items-center justify-center",
    "rounded-[6px] bg-transparent border border-[rgba(0,0,0,0.1)] cursor-pointer",
    "text-[#6a7282] hover:bg-[#f3f4f6] transition-colors duration-100",
    "p-0 outline-none",
  ].join(" "),
  nav_button_previous: "absolute left-1",
  nav_button_next: "absolute right-1",
  table: "w-full border-collapse",
  head_row: "flex",
  head_cell:
    "w-[36px] h-[32px] inline-flex items-center justify-center text-[12px] text-[#99a1af] font-normal",
  row: "flex w-full mt-1",
  cell: [
    "h-[36px] w-[36px] text-center p-0 relative overflow-hidden",
    "[&:has(.day-range-middle)]:bg-[#DAE9FB]",
    "[&:has(.day-range-start)]:bg-[#DAE9FB]",
    "[&:has(.day-range-end)]:bg-[#DAE9FB]",
    "[&:has(.day-range-start)]:rounded-l-[6px]",
    "[&:has(.day-range-end)]:rounded-r-[6px]",
    "[&:first-child:has(.day-range-middle)]:rounded-l-[6px]",
    "[&:last-child:has(.day-range-middle)]:rounded-r-[6px]",
    "[&:first-child:has(.day-range-end)]:rounded-l-[6px]",
    "[&:last-child:has(.day-range-start)]:rounded-r-[6px]",
    "focus-within:relative focus-within:z-20",
  ].join(" "),
  day: [
    "h-[36px] w-[36px] inline-flex items-center justify-center",
    "text-[14px] text-[#101828] rounded-[6px]",
    "border-0 bg-transparent cursor-pointer",
    "hover:bg-[#f3f4f6] transition-colors duration-100",
    "outline-none aria-selected:opacity-100 p-0",
  ].join(" "),
  day_range_start:
    "day-range-start !bg-[#0A6EE7] !text-white !rounded-l-[6px] !rounded-r-none",
  day_range_end:
    "day-range-end !bg-[#0A6EE7] !text-white !rounded-r-[6px] !rounded-l-none",
  day_selected:
    "!bg-[#0A6EE7] text-[#FFFFFF] hover:!bg-[#0A6EE7] focus:!bg-[#0A6EE7] rounded-[6px]",
  day_today:
    "[&:not([aria-selected=true])]:!bg-[#0A6EE7]/5 [&:not([aria-selected=true])]:text-[#101828] rounded-[6px]",
  day_outside:
    "day-outside text-[#99a1af] opacity-50 aria-selected:bg-transparent aria-selected:opacity-30",
  day_disabled: "text-[#99a1af] opacity-50 cursor-not-allowed",
  day_range_middle:
    "day-range-middle !bg-[#DAE9FB] !text-[#00A2D9] !rounded-none",
  day_hidden: "invisible",
};

const DRAWER_DAY_PICKER_CLASSES: typeof DAY_PICKER_CLASSES = {
  ...DAY_PICKER_CLASSES,
  months: "flex flex-col gap-6 w-full",
  month: "space-y-2 relative w-full",
  table: "w-full border-collapse table-fixed",
  head_row: "flex w-full",
  head_cell:
    "flex-1 h-[40px] inline-flex items-center justify-center text-[13px] text-[#99a1af] font-normal",
  row: "flex w-full mt-1",
  cell: [
    "h-[44px] flex-1 text-center p-0 relative overflow-hidden",
    "[&:has(.day-range-middle)]:bg-[#DAE9FB]",
    "[&:has(.day-range-start)]:bg-[#DAE9FB]",
    "[&:has(.day-range-end)]:bg-[#DAE9FB]",
    "[&:has(.day-range-start)]:rounded-l-[8px]",
    "[&:has(.day-range-end)]:rounded-r-[8px]",
    "[&:first-child:has(.day-range-middle)]:rounded-l-[8px]",
    "[&:last-child:has(.day-range-middle)]:rounded-r-[8px]",
    "[&:first-child:has(.day-range-end)]:rounded-l-[8px]",
    "[&:last-child:has(.day-range-start)]:rounded-r-[8px]",
    "focus-within:relative focus-within:z-20",
  ].join(" "),
  day: [
    "h-[44px] w-full inline-flex items-center justify-center",
    "text-[16px] text-[#101828] rounded-[8px]",
    "border-0 bg-transparent cursor-pointer",
    "hover:bg-[#f3f4f6] transition-colors duration-100",
    "outline-none aria-selected:opacity-100 p-0",
  ].join(" "),
};

// ─── Scroll Date Picker ────────────────────────────────────────────────────────
const DATE_ITEM_H = 40;
const DATE_DRUM_H = 200; // shows 5 items
const DATE_SPACER = (DATE_DRUM_H - DATE_ITEM_H) / 2;

const SCROLL_YEAR_START = 1950;
const SCROLL_YEAR_END = 2060;
const YEAR_ITEMS = Array.from(
  { length: SCROLL_YEAR_END - SCROLL_YEAR_START + 1 },
  (_, i) => String(SCROLL_YEAR_START + i),
);

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}

function dateToScrollValue(date: Date | undefined): {
  year: number;
  month: number;
  day: number;
} {
  const d = date ?? new Date();
  return {
    year: d.getFullYear(),
    month: d.getMonth() + 1,
    day: d.getDate(),
  };
}

function scrollValueToDate(v: {
  year: number;
  month: number;
  day: number;
}): Date {
  return new Date(v.year, v.month - 1, v.day);
}

function DateScrollColumn({
  items,
  selectedIndex,
  onChange,
  flex = 1,
}: {
  items: string[];
  selectedIndex: number;
  onChange: (index: number) => void;
  /** flex-grow value; columns share available width proportionally */
  flex?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<
    ReturnType<typeof setTimeout> | undefined
  >(undefined);
  const [localIndex, setLocalIndex] = useState(selectedIndex);
  const isUserScrolling = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      el.scrollTop = selectedIndex * DATE_ITEM_H;
      setLocalIndex(selectedIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isUserScrolling.current) return;
    const el = containerRef.current;
    if (el) {
      el.scrollTo({
        top: selectedIndex * DATE_ITEM_H,
        behavior: "smooth",
      });
      setLocalIndex(selectedIndex);
    }
  }, [selectedIndex]);

  const handleScroll = useCallback(() => {
    isUserScrolling.current = true;
    const el = containerRef.current;
    if (!el) return;

    const rawIdx = el.scrollTop / DATE_ITEM_H;
    const idx = Math.max(
      0,
      Math.min(Math.round(rawIdx), items.length - 1),
    );
    setLocalIndex(idx);

    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      isUserScrolling.current = false;
      const finalIdx = Math.max(
        0,
        Math.min(
          Math.round(el.scrollTop / DATE_ITEM_H),
          items.length - 1,
        ),
      );
      el.scrollTo({
        top: finalIdx * DATE_ITEM_H,
        behavior: "smooth",
      });
      onChange(finalIdx);
      setLocalIndex(finalIdx);
    }, 120);
  }, [items.length, onChange]);

  const handleItemClick = useCallback(
    (idx: number) => {
      setLocalIndex(idx);
      onChange(idx);
      containerRef.current?.scrollTo({
        top: idx * DATE_ITEM_H,
        behavior: "smooth",
      });
    },
    [onChange],
  );

  return (
    <div
      ref={containerRef}
      className="relative [&::-webkit-scrollbar]:hidden min-w-0"
      style={{
        flex,
        height: DATE_DRUM_H,
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
        scrollbarWidth: "none",
      }}
      onScroll={handleScroll}
    >
      <div style={{ height: DATE_SPACER, flexShrink: 0 }} />
      {items.map((label, idx) => {
        const isSel = idx === localIndex;
        return (
          <div
            key={idx}
            style={{
              height: DATE_ITEM_H,
              scrollSnapAlign: "center",
            }}
            className="flex items-center justify-center cursor-pointer select-none"
            onClick={() => handleItemClick(idx)}
          >
            <span
              style={{
                fontFamily: FONT,
                fontSize: isSel ? 32 : 14,
                lineHeight: 1,
                color: isSel ? "#101828" : "#99a1af",
                transition: "font-size 0.1s, color 0.1s",
                whiteSpace: "nowrap",
              }}
            >
              {label}
            </span>
          </div>
        );
      })}
      <div style={{ height: DATE_SPACER, flexShrink: 0 }} />
    </div>
  );
}

function ScrollDatePickerContent({
  value,
  onChange,
}: {
  value: { year: number; month: number; day: number };
  onChange: (v: { year: number; month: number; day: number }) => void;
}) {
  const daysInMonth = getDaysInMonth(value.year, value.month);
  const dayItems = Array.from({ length: daysInMonth }, (_, i) =>
    String(i + 1).padStart(2, "0"),
  );
  const monthIndex = value.month - 1;
  const dayIndex = Math.min(value.day, daysInMonth) - 1;
  const yearIndex = value.year - SCROLL_YEAR_START;

  const handleMonthChange = useCallback(
    (idx: number) => {
      const newMonth = idx + 1;
      const maxDay = getDaysInMonth(value.year, newMonth);
      onChange({
        ...value,
        month: newMonth,
        day: Math.min(value.day, maxDay),
      });
    },
    [value, onChange],
  );

  const handleDayChange = useCallback(
    (idx: number) => {
      onChange({ ...value, day: idx + 1 });
    },
    [value, onChange],
  );

  const handleYearChange = useCallback(
    (idx: number) => {
      const newYear = SCROLL_YEAR_START + idx;
      const maxDay = getDaysInMonth(newYear, value.month);
      onChange({
        ...value,
        year: newYear,
        day: Math.min(value.day, maxDay),
      });
    },
    [value, onChange],
  );

  return (
    <div className="relative w-full" style={{ fontFamily: FONT }}>
      {/* Highlight band – centred over the selected row */}
      <div
        className="absolute left-0 right-0 rounded-[4px] bg-[#f3f8fe] pointer-events-none"
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          height: DATE_ITEM_H,
          zIndex: 0,
        }}
      />
      <div
        className="relative flex gap-[8px] items-center w-full min-w-[340px] px-4"
        style={{ zIndex: 1 }}
      >
        <DateScrollColumn
          items={THAI_MONTHS_FULL}
          selectedIndex={monthIndex}
          onChange={handleMonthChange}
          flex={108}
        />
        <DateScrollColumn
          items={dayItems}
          selectedIndex={dayIndex}
          onChange={handleDayChange}
          flex={38}
        />
        <DateScrollColumn
          items={YEAR_ITEMS}
          selectedIndex={yearIndex}
          onChange={handleYearChange}
          flex={85}
        />
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export function DateInput({
  mode = "single",
  placeholder = "Text label",
  required = false,
  forceState,
  errorMessage = "Error message",
  helperText,
  pickerVariant = "calendar",
  value,
  onChange,
  dateRange,
  onRangeChange,
  disabledYears,
  className = "",
}: DateInputProps) {
  const [open, setOpen] = useState(false);
  const [internalDate, setInternalDate] = useState<
    Date | undefined
  >(undefined);
  const [internalRange, setInternalRange] = useState<
    DateRange | undefined
  >(undefined);
  const isMobile = useIsMobile();

  // Draft values – live-updated while picker is open; committed on ตกลง
  const [draftDate, setDraftDate] = useState<Date | undefined>(
    undefined,
  );
  const [draftRange, setDraftRange] = useState<
    DateRange | undefined
  >(undefined);
  const [draftScrollValue, setDraftScrollValue] = useState<{
    year: number;
    month: number;
    day: number;
  }>(dateToScrollValue(undefined));

  const isStatic = Boolean(forceState);
  const isDisabled = forceState === "disabled";

  // Controlled vs uncontrolled
  const currentDate =
    value !== undefined ? value : internalDate;
  const currentRange =
    dateRange !== undefined ? dateRange : internalRange;

  const state: DateInputState =
    forceState ?? (open ? "focus" : "default");
  const isError = state === "error";
  const isFocus = state === "focus";

  const isFilled =
    mode === "single"
      ? Boolean(currentDate)
      : Boolean(currentRange?.from);

  // ── Colours ─────────────────────────────────────────────────────────────────
  const bgClass = isDisabled ? "bg-[#f3f4f6]" : "bg-white";
  const labelColor = isDisabled ? "#99a1af" : "#6a7282";
  const valueColor = isDisabled ? "#99a1af" : "#101828";
  const iconColor = isDisabled ? "#99A1AF" : "#6A7282";
  const minusColor = isDisabled ? "#99A1AF" : "#101828";
  const asteriskColorEmpty = isDisabled ? "#99a1af" : "#c10007";
  const asteriskColorFilled = isDisabled
    ? "#99a1af"
    : "#c10007";

  // ── Border overlay ───────────────────────────────────────────────────────────
  const borderInset = isFocus || isError ? "-1px" : "0px";
  const borderRad = isFocus || isError ? "9px" : "8px";
  const borderColor = isDisabled
    ? "rgba(0,0,0,0.05)"
    : isError
      ? "#e7000b"
      : isFocus
        ? "#0a6ee7"
        : "rgba(0,0,0,0.1)";

  const showBelow = isError || Boolean(helperText);
  const leftText = isError ? errorMessage : (helperText ?? "");
  const leftColor = isError ? "#c10007" : "#6a7282";

  // ── Handlers ─────────────────────────────────────────────────────────────────
  const handleDateSelect = (date: Date | undefined) => {
    setDraftDate(date);
  };

  const handleRangeSelect = (range: DateRange | undefined) => {
    setDraftRange(range);
  };

  const handleCancel = () => setOpen(false);

  const handleConfirm = () => {
    if (pickerVariant === "scroll") {
      const d = scrollValueToDate(draftScrollValue);
      if (value === undefined) setInternalDate(d);
      onChange?.(d);
    } else if (mode === "single") {
      if (value === undefined) setInternalDate(draftDate);
      onChange?.(draftDate);
    } else {
      if (dateRange === undefined) setInternalRange(draftRange);
      onRangeChange?.(draftRange);
    }
    setOpen(false);
  };

  // ── Trigger content ──────────────────────────────────────────────────────────
  const renderContent = () => {
    if (isFilled) {
      // Floating label row
      const floatingLabel = required ? (
        <div className="flex gap-[2px] items-center relative shrink-0 w-full">
          <p
            className="leading-[16px] not-italic relative shrink-0 text-[12px] whitespace-nowrap"
            style={{ color: labelColor, fontFamily: FONT }}
          >
            {placeholder}
          </p>
          <p
            className="leading-[1.5] not-italic relative shrink-0 text-[9px] w-[7px]"
            style={{
              color: asteriskColorFilled,
              fontFamily: FONT,
            }}
          >
            *
          </p>
        </div>
      ) : (
        <p
          className="leading-[16px] not-italic relative shrink-0 text-[12px] w-full"
          style={{ color: labelColor, fontFamily: FONT }}
        >
          {placeholder}
        </p>
      );

      // Value row
      const valueRow =
        mode === "single" && currentDate ? (
          <p
            className="leading-[20px] not-italic relative shrink-0 text-[16px] w-full"
            style={{ color: valueColor, fontFamily: FONT }}
          >
            {formatThaiDate(currentDate)}
          </p>
        ) : mode === "range" && currentRange?.from ? (
          <div className="flex gap-[8px] items-center relative shrink-0 w-full">
            <p
              className="leading-[20px] not-italic relative shrink-0 text-[16px] whitespace-nowrap"
              style={{ color: valueColor, fontFamily: FONT }}
            >
              {formatThaiDate(currentRange.from)}
            </p>
            <MinusIcon color={minusColor} />
            <p
              className="leading-[20px] not-italic relative shrink-0 text-[16px] whitespace-nowrap"
              style={{ color: valueColor, fontFamily: FONT }}
            >
              {currentRange.to
                ? formatThaiDate(currentRange.to)
                : "..."}
            </p>
          </div>
        ) : null;

      return (
        <div className="content-stretch flex flex-1 flex-col items-center justify-center min-h-px min-w-px relative">
          {floatingLabel}
          {valueRow}
        </div>
      );
    }

    // Empty – required
    if (required) {
      return (
        <div
          className="content-stretch flex flex-1 min-w-px min-h-px gap-[2px] items-center relative"
          style={{ fontFamily: FONT }}
        >
          <p
            className="leading-[20px] not-italic relative shrink-0 text-[16px] whitespace-nowrap"
            style={{ color: labelColor }}
          >
            {placeholder}
          </p>
          <p
            className="font-normal h-full leading-[1.5] not-italic relative shrink-0 text-[12px] w-[7px]"
            style={{ color: asteriskColorEmpty }}
          >
            *
          </p>
        </div>
      );
    }

    // Empty – plain placeholder
    return (
      <p
        className="flex-1 min-w-0 min-h-px text-[16px] leading-[20px] not-italic overflow-hidden text-ellipsis whitespace-nowrap relative"
        style={{ color: labelColor, fontFamily: FONT }}
      >
        {placeholder}
      </p>
    );
  };

  // ── Shared trigger inner markup (used by both static div and interactive button)
  const triggerInner = (
    <>
      {/* Border overlay */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none border border-solid"
        style={{
          inset: borderInset,
          borderRadius: borderRad,
          borderColor,
        }}
      />
      {renderContent()}
      {/* Calendar icon */}
      <div
        className={`flex flex-row items-center shrink-0 ${isFilled ? "self-stretch" : ""}`}
      >
        {isFilled ? (
          <CalendarIconSmall color={iconColor} />
        ) : (
          <CalendarIconLarge color={iconColor} />
        )}
      </div>
    </>
  );

  const triggerBaseClasses = `relative flex gap-[8px] items-center rounded-[8px] ${bgClass} px-[14px] ${isFilled ? "py-[6px]" : "py-[12px]"} w-full`;

  // ── Below message ─────────────────────────────────────────────────────────────
  const belowMessage = showBelow && (
    <div
      className="flex items-start px-[4px] text-[12px] leading-[16px]"
      style={{ fontFamily: FONT }}
    >
      <span
        className="flex-1 min-w-0"
        style={{ color: leftColor }}
      >
        {leftText}
      </span>
    </div>
  );

  // ── Static showcase (forceState set) ─────────────────────────────────────────
  if (isStatic) {
    return (
      <div
        className={`flex flex-col gap-[4px] w-full ${className}`}
      >
        <div className={triggerBaseClasses}>{triggerInner}</div>
        {belowMessage}
      </div>
    );
  }

  // ── Picker content ────────────────────────────────────────────────────────────
  const isScrollVariant = pickerVariant === "scroll" && mode === "single";

  const pickerClasses = isMobile
    ? DRAWER_DAY_PICKER_CLASSES
    : DAY_PICKER_CLASSES;

  const pickerInner = isScrollVariant ? (
    <ScrollDatePickerContent
      value={draftScrollValue}
      onChange={setDraftScrollValue}
    />
  ) : mode === "single" ? (
    <DayPicker
      mode="single"
      selected={draftDate}
      onSelect={handleDateSelect}
      showOutsideDays
      classNames={pickerClasses}
      formatters={{
        formatWeekdayName: (date) =>
          THAI_WEEKDAYS[date.getDay()],
      }}
      components={{ Caption: CustomCaption }}
    />
  ) : (
    <DayPicker
      mode="range"
      selected={draftRange}
      onSelect={handleRangeSelect}
      numberOfMonths={2}
      showOutsideDays
      classNames={pickerClasses}
      formatters={{
        formatWeekdayName: (date) =>
          THAI_WEEKDAYS[date.getDay()],
      }}
      components={{ Caption: CustomCaption }}
    />
  );

  const calendarContent = (
    <DisabledDatesCtx.Provider value={{ disabledYears }}>
      {pickerInner}
    </DisabledDatesCtx.Provider>
  );

  const actionButtons = (
    <div className="flex gap-[12px] items-center pt-[12px]">
      <Button
        variant="outline"
        size="lg"
        className="flex-1"
        onClick={handleCancel}
      >
        ยกเลิก
      </Button>
      <Button
        variant="primary"
        size="lg"
        className="flex-1"
        onClick={handleConfirm}
      >
        ตกลง
      </Button>
    </div>
  );

  const triggerButton = (
    <button
      type="button"
      disabled={isDisabled}
      className={`${triggerBaseClasses} text-left cursor-pointer disabled:cursor-default`}
    >
      {triggerInner}
    </button>
  );

  const handleOpenChange = (o: boolean) => {
    if (!isDisabled) {
      if (o) {
        // Snapshot committed values into draft when picker opens
        setDraftDate(currentDate);
        setDraftRange(currentRange);
        setDraftScrollValue(dateToScrollValue(currentDate));
      }
      setOpen(o);
    }
  };

  // ── Interactive ──────────────────────────────────────────────────────────────
  return (
    <div
      className={`flex flex-col gap-[4px] w-full ${className}`}
    >
      {isMobile ? (
        <Drawer open={open} onOpenChange={handleOpenChange}>
          <DrawerTrigger asChild>{triggerButton}</DrawerTrigger>
          <DrawerContent>
            <DrawerTitle className="sr-only">
              เลือกวันที่
            </DrawerTitle>
            <div
              className="overflow-auto px-4 pt-2 pb-8 w-full"
              style={{ fontFamily: FONT }}
            >
              <DrawerRangeCtx.Provider value={mode === "range"}>
                {calendarContent}
              </DrawerRangeCtx.Provider>
              {actionButtons}
            </div>
          </DrawerContent>
        </Drawer>
      ) : (
        <Popover.Root
          open={open}
          onOpenChange={handleOpenChange}
        >
          <Popover.Trigger asChild>
            {triggerButton}
          </Popover.Trigger>

          <Popover.Portal>
            <Popover.Content
              align="start"
              sideOffset={4}
              className="z-50 rounded-[8px] bg-white p-3 outline-none"
              style={{
                boxShadow:
                  "0px 20px 25px -5px rgba(0,0,0,0.1), 0px 8px 10px -6px rgba(0,0,0,0.1)",
                border: "1px solid rgba(0,0,0,0.08)",
                fontFamily: FONT,
              }}
              onOpenAutoFocus={(e) => e.preventDefault()}
            >
              {calendarContent}
              {actionButtons}
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      )}

      {belowMessage}
    </div>
  );
}