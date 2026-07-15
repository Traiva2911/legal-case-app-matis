import { Fragment } from "react";
import { splitOnQuery } from "../lib/search";
import { useCaseState } from "../state/caseStore";

/** Wraps occurrences of the current search query in <mark>, leaves text untouched otherwise. */
export function Highlight({ text }: { text: string }) {
  const { query } = useCaseState();
  const parts = splitOnQuery(text, query);
  if (parts.length === 1 && !parts[0].match) return <>{text}</>;
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>{part.match ? <mark>{part.text}</mark> : part.text}</Fragment>
      ))}
    </>
  );
}
