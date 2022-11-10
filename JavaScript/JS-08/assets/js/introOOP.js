let x = 10;
console.log(x);

let persona = {
      nombre: "Eduardo",
      apellido: "Perez", //propiedades
      segundoApellido: "Gomez",
      nombreCompleto: function () {
        return "El nombre es: " + this.nombre + ' ' +this.apellido + ' ' +this.segundo  // ' ' = un espacio
      }
}

for (nombrePropiedad in persona){
  console.log(nombrePropiedad)
  console.log('valor' + ' '+ persona[nombrePropiedad])
}


console.log(persona);
console.log(persona.nombre);
console.log(persona.nombreCompleto());
console.log(persona['apellido']);
persona.tel = '555555555';
console.log(persona);
console.log(persona.tel);
delete persona.tel
console.log(persona);
let personaArreglo = Object.values(persona);
console.log(personaArreglo);
let personaString = JSON.stringify(persona);
console.log(personaString)



/* let persona1 = new Object();
persona1.edad = 18;

console.log(persona1.edad) */
