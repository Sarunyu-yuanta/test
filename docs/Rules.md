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

## Toggle

### Rule 1 — On / Off Only

| | |
|---|---|
| **Do** | Use Toggle for a binary *on* / *off* state (a single setting that is enabled or disabled). / ใช้ Toggle สำหรับการให้ความหมายเชิงเปิด-ปิด |
| **Don't** | Do not use Toggle to pick between two different content modes or categories (e.g. switching "News" vs. "Analysis"). Use a **segmented control**, **tabs**, or **radio** options instead. / หลีกเลี่ยงการใช้ Toggle ผิดวัตถุประสงค์ เพราะจะทำให้รูปแบบและความหมายไม่สอดคล้องกับการใช้งานที่กำหนดไว้ |

`<Toggle>` represents one boolean. For mutually exclusive *choices between labels*, the pattern is not a toggle — use a control built for that purpose so affordance and meaning stay consistent with the system.

---

### Rule 2 — System Appearance

| | |
|---|---|
| **Do** | Use the `Toggle` component as shipped in the design system: sizes `sm` / `md`, token-based track and thumb colors, and optional label + description. / ใช้ Toggle ตามรูปแบบที่ Design System กำหนด |
| **Don't** | Do not change width/height, recolor the track or thumb, roundness, or add gradients or ad-hoc styling. / หลีกเลี่ยงการปรับขนาด, เปลี่ยนสี, หรือปรับรูปทรงของ Toggle เพราะทำให้ผู้ใช้ แยกสถานะการใช้งานได้ยาก และทำให้การแสดงผลไม่สม่ำเสมอกันทั้งระบบ |

Always use `<Toggle>` from `@sarunyu/system-one`. The switch must remain visually recognizable: **off** — neutral track; **on** — brand primary track; **disabled** — system muted states. Do not "theme" a toggle with one-off colors or detour around the component to fake a second meaning.

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

## Modal & Bottom Sheet


### Rule 1 — Component Integrity

| | |
|---|---|
| **Do** | Use Modal and Bottom Sheet exactly as defined by the Design System. / ใช้ Modal และ Bottom Sheet ตามรูปแบบที่ Design System กำหนดไว้ |
| **Don't** | Avoid changing padding, gap, radius, colors, or adding custom internal buttons/layout. / หลีกเลี่ยงการปรับ Padding, Gap, Radius, สี หรือเพิ่มปุ่ม/โครงสร้างภายในเอง |

Use `<Modal>` and `<BottomSheet>` from `@sarunyu/system-one` without overriding their core structure. Do not handcraft internal layout blocks or inject extra control patterns that conflict with the component specification.

---

### Rule 2 — Modal Layout Structure

| | |
|---|---|
| **Do** | Keep Modal content order and positions according to the Design System layout. / ใช้ Modal ตาม Layout ที่ Design System กำหนด |
| **Don't** | Avoid repositioning or reordering title, body, and action blocks in Modal. / หลีกเลี่ยงการปรับตำแหน่งหรือสลับลำดับเนื้อหาภายใน Modal |

Do not rearrange header/body/actions or move CTA positions inside the modal. Breaking the predefined hierarchy can reduce readability and distort action priority.

---

### Rule 3 — Modal Width Limit

| | |
|---|---|
| **Do** | Keep Modal width within the system standard (max 375 px). / กำหนดความกว้างของ Modal ไม่เกินมาตรฐาน (375 px) |
| **Don't** | Avoid expanding Modal width beyond the standard width. / หลีกเลี่ยงการขยายความกว้างของ Modal เกินค่ามาตรฐาน |

Modal should remain within the standard width cap (`375px`) for consistent visual balance and readability on supported layouts.

---

### Rule 4 — Modal Positioning

| | |
|---|---|
| **Do** | Place Modal at the center of the viewport. / จัดตำแหน่ง Modal ให้อยู่กึ่งกลางหน้าจอเสมอ |
| **Don't** | Avoid placing Modal outside the center position. / หลีกเลี่ยงการวาง Modal นอกตำแหน่งกึ่งกลางหน้าจอ |

Render modal in a centered overlay container. Off-center placement reduces emphasis and weakens expected dialog behavior.

---

