/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va scritto in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

// Chiedere il numero di Km da percorrere
let numKm = parseInt(prompt("Quanti km devi percorrere?"));

//Validazione del dato numerico per i km
// if (isNaN(numKm)) {
//   alert("Inserisci un valore numerico!");
// }

// Chiedere quanti anni ha l'utente
let age = parseInt(prompt("Quanti anni hai?"));

//Validazione del dato numerico per l'età
// if (age <= 0 || isNaN(age)) {
//   alert("Inserisci un'età valida!");
// }

//Stabiliamo il prezzo con una nuova variabile
let price = 0.21 * numKm;

//Stabiliamo gli sconti in base all'età: se < 18 del 20%, se > 65 del 40%, sennò paga a prezzo fisso
if (isNaN(numKm) || isNaN(age)) {
  alert("Inserisci un valore numerico!");
  let numKm = prompt("Quanti km devi percorrere?");
  let age = prompt("Quanti anni hai?");
} else if (age < 18) {
  price = price * 0.8;
} else if (age > 65) {
  price = price * 0.6;
} else {
  price = price;
}

document.getElementById("messaggio").innerHTML = `Il prezzo è ${price.toFixed(
  2
)}€`;
