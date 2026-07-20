import { events, evidence, documents, lawyerQuestions } from "../data";
import { TitleBlock } from "../components/TitleBlock";

function dateValue(date: string) {
  const match = date.match(/(\d{1,2})\.\s*(\d{1,2})\.\s*(\d{4})/);
  return match ? Date.UTC(Number(match[3]), Number(match[2]) - 1, Number(match[1])) : Number.MAX_SAFE_INTEGER;
}

export function ExportView() {
  const chronology = [...events].sort((a, b) => dateValue(a.date) - dateValue(b.date));
  return (
    <section className="view export-view" data-view="export">
      <div className="export-screen">
        <TitleBlock title="Export do PDF" subtitle="Balíček vytvoří tiskový souhrn chronologie, důkazů, dokumentů a otázek. V dialogu zvol Uložit jako PDF." />
        <article className="card summary-panel">
          <h2>Balíček pro advokáta</h2>
          <p>Ucelený pracovní podklad z aktuálních dat spisu.</p>
          <button className="primary-button" type="button" onClick={() => window.print()}>Balíček pro advokáta</button>
        </article>
      </div>

      <article className="lawyer-dossier">
        <header><p>Pracovní podklad</p><h1>Podklady pro advokáta</h1><p>Andrea Matis vs. TRAIVA s.r.o.</p></header>
        <section><h2>1. Chronologie událostí</h2>{chronology.map((item) => <div className="dossier-entry" key={item.id}><time>{item.date}</time><div><h3>{item.title}</h3><p>{item.text}</p>{item.legal && <p><strong>Právní souvislost:</strong> {item.legal}</p>}</div></div>)}</section>
        <section><h2>2. Seznam důkazů</h2><table><thead><tr><th>Důkaz</th><th>Typ / datum</th><th>Síla</th></tr></thead><tbody>{evidence.map((item) => <tr key={item.id}><td><strong>{item.title}</strong><br/>{item.proves.join("; ")}</td><td>{item.type}<br/>{item.date}</td><td>{item.strength}/5</td></tr>)}</tbody></table></section>
        <section><h2>3. Seznam dokumentů</h2><table><thead><tr><th>Dokument</th><th>Typ</th><th>Datum</th></tr></thead><tbody>{documents.map((item) => <tr key={item.id}><td>{item.title}</td><td>{item.type}</td><td>{item.date}</td></tr>)}</tbody></table></section>
        <section><h2>4. Otázky pro advokáta</h2><ol>{lawyerQuestions.map((question) => <li key={question}>{question}</li>)}</ol></section>
      </article>
    </section>
  );
}
