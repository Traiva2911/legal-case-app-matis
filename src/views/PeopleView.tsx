import { people } from "../data";
import { matches } from "../lib/search";
import { useCaseDispatch, useCaseState } from "../state/caseStore";
import { TitleBlock } from "../components/TitleBlock";
import { TagRow } from "../components/TagRow";
import { EmptyState } from "../components/EmptyState";
import { CardShell } from "../components/CardShell";
import { Highlight } from "../components/Highlight";
import type { Person } from "../types";

function PersonCard({ item }: { item: Person }) {
  const dispatch = useCaseDispatch();
  return (
    <CardShell id={item.id} extraClassName="person-card">
      <div className="meta">{item.role}</div>
      <h2 className="section-heading">
        <Highlight text={item.name} />
      </h2>
      <ul className="mini-list">
        <li>
          <span>Dokumenty</span>
          <strong>{item.documents}</strong>
        </li>
        <li>
          <span>Události</span>
          <strong>{item.events}</strong>
        </li>
      </ul>
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

export function PeopleView() {
  const state = useCaseState();
  const items = people.filter((e) => matches(e, state.query, state.filters));
  return (
    <section className="view" data-view="people">
      <TitleBlock title="Přehled osob" subtitle="Profily osob propojují roli, dokumenty, události a související oblasti." />
      {items.length ? (
        <div className="people-grid">
          {items.map((item) => (
            <PersonCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </section>
  );
}
