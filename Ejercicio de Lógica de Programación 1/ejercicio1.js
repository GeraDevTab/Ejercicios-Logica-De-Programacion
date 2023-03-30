var numero = prompt("n1: Ingrese un numero entre el 1 al 100");
var numero2 = prompt("n2: Ingrese un numero entre el 1 al 100");
var numero3 = prompt("n3: Ingrese un numero entre el 1 al 100");

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
    if( isNaN(numero) || isNaN(numero2) || isNaN(numero3) || numero2=='' || numero2==''|| numero2==''){
        //posicion para el dom
        let posicionerror = document.getElementById("mensajeerror");
        //mensaje en una etiqueta
        let mensajerr = document.createElement("h3");
        mensajerr.textContent = "Alguno de los datos ingresados en sus intentos anteriores, no es un numero ";
        
        //insercion del mensaje en el div
        posicionerror.append(mensajerr);

        numero = prompt("n1 : Ingrese un numero entre el 1 al 100");
        numero2 = prompt("n2: Ingrese un numero entre el 1 al 100");
        numero3 = prompt("n3 :Ingrese un numero entre el 1 al 100");
        revisarNumero();
    }
    else {
        console.log("comparacion de vacio",numero2=='');
        console.log(isNaN(numero));
        console.log(isNaN(numero2));
        console.log(isNaN(numero3));
        
        //posicion para el dom
        let posicion = document.getElementById("texto");

        let iguales = false;
         iguales= igualesComprobacion(numero,numero2,numero3);
         console.log("valor de la funcion iguales"+iguales);

         if(iguales){
            
            
            //mensaje en una etiqueta
            let numeroIngresado = document.createElement("h3");
            numeroIngresado.textContent = "El numero1 es: "+numero+", El numero 2 es: "+numero2+", El numero 3 es: "+numero3+" por lo tanto SON IGUALES";
        
            //insercion del mensaje en el div
            posicion.append(numeroIngresado);
         }
         else{
            let numeromenor;
            let numeroMedio;
            let numeroMayor;
            let numeroApoyo;

            if (numero > numero2) {
                numeroApoyo = numero;
                numeromenor=numero2;
            }
            else{
                numeroApoyo = numero2;
            }
        
            if (numeroApoyo > numero3) {
                numeroMayor = numeroApoyo;
                numeroMedio = numero3

            }
            else{
                numeroMayor = numero3;
                numeroApoyo = numeroMedio
            }

            if(numero == numero2 &&numero>numero3)
            {
                numeromenor=numero3;
                numeroMedio=numero2;
                numeroMayor=numero;
            }

            if(numero2 == numero3 && numero>numero3)
            {
                numeromenor=numero3;
                numeroMedio=numero2;
                numeroMayor=numero;
            }

            /*if(numero2 == numero3 && numero>numero3)
            {
                numeromenor=numero3;
                numeroMedio=numero2;
                numeroMayor=numero;
            }
            */
           
            //mensaje en una etiqueta
            let ordenIni = document.createElement("h3");
            ordenIni.textContent = numero+","+numero2+","+numero3;
        
            //insercion del mensaje en el div
            posicion.append(ordenIni);

            //mensaje en una etiqueta
            let ordenNumeros = document.createElement("h3");
            ordenNumeros.textContent = numeromenor+","+numeroMedio+","+numeroMayor;
        
            //insercion del mensaje en el div
            posicion.append(ordenNumeros);

         }
        
        

        //let mensaje = document.createElement("h3");
        //mensaje.textContent = "El factorial es: ";
        
        //posicion.append(mensaje);
    }
    
}

revisarNumero();

function igualesComprobacion(n1,n2,n3){
    
        if(n1==n2 && n1==n3){
            return true;
        }
            else {
                return false;
            }
            
        }
