import { tags } from "../data";
import { useCaseDispatch, useCaseState } from "../state/caseStore";

export function FilterChips() {
  const state = useCaseState();
  const dispatch = useCaseDispatch();

  return (
    <section className="filter-band" aria-label="Filtry témat">
      <div className="filter-row">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`filter-chip${state.filters.has(tag) ? " active" : ""}`}
            type="button"
            aria-pressed={state.filters.has(tag)}
            onClick={() => dispatch({ type: "TOGGLE_FILTER", tag })}
          >
            {tag}
          </button>
        ))}
      </div>
    </section>
  );
}
