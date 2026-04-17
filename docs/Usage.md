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
