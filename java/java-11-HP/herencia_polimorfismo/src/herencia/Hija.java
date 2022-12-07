package herencia;

public class Hija extends Padre{ //son clases concretas y clases main, las clases comunes/concretas
								//son aquellas que solemois usar normalmente, sin el main, y las clases
	                            //main son aquellas que tienen el main y es la principal del project
	
	private int edad;
	//private String apellidos;

	public Hija(String nombre, String domicilio, int edad) {
		super(nombre, domicilio);
		this.edad = edad;
	}
	
	public void mostrarDatos() {
		System.out.println("El nombre es: " + nombre + ", El domicilio es: " + domicilio +
		                   ", La edad es: " + edad);
	}
	
	public void mostrarDatos (String apellidos) { //Esto es el overload en las clases concretas,
												  //sobre cargar un metodo
		//this.apellidos = apellidos;		
			System.out.println("El nombre completo es: " + nombre + " " + apellidos + 
					           ", El domicilio es: " + domicilio + ", La edad es: " + edad);

	}
	
	
}
