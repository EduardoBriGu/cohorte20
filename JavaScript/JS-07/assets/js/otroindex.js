// FORMA 1

//1  -  LLAMAR AL CONTENEDOR 
const imagen = document.getElementsByClassName('contenedor')[0];

/* console.log(imagen); */

//2  -  CREAR EL ELEMENTO
const nuevaImg = document.createElement("img")

//3  -  MODIFICAR ATRIBUTOS
nuevaImg.src = "http://placeimg.com/200/200/nature";

nuevaImg.alt = "Imagen de naturaleza"

//4  -  INSERTAR EL ELEMENTO NUEVO
imagen.appendChild(nuevaImg);



/* OTRA FORMA DE CREAR ELEMENTOS */
//FORMA 2

//1  -  LLAMAR AL ELEMENTO PADRE
const imagen2 = document.getElementById('img');

//2  -  miercoles 23 noviembre a las 12:00
imagen2.innerHTML = `
    <img src="https://placeimg.com/200/200/animals" alt="imagen de animales" />
`;

//crear lista apartir de los elementos guardados en un arreglo

//insertarlas en un codumento para que se pueda mostrar


const nombres = ["Pedro", "Juan", "Sonia", "Miguel"];


//forma 2
const lista1 = document.getElementById("lista1")

nombres.forEach((el) => {
  const li = document.createElement("li");
  li.textContent = el;
  lista1.appendChild(li);
});

//formna 2
const frutas = ["Manzana", "Uva", "Pera", "Limón"];

const lista2 = document.getElementById("lista2");

frutas.forEach((el) => {
  lista2.innerHTML += `
  <li>${el}</li>
  `;
});
//lista2 = lista 2 + `<li>${el}</li>`;

//VERIFICAR LA CONSOLA PARA PODER VER CUÁL ES EL ERROR
//VERIFICAR QUE ESTE BIEN ESCRITO TODO
//VERIFICAR QUE LOS SIMBOLOS SÍ ESTÉN CERRANDO
//VERIFICAR LAS COMILLAS
