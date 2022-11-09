/* const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"), 2000);
const baz = () => console.log("Third");

bar();
foo();
baz(); */


/* const nombre = () => {
  const nombres = ["Pepe", "Pancho", "María"];

  

  /* setTimeout(() => {
      return nombres;
  }, 0); 

  return new Promise((resolve, reject) => { //resolve -- proceso exitoso
      setTimeout(() => {
                              //reject -- proceso no exitoso
        if(true){
          resolve(nombres);
        }else{
          reject("No hay nombres");
        }
        
      }, 3000)
  });

} */

//PROMESAS EN CADENA
/* nombre().then(nombres => console.log(nombres)).catch(error => console.warn(error)); */

/* Console.log - enseña el mensaje en la consola 
  Console.table - enseña una tabla en la consola 
  Console.error - enseña el error en la consola 
  Console.warn - enseña una advertencia en la consola */

//AZUCAR SINTÁCTICA
//CÓDIGO QUE SE CREÓ PARA FACILITAR EL TRABJAO DE LOS PROGRAMADORES

//PONER ASYNC  -  Y DESPUÉS AWAIT
/* 
async function obtenerNombre (){

}
  */

/* const obtenerNombre = async () => {

  try{
    let nombres = await nombre();
    console.log(nombres);
  }catch (error){
    alert(error)
  }
  
  
} */
//obtenerNombre();
//Servidor

/* const url = 'https://pokeapi.co/api/v2/pokemon/'

const pokedex = () => {
  fetch(url)
      .then(datos => datos.json())
      .then(pokemon => console.log(pokemon))
/*       .catch(error => console.log(error)) --
};

pokedex(); */

// () => {return}

/* const url = 'https://pokeapi.co/api/v2/pokemon/' CREAS UNA VARIABLE CON EL API

const pokedex = () => { //CREAS OTRA VARIABLE DONDE VA A CONTENER TU FUNCION
  fetch(url)   //USAS FETCH PARA JALAR EL URL LLAMANDOLO A SU VARIABLE DONDE LO GUARDASTE
      .then(datos => datos.json())  //USAS THEN PARA HACER UNA PROMESA Y LLAMAS UNA NUEVA VARIABLE PARA CONVERTIRLA EN LENGUAJE JSON

      LOS DATOS JSON SE PASAN AL SIGUIENTE THEN

      .then(pokemon => console.log(pokemon))  //CREAS OTRA VARIABLE PARA PODER PODER MOSTRARLA CON UN CONSOLE.LOG
/*       .catch(error => console.log(error))  //CATCH ES PARA PODER "ATRAPAR" ALGÚN ERROR Y LO PODRÁS MOSTRAR PONIENDOLE NOMBRE A SU VARIABLE Y CON UN CONSOLE.LOG LLAMANDO ESA VARIABLE
};

pokedex(); */

const cartaPokemon = document.getElementById('pokemon');
const nombrePokemon = document.getElementById('nombre');
const imagen = document.getElementById('img');
const form = document.getElementById('form');


const pokedex = async (numero) => {
  
const url = `https://pokeapi.co/api/v2/pokemon/${numero}`;
    try {

        const respuesta = await fetch(url);
        const pokemon = await respuesta.json();
        
        console.log(pokemon.name);

        const datos = {
            nombre: pokemon.name,
            imagen: pokemon.sprites.other['official-artwork'].front_default,
        }

        console.log(datos.imagen);

        nombrePokemon.textContent = datos.nombre;
        imagen.innerHTML = `
            <img src="${datos.imagen}" alt="imagen de ${datos.nombre}" width="250"/>
        `;
        
        
    } catch (error) {


        
    }
}

pokedex();

form.addEventListener("submit", (event) =>{
  //codigo
  event.preventDefault();
  const valor = document.getElementById("idP");
  console.log(valor.value)

  pokedex(valor);
  
  form.reset();
});