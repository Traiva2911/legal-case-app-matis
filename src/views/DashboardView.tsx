import { events, evidence, people, documents, lawyerQuestions } from "../data";
import { TitleBlock } from "../components/TitleBlock";

export function DashboardView() {
  const keyPeople = people.slice(0, 3);
  return (
    <section className="view" data-view="dashboard">
      <div className="dash-eyebrow">Spisový přehled · TRAIVA s.r.o.</div>
      <TitleBlock
        title="Případ Andrea Matis"
        subtitle="Podklady, které jsem si připravila ke konzultaci: události, dokumenty a komunikace tak, jak je vnímám já. Právní posouzení nechávám na Vás."
      />
      <div className="dashboard-layout">
        <article className="card summary-panel">
          <h2>Přehled případu</h2>
          <ul className="mini-list">
            <li>
              <span>Události v časové ose</span>
              <strong>{events.length}</strong>
            </li>
            <li>
              <span>Podklady</span>
              <strong>{evidence.length}</strong>
            </li>
            <li>
              <span>Dokumenty</span>
              <strong>{documents.length}</strong>
            </li>
            <li>
              <span>Otázky na konzultaci</span>
              <strong>{lawyerQuestions.length}</strong>
            </li>
          </ul>
        </article>
        <article className="card insight-panel">
          <h2>Klíčové osoby</h2>
          <ul className="mini-list">
            {keyPeople.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                <strong>{item.role}</strong>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
