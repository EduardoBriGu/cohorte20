let miNombre = " Eduardo Briones Gutiérrez ";
console.log(miNombre);

function nombre (){
  let nombre = "Eduardo"
  console.log(nombre);
}
nombre();

function funcion1(){
  let valor = 2;
  valor = valor + 3;
  return valor;
}
let resultado = funcion1();
console.log("El resultado es: " + resultado);

//DECLARACIÓN GLOBAL 
let valor2 = 3;
function funcion2(){
  valor2 = valor2 + 5;
console.log("El resultado de valor2 es: " + valor2);
}
funcion2();


let variableGlobal = 5;
function funcion3(){
  let variableLocal = "El valor es: "
  console.log(variableLocal + variableGlobal);
}
funcion3();

function funcion4(valor){
  let numero = 6;
  numero = numero + valor;
  return numero;
}
let salida = funcion4(3);
console.log("El producto es: " + salida);


let miFuncion0 = function(parametro){
  parametro = parametro * 2;
  return parametro;
};
console.log("Llamando a la funcion anonima " + miFuncion0 (4))


let funcion01 = function (caracteres){
  return "Hola "+ caracteres;
} ("Lunes ");
console.log("El resultado es: " + funcion01)


let suma = (x, y) => {
  return x+y
};
let resultado1 = suma (5,3);
console.log("La suma es: " + resultado1 )

/* Realizar una funcion (calcularPrecioTotal)
para Calcular el precio total de una compra tomando encuenta 
impuestos = 1.16, gartos de envio = 10, y como parametro el precio
donde 
precioTotal = (precio * impuesto ) + gartosEnvio;

como salida precio Total
precioTotal = calcularPrecioTotal(23.34);
 */

/*
let calcularPrecio = (impuestos, precio) => {
  return (impuestos * precio) + 10;
};
let PrecioTotal = calcularPrecio (1.6 * 8.3375 ) + 10
console.log("El precio Total es: " + PrecioTotal)


let calcularPrecio2 = (x,y,z) => {
  return ( 1.6 * 23.34 ) + 10;
};
let PrecioTota2 = calcularPrecio (x * y ) + z
console.log("El precio Total es: " + PrecioTota2) */

//normal


// Anonima 
let calcularPrecio1 = function (precio){
  let impuestos = 1.16
  let envio = 10
  return (impuestos * precio) + envio;
} (23.34);
console.log("El precio total (anonima) es: ", calcularPrecio1)

//Flecha
let CalcularPrecioTotalFlecha = (precio) => {
  let impuesto = 1.16;
  let envio = 10;
  let precioTotal = (impuesto * precio) + envio;
  return precioTotal;
};
let precioTotal = CalcularPrecioTotalFlecha(23.34)
console.log("El precio Total (flecha) es = ", precioTotal);

//impuestos
let calcularPrecioTotalmpuesto = (precio,porcentajeImpuestos) => {
  let impuesto = 1.16;
  let envio = 10;
  let precioImpuesto = ((1+porcentajeImpuestos)/100)*precio;
  let precioTotal1 = (precio*impuesto) + envio
  return precioTotal
}
let precioTotal1 = calcularPrecioTotalmpuesto(23.34, 16)
console.log("El precio (calculando impuestos) es : ", precioTotal1);


let miObjeto ={
  impuestos: function (precio){
    let impuestos =1.16
    let envio = 10
    return (impuestos * precio ) + envio
  }(23.34)
  
}
console.log("El precio total (con Objetos) es: ", miObjeto.impuestos)
/*
let miObjeto = {
  impuesto: function (precio,porcentajeImpuestos) {
    let impuesto = 1.16;
    let envio = 10;
    let precioImpuesto = ((1+porcentajeImpuestos)/100)*precio;
    let precioTotal2 = (precio*impuesto) + envio
    console.log(precioToTal2);
  }
}
let mensaje = "tu nombre es: " + miObjeto.nombre
mensaje += " tiene " + miObjeto.edad + " años"
console.log(mensaje) */
/* miObjeto.impuesto(23.34,16); */