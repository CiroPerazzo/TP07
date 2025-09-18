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
function ejercicio3(){
    const mensaje = 10 == '10' ? "Si, en JavaScript 10 es == '10'" : "No, en JavaScript 10 no es == '10'"
    mostrarResultado(mensaje);
}
function ejercicio4() {

    const ciudad = {};
    
    ciudad.nombre = prompt("Ingresa el nombre de la ciudad:");
    ciudad.fechaFundacion = new Date(prompt("Ingresa la fecha de fundación de la ciudad (formato YYYY-MM-DD):")).toLocaleDateString();
    ciudad.poblacion = parseInt(prompt("Ingresa la población de la ciudad:"));
    ciudad.extension = parseFloat(prompt("Ingresa la extensión de la ciudad (en km²):"));

    let mensaje = "Información de la ciudad:\n";
    for (let clave in ciudad) {
        mensaje += `${clave}: ${ciudad[clave]}\n`;
    }
    mostrarResultado(mensaje);
}
function ejercicio5() {
    const input = prompt("Ingresa números separados por coma");
  
    const partes = input.split(',')
    const arrayOriginal = []
  
    for (let i = 0; i < partes.length; i++) {
      arrayOriginal[i] = parseFloat(partes[i])
    }
  
    const nuevoArray = [];
  
    for (let i = 0; i < arrayOriginal.length; i++) {
      nuevoArray[i] = arrayOriginal[i] * 2;
    }
  
    mostrarResultado(nuevoArray.join(", "))
  }
    function ejercicio6a(){
        let mensaje = ""
        for(let i = 1; i <= 6; i++){
            mensaje += "*".repeat(i) + "<br>"
        }
        mostrarResultado(mensaje)
    }
    function ejercicio6b(){
        let mensaje = ""
        for(let i = 1; i <= 6; i++){
            mensaje += "-".repeat(9) + "<br>"
            switch(i)
            {
                case 1: mensaje[5].replace("*")
                break;
                case 2: mensaje[4, 5, 6].replace("*")
            }
        }
        mostrarResultado(mensaje)
    }