//.splice() indice de cantidad de elementos a cortar o agregar
// personas.splice(personas.indexOf("Dani"), 1);  index dentro de splice

const personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];

//Escribe un comando para remover a "Dani" del arreglo
personas.splice(1, 1,);
console.log(personas)

//Escribe un comando para remover a "Juan del arreglo"
personas.splice(2, 1);
console.log(personas);

//Escribe un comando para agregar a "Luis" al inicio del arreglo
personas.splice(0, 0, "Luis")
console.log(personas)

//Escribe el comando para agregar tu nombre al final del arreglo
personas.push("Eduardo")
console.log(personas)

//Escribe el comando para mostrar la posición de "Maria"
console.log(personas.indexOf("Maria"))

//Escribe el comando para mostrar la posición de tu nombre
console.log(personas.indexOf("Eduardo"))

