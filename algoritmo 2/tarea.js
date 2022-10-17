
/*Crear un programa en Javascript que realice lo siguiente:
-Debe solicitar al usuario 3 números por aviso y guardarlos en sus respectivas variables.
-Debe analizar los números, identificar cuál es el número mayor, el número del centro y el número menor.
-Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
-Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.
Prueba tu programa con las siguientes entradas para asegurarte de que funcione correctamente:
Entradas: 
4, 4, 2.
Salida:
4, 4, 2.
2, 4, 4.

Entradas: 
4, 2, 4.
Salida:
4, 4, 2.
2, 4, 4.

Entradas: 
2, 4, 4.
Salida:
4, 4, 2.
2, 4, 4.

Pruébalo con la combinación de números que se te preven.
Al final de tu práctica, tienes que subir el ejercicio a tu repositorio de GitHub.
Colócalo en un repositorio llamado “logica-programacion-1”
Sugerencias:

Recuerda convertir un número el valor solicitado por aviso y verificar que sea un número para evitar errores en tu programa.
Recuerda que para mostrar mensajes por consola o por el DOM, debes crear un archivo HTML y enlazar tu script.
Piensa en las posibles combinaciones de números, para ayudarte a desarrollar un algoritmo y el pseudocódigo. */


/*let num1 = "escoge un primer numero "
let num2 = "escoge un segundo numero "
let num3 = " escoge un tercer numero "

prompt (num1)
prompt (num2)
prompt (num3)


if (num1>num2>num3) {
    console.log(num1, num2, num3).shift

}
let */
/*
let num1;
num1 = prompt("escribe un primer numero: ");

let num2;
num2 = prompt("escoge un segundo numero: ");

let num3;
num3 = prompt("Escoge un tercer numero: ");
*/

/* let arreglo = [1, 2, 3];

if (arreglo[0 == 1 == 2]) {
    alert(arreglo.sort(function (a, b){
        return a - b;
    }))
}

alert(arreglo.sort(function (a, b){
    return a - b;
}))

alert(arreglo.sort(function (a, b){
    return b - a;
})) */

/*
if (num3 !== num1 !== num2) {
    arreglo.sort (function order(a,b) {return a - b});
}
alert(arreglo);


if (num2<num3<num1) {
    alert (arreglo.sort (function order(a,b) {return a - b}))

}

if (num1<num2<num3) {
    alert (arreglo)
}
*/


/*let acomodo;
acomodo = alert("los numeros son: " + num1  + num2  + num3); arreglo.sort();   (num1, num2, num3);

numeros.sort(function order(a,b) {return a - b});  //función callback  (a,b) => a - b
console.log(numeros);

if(num1>num2 y num1>num3){

If(num2>num3){
Imprimir num3,num2,num1


}Else{
Imprimir num2,num3,num1

if(num1>num2 && num1>num3){

    If(num2>num3){
    alert(num3,num2,num1)
    
    } else {
    alert (num2,num3,num1)
    }

 */

    //

    let num1;
    num1 = prompt("escribe un primer numero: ");
    
    let num2;
    num2 = prompt("escoge un segundo numero: ");
    
    let num3;
    num3 = prompt("Escoge un tercer numero: ");
    
    var arrayNumbers = [num1 , num2 , num3];
    
    
    var mayor = (arrayNumbers.sort(function (a, b){
        return b - a;
    }));

    alert ("De mayor a menor es: " + mayor);

    var menor = (arrayNumbers.sort(function (a, b){
        return a - b;
    }));
    alert ("De menor a mayor es: " + menor);
    

    // alert("De menor a mayor es " + menor + "De mayor a menor es " + mayor)

    /*
    alert
    
= (arrayNumbers.sort(function (a, b){
    return b - a;
}))

    alert(arrayNumbers.sort(function (a, b){
        return a - b;
    }))
*/
