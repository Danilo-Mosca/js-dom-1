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
btnTurn.addEventListener("click", function() {
    //Cambio l'immagine modificando l'attributo src
    imageSelected.src = "../img/yellow_lamp.png";
    // L'istruzione seguente capovolge l'immagine orizzontalmente
    // per permettere alle due immagini di essere visualizzate nello
    // stesso punto (altrimenti l'immagine con la lampadina accesa)
    // verrebbe visualizzata leggermente più a destra rispetto a quella
    // spenta
    imageSelected.style.transform = "scaleX(-1)";
});
