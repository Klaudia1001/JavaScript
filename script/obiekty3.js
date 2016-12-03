'use script';

function Laptop (marka, kolor, stan) {
    this.marka= marka;
    this.kolor= kolor;
    this.stan= stan;
    this.wyswietlInfo = function() {
        console.log( "Marka: " + this.marka + "\n"
                    + "Kolor: " + this.kolor + "\n"
                    + "Stan: " + this.stan + "\n")
    }
}

var acer = new Laptop ('Acer', 'Czarny', 'Używany');

acer.wyswietlInfo();