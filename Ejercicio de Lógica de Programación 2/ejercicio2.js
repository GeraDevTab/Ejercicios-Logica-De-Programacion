var numero = prompt("N1: Ingrese temperatura en Grados Celsius(solo escriba numero(s)");


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

    numero = prompt("N1: Ingrese temperatura en Grados Celsius(solo escriba numero(s)");
    revisarNumero();
    }
    else{
    let posicion = document.getElementById("texto");
    let mensaje = document.createElement("h3");
    mensaje.textContent = "Los grados Celsius ingresados son: "+numero;
    posicion.append(mensaje);

    let posicionF = document.getElementById("Farenheit");
    let mensajeF = document.createElement("h3");
    mensajeF.textContent = "Los grados Celsius a Farenheit son: "+(numero*(9/5)+32);
    posicion.append(mensajeF);
    //(0 °C × 9/5) + 32 = 32 °F

    let posicionK = document.getElementById("Kelvin");
    let mensajeK = document.createElement("h3");
    let kelvin = (numero*1)+273.15;
    mensajeK.textContent = "Los grados Celsius a Kelvin son: "+kelvin;
    posicion.append(mensajeK);
    }
}


revisarNumero();



