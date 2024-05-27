// Arrays vacios donde vamos a guardar todos los aprobados y desaprobados dependiendo la nota , lo hago por fuera para poder acceder mas delante desde cualquier parte del codigo
let siAprobados = [];   // nota > 6
let noAprobados = [];   // nota <= 6

//////////// clase molde para crear cada nombre, apellido y nota de estudiante ///////////
class Estudiante {
    constructor(nombre, apellido, nota) {
        this.nombre = nombre;
        this.nota = nota;
        this.apellido = apellido;
    }

    comprobarSiAprueba() {     // automatizar la comprobacion de si aprobaron o 
        if (this.nota > 6) {    // desaprobaron y mandarlos al array correspondiente 
            siAprobados.push(this)
        } else {
            noAprobados.push(this)
        }

        //despues de enviarlos a sus arrays: los ordeno segun su nota
        siAprobados.sort(function (a, b) {
            return b.nota - a.nota;
        });

        noAprobados.sort(function (a, b) {
            return b.nota - a.nota;
        });
    }
}

let estudiantes = extraerUsuarios();  // Creo la variable donde guardare a todos los estudiantes



/////////////////////////////////////  FUNCIONES  ////////////////////////////////////////// 

function calcularDatos() {    // Lo ejecutamos al iniciar la pagina para cargar todos los datos de (mejorEstudiante, peorEstudiante y Promedio)

    ///////////////// Funcion para enocntrar el mejor estudiante /////////////////////
    function encontrarElMejorEstudiante() {
        let mejorEstudiante;
        let mejorNota = 0;

        // bucle para recorrer cada nota de cada estudiante y guardar al mejor estudiante en "mejorNota"
        for (let i = 0; i < estudiantes.length; i++) {
            if (estudiantes[i].nota >= mejorNota) {
                mejorNota = estudiantes[i].nota;
                mejorEstudiante = estudiantes[i];
            }
        }

        return mejorEstudiante;
    }

    let mejorEstudiante = encontrarElMejorEstudiante();

    ///////////////// Funcion para enocntrar el peor estudiante /////////////////////
    function encontrarElPeorEstudiante() {
        let peorEstudiante;
        let peorNota = 10;

        // bucle para recorrer cada nota de cada estudiante y guardar el peor estudiante en "peorNota"
        for (let i = 0; i < estudiantes.length; i++) {
            if (estudiantes[i].nota <= peorNota) {
                peorNota = estudiantes[i].nota;
                peorEstudiante = estudiantes[i];
            }
        }

        return peorEstudiante;
    }
    const peorEstudiante = encontrarElPeorEstudiante(); // El resultante al peor Estudiante lo guardo en una variable "peorEstudiante"

    /////////////// Funcion para enocntrar el promedio de todas las notas //////////////////
    function hallarPromedioDeTodasLasNotas() {
        let sumaDeNotas = 0;

        // bucle para recorrer cada nota de cada estudiante y guardarla en "sumaDeNotas"
        for (let i = 0; i < estudiantes.length; i++) {
            sumaDeNotas += estudiantes[i].nota;
        }

        // creo una variable para guardar el resultado
        let promedio = sumaDeNotas / estudiantes.length;

        return promedio;
    }
    const promedio = hallarPromedioDeTodasLasNotas(); // El numero resultante del promedio los guardo en una variable "promedio"

    let notapromedio = document.getElementById("notapromedio"); //llamar al apartado en el HTML que contiene la respuesta a la nota promedio
    let mejorestudiante = document.getElementById("mejorestudiante"); //llamar al apartado en el HTML que contiene la respuesta al mejor estudiante
    let peorestudiante = document.getElementById("peorestudiante"); //llamar al apartado en el HTML que contiene la respuesta al peor estudiante

    if (estudiantes.length === 0) {
        let recuadroInfoGeneral = document.getElementById("recuadroInfoGeneral");
        recuadroInfoGeneral.style.display = "none"
    } else {
        recuadroInfoGeneral.style.display = "block"

        // A ese apartado en el HTML que llamamos lo rellenamos segun los datos que haya ingresado el usuario
        if (estudiantes.length === 1) {
            notapromedio.innerHTML = `- La nota promedio estará disponible al agregar 2 o mas estudiantes`
        } else {
            notapromedio.innerHTML = `- La nota promedio de los <strong>${estudiantes.length}</strong> estudiantes fue de: <strong>${promedio.toFixed(1)}</strong>`
        }
        mejorestudiante.innerHTML = `- El/la mejor estudiante/a fue <strong>${mejorEstudiante.nombre} ${mejorEstudiante.apellido}</strong> con una nota de <strong>${mejorEstudiante.nota}</strong>`
        peorestudiante.innerHTML = `- El/la peor estudiante fue <strong>${peorEstudiante.nombre} ${peorEstudiante.apellido}</strong> con una nota de <strong>${peorEstudiante.nota}</strong>`
    }


    let nuevoEstudiante = document.getElementById("nuevoEstudiante");
    nuevoEstudiante.innerHTML = `Agrega un nuevo estudiante`;
}


