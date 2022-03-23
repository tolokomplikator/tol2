var targetNumber = Math.floor(Math.random() * 13) + 1; //losowanie liczby z zakresu 7-13.
var liczbaProb = 0; //ilosc prób
var koniecGry = 5; //po ilu próbach kończymy grę
var n = targetNumber.toString(); //konwersja randomowej liczby na string

var liczba = document.getElementById('liczba');

var button = document.getElementById('button').onclick = function check() {
if (liczbaProb >= koniecGry){ // warunek wywolania konca gry po przekroczeniu wartosci zmiennej koniecGry
      showLoose();
  }else
  if (liczba.value != n) { //warunek wywołania erroru po nieprawidlowej odpowiedzi
      showError();
  }else if (liczba.value == n) { //warunek wywołania funkcji showWin
      showWin();
  }
    
    
  
};
function showWin() {
    liczbaProb++;
    alert('Wygrałeś w : ' + liczbaProb + ' ruchach!');
}

function showLoose() {
    alert('Po 5 ruchach nie zgadłeś liczby. Kończysz grę. Wylosowana liczba to: ' + n);
}

function showError() {
    liczbaProb++;
    alert('Podałeś zlą liczbę.');
    
}