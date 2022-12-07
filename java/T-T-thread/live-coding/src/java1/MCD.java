package java1;

import java.util.Scanner;

public class MCD {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		//1- Pedir los datos y asignarlos a variables
		Scanner sc = new Scanner (System.in);
		System.out.println("Introduce el primer numero:");
		int a = sc.nextInt();
				
		//1- Pedir los datos y asignarlos a variables
		Scanner sc2 = new Scanner (System.in);
		System.out.println("Introduce el segundo numero:");
		int b = sc.nextInt();
		
		//Mostrar en consola el calculo de esta operacion
		System.out.println("El maximo comun divisior es: " + MCD(a, b));
		
		//Funcion que nos permita calcular el MCD a partir de los datos guardados
		public static int MCD(int a, int b) {
			
			int temporal;
			while (b!=0) {
				temporal = b;
				b = a % b;
			}
		}
		
		

	}

}

/*
 * 1- pedir dos numeros (valor a y el valor b). Para eso usamos un scanner
 * 2- guardar estos datos en variables independientes, con el tipo de dato esperado
 * 3- vamos a compararlos para saber cual es el maximo comun divisor de ambos numeros
 */