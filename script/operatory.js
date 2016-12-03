'use strict';

var liczba1 = 5;
var liczba2 = 6;

var wynik;

wynik = liczba1 % liczba2;
console. log(wynik);

while (liczba2 < liczba1) {
    console. log(liczba1);
    --liczba1;
}

(2>1) ? console.log("tak") : console.log("nie");

//? rozpisanie warunku z wykorzystaniem if //

if ("2"=== 2) {
    document.write("prawda");
} else {
    document.write("Nie prawda");
}

if (("2" !==2) && (8>4)) {
    document.write("<br> prawda");
}



//negacja strat
if (!(("2" !==2) && (8>4))) {
    document.write("<br> prawda");
}
//negacja stop


//ćwiczenie start
var liczba3 = 6, liczba4 = 7;
(liczba4>=liczba3) ? console.log("tak większe") : console.log("nie mniejsze")


var liczba5 = 11, liczba6 = 7;
!(liczba5>=liczba6 || (liczba4==liczba5)) ?  console.log("tak większe") : console.log("nie mniejsze")