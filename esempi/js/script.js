// Chiediamo all'utente due parole in successione.
// let parola1 = prompt('Inserisci la prima parola');
// let parola2 = prompt('Inserisci la seconda parola');

// console.log(parola1, parola2);
// console.log(parola1.length, parola2.length);
// // console.log('pippo' == 'pippo');

// // Andiamo poi a verificare quale delle due parole è più lunga
// if (parola1.length > parola2.length) {
//   console.log('parola 1 maggiore di parola 2');
// } else if (parola1.length < parola2.length) {
//   console.log('parola 1 minore di parola 2');
// } else {
//   console.log('le parole sono lunghe uguale');
// }

//stampiamo in console un messaggio appropriato.

// età: chiedere all'utente con due prompt gli anni di due persone e comunicare quale delle due è più grande
// let etaUno = parseInt(prompt('Età primo utente'));
// let etaDue = parseInt(prompt('Età secondo utente'));
// console.log(etaUno);
// console.log(etaDue);


// if (etaUno > etaDue) {
//   console.log('Il primo utente è più grande');
// } else if (etaDue > etaUno) {
//   console.log('Il secodno utente è più grande');
// } else {
//   console.log('Hanno la stessa età');
// }

// // Dobbiamo chiedere all'utente di inserire un numero
// let numberOne = parseInt(prompt('Inserisci un numero'));
// // let numberOne = 5;

// // inseriamo un numero randomico per il computer
// let numberTwo = Math.floor(Math.random() * 100) + 1;

// // let numberTwo = 5;
// console.log(numberOne, numberTwo);

// // Somma
// let sum = numberOne + numberTwo;
// console.log(sum);
// // console.log(sum % 2);
// // sommare i due numeri e vediamo se il risultato e pari o dispari
// if (sum % 2 === 0) { //pari
//   console.log('pari');
// } else {
//   console.log('dispari');
// }

// console.log('resto divisione', 13 % 2);
// console.log('inverso divisione', !(sum % 2));



//Date

//quanti minuti mancano per arrivare alla fine dell'ora
const minutiOra = 60;
const now = new Date();
const minuti = now.getMinutes();
let risultato = minutiOra - minuti;
console.log(minutiOra, now, minuti, risultato);

console.log(now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds());


// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km(0.21 € al km) 

// va applicato uno sconto del 20 % per i minorenni
// va applicato uno sconto del 40 % per gli over 65.

// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.