DROP TABLE scores;

CREATE TABLE IF NOT EXISTS scores (
  scoreid SERIAL PRIMARY KEY,
  name varchar(8) NOT NULL,
  gamemode varchar(12) NOT NULL,
  score integer NOT NULL
);

INSERT INTO
scores(name,gamemode,score) VALUES

('Lee','classic',1),

('Dave','classic',2),

('Fin','classic',3),

('Lee', 'survival', 1),

('Dave', 'survival', 2),

('Fin', 'survival', 3),

('Lee', 'suddendeath', 1),

('Dave', 'suddendeath', 2),

('Fin', 'suddendeath', 3);
