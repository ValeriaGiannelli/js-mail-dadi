// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// creao una lista fittizia di mail
const mailList = ["geralt@rivia.com", "gandalf@contea.it", "doctor@who.org"];
console.log(mailList);

// chiedere alla persona di inserire la propria mail
const mailUser = prompt("Inserisci la tua mail:");
console.log("la mail che ha inserito l'utente è:", mailUser);

// creo una variabile dove salverò il dato che uscirà dal primo ciclo FOR
let presence;

// prendo gli elementi della pagina
const showParty = document.querySelector(".party");
console.log(showParty);

const showNotParty = document.querySelector(".not_party");
console.log(showNotParty);

const welcomeName = document.getElementById("welcome_name");
const notWelcomeName = document.getElementById("not_welcome_name");

// controllare che la sua mail sia nella lista:
// estraggo i singoli elementi della lista e li confronto con la mail della persona
for(i = 0; i < mailList.length; i++){
    console.log(mailList[i]);
    
    if(mailUser === mailList[i]){  // confronto la mail della persona con la lista
        presence = "Sei invitato"; //salvo nella variabile un dato "positivo" se c'è corrispondenza
    } 
}

// console.log(presence);


// Capire se la ricerca precedente mi ha dato un riscontro positivo o negativo
if(presence === "Sei invitato"){  // se nella ricerca di prima la variabile si è "riempita" stampo "benvenuto alla festa"
    showParty.classList.add("show");
    welcomeName.innerHTML = `Welcome to the party ${mailUser} (or not?)`; 
    console.log("Benvenuto alla festa!!")
} else { // se la mail non corrisponde a nessuno degli elementi e quindi la variabile è rimasta "undefine" allora stampa "Non sei in lista"
    showNotParty.classList.add("show");
    notWelcomeName.innerHTML = `I am sorry ${mailUser} but:`; 
    console.log("Mi dispiace ma non sei in lista")
}



   



    