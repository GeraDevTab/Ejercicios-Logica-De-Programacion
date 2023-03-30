package logica;

import java.util.Calendar;
import java.util.Date;
import java.util.Scanner;

public class Ejercicio7 {
public static void main(String[] args){
		
		Calendar calendar = Calendar.getInstance();
		Calendar calendarFriday = Calendar.getInstance();
		
		calendarFriday.set(2023, 03, 24, 15, 0);
		
		System.out.print("Ingresa el dia: ejemplo(lunes, martes, miercoles,etc) ");
		Scanner entrada = new Scanner(System.in);
		String diaSemana = entrada.nextLine().toLowerCase();
		
		//se solicitan los datos al usuario por consola
		System.out.print("Ingresa la hora: (ejemplo 09,10,11,15) ");
		int hour = entrada.nextInt();
		System.out.print("Ingresa los minutos: (ejemplo 15,28,55) ");
		int min = entrada.nextInt();
		
		if(diaSemana.equals("lunes")) {
			calendar.set(2023, 03, 20, hour, min);
		}
		else if(diaSemana.equals("martes")) {
			calendar.set(2023, 03, 21, hour, min);
		}
		else if(diaSemana.equals("miercoles")) {
			calendar.set(2023, 03, 22, hour, min);
		}
		else if(diaSemana.equals("jueves")) {
			calendar.set(2023, 03, 23, hour, min);
		}
		else if(diaSemana.equals("viernes") && hour<15) {
			calendar.set(2023, 03, 24, hour, min);
		}
		else if(diaSemana.equals("viernes") && hour>=15){
			System.out.println("Ya es fin de semana");
			System.exit(0);
		}
		else {
			System.out.println("Los datos ingresados no son validos");
			System.exit(0);
		}
		
		Date date = calendar.getTime();
		Date dateFriday = calendarFriday.getTime();
		long difMil = Math.abs(dateFriday.getTime() - date.getTime());
		
		System.out.println("Faltan " + (difMil/60000) + " minutos para llegar a fin de semana");
	}
	
}
