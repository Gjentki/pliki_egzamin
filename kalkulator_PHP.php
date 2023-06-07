<!DOCTYPE html>
<html>
<head>
    <title>Kalkulator</title>
</head>
<body>
    <h2>Kalkulator</h2>
    <form method="POST" action="">
        <input type="text" name="liczba1" placeholder="Liczba 1" required>
        <select name="operator">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
        <input type="text" name="liczba2" placeholder="Liczba 2" required>
        <input type="submit" name="oblicz" value="Oblicz">
    </form>
    <?php
    if(isset($_POST['oblicz'])){
        $liczba1 = $_POST['liczba1'];
        $liczba2 = $_POST['liczba2'];
        $operator = $_POST['operator'];
        $wynik = '';

        switch($operator){
            case '+':
                $wynik = $liczba1 + $liczba2;
                break;
            case '-':
                $wynik = $liczba1 - $liczba2;
                break;
            case '*':
                $wynik = $liczba1 * $liczba2;
                break;
            case '/':
                if($liczba2 != 0){
                    $wynik = $liczba1 / $liczba2;
                } else {
                    echo "Błąd: Nie można dzielić przez zero!";
                }
                break;
            default:
                echo "Błąd: Nieznany operator!";
                break;
        }

        if($wynik !== ''){
            echo "<h3>Wynik: $liczba1 $operator $liczba2 = $wynik</h3>";
        }
    }
    ?>
</body>
</html>
