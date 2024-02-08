const navegacion = document.querySelector("#navegacion");
const btn_menu = document.querySelector("#btn_menu");
const btn_inicio = document.querySelector("#btn_inicio");
const btn_nosotros = document.querySelector("#btn_nosotros");
const btn_servicios = document.querySelector("#btn_servicios");
const btn_nuestro_trabajo = document.querySelector("#btn_nuestro_trabajo");
const btn_contacto = document.querySelector("#btn_contacto");

const nombre = document.querySelector("#nombre");
const telefono = document.querySelector("#telefono");
const correo = document.querySelector("#correo");
const mensaje = document.querySelector("#mensaje");
const btn_formulario = document.querySelector("#btn_formulario");

const ocultar_menu = () => {
    var anchoDePantalla = window.innerWidth;
    if (anchoDePantalla < 768) {
        if (navegacion.classList.contains("mostrar")) {
            navegacion.classList.add("ocultar");
            navegacion.classList.remove("mostrar");
        } else {
            navegacion.classList.add("mostrar");
            navegacion.classList.remove("ocultar");
        }
    }
}

const inicio = () => {
    ocultar_menu();
    var inicio = document.querySelector("#inicio");
    const posicionTop = inicio.offsetTop - 120;
    // Realizar el desplazamiento con suavidad
    window.scrollTo({
        top: posicionTop,
        behavior: 'smooth',
        duration: 5000
    });
}

const nosotros = () => {
    ocultar_menu();
    var nosotros = document.querySelector("#nosotros");
    const posicionTop = nosotros.offsetTop - 120;
    // Realizar el desplazamiento con suavidad
    window.scrollTo({
        top: posicionTop,
        behavior: 'smooth'
    });
}

const servicios = () => {
    ocultar_menu();
    var servicios = document.querySelector("#servicios");
    const posicionTop = servicios.offsetTop - 120;
    // Realizar el desplazamiento con suavidad
    window.scrollTo({
        top: posicionTop,
        behavior: 'smooth'
    });
}

const nuestro_trabajo = () => {
    ocultar_menu();
    var nuestro_trabajo = document.querySelector("#nuestro_trabajo");
    const posicionTop = nuestro_trabajo.offsetTop - 120;
    // Realizar el desplazamiento con suavidad
    window.scrollTo({
        top: posicionTop,
        behavior: 'smooth'
    });
}

const contacto = () => {
    ocultar_menu();
    var contacto = document.querySelector("#contacto");
    const posicionTop = contacto.offsetTop - 120;
    // Realizar el desplazamiento con suavidad
    window.scrollTo({
        top: posicionTop,
        behavior: 'smooth'
    });
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

const enviar_email = async (e) => {
    try {
        e.preventDefault();
        const data = new FormData();
        data.append("nombre", nombre.value);
        data.append("telefono", telefono.value);
        data.append("email", correo.value);
        data.append("mensaje", mensaje.value);
        const response = await fetch(`/formulario.php`, {
            method: 'POST',
            body: data
        });
        const resultado = await response.text();
        if (resultado == "Correo enviado") {
            alert("¡Gracias por elegir Dev Nova para tu proyecto! Hemos recibido tu formulario y nos pondremos en contacto contigo pronto para explorar juntos las emocionantes posibilidades que tu idea presenta. ¡Estamos ansiosos por comenzar esta colaboración!")
            window.location.reload();
        }
    } catch (error) {
        console.log(error);
    }
}

var splide = new Splide('.splide', {
    type: 'loop',
    perPage: 5,
    autoplay: true,
    interval: 3000
});

splide.mount();

window.addEventListener('resize', function () {
    obtenerAnchoDePantalla();
});
btn_menu.addEventListener("click", ocultar_menu);

btn_inicio.addEventListener("click", inicio);
btn_nosotros.addEventListener("click", nosotros);
btn_servicios.addEventListener("click", servicios);
btn_nuestro_trabajo.addEventListener("click", nuestro_trabajo);
btn_contacto.addEventListener("click", contacto);

btn_formulario.addEventListener("click", enviar_email);