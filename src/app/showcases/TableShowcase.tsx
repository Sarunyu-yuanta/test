import { useMemo, useState } from "react";
import {
  BriefcaseIcon,
  CheckIcon,
  CheckCircleIcon,
} from "@phosphor-icons/react";
import {
  Table,
  TableCell,
  TableHeaderCell,
  TableRow,
} from "@/components/table";
import { ShowcasePage } from "../components/ShowcasePage";
import { ComponentPlayground } from "../components/ComponentPlayground";

const IMAGE_SRC =
  "https://images.unsplash.com/photo-1740252117044-2af197eea287?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const BASE_ROWS = [
  { id: "r-01", name: "Naris",      role: "Product Designer",  status: "Active" as const },
  { id: "r-02", name: "Ariya",      role: "Frontend Engineer", status: "Leave"  as const },
  { id: "r-03", name: "Pimchanok",  role: "Data Analyst",      status: "Active" as const },
  { id: "r-04", name: "Thanawat",   role: "Product Owner",     status: "Leave"  as const },
];

function TablePreview({
  selectable,
  sortable,
}: {
  selectable: boolean;
  sortable: boolean;
}) {
  const [selectedRowIds, setSelectedRowIds] = useState<string[]>([]);
  const [sortKey, setSortKey] = useState<"name" | "status" | "none">("none");
  const [sortDir, setSortDir] = useState<"none" | "asc" | "desc">("none");

  const rows = useMemo(() => {
    if (sortDir === "none" || sortKey === "none") return BASE_ROWS;
    const sorted = [...BASE_ROWS].sort((a, b) =>
      sortKey === "name" ? a.name.localeCompare(b.name) : a.status.localeCompare(b.status),
    );
    return sortDir === "asc" ? sorted : sorted.reverse();
  }, [sortKey, sortDir]);

  const allSelected = rows.length > 0 && selectedRowIds.length === rows.length;
  const someSelected = selectedRowIds.length > 0 && !allSelected;

  const toggleRow = (id: string) =>
    setSelectedRowIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );

  return (
    <div className="overflow-x-auto [scrollbar-width:none] w-full">
      <section
        className="rounded-[12px] overflow-hidden"
        style={{ boxShadow: "0 0 2px 0 rgba(102,102,102,0.16), 0 4px 8px 0 rgba(102,102,102,0.12)" }}
      >
        <Table className="min-w-[800px]">
          <thead>
            <TableRow>
              {selectable && (
                <TableHeaderCell
                  type="check"
                  fixed="left"
                  fixedOffset={0}
                  checkState={allSelected ? true : someSelected ? "indeterminate" : false}
                  onCheckChange={(next) =>
                    setSelectedRowIds(next ? rows.map((r) => r.id) : [])
                  }
                />
              )}
              <TableHeaderCell
                type="icon"
                fixed="left"
                fixedOffset={selectable ? 56 : 0}
                icon={<CheckIcon size={20} weight="regular" className="text-subtle-text" />}
              />
              <TableHeaderCell>Profile</TableHeaderCell>
              <TableHeaderCell
                sortDirection={sortable && sortKey === "name" ? sortDir : "none"}
                onSortChange={sortable ? (next) => { setSortKey(next === "none" ? "none" : "name"); setSortDir(next); } : undefined}
              >
                User
              </TableHeaderCell>
              <TableHeaderCell>Action</TableHeaderCell>
              <TableHeaderCell
                sortDirection={sortable && sortKey === "status" ? sortDir : "none"}
                onSortChange={sortable ? (next) => { setSortKey(next === "none" ? "none" : "status"); setSortDir(next); } : undefined}
              >
                Status
              </TableHeaderCell>
            </TableRow>
          </thead>
          <tbody>
            {rows.map((row) => {
              const checked = selectedRowIds.includes(row.id);
              return (
                <TableRow key={row.id} selected={checked} hoverable>
                  {selectable && (
                    <TableCell
                      type="checkbox"
                      fixed="left"
                      fixedOffset={0}
                      onClick={() => toggleRow(row.id)}
                    />
                  )}
                  <TableCell
                    type="icon"
                    fixed="left"
                    fixedOffset={selectable ? 56 : 0}
                    icon={<CheckCircleIcon size={20} weight="regular" className="text-subtle-text" />}
                  />
                  <TableCell
                    type="text-icon"
                    label={row.role}
                    icon={<BriefcaseIcon size={20} weight="regular" className="text-subtle-text" />}
                  />
                  <TableCell
                    type="text-image"
                    textStyle="bold-description"
                    label={row.name}
                    description="Team Member"
                    imageSrc={IMAGE_SRC}
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
    </div>
  );
}

export function TableShowcase() {
  return (
    <ShowcasePage
      name="Table"
      description="Data table with sorting, selection, and action column support."
    >
      <ComponentPlayground
        
        previewClassName="!items-start !justify-start p-6"
        controls={[
          { type: "boolean", key: "selectable", label: "Selectable", defaultValue: true },
          { type: "boolean", key: "sortable",   label: "Sortable",   defaultValue: true },
        ]}
        render={({ selectable, sortable }) => {
          const sel = selectable as boolean;
          const sor = sortable as boolean;
          const checkboxHeader = sel
            ? `\n      <TableHeaderCell type="check" checkState={allSelected ? true : someSelected ? "indeterminate" : false} onCheckChange={handleSelectAll} />`
            : "";
          const checkboxCell = sel
            ? `\n          <TableCell type="checkbox" onClick={() => toggleRow(row.id)} />`
            : "";
          const sortNameProp = sor ? `\n        sortDirection={sortKey === "name" ? sortDir : "none"}\n        onSortChange={(next) => handleSort("name", next)}` : "";
          const sortStatusProp = sor ? `\n        sortDirection={sortKey === "status" ? sortDir : "none"}\n        onSortChange={(next) => handleSort("status", next)}` : "";

          return {
            preview: <TablePreview selectable={sel} sortable={sor} />,
            code: `<Table>
  <thead>
    <TableRow>${checkboxHeader}
      <TableHeaderCell${sortNameProp}>Name</TableHeaderCell>
      <TableHeaderCell>Role</TableHeaderCell>
      <TableHeaderCell${sortStatusProp}>Status</TableHeaderCell>
    </TableRow>
  </thead>
  <tbody>
    {rows.map((row) => (
      <TableRow key={row.id} selected={selected.includes(row.id)} hoverable>${checkboxCell}
        <TableCell type="text-image" label={row.name} imageSrc={row.avatar} />
        <TableCell>{row.role}</TableCell>
        <TableCell type="tag" tagText={row.status} tagVariant={row.status === "Active" ? "green" : "red"} />
      </TableRow>
    ))}
  </tbody>
</Table>`,
          };
        }}
      />
    </ShowcasePage>
  );
}
