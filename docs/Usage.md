# Usage

---

## Button


Buttons are interactive elements that allow users to click or tap to perform actions — such as submitting a form, saving data, navigating to another page, or opening a popup. / ปุ่มเป็นองค์ประกอบที่ให้ผู้ใช้คลิกหรือแท็บเพื่อทำกิจกรรมต่างๆ เช่น การส่งฟอร์ม, การบันทึกข้อมูล, การนำทางไปยังหน้าอื่น หรือการเปิดหน้าต่างป๊อปอัป

### Types

The button has 4 styles: Primary, Outline, Plain, and Secondary. / ปุ่มมี 4 รูปแบบ คือ Primary, Outline, Plain และ Secondary

| Type | Usage / การใช้งาน |
|---|---|
| **Primary** | The main call-to-action; use for the most important action on a page. / ใช้สำหรับการกระทำที่ต้องการให้ผู้ใช้กดเป็นอันดับแรก และเป็นเป้าหมายหลักของหน้านั้น |
| **Outline** | A secondary action that supports the primary button without affecting the main flow. / ปุ่มสำหรับตัวเลือกหรือการทำงานเพิ่มเติมจากปุ่มหลัก โดยไม่ส่งผลต่อการดำเนินการหลักของหน้า |
| **Plain** | A button with no background or border; use for low-priority actions. / ปุ่มที่ไม่มี background หรือ border ใช้สำหรับ action ที่มีความสำคัญต่ำ |
| **Secondary** | Similar to Outline but in black; use when a blue Outline is not appropriate. / ปุ่มเสริมที่นำมาใช้งานในกรณีที่ไม่ต้องการใช้ปุ่ม Outline สีฟ้า (ลักษณะเหมือน Outline แต่เป็นสีดำ) |

### States

States communicate how the button can be interacted with at any given moment. / รูปแบบการแสดงผลของปุ่มในแต่ละช่วงของการใช้งาน เพื่อบอกผู้ใช้ว่าปุ่มสามารถโต้ตอบได้อย่างไรในขณะนั้น

| State | Description / คำอธิบาย |
|---|---|
| **Default** | The resting state before any interaction. / สถานะปกติเมื่อยังไม่มีการโต้ตอบ |
| **Hover** | When the cursor is positioned over the button. / เมื่อเมาส์ชี้อยู่บนปุ่ม |
| **Press** | While the user is actively pressing the button. / ขณะที่ผู้ใช้กดปุ่มค้างไว้ |
| **Disabled** | The button is not available for interaction. / ปุ่มที่ไม่สามารถใช้งานได้ในขณะนั้น |

### Sizes

The recommended sizes serve as the default standard and can be adjusted based on context. / ขนาดที่แนะนำใช้เป็นค่ามาตรฐานเริ่มต้น และสามารถปรับเปลี่ยนได้ตามบริบทการใช้งาน

| Size | Recommended for / แนะนำสำหรับ |
|---|---|
| **base** | Desktop screens / หน้าจอ Desktop |
| **xl** | Mobile screens / หน้าจอ Mobile |

---

## Card


Card คือองค์ประกอบที่ใช้สำหรับจัดกลุ่มและแสดงข้อมูลที่เกี่ยวข้องกันให้อยู่ภายในกรอบเดียว เพื่อช่วยให้ผู้ใช้มองเห็นและเข้าใจข้อมูลได้ง่ายขึ้น / Card is a component used to group related information into a single container so content is easier to scan and understand.

### Types

Card มี 4 รูปแบบ: News Card, Event & Promotion Card, Social (Standard) Card, และ Live Tag Card / Card has 4 types: News Card, Event & Promotion Card, Social (Standard) Card, and Live Tag Card.

| Type | Usage / การใช้งาน |
|---|---|
| **News Card** | Use for displaying news content or articles. / ใช้สำหรับแสดงข่าวหรือบทความ |
| **Event & Promotion Card** | Use for events, campaigns, and promotional content. / ใช้สำหรับแสดงกิจกรรมหรือโปรโมชัน |
| **Social (Standard) Card** | A general-purpose card for grouped informational content. / การ์ดพื้นฐานสำหรับแสดงข้อมูลทั่วไป ใช้เมื่อต้องการจัดกลุ่มข้อมูลแบบเรียบง่าย |
| **Live Tag Card** | Use when content is currently live or being updated in real time (e.g., live broadcast). / การ์ดที่มีป้ายสถานะสด (Live) ใช้เมื่อต้องการสื่อว่าข้อมูลกำลังดำเนินอยู่แบบเรียลไทม์ เช่น ถ่ายทอดสด |

### Bookmark States

Bookmark คือสัญลักษณ์สำหรับบันทึกรายการหรือเนื้อหาที่ผู้ใช้สนใจ เพื่อกลับมาดูภายหลัง / Bookmark indicates saved content for later access.

| State | Description / คำอธิบาย |
|---|---|
| **Default** | Not bookmarked yet. / สถานะปกติเมื่อยังไม่ได้บันทึกรายการ |
| **Active** | Already bookmarked by the user. / สถานะเมื่อผู้ใช้บันทึกรายการนั้นเรียบร้อยแล้ว |

### Sizes

Card มีทั้งหมด 3 ขนาด ได้แก่ Desktop, Tablet และ Mobile / Card has 3 sizes: Desktop, Tablet, and Mobile.

| Size | Recommended for / แนะนำสำหรับ |
|---|---|
| **Desktop** | Large screens and primary desktop layouts. / หน้าจอขนาดใหญ่และเลย์เอาต์หลักบนเดสก์ท็อป |
| **Tablet** | Medium layouts and tablet contexts. / เลย์เอาต์ขนาดกลางและการใช้งานบนแท็บเล็ต |
| **Mobile** | Small screens and mobile-first layouts. / หน้าจอขนาดเล็กและเลย์เอาต์บนมือถือ |

---

## Checkbox & Radio


Checkbox และ Radio คือองค์ประกอบสำหรับให้ผู้ใช้เลือกตัวเลือกจากรายการ โดย Checkbox ใช้สำหรับเลือกได้มากกว่าหนึ่งตัวเลือก และ Radio ใช้สำหรับเลือกได้เพียงหนึ่งตัวเลือกจากกลุ่มเดียวกัน / Checkbox and Radio are selection controls where Checkbox supports multi-select and Radio supports single-select within one group.

### วิธีการใช้งาน

### ประเภทของ Checkbox & Radio

Checkbox & Radio มี 4 รูปแบบ คือ Label (Text), Label + Description (Text), Label (Button), และ Label + Description (Button)

- **Label (Text)** - รูปแบบที่แสดงเฉพาะข้อความกำกับ ใช้เมื่อความหมายของตัวเลือกชัดเจนและไม่ต้องการคำอธิบายเพิ่มเติม
- **Label + Description (Text)** - รูปแบบที่แสดงข้อความกำกับพร้อมคำอธิบาย ใช้สำหรับอธิบายรายละเอียดของตัวเลือกให้ผู้ใช้เข้าใจมากขึ้น
- **Label (Button)** - รูปแบบที่แสดงตัวเลือกในลักษณะปุ่ม ใช้เมื่อต้องการให้ตัวเลือกเห็นชัดและกดเลือกได้ง่าย
- **Label + Description (Button)** - รูปแบบปุ่มที่มีทั้งข้อความกำกับและคำอธิบาย ใช้สำหรับแสดงรายละเอียดเพิ่มเติมพร้อมการเลือกตัวเลือก

### สถานะของ Checkbox

คือรูปแบบการแสดงผลของ Checkbox ในแต่ละช่วงของการใช้งาน เพื่อบอกผู้ใช้ว่า Checkbox อยู่ในสถานะ "ยังไม่ถูกเลือก", "ถูกเลือกแล้ว", "ถูกเลือกบางส่วน" หรือ "ไม่พร้อมใช้งาน"

