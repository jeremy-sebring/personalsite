// utils.ts — date/tenure helpers and category config for the /work timeline.
// Ported from design_handoff_work_experience/work/data.jsx and layouts.jsx.

import { Briefcase, Code2, Server, LifeBuoy, type LucideIcon } from "lucide-react";
import type { Category, Company } from "@/data/work";

// ---- date helpers -------------------------------------------------------

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

/** 0-indexed month + year */
export interface YM { m: number; y: number }

/**
 * Parse a "MM/YYYY" date string into a YM.
 * Returns null for null, empty string, or any string matching /present/i.
 */
export function parseMY(s: string | null): YM | null {
  if (!s || /present/i.test(s)) return null;
  const [m, y] = s.split("/").map(Number);
  return { m: m - 1, y };
}

/**
 * Inclusive month count between a (start) and b (end).
 * When b is null the end is treated as the current month (new Date()).
 */
export function monthsBetween(a: YM, b: YM | null): number {
  const end = b || { m: new Date().getMonth(), y: new Date().getFullYear() };
  return (end.y - a.y) * 12 + (end.m - a.m) + 1;
}

/**
 * Format a month count as a human-readable duration.
 * Examples: 60 → "5 yr", 26 → "2 yr 2 mo", 7 → "7 mo"
 */
export function fmtDur(n: number): string {
  const y = Math.floor(n / 12), m = n % 12;
  if (y && m) return `${y} yr ${m} mo`;
  if (y) return `${y} yr`;
  return `${m} mo`;
}

/**
 * Format a "MM/YYYY" string as a short month+year label.
 * null or /present/i → "Present"
 */
export function fmtMY(s: string | null): string {
  if (!s) return "Present";
  if (/present/i.test(s)) return "Present";
  const p = parseMY(s);
  return `${MONTHS[p!.m]} ${p!.y}`;
}

// ---- tenure -------------------------------------------------------------

export interface Tenure {
  /** "MM/YYYY" zero-padded — earliest start across all company roles */
  startStr: string;
  /** "MM/YYYY" zero-padded — latest end, or null if any role is ongoing */
  endStr: string | null;
  /** inclusive month count from startStr to endStr (or now) */
  months: number;
}

/**
 * Compute the overall tenure for a company by spanning across all its roles:
 * earliest start → latest end (null if any role is ongoing).
 */
export function tenure(company: Company): Tenure {
  const starts = company.roles.map(r => parseMY(r.start)).filter((x): x is YM => x !== null);
  const ends = company.roles.map(r => (r.end ? parseMY(r.end) : null));
  const ongoing = ends.some(e => e === null);

  const start = starts.reduce((a, b) => (a.y * 12 + a.m <= b.y * 12 + b.m ? a : b));

  let endStr: string | null;
  if (ongoing) {
    endStr = null;
  } else {
    const validEnds = ends.filter((e): e is YM => e !== null);
    const end = validEnds.reduce((a, b) => (a.y * 12 + a.m >= b.y * 12 + b.m ? a : b));
    endStr = `${String(end.m + 1).padStart(2, "0")}/${end.y}`;
  }

  const startStr = `${String(start.m + 1).padStart(2, "0")}/${start.y}`;
  const months = monthsBetween(start, endStr ? parseMY(endStr) : null);

  return { startStr, endStr, months };
}

// ---- category config ----------------------------------------------------

export interface CatConfig { label: string; tint: string; Icon: LucideIcon }

export const CATS: Record<Category, CatConfig> = {
  leadership:  { label: "Leadership",     tint: "var(--brand-sage)",   Icon: Briefcase },
  engineering: { label: "Engineering",    tint: "var(--brand-mist)",   Icon: Code2 },
  infra:       { label: "Infrastructure", tint: "var(--brand-meadow)", Icon: Server },
  support:     { label: "Support",        tint: "var(--fg-muted)",     Icon: LifeBuoy },
};
