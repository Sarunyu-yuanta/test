import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { ButtonPage } from "./pages/ButtonPage";
import { TabPage } from "./pages/TabPage";
import { InputPage } from "./pages/InputPage";
import { CardPage } from "./pages/CardPage";
import { TextAreaPage } from "./pages/TextAreaPage";
import { DropdownPage } from "./pages/DropdownPage";
import { DropdownMultiplePage } from "./pages/DropdownMultiplePage";
import { DateInputPage } from "./pages/DateInputPage";
import { TimeInputPage } from "./pages/TimeInputPage";
import { SearchInputPage } from "./pages/SearchInputPage";
import { OptionListPage } from "./pages/OptionListPage";
import { TagPage } from "./pages/TagPage";
import { ChipPage } from "./pages/ChipPage";
import { CheckboxPage } from "./pages/CheckboxPage";
import { RadioPage } from "./pages/RadioPage";
import { TablePage } from "./pages/TablePage";
import { Navigate } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        element: <Navigate to="/button" replace />,
      },
      { path: "button", Component: ButtonPage },
      { path: "tab", Component: TabPage },
      { path: "input", Component: InputPage },
      { path: "textarea", Component: TextAreaPage },
      { path: "card", Component: CardPage },
      { path: "dropdown", Component: DropdownPage },
      {
        path: "dropdown-multiple",
        Component: DropdownMultiplePage,
      },
      { path: "date-input", Component: DateInputPage },
      { path: "time-input", Component: TimeInputPage },
      { path: "search-input", Component: SearchInputPage },
      { path: "option-list", Component: OptionListPage },
      { path: "tag", Component: TagPage },
      { path: "chip", Component: ChipPage },
      { path: "checkbox", Component: CheckboxPage },
      { path: "radio", Component: RadioPage },
      { path: "table", Component: TablePage },
    ],
  },
]);