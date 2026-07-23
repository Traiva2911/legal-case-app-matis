import { useEffect, useMemo, useState } from "react";
import { events } from "../data";
import { matches } from "../lib/search";
import { useCaseDispatch, useCaseState } from "../state/caseStore";
import { TitleBlock } from "../components/TitleBlock";
import { TagRow } from "../components/TagRow";
import { EmptyState } from "../components/EmptyState";
import { Highlight } from "../components/Highlight";
import type { CaseEvent } from "../types";

/** Nad tuhle délku se text v seznamu sbalí na tři řádky. */
const COLLAPSE_OVER = 320;

function TimelineItem({ item, order, forceOpen }: { item: CaseEvent; order: number; forceOpen: boolean }) {
  const dispatch = useCaseDispatch();
  const [open, setOpen] = useState(false);
  const collapsible = item.text.length > COLLAPSE_OVER;
  const expanded = forceOpen || open || !collapsible;

  return (
    <article
      className="timeline-item"
      tabIndex={0}
      data-card-nav={item.id}
      onClick={() => dispatch({ type: "SELECT", id: item.id })}
    >
      <div className="timeline-marker" aria-hidden="true">
        {order}
      </div>
      <div className="timeline-content">
        <div className="meta">{item.date}</div>
        <h2 className="section-heading">
          <Highlight text={item.title} />
        </h2>
        <p className={`timeline-text${expanded ? "" : " is-clamped"}`}>
          <Highlight text={item.text} />
        </p>
        {collapsible && !forceOpen && (
          <button
            className="read-more"
            type="button"
            aria-expanded={expanded}
            onClick={(event) => {
              event.stopPropagation();
              setOpen((value) => !value);
            }}
          >
            {expanded ? "Sbalit" : "Číst dál"}
          </button>
        )}
        <TagRow tags={item.tags} />
      </div>
    </article>
  );
}

/** Lišta s roky vlevo — skok na rok a zvýraznění toho, ve kterém právě jsem. */
function YearRail({ years, active }: { years: string[]; active: string | null }) {
  if (years.length < 2) return null;
  return (
    <nav className="year-rail" aria-label="Skok na rok">
      {years.map((year) => (
        <button
          key={year}
          type="button"
          className={year === active ? "is-active" : ""}
          aria-current={year === active ? "true" : undefined}
          onClick={() => document.getElementById(`rok-${year}`)?.scrollIntoView({ behavior: "smooth", block: "start" })}
        >
          {year}
        </button>
      ))}
    </nav>
  );
}

export function TimelineView() {
  const state = useCaseState();
  const items = useMemo(() => events.filter((e) => matches(e, state.query, state.filters)), [state.query, state.filters]);
  const years = useMemo(() => Array.from(new Set(items.map((i) => i.year))), [items]);
  const [activeYear, setActiveYear] = useState<string | null>(years[0] ?? null);

  // Který rok je právě nahoře — čte se z pozic hlaviček při scrollování.
  // Aplikace drží všechny pohledy v DOM naráz; když je osa skrytá, mají její
  // hlavičky nulové rozměry a výpočet by vždy skončil u posledního roku.
  useEffect(() => {
    let frame = 0;
    function update() {
      frame = 0;
      const first = years[0] ? document.getElementById(`rok-${years[0]}`) : null;
      if (!first || first.getBoundingClientRect().height === 0) return;
      let current: string | null = years[0] ?? null;
      for (const year of years) {
        const el = document.getElementById(`rok-${year}`);
        if (el && el.getBoundingClientRect().top <= 140) current = year;
      }
      setActiveYear(current);
    }
    function onScroll() {
      if (!frame) frame = requestAnimationFrame(update);
    }
    update();
    // capture: scroll nebublá — takhle chytím i vnitřní scrollovací kontejner.
    document.addEventListener("scroll", onScroll, { passive: true, capture: true });
    return () => {
      document.removeEventListener("scroll", onScroll, { capture: true });
      if (frame) cancelAnimationFrame(frame);
    };
  }, [years, state.view]);

  let lastYear: string | null = null;

  return (
    <section className="view" data-view="timeline">
      <TitleBlock title="Časová osa" subtitle="Události, jak jsem je zažila, s odkazy na osoby, podklady a moje poznámky." />
      {items.length ? (
        <div className="timeline-layout">
          <YearRail years={years} active={activeYear} />
          <div className="timeline">
            {items.map((item, index) => {
              const yearHeading = item.year !== lastYear;
              lastYear = item.year;
              return (
                <div key={item.id}>
                  {yearHeading && (
                    <div className="timeline-era" id={`rok-${item.year}`}>
                      <span>{item.year}</span>
                    </div>
                  )}
                  <TimelineItem
                    item={item}
                    order={index + 1}
                    forceOpen={state.query.trim() !== "" || state.selectedId === item.id}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <EmptyState />
      )}
    </section>
  );
}
