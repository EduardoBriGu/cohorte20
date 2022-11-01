
//CONTROL DE FLUJO

let edad = Number(prompt ("Escribe tu edad"));



/* if (CONDICION === TRUE){
EJECUTA CODIGO 
DE BLOQUE
} */

/* console.log (edad === 18); */
/* console.log(18 == "18") */

// Operador de comparación ==
// operdador de comparación estricta ===

console.log(edad)

/* if(edad === 18){
  document.write("Ya eres mayor de edad");
}else if (edad < 18){
  document.write("tas chikito")
}else if (edad > 18){
  document.write("Tas viejito")
}else{
  document.write("Eso no es un número válido")
} */

// OPERADORES LÓGICOS

// &&  -  AND
// ||  -  OR
// !!  -  NOT

if(edad === 18){
  document.write("Ya eres mayor de edad");
}else if (edad < 17 && edad > 0){
  document.write("tas chikito")
}else if (edad > 18){
  document.write("Tas viejito")
}else if (edad < 0){
  document.write("Eso es un número negativo")
}else{
  document.write("Eso no es un número válido")
}



console.log(edad < 17 && edad > 0);
