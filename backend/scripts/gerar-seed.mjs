/**
 * Gera backend/db/seed_caracters.sql a partir de frontend/src/data/personagens.js
 * Uso: node scripts/gerar-seed.mjs
 */
import { writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const aqui = dirname(fileURLToPath(import.meta.url));
const { personagens } = await import(
  resolve(aqui, "../../frontend/src/data/personagens.js")
);

const esc = (valor) => String(valor ?? "").replaceAll("\\", "\\\\").replaceAll("'", "''");
const item = (lista, indice) => esc(lista?.[indice] ?? "-");

const linhas = [
  "-- Arquivo gerado automaticamente por scripts/gerar-seed.mjs",
  "USE bluelock;",
  "",
];

for (const p of personagens) {
  linhas.push(
    `INSERT INTO tb_posicoes (posicao1, posicao2, posicao3) VALUES ('${item(p.posicoes, 0)}', '${item(p.posicoes, 1)}', '${item(p.posicoes, 2)}');`,
    "SET @pos = LAST_INSERT_ID();",
    `INSERT INTO tb_atributos (atributo1, atributo2, atributo3) VALUES ('${item(p.qualidades, 0)}', '${item(p.qualidades, 1)}', '${item(p.qualidades, 2)}');`,
    "SET @atr = LAST_INSERT_ID();",
    `INSERT INTO tb_qualidades (ataque, tecnica, velocidade, visao) VALUES (${p.atributos.ataque}, ${p.atributos.tecnica}, ${p.atributos.velocidade}, ${p.atributos.visao});`,
    "SET @qua = LAST_INSERT_ID();",
    `INSERT INTO tb_caracters (slug, name, raridade, imagem, overall, id_posicoes, id_atributos, id_qualidades)`,
    `  VALUES ('${esc(p.id)}', '${esc(p.nome)}', '${esc(p.raridade)}', '${esc(p.imagem)}', ${p.overall}, @pos, @atr, @qua);`,
    "",
  );
}

writeFileSync(resolve(aqui, "../db/seed_caracters.sql"), linhas.join("\n"), "utf8");
console.log(`OK: ${personagens.length} personagens gravados em db/seed_caracters.sql`);
