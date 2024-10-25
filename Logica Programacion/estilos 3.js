function separarXCaracteres(){
    let cadena = prompt("Ingrese la cadena:")
    if (cadena.length  == 0){
        return
    }else{
        separarCadena(cadena)
    }
    separarXCaracteres()
}

function separarCadena(cadena){
    let caracter = prompt("Ingrese el caracter:")
        if (caracter.length == 0){
            return
        }else if (!cadena.includes(caracter)){
            alert("El caracter no existe dentro de la cadena")
            return
        }else{
            alert("Las palabras despues de la separacion serian " + cadena.split(caracter))
        }
}

separarXCaracteres()