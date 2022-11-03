//ARREGLOS

/* let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; */
/* 
let suba = [1, 2, 3];
let subb = [4, 5, 6];
let subc = [7, 8, 9];
let arreglos = [suba, subb, subc]
 */

// BUCLES, LOOPS, CICLOS

// FOR
/* for (let fila = 0; fila <= 2; fila++){
  for(let columna = 0; columna <= 2; columna++){
  
  console.log(arr [fila][columna]);
  
  }
  console.log("---------------")
} */

// WHILE
/* let contador = 0;
while(contador < 10){
  console.log(contador);
  contador = contador + 1;
} */

// DO WHILE
/* do{  
  console.log(contador);
  contador ++;
}while(contador <= 10); */

//Juntos
/* let cadena = "hola";
console.log(cadena.length) */

//DO WHILE
/* let fila =0;

do{

for (let columna = 0; columna <= 2; columna++ ){
  
    console.log(arr [fila][columna] );
  }
  fila ++;
  console.log("----------")

}while(fila <=0); */

let arrA = [
  [2, 5, 6],
  [5, 9, 7],
  [6, 4, 3],
];

let arrB = [
  [5, 3, 2],
  [8, 5, 4],
  [1, 4, 9],
];

let arrC = [
  [,,],
  [,,],
  [,,]
]

  for(let i=0;i<arrA.length;i++){

    for(let j=0;j<3;j++){
      arrC[i][j]=(arrA[i][j])*(arrB[j][i])
    }
  }
  console.table(arrC);

/* do{

  for (let columna = 0; columna <=2; columna++){
  console.log( arrA [columna])
  }
}while (fila <=0) */
