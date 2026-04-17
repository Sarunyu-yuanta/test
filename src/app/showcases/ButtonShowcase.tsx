import React from "react";
import { Circle } from "@phosphor-icons/react";
import { Button, ButtonLabelSize, ButtonIconSize, ButtonVariant } from "@/components/button";

const labelSizes: ButtonLabelSize[] = ["xs", "sm", "md", "lg", "xl"];
const iconSizes:  ButtonIconSize[]  = ["icon-xs", "icon-sm", "icon-md", "icon-lg", "icon-xl"];

// ─── Icon pixel sizes per size token ─────────────────────────────────────────
const labelIconPx: Record<ButtonLabelSize, number> = {
  xs: 16, sm: 18, md: 18, lg: 20, xl: 20,
};
const iconOnlyIconPx: Record<ButtonIconSize, number> = {
  "icon-xs": 16, "icon-sm": 18, "icon-md": 18, "icon-lg": 20, "icon-xl": 20,
};

function LabelCircle({ size, color = "currentColor" }: { size: ButtonLabelSize; color?: string }) {
  return <Circle size={labelIconPx[size]} weight="regular" color={color} />;
}
function IconOnlyCircle({ size, color = "currentColor" }: { size: ButtonIconSize; color?: string }) {
  return <Circle size={iconOnlyIconPx[size]} weight="regular" color={color} />;
}

// ─── Row definitions ──────────────────────────────────────────────────────────
type Row = { label: string; variant: ButtonVariant; forceClass?: string };

const primaryRows: Row[] = [
  { label: "Default",  variant: "primary" },
  { label: "Hover",    variant: "primary",  forceClass: "!bg-primary-action-hover" },
  { label: "Active",   variant: "primary",  forceClass: "!bg-primary-action-active" },
  { label: "Disabled", variant: "disabled" },
];
const outlineRows: Row[] = [
  { label: "Default",  variant: "outline" },
  { label: "Hover",    variant: "outline",  forceClass: "!bg-hover-bg" },
  { label: "Active",   variant: "outline",  forceClass: "!bg-disabled-bg" },
  { label: "Disabled", variant: "outline",  forceClass: "pointer-events-none !bg-disabled-bg !text-disabled !border-border-disabled" },
];
const plainRows: Row[] = [
  { label: "Default",  variant: "plain" },
  { label: "Hover",    variant: "plain",    forceClass: "!bg-hover-bg" },
  { label: "Active",   variant: "plain",    forceClass: "!bg-disabled-bg" },
  { label: "Disabled", variant: "plain",    forceClass: "pointer-events-none !bg-disabled-bg !text-disabled" },
];
const outlineBlackRows: Row[] = [
  { label: "Default",  variant: "outline-black" },
  { label: "Hover",    variant: "outline-black", forceClass: "!bg-hover-bg" },
  { label: "Disabled", variant: "outline-black", forceClass: "pointer-events-none !bg-disabled-bg !text-disabled !border-border-disabled" },
];
const plainBlackRows: Row[] = [
  { label: "Default",  variant: "plain-black" },
  { label: "Hover",    variant: "plain-black",  forceClass: "!bg-hover-bg" },
  { label: "Disabled", variant: "plain-black",  forceClass: "pointer-events-none !bg-disabled-bg !text-disabled" },
];

// ─── Column header row ────────────────────────────────────────────────────────
function ColHeaders({ sizes, indent }: { sizes: string[]; indent: string }) {
  return (
    <div className={`flex items-center gap-10 mb-5 ${indent}`}>
      {sizes.map((s) => (
        <div
          key={s}
          className="w-[80px] text-center text-[12px] text-caption uppercase tracking-wider"
          style={{ fontFamily: "'Noto Sans Thai', sans-serif" }}
        >
          {s}
        </div>
      ))}
    </div>
  );
}

