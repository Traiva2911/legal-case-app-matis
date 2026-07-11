import { useCaseDispatch } from "../state/caseStore";
import { TitleBlock } from "../components/TitleBlock";

export function ExportView() {
  const dispatch = useCaseDispatch();
  return (
    <section className="view" data-view="export">
      <TitleBlock title="Export do PDF" subtitle="Export používá tiskový dialog prohlížeče. Zvolte Uložit jako PDF." />
      <article className="card summary-panel">
        <h2>Možnosti exportu</h2>
        <p>
          Kompletní spis obsahuje dashboard, časovou osu, podklady, osoby i dokumenty. Filtrování a vyhledávání můžete použít před
          exportem pro užší výstup.
        </p>
        <div className="export-actions">
          <button className="primary-button" type="button" onClick={() => window.print()}>
            Exportovat celý spis
          </button>
          <button className="ghost-button" type="button" onClick={() => dispatch({ type: "SET_VIEW", view: "timeline" })}>
            Pouze časová osa
          </button>
          <button className="ghost-button" type="button" onClick={() => dispatch({ type: "SET_VIEW", view: "evidence" })}>
            Pouze podklady
          </button>
        </div>
      </article>
    </section>
  );
}
