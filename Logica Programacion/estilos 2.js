function validarSoloLetras (laCadena){
    let regex = new RegExp("^[a-zA-Z ]+$");
    if (regex.test(laCadena)) {
        return true
    }
    else{ return false}
}

function validarSoloNumeros(laCadena){
    if (Number.isInteger(laCadena)) {
        return true
    }
    else{ return false}
}

function contarCaracteres(){
    let cadena = prompt("Ingrese la cadena:")
    if (cadena.length  == 0){
        return
    }
    else if(!validarSoloLetras(cadena)){
        alert("Ingresar solo letras y espacios")
    }else{
        cortarCadena(cadena)
    }
    contarCaracteres()
}

function cortarCadena(cadena){
    let numCaracteres = parseInt(prompt("Ingrese el numero de caracteres:"))
        if (numCaracteres.length == 0){
            return
        }else if (!validarSoloNumeros(numCaracteres)){
            alert("Ingresar solo numeros")
            cortarCadena(cadena)
        }else if (parseInt(numCaracteres) > cadena.length){
            alert("El numero de caracteres solicitados es mayorque la cadema")
        }else{
            alert("la cadena actual es :" + cadena.substring(0,numCaracteres))
        }
}

contarCaracteres()