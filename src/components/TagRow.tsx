import type { TagId } from "../types";

export function TagRow({ tags = [] }: { tags?: TagId[] }) {
  return (
    <div className="tag-row">
      {tags.map((tag) => (
        <span className="tag" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  );
}
