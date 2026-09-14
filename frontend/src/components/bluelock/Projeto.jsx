const destaques = [
  {
    imagem: "./img/users-solid-full (1).svg",
    classe: "users",
    numero: "300",
    titulo: "JOGADORES",
    texto: "Apenas os melhores atacantes do Japão.",
  },
  {
    imagem: "./img/trophy-solid-full.svg",
    classe: "troféu",
    numero: "1",
    titulo: "VENCEDOR",
    texto: "Somente um se tornará o melhor do mundo.",
  },
  {
    imagem: "./img/sword.svg",
    classe: "",
    numero: "5",
    titulo: "LIGAS",
    texto: "Primeira, Segunda, Terceira, U-20 e Neo Egoist League.",
  },
  {
    imagem: "./img/earth-asia-solid-full.svg",
    classe: "",
    numero: "11",
    titulo: "NEW GEN WORLD XI",
    texto: "Os maiores talentos do futebol mundial.",
  },
];

export function Projeto() {
  return (
    <div className="Projeto" id="projeto">
      <div>
        <h2 className="Rokku">ブルーロック</h2>
      </div>

      <div>
        <h1 className="TITULO2">
          O que é <br /> <b className="b1">Blue Lock?</b>
        </h1>

        <p className="explicação">
          <b className="b3">Blue Lock</b> é um projeto criado para desenvolver o{" "}
          <b className="b3">melhor atacante do mundo.</b>
        </p>

        <p className="explicaçãoo">
          Após a eliminação do Japão na Copa do Mundo, Ego Jinpachi reúne{" "}
          <b className="b3">300 dos melhores</b> <br /> atacantes do país para competir em um
          treinamento onde <b className="b3">apenas um sairá vencedor.</b>
        </p>
      </div>

      <div>
        <a className="conhecer" href="#jogadores">
          Conheça o projeto &nbsp; -&gt;{" "}
        </a>
      </div>

      <div className="Destaque">
        <h1>
          Destaque do <b className="b2">projeto</b>
        </h1>
      </div>

      <div className="cards">
        {destaques.map((carta) => (
          <div className="cartas" key={carta.titulo}>
            <img className={carta.classe} src={carta.imagem} alt={carta.titulo} />
            <h2>{carta.numero}</h2>
            <h3>{carta.titulo}</h3>
            <p>{carta.texto}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
