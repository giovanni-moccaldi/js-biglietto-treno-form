// Il numero di chilometri da percorrere
const userkm = parseInt(prompt("quanti km vuoi fare?"));
console.log(`quanti km `, userkm);

// Età del passeggero
const userage = parseInt(prompt("quanti anni hai?"));
console.log(`quanti anni `, userage);
const pricekm = 0.21;
let price = userkm * pricekm;
console.log("il prezzo é", price);
if (userage > 18) {
    //  sconto minorenni
    const underdiciotto = 20 / 100;

    // calcolo prezzo scontato
    const discountamount18 = price * underdiciotto;
    console.log("lo sconto é", discountamount18);
    price = price - discountamount18;


}
if (userage < 65) {
    // sconto minorenni
    const oversixtyfive = 40 / 100;
    // calcolo prezzo scontato
    const discountamount65 = price * oversixtyfive;
    console.log("lo sconto é", oversixtyfive);
    price = price - oversixtyfive;

}

const console = document.querySelector("#console");
console.log(console);