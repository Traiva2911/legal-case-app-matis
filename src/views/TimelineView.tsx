import { events } from "../data";
import { matches } from "../lib/search";
import { useCaseDispatch, useCaseState } from "../state/caseStore";
import { TitleBlock } from "../components/TitleBlock";
import { TagRow } from "../components/TagRow";
import { EmptyState } from "../components/EmptyState";
import { Highlight } from "../components/Highlight";
import type { CaseEvent } from "../types";

function TimelineItem({ item, order }: { item: CaseEvent; order: number }) {
  const dispatch = useCaseDispatch();
  return (
    <article className="timeline-item" tabIndex={0} data-card-nav={item.id} onClick={() => dispatch({ type: "SELECT", id: item.id })}>
      <div className="timeline-marker" aria-hidden="true">
        {order}
      </div>
      <div className="timeline-content">
        <div className="meta">{item.date}</div>
        <h2 className="section-heading">
          <Highlight text={item.title} />
        </h2>
        <p className="timeline-text">
          <Highlight text={item.text} />
        </p>
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
      </div>
    </article>
  );
}

export function TimelineView() {
  const state = useCaseState();
  const items = events.filter((e) => matches(e, state.query, state.filters));
  let lastYear: string | null = null;

  return (
    <section className="view" data-view="timeline">
      <TitleBlock title="Časová osa" subtitle="Události, jak jsem je zažila, s odkazy na osoby, podklady a moje poznámky." />
      {items.length ? (
        <div className="timeline">
          {items.map((item, index) => {
            const yearHeading = item.year !== lastYear;
            lastYear = item.year;
            return (
              <div key={item.id}>
                {yearHeading && (
                  <div className="timeline-era">
                    <span>{item.year}</span>
                  </div>
                )}
                <TimelineItem item={item} order={index + 1} />
              </div>
            );
          })}
        </div>
      ) : (
        <EmptyState />
      )}
    </section>
  );
}
