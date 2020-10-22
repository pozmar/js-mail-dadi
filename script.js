//esercizio email
//creo var con inserimento mail
var emails = ["visitatore@gmail.it","visitatore@gmail.com","visitatore@libero.it","visitatore@alice.it","visitatore@hotmail.it"];
var inputEmail = prompt("Ciao visitatore! Inserisci la tua mail");
var message = "Mi dispiace, non abbiamo trovato questa mail";
for (var i = 0; i < emails.length; i++){
  if (emails[i] == inputEmail){
    message = "Benvenuto visitatore!";
  }
}

console.log(message);
