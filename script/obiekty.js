'use script';

function Osoba(imie,nazwisko) {
    
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.wzrost;
    this.oczy;
    this.wyswietlInfo = function () {
        console.log("Imie: " + this.imie + "\n"
                    + "Nazwisko: " + this.nazwisko + "\n"
                    + "Wzrost: " + this.wzrost + "\n"
                    + "oczy: " + this.oczy);
    }
}

var klaudia= new Osoba ('Klaudia', 'Przespolewska');

klaudia.wyswietlInfo();



/*var Osoba = {
    imie: "Michał",
    wzrost: 180,
    wyswietlDetale: function() {
        console.log( this.imie + " " + this.wzrost );
    }
}

/*Osoba.imie = "Kasia";
Osoba.wzrost = 170;*/

/*Osoba.wyswietlDetale();

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

/*Ja.oczy= "zielone";
console.log(Ja.oczy)

/*delete Ja.oczy;
Ja.wyswietlDetale();*/



