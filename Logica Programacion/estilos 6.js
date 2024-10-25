const contarPalabras = (cadena = "", palabraABuscar = "") =>{
    let palabras = 0
    if(!cadena) return console.warn("No ingresaste cadena")
    if(!palabraABuscar) return console.warn("No ingresaste palabra a buscar")
    cadena.split(" ").forEach(e => {
        (e === palabraABuscar) ? palabras++ : "" 
    });

    console.log(palabras)
}

contarPalabras("Hola mundo HolaHol Hola Holaa ", "Hola")