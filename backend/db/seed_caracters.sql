-- Arquivo gerado automaticamente por scripts/gerar-seed.mjs
USE bluelock;

INSERT INTO tb_posicoes (posicao1, posicao2, posicao3) VALUES ('ST', 'FW', 'CAM');
SET @pos = LAST_INSERT_ID();
INSERT INTO tb_atributos (atributo1, atributo2, atributo3) VALUES ('Visão espacial', 'Posicionamento', 'Finalização');
SET @atr = LAST_INSERT_ID();
INSERT INTO tb_qualidades (ataque, tecnica, velocidade, visao) VALUES (70, 64, 62, 78);
SET @qua = LAST_INSERT_ID();
INSERT INTO tb_caracters (slug, name, raridade, imagem, overall, id_posicoes, id_atributos, id_qualidades)
  VALUES ('isagi', 'Isagi Yoichi', 'Comum', './img/Gacha-Isagi.jpg', 68, @pos, @atr, @qua);

INSERT INTO tb_posicoes (posicao1, posicao2, posicao3) VALUES ('LW', 'LM', 'FW');
SET @pos = LAST_INSERT_ID();
INSERT INTO tb_atributos (atributo1, atributo2, atributo3) VALUES ('Velocidade', 'Arranque', 'Drible');
SET @atr = LAST_INSERT_ID();
INSERT INTO tb_qualidades (ataque, tecnica, velocidade, visao) VALUES (68, 65, 91, 61);
SET @qua = LAST_INSERT_ID();
INSERT INTO tb_caracters (slug, name, raridade, imagem, overall, id_posicoes, id_atributos, id_qualidades)
  VALUES ('chigiri', 'Hyoma Chigiri', 'Comum', './img/Gacha-Chigiri.jpg', 72, @pos, @atr, @qua);

INSERT INTO tb_posicoes (posicao1, posicao2, posicao3) VALUES ('ST', 'GK', '-');
SET @pos = LAST_INSERT_ID();
INSERT INTO tb_atributos (atributo1, atributo2, atributo3) VALUES ('Atletismo', 'Reflexos', 'Elasticidade');
SET @atr = LAST_INSERT_ID();
INSERT INTO tb_qualidades (ataque, tecnica, velocidade, visao) VALUES (67, 61, 70, 65);
SET @qua = LAST_INSERT_ID();
INSERT INTO tb_caracters (slug, name, raridade, imagem, overall, id_posicoes, id_atributos, id_qualidades)
  VALUES ('gagamaru', 'Gin Gagamaru', 'Comum', './img/Gacha-Gagamaru.jpg', 70, @pos, @atr, @qua);

INSERT INTO tb_posicoes (posicao1, posicao2, posicao3) VALUES ('ST', 'MF', '-');
SET @pos = LAST_INSERT_ID();
INSERT INTO tb_atributos (atributo1, atributo2, atributo3) VALUES ('Resistência', 'Marcação', 'Físico');
SET @atr = LAST_INSERT_ID();
INSERT INTO tb_qualidades (ataque, tecnica, velocidade, visao) VALUES (68, 61, 66, 58);
SET @qua = LAST_INSERT_ID();
INSERT INTO tb_caracters (slug, name, raridade, imagem, overall, id_posicoes, id_atributos, id_qualidades)
  VALUES ('raichi', 'Jingo Raichi', 'Comum', './img/Gacha-Raichi.jpg', 69, @pos, @atr, @qua);

INSERT INTO tb_posicoes (posicao1, posicao2, posicao3) VALUES ('FW', '-', '-');
SET @pos = LAST_INSERT_ID();
INSERT INTO tb_atributos (atributo1, atributo2, atributo3) VALUES ('Persistência', 'Malícia', 'Sobrevivência');
SET @atr = LAST_INSERT_ID();
INSERT INTO tb_qualidades (ataque, tecnica, velocidade, visao) VALUES (52, 48, 57, 51);
SET @qua = LAST_INSERT_ID();
INSERT INTO tb_caracters (slug, name, raridade, imagem, overall, id_posicoes, id_atributos, id_qualidades)
  VALUES ('igarashi', 'Igarashi Gurimu', 'Comum', './img/Gacha-Igarachi.jpg', 57, @pos, @atr, @qua);

