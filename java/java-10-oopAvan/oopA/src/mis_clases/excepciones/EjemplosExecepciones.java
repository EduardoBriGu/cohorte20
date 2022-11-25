package mis_clases.excepciones;

public class EjemplosExecepciones {
	
	public static int dividir (int a, int b) {
	  int r = 0;	
		try {
			r = a/b;
		} catch (ArithmeticException e) {
			// TODO: handle exception
			System.out.println("¡No se puede dividir por cero!");
		}
		
		
		
		return r;
	}
	
	public static void main(String[] args) {
		
		System.out.println("El resultado de la division es: " + dividir(4,0));
		
	}

}
