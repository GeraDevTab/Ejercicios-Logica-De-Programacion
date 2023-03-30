var secreto = aleatorio(0,100);
console.log(secreto);

var numero = prompt("N1: Ingrese un numero entre 1 y 100 para adivinar el numero secreto");
var array = [];

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

    numero = prompt("N1: Ingrese un numero entre 1 y 100 para adivinar el numero secreto");
    revisarNumero();
    }
    else{
        
        
        

        array.push(numero);
        if(numero == secreto){
            alert("Felicidades, adivinaste el número secreto.");
            
            let posicion = document.getElementById("texto");
            let mensaje = document.createElement("h3");
            mensaje.textContent = secreto;
            posicion.append(mensaje);
            
            for(let i = 0; i< array.length; i++){
                let posicion = document.getElementById("secreto");
                let nSecreto = document.createElement("h3");
                nSecreto.textContent = array[i];
                posicion.append(nSecreto);
                //
            }
            console.log(array);
        }
        else{
            alert("Ups, el número secreto es incorrecto, vuelve a intentarlo.");
            numero = prompt("N1: Ingrese un numero entre 1 y 100 para adivinar el numero secreto");
            revisarNumero();
        }
        //revisarNumero(); 
    }
}

function aleatorio(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}//termina funcion aleatorio



revisarNumero();