INSERT INTO tb_posicoes (posicao1, posicao2, posicao3) VALUES ('MF', 'FW', '-');
SET @pos = LAST_INSERT_ID();
INSERT INTO tb_atributos (atributo1, atributo2, atributo3) VALUES ('Inteligência', 'Posicionamento', 'Estratégia');
SET @atr = LAST_INSERT_ID();
INSERT INTO tb_qualidades (ataque, tecnica, velocidade, visao) VALUES (62, 59, 64, 72);
SET @qua = LAST_INSERT_ID();
INSERT INTO tb_caracters (slug, name, raridade, imagem, overall, id_posicoes, id_atributos, id_qualidades)
  VALUES ('kuon', 'Wataru Kuon', 'Comum', './img/Gacha-Kuon.jpg', 65, @pos, @atr, @qua);

INSERT INTO tb_posicoes (posicao1, posicao2, posicao3) VALUES ('MF', 'FW', '-');
SET @pos = LAST_INSERT_ID();
INSERT INTO tb_atributos (atributo1, atributo2, atributo3) VALUES ('Passe', 'Movimentação', 'Cooperação');
SET @atr = LAST_INSERT_ID();
INSERT INTO tb_qualidades (ataque, tecnica, velocidade, visao) VALUES (57, 60, 63, 55);
SET @qua = LAST_INSERT_ID();
INSERT INTO tb_caracters (slug, name, raridade, imagem, overall, id_posicoes, id_atributos, id_qualidades)
  VALUES ('nanase', 'Nijiro Nanase', 'Comum', './img/Gacha-Nanase.jpg', 62, @pos, @atr, @qua);

INSERT INTO tb_posicoes (posicao1, posicao2, posicao3) VALUES ('FW', '-', '-');
SET @pos = LAST_INSERT_ID();
INSERT INTO tb_atributos (atributo1, atributo2, atributo3) VALUES ('Movimentação sem bola', 'Velocidade', 'Posicionamento');
SET @atr = LAST_INSERT_ID();
INSERT INTO tb_qualidades (ataque, tecnica, velocidade, visao) VALUES (61, 55, 66, 53);
SET @qua = LAST_INSERT_ID();
INSERT INTO tb_caracters (slug, name, raridade, imagem, overall, id_posicoes, id_atributos, id_qualidades)
  VALUES ('naruhaya', 'Asahi Naruhaya', 'Comum', './img/Gacha-Naruhaya.jpg', 61, @pos, @atr, @qua);

INSERT INTO tb_posicoes (posicao1, posicao2, posicao3) VALUES ('RW', 'FW', 'CAM');
SET @pos = LAST_INSERT_ID();
INSERT INTO tb_atributos (atributo1, atributo2, atributo3) VALUES ('Drible', 'Criatividade', 'Controle de bola');
SET @atr = LAST_INSERT_ID();
INSERT INTO tb_qualidades (ataque, tecnica, velocidade, visao) VALUES (75, 88, 72, 79);
SET @qua = LAST_INSERT_ID();
INSERT INTO tb_caracters (slug, name, raridade, imagem, overall, id_posicoes, id_atributos, id_qualidades)
  VALUES ('bachira', 'Meguru Bachira', 'Raro', './img/Gacha-Bachira.jpg', 76, @pos, @atr, @qua);

INSERT INTO tb_posicoes (posicao1, posicao2, posicao3) VALUES ('MF', 'CAM', 'FW');
SET @pos = LAST_INSERT_ID();
INSERT INTO tb_atributos (atributo1, atributo2, atributo3) VALUES ('Versatilidade', 'Passe', 'Controle de bola');
SET @atr = LAST_INSERT_ID();
INSERT INTO tb_qualidades (ataque, tecnica, velocidade, visao) VALUES (69, 76, 68, 73);
SET @qua = LAST_INSERT_ID();
INSERT INTO tb_caracters (slug, name, raridade, imagem, overall, id_posicoes, id_atributos, id_qualidades)
  VALUES ('reo', 'Mikage Reo', 'Raro', './img/Gacha-Reo.jpg', 74, @pos, @atr, @qua);

