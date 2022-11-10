class OperacionesAritmeticas {
  numero0 = 0;
  numero1 = 0;
      
      constructor (valor0 , valor1 ){
        this.numero0 = valor0;
        this.numero1 = valor1;
      }
      
      sumar (a, b) {
      return a + b;
    }

    set numero0 (num0){
      this.numeor0 = num0
    }
    set numero1(num1){
      this.numero1 
    }
    get numero0(){
      return this.numero0;
    }
    get numero1(){
      return this.numero1;
    }
}

//la función new crea las variables en objetos 
//FORMA 1     --  Primero que nada deberás crear un constructor
let obj1                                         //declaras la variable para crear tu objeto
obj1 = new OperacionesAritmeticas(8,6);          //le asignas un valor a tu objeto haciendo llamar a la función
console.log(obj1.numero0)                        //Pruebas el primer valor con un console.log
console.log(obj1.numero1)                        //Pruebas el segundo valor con un console.log
console.log('obj1: ' + obj1.sumar(obj1.numero0, obj1.numero1) );     //lo haces llamar con un console.log  


//FORMA2
let obj2 = new OperacionesAritmeticas();  //llamar a la variable creando el objeto
obj2.sumar(5, 6);                         //Asignarle valor al objeto nuevo
console.log(obj2.sumar(5,6) );            //Hacer la acción que deseas


//FORMA3
let obj3                                  //llamar a la variable
obj3 = new OperacionesAritmeticas();      //crear el objeto 
console.log(obj2.sumar(4,6) );            //Hacer la acción que deseas dandole un valor a "a" y "b"


//Forma 4                 Crear sets y gets con valores y returns
let obj4 = new OperacionesAritmeticas();  // Asignar valor a tu objeto con una función y hacerla llamar 
obj4.numero0 = 8;                                      // Asignas valor a tu variable 1
obj4.numero1 = 54;                                     //Asignas valor a tu variable 2
console.log(obj4.numero0);                             //Probar los valores de tus variables con un console.log
console.log(obj4.sumar(obj4.numero0 , obj4.numero1) ); //Hacer la acción que desees 
