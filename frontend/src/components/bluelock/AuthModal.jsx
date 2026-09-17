import { useState } from "react";

import { useAuth } from "@/context/AuthContext";

export function AuthModal() {
  const { modalAberto, fecharLogin, entrar, cadastrar } = useAuth();

  const [modo, setModo] = useState("login");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [enviando, setEnviando] = useState(false);

  if (!modalAberto) return null;

  const enviar = async (evento) => {
    evento.preventDefault();
    setErro("");
    setEnviando(true);

    try {
      if (modo === "login") await entrar(email, senha);
      else await cadastrar(nome, email, senha);

      setNome("");
      setEmail("");
      setSenha("");
    } catch (falha) {
      setErro(falha.message);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="auth-overlay" role="dialog" aria-modal="true" onClick={fecharLogin}>
      <div className="auth-modal" onClick={(evento) => evento.stopPropagation()}>
        <button className="auth-fechar" type="button" onClick={fecharLogin} aria-label="Fechar">
          ×
        </button>

        <span className="auth-tag">BLUE LOCK PROJECT</span>
        <h2>{modo === "login" ? "ENTRAR" : "CRIAR CONTA"}</h2>
        <p className="auth-sub">
          {modo === "login"
            ? "Entre para roletar e montar seu time."
            : "Cadastre-se para guardar seus jogadores."}
        </p>

        <form className="auth-form" onSubmit={enviar}>
          {modo === "cadastro" && (
            <label>
              NOME
              <input
                type="text"
                value={nome}
                onChange={(evento) => setNome(evento.target.value)}
                autoComplete="name"
                required
              />
            </label>
          )}

          <label>
            E-MAIL
            <input
              type="email"
              value={email}
              onChange={(evento) => setEmail(evento.target.value)}
              autoComplete="email"
              required
            />
          </label>

          <label>
            SENHA
            <input
              type="password"
              value={senha}
              onChange={(evento) => setSenha(evento.target.value)}
              autoComplete={modo === "login" ? "current-password" : "new-password"}
              minLength={6}
              required
            />
          </label>

          {erro && <p className="auth-erro">{erro}</p>}

          <button className="auth-enviar" type="submit" disabled={enviando}>
            {enviando ? "AGUARDE..." : modo === "login" ? "ENTRAR" : "CADASTRAR"}
          </button>
        </form>

        <button
          className="auth-alternar"
          type="button"
          onClick={() => {
            setErro("");
            setModo(modo === "login" ? "cadastro" : "login");
          }}
        >
          {modo === "login" ? "Não tem conta? Cadastre-se" : "Já tem conta? Entrar"}
        </button>
      </div>
    </div>
  );
}
