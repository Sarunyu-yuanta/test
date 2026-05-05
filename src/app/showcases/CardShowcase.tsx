import { useState, type ReactNode } from "react";
import { Card, CardSize, CardTagStatus, CardSocialTag } from "@/components/card";
import { CheckCircle, XCircle } from "@phosphor-icons/react";

const FONT = { fontFamily: "'Noto Sans Thai', sans-serif" };

const SIZES: { label: string; size: CardSize }[] = [
  { label: "Desktop — 308px", size: "desktop" },
  { label: "Tablet — 224px",  size: "tablet"  },
  { label: "Mobile — 163px",  size: "mobile"  },
];

const TAG_STATUSES: { label: string; status: CardTagStatus }[] = [
  { label: "Not registered",  status: "not-registered" },
  { label: "Registered",      status: "registered"     },
  { label: "Full",            status: "full"           },
];

const DEMO_SOCIAL_TAGS: CardSocialTag[] = [
  { label: "Analysis", bg: "var(--tag-bg-blue, #F3F8FE)",   text: "var(--tag-text-blue, #095EC4)"   },
  { label: "Stock",    bg: "var(--tag-bg-cyan, #F3F8FE)",   text: "var(--tag-text-cyan, #095EC4)"   },
  { label: "My Asset", bg: "var(--tag-bg-purple, #F3E8FF)", text: "var(--tag-text-purple, #59168B)" },
];

type CardRulePair = {
  title: string;
  doText: string;
  dontText: string;
  doCard: ReactNode;
  dontCard: ReactNode;
};

/** Example banner/thumbnail for showcase previews (Unsplash). */
const MOCK_CARD_IMAGE =
  "https://images.unsplash.com/photo-1770131091439-9aa7274f544f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

function NewsBookmarkDemo({ size }: { size: CardSize }) {
  const [bookmarked, setBookmarked] = useState(false);
  return (
    <Card
      image={MOCK_CARD_IMAGE}
      variant="news"
      size={size}
      bookmarked={bookmarked}
      onBookmarkToggle={() => setBookmarked((v) => !v)}
    />
  );
}

function SocialBookmarkDemo({ size }: { size: CardSize }) {
  const [bookmarked, setBookmarked] = useState(false);
  return (
    <Card
      image={MOCK_CARD_IMAGE}
      variant="social"
      size={size}
      tags={DEMO_SOCIAL_TAGS}
      bookmarked={bookmarked}
      onBookmarkToggle={() => setBookmarked((v) => !v)}
    />
  );
}

