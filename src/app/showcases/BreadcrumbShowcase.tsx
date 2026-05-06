import { Breadcrumb } from "@/components/breadcrumb";

export function BreadcrumbShowcase() {
  return (
    <div className="min-h-screen bg-background px-6 py-8">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        <div>
          <h1 className="text-foreground">Breadcrumb Component</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Navigation trail showing the current page's location in the site
            hierarchy. The last item is always highlighted as the active page.
          </p>
        </div>

        {/* 1 level deep */}
        <section className="rounded-lg border border-border p-4">
          <p className="mb-4 text-sm font-semibold text-foreground">
            1 level (home + current)
          </p>
          <Breadcrumb
            items={[
              { label: "หน้าหลัก", href: "/" },
              { label: "รายการสินค้า" },
            ]}
          />
        </section>

        {/* 2 levels deep */}
        <section className="rounded-lg border border-border p-4">
          <p className="mb-4 text-sm font-semibold text-foreground">
            2 levels deep
          </p>
          <Breadcrumb
            items={[
              { label: "หน้าหลัก", href: "/" },
              { label: "รายการสินค้า", href: "/products" },
              { label: "รายละเอียดสินค้า" },
            ]}
          />
        </section>

        {/* 3 levels deep */}
        <section className="rounded-lg border border-border p-4">
          <p className="mb-4 text-sm font-semibold text-foreground">
            3 levels deep
          </p>
          <Breadcrumb
            items={[
              { label: "หน้าหลัก", href: "/" },
              { label: "ตั้งค่า", href: "/settings" },
              { label: "บัญชีผู้ใช้", href: "/settings/account" },
              { label: "เปลี่ยนรหัสผ่าน" },
            ]}
          />
        </section>

        {/* 4 levels deep */}
        <section className="rounded-lg border border-border p-4">
          <p className="mb-4 text-sm font-semibold text-foreground">
            4 levels deep
          </p>
          <Breadcrumb
            items={[
              { label: "หน้าหลัก", href: "/" },
              { label: "ตั้งค่า", href: "/settings" },
              { label: "บัญชีผู้ใช้", href: "/settings/account" },
              { label: "ความปลอดภัย", href: "/settings/account/security" },
              { label: "ยืนยันตัวตน" },
            ]}
          />
        </section>

        {/* Without hrefs (non-clickable ancestors) */}
        <section className="rounded-lg border border-border p-4">
          <p className="mb-4 text-sm font-semibold text-foreground">
            Without hrefs — ancestors are non-clickable
          </p>
          <Breadcrumb
            items={[
              { label: "หน้าหลัก" },
              { label: "Page1" },
              { label: "Page2" },
              { label: "Page3" },
            ]}
          />
        </section>

        {/* Props reference */}
        <section className="rounded-lg border border-border p-4">
          <p className="mb-2 text-sm font-semibold text-foreground">Props</p>
          <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-2 pr-4 text-left text-muted-foreground">
                    Prop
                  </th>
                  <th className="py-2 pr-4 text-left text-muted-foreground">
                    Type
                  </th>
                  <th className="py-2 text-left text-muted-foreground">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-2 pr-4 font-mono text-foreground">items</td>
                  <td className="py-2 pr-4 font-mono text-muted-foreground">
                    BreadcrumbItem[]
                  </td>
                  <td className="py-2 text-muted-foreground">
                    Ordered segments. Last item = current page (brand colour).
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-foreground">
                    items[].label
                  </td>
                  <td className="py-2 pr-4 font-mono text-muted-foreground">
                    string
                  </td>
                  <td className="py-2 text-muted-foreground">
                    Display text for the segment.
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-foreground">
                    items[].href
                  </td>
                  <td className="py-2 pr-4 font-mono text-muted-foreground">
                    string?
                  </td>
                  <td className="py-2 text-muted-foreground">
                    When provided, renders the item as a clickable link.
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-foreground">
                    className
                  </td>
                  <td className="py-2 pr-4 font-mono text-muted-foreground">
                    string?
                  </td>
                  <td className="py-2 text-muted-foreground">
                    Extra classes applied to the root {"<nav>"} element.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