| State | Description / คำอธิบาย |
|---|---|
| **Default** | ค่าเริ่มต้น |
| **Selected** | สถานะเมื่อ Checkbox ถูกเลือกแล้ว |
| **Indeterminate** | สถานะกึ่งกลาง แสดงว่ามีการเลือกบางส่วนภายในกลุ่มตัวเลือก |
| **Disabled** | สถานะเมื่อ Checkbox ไม่พร้อมให้ใช้งาน ไม่ว่าจะอยู่ในสถานะ Default, Selected หรือ Indeterminate ผู้ใช้ไม่สามารถโต้ตอบได้ |

### สถานะของ Radio

รูปแบบการแสดงผลของ Radio ในแต่ละช่วงของการใช้งาน เพื่อบอกผู้ใช้ว่า Radio อยู่ในสถานะ "ยังไม่ถูกเลือก", "ถูกเลือกแล้ว" หรือ "ไม่พร้อมใช้งาน"

| State | Description / คำอธิบาย |
|---|---|
| **Default** | ค่าเริ่มต้น |
| **Selected** | สถานะเมื่อถูกเลือกแล้ว |
| **Disabled** | สถานะที่ตัวเลือกไม่พร้อมใช้งาน และผู้ใช้ไม่สามารถเลือกได้ |

### การออกแบบ Component

| Component | Key Dimension |
|---|---|
| **Checkbox** | Icon 16px, Radius 2 |
| **Radio** | Inner dot 5px, Radius 999 |

### Preview

ตัวอย่างการใช้งานจริงสามารถอ้างอิงจากรายการตัวเลือกแบบการ์ดที่มีทั้งสถานะปกติและสถานะถูกเลือก เพื่อให้เห็นการใช้ Checkbox ในบริบทข้อมูลจริง

---

## Toggle

Toggle คือองค์ประกอบที่ใช้สำหรับสลับสถานะระหว่างสองค่า เช่น เปิด–ปิด หรือ ใช้งาน–ไม่ใช้งาน โดยแสดงผลให้ผู้ใช้เห็นสถานะปัจจุบันอย่างชัดเจน / A toggle is used to switch a single on/off (or active/inactive) state so the current value is always visible to the user.

### Types

Toggle มี 3 รูปแบบ คือ **Label**, **Label + Description**, **Label + Description (2line+)** / The toggle supports three text layouts in the library:

| Type | Usage / การใช้งาน |
|---|---|
| **Label** | แสดงเฉพาะชื่อการตั้งค่า ใช้เมื่อความหมายชัดเจนและไม่ต้องการคำอธิบายเพิ่มเติม / Show only a setting name when the meaning is self-explanatory. |
| **Label + Description** | แสดงชื่อพร้อมคำอธิบายสั้น ๆ สำหรับอธิบายหน้าที่หรือผลของการเปิด–ปิด / A short line of supporting copy that explains the effect of turning the setting on or off. |
| **Label + Description (2line+)** | แสดงชื่อพร้อมคำอธิบายหลายบรรทัด สำหรับกรณีที่มีรายละเอียดหรือเงื่อนไขเพิ่มเติม / Use when the help text may wrap to two or more lines. |

In code, pass `label` and/or `description` to `<Toggle>`. Laid-out rows are **text on the left**, **switch on the right**, with **16px** (`gap-4`) between the text block and the control.

### States

รูปแบบการแสดงผลของสวิตช์ในแต่ละช่วงการใช้งาน เพื่อบอกผู้ใช้ว่าฟังก์ชันนั้นอยู่ในสถานะ **เปิด** / **ปิด** หรือ **ไม่พร้อมใช้งาน** / The switch reflects four combinations of **checked** and **disabled**:

| State | Description / คำอธิบาย |
|---|---|
| **Off (default)** | สถานะปิด (เริ่มต้น) ผู้ใช้ยังสามารถสลับเป็น On ได้ / `checked={false}` — user can still turn the setting on. |
| **Off (disabled)** | สถานะปิดและไม่พร้อมให้ใช้งาน ไม่สามารถเปลี่ยนเป็น On ได้ / `checked={false} disabled` — the control cannot be changed. |
| **On (default)** | สถานะเปิด ผู้ใช้ยังสามารถสลับเป็น Off ได้ / `checked={true}` — user can still turn the setting off. |
| **On (disabled)** | สถานะเปิดแต่ล็อกไว้ ไม่สามารถปิดได้ / `checked={true} disabled` — the control cannot be changed. |

Map these to the `checked` and `disabled` props on `<Toggle>` from `@sarunyu/system-one`.

### Sizes

Toggle มีทั้งหมด **2 ขนาด** ได้แก่ **Small** และ **Large** (ในโค้ด: `size="sm"` และ `size="md"`). When `label` or `description` is set, the default size is **`sm`**; standalone toggles default to **`md`**, unless you override with `size`.

| Figma (System One) | `Toggle` `size` | Frame (W×H) |
|---|---|---|
| **Small** | `sm` | 32×20 px |
| **Large** | `md` | 40×24 px |

### การออกแบบ Component (Dimensions)

Track ใช้รูป **pill** (มุมโค้งเต็มระยะ) กับ thumb กลมและเงาแบบที่ design system กำหนด ไม่ควรปรับ offset หรือ shadow นอก token / The pill-shaped track, thumb diameter, and shadow follow built-in tokens; do not detach or reskin the control.

| Size | Track (W×H) | Thumb (diameter) | Inset (approx.) |
|---|---|---|---|
| **Small** | 32×20 | 16 px | 2 px from track edge |
| **Large** | 40×24 | 20 px | 2 px from track edge |

### Preview

**Preview** ใน Figma: แถวการตั้งค่า (เช่นแถบ “แจ้งเตือน”) แสดง **ข้อความด้านซ้าย** และ **`<Toggle />` ชิดขอบขวา** บนพื้นแถวเดียวกับฟอร์ม/การ์ด / In product UI, a common pattern is a full-width row: primary label on the left, toggle aligned to the trailing edge (e.g. notification or privacy switches).

| Example copy (from spec) | Pattern |
|---|---|
| รับการแจ้งเตือนทาง LINE / SMS | One line of copy with **Large** (`size="md"`) toggle, typically inside a 48px-tall settings row. |

```tsx
import { useState } from "react";
import { Toggle } from "@sarunyu/system-one";

export function LineSmsNotifyRow() {
  const [on, setOn] = useState(true);
  return (
    <div className="max-w-md rounded-lg border border-border px-4 py-3">
      <Toggle
        label="รับการแจ้งเตือนทาง LINE / SMS"
        checked={on}
        onChange={setOn}
        size="md"
      />
    </div>
  );
}
```

Place the row in a `max-w-[343px]` (or `max-w-md`) column when you want the same line length as the Figma **User Guide** spec.

---

## Input


Floating Label Input is a single-line or multi-line field with a label that floats inside the input. / Floating Label Input คือช่องกรอกข้อมูลที่มีป้ายกำกับลอยอยู่ด้านใน

### Types

Floating Label Input has 3 types: Input, Text Area, and Dropdown. / Floating Label Input มี 3 รูปแบบ คือ Input, Text Area, Dropdown

| Type | Usage / การใช้งาน |
|---|---|
| **Input** | A single-line field with a floating label; use for general text and numeric input. / ช่องกรอกข้อมูลแบบบรรทัดเดียวที่มีป้ายกำกับลอยอยู่ด้านใน ใช้สำหรับการกรอกข้อมูลทั่วไปในรูปแบบตัวอักษรและตัวเลข |
| **Text Area** | A multi-line field; use when input content is longer than one line, such as comments or addresses. / ช่องกรอกข้อมูลหลายบรรทัด ใช้สำหรับการกรอกข้อมูลที่มีความยาวมากกว่า 1 บรรทัด เช่น Comment, ที่อยู่ |
| **Dropdown** | Used for selecting from a predefined list; displays options as an Option List. / ใช้สำหรับเลือกรายการที่กำหนดไว้ โดยจะแสดงผลในรูปแบบ Option list ให้เลือก |

