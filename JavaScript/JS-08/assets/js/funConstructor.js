let constructor = function () {
    let valor0 = 0;
    let valor1 = 0;
    
    //declaración del objeto
    let persona = {
      nombre : 'Pedro',
      apellido: 'Lara',
      suma : function (a, b) {
        return a + b;
      },
      get nombre2 (){
        return this.nombre;
      },
      set nombre2(nombre1){  //los nombres de los parametros no pueden ser iguales
        this.nommbre2 = nombre1
      }
    };
    return persona; //Se recomienda usar metodos sets/get para acceder a la información
}
  /* let p1 = new constructor();
  console.log(p1.apellido); */

  let p1 = constructor();
  p1.nombre = 'Carlos';
  console.log(p1.nombre)