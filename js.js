// Funkcja 1: Wyświetlanie alertu po kliknięciu przycisku
function funkcja1() {
    alert('Kliknięto przycisk!');
}

// Funkcja 2: Zmiana zawartości elementu po kliknięciu przycisku
function funkcja2() {
    document.getElementById('mojElement').innerHTML = 'Nowa zawartość';
}

// Funkcja 3: Wywołanie funkcji JavaScript po kliknięciu przycisku
function funkcja3() {
    alert('Funkcja JavaScript została wywołana!');
}

// Funkcja 4: Przekazywanie parametrów do funkcji JavaScript po kliknięciu przycisku
function funkcja4(imie) {
    alert('Witaj, ' + imie + '!');
}

// Funkcja 5: Wywołanie zewnętrznej funkcji JavaScript po kliknięciu przycisku
function funkcja5() {
    mojaZewnetrznaFunkcja();
}

// Funkcja zewnętrzna
function mojaZewnetrznaFunkcja() {
    alert('To jest zewnętrzna funkcja JavaScript!');
}



//CZĘŚĆ HTML POTRZEBNA DO POWYŻSZYCH FUNKCJI JESLI JEST TO WYMAGANE
/* <button onclick="funkcja1()">Funkcja 1</button>
    <button onclick="funkcja2()">Funkcja 2</button>
    <button onclick="funkcja3()">Funkcja 3</button>
    <button onclick="funkcja4('John')">Funkcja 4</button>
    <button onclick="funkcja5()">Funkcja 5</button>
    <div id="mojElement">Początkowa zawartość</div> */









// Zmiana obrazka po wybraniu elementu z listy select
function changeImage() {
    var selectElement = document.getElementById('mySelect');
    var selectedOption = selectElement.options[selectElement.selectedIndex].value;
    var imageElement = document.getElementById('myImage');
    imageElement.src = selectedOption;
}

// Zmiana tła/koloru elementu po wywołaniu funkcji OnClick
function changeBackground() {
    var element = document.getElementById('myElement');
    element.style.backgroundColor = 'blue';
    element.style.color = 'white';
}

// Zmiana tekstu po wybraniu opcji z formularza
function changeText() {
    var selectElement = document.getElementById('myFormSelect');
    var selectedOption = selectElement.options[selectElement.selectedIndex].text;
    var textElement = document.getElementById('myText');
    textElement.innerHTML = 'Wybrano: ' + selectedOption;
}



//CZĘŚĆ HTML POTRZEBNA DO POWYŻSZYCH FUNKCJI JESLI JEST TO WYMAGANE
{/* <label for="mySelect">Wybierz obrazek:</label>
    <select id="mySelect" onchange="changeImage()">
        <option value="image1.jpg">Obrazek 1</option>
        <option value="image2.jpg">Obrazek 2</option>
        <option value="image3.jpg">Obrazek 3</option>
    </select>
    <br>
    <img id="myImage" src="image1.jpg" width="200" height="150">
    <br><br>
    <button onclick="changeBackground()">Zmień tło/kolor</button>
    <div id="myElement">To jest mój element</div>
    <br><br>
    <form>
        <label for="myFormSelect">Wybierz opcję:</label>
        <select id="myFormSelect" onchange="changeText()">
            <option>Opcja 1</option>
            <option>Opcja 2</option>
            <option>Opcja 3</option>
        </select>
    </form>
    <p id="myText">Wybrano: Opcja 1</p> */}