### States

| State | Description / คำอธิบาย |
|---|---|
| **Default** | The resting state before any interaction. / ค่าเริ่มต้น |
| **Focus** | When the user clicks or selects the input field. / สถานะเมื่อผู้ใช้คลิกหรือเลือกช่องกรอกข้อมูล |
| **Error** | When the entered data is invalid. / สถานะเมื่อข้อมูลที่กรอกไม่ถูกต้อง |
| **Disabled** | When the field is unavailable and cannot be edited. / สถานะเมื่อช่องกรอกข้อมูลไม่พร้อมใช้งาน และไม่สามารถแก้ไขข้อมูลได้ |

---

## Modal & Bottom Sheet


Modal และ Bottom Sheet คือหน้าต่างชั่วคราวที่เปิดขึ้นมาทับหน้าปัจจุบันโดยไม่เปลี่ยนหน้า ใช้สำหรับแจ้งข้อมูลหรือให้ผู้ใช้ตัดสินใจ โดย Modal แสดงกลางหน้าจอและต้องปิดหรือดำเนินการก่อนจึงจะใช้งานต่อได้ ส่วน Bottom Sheet จะเลื่อนขึ้นจากด้านล่างเพื่อแสดงตัวเลือกเพิ่มเติม โดยยังคงเห็นเนื้อหาของหน้าหลักอยู่ / Modal and Bottom Sheet are temporary surfaces shown above the current page without navigation. Modal appears at the center and usually requires user action before continuing, while Bottom Sheet slides up from the bottom to show additional options while preserving context.

### ประเภทของ Modal & Bottom Sheet

Modal และ Bottom Sheet มี 4 รูปแบบ คือ Dialog, Content, Alert, และ Bottom Sheet / There are 4 types: Dialog, Content, Alert, and Bottom Sheet.

| Type | Usage / การใช้งาน |
|---|---|
| **Dialog** | Use for general confirmation flows such as confirm/save/cancel. / ใช้สำหรับข้อมูลทั่วไปหรือการยืนยัน เช่น ยืนยัน, บันทึก, หรือยกเลิก |
| **Content** | Use for richer, more complex content beyond plain text. / ใช้สำหรับแสดงข้อมูลที่มีความซับซ้อนหรือรายละเอียดค่อนข้างมาก (ไม่ใช่แค่ข้อความอย่างเดียว) |
| **Alert** | Use for important warning/success/error notifications. / ใช้สำหรับแจ้งเตือนข้อมูลสำคัญ |
| **Bottom Sheet** | Use for additional actions/options that slide from the bottom of the screen. / ใช้สำหรับแสดงตัวเลือกหรือการทำงานเพิ่มเติม โดยเลื่อนขึ้นจากด้านล่างของหน้าจอ |

> Component นี้รองรับฟีเจอร์ Slots สามารถปรับแต่งคอนเทนต์ได้ (ยกเว้น Alert) / This component supports content slots for customization (except `Alert`).

### สถานะของ Alert

คือรูปแบบการแสดงผลของ Alert ในแต่ละช่วงของการใช้งาน เพื่อบอกผู้ใช้ว่า Alert อยู่ในสถานะ “ควรระวัง”, “สำเร็จ”, หรือ “ข้อผิดพลาด” / Alert states communicate whether the message is warning, success, or danger.

| State | Description / คำอธิบาย |
|---|---|
| **Warning** | Use to warn users about conditions that require caution. / ใช้แจ้งเตือนสิ่งที่ผู้ใช้ควรระวัง หรือสถานการณ์ที่อาจส่งผลต่อการใช้งาน |
| **Success** | Use to indicate a completed/successful action. / ใช้แจ้งว่าการดำเนินการเสร็จสมบูรณ์หรือสำเร็จเรียบร้อย |
| **Danger** | Use to indicate critical errors that should be acknowledged or fixed immediately. / ใช้แจ้งข้อผิดพลาดหรือสถานการณ์ร้ายแรงที่อาจส่งผลต่อข้อมูลหรือการทำงาน และควรให้ผู้ใช้แก้ไขหรือรับทราบทันที |

### การออกแบบ Component

การออกแบบจะอิงตามกลุ่มการใช้งานหลัก:
- **Dialog & Content** — โครงสร้างหลักคือ Header + Body (+ Actions ตามบริบท)
- **Alert** — เน้นสถานะและการสื่อสารที่ชัดเจน (Warning / Success / Danger)
- **Bottom Sheet** — Header Bottom Sheet + Content area + Action area ที่ยึดตำแหน่งด้านล่าง

### Preview

ตัวอย่างการใช้งานควรครอบคลุม:
- หน้าต่างแบบ **Dialog**
- หน้าต่างแบบ **Content**
- หน้าต่างแบบ **Alert** ทั้ง 3 สถานะ
- **Bottom Sheet** ที่แสดงจากด้านล่างของหน้าจอ

---

## Toast & Alert

Message components ใช้เพื่อสื่อสารผลลัพธ์หรือสถานะของระบบให้ผู้ใช้รับรู้แบบรวดเร็ว โดยในระบบนี้แบ่งเป็น **Toast** (ข้อความแจ้งเตือนแบบชั่วคราว) และ **Alert** (ข้อความแจ้งเตือนแบบแสดงค้างในตำแหน่งที่เกี่ยวข้องกับเนื้อหา)

### เลือกใช้เมื่อไร (When to use)

| Component | Usage / การใช้งาน |
|---|---|
| **Toast** | Use for temporary feedback after an action (save success, warning, error). Usually appears in a floating layer and can be dismissed. / ใช้สำหรับ feedback ชั่วคราวหลังผู้ใช้ทำ action เช่น บันทึกสำเร็จ แจ้งเตือน หรือผิดพลาด โดยมักแสดงแบบลอยและปิดได้ |
| **Alert** | Use for inline, persistent messages inside normal page layout (form/section context). It does not auto-dismiss. / ใช้สำหรับข้อความ inline ที่แสดงค้างใน flow ปกติของหน้า เช่น ใน form หรือ section และไม่หายเอง |

### Toast

Toast รองรับ 2 variants:
- **Default** — กล่องแจ้งเตือนพร้อมไอคอน และรองรับ `actionLabel` + ปุ่มปิด
- **Broadcast** — แถบข้อความแจ้งเตือนระดับหน้า (ใช้ประกาศ/แจ้งให้เห็นชัด)

#### Toast Status

| Status | Description / คำอธิบาย |
|---|---|
| **information** | General informational feedback. / ข้อความแจ้งข้อมูลทั่วไป |
| **success** | Action completed successfully. / การทำงานสำเร็จ |
| **warning** | Cautionary message. / ข้อความเตือนที่ควรระวัง |
| **critical** | Critical failure or blocking issue. / ข้อผิดพลาดสำคัญที่ควรรับทราบทันที |

#### Toast Props (หลัก ๆ)

- `variant`: `"default" | "broadcast"`
- `status`: `"information" | "success" | "warning" | "critical"`
- `message`: ข้อความที่ต้องการแสดง
- `multiline`: แสดงหลายบรรทัด
- `actionLabel`, `onActionClick`: ปุ่ม action (ใช้กับ `default`)
- `onClose`: callback เมื่อกดปิด

