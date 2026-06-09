// WorkTimeline.tsx — client island for the /work alternating timeline.

import { useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { CompanyCard, Marker } from "./CompanyCard";
import { RoleDrawer } from "./RoleDrawer";
import type { Company, Role } from "@/data/work";

export default function WorkTimeline({ data }: { data: Company[] }) {
  const [open, setOpen] = useState<{ role: Role; company: string } | null>(null);
  const onOpen = (role: Role, company: string) => setOpen({ role, company });

  return (
    <>
      <div className="sb-timeline sb-alt">
        <div className="sb-timeline-spine">
          {data.map((company, i) => (
            <div
              className={"sb-tl-row sb-tl-" + (i % 2 === 0 ? "right" : "left")}
              key={company.company}
            >
              <Marker company={company} />
              <div className="sb-tl-card-wrap">
                <CompanyCard company={company} onOpen={onOpen} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Sheet open={!!open} onOpenChange={(o) => { if (!o) setOpen(null); }}>
        <SheetContent
          side="right"
          aria-describedby={undefined}
          className="not-prose w-[min(440px,94vw)] sm:max-w-none overflow-y-auto border-l border-[var(--line)] bg-[var(--bg-elev1)] px-[26px] pt-[26px] pb-[40px]"
        >
          {open && <RoleDrawer role={open.role} company={open.company} />}
        </SheetContent>
      </Sheet>
    </>
  );
}
