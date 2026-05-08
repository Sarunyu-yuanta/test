import { useState, useMemo } from "react";
import { CodeBlock } from "./CodeBlock";

// ── Control definitions ────────────────────────────────────────────────────

export type SelectControl = {
  type: "select";
  key: string;
  label: string;
  options: { label: string; value: string }[];
  defaultValue?: string;
  /** Hide this control when predicate returns false */
  visible?: (values: PlaygroundValues) => boolean;
};

export type BooleanControl = {
  type: "boolean";
  key: string;
  label: string;
  defaultValue?: boolean;
  /** Hide this control when predicate returns false */
  visible?: (values: PlaygroundValues) => boolean;
};

export type PlaygroundControl = SelectControl | BooleanControl;

export type PlaygroundValues = Record<string, string | boolean>;

// ── Component ──────────────────────────────────────────────────────────────

type Props = {
  title?: string;
  controls: PlaygroundControl[];
  render: (values: PlaygroundValues) => { preview: React.ReactNode; code: string };
  previewClassName?: string;
  noPadding?: boolean;
};

function initValues(controls: PlaygroundControl[]): PlaygroundValues {
  const out: PlaygroundValues = {};
  for (const c of controls) {
    out[c.key] =
      c.defaultValue !== undefined
        ? c.defaultValue
        : c.type === "select"
        ? c.options[0]?.value ?? ""
        : false;
  }
  return out;
}

function getDefaultValue(ctrl: PlaygroundControl): string | boolean {
  if (ctrl.defaultValue !== undefined) return ctrl.defaultValue;
  return ctrl.type === "select" ? ctrl.options[0]?.value ?? "" : false;
}

/** Resolve effective values — hidden controls fall back to their defaultValue */
function resolveEffectiveValues(
  values: PlaygroundValues,
  controls: PlaygroundControl[],
): PlaygroundValues {
  const result = { ...values };
  for (const ctrl of controls) {
    if (ctrl.visible && !ctrl.visible(result)) {
      result[ctrl.key] = getDefaultValue(ctrl);
    }
  }
  return result;
}

export function ComponentPlayground({
  title,
  controls,
  render,
  previewClassName,
  noPadding,
}: Props) {
  const [values, setValues] = useState<PlaygroundValues>(() => initValues(controls));

  const effectiveValues = useMemo(
    () => resolveEffectiveValues(values, controls),
    [values, controls],
  );

  const { preview, code } = useMemo(() => render(effectiveValues), [effectiveValues]);

  const update = (key: string, value: string | boolean) =>
    setValues((prev) => ({ ...prev, [key]: value }));

  const visibleControls = controls.filter(
    (ctrl) => !ctrl.visible || ctrl.visible(effectiveValues),
  );

  return (
    <div className="flex flex-col gap-3">
      {title && <p className="text-sm font-semibold text-foreground">{title}</p>}

      <div className="rounded-xl overflow-hidden border border-border">
        {/* ── Preview ── */}
        <div
          className={`flex items-center justify-center bg-background ${noPadding ? "" : "p-8"} ${previewClassName ?? ""}`}
          style={{ minHeight: 200 }}
        >
          {preview}
        </div>

        {/* ── Controls bar ── */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 px-5 py-3 border-t border-border bg-[var(--muted-bg,hsl(0_0%_97%))]">
          {visibleControls.map((ctrl) =>
            ctrl.type === "select" ? (
              <label key={ctrl.key} className="flex items-center gap-2">
                <span className="text-[11px] font-medium text-muted-foreground select-none">
                  {ctrl.label}
                </span>
                <div className="relative">
                  <select
                    value={values[ctrl.key] as string}
                    onChange={(e) => update(ctrl.key, e.target.value)}
                    className="h-7 appearance-none rounded-md border border-border bg-background pl-2.5 pr-7 text-[12px] text-foreground cursor-pointer outline-none focus:ring-2 focus:ring-[var(--primary-action)] focus:ring-offset-0"
                  >
                    {ctrl.options.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </label>
            ) : (
              <label
                key={ctrl.key}
                className="flex items-center gap-2 cursor-pointer select-none"
              >
                <div
                  className="relative w-[28px] h-[16px] rounded-full transition-colors duration-150"
                  style={{
                    background: (values[ctrl.key] as boolean)
                      ? "var(--primary-action)"
                      : "#B0B8C4",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={values[ctrl.key] as boolean}
                    onChange={(e) => update(ctrl.key, e.target.checked)}
                    className="sr-only"
                  />
                  <span
                    className="absolute top-[2px] left-[2px] w-3 h-3 rounded-full bg-white shadow transition-transform duration-150"
                    style={{
                      transform: (values[ctrl.key] as boolean)
                        ? "translateX(12px)"
                        : "translateX(0)",
                    }}
                  />
                </div>
                <span className="text-[11px] font-medium text-muted-foreground">
                  {ctrl.label}
                </span>
              </label>
            )
          )}
        </div>

        {/* ── Code block ── */}
        <CodeBlock code={code} />
      </div>
    </div>
  );
}
