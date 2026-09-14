import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { Personagem } from "@/data/personagens";
import {
  CHAVE_DIAMANTES,
  CHAVE_ELENCO,
  CHAVE_ESCALACAO,
  DIAMANTES_INICIAIS,
  escalacaoVazia,
  jogadorPodeJogar,
  SLOTS,
  type Escalacao,
  type SlotId,
} from "@/lib/bluelock/utils";

type BlueLockContextValor = {
  diamantes: number;
  elenco: Personagem[];
  escalacao: Escalacao;
  slotSelecionado: { slot: SlotId; posicao: string } | null;
  gastarDiamantes: (custo: number) => boolean;
  adicionarAoElenco: (personagem: Personagem) => void;
  selecionarSlot: (slot: SlotId, posicao: string) => void;
  colocarNoTime: (jogador: Personagem) => void;
  limparEscalacao: () => void;
  removerDoSlot: (slot: SlotId) => void;
};

const BlueLockContext = createContext<BlueLockContextValor | null>(null);

export function BlueLockProvider({ children }: { children: ReactNode }) {
  const [diamantes, setDiamantes] = useState(DIAMANTES_INICIAIS);
  const [elenco, setElenco] = useState<Personagem[]>([]);
  const [escalacao, setEscalacao] = useState<Escalacao>(escalacaoVazia);
  const [slotSelecionado, setSlotSelecionado] = useState<{
    slot: SlotId;
    posicao: string;
  } | null>(null);
  const [carregado, setCarregado] = useState(false);

  // Carrega o estado salvo no navegador (só depois da hidratação).
  useEffect(() => {
    try {
      const diamantesSalvos = localStorage.getItem(CHAVE_DIAMANTES);
      if (diamantesSalvos !== null && Number.isFinite(Number(diamantesSalvos))) {
        setDiamantes(Number(diamantesSalvos));
      }

      const elencoSalvo = localStorage.getItem(CHAVE_ELENCO);
      if (elencoSalvo) {
        const dados = JSON.parse(elencoSalvo);
        if (Array.isArray(dados)) setElenco(dados);
      }

      const escalacaoSalva = localStorage.getItem(CHAVE_ESCALACAO);
      if (escalacaoSalva) {
        const dados = JSON.parse(escalacaoSalva);
        if (dados && typeof dados === "object") {
          const base = escalacaoVazia();
          for (const slot of SLOTS) {
            base[slot.id] = dados[slot.id] ?? null;
          }
          setEscalacao(base);
        }
      }
    } catch (erro) {
      console.error("Erro ao carregar o estado salvo:", erro);
    } finally {
      setCarregado(true);
    }
  }, []);

  useEffect(() => {
    if (carregado) localStorage.setItem(CHAVE_DIAMANTES, String(diamantes));
  }, [diamantes, carregado]);

  useEffect(() => {
    if (carregado) localStorage.setItem(CHAVE_ELENCO, JSON.stringify(elenco));
  }, [elenco, carregado]);

  useEffect(() => {
    if (carregado) localStorage.setItem(CHAVE_ESCALACAO, JSON.stringify(escalacao));
  }, [escalacao, carregado]);

  const gastarDiamantes = useCallback(
    (custo: number) => {
      if (diamantes < custo) {
        alert(
          `Você não possui diamantes suficientes!\nDiamantes: ${diamantes}\nCusto: ${custo}`,
        );
        return false;
      }
      setDiamantes((atual) => atual - custo);
      return true;
    },
    [diamantes],
  );

  const adicionarAoElenco = useCallback((personagem: Personagem) => {
    setElenco((atual) =>
      atual.some((jogador) => jogador.id === personagem.id) ? atual : [...atual, personagem],
    );
  }, []);

  const selecionarSlot = useCallback((slot: SlotId, posicao: string) => {
    setSlotSelecionado({ slot, posicao });
  }, []);

  const colocarNoTime = useCallback(
    (jogador: Personagem) => {
      if (!slotSelecionado) {
        alert("Primeiro escolha uma posição no campo.");
        return;
      }

      if (!jogadorPodeJogar(jogador, slotSelecionado.posicao)) {
        alert(`${jogador.nome} não pode jogar como ${slotSelecionado.posicao}`);
        return;
      }

      if (Object.values(escalacao).some((atual) => atual?.id === jogador.id)) {
        alert("Esse jogador já está no seu time!");
        return;
      }

      setEscalacao((atual) => ({ ...atual, [slotSelecionado.slot]: jogador }));
      setSlotSelecionado(null);
    },
    [escalacao, slotSelecionado],
  );

  const removerDoSlot = useCallback((slot: SlotId) => {
    setEscalacao((atual) => ({ ...atual, [slot]: null }));
  }, []);

  const limparEscalacao = useCallback(() => {
    setEscalacao(escalacaoVazia());
    setSlotSelecionado(null);
  }, []);

  const valor = useMemo(
    () => ({
      diamantes,
      elenco,
      escalacao,
      slotSelecionado,
      gastarDiamantes,
      adicionarAoElenco,
      selecionarSlot,
      colocarNoTime,
      limparEscalacao,
      removerDoSlot,
    }),
    [
      diamantes,
      elenco,
      escalacao,
      slotSelecionado,
      gastarDiamantes,
      adicionarAoElenco,
      selecionarSlot,
      colocarNoTime,
      limparEscalacao,
      removerDoSlot,
    ],
  );

  return <BlueLockContext.Provider value={valor}>{children}</BlueLockContext.Provider>;
}

export function useBlueLock() {
  const contexto = useContext(BlueLockContext);
  if (!contexto) {
    throw new Error("useBlueLock precisa estar dentro de <BlueLockProvider>.");
  }
  return contexto;
}
