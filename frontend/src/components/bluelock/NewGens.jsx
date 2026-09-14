const cards = [
  {
    chave: "kaiser",
    imagem: "./img/Kaiser pro site.jpeg",
    pais: "GERMANY",
    infoClasse: "info4",
    estilo: "GENIAL",
    arma: "FINALIZAÇÃO PERFEITA",
    caracteristica: "CALMA E EFICIÊNCIA",
  },
  {
    chave: "sae",
    imagem: "./img/Sae pro site.jpeg",
    pais: "JAPAN",
    infoClasse: "info5",
    estilo: "INTELIGENTE",
    arma: "PASSES PRECISOS",
    caracteristica: "VISÃO DO CAMPO",
  },
  {
    chave: "lorenzo",
    imagem: "./img/Lorenzo pro site.jpeg",
    pais: "ITALY",
    infoClasse: "info",
    estilo: "IMPREVISÍVEL",
    arma: "CRIATIVIDADE",
    caracteristica: "FINTAS E ILUSÕES",
  },
  {
    chave: "hugo",
    imagem: "./img//Hugo pro site.jpeg",
    pais: "FRANCE",
    infoClasse: "info1",
    estilo: "TÁTICO",
    arma: "VISÃO ESTRATÉGICA",
    caracteristica: "LEITURA DE JOGO",
  },
  {
    chave: "loki",
    imagem: "./img/Loki pro site.jpeg",
    pais: "FRANCE",
    infoClasse: "info2",
    estilo: "POTÊNCIA",
    arma: "FÍSICO SUPERIOR E VELOCIDADE",
    caracteristica: "PRESENÇA IMPONENTE",
  },
  {
    chave: "bunny",
    imagem: "./img/Bunny pro site.jpeg",
    pais: "SPAIN",
    infoClasse: "info3",
    estilo: "TÉCNICO",
    arma: "CONTROLE ABSOLUTO",
    caracteristica: "PRECISÃO",
  },
];

export function NewGens() {
  return (
    <div className="New-Gens" id="newgens">
      <div className="newgens-hud">
        <div className="hud-left">
          <span>11</span>
          <div className="hud-bar" />
          <p>BLUE LOCK</p>
          <small>PROJECT</small>
        </div>

        <div className="titulo-newgens">
          <span className="tag">WORLD 11</span>
          <h2>NEW GENS</h2>
          <p>THE WORLD'S NEXT ELITE STRIKERS</p>
        </div>

        <div className="hud-right">
          <span>11</span>
          <div className="hud-bar" />
          <p>NEXT GENERATION</p>
          <small>2024</small>
        </div>
      </div>

      {cards.map((card) => (
        <div className={`card-${card.chave}`} key={card.chave}>
          <div className="card-cores">
            <img src={card.imagem} className={`personagem-${card.chave}`} alt={card.chave} />

            <div className="numero">{card.pais}</div>

            <div className={card.infoClasse}>
              <div>
                <span>ESTILO</span>
                <b>{card.estilo}</b>
              </div>

              <div>
                <span>ARMA</span>
                <p>{card.arma}</p>
              </div>

              <div>
                <span>CARACTERÍSTICA</span>
                <p>{card.caracteristica}</p>
              </div>
            </div>

            <button className={`butão-${card.chave}`} type="button">
              VER PERFIL →
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