INSERT INTO tb_posicoes (posicao1, posicao2, posicao3) VALUES ('CM', 'CAM', 'MF');
SET @pos = LAST_INSERT_ID();
INSERT INTO tb_atributos (atributo1, atributo2, atributo3) VALUES ('Passe', 'Visão de jogo', 'Controle de bola');
SET @atr = LAST_INSERT_ID();
INSERT INTO tb_qualidades (ataque, tecnica, velocidade, visao) VALUES (61, 79, 65, 84);
SET @qua = LAST_INSERT_ID();
INSERT INTO tb_caracters (slug, name, raridade, imagem, overall, id_posicoes, id_atributos, id_qualidades)
  VALUES ('hiori', 'Yo Hiori', 'Raro', './img/Gacha-Hiori.jpg', 72, @pos, @atr, @qua);

INSERT INTO tb_posicoes (posicao1, posicao2, posicao3) VALUES ('ST', 'FW', '-');
SET @pos = LAST_INSERT_ID();
INSERT INTO tb_atributos (atributo1, atributo2, atributo3) VALUES ('Físico', 'Resistência', 'Velocidade');
SET @atr = LAST_INSERT_ID();
INSERT INTO tb_qualidades (ataque, tecnica, velocidade, visao) VALUES (72, 65, 76, 55);
SET @qua = LAST_INSERT_ID();
INSERT INTO tb_caracters (slug, name, raridade, imagem, overall, id_posicoes, id_atributos, id_qualidades)
  VALUES ('tokimitsu', 'Aoshi Tokimitsu', 'Raro', './img/Gacha-Tokimitsu.jpg', 75, @pos, @atr, @qua);

INSERT INTO tb_posicoes (posicao1, posicao2, posicao3) VALUES ('RW', 'FW', '-');
SET @pos = LAST_INSERT_ID();
INSERT INTO tb_atributos (atributo1, atributo2, atributo3) VALUES ('Aceleração', 'Velocidade', 'Explosão');
SET @atr = LAST_INSERT_ID();
INSERT INTO tb_qualidades (ataque, tecnica, velocidade, visao) VALUES (65, 60, 88, 54);
SET @qua = LAST_INSERT_ID();
INSERT INTO tb_caracters (slug, name, raridade, imagem, overall, id_posicoes, id_atributos, id_qualidades)
  VALUES ('zantetsu', 'Zantetsu Tsurugi', 'Raro', './img/Gacha-Zantetsu.jpg', 70, @pos, @atr, @qua);

INSERT INTO tb_posicoes (posicao1, posicao2, posicao3) VALUES ('DF', 'MF', '-');
SET @pos = LAST_INSERT_ID();
INSERT INTO tb_atributos (atributo1, atributo2, atributo3) VALUES ('Visão de jogo', 'Interceptação', 'Leitura defensiva');
SET @atr = LAST_INSERT_ID();
INSERT INTO tb_qualidades (ataque, tecnica, velocidade, visao) VALUES (55, 65, 60, 86);
SET @qua = LAST_INSERT_ID();
INSERT INTO tb_caracters (slug, name, raridade, imagem, overall, id_posicoes, id_atributos, id_qualidades)
  VALUES ('niko', 'Ikki Niko', 'Raro', './img/Gacha-Niko.jpg', 71, @pos, @atr, @qua);

INSERT INTO tb_posicoes (posicao1, posicao2, posicao3) VALUES ('ST', 'FW', '-');
SET @pos = LAST_INSERT_ID();
INSERT INTO tb_atributos (atributo1, atributo2, atributo3) VALUES ('Controle de bola', 'Trap', 'Talento natural');
SET @atr = LAST_INSERT_ID();
INSERT INTO tb_qualidades (ataque, tecnica, velocidade, visao) VALUES (76, 94, 59, 63);
SET @qua = LAST_INSERT_ID();
INSERT INTO tb_caracters (slug, name, raridade, imagem, overall, id_posicoes, id_atributos, id_qualidades)
  VALUES ('nagi', 'Seishiro Nagi', 'Épico', './img/Gacha-Nagi.jpg', 77, @pos, @atr, @qua);

