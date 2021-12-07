
let nombre:string = "Raul";
let edad:number = 21;
let altura:number = 1.72;
let matriculado:boolean = true;
let asignaturas:string[] = ["DWEC","DAW","DIW","DWES"];

console.log("La variable: "+nombre+ " es de tipo: "+typeof(nombre));
console.log("La variable: "+edad+ " es de tipo: "+typeof(edad));
console.log("La variable: "+altura+ " es de tipo: "+typeof(altura));
console.log("La variable: "+matriculado+ " es de tipo: "+typeof(matriculado));
console.log("La variable: "+asignaturas+ " es de tipo: "+typeof(asignaturas));

/*
let saludo:string = "Hola";
let saludo:string = "Hello";
*/

let saludo:string = "Hola";
if(true){
    let saludo:string = "Hello";
    console.log("Dentro del if: " + saludo);
}
console.log("Fuera del if: " + saludo);


var saludo2:string = "Hola";
var saludo2:string = "Hello";

var saludo2:string = "Hola";
if(true){
    var saludo2:string = "Hello";
    console.log("Dentro del if: " + saludo2);
}
console.log("Fuera del if: " + saludo2);

/*
const saludo:string = "hola";
saludo = "adios";

const saludo:string = "Hola";
const saludo:string = "Hello";
*/

