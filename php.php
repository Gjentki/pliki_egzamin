<?php

// Podstawowe elementy PHP

// Zmienne
$liczba = 10;
$tekst = "Hello, world!";
$tablica = array(1, 2, 3);

// Instrukcje warunkowe
if ($liczba > 5) {
    echo "Liczba jest większa od 5.";
} else {
    echo "Liczba jest mniejsza lub równa 5.";
}

// Pętle
for ($i = 0; $i < 5; $i++) {
    echo $i;
}

// Funkcje
function dodaj($a, $b) {
    return $a + $b;
}

$wynik = dodaj(3, 5);
echo $wynik;

// Przykład współpracy z bazą danych SQL (MySQL)

// Połączenie z bazą danych
$host = "localhost";
$username = "nazwa_uzytkownika";
$password = "haslo";
$database = "nazwa_bazy_danych";

$connection = mysqli_connect($host, $username, $password, $database);

// Sprawdzenie połączenia
if (!$connection) {
    die("Błąd połączenia z bazą danych: " . mysqli_connect_error());
}

// Zapytanie SQL
$query = "SELECT * FROM tabela";
$result = mysqli_query($connection, $query);

// Obsługa wyników zapytania
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        echo "ID: " . $row["id"] . ", Pole 1: " . $row["pole1"] . ", Pole 2: " . $row["pole2"];
    }
} else {
    echo "Brak wyników.";
}

// Zamknięcie połączenia z bazą danych
mysqli_close($connection);

?>
