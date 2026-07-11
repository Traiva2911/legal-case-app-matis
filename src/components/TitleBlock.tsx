import type { ReactNode } from "react";

export function TitleBlock({ title, subtitle }: { title: string; subtitle: ReactNode }) {
  return (
    <div className="page-title">
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
