import { claims, type ClaimStatus } from "../data/claims";

const money = new Intl.NumberFormat("cs-CZ", { style: "currency", currency: "CZK", maximumFractionDigits: 0 });
const statusLabels: Record<ClaimStatus, string> = { uplatneno: "uplatněno", "k-uplatneni": "k uplatnění", sporne: "sporné", bezi: "běží" };

export function ClaimsSummary() {
  const total = claims.reduce((sum, item) => sum + (item.amount ?? 0), 0);
  return (
    <section className="dashboard-widget claims-widget" aria-labelledby="claims-title">
      <div className="widget-heading">
        <h2 id="claims-title">Nárokované částky</h2>
        <strong className="claims-total">{money.format(total)}</strong>
      </div>
      <div className="claims-list">
        {claims.map((item) => (
          <div className="claim-row" key={item.id}>
            <div><strong>{item.label}</strong><small>{item.basis}</small></div>
            <span className={`claim-status status-${item.status}`}>{statusLabels[item.status]}</span>
            <b>{item.amount === null ? "běží / dle pásek" : money.format(item.amount)}</b>
          </div>
        ))}
      </div>
    </section>
  );
}
