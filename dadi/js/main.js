// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.


// genero un numero random per utente
let userNumber = Math.floor(Math.random()*6+1);
console.log("Il numero casauale della persona è:", userNumber);


// genero un numero random per PC
let pcNumber = Math.floor(Math.random()*6+1);
console.log("Il numero casauale del PC è:", pcNumber);

// prendo gli elementi html dove scriverò numeri random e risultato
const showUserNumber = document.getElementById("user_number");
const showPcNumber = document.getElementById("pc_number");
const showResult = document.getElementById("result");

// aggiungo agli elementi i numeri random
showUserNumber.innerHTML = `Il tuo numero è: ${userNumber}`;
showPcNumber.innerHTML = `Il numero del PC è: ${pcNumber}`;

// confronto i due numeri:

if(userNumber > pcNumber){ // se numero utente più alto -> scrivi "Utente ha vinto"
    showResult.innerText = "Hai vinto!";
    console.log("Hai vintooo!");
} else if(userNumber < pcNumber){ // se numero utente più basso -> "Ha vinto il PC"
    showResult.innerText = "Ha vinto il PC (sorry, not sorry)";
    console.log("Ha vinto il PC");
} else { //altrimenti il risultato è pari
    showResult.innerText = "Pari patta";
    console.log("Pari patta");
}


