import { useMemo, useState } from "react";
import {
  Briefcase as BriefcaseIcon,
  Check as CheckIcon,
  CheckCircle as CheckCircleIcon,
} from "@phosphor-icons/react";
import {
  Table,
  TableCell,
  TableHeaderCell,
  TableRow,
} from "@/components/table";

const BASIC_USAGE_IMAGE =
  "https://images.unsplash.com/photo-1740252117044-2af197eea287?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const MOCK_IMAGE =
  "https://images.unsplash.com/photo-1719157704385-65e35e0f635c?q=80&w=400&auto=format&fit=crop";

export function TableShowcase() {
  const rows = Array.from({ length: 10 }, (_, i) => `Text label ${i + 1}`);
  const [selectedRowIds, setSelectedRowIds] = useState<string[]>([]);
  const [sortKey, setSortKey] = useState<"name" | "status" | "none">("none");
  const [sortDirection, setSortDirection] = useState<"none" | "asc" | "desc">("none");

  const baseRows = useMemo(
    () => [
      {
        id: "r-01",
        name: "Naris",
        role: "Product Designer",
        status: "Active" as const,
      },
      {
        id: "r-02",
        name: "Ariya",
        role: "Frontend Engineer",
        status: "Leave" as const,
      },
      {
        id: "r-03",
        name: "Pimchanok",
        role: "Data Analyst",
        status: "Active" as const,
      },
      {
        id: "r-04",
        name: "Thanawat",
        role: "Product Owner",
        status: "Leave" as const,
      },
    ],
    [],
  );

  const basicRows = useMemo(() => {
    if (sortDirection === "none" || sortKey === "none") return baseRows;
    const sorted = [...baseRows].sort((a, b) =>
      sortKey === "name"
        ? a.name.localeCompare(b.name)
        : a.status.localeCompare(b.status),
    );
    return sortDirection === "asc" ? sorted : sorted.reverse();
  }, [baseRows, sortDirection, sortKey]);

  const allSelected =
    basicRows.length > 0 && selectedRowIds.length === basicRows.length;
  const someSelected = selectedRowIds.length > 0 && !allSelected;

  return (
    <div className="bg-background min-h-full space-y-10">
      <h2 className="text-[16px] text-nav-link">Basic Usage</h2>
      <section
        className="space-y-4 rounded-[12px] p-0 overflow-hidden"
        style={{
          boxShadow:
            "0 0 2px 0 rgba(102, 102, 102, 0.16), 0 4px 8px 0 rgba(102, 102, 102, 0.12)",
        }}
      >
        <Table className="min-w-[1136px]">
          <thead>
            <TableRow>
              <TableHeaderCell
                type="check"
                fixed="left"
                fixedOffset={0}
                checkState={
                  allSelected ? true : someSelected ? "indeterminate" : false
                }
                onCheckChange={(next) => {
                  setSelectedRowIds(next ? basicRows.map((r) => r.id) : []);
                }}
              />
              <TableHeaderCell
                type="icon"
                fixed="left"
                fixedOffset={56}
                icon={
                  <CheckIcon
                    size={20}
                    weight="regular"
                    className="text-subtle-text"
                  />
                }
              />
              <TableHeaderCell>Profile</TableHeaderCell>
              <TableHeaderCell
                sortDirection={sortKey === "name" ? sortDirection : "none"}
                onSortChange={(next) => {
                  setSortKey(next === "none" ? "none" : "name");
                  setSortDirection(next);
                }}
              >
                User
              </TableHeaderCell>
              <TableHeaderCell>Action</TableHeaderCell>
              <TableHeaderCell
                sortDirection={sortKey === "status" ? sortDirection : "none"}
                onSortChange={(next) => {
                  setSortKey(next === "none" ? "none" : "status");
                  setSortDirection(next);
                }}
              >
                Status
              </TableHeaderCell>
            </TableRow>
          </thead>
          <tbody>
            {basicRows.map((row) => {
              const checked = selectedRowIds.includes(row.id);
              return (
                <TableRow key={row.id} selected={checked} hoverable>
                  <TableCell
                    type="checkbox"
                    fixed="left"
                    fixedOffset={0}
                    onClick={() =>
                      setSelectedRowIds((prev) =>
                        checked
                          ? prev.filter((id) => id !== row.id)
                          : [...prev, row.id],
                      )
                    }
                  />
                  <TableCell
                    type="icon"
                    fixed="left"
                    fixedOffset={56}
                    icon={
                      <CheckCircleIcon
                        size={20}
                        weight="regular"
                        className="text-subtle-text"
                      />
                    }
                  />
                  <TableCell
                    type="text-icon"
                    label={row.role}
                    icon={
                      <BriefcaseIcon
                        size={20}
                        weight="regular"
                        className="text-subtle-text"
                      />
                    }
                  />
                  <TableCell
                    type="text-image"
                    textStyle="bold-description"
                    label={row.name}
                    description="Team Member"
                    imageSrc={BASIC_USAGE_IMAGE}
                  />
                  <TableCell type="button" contentAlign="start" />
                  <TableCell
                    type="tag"
                    tagText={row.status}
                    tagVariant={row.status === "Active" ? "green" : "red"}
                  />
                </TableRow>
              );
            })}
          </tbody>
        </Table>
      </section>

      <section className="space-y-4">
        <h2 className="text-[16px] text-nav-link">Header Types + States</h2>
        <Table>
          <thead>
            <TableRow>
              <TableHeaderCell type="text" state="default" />
              <TableHeaderCell type="icon" state="default" />
              <TableHeaderCell type="check" state="default" />
              <TableHeaderCell type="text" state="hover" />
              <TableHeaderCell type="icon" state="hover" />
              <TableHeaderCell type="check" state="hover" />
              <TableHeaderCell type="text" state="disabled" />
              <TableHeaderCell type="icon" state="disabled" />
              <TableHeaderCell type="check" state="disabled" />
            </TableRow>
            <TableRow>
              <TableHeaderCell type="text" sortable={false}>
                Sort Off
              </TableHeaderCell>
              <TableHeaderCell type="text" fixed="left">
                Sticky Left
              </TableHeaderCell>
              <TableHeaderCell type="text" fixed="right">
                Sticky Right
              </TableHeaderCell>
              <TableHeaderCell type="text" fixed="left" fixedOffset={56}>
                Left + Offset
              </TableHeaderCell>
              <TableHeaderCell type="text" fixedShadow="left">
                Shadow Left
              </TableHeaderCell>
              <TableHeaderCell type="text" fixedShadow="right">
                Shadow Right
              </TableHeaderCell>
            </TableRow>
          </thead>
        </Table>
      </section>

      <section className="space-y-4">
        <h2 className="text-[16px] text-nav-link">Cell Types + Text Styles</h2>
        <Table>
          <thead>
            <TableRow>
              <TableHeaderCell type="text">Default</TableHeaderCell>
              <TableHeaderCell type="text">Hover</TableHeaderCell>
              <TableHeaderCell type="text">Selected</TableHeaderCell>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <TableCell type="default" label="Text label" />
              <TableCell type="default" label="Text label" hovered />
              <TableCell type="default" label="Text label" selected />
            </TableRow>
            <TableRow>
              <TableCell type="default" textStyle="bold" label="Text label" />
              <TableCell
                type="default"
                textStyle="bold"
                label="Text label"
                hovered
              />
              <TableCell
                type="default"
                textStyle="bold"
                label="Text label"
                selected
              />
            </TableRow>
            <TableRow>
              <TableCell
                type="default"
                textStyle="bold-description"
                label="Text label"
                description="Text Description"
              />
              <TableCell
                type="default"
                textStyle="bold-description"
                label="Text label"
                description="Text Description"
                hovered
              />
              <TableCell
                type="default"
                textStyle="bold-description"
                label="Text label"
                description="Text Description"
                selected
              />
            </TableRow>
            <TableRow>
              <TableCell
                type="text-icon"
                textStyle="default"
                label="Text label"
              />
              <TableCell
                type="text-image"
                textStyle="bold"
                label="Text label"
                imageSrc={MOCK_IMAGE}
                hovered
              />
              <TableCell
                type="text-image"
                textStyle="bold-description"
                label="Text label"
                description="Text Description"
                imageSrc={MOCK_IMAGE}
                selected
              />
            </TableRow>
            <TableRow>
              <TableCell type="tag" tagText="Tag" />
              <TableCell type="button" hovered />
              <TableCell type="checkbox" selected />
            </TableRow>
            <TableRow>
              <TableCell type="icon" />
              <TableCell type="checkbox" />
              <TableCell type="button" />
            </TableRow>
          </tbody>
        </Table>
      </section>

      <section className="space-y-4">
        <h2 className="text-[16px] text-nav-link">
          Fixed Preview (Default vs Fixed)
        </h2>
        <div className="overflow-x-auto pb-1">
          <div className="flex min-w-[660px] items-start gap-[150px]">
            <Table responsive={false} className="w-[284px]">
              <thead>
                <TableRow>
                  <TableHeaderCell>Title text</TableHeaderCell>
                </TableRow>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <TableRow key={`default-${row}`}>
                    <TableCell label={row} />
                  </TableRow>
                ))}
              </tbody>
            </Table>

            <div className="relative w-[284px]">
              <Table responsive={false} className="w-[284px]">
                <thead>
                  <TableRow>
                    <TableHeaderCell>Title text</TableHeaderCell>
                  </TableRow>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <TableRow key={`fixed-${row}`}>
                      <TableCell label={row} />
                    </TableRow>
                  ))}
                </tbody>
              </Table>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-[-10px] top-0 h-full w-2.5"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(16,24,40,0.06) 0%, rgba(16,24,40,0.02) 40%, rgba(16,24,40,0.00) 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-[16px] text-nav-link">Sticky Behavior</h2>
        <div className="overflow-x-auto">
          <Table className="min-w-[1704px]">
            <thead>
              <TableRow>
                <TableHeaderCell fixed="left">Fixed Left</TableHeaderCell>
                <TableHeaderCell fixed="left" fixedOffset={284}>
                  Left + Offset
                </TableHeaderCell>
                <TableHeaderCell>Col 3</TableHeaderCell>
                <TableHeaderCell>Col 4</TableHeaderCell>
                <TableHeaderCell>Col 5</TableHeaderCell>
                <TableHeaderCell>Col 6</TableHeaderCell>
                <TableHeaderCell fixed="right">Fixed Right</TableHeaderCell>
              </TableRow>
            </thead>
            <tbody>
              {rows.map((row) => (
                <TableRow key={`sticky-${row}`}>
                  <TableCell fixed="left" label={row} />
                  <TableCell
                    fixed="left"
                    fixedOffset={284}
                    label={`Offset ${row}`}
                  />
                  <TableCell label={`Value ${row}`} />
                  <TableCell type="text-icon" label={row} />
                  <TableCell
                    type="text-image"
                    label={row}
                    imageSrc={MOCK_IMAGE}
                  />
                  <TableCell type="tag" tagText="Tag" />
                  <TableCell
                    fixed="right"
                    type="checkbox"
                    selected={row.endsWith("1")}
                  />
                </TableRow>
              ))}
            </tbody>
          </Table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-[16px] text-nav-link">Shadow Utility Props</h2>
        <Table responsive={false} className="w-[852px]">
          <thead>
            <TableRow>
              <TableHeaderCell>Default</TableHeaderCell>
              <TableHeaderCell fixedShadow="left">
                fixedShadow Left
              </TableHeaderCell>
              <TableHeaderCell fixedShadow="right">
                fixedShadow Right
              </TableHeaderCell>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <TableCell label="No shadow" />
              <TableCell label="Shadow left class" fixedShadow="left" />
              <TableCell label="Shadow right class" fixedShadow="right" />
            </TableRow>
          </tbody>
        </Table>
      </section>
    </div>
  );
}
