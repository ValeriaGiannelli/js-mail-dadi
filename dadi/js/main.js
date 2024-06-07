// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.


// genero un numero random per utente
let userNumber = Math.floor(Math.random()*6+1);
console.log("Il numero casauale della persona è:", userNumber);


// genero un numero random per PC
let pcNumber = Math.floor(Math.random()*6+1);
console.log("Il numero casauale del PC è:", pcNumber);


// confronto i due numeri:

    // se numero utente più alto -> scrivi "Utente ha vinto"



    // altrimenti -> "Ha vinto il PC"