```tsx
import { Toast } from "@sarunyu/system-one";

export function ToastExample() {
  return (
    <Toast
      variant="default"
      status="success"
      message="บันทึกข้อมูลสำเร็จ"
      actionLabel="ดูรายละเอียด"
      onActionClick={() => {}}
      onClose={() => {}}
    />
  );
}
```

### Alert (Inline Message)

Alert ใช้สำหรับสื่อสารในบริบทของเนื้อหา เช่น ใต้ฟอร์ม, ใน card section, หรือใต้ field ที่เกี่ยวข้อง โดย **ไม่ auto-dismiss** และคงอยู่จนกว่าจะเปลี่ยน state ของหน้าหรือผู้ใช้ดำเนินการต่อ

#### Alert Status

| Status | Description / คำอธิบาย |
|---|---|
| **normal** | Neutral message in section flow. / ข้อความทั่วไปแบบเป็นกลาง |
| **information** | Informational guidance. / ข้อความให้ข้อมูลหรือคำแนะนำ |
| **success** | Successful state. / สถานะสำเร็จ |
| **warning** | Cautionary state. / สถานะเตือน |
| **critical** | Critical error state. / สถานะข้อผิดพลาดสำคัญ |

#### Alert Props (หลัก ๆ)

- `status`: `"normal" | "information" | "success" | "warning" | "critical"`
- `message`: ข้อความที่ต้องการแสดง
- `multiline`: รองรับข้อความ 2 บรรทัดขึ้นไป

```tsx
import { Alert } from "@sarunyu/system-one";

export function AlertExample() {
  return (
    <div className="space-y-3">
      <Alert status="information" message="กรุณาตรวจสอบข้อมูลก่อนยืนยัน" />
      <Alert
        status="warning"
        multiline
        message="บัญชีนี้ยังไม่ได้ยืนยันอีเมล หากยังไม่ยืนยันภายในเวลาที่กำหนด จะไม่สามารถแก้ไขข้อมูลบางส่วนได้"
      />
    </div>
  );
}
```

### Practical Guidance

- ใช้ **Toast** เมื่อไม่ต้องการขัด flow หลักของหน้า และข้อมูลไม่จำเป็นต้องค้างนาน
- ใช้ **Alert** เมื่อข้อความสัมพันธ์กับตำแหน่งในเนื้อหา และผู้ใช้ต้องเห็นต่อเนื่องระหว่างกรอก/ตรวจสอบข้อมูล
- หลีกเลี่ยงการแสดง Toast ซ้อนหลายรายการพร้อมกันโดยไม่จัดลำดับความสำคัญ
- หลีกเลี่ยงใช้ Alert แทน validation message ราย field หากมีข้อความ error เฉพาะช่องอยู่แล้ว

---

## Table

Table is used to display structured data in rows and columns for easy comparison and scanning. / Table ใช้สำหรับแสดงข้อมูลแบบตาราง (แถวและคอลัมน์) เพื่อให้ผู้ใช้เปรียบเทียบและอ่านข้อมูลได้ง่าย

### วิธีการใช้งาน

Table ประกอบด้วย 3 ส่วนหลัก ได้แก่ Header, Cell และ Fixed column

- **Header** — ใช้กำหนดหัวคอลัมน์ของข้อมูล และรองรับการ sort ตามบริบท
- **Cell** — ใช้แสดงข้อมูลแต่ละแถว รองรับหลายรูปแบบ เช่น text, text+icon, text+image, tag, button, checkbox
- **Fixed column** — ใช้ตรึงคอลัมน์ที่สำคัญ (เช่น checkbox หรือข้อมูลอ้างอิงหลัก) เมื่อตารางมีการเลื่อนแนวนอน

### สถานะของ Table

| State | Description / คำอธิบาย |
|---|---|
| **Default** | Base state when there is no interaction. / สถานะปกติเมื่อยังไม่มีการโต้ตอบ |
| **Hover** | Appears when a user hovers a row/header to aid focus and scanability. / สถานะเมื่อผู้ใช้ชี้เมาส์บนแถวหรือหัวตารางเพื่อช่วยโฟกัส |
| **Selected** | Used when a row is selected (commonly via checkbox) and must be visually highlighted. / สถานะเมื่อแถวถูกเลือก (มักเกิดจาก checkbox) และต้องแสดงให้เห็นชัด |
| **Disabled** | Non-interactive state for rows/cells/headers that should not be changed. / สถานะที่ไม่พร้อมใช้งานและไม่สามารถโต้ตอบได้ |
| **Sorted** | Indicates active sort direction on the current sortable column. / สถานะของคอลัมน์ที่ถูกจัดเรียงข้อมูลอยู่ (asc/desc) |
| **Fixed** | Sticky column state used in horizontally scrollable tables, with edge shadow only when overflow exists. / สถานะคอลัมน์แบบตรึง (sticky) สำหรับตารางที่เลื่อนแนวนอน และแสดงเงาเมื่อมีข้อมูลล้นเท่านั้น |

### การออกแบบ Component

| Component | Key Dimension |
|---|---|
| **Header & Cell Height** | Large = 48px header, 48/56px cell depending on content density |
| **Text Column Width** | Default text column = 284px |
| **Icon / Check Column Width** | Compact column = 56px |
| **Typography** | Header/Cell uses Noto Sans Thai Body2 (14/20), with bold variants where required |
| **Container Shadow (Usage block)** | `0 0 2px rgba(102,102,102,0.16), 0 4px 8px rgba(102,102,102,0.12)` |

### Preview

ตัวอย่างการใช้งานควรครอบคลุม:
- แถวที่มี checkbox พร้อม select-all ที่ header (รองรับ indeterminate)
- การ sort แบบ `none → asc → desc → none`
- การ hover และ selected row ทั้งแถว
- ตารางที่มี fixed column พร้อม shadow เฉพาะตอนมี overflow

---

## Tab

Tabs are navigation elements that allow users to switch between different content sections within the same page. / Tab เป็นองค์ประกอบนำทางที่ให้ผู้ใช้สลับระหว่างเนื้อหาต่างๆ ภายในหน้าเดียวกัน

### Types

| Type | Usage / การใช้งาน |
|---|---|
| **Default** | A standard tab with a text label only. / แท็บมาตรฐานที่แสดงเฉพาะข้อความ |
| **Icon** | A tab with an icon alongside the label; helps communicate the content category more quickly. / แท็บที่แสดงไอคอนร่วมกับข้อความ ใช้เพื่อช่วยสื่อความหมายของเนื้อหาให้เข้าใจได้รวดเร็วขึ้น |
| **Notification** | A tab with a badge indicator; use to signal that new data or items are available within that tab. / แท็บที่แสดงข้อความพร้อมตัวแจ้งเตือน ใช้สำหรับบอกว่ามีข้อมูลหรือรายการใหม่ภายในแท็บนั้น |

### States

| State | Description / คำอธิบาย |
|---|---|
| **Default** | The resting state before any interaction. / ค่าเริ่มต้น |
| **Active** | The tab is currently selected and its related content is being displayed. / สถานะเมื่อแท็บถูกเลือกอยู่ และกำลังแสดงเนื้อหาที่เกี่ยวข้อง |
| **Disabled** | The tab is not available for interaction. / สถานะเมื่อแท็บไม่สามารถใช้งานได้ |

### Sizes

Tab has 3 sizes: Large, Medium, and Small. / Tab มีทั้งหมด 3 ขนาด ได้แก่ Large, Medium และ Small

| Size | Recommended for / แนะนำสำหรับ |
|---|---|
| **Large** | Default size; use as the standard across most contexts. / ขนาดมาตรฐาน ใช้เป็นค่าเริ่มต้นในส่วนใหญ่ |
| **Medium** | Use when space is limited or within compact layouts. / ใช้เมื่อพื้นที่จำกัด หรือใน layout ที่กระชับ |
| **Small** | Use in highly compact contexts where minimal space is available. / ใช้ในบริบทที่พื้นที่น้อยมาก |

