export type ClaimStatus = "uplatneno" | "k-uplatneni" | "sporne" | "bezi";

export interface Claim {
  id: string;
  label: string;
  amount: number | null;
  basis: string;
  status: ClaimStatus;
}

export const claims: Claim[] = [
  { id: "nahrada-208", label: "Náhrada mzdy za červen (§ 208)", amount: 65899, basis: "§ 208 ZP", status: "uplatneno" },
  { id: "premie", label: "Nevyplacené prémie (roční)", amount: 402397, basis: "mzdové nároky", status: "sporne" },
  { id: "opce", label: "Opce / obchodní podíl", amount: 480000, basis: "ujednání o podílu", status: "sporne" },
  { id: "nahrada-69", label: "Náhrada mzdy za dobu sporu (§ 69)", amount: null, basis: "§ 69 ZP", status: "bezi" },
  { id: "odvody", label: "Doplatky mzdy a odvodů", amount: null, basis: "§ 208 / pojistné", status: "k-uplatneni" },
];
