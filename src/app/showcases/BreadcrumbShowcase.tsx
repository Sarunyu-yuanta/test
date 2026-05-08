import { Breadcrumb } from "@/components/breadcrumb";
import { ShowcasePage } from "../components/ShowcasePage";
import { ComponentPlayground } from "../components/ComponentPlayground";

const LEVELS: { label: string; value: string; items: { label: string; href?: string }[] }[] = [
  {
    label: "1",
    value: "1",
    items: [
      { label: "หน้าหลัก", href: "/" },
      { label: "รายการสินค้า" },
    ],
  },
  {
    label: "2",
    value: "2",
    items: [
      { label: "หน้าหลัก", href: "/" },
      { label: "รายการสินค้า", href: "/products" },
      { label: "รายละเอียดสินค้า" },
    ],
  },
  {
    label: "3",
    value: "3",
    items: [
      { label: "หน้าหลัก", href: "/" },
      { label: "ตั้งค่า", href: "/settings" },
      { label: "บัญชีผู้ใช้", href: "/settings/account" },
      { label: "เปลี่ยนรหัสผ่าน" },
    ],
  },
  {
    label: "4",
    value: "4",
    items: [
      { label: "หน้าหลัก", href: "/" },
      { label: "ตั้งค่า", href: "/settings" },
      { label: "บัญชีผู้ใช้", href: "/settings/account" },
      { label: "ความปลอดภัย", href: "/settings/account/security" },
      { label: "ยืนยันตัวตน" },
    ],
  },
];

function itemsToCode(items: { label: string; href?: string }[]) {
  const lines = items
    .map((item) =>
      item.href
        ? `    { label: "${item.label}", href: "${item.href}" },`
        : `    { label: "${item.label}" },`
    )
    .join("\n");
  return `<Breadcrumb\n  items={[\n${lines}\n  ]}\n/>`;
}

export function BreadcrumbShowcase() {
  return (
    <ShowcasePage
      name="Breadcrumb"
      description="Navigation trail showing the current page's location in the site hierarchy. The last item is always highlighted as the active page."
    >
      <ComponentPlayground
        
        controls={[
          {
            type: "select",
            key: "levels",
            label: "Levels",
            options: LEVELS.map((l) => ({ label: l.label, value: l.value })),
            defaultValue: "2",
          },
        ]}
        render={({ levels }) => {
          const lvl = LEVELS.find((l) => l.value === levels) ?? LEVELS[1];
          return {
            preview: <Breadcrumb items={lvl.items} />,
            code: itemsToCode(lvl.items),
          };
        }}
      />
    </ShowcasePage>
  );
}
