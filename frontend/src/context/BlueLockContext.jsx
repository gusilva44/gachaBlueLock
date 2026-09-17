import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

import { useAuth } from "@/context/AuthContext";
import { api } from "@/lib/api";
import {
  CHAVE_DIAMANTES,
  CHAVE_ESCALACAO,
  DIAMANTES_INICIAIS,
  escalacaoVazia,
  jogadorPodeJogar,
  SLOTS,
} from "@/lib/bluelock/utils";

const BlueLockContext = createContext(null);

export function BlueLockProvider({ children }) {
  const { logado, token, usuario, abrirLogin } = useAuth();

  const [diamantes, setDiamantes] = useState(DIAMANTES_INICIAIS);
  const [elenco, setElenco] = useState([]);
  const [escalacao, setEscalacao] = useState(escalacaoVazia);
  const [slotSelecionado, setSlotSelecionado] = useState(null);
  const [carregado, setCarregado] = useState(false);

  const chaveEscalacao = usuario ? `${CHAVE_ESCALACAO}:${usuario.id_user}` : CHAVE_ESCALACAO;

  /** Diamantes continuam salvos no navegador. */
  useEffect(() => {
    try {
      const salvos = localStorage.getItem(CHAVE_DIAMANTES);
      if (salvos !== null && Number.isFinite(Number(salvos))) setDiamantes(Number(salvos));
    } catch (erro) {
      console.error("Erro ao carregar os diamantes:", erro);
    } finally {
      setCarregado(true);
    }
  }, []);

  useEffect(() => {
    if (carregado) localStorage.setItem(CHAVE_DIAMANTES, String(diamantes));
  }, [diamantes, carregado]);

  /** O elenco vem do banco de dados do usuário logado. */
  useEffect(() => {
    if (!logado || !token) {
      setElenco([]);
      return;
    }

    let ativo = true;

    api
      .elenco(token)
      .then((dados) => {
        if (ativo) setElenco(dados.elenco ?? []);
      })
      .catch((erro) => console.error("Erro ao carregar o elenco:", erro));

    return () => {
      ativo = false;
    };
  }, [logado, token]);

  /** A escalação fica salva no navegador, separada por usuário. */
  useEffect(() => {
    try {
      const salva = localStorage.getItem(chaveEscalacao);
      const base = escalacaoVazia();

      if (salva) {
        const dados = JSON.parse(salva);
        if (dados && typeof dados === "object") {
          for (const slot of SLOTS) base[slot.id] = dados[slot.id] ?? null;
        }
      }

      setEscalacao(base);
      setSlotSelecionado(null);
    } catch (erro) {
      console.error("Erro ao carregar a escalação:", erro);
    }
  }, [chaveEscalacao]);

  useEffect(() => {
    if (carregado) localStorage.setItem(chaveEscalacao, JSON.stringify(escalacao));
  }, [escalacao, chaveEscalacao, carregado]);

  /** Bloqueia quem não está logado e abre a tela de login. */
  const exigirLogin = useCallback(() => {
    if (logado) return true;
    abrirLogin();
    return false;
  }, [logado, abrirLogin]);

  const gastarDiamantes = useCallback(
    (custo) => {
      if (!exigirLogin()) return false;

      if (diamantes < custo) {
        alert(`Você não possui diamantes suficientes!\nDiamantes: ${diamantes}\nCusto: ${custo}`);
        return false;
      }

      setDiamantes((atual) => atual - custo);
      return true;
    },
    [diamantes, exigirLogin],
  );

  /** Salva o jogador ganhado no banco e no elenco da tela. */
  const adicionarAoElenco = useCallback(
    async (personagem) => {
      if (!logado || !token) return;

      try {
        const dados = await api.ganharJogador(personagem.id, token);
        const jogador = dados.jogador ?? personagem;

        setElenco((atual) =>
          atual.some((item) => item.id === jogador.id) ? atual : [jogador, ...atual],
        );
      } catch (erro) {
        console.error("Erro ao salvar o jogador ganhado:", erro);
        alert(erro.message);
      }
    },
    [logado, token],
  );

  const selecionarSlot = useCallback(
    (slot, posicao) => {
      if (!exigirLogin()) return;
      setSlotSelecionado({ slot, posicao });
    },
    [exigirLogin],
  );

  const colocarNoTime = useCallback(
    (jogador) => {
      if (!exigirLogin()) return;

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
    [escalacao, slotSelecionado, exigirLogin],
  );

  const removerDoSlot = useCallback((slot) => {
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
      logado,
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
      logado,
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
