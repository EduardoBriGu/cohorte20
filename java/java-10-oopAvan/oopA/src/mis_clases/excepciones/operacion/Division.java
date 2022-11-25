package mis_clases.excepciones.operacion;

public class Division {
	
	private int denominador;
	private int numerador;
	
	public Division (int numerador, int denominador) throws OperacionExcepcion {
		if (denominador == 0) {
			throw new OperacionExcepcion ("El denominador es cero");
		}
		
		this.numerador = numerador;
		this.denominador = denominador;
	}
	public void visualizarD () {
		System.out.println("Resultado de la division " + (this.numerador/this.denominador));
	}

}
