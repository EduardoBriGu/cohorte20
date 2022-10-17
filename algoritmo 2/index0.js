/* los posibles codigos para declarar valores son: var, let y constant 

let miVariable = prompt(" ¿Cuál es tu nombre? ");

function saludoPer() {
    alert(miVariable);
} 
function suma() {
    let num1 = parseInt( prompt("De el valor del numero 1: "));
    let num2 = parseInt( prompt("De el valor del numero 2: "));
    let resultado = num1 + num2;
    alert(resultado);
    return resultado

saludoPer(miVariable);

let r = suma();
alert(r);*/


//suma
function suma() {
    let valor1 = 7;
    let valor2 = 10;
    return valor1 + valor2;
}
console.log("resultado de la suma:", suma()); 

//resta
function resta () {
    let valor3 = 10;
    let valor4 = 7;
    return valor3 - valor4;
}
console.log("resultado de la resta: ", resta());

//multiplicacion 
function multiplicacion() {
    let valor5 = 5;
    let valor6 = 2;
    return valor5*valor6;
}
console.log("el resultado de la multiplicacion", multiplicacion());


//division 
function division() {
    let valor7 = 10;
    let valor8 = 2;
    return valor7/valor8;
}
console.log("el resultado de la division", division());

//residuo
function residuo() {
    let variable1 = 7;
    let variable2 = 2;
    let resultado = (variable1%variable2);
    return resultado;
}
console.log("el residuo es", residuo());

//adicionales 
// incremento 
function adicionales() {
    let num1 = 7;
    let resultado = (++num1);
    return resultado;
}
console.log("el incremento es", adicionales());

function adicionales2() {
    let num1 = 7;
    num1 /= num1;
    return num1;
}
console.log("el numero adicional es", adicionales2());

//decremento 
function adicionales1() {
    let num1 = 7;
    let resultado = (--num1);
    return resultado;
}
console.log("el decremento es", adicionales1());

//funcion if/ funcion de control console.log("el resultado de la multiplicacion", multiplicacion1());

function multiplicacion1() {
    let valor5 = 30;
    let valor6 = 0;
    if (valor6 != 5) {
    return valor5/valor6;
} 

}
console.log("el denominador es 0 " + multiplicacion1());


//boleanos 
function logico() {
    let valido = 5;
    let valido2 = 3;
    if (valido > valido2) {
    console.log("el mayor es " + valido2);
    
    }
    //console.log("el valor boleano es:" + valido)
}
logico();


function edad() {
    let miEdad = 18;
    if(miEdad >= 18){
        console.log("Eres mayor de edad ");
    } else {
    console.log("No eres mayor de edad ");
    }
}
edad();
/* esto es un comentario en bloque 

- else es si la condicional no se cumple "si no tienes 18 años, no eres mayor de edad"

-los operadores logicos hacen estructuras de controles más grandes:
and, or,  not
&&   ||    !

*/

//and &&
function conjuncion(){
    let valor1= false;
    let valor2 = true;
    if (valor1 && valor2){
        console.log("El valor 1 y el valor 2 son verdaderos ");
    } else{
        console.log("un valor es falso ")
    }
}
conjuncion()

//or ||

function disyuncion (){
    let valor1 = false;
    let valor2 = true;
    if (valor1 || valor2){
        console.log("El operdador or es verdadero ");
    }else{
        console.log("El operador or es falso ");
    }
}
disyuncion()

//not !
function negacion (){
    let valor1 = false;
    if (!(!valor1)){
        console.log("El valor es "+ valor1);
    }else{
        console.log("El valor negado es " + valor1);
    }
}
negacion()