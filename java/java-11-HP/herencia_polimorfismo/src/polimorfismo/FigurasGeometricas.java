package polimorfismo;

import java.util.Scanner;

public abstract class FigurasGeometricas {

	protected double resultado;
	
	public abstract void pedirDatos();
	

	public abstract void area ();
	 
	 public void visualizar () {
		 System.out.println("El resultado es: " + resultado);
	 }


}