### Rule 5 — Bottom Sheet Positioning

| | |
|---|---|
| **Do** | Place Bottom Sheet at the bottom edge of the viewport. / วาง Bottom Sheet ไว้ด้านล่างของหน้าจอเสมอ |
| **Don't** | Avoid showing Bottom Sheet from any position other than the bottom. / หลีกเลี่ยงการวาง Bottom Sheet ในตำแหน่งอื่นที่ไม่ใช่ด้านล่าง |

Bottom sheet must open from the bottom and stay anchored to the bottom edge. Alternative placement makes hierarchy unclear and increases interaction confusion.

---

### Rule 6 — Responsive Usage (Mobile uses Bottom Sheet)

| | |
|---|---|
| **Do** | On mobile, present forms, multi-step flows, and action-heavy content (login, register, settings, option pickers, action menus) as a Bottom Sheet. Use Modal on desktop. / บนมือถือให้ใช้ Bottom Sheet สำหรับฟอร์ม, ขั้นตอนหลายขั้น และคอนเทนต์ที่ต้อง action เยอะ (login, register, settings, option picker, action menu) ส่วน Desktop ใช้ Modal |
| **Don't** | Avoid showing a content-heavy or form-based Modal on mobile — it limits screen space and makes input difficult. / หลีกเลี่ยงการแสดง Modal ที่มีคอนเทนต์เยอะหรือเป็นฟอร์มบนมือถือ เพราะพื้นที่จำกัดและกรอกข้อมูลยาก |

On mobile (< 768px), any modal that wraps a form (login/register/settings), a multi-step flow, a long option list, or an action menu must render as `<BottomSheet>`. Only short `Modal variant="alert"` notifications and simple `Modal variant="dialog"` confirmations (title + one line + 1–2 buttons, no input) may remain as `<Modal>` on mobile. On desktop (≥ 768px) always use `<Modal>`. Branch inline with `useIsMobile()` from `@sarunyu/system-one` and share one body between the two branches — do not build a custom `ResponsiveModal` wrapper.

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

---

## Table


### Rule 1 — Alignment Consistency

| | |
|---|---|
| **Do** | Keep content alignment consistent between Header and Cell (left-left, center-center, right-right). / จัดตำแหน่งการวางข้อมูลให้สอดคล้องระหว่างข้อมูลใน Header และข้อมูลใน Cell เช่น Header Align ซ้าย ให้ Header Align ซ้ายตาม หรือข้อมูล Align ขวา ให้ Header Align ขวาตาม |
| **Don't** | Avoid mismatched alignment between Header and Cell (e.g., left header with right-aligned content) because it reduces scanability and readability. / หลีกเลี่ยงการจัดตำแหน่งการวางข้อมูลที่ไม่ตรงกันระหว่าง Header และ Cell เพราะทำให้ผู้ใช้อ่าน หรือเปรียบเทียบข้อมูลได้ยาก |

Table columns must use the same alignment in both header and body cells. Misaligned headers and values make scanning and comparison difficult, especially in dense data tables.

---

### Rule 2 — Layout Token Integrity

| | |
|---|---|
| **Do** | Use Table with the spacing, padding, and structure defined by the Design System. / ใช้ Table ตามรูปแบบที่ Design System กำหนดไว้ |
| **Don't** | Avoid manually adjusting Table padding or gap values because it causes inconsistent rendering across the system. / หลีกเลี่ยงการปรับ Padding, Gap ของ Table เพราะทำให้การแสดงผลไม่สม่ำเสมอทั้งระบบ |

Always use `<Table>`, `<TableHeaderCell>`, `<TableRow>`, and `<TableCell>` with their built-in spacing tokens. Do not override internal padding, gap, or core layout values.

---

### Rule 3 — Use Correct Table State

| | |
|---|---|
| **Do** | Use Table states according to the intended interaction and service context (e.g., default, hover, selected, sorted, fixed). / ใช้สถานะของ Table ให้ตรงตามบริบทการใช้งานที่กำหนด |
| **Don't** | Avoid using Table states outside their intended meaning, because it can mislead users and make data status unclear. / หลีกเลี่ยงการใช้สถานะของ Table ที่ไม่ตรงตามบริบทการใช้งาน เพราะอาจทำให้ผู้ใช้สับสนสถานะของข้อมูลที่กำลังดู |

