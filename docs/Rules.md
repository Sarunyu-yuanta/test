# Rules

---

## Button


### Rule 1 — Maximum Width

| | |
|---|---|
| **Do** | The button width can be expanded up to a maximum of 343 px. / ขยายความกว้างของปุ่มได้ไม่เกิน 343 px |
| **Don't** | Avoid detaching the component, expanding, or adjusting the button width beyond the standard limit (343 px). / หลีกเลี่ยงการ Detach Component, การขยาย หรือปรับขนาดความกว้างของปุ่มให้เกินค่ามาตราฐาน (343 px) |

The button has a `max-w-[343px]` constraint. Never remove or override this value. Do not detach the component to bypass sizing constraints.

---

### Rule 2 — Component Integrity

| | |
|---|---|
| **Do** | Use the Button component as defined. / ใช้ Button Component ตามที่ถูกกำหนดไว้ |
| **Don't** | Avoid adjusting padding or radius beyond what is specified, to maintain consistency across all buttons in the system. / หลีกเลี่ยงการปรับค่า Padding และ Radius นอกเหนือจากที่กำหนดไว้ เพื่อคงความสม่ำเสมอของ Button ทั้งระบบ |

Always use the `<Button>` component from `@sarunyu/system-one`. Do not manually recreate or modify the button's `padding` (`py-[10px] px-[16px]`) or `border-radius` (`rounded-[8px]`). These values are fixed tokens that must remain consistent across the system.

---

### Rule 3 — Style Hierarchy

| | |
|---|---|
| **Do** | Choose the button style according to its defined meaning or priority level. / เลือกใช้ Style ของปุ่มตามความหมายหรือระดับความสำคัญที่กำหนดไว้ |
| **Don't** | Avoid using buttons without appropriate priority ordering, as it may confuse users when making decisions. / หลีกเลี่ยงการใช้ปุ่มที่ไม่จัดลำดับความสำคัญอย่างเหมาะสม เพราะอาจทำให้ผู้ใช้สับสนในการตัดสินใจ |

Choose the button style (`Primary` / `Secondary` / `Outline`) according to the action's priority and meaning:

- **Primary** — the main CTA on a page or modal (e.g., Submit, Confirm). Use once per context.
- **Secondary / Outline** — supporting actions (e.g., Cancel, Filter). Never use two Primary buttons side-by-side.

Mixing styles without clear hierarchy confuses users and reduces decision clarity.

---

### Rule 4 — Hug Width Behaviour

| | |
|---|---|
| **Do** | Use Hug sizing based on the length of the content inside the button. / ใช้การ Hug Component ตามความยาวของ Content ด้านในปุ่ม |
| **Don't** | Avoid using Hug width with buttons that have long labels, as it causes text to overflow or exceed the button boundary. / หลีกเลี่ยงการใช้ Hug Width กับปุ่มที่มีข้อความยาว เพราะทำให้ข้อความล้นหรือเกินขอบปุ่ม |

When the button width is set to **Hug**, it wraps tightly around the label. This is correct for short labels. For longer text, switch to **Fill** (width: `100%`) or set an explicit `max-w-[343px]` to prevent the label from overflowing or wrapping unexpectedly.

---

## Card


### Rule 1 — Spacing Between Cards

| | |
|---|---|
| **Do** | Keep clear spacing between cards so users can separate and read each block of content easily. / แต่ละการ์ดต้องมีระยะห่างที่ชัดเจน เพื่อให้ผู้ใช้สามารถแยกแยะและอ่านข้อมูลได้ง่าย |
| **Don't** | Avoid placing cards too close together or overlapping, because it reduces readability and makes content boundaries unclear. / หลีกเลี่ยงการจัดวาง Card ให้ติดกันหรือซ้อนกัน เพราะทำให้การแยกข้อมูลไม่ชัดเจน |

Use consistent spacing between cards inside list/grid layouts. Never overlap cards or compress the gap to zero.

---

### Rule 2 — Internal Structure

| | |
|---|---|
| **Do** | Keep the card's content order and positions aligned with the Design System structure. / ใช้ตำแหน่งและลำดับข้อมูลภายใน Card ตามที่ Design System กำหนดไว้ |
| **Don't** | Avoid rearranging or reordering content inside the card, because it breaks visual consistency across the product. / หลีกเลี่ยงการปรับตำแหน่งหรือลำดับข้อมูลภายใน Card เพราะทำให้รูปแบบการแสดงผลไม่สม่ำเสมอทั้งระบบ |

