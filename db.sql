
CREATE TABLE cards (
  cardid SERIAL PRIMARY KEY,
  key varchar(25) NOT NULL,
  hint1 varchar(25) NOT NULL,
  hint2 varchar(25) NOT NULL,
  hint3 varchar(25) NOT NULL,
  hint4 varchar(25) NOT NULL,
  hint5 varchar(25) NOT NULL
);

INSERT INTO
cards(key, hint1, hint2, hint3, hint4, hint5) VALUES

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

('delinquent', 'juvenile', 'jail', 'young', 'bad', 'rebellious'),

('paper', 'write', 'book', 'print', 'rock', 'scissors'),

('game', 'points', 'score', 'teams', 'win', 'play'),

('table', 'sit', 'wooden', 'dinner', 'legs', 'chairs'),

('computer', 'electronic', 'type', 'screen', 'mouse', 'keyboard'),

('window', 'glass', 'house', 'clear', 'greenhouse', 'open'),

('eye', 'see', 'sense', 'face', 'open', 'close'),

('head', 'face', 'skull', 'brain', 'top', 'hat'),

('sailor', 'ship', 'sea', 'captain', 'boat', 'ocean'),

('coffee', 'brown', 'hot', 'flavored', 'iced', 'brewed'),

('ball', 'air', 'basket', 'bounce', 'circle', 'foot'),

('stamp', 'rubber', 'letter', 'postman', 'postcard', 'post office'),

('cactus', 'plant', 'green', 'needle', 'desert', 'water'),

('test', 'study', 'learn', 'school', 'teacher', 'answer'),

('moon', 'night', 'sky', 'star', 'satellite', 'orbit'),

('leaf', 'green', 'tree', 'food', 'branch', 'bush'),

('bee', 'honey', 'insect', 'hive', 'sting', 'bumble'),

('dance', 'move', 'music', 'party', 'night club', 'bands'),

('napkin', 'wipe', 'mouth', 'clean', 'stack', 'spill'),

('hoax', 'lie', 'false', 'true', 'cheat', 'trick'),

('lava', 'volcano', 'hot', 'earth', 'flow', 'eruption'),

('colleague', 'friend', 'work', 'peer', 'group', 'job'),

('evidence', 'crime', 'prove', 'police', 'investigation', 'scene'),

('violin', 'strings', 'orchestra', 'fiddle', 'music', 'instrument'),

('cloud', 'white', 'fluffy', 'sky', 'rain', 'shapes'),

('book', 'read', 'write', 'paper', 'cover', 'author'),

('sleep', 'bed', 'night', 'rest', 'pillow', 'blankets'),

('road', 'cars', 'sidewalk', 'lanes', 'pavement', 'highway'),

('mountain', 'peak', 'high', 'climb', 'hike', 'everest');
