import { evidence } from "../data";
import { matches } from "../lib/search";
import { useCaseDispatch, useCaseState } from "../state/caseStore";
import { TitleBlock } from "../components/TitleBlock";
import { TagRow } from "../components/TagRow";
import { EmptyState } from "../components/EmptyState";
import { CardShell } from "../components/CardShell";
import { Highlight } from "../components/Highlight";
import type { Evidence } from "../types";

function EvidenceCard({ item }: { item: Evidence }) {
  const dispatch = useCaseDispatch();
  return (
    <CardShell id={item.id} extraClassName="evidence-card">
      <div className="meta">
        {item.type} · {item.date}
      </div>
      <h2 className="section-heading">
        <Highlight text={item.title} />
      </h2>
      <div className="strength">{"★".repeat(item.strength)}{"☆".repeat(5 - item.strength)}</div>
      <p className="tagline">{item.proves.join(", ")}</p>
      {item.risk && <p className="tagline">Poznámka: {item.risk}</p>}
      <TagRow tags={item.tags} />
      <button
        className="ghost-button"
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          dispatch({ type: "SELECT", id: item.id });
        }}
      >
        Detail
      </button>
    </CardShell>
  );
}

export function EvidenceView() {
  const state = useCaseState();
  const items = evidence.filter((e) => matches(e, state.query, state.filters));
  return (
    <section className="view" data-view="evidence">
      <TitleBlock
        title="Moje podklady"
        subtitle="U každého podkladu uvádím, co podle mě dokládá, jak je pro mě důležitý a co k němu ještě musím dohledat."
      />
      {items.length ? (
        <div className="evidence-grid">
          {items.map((item) => (
            <EvidenceCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </section>
  );
}
