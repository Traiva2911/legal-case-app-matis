import { useEffect, useRef } from "react";
import type { ViewId } from "../types";
import { useCaseDispatch, useCaseState } from "./caseStore";

const VALID_VIEWS: ViewId[] = ["dashboard", "timeline", "evidence", "people", "documents", "notes", "export"];

function parseHash(hash: string): { view?: ViewId; id?: string } {
  const clean = hash.replace(/^#\/?/, "");
  const [viewPart, queryPart] = clean.split("?");
  const view = VALID_VIEWS.includes(viewPart as ViewId) ? (viewPart as ViewId) : undefined;
  const id = queryPart ? new URLSearchParams(queryPart).get("id") ?? undefined : undefined;
  return { view, id };
}

/** Keeps the URL hash in sync with view/selection for shareable deep links, e.g. #/evidence?id=e-gps. */
export function useHashSync() {
  const state = useCaseState();
  const dispatch = useCaseDispatch();
  const hydrated = useRef(false);

  useEffect(() => {
    const { view, id } = parseHash(window.location.hash);
    if (view || id) dispatch({ type: "HYDRATE", view, selectedId: id ?? null });
    hydrated.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!hydrated.current) return;
    const next = state.selectedId ? `#/${state.view}?id=${state.selectedId}` : `#/${state.view}`;
    if (window.location.hash !== next) {
      window.history.replaceState(null, "", next);
    }
  }, [state.view, state.selectedId]);
}
