
const navegacion = document.querySelector("#navegacion");
const btn_menu = document.querySelector("#btn_menu");
const btn_inicio = document.querySelector("#btn_inicio");
const btn_nosotros = document.querySelector("#btn_nosotros");
const btn_servicios = document.querySelector("#btn_servicios");
const btn_nuestro_trabajo = document.querySelector("#btn_nuestro_trabajo");
const btn_contacto = document.querySelector("#btn_contacto");

const ocultar_menu = () => {
    var anchoDePantalla = window.innerWidth;
    if(anchoDePantalla < 768){
        if (navegacion.classList.contains("mostrar")) {
            navegacion.classList.add("ocultar");
            navegacion.classList.remove("mostrar");
        } else {
            navegacion.classList.add("mostrar");
            navegacion.classList.remove("ocultar");
        }
    }
}

function obtenerAnchoDePantalla() {
    var anchoDePantalla = window.innerWidth;
    if (anchoDePantalla >= 768) {
        navegacion.classList.add("mostrar");
        navegacion.classList.remove("ocultar");
        img_logo.classList.add("mostrar");
        img_logo.classList.remove("ocultar");
    }
}

window.addEventListener('resize', function () {
    obtenerAnchoDePantalla();
});
btn_menu.addEventListener("click", ocultar_menu);

btn_inicio.addEventListener("click", ocultar_menu);
btn_nosotros.addEventListener("click", ocultar_menu);
btn_servicios.addEventListener("click", ocultar_menu);
btn_nuestro_trabajo.addEventListener("click", ocultar_menu);
btn_contacto.addEventListener("click", ocultar_menu);

console.log("Entro al js");