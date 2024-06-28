
function mostrarMensajeBienvenida() {
    
    const mensaje = `¡Hola! Te damos la bienvenida a nuestro sitio web. Si tienes alguna pregunta o necesitas asistencia, no dudes en contactarnos. Puedes dejarnos tu correo electrónico y nos pondremos en contacto contigo.`;

    
    alert(mensaje);
}

function pedirCorreoElectronico() {
    const correo = prompt("Por favor, ingresa tu correo electrónico para que podamos contactarte:");

    if (correo) {
        
        console.log("Correo electrónico recibido:", correo);
        alert("Gracias por proporcionarnos tu correo electrónico. Nos pondremos en contacto contigo pronto.");
    } else {
        alert("No se ingresó ningún correo electrónico.");
    }
}


window.onload = function() {
    mostrarMensajeBienvenida();
    pedirCorreoElectronico();
};
