// Cambiar entre formularios
document.getElementById("showRegister").addEventListener("click", function() {
    document.getElementById("loginContainer").classList.add("d-none");
    document.getElementById("registerContainer").classList.remove("d-none");
});

document.getElementById("showLogin").addEventListener("click", function() {
    document.getElementById("registerContainer").classList.add("d-none");
    document.getElementById("loginContainer").classList.remove("d-none");
});

// Validación del formulario de registro
document.getElementById("registerForm").addEventListener("submit", function(event) {
    let valid = true;

    // Validación del nombre de usuario
    const nombreRegistro = document.getElementById("nombre-registro");
    const errorNombre = document.getElementById('error-nombre');
    if (nombreRegistro.value.trim() === "") {
        errorNombre.textContent = "El nombre de usuario es obligatorio.";
        nombreRegistro.classList.add('input-error');
        valid = false;
    } else {
        errorNombre.textContent = "";
        nombreRegistro.classList.remove('input-error');
    }

    // Validación del correo electrónico
    const emailRegistro = document.getElementById("email-registro");
    const errorEmail = document.getElementById('error-email');
    if (emailRegistro.value.trim() === "") {
        errorEmail.textContent = "El correo electrónico es obligatorio.";
        emailRegistro.classList.add('input-error');
        valid = false;
    } else {
        errorEmail.textContent = "";
        emailRegistro.classList.remove('input-error');
    }

    // Validación de la contraseña
    const passwordRegistro = document.getElementById("password-registro");
    const errorPassword = document.getElementById('error-password');
    if (passwordRegistro.value.trim() === "") {
        errorPassword.textContent = "La contraseña es obligatoria.";
        passwordRegistro.classList.add('input-error');
        valid = false;
    } else {
        errorPassword.textContent = "";
        passwordRegistro.classList.remove('input-error');
    }

    if (!valid) {
        event.preventDefault(); // Evitar el envío si el formulario no es válido
    }
    // Mostrar mensaje de éxito si todo es válido
    const mensajeExito = document.getElementById('mensaje-exito');
    if (!valid) {
          event.preventDefault();
          mensajeExito.style.display = 'none';
    } else {
          event.preventDefault();
          mensajeExito.textContent = "Se ha registrado exitosamente.";
          mensajeExito.style.color = 'green';
          mensajeExito.style.display = 'block';
    }
    // Limpiar los campos del formulario
    this.reset();
});

// Validación del formulario de inicio de sesión
document.getElementById("loginForm").addEventListener("submit", function(event) {
    let valid = true;

    // Validación del correo electrónico
    const emailLogin = document.getElementById("email-login");
    const errorEmailLogin = document.getElementById('error-email-login');
    if (emailLogin.value.trim() === "") {
        errorEmailLogin.textContent = "El correo electrónico es obligatorio.";
        emailLogin.classList.add('input-error');
        valid = false;
    } else {
        errorEmailLogin.textContent = "";
        emailLogin.classList.remove('input-error');
    }

    // Validación de la contraseña
    const passwordLogin = document.getElementById("password-login");
    const errorPasswordLogin = document.getElementById('error-password-login');
    if (passwordLogin.value.trim() === "") {
        errorPasswordLogin.textContent = "La contraseña es obligatoria.";
        passwordLogin.classList.add('input-error');
        valid = false;
    } else {
        errorPasswordLogin.textContent = "";
        passwordLogin.classList.remove('input-error');
    }

    if (!valid) {
        event.preventDefault();
    }
});
