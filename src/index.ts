"use client";

// Components
export { Button } from "./components/button";
export { Badge } from "./components/badge";
export { Alert } from "./components/alert";
export { Card } from "./components/card";
export { Checkbox } from "./components/checkbox";
export { Toggle } from "./components/toggle";
export { Radio } from "./components/radio";
export { Chip } from "./components/chip";
export { DateInput } from "./components/date-input";
export { Dropdown } from "./components/dropdown";
export { DropdownMultiple } from "./components/dropdown-multiple";
export { Input } from "./components/input";
export { Modal } from "./components/modal";
export { Notification } from "./components/notification";
export { Toast, ToastStack, Toaster } from "./components/toast";
export { BottomSheet } from "./components/bottom-sheet";
export { OptionList } from "./components/option-list";
export { SearchInput } from "./components/search-input";
export { Tab, TabGroup } from "./components/tab";
export { Tag, StatusTag } from "./components/tag";
export { Table, TableRow, TableHeaderCell, TableCell } from "./components/table";
export { TextArea } from "./components/textarea";
export { TimeInput } from "./components/time-input";

// Utilities
export { cn } from "./lib/utils";
export { useIsMobile } from "./components/ui/use-mobile";

// Types — Button
export type {
  ButtonProps,
  ButtonSize,
  ButtonLabelSize,
  ButtonIconSize,
  ButtonVariant,
} from "./components/button";

// Types — Badge
export type { BadgeVariant, BadgeNotificationState, BadgeProps } from "./components/badge";

// Types — Alert
export type { AlertStatus, AlertProps } from "./components/alert";

// Types — Card
export type {
  CardProps,
  CardVariant,
  CardSize,
  CardTagStatus,
  CardSocialTag,
} from "./components/card";

// Types — Checkbox
export type {
  CheckboxChecked,
  CheckboxVariant,
  CheckboxProps,
} from "./components/checkbox";

// Types — Toggle
export type { ToggleSize, ToggleProps } from "./components/toggle";

// Types — Radio
export type { RadioVariant, RadioProps } from "./components/radio";

// Types — Chip
export type {
  ChipType,
  ChipSize,
  ChipProps,
} from "./components/chip";

// Types — DateInput
export type {
  DateInputProps,
  DateInputState,
  DateInputMode,
  DatePickerVariant,
} from "./components/date-input";
export type { DateRange } from "react-day-picker";

// Types — Dropdown
export type {
  DropdownState,
  DropdownOption,
  DropdownProps,
} from "./components/dropdown";

// Types — DropdownMultiple
export type {
  DropdownMultipleState,
  DropdownMultipleOption,
  DropdownMultipleProps,
} from "./components/dropdown-multiple";

// Types — Input
export type {
  InputState,
  InputProps,
} from "./components/input";

// Types — Bottom Sheet
export type {
  BottomSheetHeaderType,
  BottomSheetRightSide,
  BottomSheetProps,
} from "./components/bottom-sheet";

// Types — Modal
export type {
  ModalVariant,
  ModalActionLayout,
  ModalResponsive,
  ModalAlertStatus,
  ModalProps,
} from "./components/modal";

// Types — Notification
export type {
  NotificationItemType,
  NotificationItemStatus,
  NotificationItem,
  NotificationGroup,
  NotificationProps,
} from "./components/notification";

// Types — Toast
export type {
  ToastVariant,
  ToastStatus,
  ToastProps,
  ToastStackProps,
  ToasterProps,
} from "./components/toast";


// Types — OptionList
export type {
  OptionItem,
  OptionListProps,
} from "./components/option-list";

// Types — SearchInput
export type {
  SearchInputSize,
  SearchInputProps,
} from "./components/search-input";

// Types — Tab
export type {
  TabSize,
  TabItem,
  TabProps,
  TabGroupProps,
} from "./components/tab";

// Types — Tag
export type {
  TagSize,
  TagState,
  TagVariant,
  TagProps,
  StatusTagType,
  StatusTagProps,
} from "./components/tag";

// Types — Table
export type {
  TableProps,
  TableHeaderType,
  TableHeaderState,
  TableCellType,
  TableCellTextStyle,
  TableHeaderCellProps,
  TableCellProps,
} from "./components/table";

// Types — TextArea
export type {
  TextAreaState,
  TextAreaProps,
} from "./components/textarea";

// Types — TimeInput
export type {
  TimeInputState,
  TimeInputMode,
  TimeValue,
  TimeInputProps,
  TimeSlot,
} from "./components/time-input";

// Default export — for tools that do `import SystemOne from '@sarunyu/system-one'`
import { Button } from "./components/button";
import { Badge } from "./components/badge";
import { Alert } from "./components/alert";
import { Card } from "./components/card";
import { Checkbox } from "./components/checkbox";
import { Toggle } from "./components/toggle";
import { Radio } from "./components/radio";
import { Chip } from "./components/chip";
import { DateInput } from "./components/date-input";
import { Dropdown } from "./components/dropdown";
import { DropdownMultiple } from "./components/dropdown-multiple";
import { Input } from "./components/input";
import { Modal } from "./components/modal";
import { Notification } from "./components/notification";
import { Toast, ToastStack, Toaster } from "./components/toast";
import { BottomSheet } from "./components/bottom-sheet";
import { OptionList } from "./components/option-list";
import { SearchInput } from "./components/search-input";
import { Tab, TabGroup } from "./components/tab";
import { Tag, StatusTag } from "./components/tag";
import { Table, TableRow, TableHeaderCell, TableCell } from "./components/table";
import { TextArea } from "./components/textarea";
import { TimeInput } from "./components/time-input";
import { cn } from "./lib/utils";
import { useIsMobile } from "./components/ui/use-mobile";
export default {
  Button, Badge, Alert, Card, Checkbox, Toggle, Radio, Chip,
  DateInput, Dropdown, DropdownMultiple, Input, Modal, Notification,
  Toast, ToastStack, Toaster, BottomSheet, OptionList, SearchInput,
  Tab, TabGroup, Tag, StatusTag, Table, TableRow, TableHeaderCell, TableCell,
  TextArea, TimeInput, cn, useIsMobile,
};