Do not swap the order of banner, title, metadata, or tag rows. Preserve the component's predefined hierarchy.

---

### Rule 3 — Layout Tokens

| | |
|---|---|
| **Do** | Use card layout values exactly as defined in the Design System. / ใช้ Card ตาม Layout ที่ Design System กำหนด |
| **Don't** | Avoid overriding card padding, gap, radius, or core color styles, as this causes inconsistent rendering in the system. / หลีกเลี่ยงการปรับ Padding, Gap และ Radius ของ Card รวมถึงสีที่ใช้ เพราะทำให้การแสดงผลไม่สม่ำเสมอทั้งระบบ |

Always use the built-in Card sizing and spacing tokens. Do not add custom border radius, custom padding, or ad-hoc background overrides.

---

### Rule 4 — Device Fit

| | |
|---|---|
| **Do** | Choose the card size and layout variant that fits the target device for better usability. / ใช้ Card ให้เหมาะสมกับ Device เพื่อให้ Experience ในการใช้งานมีประสิทธิภาพ |
| **Don't** | Avoid using card layouts that are not appropriate for the target device, because the reading and interaction experience will degrade. / หลีกเลี่ยงการใช้ Card ที่ไม่เหมาะสมกับ Device เพราะทำให้ Experience การแสดงผลของ Card ขาดประสิทธิภาพ |

Use mobile card variants on mobile containers and desktop variants on larger screens. Match card width and composition to the available viewport.

---

## Checkbox & Radio


### Rule 1 — Consistent Alignment in a Group

| | |
|---|---|
| **Do** | Place Checkbox and Radio in a consistent direction and alignment within the same group. / จัดวาง Checkbox และ Radio ให้อยู่ในแนวเดียวกันภายในชุดเดียว เพื่อให้รูปแบบสม่ำเสมอและอ่านข้อมูลได้ง่าย |
| **Don't** | Avoid mixing opposite alignment directions in the same group, because it makes options harder to scan and increases confusion. / หลีกเลี่ยงการจัดวาง Checkbox และ Radio ต่างแนวกันภายในชุดเดียว เพราะทำให้การอ่านข้อมูลได้ยาก และเพิ่มความสับสนในการใช้งาน |

Keep control position and text alignment consistent across the same option set. Do not place some controls on the left and others on the right within one group.

---

### Rule 2 — Follow Layout Tokens

| | |
|---|---|
| **Do** | Use Checkbox and Radio according to the layout defined by the Design System. / ใช้ Checkbox และ Radio ตาม Layout ที่ Design System ที่กำหนด |
| **Don't** | Avoid changing height, colors, or visual style outside the defined component tokens, because it breaks consistency across the system. / หลีกเลี่ยงการปรับ Height, สี, หรือปรับรูปแบบที่ทำให้เกิดความแตกต่างจากรูปแบบที่กำหนดไว้ เพราะทำให้การแสดงผลไม่สม่ำเสมอทั้งระบบ |

Always use the built-in `size`, spacing, and color tokens from `<Checkbox>` and `<Radio>`. Do not manually override height, border color, or fill styles.

---

### Rule 3 — Use the Correct Variant

| | |
|---|---|
| **Do** | Use each variant based on its intended purpose. / ใช้ Variant ให้ตรงตามวัตถุประสงค์การใช้งานที่กำหนด |
| **Don't** | Avoid using variants outside their intended meaning, because it creates inconsistent interaction patterns. / หลีกเลี่ยงการใช้ Variant ผิดจุดประสงค์ที่กำหนด เพราะทำให้รูปแบบและความหมายไม่สอดคล้องกับการใช้งานที่กำหนดไว้ |

Choose `text` for standard list selection and `button` when the option must appear as a selectable surface. Do not swap variants for visual preference only.

---

### Rule 4 — Radio Is Single-Select Only

| | |
|---|---|
| **Do** | Use Radio when users must choose only one option from a set. / Radio สามารถเลือกได้เพียงตัวเลือกเดียวเท่านั้น |
| **Don't** | Avoid using Radio for multi-select scenarios; use Checkbox instead. / หลีกเลี่ยงการใช้ Radio ในการเลือกหลายตัวเลือก แนะนำให้ใช้ Checkbox แทน |

`<Radio>` must be grouped by the same `name` and represent one exclusive choice. For any case where multiple options can be selected at once, use `<Checkbox>`.

---

