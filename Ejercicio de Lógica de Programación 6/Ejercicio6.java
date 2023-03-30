package logica; 

import java.util.Scanner;

public class Ejercicio6 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//variable de cadena declarada
		String original, reverse="";
		
		//objeto de Scanner creado 
		Scanner entrada = new Scanner(System.in);
		
		//Mensaje enviado al usuario
		System.out.println("Ingrese un texto o palabra");
		original = entrada.nextLine();
		
		int length = original.length();
		
		for(int i= length-1; i>=0; i--) {
			reverse = reverse + original.charAt(i);
			//System.out.println("reverse of entered string is: "+reverse);
		}//cierre de for
		System.out.println("El reverso del texto que Usted ingreso es el siguiente: "+reverse);
	}//cierre de metodo

}//cierre de clase