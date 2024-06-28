function confirmarSuscripcion() {
    const confirmar = confirm("¿Te gustaría suscribirte a nuestro boletín?");
    if (confirmar) {
        alert("¡Gracias por suscribirte!");
    } else {
        alert("Tal vez la próxima vez.");
    }
}


window.onload = function() {
    confirmarSuscripcion();
};