---

## Tag

Tags are labels used to display categories, types, or short metadata. Status Tags communicate the current state or progress of a process. / Tag เป็นป้ายกำกับสำหรับแสดงประเภท หมวดหมู่ หรือข้อมูลสั้นๆ ส่วน Status Tag ใช้แสดงสถานะหรือความคืบหน้าของข้อมูล

### Tag Types

| Type | Usage / การใช้งาน |
|---|---|
| **Default** | A text-only tag; use to display categories, types, or short information. / Tag แบบข้อความ ใช้สำหรับแสดงประเภท, หมวดหมู่ หรือข้อมูลสั้นๆ |
| **Icon** | A tag with an icon alongside the label; use when additional meaning or status needs to be communicated quickly. / Tag ที่มีไอคอนแสดงร่วมกับข้อความ ใช้เมื่อต้องการสื่อความหมายหรือสถานะเพิ่มเติมให้เข้าใจได้รวดเร็ว |
| **Remove** | A tag that can be dismissed by the user; use for filters or selected items that can be removed. / Tag ที่สามารถลบออกได้ ใช้สำหรับกรณีที่ผู้ใช้สามารถนำ Tag ออกได้ เช่น ตัวกรองหรือรายการที่ถูกเลือก |

### Tag States

| State | Description / คำอธิบาย |
|---|---|
| **Default** | The resting state before any interaction. / ค่าเริ่มต้น |
| **Hover / Press** | When the user hovers or presses the tag to indicate it is interactive. / สถานะเมื่อผู้ใช้ชี้เมาส์หรือกดที่ Tag เพื่อแสดงว่าสามารถโต้ตอบหรือดำเนินการได้ |
| **Disabled** | The tag is not available for interaction. / สถานะไม่พร้อมใช้งาน |

### Tag Sizes

Tag has 2 sizes: Small and Large. / Tag มีทั้งหมด 2 ขนาด ได้แก่ Small และ Large

### Status Tag

Status Tag has one style: Default. Use it to clearly communicate the current state or progress of data to the user. / Status Tag มีรูปแบบเดียว คือ Default ใช้สำหรับแสดงสถานะของข้อมูลเพื่อให้ผู้ใช้ทราบความคืบหน้าหรือสถานะปัจจุบันอย่างชัดเจน

| Variant | Usage / การใช้งาน |
|---|---|
| **Success** | The process completed successfully. / ใช้แสดงว่ากระบวนการเสร็จสมบูรณ์เรียบร้อยแล้ว |
| **Processing** | The process is currently in progress. / ใช้แสดงว่ากระบวนการกำลังดำเนินอยู่ |
| **Hold** | The process is temporarily paused and waiting to resume. / ใช้แสดงว่ากระบวนการถูกพักไว้ชั่วคราว และรอการดำเนินการต่อ |
| **Stop** | The process has been stopped and will not continue. / ใช้แสดงว่ากระบวนการถูกหยุด และไม่ดำเนินการต่อ |
| **Error** | The process encountered an error and cannot continue. / ใช้แสดงว่ากระบวนการเกิดข้อผิดพลาด และไม่สามารถดำเนินการต่อได้ |

---

## Chip

Chips are compact interactive elements used for filtering or selecting options from a group. / Chip เป็นองค์ประกอบขนาดเล็กที่ใช้สำหรับกรองข้อมูลหรือเลือกตัวเลือกจากกลุ่ม

### Types

Chip has 2 types: Single Select and Multiple Select. / Chip มี 2 รูปแบบ คือ Single Select และ Multiple Select

| Type | Usage / การใช้งาน |
|---|---|
| **Single Select** | Allows the user to select only one option at a time. / ใช้สำหรับการเลือกได้เพียงหนึ่งตัวเลือก ในกรณีที่ต้องการเลือกรายการเดียว |
| **Multiple Select** | Allows the user to select more than one option simultaneously. / ใช้สำหรับให้ผู้ใช้เลือกได้มากกว่าหนึ่งรายการพร้อมกัน ในกรณีที่ต้องการเลือกหลายรายการ |

### States

| State | Description / คำอธิบาย |
|---|---|
| **Default** | The resting state before any interaction. / ค่าเริ่มต้น |
| **Active** | The chip is currently selected. / สถานะเมื่อ Chip ถูกเลือกอยู่ |
| **Disabled (Default)** | The chip is unavailable and has not been selected. / สถานะที่ไม่พร้อมใช้งานและยังไม่ได้ถูกเลือก |
| **Disabled (Active)** | The chip is already selected but cannot be changed or interacted with. / สถานะที่ถูกเลือกไว้แล้วแต่ไม่สามารถโต้ตอบหรือเปลี่ยนแปลงได้ |

### Sizes

Chip has 3 sizes: Small, Medium, and Large. / Chip มีทั้งหมด 3 ขนาด ได้แก่ Small, Medium และ Large

---

## Avatar

Avatar คือภาพหรือสัญลักษณ์แทนผู้ใช้ในรูปโปรไฟล์ เพื่อแสดงตัวตนและสถานะของผู้ใช้งานในระบบ เช่น รูปโปรไฟล์ ตัวอักษรย่อ หรือไอคอนแทนบุคคล / Avatar is a visual representation of a user — such as a profile photo, initials, or a generic icon — used to identify users and show their presence in the system.

### ประเภทของ Avatar

Avatar มี 4 รูปแบบ คือ Photo, Placeholder, Text, และ Avatar-Stack

| Type | Usage / การใช้งาน |
|---|---|
| **Photo** | Avatar ที่แสดงเป็นรูปภาพผู้ใช้ ใช้สำหรับแสดงตัวตนของผู้ใช้งานอย่างชัดเจน เช่น รูปโปรไฟล์ / Displays the user's actual profile photo for clear identity. |
| **Placeholder** | Avatar สำรองสำหรับกรณีที่ยังไม่มีข้อมูลผู้ใช้หรือยังไม่สามารถโหลดรูปภาพได้ในระบบ / A fallback silhouette used when no photo is available or the image fails to load. |
| **Text** | Avatar ที่แสดงอักษรย่อของชื่อผู้ใช้ ใช้เมื่อไม่มีข้อมูลรูปภาพ ไว้สำหรับระบุตัวตน / Displays up to 2 initials on a gradient background when no photo is provided. |
| **Avatar-Stack** | การแสดง Avatar หลายรายการร่วมกัน ใช้สำหรับแสดงกลุ่มผู้ใช้งานที่เกี่ยวข้องกัน / Overlapping row of avatars used to represent a group of related users. |

### ขนาดของ Avatar

Avatar มีขนาดทั้งหมด 7 ขนาด ได้แก่ xxs, xs, s, m, l, xl, และ xxl

| Size | Dimension |
|---|---|
| **xxs** | 16 px |
| **xs** | 20 px |
| **s** | 24 px |
| **m** | 32 px |
| **l** | 40 px |
| **xl** | 48 px |
| **xxl** | 56 px |

### ขนาดของ Avatar-Stack

Avatar-Stack มีขนาดทั้งหมด 3 ขนาด ได้แก่ small, medium, และ large

| Size | Avatar size | Avatar dimension |
|---|---|---|
| **small** | xxs | 16 px |
| **medium** | xs | 20 px |
| **large** | s | 24 px |

### สถานะของ Avatar

คือรูปแบบการแสดงผลของรูปภาพที่กำหนดไว้แต่ละส่วนของการทำงาน เพื่อบอกผู้ใช้ว่าสถานะ "พร้อมใช้งาน" หรือ "กำลังใช้งานอยู่" / States indicate whether a user is idle or currently active in the system.