Apply states deliberately: row hover for focus, selected rows for active selection, sort state only on the active sortable column, and sticky/fixed behavior only when horizontal overflow exists.

---

## Notification, Toast & Alert

### Rule 1 — Keep Alert/Inline Message in Normal Layout Flow

| | |
|---|---|
| **Do** | Place Alert (Inline Message) inside the related content area, such as form/section blocks, and keep the standard design token structure. / วาง Alert (Inline Message) ไว้ใน flow ปกติของเนื้อหาที่เกี่ยวข้อง เช่น ใน form หรือ section และใช้โครงสร้างตาม Design System |
| **Don't** | Avoid forcing custom height, radius, or style overrides that break message readability and hierarchy. / หลีกเลี่ยงการปรับความสูง มุมโค้ง หรือสไตล์แกนหลักเองจนทำให้การอ่านและลำดับความสำคัญของข้อความผิดเพี้ยน |

Alert is an inline, persistent message. Keep it anchored to its related context, and preserve core tokens (`spacing`, `radius`, status color, icon size) so it remains scannable and predictable.

---

### Rule 2 — Toast Must Not Block Primary Content

| | |
|---|---|
| **Do** | Place Toast at screen edges (top or bottom) so users can still focus on the main task. / วาง Toast ไว้บริเวณขอบหน้าจอ (บน/ล่าง) เพื่อไม่บังเนื้อหาหลักระหว่างการใช้งาน |
| **Don't** | Avoid placing Toast at the center or over key interaction zones. / หลีกเลี่ยงการวาง Toast ตรงกลางหน้าจอหรือทับบริเวณที่ผู้ใช้ต้องโต้ตอบหลัก |

Toast is transient feedback. It should inform quickly without interrupting reading flow or blocking controls that users need immediately.

---

### Rule 3 — Use Notification for Persistent, Decision-Critical Information

| | |
|---|---|
| **Do** | Use Notification when information must remain visible long enough for users to compare or decide (e.g., transaction details, account states). / ใช้ Notification เมื่อข้อมูลต้องคงอยู่ให้ผู้ใช้เปรียบเทียบหรือตัดสินใจ เช่น รายละเอียดธุรกรรมหรือสถานะบัญชี |
| **Don't** | Do not replace Notification with Toast in areas where users need sustained visibility. / ไม่ควรใช้ Toast แทน Notification ในบริเวณที่ผู้ใช้ต้องใช้เวลาอ่านข้อความและตัดสินใจ |

Notification is for durable context; Toast is for brief acknowledgment. Choosing the wrong component lowers comprehension and can cause users to miss important information.

---

### Rule 4 — Keep Status Semantics Consistent Across Notification/Toast/Alert

| | |
|---|---|
| **Do** | Match status color + icon + copy meaning consistently (`information`, `success`, `warning`, `critical`). / ใช้สถานะ สี ไอคอน และข้อความให้ตรงความหมายเดียวกัน (`information`, `success`, `warning`, `critical`) |
| **Don't** | Avoid mixed semantics (e.g., success message rendered with warning/danger style). / หลีกเลี่ยงการใช้สถานะที่ขัดกัน เช่น ข้อความสำเร็จแต่ใช้สไตล์เตือนหรืออันตราย |

Consistent semantics are essential for trust and fast recognition. Users should understand the message type immediately without re-reading.

---

## Avatar


### Rule 1 — Component Integrity

| | |
|---|---|
| **Do** | Use Avatar according to the layout defined by the Design System. / ใช้ Avatar ตาม Layout ที่ Design System กำหนด |
| **Don't** | Avoid adjusting height, color, stretching, or modifying the format in any way that deviates from the defined layout, because it causes inconsistent rendering across the system. / หลีกเลี่ยงการปรับ Height, สี, การยืด, หรือปรับรูปแบบที่ทำให้เกิดความแตกต่างจากรูปแบบที่กำหนดไว้ เพราะทำให้การแสดงผลไม่สม่ำเสมอทั้งระบบ |

Always use the `<Avatar>` component from `@sarunyu/system-one` without overriding its dimensions, colors, or shape. Do not apply custom `height`, `width`, color overrides, or CSS filters to the avatar element.

