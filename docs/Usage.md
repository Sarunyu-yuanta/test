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
