// parts.tsx — shared presentational pieces for the /work timeline.

import type { Role } from "@/data/work";
import type { Category } from "@/data/work";
import { CATS, fmtMY } from "./utils";

/** Category pill: glyph + label, tinted via inline --tag CSS variable. */
export function RoleTag({ cat }: { cat: Category }) {
  const { Icon, tint, label } = CATS[cat];
  return (
    <span
      className="sb-tag"
      style={{ ["--tag" as string]: tint } as React.CSSProperties}
    >
      <Icon size={12} strokeWidth={1.8} />
      {label}
    </span>
  );
}

/** Date range span — duration text is OFF in this config. */
export function Dates({ role }: { role: Role }) {
  return (
    <span className="sb-dates">
      {fmtMY(role.start)} – {fmtMY(role.end)}
    </span>
  );
}

/** Chip row for tech stack items. */
export function Chips({ items }: { items: string[] }) {
  return (
    <div className="sb-chiprow">
      {items.map((s, i) => (
        <span key={i} className="sb-chip">
          {s}
        </span>
      ))}
    </div>
  );
}