### Rule 5 — Do Not Mix Control Types in One Set

| | |
|---|---|
| **Do** | Use only one control type (Checkbox or Radio) within the same option set. / ใช้ Checkbox หรือ Radio เพียงประเภทเดียวภายในชุดเดียวกัน |
| **Don't** | Avoid mixing Checkbox and Radio in one set, because users cannot clearly understand selection behavior. / หลีกเลี่ยงการใช้ Checkbox และ Radio ปะปนกันภายในชุดเดียว เพราะทำให้ผู้ใช้สับสนต่อรูปแบบและความหมายของตัวเลือก |

Each option group should represent one interaction model. Mixing selection models in a single list causes ambiguity and increases input errors.

---

## Input


### Rule 1 — State Colors

| | |
|---|---|
| **Do** | Use the input according to the states defined by the Design System. / ใช้ Input ตามสถานะที่ Design System กำหนดไว้ |
| **Don't** | Avoid changing input colors outside of what the Design System defines. / หลีกเลี่ยงการเปลี่ยนสี Input นอกเหนือจากที่ Design System กำหนดไว้ |

Input colors are tied to state tokens (Default, Focus, Error, Disabled). Never override border or background colors manually — always rely on the component's built-in state variants.

---

### Rule 2 — Component Integrity

| | |
|---|---|
| **Do** | Use the component that matches the defined style and pattern. / ควรเลือกใช้ Component ให้ตรงกับสไตล์และรูปแบบที่กำหนด |
| **Don't** | Avoid adjusting gap or height beyond the defined values, or mimicking the style instead of using the correct Design System component. / หลีกเลี่ยงการปรับค่า Gap หรือ Height ให้แตกต่างจากค่าที่กำหนด หรือเลียนแบบ Style แทนการใช้ Component ที่ถูกต้องตาม Design System |

Always use `<FloatingLabelInput>` / `<TextArea>` / `<DatePicker>` from `@sarunyu/system-one`. Do not recreate input styles manually or adjust `gap` / `height` outside the component's defined tokens.

---

### Rule 3 — Dropdown Tags

| | |
|---|---|
| **Do** | Use Dropdown Tags when more than one item can be selected. / ใช้ Dropdown Tags เมื่อมีการเลือกมากกว่า 1 รายการ |
| **Don't** | Avoid using Dropdown Tags when only a single value can be selected, as it does not align with the defined usage pattern. / หลีกเลี่ยงการใช้ Dropdown Tags ในกรณีที่เลือกได้เพียงค่าเดียว เพราะไม่สอดคล้องกับรูปแบบการใช้งานที่กำหนดไว้ |

Dropdown Tags are designed for multi-select scenarios. For single-select, use a standard dropdown or select input instead.

---

### Rule 4 — Label Length

| | |
|---|---|
| **Do** | Keep the input label short and concise. / ควรกำหนด Label input ให้สั้นและกระชับ |
| **Don't** | Avoid labels that get truncated or wrap to multiple lines, as this confuses users and reduces readability. / หลีกเลี่ยงการที่ป้ายกำกับถูกตัดทอน หรือมีหลายบรรทัด เพราะทำให้ผู้ใช้สับสนและอ่านยาก |

Keep the `labelText` prop short enough to fit on a single line inside the input. Long labels get truncated or wrap into multiple lines, reducing readability and breaking the floating label layout.

---

### Rule 5 — Helper Text vs Error Message

| | |
|---|---|
| **Do** | Choose the input style appropriate to the current data state. / ควรเลือกใช้สไตล์ของ Input ให้เหมาะสมกับสถานะของข้อมูล |
| **Don't** | Avoid displaying Helper Text alongside an Error Message, as it may obscure the critical content of the error. / หลีกเลี่ยงการแสดง Helper Text ร่วมกับ Error Message เพราะอาจจะทำให้เนื้อหาสำคัญของ Error Message ไม่ชัดเจน |

Do not show Helper Text and Error Message simultaneously. When the field is in an error state, the error message replaces the helper text — showing both creates visual noise and obscures the critical error feedback.

---

### Rule 6 — Option List

| | |
|---|---|
| **Do** | Use Option List when there are more than one selectable value, such as in a Dropdown input. / ใช้ Option List เมื่อมีตัวเลือกมากกว่า 1 ค่า เช่น Dropdown input |
| **Don't** | Avoid using Option List when only a single value can be selected, as it does not align with the defined usage pattern. / หลีกเลี่ยงการใช้ Option List เมื่อเลือกได้เพียงค่าเดียว เพราะจะทำให้ไม่สอดคล้องกับรูปแบบการใช้งานที่กำหนดไว้ |

