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
