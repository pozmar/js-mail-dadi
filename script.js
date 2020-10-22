//esercizio email
//creo array con mail possibili
var emails = ["visitatore@gmail.it","visitatore@gmail.com","visitatore@libero.it","visitatore@alice.it","visitatore@hotmail.it"];
//creo input per inserimento mail
var inputEmail = prompt("Ciao visitatore! Inserisci la tua mail");
//creo una var message da inserire poi nell'html
var message = "Mi dispiace, non abbiamo trovato la tua mail";
//creo ciclo con condizione per verificare la mail inserita
for (var i = 0; i < emails.length; i++){
  if (emails[i] == inputEmail){
    message = "Benvenuto!";
    console.log("Benvenuto visitatore!");

  } else{
    message;
    console.log("Mi dispiace, non abbiamo trovato la tua mail");
  }
}
//creo messaggi di output
alert(message);
