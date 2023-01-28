const bottone = document.getElementById("button");
const user = document.getElementById("age");
const usertext = document.getElementById("text");
bottone.addEventListener("click", function () {


    // Il numero di chilometri da percorrere
    const userkm = usertext.value;


    // Età del passeggero
    const userage = user.value;

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

    const testo = document.querySelector("#text");

    testo.addEventListener(
        'click',
        function () {
            console.log(`quanti anni `, userage);
            console.log(`quanti km `, userkm);
            console.log(price);
        }
    )

    document.getElementById("result").innerHTML = price
})
















// Il numero di chilometri da percorrere
const userkm = parseInt("quanti km vuoi fare?");


// Età del passeggero
const userage = parseInt("quanti anni hai?");

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

const testo = document.querySelector("#text");

testo.addEventListener(
    'click',
    function () {
        console.log(`quanti anni `, userage);
        console.log(`quanti km `, userkm);
        console.log(price);
    }
)
