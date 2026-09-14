
import { personagens } from "@/data/personagens";

/** Imagens locais ficam em /public/images. URLs completas passam direto. */
export function imagemUrl(nome) {
  if (!nome) return "";
  return /^https?:\/\//.test(nome) ? nome : `/images/${nome}`;
}

export const CUSTO_ROLETA_1 = 150;
export const CUSTO_ROLETA_10 = 1350;
export const DIAMANTES_INICIAIS = 12450;

export const CHAVE_DIAMANTES = "diamantes";
export const CHAVE_ELENCO = "blueLockJogadoresObtidos";
export const CHAVE_ESCALACAO = "blueLockEscalacao";

export function sortearRaridade() {
  const numero = Math.random() * 100;
  if (numero <= 30) return "Comum";
  if (numero <= 55) return "Raro";
  if (numero <= 70) return "Épico";
  if (numero <= 80) return "Lendário";
  return "New Gen";
}

export function sortearPersonagem() {
  const raridade = sortearRaridade();
  const disponiveis = personagens.filter((p) => p.raridade === raridade);
  const lista = disponiveis.length > 0 ? disponiveis : personagens;
  return lista[Math.floor(Math.random() * lista.length)];
}

export function sortearDezPersonagens() {
  return Array.from({ length: 10 }, () => sortearPersonagem());
}

export function esperar(tempo) {
  return new Promise((resolve) => setTimeout(resolve, tempo));
}

export const SLOTS = [
  { id: "ST", posicao: "ST", classe: "mt-position-st" },
  { id: "LW", posicao: "LW", classe: "mt-position-lw" },
  { id: "RW", posicao: "RW", classe: "mt-position-rw" },
  { id: "CAM", posicao: "CAM", classe: "mt-position-cam" },
  { id: "CM_ESQ", posicao: "CM", classe: "mt-position-cm-left" },
  { id: "CM_DIR", posicao: "CM", classe: "mt-position-cm-right" },
  { id: "LB", posicao: "LB", classe: "mt-position-lb" },
  { id: "CB_ESQ", posicao: "CB", classe: "mt-position-cb-left" },
  { id: "CB_DIR", posicao: "CB", classe: "mt-position-cb-right" },
  { id: "RB", posicao: "RB", classe: "mt-position-rb" },
  { id: "GK", posicao: "GK", classe: "mt-position-gk" },
] ;

 


export const escalacaoVazia = () =>
  SLOTS.reduce((acc, slot) => {
    acc[slot.id] = null;
    return acc;
  }, {} );

const compatibilidade = {
  ST: ["ST", "FW"],
  LW: ["LW", "FW"],
  RW: ["RW", "FW"],
  CAM: ["CAM", "MF"],
  CM: ["CM", "MF"],
  LB: ["LB", "DF"],
  CB: ["CB", "DF"],
  RB: ["RB", "DF"],
  GK: ["GK"],
};

export function jogadorPodeJogar(personagem, posicao) {
  if (!personagem || !Array.isArray(personagem.posicoes)) return false;
  const aceitas = compatibilidade[posicao] ?? [];
  return personagem.posicoes.some((pos) => aceitas.includes(pos));
}

export function classeRaridade(raridade) {
  return raridade.toLowerCase().replaceAll(" ", "-");
}

export function calcularTime(escalacao) {
  const titulares = Object.values(escalacao).filter(Boolean) ;

  if (titulares.length === 0) {
    return {
      titulares,
      overall: 0,
      ataque: 0,
      tecnica: 0,
      velocidade: 0,
      visao: 0,
      capitao: "—",
      destaque: "—",
      nivel: "MONTE SEU TIME",
    };
  }

  const media = (valores) =>
    Math.round(valores.reduce((total, valor) => total + valor, 0) / valores.length);

  const overall = media(titulares.map((j) => j.overall));
  const melhor = titulares.reduce((a, b) => (b.overall > a.overall ? b : a));

  const nivel =
    overall >= 90
      ? "ELITE MUNDIAL"
      : overall >= 80
        ? "NEO EGOIST"
        : overall >= 70
          ? "BLUE LOCK XI"
          : "EM FORMAÇÃO";

  return {
    titulares,
    overall,
    ataque: media(titulares.map((j) => j.atributos.ataque)),
    tecnica: media(titulares.map((j) => j.atributos.tecnica)),
    velocidade: media(titulares.map((j) => j.atributos.velocidade)),
    visao: media(titulares.map((j) => j.atributos.visao)),
    capitao: melhor.nome,
    destaque: melhor.nome,
    nivel,
  };
}
