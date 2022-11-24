package coleccione;

import java.util.*;


public class Colecciones {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//Valores de un mismo tipo 
		//colecciones  -  almacen dinamico 
		
		//List - ArrayList
		System.out.println("--- ArrayList ---");
		
		List<String> miArray = new ArrayList<String>();
		
		miArray.add("GDL");
		miArray.add("CDMX");
		miArray.add("MTY");
		miArray.add(2, "Manzanillo");
		
		String valorQuitado = miArray.remove(0);
		//boolean valorQuitado = miArray.remove("GDL");
		
		
		System.out.println(miArray);
		System.out.println(valorQuitado);
		//System.out.println(miArray.get(0);
		System.out.println(miArray.size());//size() == lenght
		
		imprimir(miArray);
		
		System.out.println("--- HashSet ---");
		//Es la más rápida de toas
		//No permiten elementos duplicados
		//No guarda elementos en un orden aparente
		//No maneja indice 
		Set<String> miSet = new HashSet<String>();
		
		miSet.add("Panchito");
		miSet.add("Paco");
		miSet.add("Juan");
		miSet.add("Juan");
		miSet.add("Martín");
		
		System.out.println(miSet);
		imprimir(miSet);
		
		
			System.out.println(miSet.contains("Martín"));
			miSet.remove("Martín");
			imprimir(miSet);
			
			System.out.println("--- HashMap ---");
			//Pares de valores (llave, valor)
			Map<String, Integer> miMap = new HashMap<String, Integer>();
			miMap.put("Valor 1", 56);
			miMap.put("Valor 2", 5);
			miMap.put("Valor 3", 70);
			
			System.out.println(miMap);
			System.out.println(miMap.get("Valor 2"));
			System.out.println(miMap.keySet());
		


		
		
	}
	public static void imprimir(Collection coleccion) { //
		for(Object elemento : coleccion ) {
			System.out.println("Elemento = " + elemento);
		}
	}

}
