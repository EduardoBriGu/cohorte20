
class Persona{
    constructor (nombre, apellido){
      this._nombre = nombre;
      this._apellido = apellido;
    }
    set nombre(nombre){
      this._nombre = nombre;
    }
    set apellido(apellido){
      this._apellido = apellido;
    }
    nombreCompleto (){
      return this._nombre + ' ' + this._apellido
    }
    toString() {
      return this.nombreCompleto();
    }
}

class Empleado extends Persona {

    constructor(nombre, apellido, empresa){

      //super apellido (nombre,apellido)
      super(nombre, apellido);
      this._empresa = empresa;
    }
    set empresa(empresa){
      this._empresa = empresa;
    }
    get empresa (){
      return _empresa
    }
    nombreCompleto () {
      return super.nombreCompleto() + ' ' + this._empresa;
    }
    toString() {
      return this.nombreCompleto();
    }
}

let p1
p1 = new Persona('Hugo', 'Sanchez');

console.log(p1.nombreCompleto());
console.log(p1.toString())

let e1
e1 = new Empleado('Juan', 'Perez', 'Coppel')

console.log(e1.nombreCompleto())
console.log(e1.toString())