Option List is designed for multi-value selection contexts such as Dropdown inputs. For single-value selection, use a standard select or radio input instead.

---

### Rule 7 — Date Format

| | |
|---|---|
| **Do** | Use the date format as defined by the Design System. / ใช้รูปแบบวันที่ตามที่ Design System กำหนด |
| **Don't** | Avoid inconsistent date formats — such as using Thai month names with a C.E. year, or reordering day/month/year. / หลีกเลี่ยงการใช้รูปแบบวันที่ที่ไม่สอดคล้องกัน เช่น วัน/เดือนภาษาไทยแต่ใช้ปีเป็น ค.ศ. หรือสลับตำแหน่งของวันที่/เดือน/ปี |

Always follow the date format defined by the Design System (e.g., `DD MMM YYYY` in Thai locale). Do not mix Thai month names with C.E. year, or reorder day/month/year — inconsistent formats confuse users and break data uniformity.

---

## Tab


### Rule 1 — Component Integrity

| | |
|---|---|
| **Do** | Use the Tab according to the pattern defined by the Design System. / ใช้ Tab ตามรูปแบบที่ Design System กำหนดไว้ |
| **Don't** | Avoid adjusting padding, gap, radius, swapping internal element positions, or changing the colors used. / หลีกเลี่ยงการปรับ Padding, Gap, Radius และการสลับตำแหน่งองค์ประกอบภายใน รวมถึงสีที่ใช้ |

Always use the `<TabGroup>` component from `@sarunyu/system-one`. Do not manually override padding, gap, border-radius, element order, or colors inside the tab bar.

---

### Rule 2 — Consistent Size

| | |
|---|---|
| **Do** | Use tabs of the same size throughout a tab group. / เลือกใช้ Tab ให้มีขนาดเดียวกัน |
| **Don't** | Avoid mixing tab sizes, as it creates inconsistent usage patterns and makes tabs harder to interact with. / หลีกเลี่ยงการใช้ Tab หลายขนาด เพราะทำให้รูปแบบการใช้งานไม่สม่ำเสมอและผู้ใช้เลือกใช้งาน Tab ได้ยาก |

All tabs within a single tab bar must use the same `size` prop (`Small` / `Medium` / `Large`). Mixing sizes in the same group creates visual inconsistency and makes the tabs harder to interact with.

---

### Rule 3 — Spacing

| | |
|---|---|
| **Do** | Use tab spacing as defined by the Design System. / เว้นระยะห่างของ Tab ให้เหมาะสมตาม Design System ที่กำหนดไว้ |
| **Don't** | Avoid excessive spacing between tabs, as it may reduce usability and clarity. / หลีกเลี่ยงการเว้นระยะห่างของ Tab ที่มากเกินไป เพราะอาจลดความเข้าใจในการใช้งาน |

Tab spacing is defined by the component's built-in padding tokens. Do not add extra `gap` or `margin` between tabs — excessive spacing breaks the visual grouping and makes the relationship between tabs unclear.

---

## Tag


### Rule 1 — Component Integrity

| | |
|---|---|
| **Do** | Use Tag and Status Tag according to the layout defined by the Design System. / ใช้ Tag และ Status Tag ตาม Layout ที่ Design System กำหนด |
| **Don't** | Avoid adjusting height, padding, or any modifications that deviate from the defined layout, as it causes inconsistent rendering across the system. / หลีกเลี่ยงการปรับ Height, Padding หรือปรับรูปแบบที่ทำให้เกิดความแตกต่างจากรูปแบบที่กำหนดไว้ เพราะทำให้การแสดงผลไม่สม่ำเสมอทั้งระบบ |

Always use `<Tag>` / `<StatusTag>` from `@sarunyu/system-one` without overriding height, padding, or layout. Modifying these values breaks visual consistency across the system.

---

### Rule 2 — Consistent Size

| | |
|---|---|
| **Do** | Use tags of the same size within the same context. / เลือกใช้ Tag ให้มีขนาดเดียวกัน |
| **Don't** | Avoid using multiple tag sizes, as it creates visual inconsistency in the design. / หลีกเลี่ยงการใช้ Tag หลายขนาด เพราะอาจจะทำให้การออกแบบไม่สม่ำเสมอกัน |