---

### Rule 2 — Consistent Size

| | |
|---|---|
| **Do** | Use Avatar with the same size throughout a single list or context. / เลือกใช้ Avatar ให้มีขนาดเท่ากัน |
| **Don't** | Avoid mixing multiple Avatar sizes within the same list, because it creates visual inconsistency in the design. / หลีกเลี่ยงการใช้ Avatar หลายขนาดในรายการเดียวกัน เพราะทำให้เกิดความไม่สม่ำเสมอของการออกแบบ |

All avatars within the same list or context must use the same `size` prop. Mixing sizes (e.g., `xxs` alongside `m`) disrupts visual rhythm and makes the layout feel inconsistent.

---

## Breadcrumb


### Rule 1 — Component Integrity

| | |
|---|---|
| **Do** | Use Breadcrumb according to the layout defined by the Design System. / ใช้ Breadcrumb ตาม Layout ที่ Design System กำหนด |
| **Don't** | Avoid adjusting height, padding, gap, color, or any modification that causes the component to deviate from the defined layout. / หลีกเลี่ยงการปรับ Height, Padding, Gap, สี หรือปรับรูปแบบที่ทำให้เกิดความแตกต่างจากรูปแบบที่กำหนดไว้ |

Always use the `<Breadcrumb>` component from `@sarunyu/system-one` without overriding its internal spacing, colors, or typography. Do not manually recreate breadcrumb trails with custom separators or styled anchors.

---

## Pagination


### Rule 1 — Component Purpose

| | |
|---|---|
| **Do** | Use Pagination according to the purpose defined by the Design System. / ใช้ Pagination ตามวัตถุประสงค์การใช้งานที่ Design System กำหนด |
| **Don't** | Avoid using Pagination for the wrong purpose, as it will confuse users when scrolling or changing pages. / หลีกเลี่ยงการใช้งาน Pagination ผิดวัตถุประสงค์ เพราะจะทำให้ผู้ใช้สับสนการเลื่อน หรือเปลี่ยนหน้า |

Each Pagination variant has a specific role. Use `<Pagination>` (numbered) for paging through large datasets (e.g., news lists, search results). Use `<PaginationBanner>` for banner/hero slide indicators. Use `<PaginationCarousel>` for free-scroll carousels. Do not place a numbered `<Pagination>` inside a horizontal card carousel — use `<PaginationCarousel>` instead.

---

### Rule 2 — Component Integrity

| | |
|---|---|
| **Do** | Use Pagination according to the layout defined by the Design System. / ใช้ Pagination ตาม Layout ที่ Design System กำหนด |
| **Don't** | Avoid adjusting Height, Padding, color, stretching, or modifying the format in any way that deviates from the defined layout, because it causes inconsistent rendering across the system. / หลีกเลี่ยงการปรับ Height, Padding, สี, การยืด หรือปรับรูปแบบที่ทำให้เกิดความแตกต่างจากรูปแบบที่กำหนดไว้ เพราะทำให้การแสดงผลไม่สม่ำเสมอทั้งระบบ |

Always use `<Pagination>`, `<PaginationBanner>`, and `<PaginationCarousel>` from `@sarunyu/system-one` without overriding their internal dimensions, colors, or spacing. Do not apply custom `height`, background colors, or border overrides to individual page cells. The active-page style (`bg-bg-brand` + `text-text-default-white` + `font-bold`) and cell size (`w-[39px] h-[32px]`) are fixed tokens that must remain consistent across the system.

---

## Tooltip


### Rule 1 — Component Integrity

| | |
|---|---|
| **Do** | Use Tooltip according to the layout defined by the Design System. / ใช้ Tooltip ตาม Layout ที่ Design System ที่กำหนด |
| **Don't** | Avoid adjusting padding, height, colors, or any modification that causes the component to deviate from the defined layout, because it causes inconsistent rendering across the system. / หลีกเลี่ยงการปรับ Padding, Height, สี, การยืด, หรือปรับรูปแบบที่ทำให้เกิดความแตกต่างจากรูปแบบที่กำหนดไว้ เพราะทำให้การแสดงผลไม่สม่ำเสมอทั้งระบบ |

