import { useMemo, useState } from "react";

import { useBlueLock } from "@/context/BlueLockContext";

import {
  calcularTime,
  imagemUrl,
  jogadorPodeJogar,
  SLOTS,

} from "@/lib/bluelock/utils";

const LIMITE_JOGADORES = 6;

const filtros = [
  { id: "todos", rotulo: "TODOS", posicoes: []  },
  { id: "ataque", rotulo: "ATAQUE", posicoes: ["ST", "FW", "LW", "RW"] },
  { id: "meio", rotulo: "MEIO", posicoes: ["CAM", "CM", "MF"] },
  { id: "defesa", rotulo: "DEFESA", posicoes: ["LB", "CB", "RB", "DF"] },
  { id: "goleiro", rotulo: "GK", posicoes: ["GK"] },
];

export function MonteSeuTime() {
  const { elenco, escalacao, slotSelecionado, selecionarSlot, colocarNoTime, limparEscalacao } =
    useBlueLock();

  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState("todos");
  const [mostrandoTodos, setMostrandoTodos] = useState(false);

  const time = useMemo(() => calcularTime(escalacao), [escalacao]);

  const jogadoresFiltrados = useMemo(() => {
    const posicoesFiltro = filtros.find((item) => item.id === filtro)?.posicoes ?? [];

    return elenco.filter((jogador) => {
      const combinaBusca = jogador.nome.toLowerCase().includes(busca.trim().toLowerCase());

      const combinaFiltro =
        posicoesFiltro.length === 0 ||
        jogador.posicoes.some((pos) => posicoesFiltro.includes(pos));

      const combinaSlot =
        !slotSelecionado || jogadorPodeJogar(jogador, slotSelecionado.posicao);

      return combinaBusca && combinaFiltro && combinaSlot;
    });
  }, [elenco, busca, filtro, slotSelecionado]);

  const visiveis = mostrandoTodos
    ? jogadoresFiltrados
    : jogadoresFiltrados.slice(0, LIMITE_JOGADORES);

  const escolherSlot = (slot, posicao) => {
    selecionarSlot(slot, posicao);
    setMostrandoTodos(true);
  };

  return (
    <section className="mt-section" id="monte-seu-time">
      <header className="mt-header">
        <div className="mt-header-tag">BLUE LOCK PROJECT</div>

        <h1>
          CREATE YOUR <strong>TEAM</strong>
        </h1>

        <p>MONTE SUA ESCALAÇÃO E CRIE O TIME MAIS EGOÍSTA DO BLUE LOCK.</p>
      </header>

      <div className="mt-builder">
        {/* PAINEL DE JOGADORES */}
        <aside className="mt-players-panel">
          <div className="mt-panel-header">
            <span>BLUE LOCK</span>
            <h2>JOGADORES</h2>
          </div>

          <div className="mt-players-search">
            <input
              type="text"
              placeholder="BUSCAR JOGADOR..."
              autoComplete="off"
              value={busca}
              onChange={(evento) => setBusca(evento.target.value)}
            />
          </div>

          <div className="mt-players-filters">
            {filtros.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`mt-player-filter${filtro === item.id ? " mt-active" : ""}`}
                onClick={() => setFiltro(item.id)}
              >
                {item.rotulo}
              </button>
            ))}
          </div>

          <div className="players-list">
            {elenco.length === 0 ? (
              <p className="mt-empty-elenco">
                Role a roleta em DIAMANTES BRUTOS para ganhar jogadores.
              </p>
            ) : (
              visiveis.map((jogador) => (
                <article
                  className={`player-card${slotSelecionado ? " jogador-selecionavel" : ""}`}
                  key={jogador.id}
                >
                  <div className="player-card-image">
                    <img src={imagemUrl(jogador.imagem)} alt={jogador.nome} />
                  </div>

                  <div className="player-card-info">
                    <span className="player-rarity">{jogador.raridade}</span>

                    <h3>{jogador.nome}</h3>

                    <p className="player-overall">
                      OVERALL: <strong>{jogador.overall}</strong>
                    </p>

                    <button
                      className="button-add-team"
                      type="button"
                      onClick={() => colocarNoTime(jogador)}
                    >
                      COLOCAR NO TIME
                    </button>
                  </div>
                </article>
              ))
            )}
          </div>

          {jogadoresFiltrados.length > LIMITE_JOGADORES && (
            <button
              className="botao-ver-jogadores"
              type="button"
              onClick={() => setMostrandoTodos((atual) => !atual)}
            >
              {mostrandoTodos ? "OCULTAR JOGADORES" : "VER TODOS OS JOGADORES"}
            </button>
          )}
        </aside>

        {/* CAMPO */}
        <main className="mt-field-panel">
          <div className="mt-field">
            <div className="mt-field-line mt-field-center-line" />
            <div className="mt-field-center-circle" />
            <div className="mt-field-center-point" />

            <div className="mt-field-box mt-field-box-left" />
            <div className="mt-field-box mt-field-box-right" />

            {SLOTS.map((slot, indice) => {
              const jogador = escalacao[slot.id];
              const selecionado = slotSelecionado?.slot === slot.id;

              return (
                <div
                  className={`mt-field-position ${slot.classe}${
                    selecionado ? " mt-field-position-ativa" : ""
                  }`}
                  key={slot.id}
                >
                  <button
                    className={`mt-field-player${jogador ? " mt-field-player-filled" : ""}`}
                    type="button"
                    data-slot={indice + 1}
                    onClick={() => escolherSlot(slot.id, slot.posicao)}
                  >
                    {jogador ? (
                      <>
                        <img
                          className="mt-field-player-image"
                          src={imagemUrl(jogador.imagem)}
                          alt={jogador.nome}
                        />
                        <span className="mt-field-player-name">{jogador.nome}</span>
                        <span className="mt-field-player-position">{slot.posicao}</span>
                      </>
                    ) : (
                      <>
                        <span className="mt-field-player-empty">+</span>
                        <span className="mt-field-player-name">{slot.posicao}</span>
                      </>
                    )}
                  </button>

                  <span className="mt-position-label">{slot.posicao}</span>
                </div>
              );
            })}
          </div>
        </main>

        {/* INFORMAÇÕES DO TIME */}
        <aside className="mt-info-panel">
          <div className="mt-info-header">
            <span>SUA ESCALAÇÃO</span>
            <h2>BLUE LOCK XI</h2>
          </div>

          <div className="mt-info-row">
            <span>FORMAÇÃO</span>
            <strong>4 - 3 - 3</strong>
          </div>

          <div className="mt-info-row">
            <span>CAPITÃO</span>
            <strong>{time.capitao}</strong>
          </div>

          <div className="mt-rating">
            <span>RATING DO TIME</span>
            <strong>{time.overall}</strong>
            <small>{time.nivel}</small>
          </div>

          <div className="mt-attributes">
            {[
              { rotulo: "ATAQUE", valor: time.ataque },
              { rotulo: "TÉCNICA", valor: time.tecnica },
              { rotulo: "VELOCIDADE", valor: time.velocidade },
              { rotulo: "VISÃO", valor: time.visao },
            ].map((atributo) => (
              <div className="mt-attribute" key={atributo.rotulo}>
                <div>
                  <span>{atributo.rotulo}</span>
                  <strong>{atributo.valor}</strong>
                </div>

                <div className="mt-attribute-bar">
                  <i style={{ width: `${atributo.valor}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-highlight">
            <span>JOGADOR EM DESTAQUE</span>
            <strong>{time.destaque}</strong>
          </div>

          <button
            className="mt-save-team"
            type="button"
            onClick={() => alert("Escalação salva no seu navegador!")}
          >
            SALVAR TIME
            <span>→</span>
          </button>

          <button className="mt-clear-team" type="button" onClick={limparEscalacao}>
            LIMPAR ESCALAÇÃO
          </button>
        </aside>
      </div>
    </section>
  );
}