INSERT INTO tb_posicoes (posicao1, posicao2, posicao3) VALUES ('ST', 'FW', '-');
SET @pos = LAST_INSERT_ID();
INSERT INTO tb_atributos (atributo1, atributo2, atributo3) VALUES ('Finalização', 'Chute de longa distância', 'Físico');
SET @atr = LAST_INSERT_ID();
INSERT INTO tb_qualidades (ataque, tecnica, velocidade, visao) VALUES (87, 72, 72, 62);
SET @qua = LAST_INSERT_ID();
INSERT INTO tb_caracters (slug, name, raridade, imagem, overall, id_posicoes, id_atributos, id_qualidades)
  VALUES ('barou', 'Barou Shoei', 'Épico', './img/Gacha-Barou.jpg', 78, @pos, @atr, @qua);

INSERT INTO tb_posicoes (posicao1, posicao2, posicao3) VALUES ('ST', 'FW', 'LW');
SET @pos = LAST_INSERT_ID();
INSERT INTO tb_atributos (atributo1, atributo2, atributo3) VALUES ('Chute de esquerda', 'Físico', 'Potência');
SET @atr = LAST_INSERT_ID();
INSERT INTO tb_qualidades (ataque, tecnica, velocidade, visao) VALUES (76, 65, 68, 58);
SET @qua = LAST_INSERT_ID();
INSERT INTO tb_caracters (slug, name, raridade, imagem, overall, id_posicoes, id_atributos, id_qualidades)
  VALUES ('kunigami', 'Kunigami Rensuke', 'Épico', './img/Gacha-Kunigami.jpg', 73, @pos, @atr, @qua);

INSERT INTO tb_posicoes (posicao1, posicao2, posicao3) VALUES ('CB', 'DF', 'ST');
SET @pos = LAST_INSERT_ID();
INSERT INTO tb_atributos (atributo1, atributo2, atributo3) VALUES ('Altura', 'Alcance', 'Jogo aéreo');
SET @atr = LAST_INSERT_ID();
INSERT INTO tb_qualidades (ataque, tecnica, velocidade, visao) VALUES (67, 61, 68, 64);
SET @qua = LAST_INSERT_ID();
INSERT INTO tb_caracters (slug, name, raridade, imagem, overall, id_posicoes, id_atributos, id_qualidades)
  VALUES ('aryu', 'Jyubei Aryu', 'Épico', './img/Gacha-Aryu.jpg', 76, @pos, @atr, @qua);

INSERT INTO tb_posicoes (posicao1, posicao2, posicao3) VALUES ('RW', 'FW', '-');
SET @pos = LAST_INSERT_ID();
INSERT INTO tb_atributos (atributo1, atributo2, atributo3) VALUES ('Velocidade', 'Movimentação', 'Infiltração');
SET @atr = LAST_INSERT_ID();
INSERT INTO tb_qualidades (ataque, tecnica, velocidade, visao) VALUES (71, 75, 82, 63);
SET @qua = LAST_INSERT_ID();
INSERT INTO tb_caracters (slug, name, raridade, imagem, overall, id_posicoes, id_atributos, id_qualidades)
  VALUES ('otoya', 'Eita Otoya', 'Épico', './img/Gacha-Otoya.jpg', 75, @pos, @atr, @qua);

INSERT INTO tb_posicoes (posicao1, posicao2, posicao3) VALUES ('LW', 'FW', '-');
SET @pos = LAST_INSERT_ID();
INSERT INTO tb_atributos (atributo1, atributo2, atributo3) VALUES ('Drible', 'Velocidade', 'Finalização');
SET @atr = LAST_INSERT_ID();
INSERT INTO tb_qualidades (ataque, tecnica, velocidade, visao) VALUES (76, 82, 84, 61);
SET @qua = LAST_INSERT_ID();
INSERT INTO tb_caracters (slug, name, raridade, imagem, overall, id_posicoes, id_atributos, id_qualidades)
  VALUES ('yukimiya', 'Kenyu Yukimiya', 'Épico', './img/Gacha-Yukimiya.jpg', 77, @pos, @atr, @qua);

