type Props = {
  name: string;
  description: string;
  children: React.ReactNode;
};

export function ShowcasePage({ name, description, children }: Props) {
  return (
    <div className="flex flex-col gap-10 pb-20 max-w-4xl mx-auto w-full">
      <div className="flex flex-col gap-1.5">
        <h1 className="text-foreground text-[30px] font-bold tracking-tight leading-tight">
          {name}
        </h1>
        <p className="text-muted-foreground text-[15px]">{description}</p>
      </div>
      <div className="flex flex-col gap-10">{children}</div>
    </div>
  );
}
