package multiple;

public class Suma implements OperacionesAritmeticas, Operaciones {

	private double a;
	private double b;
	
	@Override
	public double restar() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public double sumar (double a, double b) {
		// TODO Auto-generated method stub
		this.a = a;
		this.b = b;
		return a + b;	
		}

	@Override
	public double mensaje() {
		// TODO Auto-generated method stub
		return 0;
	}

}
