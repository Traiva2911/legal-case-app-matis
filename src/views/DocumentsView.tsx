import { useState } from "react";
import { documents } from "../data";
import { matches } from "../lib/search";
import { driveFolderUrl } from "../lib/constants";
import { useCaseDispatch, useCaseState } from "../state/caseStore";
import { TitleBlock } from "../components/TitleBlock";
import { EmptyState } from "../components/EmptyState";
import { Highlight } from "../components/Highlight";
import type { CaseDocument } from "../types";

function DocumentIcon({ item }: { item: CaseDocument }) {
  const value = `${item.type} ${item.tags.join(" ")}`.toLocaleLowerCase("cs");
  const kind = value.includes("mail") || value.includes("komunik") ? "mail" : value.includes("tabul") || value.includes("výkaz") ? "sheet" : value.includes("smlouv") || value.includes("dohod") ? "contract" : value.includes("mzd") || value.includes("odměn") ? "pay" : "document";
  return <svg className="document-icon" viewBox="0 0 24 24" aria-hidden="true">
    {kind === "mail" && <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>}
    {kind === "sheet" && <><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h8M11 8v8"/></>}
    {kind === "contract" && <><path d="M6 3h9l3 3v15H6z"/><path d="M14 3v4h4M9 12h6M9 16h4"/></>}
    {kind === "pay" && <><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M7 10h10M7 15h4M16 14v2"/></>}
    {kind === "document" && <><path d="M6 3h9l3 3v15H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/></>}
  </svg>;
}

export function DocumentsView() {
  const state = useCaseState(); const dispatch = useCaseDispatch();
  const [mode, setMode] = useState<"list" | "grid">("list");
  const items = documents.filter((item) => matches(item, state.query, state.filters));
  const select = (id: string) => dispatch({ type: "SELECT", id });
  return <section className="view" data-view="documents">
    <TitleBlock title="Dokumenty" subtitle={<>Soubory ve spisu a na <a href={driveFolderUrl} target="_blank" rel="noopener noreferrer">Google Drive</a>. Kliknutím na položku otevřeš detail.</>} />
    <div className="document-toolbar" role="group" aria-label="Způsob zobrazení dokumentů">
      <button type="button" className={mode === "list" ? "active" : ""} aria-pressed={mode === "list"} onClick={() => setMode("list")}>Seznam</button>
      <button type="button" className={mode === "grid" ? "active" : ""} aria-pressed={mode === "grid"} onClick={() => setMode("grid")}>Mřížka</button>
    </div>
    {items.length ? <div className={`document-browser document-${mode}`}>
      {items.map((item) => <div className="document-item" key={item.id} role="button" tabIndex={0} onClick={() => select(item.id)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(item.id); } }}>
        <DocumentIcon item={item}/><div className="document-name"><strong><Highlight text={item.title}/></strong><small>{item.type} · {item.date}</small></div>
        {item.file ? <a href={item.file} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>Otevřít ↗</a> : <span className="document-missing">—</span>}
      </div>)}
    </div> : <EmptyState/>}
  </section>;
}
