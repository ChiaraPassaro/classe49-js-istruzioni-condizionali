// alert('Ciao');

// chiedere il nome all'utente
const userName = prompt('Inserisci il tuo nome');
console.log('Nome Utente', userName);
// chiedere il cognome all'utente
const userLastName = prompt('Inserisci il tuo cognome');
console.log('Cognome Utente', userLastName);

// chiedere il colore preferito all'utente
const userColor = prompt('Inserisci il tuo colore preferito');
console.log('Colore Utente', userColor);

// unire questi valori e aggiungere 21 alla Fine
const numberUser = parseInt(prompt('inserisci un numero'));
let number = 5;
number = number + numberUser;
console.log('somma', number);
// let numberUser = parseInt(prompt('inserisci un numero'));
// numberUser = numberUser + 5;
// console.log(numberUser);


let password = userName + userLastName + userColor + number;
console.log(password);

// document.writeln(`
// <div>
//   ${password} 
// </div>
// `);

console.log(document.getElementById('password').innerHTML);

document.getElementById('password').innerHTML = document.getElementById('password').innerHTML + password;

// const htmlPassword = document.getElementById('password').innerHTML;
// htmlPassword = htmlPassword + password;


// Stampare in console il risultato
// Stampare in html 

