import { useEffect } from "react";
import { useCaseDispatch, useCaseState } from "../state/caseStore";

const CARD_SELECTOR = "[data-card-nav]";

/**
 * Global keyboard shortcuts: "/" focuses search, Esc closes the detail panel,
 * Enter activates a focused card, arrow keys move focus between cards in the
 * current view (roving tabindex — cards themselves stay in normal tab order).
 */
export function useKeyboardNav() {
  const state = useCaseState();
  const dispatch = useCaseDispatch();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement;
      const inField = target.tagName === "INPUT" || target.tagName === "TEXTAREA";

      if (event.key === "/" && !inField) {
        event.preventDefault();
        document.getElementById("globalSearch")?.focus();
        return;
      }

      if (event.key === "Escape" && state.selectedId) {
        dispatch({ type: "SELECT", id: null });
        return;
      }

      if (inField) return;

      const cards = Array.from(document.querySelectorAll<HTMLElement>(CARD_SELECTOR));
      if (cards.length === 0) return;
      const currentIndex = cards.indexOf(document.activeElement as HTMLElement);

      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        event.preventDefault();
        const next = cards[Math.min(currentIndex + 1, cards.length - 1)] ?? cards[0];
        next.focus();
      } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        event.preventDefault();
        const prev = cards[Math.max(currentIndex - 1, 0)] ?? cards[0];
        prev.focus();
      } else if (event.key === "Enter" && currentIndex >= 0) {
        const id = cards[currentIndex].dataset.cardNav;
        if (id) dispatch({ type: "SELECT", id });
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [state.selectedId, dispatch]);
}
