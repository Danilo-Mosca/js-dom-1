"use strict";
console.clear();

// Seleziono il pulsante
const btnTurn = document.getElementById("turnLight");
// Verifico da console.log se ho selezionato correttamente il pulsante
console.log(btnTurn);

// Seleziono l'immagine
const imageSelected = document.getElementById("imageLamp");
// Verifico console.log se ho selezionato correttamente l'immagine
console.log(imageSelected);

// Creo l'ascoltatore di eventi
btnTurn.addEventListener("click", function () {
    // Cambio l'immagine modificando l'attributo src
    // Cambio immagine a seconda di quella visualizzata
    // uso include perchè la proprietà src include tutto l'url assoluto,
    // non solo il percorso relativo "img/white_lamp.png"
    if (imageSelected.src.includes("img/white_lamp.png")) {
        imageSelected.src = "img/yellow_lamp.png";
        // L'istruzione seguente capovolge l'immagine orizzontalmente
        // per permettere alle due immagini di essere visualizzate nello
        // stesso punto (altrimenti l'immagine con la lampadina accesa)
        // verrebbe visualizzata leggermente più a destra rispetto a quella
        // spenta
        imageSelected.style.transform = "scaleX(-1)";
        //Modifico il testo del pulsante
        btnTurn.innerHTML = "Spegni";
    }
    else {
        imageSelected.src = "img/white_lamp.png";
        //Ruoto l'immagine
        imageSelected.style.transform = "scaleX(+1)";
        //Modifico il testo del pulsante
        btnTurn.innerHTML = "Accendi";
    }

});