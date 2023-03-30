package logica;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import java.util.Scanner;

public class Ejercicio10 {
	public static void main(String[] args) {
		//se generan variables colecciones
		Map<String, String> diccionario = new HashMap<>();
		Map<String, String> dictionaryRandom = new HashMap<>();
		
		//se carga el elemento para generar una collecion de palabras de español e ingles
		diccionario.put("pais", "country");
		diccionario.put("comer", "eat");
		diccionario.put("edad", "age");
		diccionario.put("manzana", "apple");
		diccionario.put("jugar", "play");
		diccionario.put("tiempo", "time");
		diccionario.put("jeugo", "game");
		diccionario.put("ciudad", "city");
		diccionario.put("carro", "car");
		diccionario.put("dolar", "dollar");
		diccionario.put("sangre", "blood");
		diccionario.put("electricidad", "electricity");
		diccionario.put("iglesia", "church");
		diccionario.put("tiempo", "time");
		diccionario.put("nube", "cloud");
		diccionario.put("doctor", "doctor");
		diccionario.put("caja", "box");
		diccionario.put("perro", "dog");
		diccionario.put("nuevo", "new");
		diccionario.put("aire", "air");
		
		
		// generacion de un arrego 
	    Object[] keys = diccionario.keySet().toArray();
	    String[] trad = new String[5];
	    int contador = 0;
	    
	    //contador
	    for(int i = 0; i < 5; i++) {
		    
	    	//utilizacion de la clase random
		    Random random = new Random();
		    int randomIndex = random.nextInt(keys.length);
		    
		    // sacar elemento aleatorios
		    String randomKey = (String) keys[randomIndex];
		    String randomValue = diccionario.get(randomKey);
		    
		    //se utilzia la segunda colleccion
		    dictionaryRandom.put(randomKey, randomValue);
		    
		    //se genera un objeto de la clase Scanner para leer desde la consola
		    Scanner entrada = new Scanner(System.in);
		    System.out.println("Palabra: " + randomKey);
		    System.out.print("Inserte traduccion: ");
		    trad[i] = entrada.nextLine();
		    
		    if(trad[i].equals(randomValue)) {
		    	contador ++;
		    }
	    }
	    //mensaje final con el numero total de palabras y las traducidas correctamente
	    	System.out.println("----------------------");
	    	System.out.println("Palabras correctas: " + contador + 
	    			"\nPalabras incorrectas: " + (5-contador));
	}
}
