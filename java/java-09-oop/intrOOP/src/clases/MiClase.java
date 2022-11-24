package clases;

public class MiClase {
	
	int atributo1;
	private String atributo2; //los atributos son (las variables) las variables son localidades de memnoria que van a cambiar/unidad minima de almacenamiento y el atributo- es un miembro de la clase que define al objeto 
	
	
	
		
		

		public MiClase(){ //constructor 
			
		}
		
		
	
		public MiClase(int atributo1, String atributo2) { //dos mezclas llamadas igual se le llama sobrecargado 
			
			this.atributo1 = atributo1;
			this.atributo2 = atributo2;
		}



		public void metodo() { //sin return con void
			MiClase obj = new MiClase();
			int n = obj.atributo1 = 2357;
			String s = obj.atributo2 = "Hola";
			System.out.println("--> " + n);
			System.out.println("--> " + s);
			
			System.out.println(atributo1);
			System.out.println(atributo2);

		}
		
		double metodo1 () { //con return sin void 
			double a = 0.0;
			return a;
			
			
			
			
			
			
			
			
			
			
			
		}
		//miembros de datos en una clase
		//atributos y los metodos
		//definen los metodos de las clases 

}
