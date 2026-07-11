import { lawyerQuestions } from "../data";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { TitleBlock } from "../components/TitleBlock";

export function NotesView() {
  const [notes, setNotes] = useLocalStorage("case-notes", "");

  return (
    <section className="view" data-view="notes">
      <TitleBlock title="Moje poznámky" subtitle="Poznámky se ukládají jen v prohlížeči na tomto zařízení." />
      <div className="notes-layout">
        <article className="card note-card">
          <label className="sr-only" htmlFor="caseNotes">
            Poznámky
          </label>
          <textarea
            id="caseNotes"
            placeholder="Doplnit otázky pro advokáta, procesní taktiku, chybějící přílohy..."
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
          />
        </article>
        <article className="card note-card">
          <h2 className="section-heading">Kontrolní seznam</h2>
          <ul className="mini-list">
            <li>
              <span>Doplnit originály příloh</span>
              <strong>□</strong>
            </li>
            <li>
              <span>Zeptat se na promlčení</span>
              <strong>□</strong>
            </li>
            <li>
              <span>Zeptat se, co je pracovní a co obchodní věc</span>
              <strong>□</strong>
            </li>
            <li>
              <span>Doplnit podklady k částkám</span>
              <strong>□</strong>
            </li>
          </ul>
        </article>
      </div>
      <article className="card note-card" style={{ marginTop: 16 }}>
        <h2 className="section-heading">Kontext: struktura mzdy (HPP + DPP)</h2>
        <p>
          Mzda byla ve firmě standardně rozdělena mezi hlavní pracovní poměr a dvě dohody o provedení práce (DPP TRAIVA s.r.o. a DPP
          Traiva Safety s.r.o.). Takhle to měli nastavené všichni zaměstnanci, věděli o tom a akceptovali to. DPP Traiva Safety byla v
          dubnu 2026 zrušena všem zaměstnancům v souvislosti s prodejem firmy — pro mě to znamenalo o 6 460 Kč čistého měsíčně méně,
          nešlo ale o krok mířený jen na mě. Částka z DPP Traiva Safety byla všem zaměstnancům „přidána" do mzdy z hlavního pracovního
          poměru. Uvádím to pro úplnost, aby byl jasný vývoj mého celkového příjmu při čtení výplatních pásek.
        </p>
      </article>
      <article className="card note-card" style={{ marginTop: 16 }}>
        <h2 className="section-heading">Moje prohlášení k projektu Odoo</h2>
        <p>
          <em>
            „Řešení Odoo nebyl IT projekt, ale řízení provozního rizika. Pokud by se tyto věci neřešily, firma by nebyla v prodejném
            stavu. Z e-mailů je zřejmé, že jsem dlouhodobě pracovala s úkoly a odpovědností, které měly přímý dopad na hodnotu firmy
            při prodeji — ať už šlo o řízení rizik, stabilitu, plánování, cenotvorbu nebo auditní připravenost. Nejde o subjektivní
            pocit přínosu, ale o konkrétní kroky, které zvyšují valuaci a snižují rizika pro kupce. Proto je legitimní bavit se o
            odpovídajících odměnách."
          </em>
        </p>
      </article>
      <article className="card note-card" style={{ marginTop: 16 }}>
        <h2 className="section-heading">Moje otázky na konzultaci</h2>
        <ul className="mini-list">
          {lawyerQuestions.map((question, index) => (
            <li key={index}>
              <span>
                {index + 1}. {question}
              </span>
              <strong>□</strong>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
