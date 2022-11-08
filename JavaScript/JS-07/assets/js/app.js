const titulo = document.getElementById("titulo");
const parrafos = document.getElementsByClassName("parrafo")

console.log(titulo);
console.log(parrafos);

titulo.textContent = "hola";

parrafos[0].textContent = "Soy un párrafo";

console.log(titulo.textContent);
console.log(parrafos[1].textContent);

/* parrafos[1].style.color = "red" */


parrafos[1].classList.add('coloresFeos');



//CREAR ELEMENTOS HTML

const padre = document.getElementById("padre")

const enlace = document.createElement("a")
enlace.href = "https://youtu.be/05dcxPp62BQ";
enlace.textContent = "click si estás dolido";


/* document.body.appendChild(enlace); */

/* document.body.insertAdjacentElement("afterbegin", enlace); */
padre.appendChild(enlace)

console.log(document.body)

