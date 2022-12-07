package multiple;

public class Resta implements OperacionesAritmeticas, Operaciones {

	private double pValor;
	private double sValor;

	@Override
	public double restar() {
		// TODO Auto-generated method stub
		return pValor - sValor;
	}
	
	public Resta(double pValor, double sValor) {
		this.pValor = pValor;
		this.sValor = sValor;
	}

	
	@Override
	public double mensaje() {
		// TODO Auto-generated method stub
		System.out.println(" Valores " + pValor + " " + sValor);
		return pValor;
	}

	@Override
	public double sumar(double a, double b) {
		// TODO Auto-generated method stub
		return 0;
	}

	

	
}