Always use the `<Tooltip>` component from `@sarunyu/system-one`. Do not override the tooltip's internal `padding`, `border-radius`, or background color. The dark-surface style (`bg-bg-default-dark` + `rounded-lg` + `p-2`) and arrow dimensions are fixed tokens that must remain consistent across the system.

---

### Rule 2 — One Tooltip at a Time

| | |
|---|---|
| **Do** | Show at most one Tooltip at a time to describe information in a given context clearly. / แสดง Tooltip ได้สูงสุด 1 Tooltip เพื่ออธิบายข้อมูลในบริบทนั้นอย่างชัดเจน |
| **Don't** | Avoid showing more than one Tooltip simultaneously, because overlapping messages obstruct information and disrupt the display. / หลีกเลี่ยงการแสดง Tooltip มากกว่า 1 Tooltip พร้อมกัน เพราะทำให้การรับรู้ข้อมูลซ้อนกันและรบกวนการแสดงผล |

Only one `<Tooltip>` should be visible at a time. Rendering multiple open tooltips simultaneously creates visual noise and makes it impossible for users to distinguish which tooltip describes which element.

---

### Rule 3 — Arrow Alignment

| | |
|---|---|
| **Do** | Point the arrow at the element that is selected or being described. / แสดงลูกศรให้ตรงกับองค์ประกอบที่ถูกเลือกหรือชี้อยู่ |
| **Don't** | Avoid placing the arrow at a position unrelated to what the user is viewing, because it misleads users into thinking the message describes a different element. / หลีกเลี่ยงการแสดงลูกศรในตำแหน่งที่ไม่เกี่ยวข้องกับสิ่งที่ผู้ใช้กำลังดู เพราะทำให้ผู้ใช้เข้าใจผิดว่าข้อความนั้นอธิบายข้อมูลส่วนอื่น |

Use the `side` and `align` props together to ensure the tooltip arrow points directly at the trigger element. Misaligned arrows break the visual connection between the tooltip and its context, causing users to misread which element the message refers to.

---

### Rule 4 — Use the Correct Variant

| | |
|---|---|
| **Do** | Use the Variant that matches the intended purpose of each use case. / ใช้ Variant ให้ตรงตามวัตถุประสงค์การใช้งานที่กำหนด |
| **Don't** | Avoid using the wrong Variant, because it makes the style and meaning of the Tooltip inconsistent with the defined usage. / หลีกเลี่ยงใช้งาน Variant ที่ผิดวัตถุประสงค์ เพราะทำให้รูปแบบและความหมายของ Tooltip ไม่สอดคล้องกับการใช้งานที่กำหนดไว้ |

Choose the tooltip `side` and `align` values based on the actual layout context — do not pick them for visual preference alone. Tooltip is designed for brief contextual labels; for richer content such as QR codes or multi-line descriptions, use the appropriate variant (e.g., a rich content tooltip) rather than stretching the default text tooltip beyond its intended scope.

---

## Popover


### Rule 1 — Component Integrity

| | |
|---|---|
| **Do** | Use Popover according to the layout defined by the Design System. / ใช้ Popover ตาม Layout ที่ Design System กำหนด |
| **Don't** | Avoid adjusting border-radius, padding, background color, or box-shadow outside of what the Design System defines. / หลีกเลี่ยงการปรับ Border Radius, Padding, Background Color หรือ Box Shadow นอกเหนือจากที่ Design System กำหนดไว้ |

Always use `<Popover>` from `@sarunyu/system-one`. Do not override the core visual tokens (`rounded-lg`, `p-3`, `bg-popover`, `shadow-popover`, `border-border`) — these are fixed values that must remain consistent across the system.

---

### Rule 2 — Popover vs Tooltip

| | |
|---|---|
| **Do** | Use Popover for rich, interactive, or multi-element content (menus, forms, detail panels). Use Tooltip for brief hover-only labels. / ใช้ Popover สำหรับเนื้อหาที่ซับซ้อนหรือมีการโต้ตอบ เช่น เมนู, ฟอร์ม หรือข้อมูลรายละเอียด ส่วน Tooltip ใช้สำหรับป้ายกำกับสั้นๆ ที่แสดงขณะ hover |
| **Don't** | Avoid using Popover for a single line of static text (use Tooltip instead), or using Tooltip for interactive content like buttons or forms (use Popover instead). / หลีกเลี่ยงการใช้ Popover สำหรับข้อความสั้นบรรทัดเดียว และหลีกเลี่ยงการใช้ Tooltip สำหรับเนื้อหาที่มีการโต้ตอบ |

