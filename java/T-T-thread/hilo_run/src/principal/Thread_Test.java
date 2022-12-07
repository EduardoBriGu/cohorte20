package principal;

import threads.*;
import threads.Thread2;

public class Thread_Test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Thread1 t1 = new Thread1(); //Es una enstancia para poder heredar las clases
		Thread2 t2 = new Thread2();
		
		
		t1.start();
		t2.start(); //Método que viene en la clase Thread por defecto y sirve para inicializar la función
		
		try {
			
			t1.join();
			t2.join();
			
		} catch (InterruptedException e) {
			
		}
		
		System.out.println("Se han ejecutado los 2 threads");
		
		
		
	}

}
