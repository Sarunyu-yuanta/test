import { CodeBlock } from "./CodeBlock";

export type CodeTab = { label: string; code: string };

type Props = {
  title?: string;
  code?: string;
  codeTabs?: CodeTab[];
  children: React.ReactNode;
  previewClassName?: string;
  noPadding?: boolean;
};

export function ComponentBlock({
  title,
  code,
  codeTabs,
  children,
  previewClassName,
  noPadding,
}: Props) {
  const tabs = codeTabs ?? (code != null ? [{ label: "tsx", code }] : undefined);

  return (
    <div className="flex flex-col gap-3">
      {title && <p className="text-sm font-semibold text-foreground">{title}</p>}

      <div className="rounded-xl overflow-hidden border border-border">
        {/* Preview */}
        <div
          className={`flex items-center justify-center bg-background ${noPadding ? "" : "p-8"} ${previewClassName ?? ""}`}
          style={{ minHeight: 200 }}
        >
          {children}
        </div>

        {/* Code */}
        {tabs && <CodeBlock code={tabs[0]?.code ?? ""} tabs={tabs.length > 1 ? tabs : undefined} />}
      </div>
    </div>
  );
}
