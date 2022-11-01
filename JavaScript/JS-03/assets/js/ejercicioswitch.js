/* let precio = Number(prompt("Introduce el precio "))
let cupon = Number(prompt("Introduce tu cupón "))


switch(precio){
  case 1:
    descuento = (precio * 0.05)
    alert("Tu descuento con cupón bronce es ", descuento)
    break;
  case 2:
    descuento = (precio * 0.10)
    alert("Tu descuento con cupón Plata es ", descuento)
    break;
  case 3:
    descuento = (precio * 0.20)
    alert("Tu descuento con cupón Oro es ", descuento)
    break;
  case 4:
    descuento = (precio * 0.25)
    alert("El descuento con cupón platino es ", descuento)
    break;
    default:
      alert ("No disponible")
      break;
}
 */
/* 
STRING
""
´´
¨¨
``
*/

//OPERADOR TERNARIO 

// IF SIMPLIFICADO 

// CONDICIÓN ? EN CASO DE SER VERDAD : EN CASO DE SER FALSO

/* let edad =18;

edad >= 18 ? console.log("es mayor de edad"): console.log("tas chiquito")*/


let edad =18;

let mensaje = edad >= 18
    ? "Es mayor de edad"
    : "Tas chiquito";
  
  console.log(mensaje);

  console.log(`Yo soy Eduardo y soy ${edad >=18 ? "Soy Mayor de edad" : "Soy menor de edad"}`)
