import { claims, type Claim, type ClaimStatus } from "../data/claims";

const money = new Intl.NumberFormat("cs-CZ", { style: "currency", currency: "CZK", maximumFractionDigits: 0 });
const statusLabels: Record<ClaimStatus, string> = { uplatneno: "uplatněno", "k-uplatneni": "k uplatnění", sporne: "sporné", bezi: "běží" };

function ClaimRow({ item }: { item: Claim }) {
  return (
    <div className="claim-row">
      <div>
        <strong>{item.label}</strong>
        <small>{item.note ? `${item.basis} · ${item.note}` : item.basis}</small>
      </div>
      <span className={`claim-status status-${item.status}`}>{statusLabels[item.status]}</span>
      <b>{item.amount === null ? "běží / dle pásek" : money.format(item.amount)}</b>
    </div>
  );
}

export function ClaimsSummary() {
  const vycislene = claims.filter((c) => c.group === "vycislene");
  const odhad = claims.filter((c) => c.group === "odhad");
  const variabilni = claims.filter((c) => c.group === "variabilni");

  const hardTotal = vycislene.reduce((sum, c) => sum + (c.amount ?? 0), 0);
  const odhadTotal = odhad.reduce((sum, c) => sum + (c.amount ?? 0), 0);

  return (
    <section className="dashboard-widget claims-widget" aria-labelledby="claims-title">
      <div className="widget-heading">
        <h2 id="claims-title">Nárokované částky</h2>
        <strong className="claims-total">{money.format(hardTotal)}</strong>
      </div>
      {odhadTotal > 0 && (
        <p className="claims-subtotal">
          + sporná opce / podíl <b>≈ {money.format(odhadTotal)}</b>
        </p>
      )}

      <div className="claims-list">
        {vycislene.length > 0 && (
          <>
            <div className="claims-group-label">Vyčíslené nároky</div>
            {vycislene.map((item) => (
              <ClaimRow key={item.id} item={item} />
            ))}
          </>
        )}
        {odhad.length > 0 && (
          <>
            <div className="claims-group-label">Sporné / odhad hodnoty</div>
            {odhad.map((item) => (
              <ClaimRow key={item.id} item={item} />
            ))}
          </>
        )}
        {variabilni.length > 0 && (
          <>
            <div className="claims-group-label">Variabilní / průběžné</div>
            {variabilni.map((item) => (
              <ClaimRow key={item.id} item={item} />
            ))}
          </>
        )}
      </div>
    </section>
  );
}
