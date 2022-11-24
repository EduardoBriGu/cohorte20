package ejecutar;

import clases.Animal;

public class Ejemplo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Animal miAnimal = new Animal("Arya");
		miAnimal.setEdad(6);
		miAnimal.setRaza("Doberman");
		
		System.out.println("Mi perrita es una " + miAnimal.getRaza() + ", se llama " + miAnimal.getNombre() + "y tiene " + miAnimal.getEdad() + " meses");
		
		Animal otroAnimal;
		otroAnimal = new Animal();
		otroAnimal.setNombre("pulgas");
		otroAnimal.setEdad(5);
		
		System.out.println("El nuevo animal es: " + otroAnimal.getNombre());
		System.out.println("Y tiene: " + otroAnimal.getEdad() + " años");
		
		//Asociación - conexión entre diferentes clases 
		
		

	}

}
