//Användare får knappa in något i pop-up ruta
let userInput = prompt("Skriv in något");

//Kommentar
console.log("Lite kod");
//Allting efter två slashes blir kommentar

/* 
Detta
gör
att
flera
rader
blir
kommentar
*/

// Textsträng
String = "Hello world";

// Nummer 

Number = 1;

// Boolean - Innehåller true/false värden
Boolean = true;
Boolean = false;

// Array - lagrar saker som siffror/text
Array [1, 2 ,3];

//Object - datatyp


//Undefined och null - signalerar att ett värde inte kan hittas/finns

let myVariable; //Denna får undefined eftersom ett värde inte finns



//ARRAY FORTS

let emptyArray = []; //Tom array
let arrayOfNumbers = [1, 2, 3, 4]; //Nummer array
let arrayOfStrings = ["Ett", "Två", "Tre", "Fyra"]; //Sträng array
let arrayOfMixedTypes = [1, "Ett", 2, "Två", 3, "Tre", 4, "Fyra"]; // Nummer och sträng array
let arrayOfArrays = [[true, 1, "Ett"], [1, 2, 3] ["Ett", "Två", "Tre"]] // Nummer, sträng och boolean array


// Index:
// Varje array har ett index, varje index börjar på 0
// Varje "värde" i en array kallas för ett element
//            0    1    2    4
let array = ["A", "B", "C", "D"];


//För att komma åt element i en array används index:
let array1 = ["A", "B", "C", "D"];

let elementA = array[0]; // Blir "A"
let elementB = array[1]; // Blir "B"
let elementD = array[2]; // Blir "D"

// Variabler

//Variabel defineras
let myAge = 27;

// Namn skrivs 10ggr i textsträng
console.log("Christian");
console.log("Christian");
console.log("Christian");
console.log("Christian");
console.log("Christian");
console.log("Christian");
console.log("Christian");
console.log("Christian");
console.log("Christian");
console.log("Christian");

// Byter namn manuellt i varje sträng till Meza
console.log("Meza");
console.log("Meza");
console.log("Meza");
console.log("Meza");
console.log("Meza");
console.log("Meza");
console.log("Meza");
console.log("Meza");
console.log("Meza");
console.log("Meza");

// Byter nu istället med en variabel, vilket är lättare
let name = "Christian";
console.log(name);
console.log(name);
console.log(name);
console.log(name);
console.log(name);
console.log(name);
console.log(name);
console.log(name);
console.log(name);
console.log(name);
console.log(name);

let name2 = "Mezea";
console.log(name);
console.log(name);
console.log(name);
console.log(name);
console.log(name);
console.log(name);
console.log(name);
console.log(name);
console.log(name);
console.log(name);

//LOOPS

// "For" loop som räknar från 1 till 100 och printar ut det
for (let i = 1; i <= 100; i++) {
    console.log(i);
}