| State | Description / คำอธิบาย |
|---|---|
| **Default** | สถานะที่แสดง Avatar ไว้สำหรับระบุตัวตนทั่วไป โดยไม่มีการบอกสถานะการใช้งานเพิ่มเติม / The base state — identifies the user without indicating any presence. |
| **Active** | สถานะที่แสดงว่า Avatar กำลังใช้งานหรือผู้ใช้งานอยู่บนระบบ โดยจะแสดงสัญลักษณ์สถานะเพิ่มเพื่อให้ผู้รับรู้ / A green dot indicator shown on the avatar when the user is online or active. Available on `photo` type only via the `status` prop. |

### การออกแบบ Component

| Component | Key Dimension |
|---|---|
| **Avatar xxs** | 16 × 16 px |
| **Avatar xs** | 20 × 20 px |
| **Avatar s** | 24 × 24 px |
| **Avatar m** | 32 × 32 px |
| **Avatar l** | 40 × 40 px |
| **Avatar xl** | 48 × 48 px |
| **Avatar xxl** | 56 × 56 px |
| **Avatar-Stack small** | 16 px avatars, 4 px overlap |
| **Avatar-Stack medium** | 20 px avatars, 5 px overlap |
| **Avatar-Stack large** | 24 px avatars, 5 px overlap |

---

## Breadcrumb

Breadcrumb คือองค์ประกอบนำทางที่แสดงลำดับตำแหน่งปัจจุบันภายในโครงสร้างของเว็บไซต์หรือแอปพลิเคชัน เพื่อช่วยให้ผู้ใช้รู้ว่ากำลังอยู่ส่วนใด และสามารถย้อนกลับไปยังหน้าก่อนหน้าได้ง่ายขึ้น / Breadcrumb is a navigation component that shows the user's current position within the site or application hierarchy, making it easy to understand context and navigate back to a previous page.

### วิธีการใช้งาน

ใช้สำหรับแสดงเส้นทางการนำทางของหน้า เพื่อบอกผู้ใช้ว่ากำลังอยู่ที่แห่งใดในระบบ และสามารถย้อนกลับไปยังหน้าก่อนหน้าในเส้นทางนั้นได้ / Use to show the navigation path so users know where they are in the system and can return to any previous level.

> **หมายเหตุ** ข้อความลำดับสุดท้ายจะแสดงเป็นสถานะหน้าปัจจุบัน และไม่สามารถคลิกได้ / The last item always represents the current page and is non-clickable.

### Depth

Breadcrumb รองรับความลึกได้ไม่จำกัด แต่แนะนำให้ใช้ไม่เกิน 5 ระดับ เพื่อไม่ให้เส้นทางยาวเกินไป / Supports any depth but 5 levels is the recommended maximum to keep the trail readable.

| Depth | Example |
|---|---|
| 1 | หน้าหลัก / Page1 |
| 2 | หน้าหลัก / Page1 / Page2 |
| 3 | หน้าหลัก / Page1 / Page2 / Page3 |
| 4 | หน้าหลัก / Page1 / Page2 / Page3 / Page4 |
| 5 | หน้าหลัก / Page1 / Page2 / Page3 / Page4 / Page5 |

### การออกแบบ Component

| Property | Value |
|---|---|
| **Gap between items** | 4 px |
| **Separator** | `/` (text, decorative — `aria-hidden`) |
| **Ancestor items** | `text-text-default-secondary`; clickable when `href` is provided |
| **Current page (last item)** | `text-text-brand-secondary`; never clickable |

### Preview

ตัวอย่างการใช้งานจริงแสดง Breadcrumb อยู่ในหน้าบทความ โดยมีเส้นทาง หน้าหลัก / ข่าวสารทั้งหมด / ชื่อบทความ (สีแบรนด์) ซึ่งช่วยให้ผู้ใช้ย้อนกลับไปยังรายการข่าวได้ทันที

---

## Pagination

Pagination คือองค์ประกอบที่ใช้สำหรับแบ่งข้อมูลออกเป็นหลายหน้า เพื่อช่วยให้ผู้ใช้ดูและนำทางข้อมูลจำนวนมากได้ง่ายขึ้น โดยสามารถเลือกเปลี่ยนหน้าไปมาได้ทีละหน้า / Pagination is a component used to split data across multiple pages, helping users navigate large amounts of content by moving between pages one at a time.

### ประเภทของ Pagination

Pagination มี 3 รูปแบบ คือ Banner Slide, Carousel Free Scroll, และ Pagination / Pagination has 3 variants: Banner Slide, Carousel Free Scroll, and Pagination.

| Variant | Usage / การใช้งาน |
|---|---|
| **Banner Slide** | รูปแบบตัวบอกตำแหน่งสไลด์สำหรับแบนเนอร์ ใช้สำหรับแสดงลำดับของสไลด์และบอกผู้ใช้ว่ากำลังดูสไลด์ใดอยู่ / Dot-style slide indicator for banner carousels. The active slide renders as a wider pill; inactive slides render as small circles. |
| **Carousel Free Scroll** | รูปแบบตัวบอกตำแหน่งสำหรับคอนเทนต์ที่เลื่อนแบบอิสระ ใช้สำหรับแสดงตำแหน่งการเลื่อนโดยรวมของรายการ / Scrollbar-style indicator for free-scroll carousels. A thin track where the filled portion reflects the current scroll position. |
| **Pagination** | รูปแบบการแบ่งข้อมูลออกเป็นหลายหน้า ใช้สำหรับรายการหรือข้อมูลจำนวนมาก เพื่อให้ผู้ใช้สามารถเปลี่ยนหน้าและดูข้อมูลได้เป็นส่วนๆ / Numbered pagination control for large lists. Supports prev/next arrows and smart ellipsis collapsing for large page counts. |

### การออกแบบ Component

| Component | Key Dimension |
|---|---|
| **Banner Slide — active pill** | width 32 px, height 6 px, radius 12 px |
| **Banner Slide — inactive dot** | 6 × 6 px, radius 12 px |
| **Banner Slide — gap** | 4 px between items |
| **Carousel Free Scroll — track** | height 6 px, radius 999 (fully rounded), 10 px padding on each side |
| **Carousel Free Scroll — fill** | height 6 px, radius 12 px, width proportional to scroll progress |
| **Pagination — cell** | width 39 px, height 32 px |
| **Pagination — cell padding** | 16 px horizontal / 4 px vertical (page numbers), 8 px vertical (arrows) |
| **Pagination — border radius** | 8 px (outer container) |
| **Pagination — active page** | `bg-bg-brand-primary` (blue) + `text-text-default-white` + `font-bold` |
| **Pagination — inactive page** | `bg-bg-default-primary` (white) + `text-text-default-primary` + `font-normal` |

### API

#### `PaginationBanner`

| Prop | Type | Default | Description |
|---|---|---|---|
| `count` | `number` | — | Total number of slides |
| `activeIndex` | `number` | — | Zero-based index of the active slide |
| `onIndexChange` | `(index: number) => void` | — | Called when the user clicks a dot |
| `className` | `string` | — | Additional class names |

```tsx
<PaginationBanner count={3} activeIndex={0} onIndexChange={setIndex} />
```

#### `PaginationCarousel`

| Prop | Type | Default | Description |
|---|---|---|---|
| `progress` | `number` | — | Scroll progress from `0` (start) to `1` (end) |
| `trackWidth` | `number` | `40` | Width of the track in pixels |
| `className` | `string` | — | Additional class names |

```tsx
<PaginationCarousel progress={0.5} trackWidth={40} />
```

#### `Pagination`

