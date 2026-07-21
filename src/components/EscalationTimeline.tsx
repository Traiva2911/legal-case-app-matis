const steps = [
  ["31. 3. 2026", "DPP Traiva Safety ukončena (plošně)"],
  ["duben 2026", "Prémie klesají, „režim práce manažerů“ k podpisu"],
  ["12. 5. 2026", "ODVOLÁNÍ z funkce + karta + GPS + dovolená (v jeden den)"],
  ["10./11. 6. 2026", "Odebrání pracovních přístupů — počátek překážky v práci (§ 208)"],
  ["červen 2026", "Mzda vykázána jako „neomluvená absence“"],
  ["14. 7. 2026", "Protest (§ 208)"],
  ["15. 7. 2026", "OZP (okamžité zrušení PP)"],
] as const;

export function EscalationTimeline() {
  return (
    <section className="dashboard-widget escalation-widget" aria-labelledby="escalation-title">
      <h2 id="escalation-title">Vzorec eskalace</h2>
      <ol className="escalation-axis">
        {steps.map(([date, label], index) => (
          <li className={index === 2 ? "key-node" : ""} key={date}>
            <span className="escalation-dot" aria-hidden="true" />
            <time>{date}</time><p>{label}</p>
            {index === 2 && <em>koordinovaný postup v jeden den</em>}
          </li>
        ))}
      </ol>
    </section>
  );
}
