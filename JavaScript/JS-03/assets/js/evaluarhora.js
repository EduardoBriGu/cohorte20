/* let h1 = document.querySelector("#h1") */


let hora = Number(prompt("Ingresa la hora:  "))

if (hora >= 0 && hora <= 5){
  document.write ("Déjame dormir")

} else if (hora >= 6 && hora <= 11){
  document.write ("Buenos días")

}else if (hora >= 12 && hora <= 18){
  document.write ("Buenas tardes")

}else if (hora >= 19 && hora <= 23){
  document.write ("Buenas noches")

}else if (hora === 24){
  document.write("Es un nuevo día")

}else{
  document.write("No es una hora válida")
}