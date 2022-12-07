package threads;

public class MiEjecutable implements Runnable {

	static long horaInicio = System.currentTimeMillis(); //Declarar variable estatica de tipo Long
	int cont = 0;
	int num;

	public MiEjecutable(int numObjeto) { //Metodo constructor 
		num = numObjeto;
	}

	public void run() { //Metodo run - determina qué es lo que va a ejecutar y cómo lo va a hacer

		while (System.currentTimeMillis() - horaInicio < 3000) {
			System.out.print(num); // visualiza su número durante 3s.
			cont++; // cuenta el nº de visualizaciones
		}
	}

	public void visualizar() {
		System.out.println("Objeto num." + num + " - " + cont + " veces.");
	}
}
