import { useState, useCallback } from "react";
import { Copy, Check, CaretDown, CaretUp } from "@phosphor-icons/react";
import { CODE_COLORS as C, tokenizeLine } from "../lib/highlight";

const COLLAPSE_AT = 12;

type Props = {
  code: string;
  /** When provided, renders a tab strip for switching code snippets */
  tabs?: { label: string; code: string }[];
};

export function CodeBlock({ code, tabs }: Props) {
  const allTabs = tabs ?? [{ label: "tsx", code }];
  const hasMultiple = allTabs.length > 1;

  const [activeTab, setActiveTab] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const activeCode = allTabs[activeTab]?.code ?? "";
  const lines = activeCode.split("\n");
  const collapsible = lines.length > COLLAPSE_AT;
  const visible = expanded || !collapsible ? lines : lines.slice(0, COLLAPSE_AT);

  const switchTab = (i: number) => {
    if (i !== activeTab) { setActiveTab(i); setExpanded(false); }
  };

  const copy = useCallback(async () => {
    try { await navigator.clipboard.writeText(activeCode); setCopied(true); setTimeout(() => setCopied(false), 2000); }
    catch {}
  }, [activeCode]);

  return (
    <div className="overflow-hidden" style={{ borderTop: `1px solid ${C.border}` }}>
      {/* Toolbar */}
      <div className="flex items-center" style={{ background: C.toolbar }}>
        <div className="flex items-stretch flex-1 min-w-0 overflow-x-auto [scrollbar-width:none]">
          {hasMultiple ? (
            allTabs.map((tab, i) => {
              const isActive = i === activeTab;
              return (
                <button
                  key={tab.label}
                  onClick={() => switchTab(i)}
                  className="shrink-0 px-4 py-2.5 text-[12px] font-medium transition-colors relative"
                  style={{ color: isActive ? C.default : C.subtle, background: isActive ? C.bg : "transparent" }}
                >
                  {tab.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: C.keyword }} />
                  )}
                </button>
              );
            })
          ) : (
            <span className="px-4 py-2.5 text-[11px] font-mono" style={{ color: C.subtle }}>tsx</span>
          )}
        </div>
        <button
          onClick={copy}
          className="shrink-0 flex items-center gap-1.5 px-4 py-2.5 text-[11px] transition-colors border-l"
          style={{ color: copied ? "#1a7f37" : C.subtle, borderColor: C.border }}
          onMouseEnter={(e) => !copied && (e.currentTarget.style.color = C.hoverBtn)}
          onMouseLeave={(e) => !copied && (e.currentTarget.style.color = C.subtle)}
        >
          {copied ? <Check size={12} weight="bold" /> : <Copy size={12} />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Code */}
      <div style={{ background: C.bg }}>
        <pre className="overflow-x-auto px-0 py-3 text-[13px] leading-[1.65]">
          <code>
            {visible.map((line, i) => (
              <div key={`${activeTab}-${i}`} className="flex px-4 min-h-[1.65em]" style={{ ["--hover-line" as string]: C.hoverLine }} onMouseEnter={(e) => (e.currentTarget.style.background = C.hoverLine)} onMouseLeave={(e) => (e.currentTarget.style.background = "")}>
                <span className="select-none shrink-0 w-9 text-right pr-4 text-[12px]" style={{ color: C.lineNum }}>
                  {i + 1}
                </span>
                <span className="whitespace-pre">
                  {tokenizeLine(line).map((t, j) => (
                    <span key={j} style={{ color: t.color }}>{t.text}</span>
                  ))}
                </span>
              </div>
            ))}
          </code>
        </pre>

        {collapsible && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="w-full flex items-center justify-center gap-1.5 py-2 text-[12px] transition-colors border-t"
            style={{ color: C.subtle, borderColor: C.border, background: C.toolbar }}
            onMouseEnter={(e) => (e.currentTarget.style.color = C.hoverBtn)}
            onMouseLeave={(e) => (e.currentTarget.style.color = C.subtle)}
          >
            {expanded
              ? <><CaretUp size={11} weight="bold" /> Collapse</>
              : <><CaretDown size={11} weight="bold" /> View full code ({lines.length} lines)</>}
          </button>
        )}
      </div>
    </div>
  );
}
