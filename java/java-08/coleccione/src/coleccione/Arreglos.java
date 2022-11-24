package coleccione;

import java.util.Arrays;

public class Arreglos {
	
	public static void main(String [] args) {
		//Arrays - arreglos - matrices
		//Solo se permiten un tipo de datos
		//Se tiene que especificar su tamaño
		
		/* 
		 * String
		 * Int
		 * Double
		 * Long
		 */
		
		String [] miArreglo = new String[6]; //a partir del 1
		
		miArreglo[0] = "Eduardo"; //a partir del cero
		miArreglo[1] = "Raul";
		miArreglo[2] = "Felipe";
		miArreglo[3] = "Fernanda";
		miArreglo[4] = "Victor";
		miArreglo[5] = "Alonso";
		
		System.out.println(miArreglo[0]);
		
		//for
		for (int i = 0; i<miArreglo.length; i++ ) {
			System.out.println("Ciclo for: " + miArreglo[i]);
		}
		
		System.out.println("----------------");
		
		//for each
		for (String nombre : miArreglo) {
			System.out.println("For Each: " + nombre);
		}
		
		//math.pow(2,2);
		//Arrays
		
		System.out.println(Arrays.toString(miArreglo));
		
		//Tipos de valores
		int numeros[] = new int [5];
		
		numeros[0] = 3;
		numeros[1] = -56;
		numeros[2] = (int) 3.45; //Casteo = cambiar a otro tipo de valor 
		numeros[3] = Integer.parseInt("2"); //Parseo = cambiar la clase del valor
		
		for(int numero : numeros) {
			System.out.println("Valores del arreglo numeros: " + numero);
		}
		
		//Arreglos de objetos 
		
		Persona persona1 = new Persona("Pancho", 30);
		Persona persona2 = new Persona("Patty", 58);
		
		//
		Persona [] arrPersonas = new Persona[3];
		
		arrPersonas[0] = persona1;
		arrPersonas[1] = persona2;
		arrPersonas[2] = new Persona("Luis", 18);
		
		System.out.println(arrPersonas[0].nombre);
		System.out.println(arrPersonas[1].nombre);
		System.out.println(arrPersonas[2].nombre);
		
			for(Persona persona : arrPersonas) {
				System.out.println("Nombre: " +persona.nombre + " Edad: " + persona.edad);
			}
			
			//Arreglos literales 
			String [] arrString = {"Manzana", "Pera", "12", "Hola"};
			System.out.println(Arrays.toString(arrString));
				


		
	}

}
