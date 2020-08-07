
CREATE TABLE cards (
  cardid SERIAL PRIMARY KEY,
  key varchar(25) NOT NULL,
  hint1 varchar(25) NOT NULL,
  hint2 varchar(25) NOT NULL,
  hint3 varchar(25) NOT NULL,
  hint4 varchar(25) NOT NULL,
  hint5 varchar(25) NOT NULL
);

insert into
cards(key, hint1, hint2, hint3, hint4, hint5) values

('sun', 'shine', 'yellow', 'fire', 'hot', 'sky'),

('car', 'driver', 'ride', 'transport', 'fast', 'travel'),

('pillow', 'head', 'sleep', 'soft', 'bed', 'blanket'),

('hungry', 'feeling', 'eat', 'food', 'breakfast', 'meal'),

('proud', 'feeling', 'accomplish', 'great', 'boast', 'humble'),

('crown', 'head', 'gold', 'king', 'queen', 'jewels'),

('bench', 'sit', 'wooden', 'chair', 'long', 'park'),

('exercise', 'run', 'sports', 'healthy', 'daily', 'morning'),

('swim', 'laps', 'exercise', 'pool', 'ocean', 'beach'),

('summer', 'season', 'winter', 'spring', 'fall', 'hot'),

('roadtrip', 'drive', 'car', 'vacation', 'visit', 'rent'),

('parade', 'street', 'bands', 'floats', 'procession', 'watch'),

('dog', 'bark', 'animal', 'pet', 'bite', 'bag'),

('delinquent', 'juvenile', 'jail', 'young', 'bad', 'rebellious');


CREATE TABLE IF NOT EXISTS scores (
  scoreid SERIAL PRIMARY KEY,
  name varchar(8) NOT NULL,
  gamemode varchar(12) NOT NULL,
  score integer NOT NULL
);

insert into
scores(name,gamemode,score) values

('fin','classic',1),

('fin','classic',2),

('fin','classic',3),

('fin', 'incremental', 1),

('fin', 'incremental', 2),

('fin', 'incremental', 3),

('fin', 'suddendeath', 1),

('fin', 'suddendeath', 2),

('fin', 'suddendeath', 3);
