if (window.location.pathname.includes('index.html')) {
emailjs.init("hQ7twyONR2TY835fv");

document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    const validUser = "admin";
    const validPass = "12345";

    if (username === validUser && password === validPass) {
        document.getElementById("login-message").innerHTML = "¡Inicio de sesión exitoso!";
        document.getElementById("login-message").style.color = "green";

        enviarCorreo(username);

        setTimeout(() => {
            window.location.href = "pagina2.html";
        }, 2000);
    } else {
        document.getElementById("login-message").innerHTML = "Usuario o contraseña incorrectos.";
        document.getElementById("login-message").style.color = "red";
    }
});

function enviarCorreo(username) {
    const templateParams = {
        username: username,
        message: `El usuario ${username} ha ingresado a la página web.`,
    };

    emailjs
        .send("service_0tb3a2z", "template_itu2gp4", templateParams)
        .then(
            (response) => {
                console.log("Correo enviado exitosamente:", response.status, response.text);
            },
            (error) => {
                console.error("Error al enviar el correo:", error);
            }
        );
}
}

if (window.location.pathname.includes('pagina2.html')) {
document.addEventListener("DOMContentLoaded", () => {
    const mensajeBienvenida = document.getElementById("mensaje-bienvenida");
    const nombrePregunta = document.getElementById("nombre-pregunta");
    const botonGuardar = document.getElementById("guardar-nombre");

    const nombreGuardado = localStorage.getItem("nombreUsuario");
    if (nombreGuardado) {
        mensajeBienvenida.textContent = `¡Hola de nuevo, ${nombreGuardado}!`;
        nombrePregunta.style.display = "none";
    }

    botonGuardar.addEventListener("click", () => {
        const nombre = document.getElementById("nombre").value.trim();
        if (nombre) {
            localStorage.setItem("nombreUsuario", nombre);
            mensajeBienvenida.textContent = `¡Bienvenido, ${nombre}!`;
            nombrePregunta.style.display = "none";
        } else {
            alert("Por favor, ingresa tu nombre.");
        }
    });
});

}

if (window.location.pathname.includes('pagina3.html')) {
emailjs.init('hQ7twyONR2TY835fv'); 

document.getElementById('formulario-contacto').addEventListener('submit', function (event) {
    event.preventDefault();

    const formulario = event.target;

    const datos = {
        nombre: formulario.nombre.value,
        apellido: formulario.apellido.value,
        edad: formulario.edad.value,
        direccion: formulario.direccion.value,
        celular: formulario.celular.value,
        email: formulario.email.value,
        ciudad: formulario.ciudad.value,
        pais: formulario.pais.value
    };

    emailjs.send('service_0tb3a2z', 'template_itu2gp4', datos)
        .then(() => {
            document.getElementById('mensaje-resultado').textContent = '¡Mensaje enviado exitosamente!';
            document.getElementById('mensaje-resultado').style.color = 'green';
            formulario.reset();
        })
        .catch(() => {
            document.getElementById('mensaje-resultado').textContent = 'Hubo un error al enviar el mensaje. Inténtalo de nuevo.';
            document.getElementById('mensaje-resultado').style.color = 'red';
        });
});

}

if (window.location.pathname.includes('pagina4.html')) {
emailjs.init('hQ7twyONR2TY835fv');

document.getElementById('formulario-mensaje').addEventListener('submit', function (event) {
    event.preventDefault();

    const formulario = event.target;

    const datos = {
        nombre: formulario.nombre.value,
        apellido: formulario.apellido.value,
        celular: formulario.celular.value,
        email: formulario.email.value,
        mensaje: formulario.mensaje.value
    };

    emailjs.send('service_0tb3a2z', 'template_itu2gp4', datos)
        .then(() => {
            document.getElementById('mensaje-resultado').textContent = `¡Gracias ${datos.nombre}, tu mensaje fue enviado con éxito!`;
            document.getElementById('mensaje-resultado').style.color = 'green';
            formulario.reset();
        })
        .catch(() => {
            document.getElementById('mensaje-resultado').textContent = 'Hubo un error al enviar tu mensaje. Inténtalo nuevamente.';
            document.getElementById('mensaje-resultado').style.color = 'red';
        });
});

}
