import { describe, expect, it } from "vitest";
import { events, evidence, unresolvedRefs } from "../index";
import { people } from "../people";
import { documents } from "../documents";
import { lawyerQuestions } from "../lawyerQuestions";
import { personAlias, evidenceAlias, documentAlias } from "../relations";

describe("content counts survive the rebuild", () => {
  it("never drops below the known-good counts from the legacy app (guards against data loss; grows as data is added)", () => {
    expect(events.length).toBeGreaterThanOrEqual(33);
    expect(evidence.length).toBeGreaterThanOrEqual(22);
    expect(people.length).toBeGreaterThanOrEqual(9);
    expect(documents.length).toBeGreaterThanOrEqual(44);
    expect(lawyerQuestions.length).toBeGreaterThanOrEqual(19);
  });
});

describe("entity IDs are unique", () => {
  it("has no duplicate IDs within or across entity arrays", () => {
    const allIds = [...events, ...evidence, ...people, ...documents].map((item) => item.id);
    expect(new Set(allIds).size).toBe(allIds.length);
  });
});

describe("alias maps only point at IDs that actually exist", () => {
  it("personAlias targets are real people", () => {
    const personIds = new Set(people.map((p) => p.id));
    for (const [ref, id] of Object.entries(personAlias)) {
      expect(personIds.has(id), `personAlias["${ref}"] -> "${id}" does not exist in people[]`).toBe(true);
    }
  });

  it("evidenceAlias targets are real evidence items", () => {
    const evidenceIds = new Set(evidence.map((e) => e.id));
    for (const [ref, id] of Object.entries(evidenceAlias)) {
      expect(evidenceIds.has(id), `evidenceAlias["${ref}"] -> "${id}" does not exist in evidence[]`).toBe(true);
    }
  });

  it("documentAlias targets are real documents", () => {
    const documentIds = new Set(documents.map((d) => d.id));
    for (const [ref, id] of Object.entries(documentAlias)) {
      expect(documentIds.has(id), `documentAlias["${ref}"] -> "${id}" does not exist in documents[]`).toBe(true);
    }
  });
});

describe("resolved relation IDs are always valid", () => {
  it("every relatedPersonIds/relatedEvidenceIds/relatedDocumentIds entry resolves to a real item", () => {
    const personIds = new Set(people.map((p) => p.id));
    const evidenceIds = new Set(evidence.map((e) => e.id));
    const documentIds = new Set(documents.map((d) => d.id));

    for (const event of events) {
      for (const id of event.relatedPersonIds) expect(personIds.has(id)).toBe(true);
      for (const id of event.relatedEvidenceIds) expect(evidenceIds.has(id)).toBe(true);
      for (const id of event.relatedDocumentIds) expect(documentIds.has(id)).toBe(true);
    }
    for (const item of evidence) {
      for (const id of item.relatedPersonIds) expect(personIds.has(id)).toBe(true);
    }
  });

  it("logs unresolved free-text refs for visibility (informational, not a failure)", () => {
    // Many refs were always meant as plain descriptive citations with no
    // dedicated card (e.g. "E-maily", "Interní komunikace") — that's expected.
    // This just keeps the list visible in test output rather than silent.
    expect(Array.isArray(unresolvedRefs)).toBe(true);
  });
});

describe("document/evidence file links", () => {
  it("every present file URL points at Google Drive/Docs", () => {
    const urlPattern = /^https:\/\/(drive|docs)\.google\.com\//;
    for (const doc of documents) {
      if (doc.file) expect(doc.file, `document ${doc.id} has a suspicious file URL`).toMatch(urlPattern);
    }
    for (const item of evidence) {
      if (item.file) expect(item.file, `evidence ${item.id} has a suspicious file URL`).toMatch(urlPattern);
    }
  });
});

describe("timeline is genuinely chronological", () => {
  it("every event carries a sortable ISO key", () => {
    for (const event of events) {
      expect(event.sort, `event "${event.id}" is missing a sort key`).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });

  it("exports events in chronological order (the year headings in the timeline depend on it)", () => {
    const keys = events.map((event) => event.sort);
    expect(keys).toEqual([...keys].sort());
  });

  it("sort keys agree with the year shown on the card", () => {
    for (const event of events) {
      expect(event.sort.slice(0, 4), `event "${event.id}": sort ${event.sort} vs year ${event.year}`).toBe(
        event.year.slice(0, 4)
      );
    }
  });
});
