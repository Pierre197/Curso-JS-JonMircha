/*XMLHttpRequest */

(() => {
    const xhr = new XMLHttpRequest(),
     $xhr = document.getElementById("xhr"),
     $fragment = document.createDocumentFragment();

    //  console.log(xhr);

     xhr.addEventListener("readystatechange", e => {
        if (xhr.readyState !== 4) return;
        //console.log(xhr);
        if (xhr.status >= 200 && xhr.status < 300) {
            //console.log(xhr.responseText);
            let json = JSON.parse(xhr.responseText);

            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $xhr.appendChild($fragment);
        }else{
            let message = xhr.statusText || "Ocurrió un error";
            $xhr.innerHTML = `"Error ${xhr.status}: ${message}`;
        }

        // console.log("Este mensaje cargara de cualquier forma");
     });

     xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
     xhr.send();
})();
/*Fetch */
(() =>{
    const $fetch = document.getElementById("fetch"),
     $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
    /* .then(res => {
        console.log(res);
        return res.ok ? res.json(): Promise.reject();
    }) */
    .then((res)=> res.ok ? res.json(): Promise.reject(res))
    .then(json => {
        // console.log(json);
        json.forEach(el => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li);
        });
        $fetch.appendChild($fragment);
    })
    .catch(err => {
        // console.log(err);
        let message = err.statusText || "Ocurrió un error";
        $fetch.innerHTML = `Error ${err.status}: ${message}`;
    }).finally(() => {
        // console.log("Esto se ejecutara independientemente del resultado de la promesa fetch");
    });

})();

/* Api Fetch */

(()=>{
    const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

    async function getData(){
        try {
            let res = await fetch("https://jsonplaceholder.typicode.com/users"),
             json = await res.json();

            // if (!res.ok) throw
            if (!res.ok) throw {status: res.status, statusText: res.statusText}
            
            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $fetchAsync.appendChild($fragment);

            console.log(res, json);
        } catch (err) {
            //console.log("Estoy en el catch", err);
            let message = err.statusText || "Ocurrió un error";
            $fetchAsync.innerHTML = `"Error ${err.status}: ${message}`;
        } finally {
            console.log("Esto se ejecutara independientemente del try catch");
        }
    }

    getData();
})();

/* API Axios */

(()=>{
    const $axios = document.getElementById("axios"),
     $fragment = document.createDocumentFragment();

    axios
     .get("https://jsonplaceholder.typicode.com/users")
     .then((res)=>{
        res.data.forEach(el=>{
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li);
        })
        $axios.appendChild($fragment);
     })
     .catch(err =>{
        console.log(err.response);
        let message = err.response.statusText || "Ocurrió un error";
         $axios.innerHTML = `Error ${err.response.status}: ${message}`;
     })
     .finally(()=>{
        console.log("Esto se ejecurar independientemente del resultado axios");
     });
})();