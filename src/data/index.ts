import type { CaseEvent, Evidence } from "../types";
import { rawEvents } from "./events";
import { rawEvidence } from "./evidence";
import { personAlias, evidenceAlias, documentAlias } from "./relations";

export { people } from "./people";
export { documents } from "./documents";
export { lawyerQuestions } from "./lawyerQuestions";
export { tags } from "./tags";
export { navItems } from "./navItems";

/**
 * Ref strings that didn't resolve via the alias maps. Populated as
 * events/evidence are resolved below. Genuinely free-text citations (no
 * dedicated card ever existed for them) end up here too — that's expected.
 * The integrity test asserts every alias that DOES exist points at a real
 * ID, not that this array is empty.
 */
export const unresolvedRefs: { source: string; ref: string; kind: "person" | "evidence-or-document" }[] = [];

function resolvePersonIds(refs: string[], source: string): string[] {
  const ids: string[] = [];
  for (const ref of refs) {
    const id = personAlias[ref];
    if (id) ids.push(id);
    else unresolvedRefs.push({ source, ref, kind: "person" });
  }
  return Array.from(new Set(ids));
}

function resolveEvidenceAndDocumentIds(
  refs: string[],
  source: string
): { evidenceIds: string[]; documentIds: string[] } {
  const evidenceIds: string[] = [];
  const documentIds: string[] = [];
  for (const ref of refs) {
    const eId = evidenceAlias[ref];
    const dId = documentAlias[ref];
    if (eId) evidenceIds.push(eId);
    else if (dId) documentIds.push(dId);
    else unresolvedRefs.push({ source, ref, kind: "evidence-or-document" });
  }
  return { evidenceIds: Array.from(new Set(evidenceIds)), documentIds: Array.from(new Set(documentIds)) };
}

// Zdrojove pole je v poradi, v jakem udalosti pribyvaly; osa se radi podle `sort`.
export const events: CaseEvent[] = rawEvents
  .map((e) => {
    const relatedPersonIds = resolvePersonIds(e.personRefs, e.id);
    const { evidenceIds, documentIds } = resolveEvidenceAndDocumentIds(e.evidenceRefs, e.id);
    return { ...e, relatedPersonIds, relatedEvidenceIds: evidenceIds, relatedDocumentIds: documentIds };
  })
  .sort((a, b) => a.sort.localeCompare(b.sort));

export const evidence: Evidence[] = rawEvidence.map((e) => {
  const relatedPersonIds = resolvePersonIds(e.personRefs, e.id);
  return { ...e, relatedPersonIds };
});
