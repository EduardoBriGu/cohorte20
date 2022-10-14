//alert("Hola mundo desde visual estudio code");
//comentario de una línea 

/*
esto es un
bloque de
comentario
*/

// declaración de la variable 
//la lecturas de js es secuencial, es decir, se lee de arriba hacia abajo
// "miVarable = "hola"; no se puede declarar antes de poner un resultado a la variable 
let miVarable;

//con la variable "let" se le puede declarar valor después, sin embargo con la variable "const" se le debe de otorgar un valor cuando la declares
// se pueden poner cualquier cosa en "let" y en "const", sin importar si son numeros y letras 
//con "const" no se puede cambiar de valor, ya que significa constante y lo constante no varía 

//inicializaión de la variable 
const otrVariable =5;
miVarable = "hola";
let nombre = "Eduardo";

console.log(otrVariable);
console.log(miVarable);
console.log(nombre)

//mutación de valor o reasignación 
miVarable ="Adiós";

console.log(miVarable);

//valores primitivos 
//cuando es valor primitivo con "const" es en mayúsculas 
//string = cadenas de texto 
// palabras, nombres, caracteres 
let palabra = "Cualquier palabra, signos, números 1234!#%=!";
let palabra2 = 'Otra cualquier palabra, pero con una sola comilla';
console.log(palabra);
console.log(palabra2)

//number = numeros
let numero1 = 3
let numero2 = 12.65
let numero3 = -12.50
let fraccion = 1/2
console.log(numero1);
console.log(numero2);
console.log(numero3);
console.log(fraccion);
console.log(numero1,numero2,numero3);
console.log(numero1+numero2+numero3);
console.log("este numero es", numero3);
console.log("este numero es" + numero3);

console.log("1" + 1);
console.log("1" + "1");

//boolean = boleano 
//true-false       verdadero-falso
let verdadero = true;
let falso = false;
console.log(verdadero);
console.log(falso);

//null
// una variable que estamos dejando vacía, pero intencionalmente 
let valorNulo = null;
console.log(valorNulo);

//undefined
//estado
let varUn;
console.log(varUn);
console.log(varUn + "1");
console.log(varUn + 1);


//valores compuestos 



//operador typeof  -  nos permite conocer el tipo de dato 

let a = 1;
let b = "hola";
let c = true;
console.log(typeof a);
console.log(typeof (b));
console.log(typeof c);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof 31231);