All tags within the same context must use the same size. Mixing sizes creates visual inconsistency and makes the UI feel unpolished.

---

### Rule 3 — Internal Layout

| | |
|---|---|
| **Do** | Use Tag and Status Tag according to the layout defined by the Design System. / ใช้ Tag และ Status Tag ตาม Layout ที่ Design System กำหนด |
| **Don't** | Avoid adjusting padding, gap, radius, or reordering internal elements of Tag and Status Tag, as it causes inconsistent rendering across the system. / หลีกเลี่ยงการปรับ Padding, Gap, Radius และการสลับตำแหน่งองค์ประกอบภายในของ Tag และ Status Tag เพราะทำให้การแสดงผลไม่สม่ำเสมอกันทั้งระบบ |

Do not reorder or reposition elements inside the tag (e.g., moving icon after label, swapping badge position). Internal padding, gap, and radius are fixed by the component — any override breaks cross-system consistency.

---

### Rule 4 — Status Tag Variant

| | |
|---|---|
| **Do** | Use the correct Status Tag variant that matches the semantic meaning of the status defined by the system. / ใช้ Variant ของ Status Tag ให้ตรงตามความหมายของสถานะที่ระบบกำหนด |
| **Don't** | Avoid overriding the color of Status Tag, as it makes the status meaning unclear and inconsistent across the system. / หลีกเลี่ยงการปรับสีของ Status Tag เพราะจะทำให้ความหมายของสถานะไม่ชัดเจนและไม่สอดคล้องกันทั้งระบบ |

Use the correct `variant` prop to match the semantic meaning of the status (e.g., success, warning, error, info). Never manually override the color — doing so detaches the tag from its intended meaning and breaks system-wide status consistency.

---

## Chip


### Rule 1 — Label Length

| | |
|---|---|
| **Do** | Keep chip labels short, concise, and clearly meaningful. / ใช้ข้อความใน Chip ให้สั้น กระชับ และสื่อความหมายตรงประเด็น |
| **Don't** | Avoid long or multi-meaning labels inside a Chip, as limited display space causes confusion when selecting options. / หลีกเลี่ยงการใช้ข้อความยาวหรือหลายความหมายใน Chip เพราะทำให้พื้นที่แสดงผลจำกัดและสับสนในการเลือกใช้งาน |

Keep the chip label short and single-purpose. Long or multi-meaning labels cause overflow and make options harder to scan and select.

---

### Rule 2 — Component Integrity

| | |
|---|---|
| **Do** | Use the Chip according to the layout defined by the Design System. / ใช้ Chip ตาม Layout ที่ Design System กำหนดไว้ |
| **Don't** | Avoid adjusting padding, gap, radius, height, reordering internal elements, or changing colors. / หลีกเลี่ยงการปรับ Padding, Gap, Radius, Height และการสลับตำแหน่งองค์ประกอบภายในของ Chip รวมถึงสีที่ใช้ |

Always use `<Chip>` from `@sarunyu/system-one` without overriding padding, gap, radius, height, element order, or colors. These values are fixed tokens that must remain consistent across the system.

---

### Rule 3 — Consistent Spacing

| | |
|---|---|
| **Do** | Use chips with consistent size and spacing within the same group. / ใช้ Chip ที่มีขนาดและระยะห่างสม่ำเสมอภายในชุดเดียวกัน เพื่อให้รูปแบบเป็นระบบและอ่านง่าย |
| **Don't** | Avoid inconsistent spacing between chips in the same group, as it disrupts visual order and reduces clarity. / หลีกเลี่ยงการกำหนดระยะห่างของ Chip ไม่สม่ำเสมอในชุดเดียวกัน เพราะทำให้รูปแบบขาดความเป็นระเบียบและลดความชัดเจนในการใช้งาน |

All chips within the same group must share the same size and spacing. Inconsistent gaps between chips break visual rhythm and make the group harder to read.

---

### Rule 4 — Multi-value Selection

| | |
|---|---|
| **Do** | Use Chip for option groups that support multiple selections. / ใช้ Chip สำหรับกลุ่มตัวเลือกที่มีหลายค่า เพื่อรองรับการเลือกค่าได้หลากหลาย |
| **Don't** | Avoid using Chip when only a single value can be selected. / หลีกเลี่ยงการใช้ Chip กับตัวเลือกเพียงค่าเดียว |

Chip is designed for multi-option selection groups. If only one option exists, use a different component (e.g., a toggle or checkbox) instead.
