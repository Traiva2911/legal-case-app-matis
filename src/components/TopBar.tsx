import { useCaseDispatch, useCaseState } from "../state/caseStore";

export function TopBar({ onMenuClick }: { onMenuClick: () => void }) {
  const state = useCaseState();
  const dispatch = useCaseDispatch();

  return (
    <header className="topbar">
      <button className="icon-button menu-button" type="button" aria-label="Otevřít menu" title="Menu" onClick={onMenuClick}>
        ☰
      </button>
      <div className="search-wrap">
        <label className="sr-only" htmlFor="globalSearch">
          Vyhledávání
        </label>
        <input
          id="globalSearch"
          type="search"
          placeholder="Hledat GPS, Odoo, mzda, osoba, důkaz..."
          autoComplete="off"
          value={state.query}
          onChange={(event) => dispatch({ type: "SET_QUERY", query: event.target.value })}
        />
      </div>
      {state.query.trim() !== "" && (
        <button
          className="ghost-button clear-button"
          type="button"
          aria-label="Vymazat hledání"
          title="Vymazat hledání"
          onClick={() => {
            dispatch({ type: "CLEAR_SEARCH" });
          }}
        >
          ✕
        </button>
      )}
    </header>
  );
}
