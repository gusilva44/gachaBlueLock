# API Blue Lock (MySQL + Express)

## 1. Banco de dados

```bash
mysql -u root -p < db/schema.sql
node scripts/gerar-seed.mjs      # gera db/seed_caracters.sql a partir dos personagens do site
mysql -u root -p < db/seed_caracters.sql
```

## 2. Configuração

```bash
cp .env.example .env   # ajuste usuário/senha do MySQL e o JWT_SECRET
npm install
npm run dev            # ou: npm start
```

A API sobe em `http://localhost:3333`.

## 3. Rotas

| Método | Rota                 | Precisa login | O que faz                          |
| ------ | -------------------- | ------------- | ---------------------------------- |
| POST   | `/api/auth/register` | não           | cadastra usuário e devolve token   |
| POST   | `/api/auth/login`    | não           | faz login e devolve token          |
| GET    | `/api/auth/me`       | sim           | dados do usuário logado            |
| GET    | `/api/caracters`     | não           | lista todos os personagens         |
| GET    | `/api/storage`       | sim           | elenco (jogadores ganhados)        |
| POST   | `/api/storage`       | sim           | salva um jogador ganhado (`slug`)  |

## 4. Tabelas

`tb_users`, `tb_caracters`, `tb_posicoes`, `tb_atributos` (qualidades em texto),
`tb_qualidades` (ataque/técnica/velocidade/visão) e `tb_storage`
(cada jogador ganhado por cada usuário).

## 5. Frontend

No `frontend`, crie um `.env` com:

```
VITE_API_URL=http://localhost:3333
```
