import React from "react";
import { Card, CardVariant, CardTagStatus } from "./Card";

const FONT = { fontFamily: "'Noto Sans Thai', sans-serif" };

const VARIANTS: { label: string; variant: CardVariant }[] = [
  { label: "Desktop — 308px", variant: "desktop" },
  { label: "Tablet — 224px",  variant: "tablet"  },
  { label: "Mobile — 163px",  variant: "mobile"  },
];

const TAG_STATUSES: { label: string; status: CardTagStatus }[] = [
  { label: "Not registered",  status: "not-registered" },
  { label: "Registered",      status: "registered"     },
  { label: "Full",            status: "full"           },
];

export function CardShowcase() {
  return (
    <div className="bg-white min-h-screen px-10 py-10">
      <h1 className="mb-1" style={FONT}>Card Component</h1>
      <p className="text-[#6b7280] mb-12 text-[14px]" style={FONT}>
        3 responsive variants × lock / location / audience / tag status
      </p>

      {/* ── Responsive variants ── */}
      <section className="mb-14">
        <h2 className="mb-6 text-[16px] text-[#374151]" style={FONT}>Responsive Variants</h2>
        <div className="flex flex-wrap gap-8 items-start">
          {VARIANTS.map(({ label, variant }) => (
            <div key={variant} className="flex flex-col gap-3">
              <p className="text-[11px] uppercase tracking-wider text-[#9ca3af]" style={FONT}>{label}</p>
              <Card variant={variant} />
            </div>
          ))}
        </div>
      </section>

      {/* ── Tag status ── */}
      <section className="mb-14">
        <h2 className="mb-6 text-[16px] text-[#374151]" style={FONT}>Tag Status</h2>
        <div className="flex flex-wrap gap-8 items-start">
          {TAG_STATUSES.map(({ label, status }) => (
            <div key={status} className="flex flex-col gap-3">
              <p className="text-[11px] uppercase tracking-wider text-[#9ca3af]" style={FONT}>{label}</p>
              <Card variant="desktop" tagStatus={status} />
            </div>
          ))}
        </div>
      </section>

      {/* ── Optional rows ── */}
      <section className="mb-14">
        <h2 className="mb-6 text-[16px] text-[#374151]" style={FONT}>Optional Rows</h2>
        <div className="flex flex-wrap gap-8 items-start">
          <div className="flex flex-col gap-3">
            <p className="text-[11px] uppercase tracking-wider text-[#9ca3af]" style={FONT}>All rows</p>
            <Card variant="desktop" showLocation showAudience locked />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[11px] uppercase tracking-wider text-[#9ca3af]" style={FONT}>No location</p>
            <Card variant="desktop" showLocation={false} showAudience locked />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[11px] uppercase tracking-wider text-[#9ca3af]" style={FONT}>No audience</p>
            <Card variant="desktop" showLocation showAudience={false} locked />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[11px] uppercase tracking-wider text-[#9ca3af]" style={FONT}>No lock</p>
            <Card variant="desktop" showLocation showAudience locked={false} />
          </div>
        </div>
      </section>

      {/* ── All 3 at once (like Figma screenshot) ── */}
      <section>
        <h2 className="mb-6 text-[16px] text-[#374151]" style={FONT}>Side-by-side Preview</h2>
        <div className="flex flex-wrap gap-8 items-start bg-[#f9fafb] rounded-[12px] p-8">
          {VARIANTS.map(({ variant }) => (
            <Card key={variant} variant={variant} />
          ))}
        </div>
      </section>
    </div>
  );
}
