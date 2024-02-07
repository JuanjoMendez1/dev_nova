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

const enviar_email = async(e)=> {
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
        console.log(resultado);
        // const asunto = encodeURIComponent("Nuevo mensaje desde el formulario");
        // const cuerpo = encodeURIComponent(`Nombre: ${nombre.value}\nCorreo: ${correo.value}\nMensaje: ${mensaje.value}`);
        // const enlaceCorreo = `mailto:juanjomendez029@gmail.com?subject=${asunto}&body=${cuerpo}`;

        //     window.location.href = enlaceCorreo;
        // Email.send({
        //     Host : "smtp.elasticemail.com",
        //     Username : "username",
        //     Password : "password",
        //     To : 'them@website.com',
        //     From : "you@isp.com",
        //     Subject : "This is the subject",
        //     Body : "And this is the body"
        // }).then(
        //   message => alert(message)
        // );
    } catch (error) {
        console.log(error);
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

btn_formulario.addEventListener("click", enviar_email);