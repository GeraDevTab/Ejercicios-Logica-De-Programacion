let numero = prompt("Ingrese un numero entre el 1 al 100")

/*
console.log(isNaN(numero));
if(isNaN(numero)){
    numero = prompt("Ingrese un numero entre el 1 al 100");
    
}
else{
    let posicion = document.getElementById("texto");
    let mensaje = document.createElement("h3");
    mensaje.textContent = numero;
    
    posicion.append(mensaje);
}
*/



function revisarNumero(){
    if(isNaN(numero)){
        numero = prompt("Ingrese un numero entre el 1 al 100");
        revisarNumero();
    }
    else{
        let factorial = factorialDeUnNumero(numero);
        let posicion = document.getElementById("texto");
        let numeroIngresado = document.createElement("h3");
        numeroIngresado.textContent = "El numero ingresado es: "+numero;
        posicion.append(numeroIngresado);

        let mensaje = document.createElement("h3");
        mensaje.textContent = "El factorial es: "+factorial;
        
        posicion.append(mensaje);
    }
}

revisarNumero();

function factorialDeUnNumero(n){
    
        if(n==0){
            return 1;
        }
            else {
                return n* factorialDeUnNumero(n-1);
            }
            
        }
