package variables;

public class Variables {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//tipos de variables numericos: byte, short, int, long
		
	    		System.out.println("----------Byte-----------------");
		byte numeroA = 127;
			System.out.println("Tamaño de un byte: " + Byte.SIZE);
		
			System.out.println("Valor máximo: " + Byte.MAX_VALUE);
			
			System.out.println("Valor máximo: " + Byte.MIN_VALUE);
			
			System.out.println("-----------Int-------------");
			
			int entero = 2147483647;
				System.out.println("Tamaño de un entero: " + Integer.BYTES);
				
				System.out.println("Tamaño: " + Integer.SIZE);
				
				System.out.println("valor máximo: " + Integer.MAX_VALUE);
				
				System.out.println("valor mínimo: " + Integer.MIN_VALUE);
				
				System.out.println("valor de entero " + entero);
				
					System.out.println("---------Short---------------");
				
			short numCorto = 32767;
				System.out.println("Tamaño de un Short: " + Short.BYTES);
			
				System.out.println("Tamaño: " + Short.SIZE);
			
				System.out.println("valor máximo: " + Short.MAX_VALUE);
			
				System.out.println("valor mínimo: " + Short.MIN_VALUE);
			
				System.out.println("valor de Short: " + numCorto);
			
					System.out.println("---------Long---------------");
				
			long numLargo = 1;
				
				System.out.println("Tamaño de Bytes de un Long: " + Long.BYTES);
				
				System.out.println("Tamaño: " + Long.SIZE);
				
				System.out.println("valor máximo: " + Long.MAX_VALUE);
				
				System.out.println("valor mínimo: " + Long.MIN_VALUE);
				
				System.out.println("valor de Long: " + numLargo);
				
					System.out.println("---------Var---------------");

				
			var num = 2147483647L;
			
				System.out.println("Esta es la variable con var: " + num);
			
			var systemNum = 0XEB;  //Para representar en hexadecimal es con un 0 y una X --> 0X
			                      //Para representar en binario es --> 0b 
			                      //para reprecentar en octales es --> 0O
			
				System.out.println("----> " + systemNum);
				
					System.out.println("---------PRIMITIVOS---------------");
					
					System.out.println("---------Float---------------");
			
			float numFloat = 100.10f;
					
				System.out.println("Tamaño de Bytes de un Float: " + Float.BYTES);
					
				System.out.println("Tamaño: " + Float.SIZE);
					
				System.out.println("valor máximo: " + Float.MAX_VALUE);
					
				System.out.println("valor mínimo: " + Float.MIN_VALUE);
					
				System.out.println("valor de Float: " + numFloat);
					
					System.out.println("---------Double---------------");
					
			double numDouble = 1000.10E23; //la diferencia de double y float es el tamaño, double es más grande
					
				System.out.println("Tamaño de Bytes de un Double: " + Double.BYTES);
						
				System.out.println("Tamaño: " + Double.SIZE);
						
				System.out.println("valor máximo: " + Double.MAX_VALUE);
						
				System.out.println("valor mínimo: " + Double.MIN_VALUE);
						
				System.out.println("valor de Double: " + numDouble);
				
					System.out.println("---------Boolean---------------");
			boolean estado = true; // false
				System.out.println("---> " + estado);
			System.out.println("---> boolean false " + Boolean.FALSE);
			System.out.println("---> boolean true " + Boolean.TRUE);
			
			if (estado) {
				System.out.println("soy verdadero");
			}else {
				System.out.println("soy falso");
			}
			
			
				var edad = 8;
				if (edad >= 18) {
					System.out.println("Eres mayor de edad");
				}else {
					System.out.println("Eres menor de edad");
				}
				
				
				System.out.println("-------Char--------");
		char caracter = "halo".charAt(3);
		char caracter1 = '\u2665';
		System.out.println("--> " + caracter);
		System.out.println(caracter1);
		
	}

}
