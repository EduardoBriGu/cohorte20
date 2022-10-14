//propiedad de arreglos


//length

const frutas = ["Manzanas ", "guayabas", "Peras ", "Platanos"];
console.log(frutas);

console.log(frutas.length);


//Métodos para agregar  -   acciones 

//push()   - agrega elementos al final del array

/*frutas.push("Sandía", "Limón")
console.log(frutas)*/

let num = frutas.push("Sandía", "Limón");
console.log(frutas);

//unshift()     - agrega elementos al inicio del array

frutas.unshift("Guanábana", "Melón");
console.log(frutas);

//Metodos para quitar  - acciones

//pop()  -  remueve el ultimo elemento de un array

frutas.pop();
console.log(frutas);

let elemento = frutas.pop();
console.log(elemento);

//shift()
let elemento2 = frutas.shift();
console.log(frutas);
console.log(elemento2);

frutas[0];


//indexof()
console.log(frutas.indexOf("Manzanas"));
console.log(frutas.indexOf("Platanos"));

//reverse()     arreglo[N°]. reverse()
frutas.reverse();
console.log(frutas);

frutas.reverse();
console.log(frutas);

//sort()
frutas.sort();
console.log(frutas);

const numeros = [1, 123, 1234, 4, 412, 296, 42367, 0]

//numeros.sort((a,b) => a - b);

numeros.sort(function order(a,b) {return a - b});  //función callback  (a,b) => a - b
console.log(numeros);