Popover opens on **click** and persists until dismissed. Tooltip opens on **hover** and closes automatically. Never swap these two components — the interaction model difference is fundamental to usability.

---

### Rule 3 — One Popover at a Time

| | |
|---|---|
| **Do** | Show at most one Popover open at a time. / แสดง Popover ได้สูงสุดทีละ 1 รายการ |
| **Don't** | Avoid opening multiple Popovers simultaneously, as overlapping panels obstruct content and confuse navigation. / หลีกเลี่ยงการเปิด Popover หลายรายการพร้อมกัน เพราะทำให้เนื้อหาซ้อนกันและสร้างความสับสน |

Only one `<Popover>` should be visible at a time. Rendering multiple open popovers simultaneously creates layering conflicts and makes it difficult for users to understand which panel belongs to which trigger.

---

### Rule 4 — Placement Context

| | |
|---|---|
| **Do** | Choose `side` and `align` props so the popover remains fully visible within the viewport. / เลือก `side` และ `align` ให้ Popover แสดงผลภายในพื้นที่หน้าจอได้ครบถ้วน |
| **Don't** | Avoid placing the popover in a direction that consistently clips or overflows the viewport edge, forcing users to scroll to see the content. / หลีกเลี่ยงการวาง Popover ในทิศที่ทำให้เนื้อหาเกินขอบหน้าจอหรือถูกตัดออก |

Select placement values based on the trigger's actual position in the layout. The Radix UI engine auto-adjusts within the viewport, but setting a sensible `side` default avoids jarring repositioning for most users.

---

## Slider


### Rule 1 — Component Integrity

|| | |
|---|---|
| **Do** | Use Slider according to the layout defined by the Design System. / ใช้ Slider ตาม Layout ที่ Design System ที่กำหนด |
| **Don't** | Avoid adjusting Height, Padding, colors, or any modification that deviates from the defined layout, because it causes inconsistent rendering across the system and confuses users. / หลีกเลี่ยงการปรับ Height, Padding, สี หรือปรับรูปแบบที่ทำให้เกิดความแตกต่างจากรูปแบบที่กำหนดไว้ เพราะทำให้การแสดงผลไม่สม่ำเสมอทั้งระบบและทำให้ผู้ใช้สับสนเมื่อใช้งาน |

Always use `<Slider>` from `@sarunyu/system-one` without overriding its track height, padding, thumb size, or token-based colors. The three defined sizes (`sm` / `md` / `lg`) and their corresponding track and thumb dimensions are fixed — do not detach or recreate the component to apply custom styling.

---

### Rule 2 — Match Slider Type to Use Case

|| | |
|---|---|
| **Do** | Use the Slider type that matches the intended interaction purpose. / ใช้ Slider ให้ตรงตามวัตถุประสงค์การใช้งานที่กำหนด |
| **Don't** | Avoid using the wrong Slider type for the use case — for example, using Fixed Slide when the user needs to freely adjust a value (Free Slide). / หลีกเลี่ยงการใช้ Slider ไม่ตรงตามวัตถุประสงค์ที่กำหนดไว้ เช่น กรณีที่ต้องให้ผู้ใช้ปรับค่าได้อย่างอิสระ (Free Slide) แต่เลือกใช้ Slider แบบ Fixed Slide |

Choose the `type` and `showSteps` props based on the actual interaction requirement:

- **`type="single"`** — when the user selects one continuous value (e.g., budget amount, volume level). Use this as the default free-slide mode.
- **`type="range"`** — when the user selects a min/max range (e.g., price range filter).
- **`showSteps`** — add step labels only when the value must snap to specific points (e.g., 25 / 50 / 75 / 100). Do not use `showSteps` in contexts where continuous, free-form input is expected.

Mismatching the slider type to the interaction model reduces control precision and leads to user errors.

---
