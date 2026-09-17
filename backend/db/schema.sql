-- ============================================================
--  Banco de dados do Projeto Blue Lock (MySQL)
--  Ordem de criação respeita as chaves estrangeiras.
-- ============================================================

CREATE DATABASE IF NOT EXISTS bluelock
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_unicode_ci;

USE bluelock;

-- ---------- Usuários ----------
CREATE TABLE IF NOT EXISTS tb_users (
    id_user INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ---------- Posições que o jogador pode atuar ----------
CREATE TABLE IF NOT EXISTS tb_posicoes (
    id_posicoes INT AUTO_INCREMENT PRIMARY KEY,
    posicao1 VARCHAR(30) NOT NULL,
    posicao2 VARCHAR(30) NOT NULL,
    posicao3 VARCHAR(30) NOT NULL
);

-- ---------- Qualidades descritivas (ex.: "Visão espacial") ----------
CREATE TABLE IF NOT EXISTS tb_atributos (
    id_atributos INT AUTO_INCREMENT PRIMARY KEY,
    atributo1 VARCHAR(30) NOT NULL,
    atributo2 VARCHAR(30) NOT NULL,
    atributo3 VARCHAR(30) NOT NULL
);

-- ---------- Números do jogador ----------
CREATE TABLE IF NOT EXISTS tb_qualidades (
    id_qualidades INT AUTO_INCREMENT PRIMARY KEY,
    ataque INT NOT NULL,
    tecnica INT NOT NULL,
    velocidade INT NOT NULL,
    visao INT NOT NULL
);

-- ---------- Personagens ----------
-- "slug" é o identificador usado pelo site (ex.: "isagi").
CREATE TABLE IF NOT EXISTS tb_caracters (
    id_caracters INT AUTO_INCREMENT PRIMARY KEY,
    slug VARCHAR(60) NOT NULL UNIQUE,
    name VARCHAR(150) NOT NULL,
    raridade VARCHAR(40) NOT NULL,
    imagem VARCHAR(250) NOT NULL,
    overall INT NOT NULL,

    id_posicoes INT NOT NULL,
    id_atributos INT NOT NULL,
    id_qualidades INT NOT NULL,

    FOREIGN KEY (id_posicoes)
        REFERENCES tb_posicoes(id_posicoes),

    FOREIGN KEY (id_atributos)
        REFERENCES tb_atributos(id_atributos),

    FOREIGN KEY (id_qualidades)
        REFERENCES tb_qualidades(id_qualidades)
);

-- ---------- Jogadores ganhados por cada usuário ----------
CREATE TABLE IF NOT EXISTS tb_storage (
    id_user INT NOT NULL,
    id_caracters INT NOT NULL,
    obtained_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (id_user, id_caracters),

    FOREIGN KEY (id_user)
        REFERENCES tb_users(id_user)
        ON DELETE CASCADE,

    FOREIGN KEY (id_caracters)
        REFERENCES tb_caracters(id_caracters)
        ON DELETE CASCADE
);
