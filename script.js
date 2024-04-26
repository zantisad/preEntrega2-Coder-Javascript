///////////// clase molde para crear cada nombre y nota de estudiante ///////////

class Estudiante{
    constructor(nombre, nota) {
        this.nombre = nombre;
        this.nota = nota;
        this.agregarEstudiante();
        this.comprobarSiAprueba();
    }

    agregarEstudiante() {      //awutomatizar el agregado de estudiantes al array
        estudiantes.push(this); 
    }

    comprobarSiAprueba() {     // automatizar la comprobacion de si aprobaron o 
        if(this.nota > 5) {    // desaprobaron y mandarlos al array correspondiente 
            siAprobados.push(this)
        } else {
            noAprobados.push(this)
        }
    }
}

let siAprobados = [];
let noAprobados = [];
console.log('La lista de alumnos que aprobaron son: ');
console.log(siAprobados)
console.log('La lista de alumnos que desaprobaron son: ');
console.log(noAprobados)

//array vacio donde vamos a guardar todos los nombres y estudiantes
let estudiantes = []

//creacion de estudiantes y sus notas
let alum1 = new Estudiante("Jose", 7);
let alum2 = new Estudiante("Miguel", 6);
let alum3 = new Estudiante("Ana", 9);
let alum4 = new Estudiante("Pedro", 8);
let alum5 = new Estudiante("Luisa", 5);
let alum6 = new Estudiante("Sofía", 9);
let alum7 = new Estudiante("Carlos", 6);
let alum8 = new Estudiante("María", 7);
let alum9 = new Estudiante("Juan", 8);
let alum10 = new Estudiante("Laura", 4);
let alum11 = new Estudiante("Jorge", 2);



////////////// interactividad con el usuario //////////////////

//pedirle al usuario su nombre 
let miNombre;
do {
    miNombre = prompt("Cual es tu nombre?")
} while (!(/^[a-zA-Z]+$/.test(miNombre))) //que permita solo letras

//pedirle al usuario su nota
let miNota;
do {
    miNota = Number(prompt("Cual fue tu nota? (1-10)"))
} while(miNota > 10 || miNota < 1 || isNaN(miNota) || (parseInt(miNota) != miNota))
//verificar que sea una nota valida

//creo una variable "yo" donde guardo mi nombre y mi nota para mandarla a la array
let yo = new Estudiante(miNombre, miNota);


/////// hallar el promedio de todas las notas ///////////

function hallarPromedioDeTodasLasNotas() {
    let sumaDeNotas = 0;

    for (let i = 0; i < estudiantes.length; i++) {
        sumaDeNotas += estudiantes[i].nota;
    }

    let promedio = sumaDeNotas / estudiantes.length;

    return promedio;
}

const promedio = hallarPromedioDeTodasLasNotas();
console.log(`El promedio de todas las notas (${estudiantes.length}) es de: ${promedio.toFixed(1)}`)



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
console.log(`El/la mejor estudiante fue ${mejorEstudiante.nombre} con una nota de ${mejorEstudiante.nota}`);



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
console.log(`El/la peor estudiante/a fue ${peorEstudiante.nombre} con una nota de ${peorEstudiante.nota}`);


