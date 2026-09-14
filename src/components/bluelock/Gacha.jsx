import { useRef, useState } from "react";

import { useBlueLock } from "@/context/BlueLockContext";
import { personagens } from "@/data/personagens";
import {
  CUSTO_ROLETA_1,
  CUSTO_ROLETA_10,
  classeRaridade,
  esperar,
  imagemUrl,
  sortearDezPersonagens,
  sortearPersonagem,
} from "@/lib/bluelock/utils";

const raridades = [
  { classe: "comum", rotulo: "COMMON", chance: "60%" },
  { classe: "raro", rotulo: "RARE", chance: "25%" },
  { classe: "epico", rotulo: "EPIC", chance: "12%" },
  { classe: "newgen", rotulo: "NEW GEN XI", chance: "3%" },
];

export function Gacha() {
  const { diamantes, gastarDiamantes, adicionarAoElenco } = useBlueLock();

  const [carta, setCarta] = useState(personagens[0]);
  const [finalizado, setFinalizado] = useState(true);
  const [nomesPassando, setNomesPassando] = useState([]);
  const [resultadosX10, setResultadosX10] = useState(null);
  const [rolando, setRolando] = useState(false);

  const rolandoRef = useRef(false);

  /** Reproduz a animação de troca rápida de imagens/nomes da versão original. */
  const animar = async (personagemFinal) => {
    setFinalizado(false);

    for (let contador = 0; contador < 20; contador++) {
      const aleatorio = personagens[Math.floor(Math.random() * personagens.length)];
      setCarta(aleatorio);
      setNomesPassando([aleatorio.nome, personagemFinal.nome]);
      await esperar(10 + contador * 2);
    }

    setNomesPassando([]);
    setCarta(personagemFinal);
    setFinalizado(true);
  };

  const rolarUmaVez = async () => {
    if (rolandoRef.current) return;
    if (!gastarDiamantes(CUSTO_ROLETA_1)) return;

    rolandoRef.current = true;
    setRolando(true);
    setResultadosX10(null);

    try {
      const personagemFinal = sortearPersonagem();
      await animar(personagemFinal);
      adicionarAoElenco(personagemFinal);
    } finally {
      rolandoRef.current = false;
      setRolando(false);
    }
  };

  const rolarDezVezes = async () => {
    if (rolandoRef.current) return;
    if (!gastarDiamantes(CUSTO_ROLETA_10)) return;

    rolandoRef.current = true;
    setRolando(true);
    setResultadosX10(null);

    try {
      const resultados = sortearDezPersonagens();

      for (const personagem of resultados) {
        await animar(personagem);
        adicionarAoElenco(personagem);
        await esperar(200);
      }

      setResultadosX10(resultados);
    } finally {
      rolandoRef.current = false;
      setRolando(false);
    }
  };

  return (
    <section className="gacha" id="diamantes">
      <div className="titulo-gacha">
        <span>DIAMANTES</span>
        <h1>BRUTOS</h1>
        <p>ROLE E DESCUBRA OS JOGADORES QUE IRÃO FORMAR SEU TIME.</p>
      </div>

      <div className="gacha-container">
        {/* RESULTADO */}
        <div className="resultado-gacha">
          <div className="raridade-card">{carta.raridade}</div>

          <div className="card-gacha">
            <div className="efeito-card" />

            <img
              className={finalizado ? "resultado-final" : ""}
              src={imagemUrl(carta.imagem)}
              alt={carta.nome}
            />

            {nomesPassando.length > 0 && (
              <div className="faixa-nomes">
                <div className="nomes-passando">
                  {nomesPassando.map((nome, indice) => (
                    <span
                      className={`nome-roleta${indice === 0 ? " ativo" : ""}`}
                      key={`${nome}-${indice}`}
                    >
                      {nome}
                    </span>
                  ))}
                </div>

                <div className="marcador-nome">▼</div>
              </div>
            )}

            <div className="info-card">
              <span>{carta.raridade}</span>
              <h2>{carta.nome}</h2>
            </div>
          </div>
        </div>

        {/* CONTROLES */}
        <div className="controle-gacha">
          <span>PLAYER SUMMON</span>
          <h2>SUMMON</h2>

          <div className="diamantes">
            <span>DIAMANTES</span>
            <strong>{diamantes.toLocaleString("pt-BR")} ◆</strong>
          </div>

          <button className="botao-roleta" type="button" disabled={rolando} onClick={rolarUmaVez}>
            ROLETAR ×1
            <small>150 ◆</small>
          </button>

          <button
            className="botao-roleta dez"
            type="button"
            disabled={rolando}
            onClick={rolarDezVezes}
          >
            ROLETAR ×10
            <small>1.350 ◆</small>
          </button>
        </div>

        {/* RARIDADES */}
        <div className="raridades">
          <h2>RARIDADES</h2>

          {raridades.map((raridade) => (
            <div className={`raridade ${raridade.classe}`} key={raridade.classe}>
              <span>{raridade.rotulo}</span>
              <strong>{raridade.chance}</strong>
            </div>
          ))}
        </div>
      </div>

      {resultadosX10 && (
        <div className="resultados-x10">
          <div className="resultado-x10-container">
            <h2>RESULTADO DA ROLETA X10</h2>

            <table className="tabela-x10">
              <thead>
                <tr>
                  <th>Nº</th>
                  <th>Personagem</th>
                  <th>Nome</th>
                  <th>Raridade</th>
                </tr>
              </thead>

              <tbody>
                {resultadosX10.map((personagem, indice) => (
                  <tr key={`${personagem.id}-${indice}`}>
                    <td className="numero-tabela-x10">{String(indice + 1).padStart(2, "0")}</td>

                    <td>
                      <img
                        className="imagem-tabela-x10"
                        src={imagemUrl(personagem.imagem)}
                        alt={personagem.nome}
                      />
                    </td>

                    <td className="nome-tabela-x10">{personagem.nome}</td>

                    <td>
                      <span
                        className={`raridade-tabela-x10 raridade-${classeRaridade(
                          personagem.raridade,
                        )}`}
                      >
                        {personagem.raridade}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}
