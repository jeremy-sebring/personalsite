// RoleDrawer.tsx — inner content of the role detail drawer.
// The Sheet shell/scrim/animation/X is provided by SheetContent in the parent.

import type { Role } from "@/data/work";
import { SheetTitle } from "@/components/ui/sheet";
import { RoleTag, Dates, Chips } from "./parts";

export function RoleDrawer({ role, company }: { role: Role; company: string }) {
  return (
    // .sb-sheet is required — work.css styles drawer typography via
    // descendant selectors (.sb-sheet p, .sb-sheet .md-h3).
    <div className="sb-sheet">
      <div className="sb-sheet-head">
        <RoleTag cat={role.cat} />
        {/* SheetTitle satisfies Radix Dialog's required accessible title */}
        <SheetTitle className="sb-sheet-title">{role.title}</SheetTitle>
        <p className="sb-sheet-meta">@{company}</p>
        <p className="sb-sheet-meta">
          <Dates role={role} />
        </p>
      </div>

      <h3 className="md-h3">Summary</h3>
      <p>{role.summary}</p>

      {role.outcomes && role.outcomes.length > 0 && (
        <>
          <h3 className="md-h3">Outcomes</h3>
          <div className="sb-outcomes">
            {role.outcomes.map((o, i) => (
              <div className="sb-outcome" key={i}>
                <span className="sb-outcome-v">{o.value}</span>
                <span className="sb-outcome-l">{o.label}</span>
              </div>
            ))}
          </div>
        </>
      )}

      {role.highlights && role.highlights.length > 0 && (
        <>
          <h3 className="md-h3">Achievements</h3>
          <ul className="sb-bullets">
            {role.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </>
      )}

      <h3 className="md-h3">Stack</h3>
      {role.stack && role.stack.length ? (
        <Chips items={role.stack} />
      ) : (
        <p className="sb-ph sb-ph-inline">
          {"// tools + tech — tell me what you used here"}
        </p>
      )}
    </div>
  );
}