INSERT INTO tb_posicoes (posicao1, posicao2, posicao3) VALUES ('LB', 'MF', '-');
SET @pos = LAST_INSERT_ID();
INSERT INTO tb_atributos (atributo1, atributo2, atributo3) VALUES ('Equilíbrio', 'Drible', 'Movimentação');
SET @atr = LAST_INSERT_ID();
INSERT INTO tb_qualidades (ataque, tecnica, velocidade, visao) VALUES (60, 67, 72, 59);
SET @qua = LAST_INSERT_ID();
INSERT INTO tb_caracters (slug, name, raridade, imagem, overall, id_posicoes, id_atributos, id_qualidades)
  VALUES ('kiyora', 'Jin Kiyora', 'Épico', './img/Gacha-Kiyora.jpg', 68, @pos, @atr, @qua);

INSERT INTO tb_posicoes (posicao1, posicao2, posicao3) VALUES ('RB', 'MF', '-');
SET @pos = LAST_INSERT_ID();
INSERT INTO tb_atributos (atributo1, atributo2, atributo3) VALUES ('Velocidade', 'Passe', 'Combinação');
SET @atr = LAST_INSERT_ID();
INSERT INTO tb_qualidades (ataque, tecnica, velocidade, visao) VALUES (62, 72, 78, 70);
SET @qua = LAST_INSERT_ID();
INSERT INTO tb_caracters (slug, name, raridade, imagem, overall, id_posicoes, id_atributos, id_qualidades)
  VALUES ('kurona', 'Kurona Ranze', 'Épico', './img/Gacha-Kurona.jpg', 70, @pos, @atr, @qua);

INSERT INTO tb_posicoes (posicao1, posicao2, posicao3) VALUES ('ST', 'FW', '-');
SET @pos = LAST_INSERT_ID();
INSERT INTO tb_atributos (atributo1, atributo2, atributo3) VALUES ('Finalização', 'Instinto', 'Posicionamento');
SET @atr = LAST_INSERT_ID();
INSERT INTO tb_qualidades (ataque, tecnica, velocidade, visao) VALUES (94, 83, 81, 76);
SET @qua = LAST_INSERT_ID();
INSERT INTO tb_caracters (slug, name, raridade, imagem, overall, id_posicoes, id_atributos, id_qualidades)
  VALUES ('shidou', 'Ryusei Shidou', 'Lendário', './img/Gacha-Shidou.jpg', 86, @pos, @atr, @qua);

INSERT INTO tb_posicoes (posicao1, posicao2, posicao3) VALUES ('ST', 'FW', 'CAM');
SET @pos = LAST_INSERT_ID();
INSERT INTO tb_atributos (atributo1, atributo2, atributo3) VALUES ('Controle de jogo', 'Finalização', 'Visão');
SET @atr = LAST_INSERT_ID();
INSERT INTO tb_qualidades (ataque, tecnica, velocidade, visao) VALUES (89, 86, 80, 88);
SET @qua = LAST_INSERT_ID();
INSERT INTO tb_caracters (slug, name, raridade, imagem, overall, id_posicoes, id_atributos, id_qualidades)
  VALUES ('rin', 'Itoshi Rin', 'Lendário', './img/Gacha-Rin.jpg', 87, @pos, @atr, @qua);

INSERT INTO tb_posicoes (posicao1, posicao2, posicao3) VALUES ('CB', 'DF', '-');
SET @pos = LAST_INSERT_ID();
INSERT INTO tb_atributos (atributo1, atributo2, atributo3) VALUES ('Defesa', 'Leitura de jogo', 'Marcação');
SET @atr = LAST_INSERT_ID();
INSERT INTO tb_qualidades (ataque, tecnica, velocidade, visao) VALUES (52, 75, 77, 91);
SET @qua = LAST_INSERT_ID();
INSERT INTO tb_caracters (slug, name, raridade, imagem, overall, id_posicoes, id_atributos, id_qualidades)
  VALUES ('aiku', 'Oliver Aiku', 'Lendário', './img/Gacha-Aiku.jpg', 84, @pos, @atr, @qua);

