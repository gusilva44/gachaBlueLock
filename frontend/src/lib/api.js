/** Comunicação com a API do backend (Express + MySQL). */

const BASE = import.meta.env.VITE_API_URL || "http://localhost:3333";

export const CHAVE_TOKEN = "blueLockToken";

export function lerToken() {
  try {
    return localStorage.getItem(CHAVE_TOKEN);
  } catch {
    return null;
  }
}

export function salvarToken(token) {
  try {
    if (token) localStorage.setItem(CHAVE_TOKEN, token);
    else localStorage.removeItem(CHAVE_TOKEN);
  } catch {
    /* ignora navegadores sem localStorage */
  }
}

async function pedir(caminho, { method = "GET", body, token } = {}) {
  let resposta;

  try {
    resposta = await fetch(`${BASE}/api${caminho}`, {
      method,
      headers: {
        ...(body ? { "Content-Type": "application/json" } : {}),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
    });
  } catch {
    throw new Error("Não foi possível falar com o servidor. Ele está rodando?");
  }

  const dados = await resposta.json().catch(() => ({}));

  if (!resposta.ok) {
    throw new Error(dados.erro || "Algo deu errado. Tente novamente.");
  }

  return dados;
}

export const api = {
  cadastrar: (dados) => pedir("/auth/register", { method: "POST", body: dados }),
  entrar: (dados) => pedir("/auth/login", { method: "POST", body: dados }),
  eu: (token) => pedir("/auth/me", { token }),
  personagens: () => pedir("/caracters"),
  elenco: (token) => pedir("/storage", { token }),
  ganharJogador: (slug, token) => pedir("/storage", { method: "POST", body: { slug }, token }),
};