// ─── Labelled VariantSection ──────────────────────────────────────────────────
function VariantSection({ title, rows, iconSlot }: {
  title: string;
  rows: Row[];
  iconSlot?: "right" | "left";
}) {
  return (
    <div className="mb-14">
      <h2 className="mb-6" style={{ fontFamily: "'Noto Sans Thai', sans-serif" }}>{title}</h2>
      <ColHeaders sizes={labelSizes} indent="pl-[100px]" />
      <div className="flex flex-col gap-7">
        {rows.map((row) => {
          const isDisabled  = row.variant === "disabled" || row.label === "Disabled";
          const isBlack     = row.variant === "outline-black" || row.variant === "plain-black";
          const iconColor   = isDisabled ? "var(--disabled)"
                            : row.variant === "primary" ? "white"
                            : isBlack ? "var(--foreground)"
                            : "var(--primary-action)";
          return (
            <div key={row.label} className="flex items-center gap-10">
              <div className="w-[90px] shrink-0 text-[13px] text-muted-foreground"
                style={{ fontFamily: "'Noto Sans Thai', sans-serif" }}>
                {row.label}
              </div>
              {labelSizes.map((size) => (
                <div key={size} className="w-[80px] flex justify-center">
                  <Button
                    size={size}
                    variant={row.variant}
                    className={row.forceClass ?? ""}
                    leftIcon={iconSlot  === "left"  ? <LabelCircle size={size} color={iconColor} /> : undefined}
                    rightIcon={iconSlot === "right" ? <LabelCircle size={size} color={iconColor} /> : undefined}
                  >
                    Button
                  </Button>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Icon-only section ────────────────────────────────────────────────────────
type IconOnlyVariant = {
  title: string;
  rows: (Row & { iconColor: string })[];
};

const iconOnlyVariants: IconOnlyVariant[] = [
  {
    title: "Primary",
    rows: [
      { label: "Default",  variant: "primary",  iconColor: "white" },
      { label: "Hover",    variant: "primary",  iconColor: "white",   forceClass: "!bg-primary-action-hover" },
      { label: "Active",   variant: "primary",  iconColor: "white",   forceClass: "!bg-primary-action-active" },
      { label: "Disabled", variant: "disabled", iconColor: "var(--disabled)" },
    ],
  },
  {
    title: "Outline",
    rows: [
      { label: "Default",  variant: "outline", iconColor: "var(--primary-action)" },
      { label: "Hover",    variant: "outline", iconColor: "var(--primary-action)", forceClass: "!bg-hover-bg" },
      { label: "Active",   variant: "outline", iconColor: "var(--primary-action)", forceClass: "!bg-disabled-bg" },
      { label: "Disabled", variant: "outline", iconColor: "var(--disabled)", forceClass: "pointer-events-none !bg-disabled-bg !text-disabled !border-border-disabled" },
    ],
  },
  {
    title: "Plain",
    rows: [
      { label: "Default",  variant: "plain", iconColor: "var(--primary-action)" },
      { label: "Hover",    variant: "plain", iconColor: "var(--primary-action)", forceClass: "!bg-hover-bg" },
      { label: "Active",   variant: "plain", iconColor: "var(--primary-action)", forceClass: "!bg-disabled-bg" },
      { label: "Disabled", variant: "plain", iconColor: "var(--disabled)", forceClass: "pointer-events-none !bg-disabled-bg !text-disabled" },
    ],
  },
  {
    title: "Outline Black",
    rows: [
      // Icon uses currentColor — button text-foreground drives the default colour.
      // On press the Button component applies inline disabled color via React state.
      { label: "Default",  variant: "outline-black", iconColor: "currentColor" },
      { label: "Hover",    variant: "outline-black", iconColor: "currentColor", forceClass: "!bg-hover-bg" },
      // Static active row: manually set both bg and icon colour (button not truly pressed)
      { label: "Active",   variant: "outline-black", iconColor: "var(--disabled)", forceClass: "!bg-disabled-bg" },
      { label: "Disabled", variant: "outline-black", iconColor: "currentColor", forceClass: "pointer-events-none !bg-disabled-bg !text-disabled !border-border-disabled" },
    ],
  },
  {
    title: "Plain Black",
    rows: [
      { label: "Default",  variant: "plain-black", iconColor: "currentColor" },
      { label: "Hover",    variant: "plain-black", iconColor: "currentColor", forceClass: "!bg-hover-bg" },
      { label: "Active",   variant: "plain-black", iconColor: "var(--disabled)", forceClass: "!bg-disabled-bg" },
      { label: "Disabled", variant: "plain-black", iconColor: "currentColor", forceClass: "pointer-events-none !bg-disabled-bg !text-disabled" },
    ],
  },
];

function IconOnlySection() {
  return (
    <div className="mb-14">
      <h2 className="mb-1" style={{ fontFamily: "'Noto Sans Thai', sans-serif" }}>Icon Only</h2>
      <p className="text-muted-foreground mb-8 text-[13px]" style={{ fontFamily: "'Noto Sans Thai', sans-serif" }}>
        Square icon-only button — <code className="bg-disabled-bg px-1 rounded text-[11px]">size="icon-xs|sm|md|lg|xl"</code>
      </p>

      <ColHeaders sizes={iconSizes} indent="pl-[100px]" />

      {iconOnlyVariants.map((v, vi) => (
        <React.Fragment key={v.title}>
          <div
            className="text-[13px] text-nav-link mb-4"
            style={{ fontFamily: "'Noto Sans Thai', sans-serif", fontWeight: 600 }}
          >
            {v.title}
          </div>
          <div className="flex flex-col gap-7 mb-10">
            {v.rows.map((row) => (
              <div key={row.label} className="flex items-center gap-10">
                <div className="w-[90px] shrink-0 text-[13px] text-muted-foreground"
                  style={{ fontFamily: "'Noto Sans Thai', sans-serif" }}>
                  {row.label}
                </div>
                {iconSizes.map((size) => (
                  <div key={size} className="w-[80px] flex justify-center">
                    <Button
                      size={size}
                      variant={row.variant}
                      className={row.forceClass ?? ""}
                    >
                      <IconOnlyCircle size={size} color={row.iconColor} />
                    </Button>
                  </div>
                ))}
              </div>
            ))}
          </div>
          {vi < iconOnlyVariants.length - 1 && (
            <div className="border-t border-dashed border-divider mb-8" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

// ─── Showcase ─────────────────────────────────────────────────────────────────
export function ButtonShowcase() {
  return (
    <div className="bg-background min-h-full">
      <h1 className="mb-1" style={{ fontFamily: "'Noto Sans Thai', sans-serif" }}>
        Button Component
      </h1>
      <p className="text-muted-foreground mb-12" style={{ fontFamily: "'Noto Sans Thai', sans-serif" }}>
        Sizes × States × Variants
      </p>

      {/* ── No icon ── */}
      <VariantSection title="Primary"      rows={primaryRows} />
      <div className="border-t border-divider mb-14" />
      <VariantSection title="Outline"      rows={outlineRows} />
      <div className="border-t border-divider mb-14" />
      <VariantSection title="Plain"        rows={plainRows} />
      <div className="border-t border-divider mb-14" />

      {/* ── Right icon ── */}
      <VariantSection title="Primary · Right Icon"      rows={primaryRows}      iconSlot="right" />
      <div className="border-t border-divider mb-14" />
      <VariantSection title="Outline · Right Icon"      rows={outlineRows}      iconSlot="right" />
      <div className="border-t border-divider mb-14" />
      <VariantSection title="Plain · Right Icon"        rows={plainRows}        iconSlot="right" />
      <div className="border-t border-divider mb-14" />

      {/* ── Left icon ── */}
      <VariantSection title="Primary · Left Icon"       rows={primaryRows}      iconSlot="left" />
      <div className="border-t border-divider mb-14" />
      <VariantSection title="Outline · Left Icon"       rows={outlineRows}      iconSlot="left" />
      <div className="border-t border-divider mb-14" />
      <VariantSection title="Plain · Left Icon"         rows={plainRows}        iconSlot="left" />
      <div className="border-t border-divider mb-14" />

      {/* ── Icon Only ── */}
      <IconOnlySection />
      <div className="border-t border-divider mb-14" />

      {/* ── Black variants ── */}
      <VariantSection title="Outline Black"                   rows={outlineBlackRows} />
      <div className="border-t border-divider mb-14" />
      <VariantSection title="Outline Black · Right Icon"      rows={outlineBlackRows} iconSlot="right" />
      <div className="border-t border-divider mb-14" />
      <VariantSection title="Outline Black · Left Icon"       rows={outlineBlackRows} iconSlot="left" />
      <div className="border-t border-divider mb-14" />
      <VariantSection title="Plain Black"                     rows={plainBlackRows} />
      <div className="border-t border-divider mb-14" />
      <VariantSection title="Plain Black · Right Icon"        rows={plainBlackRows}   iconSlot="right" />
      <div className="border-t border-divider mb-14" />
      <VariantSection title="Plain Black · Left Icon"         rows={plainBlackRows}   iconSlot="left" />
      <div className="border-t border-divider mb-10" />

      {/* ── Interactive ── */}
      <h2 className="mb-2" style={{ fontFamily: "'Noto Sans Thai', sans-serif" }}>Interactive</h2>
      <p className="text-muted-foreground mb-10 text-[13px]" style={{ fontFamily: "'Noto Sans Thai', sans-serif" }}>
        All variants · All icon slots · All sizes — hover and click to see states
      </p>

      {/* Labelled interactive rows */}
      <ColHeaders sizes={labelSizes} indent="pl-[160px]" />
      {([
        { label: "Primary",                  variant: "primary"       as const, icon: undefined, disabled: false },
        { label: "Primary · Left",           variant: "primary"       as const, icon: "left",    disabled: false },
        { label: "Primary · Right",          variant: "primary"       as const, icon: "right",   disabled: false },
        { label: "Primary · Disabled",       variant: "disabled"      as const, icon: undefined, disabled: false },
        { label: "Outline",                  variant: "outline"       as const, icon: undefined, disabled: false },
        { label: "Outline · Left",           variant: "outline"       as const, icon: "left",    disabled: false },
        { label: "Outline · Right",          variant: "outline"       as const, icon: "right",   disabled: false },
        { label: "Outline · Disabled",       variant: "outline"       as const, icon: undefined, disabled: true  },
        { label: "Plain",                    variant: "plain"         as const, icon: undefined, disabled: false },
        { label: "Plain · Left",             variant: "plain"         as const, icon: "left",    disabled: false },
        { label: "Plain · Right",            variant: "plain"         as const, icon: "right",   disabled: false },
        { label: "Plain · Disabled",         variant: "plain"         as const, icon: undefined, disabled: true  },
        { label: "Outline Black",            variant: "outline-black" as const, icon: undefined, disabled: false },
        { label: "Outline Black · Left",     variant: "outline-black" as const, icon: "left",    disabled: false },
        { label: "Outline Black · Right",    variant: "outline-black" as const, icon: "right",   disabled: false },
        { label: "Outline Black · Disabled", variant: "outline-black" as const, icon: undefined, disabled: true  },
        { label: "Plain Black",              variant: "plain-black"   as const, icon: undefined, disabled: false },
        { label: "Plain Black · Left",       variant: "plain-black"   as const, icon: "left",    disabled: false },
        { label: "Plain Black · Right",      variant: "plain-black"   as const, icon: "right",   disabled: false },
        { label: "Plain Black · Disabled",   variant: "plain-black"   as const, icon: undefined, disabled: true  },
      ] as const).map((row) => {
        const isBlack      = row.variant === "outline-black" || row.variant === "plain-black";
        const iconColor    = row.variant === "primary" ? "white" : isBlack ? "var(--foreground)" : "var(--primary-action)";
        const isGroupStart = row.label === "Outline" || row.label === "Plain"
                          || row.label === "Outline Black" || row.label === "Plain Black";
        return (
          <React.Fragment key={row.label}>
            {isGroupStart && <div className="border-t border-divider my-8" />}
            <div className="flex items-center gap-10 mb-6">
              <div className="w-[150px] shrink-0 text-[13px] text-muted-foreground"
                style={{ fontFamily: "'Noto Sans Thai', sans-serif" }}>
                {row.label}
              </div>
              {labelSizes.map((size) => (
                <div key={size} className="w-[80px] flex justify-center">
                  <Button
                    size={size}
                    variant={row.variant}
                    disabled={row.disabled}
                    leftIcon={row.icon === "left"  ? <LabelCircle size={size} color={row.disabled ? "var(--disabled)" : iconColor} /> : undefined}
                    rightIcon={row.icon === "right" ? <LabelCircle size={size} color={row.disabled ? "var(--disabled)" : iconColor} /> : undefined}
                  >
                    Button
                  </Button>
                </div>
              ))}
            </div>
          </React.Fragment>
        );
      })}

      {/* Icon-only interactive rows */}
      <div className="border-t border-divider my-8" />
      <p className="text-muted-foreground mb-6 text-[13px]" style={{ fontFamily: "'Noto Sans Thai', sans-serif" }}>
        Icon Only — hover and click to see states
      </p>
      <ColHeaders sizes={iconSizes} indent="pl-[160px]" />
      {([
        { label: "Primary · Icon Only",               variant: "primary"       as const, iconColor: "white",        disabled: false },
        { label: "Primary · Icon Only Disabled",      variant: "disabled"      as const, iconColor: "var(--disabled)", disabled: false },
        { label: "Outline · Icon Only",               variant: "outline"       as const, iconColor: "var(--primary-action)", disabled: false },
        { label: "Outline · Icon Only Disabled",      variant: "outline"       as const, iconColor: "var(--disabled)", disabled: true  },
        { label: "Plain · Icon Only",                 variant: "plain"         as const, iconColor: "var(--primary-action)", disabled: false },
        { label: "Plain · Icon Only Disabled",        variant: "plain"         as const, iconColor: "var(--disabled)", disabled: true  },
        { label: "Outline Black · Icon Only",         variant: "outline-black" as const, iconColor: "currentColor", disabled: false },
        { label: "Outline Black · Icon Only Disabled",variant: "outline-black" as const, iconColor: "currentColor", disabled: true  },
        { label: "Plain Black · Icon Only",           variant: "plain-black"   as const, iconColor: "currentColor", disabled: false },
        { label: "Plain Black · Icon Only Disabled",  variant: "plain-black"   as const, iconColor: "currentColor", disabled: true  },
      ] as const).map((row, i) => {
        const isGroupStart = i === 2 || i === 4 || i === 6 || i === 8;
        return (
          <React.Fragment key={row.label}>
            {isGroupStart && <div className="border-t border-divider my-6" />}
            <div className="flex items-center gap-10 mb-6">
              <div className="w-[150px] shrink-0 text-[13px] text-muted-foreground"
                style={{ fontFamily: "'Noto Sans Thai', sans-serif" }}>
                {row.label}
              </div>
              {iconSizes.map((size) => (
                <div key={size} className="w-[80px] flex justify-center">
                  <Button size={size} variant={row.variant} disabled={row.disabled}>
                    <IconOnlyCircle size={size} color={row.iconColor} />
                  </Button>
                </div>
              ))}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}