INSERT INTO tb_posicoes (posicao1, posicao2, posicao3) VALUES ('CM', 'CAM', 'MF');
SET @pos = LAST_INSERT_ID();
INSERT INTO tb_atributos (atributo1, atributo2, atributo3) VALUES ('Análise', 'Controle de bola', 'Posicionamento');
SET @atr = LAST_INSERT_ID();
INSERT INTO tb_qualidades (ataque, tecnica, velocidade, visao) VALUES (72, 83, 70, 87);
SET @qua = LAST_INSERT_ID();
INSERT INTO tb_caracters (slug, name, raridade, imagem, overall, id_posicoes, id_atributos, id_qualidades)
  VALUES ('karasu', 'Tabito Karasu', 'Lendário', './img/Gacha-Karasu.jpg', 82, @pos, @atr, @qua);

INSERT INTO tb_posicoes (posicao1, posicao2, posicao3) VALUES ('CAM', 'MF', '-');
SET @pos = LAST_INSERT_ID();
INSERT INTO tb_atributos (atributo1, atributo2, atributo3) VALUES ('Passe', 'Visão', 'Criatividade');
SET @atr = LAST_INSERT_ID();
INSERT INTO tb_qualidades (ataque, tecnica, velocidade, visao) VALUES (67, 86, 72, 94);
SET @qua = LAST_INSERT_ID();
INSERT INTO tb_caracters (slug, name, raridade, imagem, overall, id_posicoes, id_atributos, id_qualidades)
  VALUES ('charles', 'Charles Chevalier', 'Lendário', './img/Gacha-Charles.jpg', 83, @pos, @atr, @qua);

INSERT INTO tb_posicoes (posicao1, posicao2, posicao3) VALUES ('ST', 'FW', '-');
SET @pos = LAST_INSERT_ID();
INSERT INTO tb_atributos (atributo1, atributo2, atributo3) VALUES ('Finalização', 'Físico', 'Movimentação');
SET @atr = LAST_INSERT_ID();
INSERT INTO tb_qualidades (ataque, tecnica, velocidade, visao) VALUES (84, 82, 79, 76);
SET @qua = LAST_INSERT_ID();
INSERT INTO tb_caracters (slug, name, raridade, imagem, overall, id_posicoes, id_atributos, id_qualidades)
  VALUES ('agi', 'Agi', 'Lendário', './img/Gacha-Agi.jpg', 84, @pos, @atr, @qua);

INSERT INTO tb_posicoes (posicao1, posicao2, posicao3) VALUES ('CAM', 'MF', '-');
SET @pos = LAST_INSERT_ID();
INSERT INTO tb_atributos (atributo1, atributo2, atributo3) VALUES ('Passe', 'Criatividade', 'Controle de bola');
SET @atr = LAST_INSERT_ID();
INSERT INTO tb_qualidades (ataque, tecnica, velocidade, visao) VALUES (66, 88, 70, 87);
SET @qua = LAST_INSERT_ID();
INSERT INTO tb_caracters (slug, name, raridade, imagem, overall, id_posicoes, id_atributos, id_qualidades)
  VALUES ('ness', 'Alexis Ness', 'Lendário', './img/Gacha-Ness.jpg', 81, @pos, @atr, @qua);

INSERT INTO tb_posicoes (posicao1, posicao2, posicao3) VALUES ('ST', 'FW', '-');
SET @pos = LAST_INSERT_ID();
INSERT INTO tb_atributos (atributo1, atributo2, atributo3) VALUES ('Velocidade', 'Aceleração', 'Finalização');
SET @atr = LAST_INSERT_ID();
INSERT INTO tb_qualidades (ataque, tecnica, velocidade, visao) VALUES (91, 87, 99, 83);
SET @qua = LAST_INSERT_ID();
INSERT INTO tb_caracters (slug, name, raridade, imagem, overall, id_posicoes, id_atributos, id_qualidades)
  VALUES ('loki', 'Julian Loki', 'New Gen', './img/Gacha-Loki.jpg', 92, @pos, @atr, @qua);

