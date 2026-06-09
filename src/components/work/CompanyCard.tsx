// CompanyCard.tsx — timeline marker, role rows, and card variants.

import { Sparkles } from "lucide-react";
import type { Company, Role } from "@/data/work";
import { CATS, tenure, fmtMY, fmtDur } from "./utils";
import { RoleTag, Dates } from "./parts";

/** Central spine marker; glows emerald for the current company. */
export function Marker({ company }: { company: Company }) {
  const Icon = CATS[company.roles[0].cat].Icon;
  return (
    <div className={"sb-tl-marker" + (company.current ? " is-active" : "")}>
      <Icon size={16} strokeWidth={1.8} />
    </div>
  );
}

/** Clickable role row used inside multi-role company cards. */
export function RoleLine({
  role,
  companyName,
  current,
  onOpen,
}: {
  role: Role;
  companyName: string;
  current: boolean;
  onOpen: (role: Role, companyName: string) => void;
}) {
  return (
    <button
      className={"sb-roleline" + (current ? " is-current" : "")}
      onClick={() => onOpen(role, companyName)}
    >
      <span className="sb-roleline-main">
        <span className="sb-roleline-title">{role.title}</span>
        <RoleTag cat={role.cat} />
      </span>
      <span className="sb-roleline-sub">
        <Dates role={role} />
      </span>
    </button>
  );
}

/** Company card — renders single-role or multi-role variant. */
export function CompanyCard({
  company,
  onOpen,
}: {
  company: Company;
  onOpen: (role: Role, companyName: string) => void;
}) {
  const multi = company.roles.length > 1;

  if (multi) {
    const t = tenure(company);
    return (
      <div className="sb-card">
        <div className="sb-card-h">
          <p className="sb-card-company">@{company.company}</p>
          <p className="sb-card-tenure">
            {fmtMY(t.startStr)} – {fmtMY(t.endStr)} · {fmtDur(t.months)}
          </p>
          {company.note && <p className="sb-card-note">{company.note}</p>}
        </div>
        <div className="sb-rolelist">
          {company.roles.map((r, i) => (
            <RoleLine
              key={i}
              role={r}
              companyName={company.company}
              current={!!company.current && i === 0}
              onOpen={onOpen}
            />
          ))}
        </div>
      </div>
    );
  }

  // Single-role card
  const top = company.roles[0];
  return (
    // CRITICAL: glow is keyed off company.current, NOT a role field
    <div className={"sb-card" + (company.current ? " is-glow" : "")}>
      <div className="sb-card-h">
        <div className="sb-card-tagrow">
          <RoleTag cat={top.cat} />
          {company.current && (
            <span className="sb-now">
              <Sparkles size={11} strokeWidth={1.8} /> Now
            </span>
          )}
        </div>
        <h4 className="sb-card-title">{top.title}</h4>
        <p className="sb-card-company">@{company.company}</p>
        <p className="sb-card-meta">
          <Dates role={top} />
        </p>
      </div>
      <p className="sb-card-body">{top.summary}</p>
      {top.outcomes && top.outcomes.length > 0 && (
        <div className="sb-card-outcomes">
          {top.outcomes.slice(0, 3).map((o, i) => (
            <span className="sb-mini-outcome" key={i}>
              <b>{o.value}</b> {o.label}
            </span>
          ))}
        </div>
      )}
      <div className="sb-card-footer">
        <button className="sb-link" onClick={() => onOpen(top, company.company)}>
          Learn more?
        </button>
      </div>
    </div>
  );
}
