var numero = prompt("N1: Ingrese un numero para crear su serie Fibonacci(solo escriba numero(s)");


/*
console.log(isNaN(numero));*/

function revisarNumero(){
    if(isNaN(numero) || numero==''){
        //posicion para el dom
        let posicionerror = document.getElementById("mensajeerror");
        //mensaje en una etiqueta
        let mensajerr = document.createElement("h3");
        mensajerr.textContent = "Alguno de los datos ingresados en sus intentos anteriores, no es un numero ";
        
        //insercion del mensaje en el div
        posicionerror.append(mensajerr);

    numero = prompt("N1: Ingrese un numero para crear su serie Fibonacci(solo escriba numero(s)");
    revisarNumero();
    }
    else{
        var fibo = GenerarF(numero);
        console.log(fibo);
        
        let posicion = document.getElementById("texto");
        let mensaje = document.createElement("h3");
        mensaje.textContent = fibo;
        posicion.append(mensaje);
        
    }
}

function GenerarF(numero){
    var fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    for (var i = 2; i < numero; i++) {
      fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    return fibonacci;
}//termina funcion generarF


revisarNumero();



