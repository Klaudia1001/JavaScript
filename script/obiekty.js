'use script';

var Osoba = {
    imie: "Michał",
    wzrost: 180,
    wyswietlDetale: function() {
        console.log( this.imie + " " + this.wzrost );
    }
}

/*Osoba.imie = "Kasia";
Osoba.wzrost = 170;*/

Osoba.wyswietlDetale();

var Ja = {
    imie:"Klaudia",
    wzrost: 172,
    wyswietlDetale: function() {
          console.log( this.imie + " " + this.wzrost+ " "+ this.oczy)
    }
}

Ja.wyswietlDetale();
Ja.oczy= "zielone";

/*Ja.imie ="Anita";
Ja.wyswietlDetale();*/

Ja.oczy= "zielone";
console.log(Ja.oczy)

/*delete Ja.oczy;
Ja.wyswietlDetale();*/



