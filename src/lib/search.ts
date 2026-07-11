import type { TagId } from "../types";

/** Same semantics as the legacy app: search across every field, not just titles. */
export function matches<T extends { tags: TagId[] }>(item: T, query: string, filters: Set<TagId>): boolean {
  const q = query.trim().toLowerCase();
  const text = JSON.stringify(item).toLowerCase();
  const queryMatch = !q || text.includes(q);
  const filterMatch = filters.size === 0 || [...filters].some((tag) => item.tags?.includes(tag));
  return queryMatch && filterMatch;
}

/** Splits `text` into plain/matched segments around `query` (case-insensitive) for <Highlight>. */
export function splitOnQuery(text: string, query: string): { text: string; match: boolean }[] {
  const q = query.trim();
  if (!q) return [{ text, match: false }];
  const lower = text.toLowerCase();
  const qLower = q.toLowerCase();
  const parts: { text: string; match: boolean }[] = [];
  let i = 0;
  while (i < text.length) {
    const idx = lower.indexOf(qLower, i);
    if (idx === -1) {
      parts.push({ text: text.slice(i), match: false });
      break;
    }
    if (idx > i) parts.push({ text: text.slice(i, idx), match: false });
    parts.push({ text: text.slice(idx, idx + q.length), match: true });
    i = idx + q.length;
  }
  return parts;
}
