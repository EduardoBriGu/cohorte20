package oop;

import java.util.Scanner;

public class OperacionesAritmeticas {

	Scanner s = new Scanner(System.in);
	
	double add () {
		System.out.println("Introduzca el numero a sumar ->");
		double valor0 = s.nextDouble();
		System.out.println("Introduzca el segundo numero a sumar");
		double valor1 = s.nextDouble();
		return valor0 + valor1;
	}
	double sustract () {
		System.out.println("Introduzca el numero a restar ->");
		double valor0 = s.nextDouble();
		System.out.println("Introduzca el segundo numero a restar");
		double valor1 = s.nextDouble();
		return valor0 - valor1;
	}
	double producto () {
		System.out.println("Introduzca el numero a multiplicar ->");
		double valor0 = s.nextDouble();
		System.out.println("Introduzca el segundo numero a multiplicar");
		double valor1 = s.nextDouble();
		return valor0 + valor1;
	}
	double divide () {
		System.out.println("Introduzca el numero a dividir ->");
		double valor0 = s.nextDouble();
		System.out.println("nItroduzca el segundo numero a dividir");
		double valor1 = s.nextDouble();
		if(valor1 != 0) {
			return valor0/valor1;
		}else {
			System.out.println("No se puede dividir por cero");
		}
		return valor0 + valor1;
	}
	double modulo () {
		System.out.println("Introduzca el numero del modulo ->");
		double valor0 = s.nextDouble();
		System.out.println("Itroduzca el segundo numero del modulo");
		double valor1 = s.nextDouble();
		return valor0 % valor1;
	}
	
		
	
}
