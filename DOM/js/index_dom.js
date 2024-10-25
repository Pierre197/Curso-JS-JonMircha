import scrollTopButton from "./boton_scroll.js";
import slider from "./carrusel.js";
import countdown from "./cuenta_regresiva.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import searchFilters from "./filtro_busquedas.js";
import getGeolocation from "./geolocalizacion.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import speechReader from "./narrador.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import { digitalClock, alarm } from "./reloj.js";
import scrollSpy from "./scroll_espia.js";
import draw from "./sorteo.js";
import { shortcuts, moveBall }  from "./teclado.js";
import darkTheme from "./tema_oscuro.js";
import contactFormValidations from "./validaciones_formulario.js";
import smartVideo from "./video_inteligente.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/car-alarm.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown","Oct 04, 2024 01:34:30", "Feliz cumpleaños");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia(
        "youtube", 
        "(min-width:1024px)", 
        `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA" target="_blank" rel="noopener">Ver Video</a>`, 
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc?si=hcE3j04TgoKABOqL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    );
    responsiveMedia(
        "gmaps", 
        "(min-width:1024px)", 
        `<a href="https://maps.app.goo.gl/RwaZgerbkKAVwjBZ6" target="_blank" rel="noonpener">Ver Mapa</a>`, 
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.7071023201697!2d-77.05554719999999!3d-11.9254603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d04b4fae2dfd%3A0x2b500e5d05fe9834!2sPs%20109%2C%20Comas%2015314!5e0!3m2!1ses-419!2spe!4v1728199877735!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    );
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    webCam("webcam");
    getGeolocation("geolocation");
    searchFilters(".card-filter",".card");
    draw("#winner-btn",".player");
    slider();
    scrollSpy();
    smartVideo();
    contactFormValidations();
    
})

d.addEventListener("keydown", e=>{
    shortcuts(e);
    moveBall(e,".ball",".stage");
})

darkTheme(".dark-theme-btn","dark-mode")
networkStatus();
speechReader();