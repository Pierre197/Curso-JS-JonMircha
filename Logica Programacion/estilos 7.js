const validarPolindromo = (cadena = "") =>{
    cadena = cadena.toLowerCase()
    let nuevaCadena = ""
    if(!cadena) return console.warn("No ingresaste cadena")
    for (let index = cadena.length - 1; index >= 0; index--) {
            nuevaCadena += cadena[index]
    }
    console.log((nuevaCadena === cadena))
}

validarPolindromo("Salas")