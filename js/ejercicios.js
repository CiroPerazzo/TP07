function calculadoraEdad(fecha){
    const hoy = new Date();
    const nacimiento = new Date(fecha);

    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }

    return edad;
}

function ejercicio1() {
    const nombre = prompt("¿Cuál es tu nombre?");
    const fechaNacimiento = prompt("¿Cuál es tu fecha de nacimiento? (YYYY-MM-DD)");
    const edad = calculadoraEdad(fechaNacimiento);
    const mensaje = `Hola ${nombre}, tienes ${edad} años!`;

    console.log(mensaje);
    mostrarResultado(mensaje);
}

function ejercicio2() {

    const frutas = ["manzana", "banana", "naranja", "pera", "uva", "melón", "kiwi", "frutilla", "durazno", "cereza"];
    console.log("Frutas disponibles:");
    frutas.forEach(fruta => console.log(fruta));

    const frutaUsuario = prompt("Ingresa una fruta").toLowerCase();

    const mensaje = frutas.includes(frutaUsuario) ? `Sí, tenemos ${frutaUsuario}!` : `No, no tenemos ${frutaUsuario}!`;
    console.log(mensaje);
    mostrarResultado(mensaje);
}
