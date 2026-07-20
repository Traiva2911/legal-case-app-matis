export type DeadlineKind = "prekluze" | "lhuta" | "info" | "hotovo";

export interface Deadline {
  id: string;
  label: string;
  dateISO: string;
  kind: DeadlineKind;
  note?: string;
}

export const deadlines: Deadline[] = [
  { id: "zaloba-72", label: "Žaloba na neplatnost OZP (§ 72 ZP)", dateISO: "2026-09-15", kind: "prekluze", note: "Prekluzivní lhůta — zmeškání = zánik práva." },
  { id: "protest-208", label: "Reakce zaměstnavatele na protest (§ 208)", dateISO: "2026-07-28", kind: "lhuta" },
  { id: "eldp-2026", label: "ELDP 2026 na ČSSZ", dateISO: "2026-08-15", kind: "info", note: "Zaměstnavatel má podat do 30 dnů od skončení PP." },
  { id: "oznameni-69", label: "Oznámení § 69 (trvám na zaměstnávání)", dateISO: "2026-07-20", kind: "hotovo" },
];
