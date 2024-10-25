function validarSoloNumeros(laCadena){
    if (Number.isInteger(laCadena)) {
        return true
    }
    else{ return false}
}

function repetirCadena(){
    let cadena = prompt("Ingrese la cadena:")
    if (cadena.length  == 0){
        return
    }else{
        repetir(cadena)
    }
    repetirCadena()
}

function repetir(cadena){
    let cadenaFinal= ""
    let xVeces = parseInt(prompt("Ingrese las veces a repetir:"))
        if (xVeces.length == 0){
            return
        }else if(!validarSoloNumeros(xVeces)){
            alert("Ingresar solo numeros")
            repetir(cadena)
        }else{
            for (let index = 0; index < xVeces; index++) {
                cadenaFinal += cadena + " "
            }
            alert(cadenaFinal)
        }
}

repetirCadena()