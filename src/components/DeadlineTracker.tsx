import { deadlines } from "../data/deadlines";

const dayMs = 86_400_000;
const dateFormat = new Intl.DateTimeFormat("cs-CZ", { day: "numeric", month: "numeric", year: "numeric" });

export function DeadlineTracker() {
  const today = new Date();
  const todayUtc = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  const sorted = [...deadlines].sort((a, b) => a.dateISO.localeCompare(b.dateISO));

  return (
    <section className="dashboard-widget deadline-widget" aria-labelledby="deadlines-title">
      <h2 id="deadlines-title">Sledovač lhůt</h2>
      <div className="deadline-list">
        {sorted.map((item) => {
          const [year, month, day] = item.dateISO.split("-").map(Number);
          const days = Math.ceil((Date.UTC(year, month - 1, day) - todayUtc) / dayMs);
          const urgency = item.kind === "hotovo" ? "done" : item.kind === "prekluze" || days < 14 ? "danger" : days < 30 ? "warning" : "neutral";
          const remaining = days < 0 ? `po termínu ${Math.abs(days)} dní` : days === 0 ? "dnes" : `zbývá ${days} dní`;
          return (
            <div className={`deadline-row deadline-${urgency}`} key={item.id}>
              <time dateTime={item.dateISO}>{dateFormat.format(new Date(year, month - 1, day))}</time>
              <div><strong>{item.label}</strong>{item.note && <small>{item.note}</small>}</div>
              <span>{item.kind === "hotovo" ? "✓ hotovo" : remaining}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