INSERT INTO tb_posicoes (posicao1, posicao2, posicao3) VALUES ('MF', 'CAM', '-');
SET @pos = LAST_INSERT_ID();
INSERT INTO tb_atributos (atributo1, atributo2, atributo3) VALUES ('Passe', 'Visão', 'Controle de jogo');
SET @atr = LAST_INSERT_ID();
INSERT INTO tb_qualidades (ataque, tecnica, velocidade, visao) VALUES (76, 87, 79, 90);
SET @qua = LAST_INSERT_ID();
INSERT INTO tb_caracters (slug, name, raridade, imagem, overall, id_posicoes, id_atributos, id_qualidades)
  VALUES ('hugo', 'Vivian Hugo', 'New Gen', './img/Gacha-Hugo.jpg', 88, @pos, @atr, @qua);

INSERT INTO tb_posicoes (posicao1, posicao2, posicao3) VALUES ('ST', 'FW', '-');
SET @pos = LAST_INSERT_ID();
INSERT INTO tb_atributos (atributo1, atributo2, atributo3) VALUES ('Finalização', 'Físico', 'Movimentação');
SET @atr = LAST_INSERT_ID();
INSERT INTO tb_qualidades (ataque, tecnica, velocidade, visao) VALUES (91, 82, 84, 76);
SET @qua = LAST_INSERT_ID();
INSERT INTO tb_caracters (slug, name, raridade, imagem, overall, id_posicoes, id_atributos, id_qualidades)
  VALUES ('bunny', 'Bunny Iglesias', 'New Gen', './img/Gacha-Bunny.jpg', 88, @pos, @atr, @qua);

INSERT INTO tb_posicoes (posicao1, posicao2, posicao3) VALUES ('ST', 'FW', '-');
SET @pos = LAST_INSERT_ID();
INSERT INTO tb_atributos (atributo1, atributo2, atributo3) VALUES ('Kaiser Impact', 'Movimentação', 'Finalização');
SET @atr = LAST_INSERT_ID();
INSERT INTO tb_qualidades (ataque, tecnica, velocidade, visao) VALUES (96, 91, 83, 88);
SET @qua = LAST_INSERT_ID();
INSERT INTO tb_caracters (slug, name, raridade, imagem, overall, id_posicoes, id_atributos, id_qualidades)
  VALUES ('kaiser', 'Michael Kaiser', 'New Gen', './img/Kaiser pro site.jpeg', 91, @pos, @atr, @qua);

INSERT INTO tb_posicoes (posicao1, posicao2, posicao3) VALUES ('CAM', 'MF', '-');
SET @pos = LAST_INSERT_ID();
INSERT INTO tb_atributos (atributo1, atributo2, atributo3) VALUES ('Passe', 'Visão de jogo', 'Controle de bola');
SET @atr = LAST_INSERT_ID();
INSERT INTO tb_qualidades (ataque, tecnica, velocidade, visao) VALUES (82, 96, 84, 98);
SET @qua = LAST_INSERT_ID();
INSERT INTO tb_caracters (slug, name, raridade, imagem, overall, id_posicoes, id_atributos, id_qualidades)
  VALUES ('sae', 'Itoshi Sae', 'New Gen', './img/Gacha-Sae.jpg', 91, @pos, @atr, @qua);

INSERT INTO tb_posicoes (posicao1, posicao2, posicao3) VALUES ('CB', 'DF', '-');
SET @pos = LAST_INSERT_ID();
INSERT INTO tb_atributos (atributo1, atributo2, atributo3) VALUES ('Marcação', 'Drible', 'Leitura defensiva');
SET @atr = LAST_INSERT_ID();
INSERT INTO tb_qualidades (ataque, tecnica, velocidade, visao) VALUES (61, 91, 84, 94);
SET @qua = LAST_INSERT_ID();
INSERT INTO tb_caracters (slug, name, raridade, imagem, overall, id_posicoes, id_atributos, id_qualidades)
  VALUES ('lorenzo', 'Don Lorenzo', 'New Gen', './img/Gacha-Lorenzo.jpg', 90, @pos, @atr, @qua);
