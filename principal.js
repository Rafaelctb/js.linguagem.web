var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura")
var altura = tdAltura.textContent;

console.log(paciente); //tr
console.log(tdPeso); //td que tem peso
console.log(peso); //obter100

var imc = peso / altura * altura; // 100 / 2.0 * 2.0 = 100 / 4 =>>>> 25 

console.log(imc);