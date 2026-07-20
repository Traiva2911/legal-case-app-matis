export function RelationGraph() {
  return (
    <section className="relation-graph card" aria-labelledby="relation-title">
      <h2 id="relation-title">Mapa vztahů</h2>
      <svg viewBox="0 0 900 470" role="img" aria-labelledby="relation-svg-title relation-svg-desc">
        <title id="relation-svg-title">Síť osob a společností ve sporu</title>
        <desc id="relation-svg-desc">Rodina Ospalíkových, společnosti, Andrea Matis a potenciální kupec Karel Neffe.</desc>
        <rect className="family-group" x="20" y="20" width="535" height="420" rx="20" /><text className="group-label" x="42" y="52">RODINA OSPALÍKOVÝCH</text>
        <g className="graph-edges">
          <path d="M170 125 L345 215"/><text x="225" y="165">dcera</text><path d="M400 235 L485 235"/><text x="425" y="220">manžel</text>
          <path d="M170 125 L170 345"/><text x="180" y="280">syn</text><path d="M490 235 L650 120"/><text x="535" y="160">ředitel</text>
          <path d="M345 215 L650 120"/><text x="450" y="135">vlastník</text><path className="danger-edge" d="M650 150 L650 310"/><text x="665" y="230">odvolala + OZP</text>
          <path d="M810 350 L715 145"/><text x="755" y="245">kupec</text><path d="M170 125 L650 120"/><text x="390" y="105">majitel + jednatel</text>
        </g>
        <g className="graph-node family-node" transform="translate(70 75)"><rect width="200" height="70" rx="14"/><text x="100" y="29">Karel Ospalík</text><text className="node-role" x="100" y="50">majitel · jednatel TRAIVA</text></g>
        <g className="graph-node family-node" transform="translate(240 200)"><rect width="210" height="70" rx="14"/><text x="105" y="27">Magdalena Premusová</text><text className="node-role" x="105" y="48">dcera · vlastník Traiva Safety</text></g>
        <g className="graph-node family-node" transform="translate(435 200)"><rect width="105" height="70" rx="14"/><text x="52" y="27">Jiří Premus</text><text className="node-role" x="52" y="48">zeť · jednatel</text></g>
        <g className="graph-node family-node" transform="translate(70 330)"><rect width="200" height="70" rx="14"/><text x="100" y="28">Vojtěch Ospalík</text><text className="node-role" x="100" y="49">syn · zaměstnanec</text></g>
        <g className="graph-node company-node" transform="translate(590 80)"><rect width="125" height="70" rx="14"/><text x="62" y="29">TRAIVA s.r.o.</text><text className="node-role" x="62" y="50">společnost</text></g>
        <g className="graph-node andrea-node" transform="translate(575 300)"><rect width="165" height="78" rx="14"/><text x="82" y="29">Andrea Matis</text><text className="node-role" x="82" y="50">odvolaná jednatelka</text><text className="node-role" x="82" y="66">MIMO RODINU</text></g>
        <g className="graph-node buyer-node" transform="translate(750 330)"><rect width="130" height="70" rx="14"/><text x="65" y="29">Karel Neffe</text><text className="node-role" x="65" y="50">potenciální kupec</text></g>
      </svg>
    </section>
  );
}
