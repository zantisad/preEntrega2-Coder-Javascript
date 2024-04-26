///////////// clase molde para crear cada nombre y nota de estudiante ///////////

class Estudiante {
    constructor(nombre, apellido, nota) {
        this.nombre = nombre;
        this.nota = nota;
        this.apellido = apellido;
    }

    comprobarSiAprueba() {     // automatizar la comprobacion de si aprobaron o 
        if (this.nota > 5) {    // desaprobaron y mandarlos al array correspondiente 
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

//arrays vacios donde vamos a guardar todos los aprobados y desaprobados dependiendo la nota 
let siAprobados = [];   // nota > 5
let noAprobados = [];   // nota <= 5

//creacion de estudiantes y sus notas
let alum1 = new Estudiante("Jose", "Fernandez", 7);
let alum2 = new Estudiante("Miguel", "Rodriguez", 6);
let alum3 = new Estudiante("Ana", "Perez", 9);
let alum4 = new Estudiante("Pedro", "Etcheverri", 8);
let alum5 = new Estudiante("Luisa", "Caballero", 5);
let alum6 = new Estudiante("Sofía", "Baiz", 9);
let alum7 = new Estudiante("Carlos", "Dos Santos", 6);
let alum8 = new Estudiante("María", "De Leon", 7);
let alum9 = new Estudiante("Juan", "Arias", 8);
let alum10 = new Estudiante("Laura", "Altamiranda", 4);
let alum11 = new Estudiante("Jorge", "Ferraro", 5);

////////////// interactividad con el usuario //////////////////

//pedirle al usuario su nombre 
let miNombre;
do {
    miNombre = prompt("Cual es tu nombre?")
} while (!(/^[a-zA-Z]+$/.test(miNombre))) //que permita solo letras

//pedirle al usuario su apellido 
let miApellido;
do {
    miApellido = prompt("Cual es tu apellido?")
} while (!(/^[a-zA-Z]+$/.test(miApellido))) //que permita solo letras

//pedirle al usuario su nota
let miNota;
do {
    miNota = Number(prompt("Cual fue tu nota? (1-10)"))
} while (miNota > 10 || miNota < 1 || isNaN(miNota) || (parseInt(miNota) != miNota))
//verificar que sea una nota valida

//creo una variable "yo" donde guardo mi nombre y mi nota
let yo = new Estudiante(miNombre, miApellido, miNota);


//array vacio donde vamos a guardar todos los nombres y estudiantes
let estudiantes = [alum1, alum2, alum3, alum4, alum5, alum6, alum7, alum8, alum9, alum10, alum11, yo]


/////// hallar el promedio de todas las notas ///////////

function hallarPromedioDeTodasLasNotas() {
    let sumaDeNotas = 0;

    for (let i = 0; i < estudiantes.length; i++) {
        sumaDeNotas += estudiantes[i].nota;
    }

    let promedio = sumaDeNotas / estudiantes.length;

    return promedio;
}

console.log("################ INFO GENERAL ################")
const promedio = hallarPromedioDeTodasLasNotas();
console.log(`La nota promedio de los ${estudiantes.length} estudiantes fue de: ${promedio.toFixed(1)}`)



/////Enocntrar el mejor estudiante y hacer un consol log con su nombre y su nota/////

function encontrarElMejorEstudiante() {
    let mejorEstudiante;
    let mejorNota = 0;

    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].nota > mejorNota) {
            mejorNota = estudiantes[i].nota;
            mejorEstudiante = estudiantes[i];
        }
    }

    return mejorEstudiante;
}

const mejorEstudiante = encontrarElMejorEstudiante();
console.log(`El/la mejor estudiante/a fue ${mejorEstudiante.nombre} ${mejorEstudiante.apellido} con una nota de ${mejorEstudiante.nota}`);



/////Enocntrar el peor estudiante y hacer un consol log con su nombre y su nota/////

function encontrarElPeorEstudiante() {
    let peorEstudiante;
    let peorNota = 10;

    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].nota < peorNota) {
            peorNota = estudiantes[i].nota;
            peorEstudiante = estudiantes[i];
        }
    }

    return peorEstudiante;
}

const peorEstudiante = encontrarElPeorEstudiante();
console.log(`El/la peor estudiante/a fue ${peorEstudiante.nombre} ${peorEstudiante.apellido} con una nota de ${peorEstudiante.nota}`);



// MOSTRAR ARRAYS DE APROBADOS Y DESAPROBADOS

alum1.comprobarSiAprueba();
alum2.comprobarSiAprueba();
alum3.comprobarSiAprueba();
alum4.comprobarSiAprueba();
alum5.comprobarSiAprueba();  // ejecutar la funcion en cada uno
alum6.comprobarSiAprueba();  // para enviarlos
alum7.comprobarSiAprueba();  // al array correspondiente
alum8.comprobarSiAprueba();  // (siAprobados o noAprobados)
alum9.comprobarSiAprueba();
alum10.comprobarSiAprueba();
alum11.comprobarSiAprueba();
yo.comprobarSiAprueba();


console.log('################ La lista de alumnos que aprobaron son: ################');
siAprobados.forEach((estudiante) => console.log(`Nombre: ${estudiante.nombre} ${estudiante.apellido} - Nota: ${estudiante.nota}`))
console.log('################ La lista de alumnos que desaprobaron son: ################');
noAprobados.forEach((estudiante) => console.log(`Nombre: ${estudiante.nombre} ${estudiante.apellido} - Nota: ${estudiante.nota}`));