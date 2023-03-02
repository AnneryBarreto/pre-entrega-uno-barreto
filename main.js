
login ();
function login() {
    let usuario = prompt ("Ingrese su nombre de usuario");
    const usuarioAutorizado = "German";
    for (let i=0; i<2; i++) {
        if (usuario == usuarioAutorizado) {
            console.log ("Usuario correcto.");
            break
        } else {
            usuario = prompt ("Usuario incorrecto. Intentelo nuevamente.");
        }
    }
    if (usuario != "German") {
        alert ("Se te acabaron los intentos.");
        alert ("No has logrado ingresar.");
    }
    if (usuario == "German") {
        let password = parseInt (prompt("Ingresar contraseña"));
        const passAutorizado = 1234;
        for (let i=0; i<2; i++) {
            if (password == passAutorizado) {
                console.log ("Contraseña correcta.");
                break
            } else {
                password = parseInt(prompt("Contraseña incorrecta. Intentelo nuevamente."));
            }
        }
        if (password != 1234) {
            alert ("Se te acabaron los intentos.");
        }
        if (usuario == "German" && password == 1234) {
            alert ("Has ingresado exitosamente.");
        } else {
            alert ("No has logrado ingresar.");
        }
    }
}
