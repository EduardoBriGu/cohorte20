/*  CONST  -  LET  -  SON LOCALES, FUERA DEL BLOQUE NO SERVIRÁ
    VAR   -  SON GLOBALES
*/

const numeros = [2, 4, 6, 57, 200]
let suma = 0;

//forEach
//Recorre todo el arreglo y ejecuta el código que le indiquemos sobre los valores guardadas

// El parametro de la función sumar podría llamarse como quisieras 

/* let suma2 = numeros.forEach(function sumar(elemento){
  suma += elemento;
    suma = suma + elemento;
    return suma; 
});
 */

numeros.forEach((elemento, indice) => {
  console.log(elemento, indice)
})

// console.log(suma2)
console.log(numeros);

//Map 

let nuevoArr = numeros.map((elemento) => {
  return elemento * elemento;
});

console.log(nuevoArr)

//filter
//CREA UNA COPIA DEL ARREGLO ORIGINAL Y NOS PERMITE FILTRAR

const frutas = ["papaya", "Manzana", "Manzana", "Uva"];
let frutaFiltrada = frutas.filter ((fruta) => fruta.length !== 3);

console.log(frutaFiltrada);

