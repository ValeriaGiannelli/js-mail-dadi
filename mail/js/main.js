// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// creao una lista fittizia di mail
const mailList = ["geralt@rivia.com", "gandalf@contea.it", "doctor@who.org"];
console.log(mailList);

// chiedere alla persona di inserire la propria mail
const mailUser = prompt("Inserisci la tua mail:");
console.log("la mail che ha inserito l'utente è:", mailUser);

// controllare che la sua mail sia nella lista:

    // estraggo i singoli elementi della lista
for(i = 0; i < mailList.length; i++){
    console.log(mailList[i]);

}


    // confronto il primo con la mail della persona


    // se diverso, procedo con il prossimo


    // se trovo un elemento simile chiudo la ricerca e stampo "benvenuto alla festa"



    // se la mail non corrisponde a nessuno degli elementi allora stampa "Non sei invitato"