| Prop | Type | Default | Description |
|---|---|---|---|
| `totalPages` | `number` | — | Total number of pages |
| `currentPage` | `number` | — | Currently active page (1-based) |
| `onPageChange` | `(page: number) => void` | — | Called when the user selects a page |
| `className` | `string` | — | Additional class names |

```tsx
<Pagination totalPages={10} currentPage={3} onPageChange={setPage} />
// renders: < 1 2 [3] ... 10 >
```

### Preview

ตัวอย่างการใช้งานจริงแสดง Pagination (Default) อยู่ในหน้ารายการข่าวสาร โดยมีเลขหน้าปัจจุบันไฮไลต์ด้วยพื้นหลังสีน้ำเงิน เพื่อให้ผู้ใช้ทราบตำแหน่งปัจจุบันและสามารถเปลี่ยนหน้าได้ทันที / In a news list page, the current page is highlighted with a blue background so users always know where they are and can jump to any page instantly.

---

## Tooltip


Tooltip คือองค์ประกอบที่แสดงข้อมูลเพิ่มเติมในลักษณะข้อความสั้นหรือเนื้อหาประกอบ เมื่อผู้ใช้ชี้เมาส์ กด หรือโฟกัสที่องค์ประกอบ เพื่อช่วยอธิบายความหมายหรือการใช้งานโดยไม่รบกวนหน้าหลัก / Tooltip is a component that displays additional information as a short label or supplemental content when the user hovers, taps, or focuses on an element — explaining its meaning or usage without disrupting the main page.

### วิธีการใช้งาน

#### 1. Tooltip สำหรับการใช้งานทั่วไป

มี 2 รูปแบบ คือ Direction และ Arrow / Controlled by two props: `side` (direction) and `align` (arrow position).

- **Direction (`side`)** — ใช้เลือกทิศทางของหัวลูกศร เพื่อชี้ไปยัง Content ที่ต้องการเพิ่มคำอธิบาย / Controls which side of the trigger the tooltip appears on: `top`, `bottom`, `left`, or `right`.
- **Arrow (`align`)** — ใช้ปรับตำแหน่งลูกศร (start–center–end) ของ Tooltip ด้านนั้นๆ เพื่อรองรับการวางได้หลากหลายขึ้น / Adjusts where the arrow sits along the tooltip's edge: `start`, `center`, or `end`.

> Component นี้รองรับฟีเจอร์ Slots สามารถปรับแต่งคอนเทนต์ได้ / This component supports content Slots for customization.

#### 2. Tooltip สำหรับการใช้งานแบบ Coach marks

รูปแบบหนึ่งของการแนะนำผู้ใช้งาน ในหน้าจอ Interface โดยมักจะปรากฏเป็นเลเยอร์โปร่งใสซ้อนทับหน้าจอปกติ (Overlay) เพื่อชี้เป้าหรืออธิบายการทำงานของปุ่มและฟีเจอร์สำคัญต่างๆ / A user-onboarding pattern where a semi-transparent overlay covers the screen and a rich tooltip (Tooltip-Rich) highlights and explains key buttons or features.

> Component นี้รองรับฟีเจอร์ Slots สามารถปรับแต่งคอนเทนต์ได้ / This component supports content Slots for customization.

### ประเภทของ Tooltip

| Type | Usage / การใช้งาน |
|---|---|
| **Tooltip** | Tooltip พื้นฐานแสดงข้อความสั้น ๆ ใช้สำหรับอธิบายความหมายหรือชื่อขององค์ประกอบ / A short text label that explains the meaning or name of a UI element. |
| **Tooltip-Rich** | Tooltip ที่รองรับเนื้อหายาวและลิงก์ Action ใช้เมื่อต้องการอธิบายรายละเอียดเพิ่มเติมหรือมี action ให้ผู้ใช้กด / Supports longer body text plus one or more action links; use when extra detail or a follow-up action is needed. |
| **Tooltip-Image** | Tooltip ที่แสดงเนื้อหาเป็นรูปภาพหรือ QR code ใช้สำหรับ กรณีที่ต้องการแสดง visual content ภายใน Tooltip / Displays image or QR-code content inside the bubble; use when a visual asset is required (e.g., download QR). |

### การออกแบบ Component

| Component | Padding | Border Radius | Notes |
|---|---|---|---|
| **Tooltip** | 8 px (all sides) | 4 px (R4) | Dark surface (`bg-bg-default-dark`), white text, `text-sm leading-normal` |
| **Tooltip-Rich** | 8 px (all sides) | 8 px (R8) | Body text + action row (gap 6 px between content blocks) |
| **Tooltip-Image** | Top 24 px · Left/Right 32 px · Bottom 16 px | 8 px (R8) | QR or image area uses R16 inner rounding; arrow (beak) section is 8 px |

#### Arrow (beak)

| Property | Value |
|---|---|
| **Width** | 8 px |
| **Height** | 4 px |
| **Fill color** | `var(--bg-default-dark)` |

### API (props)

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | — | Trigger element (the element hovered/focused to show the tooltip) |
| `content` | `ReactNode` | — | Content rendered inside the tooltip bubble |
| `side` | `"top" \| "bottom" \| "left" \| "right"` | `"top"` | Which side of the trigger the tooltip appears on |
| `align` | `"start" \| "center" \| "end"` | `"center"` | Arrow alignment along the tooltip edge |
| `delayDuration` | `number` | `300` | Delay in ms before the tooltip appears on hover |
| `sideOffset` | `number` | `6` | Gap in px between the trigger and the tooltip bubble |

```tsx
import { Tooltip } from "@sarunyu/system-one";

export function Example() {
  return (
    <Tooltip content="คะแนนที่ใช้ได้ในระบบสะสมแต้ม" side="top" align="center">
      <button className="rounded-full bg-bg-brand p-2 text-text-default-white">
        ?
      </button>
    </Tooltip>
  );
}
```

### Preview

ตัวอย่างการใช้งานจริงแสดง Tooltip อยู่ในหน้ากระเป๋าคะแนน (Reward Credits) โดย Tooltip ชี้ขึ้นจากปุ่มข้อมูลเพื่ออธิบายความหมายของ "คิดเป็น Points ที่ 10%" ทำให้ผู้ใช้เข้าใจโดยไม่ต้องออกจากหน้าปัจจุบัน / In the Reward Credits screen, a top-aligned Tooltip appears above the info icon next to "คิดเป็น Points ที่ 10%", giving users instant context without navigating away.

---

## Popover


Popover คือแผงลอยที่เปิดขึ้นเมื่อผู้ใช้คลิกที่ Trigger Element เพื่อแสดงเนื้อหาเพิ่มเติมในรูปแบบที่ซับซ้อนกว่า Tooltip เช่น เมนู, ฟอร์ม, หรือรายละเอียดข้อมูล / Popover is a floating panel that opens on click to display richer content than a Tooltip — such as menus, forms, or detailed information.

### วิธีการใช้งาน

ใช้ `children` เป็น Trigger Element และ `content` เป็นเนื้อหาที่แสดงภายใน Popover / Pass `children` as the trigger and `content` as the panel body.

### ประเภทของ Popover

| Type | Usage / การใช้งาน |
|---|---|
| **Uncontrolled** | ใช้เมื่อต้องการให้ Popover จัดการสถานะเปิด/ปิดเอง / Let the component manage open state internally — no `open` or `onOpenChange` props needed. |
| **Controlled** | ใช้เมื่อต้องการควบคุมสถานะ Popover จากภายนอก / Pass `open` and `onOpenChange` to drive the state externally (e.g. open via a separate button). |

### การออกแบบ Component

| Property | Value |
|---|---|
| **Background** | `bg-popover` (white surface) |
| **Border** | `border border-border` |
| **Border Radius** | `rounded-lg` (8px) |
| **Padding** | `p-3` (12px) |
| **Elevation** | `shadow-popover` |
| **z-index** | `50` |

