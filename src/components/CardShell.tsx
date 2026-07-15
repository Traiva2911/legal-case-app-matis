import type { ReactNode } from "react";
import { useCaseDispatch } from "../state/caseStore";

/**
 * Shared wrapper for every list card (event/evidence/person/document).
 * Adds roving-tabindex support (data-card-nav, consumed by useKeyboardNav)
 * and makes the whole card clickable to open detail, not just the button.
 */
export function CardShell({ id, extraClassName, children }: { id: string; extraClassName: string; children: ReactNode }) {
  const dispatch = useCaseDispatch();
  return (
    <article
      className={`card ${extraClassName}`}
      tabIndex={0}
      data-card-nav={id}
      onClick={() => dispatch({ type: "SELECT", id })}
    >
      {children}
    </article>
  );
}
