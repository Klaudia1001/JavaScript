'use script';

var liczba1= 50;
var kolory=['żółty', 'pomarańczowy', 'łososiowy'];
kolory [3] = 'czarny';

console.log(kolory);

/*dodaje kolor na końcu*/
kolory.push("czerwony");
console.log(kolory);
/*STOP*/


kolory.pop();
console.log(kolory);
/*usuwa ostatni element tablicy*/

/*dodaje kolor na poczatku*/
kolory.unshift("zielony");
console.log(kolory);
/*STOP*/

var dlugoscTablicy;
var uniwersalnaZmienna;
dlugoscTablicy = kolory.unshift("zielony");


kolory.shift();

console.log(kolory.length);
console.log(kolory);

var koloryAny = ['niebieski', 'różówy', 'lazurowy', 'biały' ];
console.log(kolory.concat (koloryAny)); 

uniwersalnaZmienna = koloryAny.indexOf("niebieski");
console.log(uniwersalnaZmienna);


if (Array.isArray(liczba1)) {
    console.log("jest");
    
} else {
    console.log("nie jest");
    
}

/*console.log (koloryAny.slice(1,3)); ucina kolory od pierwszego i po 3 kolorze*/
koloryAny.splice(2,2,"brązowy", "złoty");
console.log (koloryAny);


console.log(koloryAny.toString());



/*for (var i=0; i < kolory.lenght; ++i) {
    console.log(i);
    console.log(kolory[i]);*/

/*sprawdzić powinno pokazywać numery i kolory*/

/*kolory.forEach(function (element, interation) {
    console.log(" Numer koloru"  + interation  +  element)
    
});
*/

/*var p1 = kolory.join();/*określam parametr*/
/*console.log(p1); /*co zwraca*/ 

/*dlugoscTablicy 
console.log(kolory.reverse()); odwraca kolejnosc kolorow*/

/*uniwersalnaZmienna=kolory.sort ();
console.log(uniwersalnaZmienna); sortuje od a do z */





