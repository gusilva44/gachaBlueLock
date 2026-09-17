import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

import { api, lerToken, salvarToken } from "@/lib/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [modalAberto, setModalAberto] = useState(false);

  // Restaura a sessão salva no navegador.
  useEffect(() => {
    const salvo = lerToken();

    if (!salvo) {
      setCarregando(false);
      return;
    }

    api
      .eu(salvo)
      .then((dados) => {
        setToken(salvo);
        setUsuario(dados.usuario);
      })
      .catch(() => salvarToken(null))
      .finally(() => setCarregando(false));
  }, []);

  const aplicarSessao = useCallback((dados) => {
    salvarToken(dados.token);
    setToken(dados.token);
    setUsuario(dados.usuario);
    setModalAberto(false);
  }, []);

  const entrar = useCallback(
    async (email, senha) => aplicarSessao(await api.entrar({ email, password: senha })),
    [aplicarSessao],
  );

  const cadastrar = useCallback(
    async (nome, email, senha) =>
      aplicarSessao(await api.cadastrar({ name: nome, email, password: senha })),
    [aplicarSessao],
  );

  const sair = useCallback(() => {
    salvarToken(null);
    setToken(null);
    setUsuario(null);
  }, []);

  const abrirLogin = useCallback(() => setModalAberto(true), []);
  const fecharLogin = useCallback(() => setModalAberto(false), []);

  const valor = useMemo(
    () => ({
      token,
      usuario,
      logado: Boolean(usuario),
      carregando,
      modalAberto,
      entrar,
      cadastrar,
      sair,
      abrirLogin,
      fecharLogin,
    }),
    [token, usuario, carregando, modalAberto, entrar, cadastrar, sair, abrirLogin, fecharLogin],
  );

  return <AuthContext.Provider value={valor}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const contexto = useContext(AuthContext);
  if (!contexto) throw new Error("useAuth precisa estar dentro de <AuthProvider>.");
  return contexto;
}
