package operadores;

import java.util.Iterator;
import java.util.Scanner;

public class Ciclos {
	
	void saludo() {
		System.out.println("Hola a las funciones en Java ");
	}
	
	int operaciones () {
		return 0;
	}
	int operacion () {
		int f = (int) Math.pow(3, 2);

		return f;
	}
	static double nuevo () {
		double h = Math.pow(5, 3);
		return h;
	}
	String caracteres () {
		String nombre = "Hola buen día ";
		return nombre;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Ciclos objC = new Ciclos(); //hacer esos dos pasos para llamar a la funcion si no tiene static
		objC.saludo();
		
		System.out.println("uso de pow: " + objC.operacion());
		System.out.println("Este es funcion static pow (5, 3) -->" + nuevo()); 
		System.out.println(objC.caracteres());
		
		
		Scanner scanner = new Scanner(System.in);
		System.out.println("\t\t\tIntroduzca la tabla de multiplicar: con el ciclo for -->");
		
		
		int tabla = scanner.nextInt();
	//variable(index)|inicio|final|incremento
		for (int i =0; i <= 10; i++) { //Se itera cuando sabes el inicio y el final
			System.out.println(tabla + " * " + i + " = " + tabla*i);
		}
		
		
		int j= 1;
		System.out.println("\t\t\tIntroduzca la tabla de multiplicar: con el ciclo while -->");
		int tablaW = scanner.nextInt();
		while (j <= 10) {
			System.out.println(tablaW + " * " + j + " = " + tablaW*j);
			j++;
		}
	}

}
