const d = document;

export default function slider(){
    const $nextBtn = d.querySelector(".slider-btns .next"),
     $prevBtn = d.querySelector(".slider-btns .prev"),
     $slides = d.querySelectorAll(".slider-slide");

    let i = 0, 
     $tempoAutoCarrusel = null,
     $tempoReactivarCarrusel = null;

    function autoCarrusel() {
        $tempoAutoCarrusel = setInterval(() => {    
            $slides[i].classList.remove("active");
            i++;
            if (i > $slides.length-1) {
                i = 0
            }
            $slides[i].classList.add("active");
        }, 2000);
    }
   
    function reactivarAutoCarrusel(){
        $tempoReactivarCarrusel = setTimeout(() => {
            autoCarrusel();
        }, 3000);
    }
    
    autoCarrusel();

    d.addEventListener("click", e =>{
        if(e.target === $prevBtn || e.target === $nextBtn){ 
            e.preventDefault(); 
            /* Desactiva carrusel */
            clearTimeout($tempoReactivarCarrusel); 
            clearInterval($tempoAutoCarrusel);
            /* Botones */
            if (e.target === $prevBtn) {
                $slides[i].classList.remove("active");
                i--;
                if (i<0) {
                    i =$slides.length -1;
                }
                $slides[i].classList.add("active");
            }
            if (e.target === $nextBtn) {
                $slides[i].classList.remove("active");
                i++;
                if (i > $slides.length-1) {
                    i = 0
                }
                $slides[i].classList.add("active");
            }         
            /* Reactivar auto carrusel */  
            reactivarAutoCarrusel(); 
        }
    })

    
}