const jogadores = [
  {
    numero: "01",
    nome: "ISAGI YOICHI",
    imagem: "./img/Primeira fase.jpg",
    posicao: "FW",
    rank: "BL 299",
  },
  {
    numero: "02",
    nome: "MEGURU BACHIRA",
    imagem: "./img/Linguinha.jpg",
    posicao: "MF",
    rank: "BL 290",
  },
  {
    numero: "03",
    nome: "NAGI SEISHIRO",
    imagem: "./img/Gênio Preguiçoso.jpg",
    posicao: "MF",
    rank: "BL 07",
  },
  {
    numero: "04",
    nome: "HYOMA CHIGIRI",
    imagem: "./img/Pantera Vermelha.jpg",
    posicao: "RW",
    rank: "BL 292",
  },
  {
    numero: "05",
    nome: "ITOSHI RIN",
    imagem: "./img/Corte de água.jpg",
    posicao: "ST",
    rank: "BL 01",
  },
];

/** As classes originais eram numeradas (card-jogador, card-jogador1, ...). */
const sufixo = (indice) => (indice === 0 ? "" : String(indice));

export function JogadoresDestaque() {
  return (
    <div className="Jogadores" id="jogadores">
      <div>
        <h1 className="TITULO3">
          <span>Jogadores em</span> <strong>Destaque</strong>
        </h1>
      </div>

      {jogadores.map((jogador, indice) => (
        <div className={`card-jogador${sufixo(indice)}`} key={jogador.nome}>
          <div className={`numero${sufixo(indice)}`}>
            <span>{jogador.numero}</span>
            <small>BLUE LOCK</small>
          </div>

          <div className={`foto-jogador${sufixo(indice)}`}>
            <img src={jogador.imagem} alt={jogador.nome} />
          </div>

          <h2>{jogador.nome}</h2>

          <div className={`informacoes${sufixo(indice)}`}>
            <span className={indice === 0 ? "posicaooo" : `posicao${sufixo(indice)}`}>
              {jogador.posicao}
            </span>

            <span className={`rank${sufixo(indice)}`}>{jogador.rank}</span>
          </div>

          <a href="#jogadores" className={`botao-perfil${sufixo(indice)}`}>
            VER PERFIL
          </a>
        </div>
      ))}

      <div>
        <a className="ver-jogadores" href="#monte-seu-time">
          VER TODOS OS JOGADORES &nbsp; --- &gt;{" "}
        </a>
      </div>
    </div>
  );
}