function extraerUsuarios() {
    return JSON.parse(localStorage.getItem('Usuarios')) || [];  // Guardamos en la variable los estudiantes que esten guardados en el Localstorage y si no lo iniciamos vacio
}

function funcionDeInicio() {   //funcion asociada al boton de "CONFIRMAR"

    let inputNombre = document.getElementById("inputNombre").value;      // Guardo el nombre ingresado en el input
    let inputApellido = document.getElementById("inputApellido").value;  // Guardo el apellido ingresado en el input
    let inputNota = document.getElementById("inputNota").value;          // Guardo la nota ingresada en el input

    let nombreFondo = document.getElementById("inputNombre");
    let apellidoFondo = document.getElementById("inputApellido");
    let notaFondo = document.getElementById("inputNota");

    if (inputNota === "") {
        notaFondo.classList.add("fondoSombraRoja");
    }

    inputNota = parseInt(inputNota);// convertir la nota ingresada por el ususario en un Entero

    // Validar que se hayan ingresado todos los campos
    if (inputNombre === "" || inputApellido === "" || inputNota === "") {
        
        if (inputNombre === "") {
            nombreFondo.classList.add("fondoSombraRoja");
            apellidoFondo.classList.remove("fondoSombraRoja");
            notaFondo.classList.remove("fondoSombraRoja");
        }

        if (inputApellido === "") {
            apellidoFondo.classList.add("fondoSombraRoja");
            nombreFondo.classList.remove("fondoSombraRoja");
            notaFondo.classList.remove("fondoSombraRoja");
        }

        if (inputNombre === "" && inputApellido === "") {
            nombreFondo.classList.add("fondoSombraRoja");
            apellidoFondo.classList.add("fondoSombraRoja");
        }

        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }

        });
        Toast.fire({
            icon: "error",
            title: "Debes ingresar todos los datos"
        });
        return;
    }
    else if // Comprobar que los input de texto no contengan numeros
        (!/^[A-Za-z]+$/.test(inputNombre) || !/^[A-Za-z]+$/.test(inputApellido)) {

        if (inputNombre === "") {
            nombreFondo.classList.add("fondoSombraRoja");
            notaFondo.classList.remove("fondoSombraRoja");
        }

        if (inputApellido === "") {
            apellidoFondo.classList.add("fondoSombraRoja");
            notaFondo.classList.remove("fondoSombraRoja");
        }

        if (!/^[A-Za-z]+$/.test(inputNombre)) {
            nombreFondo.classList.add("fondoSombraRoja");
        }

        if (!/^[A-Za-z]+$/.test(inputApellido)) {
            apellidoFondo.classList.add("fondoSombraRoja");
        }

        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }

        });
        Toast.fire({
            icon: "error",
            title: "Tu nombre y Apellido deben ser solo letras"
        });
        return;
    } else if
        // Validar que la nota esté dentro del rango permitido 
        (isNaN(inputNota) || inputNota < 1 || inputNota > 10) {

        notaFondo.classList.add("fondoSombraRoja");

        nombreFondo.classList.remove("fondoSombraRoja");
        apellidoFondo.classList.remove("fondoSombraRoja");

        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }

        });
        Toast.fire({
            icon: "error",
            title: "La nota debe ser un numero entre 1-10"
        });
        return;
    } else {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: "Añadido correctamente"
        });

        nombreFondo.classList.remove("fondoSombraRoja")
        apellidoFondo.classList.remove("fondoSombraRoja")
        notaFondo.classList.remove("fondoSombraRoja")
    }

    // Agregar valores a la tabla
    let tabla = document.getElementById("miTabla").getElementsByTagName("tbody")[0];  // llamar al tbody de la tabla
    let fila = tabla.insertRow();     // Insertar fila en la tabla

    let nombreCelda = fila.insertCell(0);     // Agregar celda en la posicion 0 
    let apellidoCelda = fila.insertCell(1);   // Agregar celda en la posicion 1
    let notaCelda = fila.insertCell(2);       // Agregar celda en la posicion 2 
    let aprobacion = fila.insertCell(3)       // Agregar celda en la posicion 3 

    // A estas celdas le ponemos el contenido que haya ingresado el ususario.
    nombreCelda.textContent = inputNombre;
    apellidoCelda.textContent = inputApellido;
    notaCelda.textContent = inputNota;

    // A la Celda de aprobacion la rellenamos con "Aprobado" p "Desaprobado" dependiendo la nota 
    aprobacion.textContent = (inputNota >= 7) ? "Aprobado" : "Desaprobado";

    if (inputNota >= 7) {
        aprobacion.style.backgroundColor = "#5dff93";
    } else {
        aprobacion.style.backgroundColor = "#fd3333";
    }

    // Guardamos en una variable mediante la clase "Estudiante" los datos ingresados por el usuario 
    estudiantes[estudiantes.length] = new Estudiante(inputNombre, inputApellido, parseInt(inputNota));

    // Reseteamos el valor de todos los inputs para que queden vacios una vez se aprete el boton de CONFIRMAR
    document.getElementById("inputNombre").value = "";
    document.getElementById("inputApellido").value = "";
    document.getElementById("inputNota").value = "";


    // Guardamos los datos del usuario en el LocalStorage
    localStorage.setItem("Usuarios", JSON.stringify(estudiantes));

    let usuariosJSON = JSON.parse(localStorage.getItem('Usuarios')); // Llamamos al usuario convirtiendolo de cadena de texto a Objecto
    console.log(usuariosJSON); // Lo mostrramos en la consola 

    extraerUsuarios();
    calcularDatos()
}



