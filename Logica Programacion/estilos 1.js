function validar (laCadena){
    let regex = new RegExp("^[a-zA-Z ]+$");
    if (regex.test(laCadena)) {
        return true
    }
    else{ return false}
}

function contarCaracteres(){
    let cadena = prompt("Ingrese la cadena:")
    if (!validar(cadena)){
        alert("Ingresar solo letras y espacios")
    }else{
        
        alert("el numero de caracteres es " + cadena.length)
    }
    contarCaracteres()
}

contarCaracteres()