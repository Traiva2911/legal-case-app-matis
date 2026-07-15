import { useEffect, useRef, useState } from "react";
import { events, evidence, people, documents } from "../data";
import { useCaseDispatch, useCaseState } from "../state/caseStore";
import type { DetailItem } from "../types";
import { TagRow } from "./TagRow";
import { Highlight } from "./Highlight";

function toDrivePreviewUrl(url: string): string | null {
  // Google Drive file: /file/d/ID/view → /file/d/ID/preview
  const fileMatch = url.match(/drive\.google\.com\/file\/d\/([^/?]+)/);
  if (fileMatch) return `https://drive.google.com/file/d/${fileMatch[1]}/preview`;
  // Google Docs/Sheets/Slides: /document/d/ID/... → /document/d/ID/preview
  const docsMatch = url.match(/docs\.google\.com\/(document|spreadsheets|presentation)\/d\/([^/?]+)/);
  if (docsMatch) return `https://docs.google.com/${docsMatch[1]}/d/${docsMatch[2]}/preview?embedded=true`;
  return null;
}

function findDetailItem(id: string | null): DetailItem | null {
  if (!id) return null;
  const event = events.find((e) => e.id === id);
  if (event) return { kind: "event", ...event };
  const ev = evidence.find((e) => e.id === id);
  if (ev) return { kind: "evidence", ...ev };
  const person = people.find((e) => e.id === id);
  if (person) return { kind: "person", ...person };
  const doc = documents.find((e) => e.id === id);
  if (doc) return { kind: "document", ...doc };
  return null;
}

function RelatedLinks({ ids, kind, onSelect }: { ids: string[]; kind: "event" | "evidence" | "person" | "document"; onSelect: (id: string) => void }) {
  if (ids.length === 0) return null;
  const source = kind === "event" ? events : kind === "evidence" ? evidence : kind === "person" ? people : documents;
  const label = kind === "event" ? "Událost" : kind === "evidence" ? "Podklad" : kind === "person" ? "Osoba" : "Dokument";
  return (
    <>
      {ids.map((id) => {
        const item = source.find((entry) => entry.id === id);
        if (!item) return null;
        const title = "title" in item ? item.title : "name" in item ? item.name : id;
        return (
          <button key={id} className="related-link" type="button" onClick={() => onSelect(id)}>
            <span className="related-kind">{label}</span> {title}
          </button>
        );
      })}
    </>
  );
}

export function DetailPanel() {
  const state = useCaseState();
  const dispatch = useCaseDispatch();
  const item = findDetailItem(state.selectedId);
  const panelRef = useRef<HTMLDivElement>(null);
  const [docOpen, setDocOpen] = useState(false);

  useEffect(() => {
    if (item) panelRef.current?.focus();
    setDocOpen(false);
  }, [item?.id]);

  if (!item) {
    return (
      <aside className="detail-panel" aria-label="Detail vybrané položky">
        <div className="detail-empty">Vyberte událost, podklad, osobu, dokument nebo částku pro detail.</div>
      </aside>
    );
  }

  const select = (id: string) => dispatch({ type: "SELECT", id });
  const title = item.kind === "person" ? item.name : item.title;
  const meta =
    item.kind === "event" || item.kind === "evidence" || item.kind === "document" ? item.date : item.role;
  const description = item.kind === "event" ? item.text : item.kind === "person" ? item.role : "Položka připravená k doplnění.";

  return (
    <aside className={`detail-panel${item ? " open" : ""}`} aria-label="Detail vybrané položky">
      <article className="detail-card" role="dialog" aria-modal="true" tabIndex={-1} ref={panelRef}>
        <button
          className="icon-button detail-close"
          type="button"
          aria-label="Zavřít detail"
          onClick={() => dispatch({ type: "SELECT", id: null })}
        >
          ✕
        </button>
        <div className="meta">{meta}</div>
        <h2>
          <Highlight text={title} />
        </h2>
        <TagRow tags={item.tags} />

        <div className="detail-section">
          <h3>Popis</h3>
          <p>
            <Highlight text={description} />
          </p>
        </div>

        {item.kind === "event" && item.legal && (
          <div className="detail-section">
            <h3>Moje poznámka</h3>
            <p>{item.legal}</p>
          </div>
        )}

        {item.kind === "evidence" && (
          <div className="detail-section">
            <h3>Podle mě dokládá</h3>
            <p>{item.proves.join(", ")}</p>
          </div>
        )}

        {item.kind === "evidence" && item.risk && (
          <div className="detail-section">
            <h3>K doložení / poznámka</h3>
            <p>{item.risk}</p>
          </div>
        )}

        {(item.kind === "event" || item.kind === "evidence") && item.relatedPersonIds.length > 0 && (
          <div className="detail-section">
            <h3>Osoby</h3>
            <div className="related-links">
              <RelatedLinks ids={item.relatedPersonIds} kind="person" onSelect={select} />
            </div>
          </div>
        )}

        {item.kind === "event" && (item.relatedEvidenceIds.length > 0 || item.relatedDocumentIds.length > 0) && (
          <div className="detail-section">
            <h3>Související podklady</h3>
            <div className="related-links">
              <RelatedLinks ids={item.relatedEvidenceIds} kind="evidence" onSelect={select} />
              <RelatedLinks ids={item.relatedDocumentIds} kind="document" onSelect={select} />
            </div>
          </div>
        )}

        {"file" in item && item.file && (() => {
          const previewUrl = toDrivePreviewUrl(item.file);
          return (
            <div className="detail-section">
              <div className="doc-file-row">
                {previewUrl && (
                  <button
                    className="btn-doc-toggle"
                    type="button"
                    onClick={() => setDocOpen((v) => !v)}
                    aria-expanded={docOpen}
                  >
                    {docOpen ? "▲ Skrýt dokument" : "▼ Zobrazit dokument"}
                  </button>
                )}
                <a className="doc-external-link" href={item.file} target="_blank" rel="noopener noreferrer">
                  Otevřít v Drive ↗
                </a>
              </div>
              {docOpen && previewUrl && (
                <iframe
                  className="doc-preview"
                  src={previewUrl}
                  title="Náhled dokumentu"
                  allow="autoplay"
                />
              )}
            </div>
          );
        })()}
      </article>
    </aside>
  );
}
