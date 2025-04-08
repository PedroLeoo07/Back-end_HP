CREATE DATABASE hogwarts;

\c hogwarts;

CREATE TABLE houses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    founder VARCHAR(100) NOT NULL
);

CREATE TABLE wizards (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    house_id INTEGER REFERENCES houses(id) ON DELETE SET NULL
);

INSERT INTO houses (name, founder) VALUES 
    ('Grifinória', 'Godric Gryffindor'),
    ('Sonserina', 'Salazar Slytherin'),
    ('Corvinal', 'Rowena Ravenclaw'),
    ('Lufa-Lufa', 'Helga Hufflepuff');

INSERT INTO wizards (name, house_id) VALUES 
    ('Harry Potter', 1),
    ('Draco Malfoy', 2),
    ('Luna Lovegood', 3),
    ('Cedrico Diggory', 4),  ('Hermione Granger', 1),
    ('Ron Weasley', 1),
    ('Neville Longbottom', 1),
    ('Ginny Weasley', 1),
    ('Severus Snape', 2),
    ('Pansy Parkinson', 2),
    ('Gregory Goyle', 2),
    ('Vincent Crabbe', 2),
    ('Cho Chang', 3),
    ('Padma Patil', 3),
    ('Terry Boot', 3),
    ('Michael Corner', 3),
    ('Nymphadora Tonks', 4),
    ('Hannah Abbott', 4),
    ('Susan Bones', 4),
    ('Ernie Macmillan', 4),
    ('Dean Thomas', 1),
    ('Blaise Zabini', 2),
    ('Anthony Goldstein', 3),
    ('Justin Finch-Fletchley', 4);
