export type ClaimStatus = "uplatneno" | "k-uplatneni" | "sporne" | "bezi";
export type ClaimGroup = "vycislene" | "odhad" | "variabilni";

export interface Claim {
  id: string;
  label: string;
  amount: number | null;
  basis: string;
  status: ClaimStatus;
  group: ClaimGroup;
  note?: string;
}

export const claims: Claim[] = [
  {
    id: "nahrada-208",
    label: "Náhrada mzdy za červen (§ 208)",
    amount: 65899,
    basis: "§ 208 ZP",
    status: "uplatneno",
    group: "vycislene",
  },
  {
    id: "premie",
    label: "Nevyplacené prémie (roční)",
    amount: 402397,
    basis: "mzdové nároky",
    status: "sporne",
    group: "vycislene",
  },
  {
    id: "opce",
    label: "Opce na 10 % obchodní podíl",
    amount: 2200000,
    basis: "e-mail Ospalíka 4. 8. 2023",
    status: "sporne",
    group: "odhad",
    note: "odhad hodnoty podílu; částečně splaceno (~15 000 Kč/měs. cca 1 rok)",
  },
  {
    id: "nahrada-69",
    label: "Náhrada mzdy za dobu sporu (§ 69)",
    amount: null,
    basis: "§ 69 ZP — od doručení oznámení",
    status: "bezi",
    group: "variabilni",
  },
  {
    id: "odvody",
    label: "Doplatky mzdy a odvodů",
    amount: null,
    basis: "§ 208 / pojistné",
    status: "k-uplatneni",
    group: "variabilni",
  },
];
