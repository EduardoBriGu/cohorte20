package mis_clases.excepciones.ejecuta;

import mis_clases.excepciones.operacion.Division;
import mis_clases.excepciones.operacion.OperacionExcepcion;

public class TestExcepcion {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		try {
			Division d = new Division (4,2);
			d.visualizarD();
		} catch (OperacionExcepcion e) {
			// TODO: handle exceptio
				System.out.println(e.getMessage());
				e.printStackTrace();
				
		}
		
		System.out.println("Continua...");

	}

}