function addEventListeners() {     // lo ejecutamos al iniciar la pagina para cargar el LocalSorage y que este se agregue a la tabla

    extraerUsuarios();


    for (let i = 0; i < estudiantes.length; i++) {

        let tabla = document.getElementById("miTabla").getElementsByTagName("tbody")[0];  // llamar al tbody de la tabla
        let fila = tabla.insertRow();     // Insertar fila en la tabla

        let nombreCelda = fila.insertCell(0);     // Agregar celda en la posicion 0 
        let apellidoCelda = fila.insertCell(1);   // Agregar celda en la posicion 1
        let notaCelda = fila.insertCell(2);       // Agregar celda en la posicion 2 
        let aprobacion = fila.insertCell(3)       // Agregar celda en la posicion 3 

        // A estas celdas le ponemos el contenido que haya ingresado el ususario.
        nombreCelda.textContent = estudiantes[i].nombre;
        apellidoCelda.textContent = estudiantes[i].apellido;
        notaCelda.textContent = estudiantes[i].nota;

        // A la Celda de aprobacion la rellenamos con "Aprobado" p "Desaprobado" dependiendo la nota 
        aprobacion.textContent = (estudiantes[i].nota >= 7) ? "Aprobado" : "Desaprobado";

        if (estudiantes[i].nota >= 7) {
            aprobacion.style.backgroundColor = "#5dff93";
        } else {
            aprobacion.style.backgroundColor = "#fd3333";
        };
    }
}

//
function eliminarFilasTabla() {
    // Eliminar todas las filas de la tabla
    localStorage.clear();

    let tabla = document.getElementById('miTabla');
    let rowCount = tabla.rows.length;
    for (let i = rowCount - 1; i > 0; i--) {
        tabla.deleteRow(i);
    }

    estudiantes = [];
    calcularDatos();
}

// EVENTO PARA EL BOTON (LIMPIAR TODO)
document.getElementById("botonLimpiarTodo").addEventListener("click", function (event) {
    event.preventDefault();
    eliminarFilasTabla();
})

// Funcion para iniciar todos las funcioones internas, esta funcion se inicia cuando el usuario le da click al boton "CONFIRMAR" y agrega su nota al cuadro, a partir de ahi se actualizan los resultados de por ejemplo: Mejor Nota, Peor Nota, Promedio de notas, etc.
let funcionInicio = document.getElementById("botonAgregar");
funcionInicio.addEventListener("click", () => {
    funcionDeInicio();
})

////////////////////////////////////////////////////////////////////////////////////////////////

addEventListeners();  // lo primeros que hacemos en iniciar esta funcion
calcularDatos();      // seguido a eso calculamos todos los datos



// Consumir la API de Imagen random
let cuadro = document.getElementById("publicidad");
let textoPublicidad = document.getElementById("textoPublicidad")

const url = "https://picsum.photos/seed/picsum/200/300";

let publicidadRandom = () => {
    fetch(url)
        .then((response) => {
            return response.blob();
        })
        .then((blob) => {
            textoPublicidad.innerText = "Contenido Publicitario"
            let img = document.createElement('img');
            let imgUrl = URL.createObjectURL(blob);
            img.src = imgUrl;
            cuadro.appendChild(img);
        })
        .catch((error) => console.error(`Error al cargar la publicidad`, error))
}

window.addEventListener("load", publicidadRandom);