export function CardShowcase() {
  const cardRules: CardRulePair[] = [
    {
      title: "Rule 1 — Spacing Between Cards",
      doText: "แต่ละการ์ดต้องมีระยะห่างที่ชัดเจน เพื่อให้ผู้ใช้สามารถแยกแยะและอ่านข้อมูลได้ง่าย",
      dontText:
        "หลีกเลี่ยงการจัดวาง Card ให้ติดกันหรือซ้อนกัน เพราะทำให้การแยกข้อมูลไม่ชัดเจน",
      doCard: (
        <div className="flex gap-6">
          <Card image={MOCK_CARD_IMAGE} variant="event" size="tablet" />
          <Card image={MOCK_CARD_IMAGE} variant="event" size="tablet" />
        </div>
      ),
      dontCard: (
        <div className="flex overflow-x-hidden">
          <Card image={MOCK_CARD_IMAGE} variant="event" size="tablet" className="-mr-8" />
          <Card image={MOCK_CARD_IMAGE} variant="event" size="tablet" />
          <Card image={MOCK_CARD_IMAGE} variant="event" size="tablet" className="-ml-8" />
        </div>
      ),
    },
    {
      title: "Rule 2 — Internal Structure",
      doText: "ใช้ตำแหน่งและลำดับข้อมูลภายใน Card ตามที่ Design System กำหนดไว้",
      dontText:
        "หลีกเลี่ยงการปรับตำแหน่งหรือลำดับข้อมูลภายใน Card เพราะทำให้รูปแบบการแสดงผลไม่สม่ำเสมอทั้งระบบ",
      doCard: <Card image={MOCK_CARD_IMAGE} variant="event" size="desktop" />,
      dontCard: (
        <Card
          image={MOCK_CARD_IMAGE}
          variant="event"
          size="desktop"
          className="flex-col-reverse"
        />
      ),
    },
    {
      title: "Rule 3 — Layout Tokens",
      doText: "ใช้ Card ตาม Layout ที่ Design System กำหนด",
      dontText:
        "หลีกเลี่ยงการปรับ Padding, Gap และ Radius ของ Card รวมถึงสีที่ใช้ เพราะทำให้การแสดงผลไม่สม่ำเสมอทั้งระบบ",
      doCard: <Card image={MOCK_CARD_IMAGE} variant="event" size="tablet" className="mx-auto" />,
      dontCard: (
        <Card
          image={MOCK_CARD_IMAGE}
          variant="event"
          size="tablet"
          className="mx-auto rounded-[20px] bg-[#F5F8FF] p-2 shadow-none"
        />
      ),
    },
    {
      title: "Rule 4 — Device Fit",
      doText: "ใช้ Card ให้เหมาะสมกับ Device เพื่อให้ Experience ในการใช้งานมีประสิทธิภาพ",
      dontText:
        "หลีกเลี่ยงการใช้ Card ที่ไม่เหมาะสมกับ Device เพราะทำให้ Experience การแสดงผลของ Card ขาดประสิทธิภาพ",
      doCard: (
        <div className="mx-auto w-[343px] rounded-[8px] bg-background p-4">
          <Card image={MOCK_CARD_IMAGE} variant="news" size="mobile" />
          <Card image={MOCK_CARD_IMAGE} variant="news" size="mobile" className="mt-4" />
        </div>
      ),
      dontCard: (
        <div className="mx-auto w-[343px] rounded-[8px] bg-background p-4">
          <Card image={MOCK_CARD_IMAGE} variant="news" size="desktop" />
        </div>
      ),
    },
  ];

  return (
    <div className="bg-background min-h-screen px-10 py-10" style={FONT}>
      <h1 className="mb-1">Card Component</h1>
      <p className="text-muted-foreground mb-12 text-[14px]">
        variant=default · variant=event &amp; variant=news · 3 sizes · lock / location / audience / tag / bookmark
      </p>

      {/* ── Default — shell for custom content ── */}
      <section className="mb-14">
        <h2 className="mb-6 text-[16px] text-nav-link">Default — Custom Content Shell</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl text-[14px] leading-6">
          ใช้ <span className="text-foreground font-medium">variant=&quot;default&quot;</span> เป็นกรอบการ์ดพร้อม padding และ radius ตาม size — ใส่เนื้อหาผ่าน children ได้เลย
        </p>
        <div className="flex flex-wrap gap-8 items-start">
          {SIZES.map(({ label, size }) => (
            <div key={`default-${size}`} className="flex flex-col gap-3">
              <p className="text-[11px] uppercase tracking-wider text-caption">{label}</p>
              <Card
                variant="default"
                size={size}
                className={
                  size === "desktop"
                    ? "w-[308px]"
                    : size === "tablet"
                      ? "w-[224px]"
                      : "w-[163px]"
                }
              >
                <p className="text-sm font-semibold text-foreground">หัวข้อหรือส่วนหัว</p>
                <p
                  className={
                    size === "mobile"
                      ? "mt-2 line-clamp-4 text-xs leading-5 text-muted-foreground"
                      : "mt-2 text-xs leading-5 text-muted-foreground"
                  }
                                 >
                  {size === "mobile"
                    ? "พื้นที่ใส่เนื้อหา — กำหนดความกว้างด้วย className"
                    : "พื้นที่สำหรับเนื้อหา รายการ หรือคอมโพเนนต์อื่น — ความกว้างควบคุมจาก parent หรือ className"}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* ── Event — Size variants ── */}
      <section className="mb-14">
        <h2 className="mb-6 text-[16px] text-nav-link">Event — Size Variants</h2>
        <div className="flex flex-wrap gap-8 items-start">
          {SIZES.map(({ label, size }) => (
            <div key={size} className="flex flex-col gap-3">
              <p className="text-[11px] uppercase tracking-wider text-caption">{label}</p>
              <Card image={MOCK_CARD_IMAGE} variant="event" size={size} />
            </div>
          ))}
        </div>
      </section>

      {/* ── Event — Tag status ── */}
      <section className="mb-14">
        <h2 className="mb-6 text-[16px] text-nav-link">Event — Tag Status</h2>
        <div className="flex flex-wrap gap-8 items-start">
          {TAG_STATUSES.map(({ label, status }) => (
            <div key={status} className="flex flex-col gap-3">
              <p className="text-[11px] uppercase tracking-wider text-caption">{label}</p>
              <Card image={MOCK_CARD_IMAGE} variant="event" size="desktop" tagStatus={status} />
            </div>
          ))}
        </div>
      </section>

      {/* ── Event — Optional rows ── */}
      <section className="mb-14">
        <h2 className="mb-6 text-[16px] text-nav-link">Event — Optional Rows</h2>
        <div className="flex flex-wrap gap-8 items-start">
          <div className="flex flex-col gap-3">
            <p className="text-[11px] uppercase tracking-wider text-caption">All rows</p>
            <Card image={MOCK_CARD_IMAGE} variant="event" size="desktop" showLocation showAudience locked />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[11px] uppercase tracking-wider text-caption">No location</p>
            <Card image={MOCK_CARD_IMAGE} variant="event" size="desktop" showLocation={false} showAudience locked />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[11px] uppercase tracking-wider text-caption">No audience</p>
            <Card image={MOCK_CARD_IMAGE} variant="event" size="desktop" showLocation showAudience={false} locked />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[11px] uppercase tracking-wider text-caption">No lock</p>
            <Card image={MOCK_CARD_IMAGE} variant="event" size="desktop" showLocation showAudience locked={false} />
          </div>
        </div>
      </section>

      {/* ── News — Desktop (vertical) ── */}
      <section className="mb-14">
        <h2 className="mb-6 text-[16px] text-nav-link">News — Desktop (vertical)</h2>
        <div className="flex flex-wrap gap-8 items-start">
          <div className="flex flex-col gap-3">
            <p className="text-[11px] uppercase tracking-wider text-caption">Not bookmarked</p>
            <Card image={MOCK_CARD_IMAGE} variant="news" size="desktop" bookmarked={false} />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[11px] uppercase tracking-wider text-caption">Bookmarked</p>
            <Card image={MOCK_CARD_IMAGE} variant="news" size="desktop" bookmarked={true} />
          </div>
        </div>
      </section>

      {/* ── News — Mobile (horizontal) ── */}
      <section className="mb-14">
        <h2 className="mb-6 text-[16px] text-nav-link">News — Mobile (horizontal)</h2>
        <div className="flex flex-col gap-6 max-w-[343px]">
          <div className="flex flex-col gap-3">
            <p className="text-[11px] uppercase tracking-wider text-caption">Not bookmarked</p>
            <NewsBookmarkDemo size="mobile" />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[11px] uppercase tracking-wider text-caption">Bookmarked</p>
            <Card image={MOCK_CARD_IMAGE} variant="news" size="mobile" bookmarked={true} />
          </div>
        </div>
      </section>

      {/* ── Social — Desktop ── */}
      <section className="mb-14">
        <h2 className="mb-6 text-[16px] text-nav-link">Social — Desktop (587px)</h2>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p className="text-[11px] uppercase tracking-wider text-caption">Not bookmarked</p>
            <SocialBookmarkDemo size="desktop" />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[11px] uppercase tracking-wider text-caption">Bookmarked</p>
            <Card image={MOCK_CARD_IMAGE} variant="social" size="desktop" tags={DEMO_SOCIAL_TAGS} bookmarked={true} />
          </div>
        </div>
      </section>

      {/* ── Social — Mobile ── */}
      <section className="mb-14">
        <h2 className="mb-6 text-[16px] text-nav-link">Social — Mobile (343px)</h2>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p className="text-[11px] uppercase tracking-wider text-caption">Not bookmarked</p>
            <SocialBookmarkDemo size="mobile" />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[11px] uppercase tracking-wider text-caption">Bookmarked</p>
            <Card image={MOCK_CARD_IMAGE} variant="social" size="mobile" tags={DEMO_SOCIAL_TAGS} bookmarked={true} />
          </div>
        </div>
      </section>

      {/* ── Live — Desktop ── */}
      <section className="mb-14">
        <h2 className="mb-6 text-[16px] text-nav-link">Live — Desktop (704px)</h2>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p className="text-[11px] uppercase tracking-wider text-caption">Upcoming (default)</p>
            <Card image={MOCK_CARD_IMAGE} variant="live" size="desktop" duration="upcoming" />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[11px] uppercase tracking-wider text-caption">Duration</p>
            <Card image={MOCK_CARD_IMAGE} variant="live" size="desktop" duration="1:26:36" />
          </div>
        </div>
      </section>

      {/* ── Live — Mobile ── */}
      <section className="mb-14">
        <h2 className="mb-6 text-[16px] text-nav-link">Live — Mobile (343px)</h2>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p className="text-[11px] uppercase tracking-wider text-caption">Upcoming (default)</p>
            <Card image={MOCK_CARD_IMAGE} variant="live" size="mobile" duration="upcoming" />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[11px] uppercase tracking-wider text-caption">Duration</p>
            <Card image={MOCK_CARD_IMAGE} variant="live" size="mobile" duration="1:26:36" />
          </div>
        </div>
      </section>

      {/* ── Side-by-side preview ── */}
      <section>
        <h2 className="mb-6 text-[16px] text-nav-link">Side-by-side Preview</h2>
        <div className="flex flex-wrap gap-8 items-start bg-hover-bg rounded-[12px] p-8 mb-6">
          {SIZES.map(({ size }) => (
            <Card image={MOCK_CARD_IMAGE} key={size} variant="event" size={size} />
          ))}
        </div>
        <div className="flex flex-wrap gap-8 items-start bg-hover-bg rounded-[12px] p-8 mb-6">
          <Card image={MOCK_CARD_IMAGE} variant="news" size="desktop" bookmarked={false} />
          <Card image={MOCK_CARD_IMAGE} variant="news" size="desktop" bookmarked={true} />
        </div>
        <div className="bg-hover-bg rounded-[12px] p-8">
          <div className="flex flex-col gap-4 max-w-[343px]">
            <Card image={MOCK_CARD_IMAGE} variant="news" size="mobile" bookmarked={false} />
            <Card image={MOCK_CARD_IMAGE} variant="news" size="mobile" bookmarked={true} />
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="mb-6 text-[16px] text-nav-link">Rule</h2>
        <div className="flex flex-col gap-6">
          {cardRules.map((rule) => (
            <div key={rule.title} className="rounded-[12px] border border-border bg-card p-4">
              <p className="mb-4 text-[14px] font-semibold text-foreground">
                {rule.title}
              </p>
              <div className="grid gap-4 xl:grid-cols-2">
                <div className="rounded-[8px] border border-success/20 bg-success-bg/30 p-4">
                  <div className="mb-3 min-h-[190px] rounded-[8px] bg-background p-4">
                    {rule.doCard}
                  </div>
                  <div className="mb-2 inline-flex items-center gap-1 rounded-full bg-success px-2 py-0.5 text-white">
                    <CheckCircle size={14} weight="fill" />
                    <span className="text-[13px] font-semibold leading-5">Do</span>
                  </div>
                  <p className="text-[14px] leading-6 text-foreground">{rule.doText}</p>
                </div>

                <div className="rounded-[8px] border border-destructive/20 bg-error-bg/40 p-4">
                  <div className="mb-3 min-h-[190px] rounded-[8px] bg-background p-4">
                    {rule.dontCard}
                  </div>
                  <div className="mb-2 inline-flex items-center gap-1 rounded-full bg-destructive px-2 py-0.5 text-white">
                    <XCircle size={14} weight="fill" />
                    <span className="text-[13px] font-semibold leading-5">Don’t</span>
                  </div>
                  <p className="text-[14px] leading-6 text-foreground">{rule.dontText}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
