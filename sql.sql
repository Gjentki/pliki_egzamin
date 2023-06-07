-- Tworzenie tabeli
CREATE TABLE PrzykladowaTabela (
    id INT PRIMARY KEY,
    imie VARCHAR(50),
    wiek INT,
    data_urodzenia DATE
);

-- Wstawianie danych do tabeli
INSERT INTO PrzykladowaTabela (id, imie, wiek, data_urodzenia)
VALUES (1, 'Jan', 30, '1992-05-10');

-- Aktualizacja danych w tabeli
UPDATE PrzykladowaTabela
SET wiek = 31
WHERE id = 1;

-- Usuwanie danych z tabeli
DELETE FROM PrzykladowaTabela
WHERE id = 1;

-- Zapytanie SELECT
SELECT *
FROM PrzykladowaTabela;

-- Warunek WHERE
SELECT *
FROM PrzykladowaTabela
WHERE wiek > 25;

-- Sortowanie wyników
SELECT *
FROM PrzykladowaTabela
ORDER BY imie ASC;

-- Łączenie tabel
SELECT *
FROM TabelaA
JOIN TabelaB ON TabelaA.id = TabelaB.id;

-- Grupowanie wyników
SELECT wiek, COUNT(*)
FROM PrzykladowaTabela
GROUP BY wiek;

-- Funkcje agregujące
SELECT AVG(wiek) AS sredni_wiek
FROM PrzykladowaTabela;

-- Podzapytania
SELECT *
FROM PrzykladowaTabela
WHERE wiek > (SELECT AVG(wiek) FROM PrzykladowaTabela);

-- Złączanie warunków
SELECT *
FROM PrzykladowaTabela
WHERE wiek > 25 AND imie LIKE 'A%';

-- Inne funkcje
SELECT UPPER(imie) AS imie_wielkimi_literami
FROM PrzykladowaTabela;

-- Tworzenie indeksu
CREATE INDEX idx_imie
ON PrzykladowaTabela(imie);

-- Tworzenie widoku
CREATE VIEW WidokPrzyklad AS
SELECT *
FROM PrzykladowaTabela
WHERE wiek > 25;