### API (props)

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | — | Trigger element (the element clicked to open the popover) |
| `content` | `ReactNode` | — | Content rendered inside the popover bubble |
| `side` | `"top" \| "bottom" \| "left" \| "right"` | `"bottom"` | Which side of the trigger the popover appears on |
| `align` | `"start" \| "center" \| "end"` | `"start"` | Alignment of the popover relative to the trigger edge |
| `sideOffset` | `number` | `4` | Gap in px between the trigger and the popover bubble |
| `open` | `boolean` | — | Controlled open state |
| `onOpenChange` | `(open: boolean) => void` | — | Callback when the open state changes |
| `className` | `string` | — | Extra classes applied to the popover content bubble |

```tsx
import { Popover, Button, OptionList } from "@sarunyu/system-one";
import { useState } from "react";

export function Example() {
  const [action, setAction] = useState("");
  return (
    <Popover
      content={
        <OptionList
          options={[
            { label: "แก้ไข", value: "edit" },
            { label: "ลบ", value: "delete" },
          ]}
          selectedValue={action}
          onSelect={setAction}
        />
      }
    >
      <Button variant="outline" size="md">เปิดเมนู</Button>
    </Popover>
  );
}
```

### Preview

ตัวอย่างการใช้งานทั่วไปของ Popover ได้แก่ เมนูตัวเลือกเพิ่มเติม (More options), ปุ่มข้อมูลรายละเอียด, และ Dropdown ที่มีเนื้อหาซับซ้อน / Common uses include action menus (more-options), info panels, and rich dropdowns with complex content.

---

## Slider


Slider คือองค์ประกอบของส่วนติดต่อผู้ใช้ที่ใช้สำหรับเลือกหรือปรับค่าภายในช่วงที่กำหนด โดยผู้ใช้สามารถเลื่อนแถบเพื่อกำหนดค่าได้ / Slider is a UI component for selecting or adjusting a value within a defined range by dragging a thumb along a track.

### วิธีการใช้งาน

#### ประเภทของ Slider

Slider มี 4 รูปแบบ คือ Single (Free Slide), Single (Fixed Slide), Range (Free Slide), และ Range (Fixed Slide)

- **Single (Free Slide)** — Slider แบบเลือกค่าเดียว ใช้สำหรับปรับค่าได้อย่างอิสระภายในช่วงที่กำหนด โดยไม่จำกัดขั้นของค่า / Single-thumb slider with continuous, unrestricted value selection within the defined range.
- **Single (Fixed Slide)** — Slider แบบเลือกค่าเดียว ใช้สำหรับปรับค่าเป็นขั้นหรือค่าที่กำหนดไว้ เช่น เพิ่ม–ลดทีละระดับ / Single-thumb slider that snaps to predefined step positions; use with `showSteps` to display the step labels.
- **Range (Free Slide)** — Slider แบบกำหนดช่วงค่า ใช้สำหรับกำหนดค่าตั้งแต่–ถึง โดยสามารถปรับช่วงได้อย่างอิสระภายในช่วงที่กำหนด / Two-thumb range slider with continuous, free-form start/end selection.
- **Range (Fixed Slide)** — Slider แบบกำหนดช่วงค่า ใช้สำหรับกำหนดค่าตั้งแต่–ถึง โดยปรับค่าเป็นขั้นหรือช่วงที่กำหนดไว้ / Two-thumb range slider that snaps to fixed step positions; use with `showSteps`.

In code, map these to the `type` and `showSteps` props on `<Slider>`:

| Figma variant | `type` | `showSteps` |
|---|---|---|
| Single (Free Slide) | `"single"` | `false` |
| Single (Fixed Slide) | `"single"` | `true` |
| Range (Free Slide) | `"range"` | `false` |
| Range (Fixed Slide) | `"range"` | `true` |

### สถานะของ Slider

รูปแบบการแสดงผลของ Slider ในแต่ละช่วงของการใช้งาน เพื่อบอกผู้ใช้ว่า Slider อยู่ในสถานะ "พร้อมใช้งาน" หรือ "ไม่พร้อมใช้งาน" / States communicate whether the slider can be interacted with.

| State | Description / คำอธิบาย |
|---|---|
| **Default** | สถานะปกติของ Slider เมื่อพร้อมให้ผู้ใช้เลื่อนเพื่อปรับค่า / The resting state — user can drag the thumb(s) to adjust the value. |
| **Disabled** | สถานะเมื่อ Slider ไม่พร้อมใช้งาน และไม่สามารถปรับค่าได้ / The slider is locked; fill and thumb use muted token colors (`--fill-gray-300`, `--bg-default-secondary`). |

Map to the `disabled` prop on `<Slider>`.

### Sizes

Slider มีทั้งหมด 3 ขนาด ได้แก่ Small, Medium, และ Large / Slider has 3 sizes: Small, Medium, and Large.

| Size | `size` prop | Track height | Thumb diameter |
|---|---|---|---|
| **Small** | `"sm"` | 4 px | 16 px |
| **Medium** | `"md"` | 8 px | 20 px |
| **Large** | `"lg"` | 12 px | 24 px |

### การออกแบบ Component

| Component | Key Dimension |
|---|---|
| **Track — Small** | height 4 px, radius full (pill) |
| **Track — Medium** | height 8 px, radius full (pill) |
| **Track — Large** | height 12 px, radius full (pill) |
| **Thumb — Small** | 16 × 16 px, radius full |
| **Thumb — Medium** | 20 × 20 px, radius full |
| **Thumb — Large** | 24 × 24 px, radius full |
| **Thumb shadow** | `0 1px 3px rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)` (Elevation/sm) |
| **Fill color (active)** | `var(--bg-brand-primary)` |
| **Fill color (disabled)** | `var(--fill-gray-300)` |
| **Track background** | `var(--fill-gray-200)` |

### API (props)

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Track height and thumb size |
| `type` | `"single" \| "range"` | `"single"` | Single thumb or two-thumb range |
| `disabled` | `boolean` | `false` | Locks the slider |
| `showSteps` | `boolean` | `false` | Shows step labels (25 / 50 / 75 / 100) below the track |
| `min` | `number` | `0` | Minimum value |
| `max` | `number` | `100` | Maximum value |
| `step` | `number` | `1` | Step increment |
| `value` | `number` | — | Controlled value (single) |
| `rangeValue` | `[number, number]` | — | Controlled values (range) |
| `defaultValue` | `number` | `50` | Uncontrolled default (single) |
| `defaultRangeValue` | `[number, number]` | `[25, 75]` | Uncontrolled default (range) |
| `onChange` | `(value: number) => void` | — | Fires on single value change |
| `onRangeChange` | `(values: [number, number]) => void` | — | Fires on range value change |

### Preview

ตัวอย่างการใช้งานจริงแสดง Range Slider ในการ์ด "Price Range" โดยมีค่าที่เลือกแสดงเป็น "75 THB" ด้านล่าง เพื่อให้ผู้ใช้เห็นค่าที่ปรับได้ทันที / A real-world use case shows a Range Slider inside a "Price Range" card, with the selected value displayed as "75 THB" beneath the slider for immediate feedback.

```tsx
import { useState } from "react";
import { Slider } from "@sarunyu/system-one";

export function PriceRangeSlider() {
  const [value, setValue] = useState(75);
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-border bg-bg-default-primary p-4 w-[343px]">
      <p className="text-sm text-text-default-secondary">Price Range</p>
      <Slider size="lg" type="single" value={value} onChange={setValue} />
      <div className="flex items-center gap-1.5">
        <span className="text-4xl font-bold text-text-brand-primary">{value}</span>
        <span className="text-base text-text-default-tertiary">THB</span>
      </div>
    </div>
  );
}
```
