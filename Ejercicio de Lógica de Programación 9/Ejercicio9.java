package logica;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Ejercicio9 {
	public static void main(String[] args) {
		Map<String, String> diccionario = new HashMap<>();
		
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
		
		// Traer la direccion de Alexis
		
		Scanner entrada = new Scanner(System.in);
		System.out.print("Ingresa una palabra a traducir: ");
		String search = entrada.nextLine();
		
		if(diccionario.containsKey(search)) {
			System.out.println("Traduccion: " + diccionario.get(search));
		}
		else {
			System.out.println("La palabra no se encuentra en el diccionario");
		}
		
	}
}
