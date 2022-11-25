package mis_clases.colecciones;

import java.util.ArrayList;
import java.util.HashMap;

public class ColeccionesOp {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		ArrayList<String> list = new ArrayList<String>();
		  
	       
        list.add(null); //Soporta el valor null
        list.add("B");
        list.add(null);
        list.add("D");
  
       
        System.out.println("ArrayList: " + list);
        System.out.println("ArrayList: " + list.get(2));
  
       
        HashMap<Integer, String> hm  = new HashMap<Integer, String>();
  
       
        hm.put(1, "A"); //Sopoprta el valor null y la llave como null
        hm.put(2, "B"); // no se puede repetir porque se sobre escribe 
        hm.put(3, "C");
        hm.put(null, null); // se acomodará primero si tienes una llave como null 
        hm.put(4, "E");
  
        
        System.out.println("HashMap: " + hm);


	}

}
