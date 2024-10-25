const voltearCadena = (cadena = "") =>{
    let nuevaCadena = ""
    if(!cadena) return console.warn("No ingresaste cadena")
    for (let index = cadena.length-1; index >= 0; index--) {
        nuevaCadena += cadena[index]
    }
    console.log(nuevaCadena)
    
}

voltearCadena("Hola mundo")