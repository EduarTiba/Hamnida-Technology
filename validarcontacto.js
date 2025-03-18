document.addEventListener('DOMContentLoaded', function() {

    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const phone = document.getElementById("telefono");
    const form = document.getElementById("form");
    const parrafo = document.getElementById("warnings"); // Añadido: Obtener el elemento parrafo

    form.addEventListener("submit", e => {
        e.preventDefault();
        let warnings = "";
        let entrar = false;
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

        if (nombre.value.length < 6) {
            warnings += `El nombre no es valido <br>`;
            entrar = true;
        }
        if (!regexEmail.test(email.value)) {
            warnings += `El email no es valido <br>`;
            entrar = true;
        }
        if (phone.value.length < 10) {
            warnings += `el número es muy corto <br>`;
            entrar = true;
        }

        if (entrar) {
            parrafo.innerHTML = warnings;
        } else {
            parrafo.innerHTML = "Enviado";
        }
    });
});