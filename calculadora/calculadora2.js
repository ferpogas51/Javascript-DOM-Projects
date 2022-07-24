class Calculadora {
sumar(num1,num2) {
	return parseInt(num1) + parseInt(num2);
}
restar(num1,num2) {
	return parseInt(num1) - parseInt(num2);
}
multiplicar(num1,num2) {
	return parseInt(num1) * parseInt(num2);
}
dividir(num1,num2) {
	return parseInt(num1) / parseInt(num2);
}
potenciar(num,exp){
	return parseInt(num) ** parseInt(exp); 
}
raizCuadrada(num){
	return Math.sqrt(num);
}
raizCubica(num){
	return Math.cbrt(num);
}
 }

 const calculadora = new Calculadora(); 

alert("¿que operacion deseas realizar?");
let operacion = prompt("1: Suma, 2: Resta, 3: Multiplicación, 4: División, 5: Potenciazión 6: Raiz cuadrada 7: Raiz cúbica");

if (operacion == 1) {
	let numero1 = prompt("primer numero para sumar");
	let numero2 = prompt("segundo numero para sumar");	
	let resultado = calculadora.sumar (numero1,numero2)
	alert(`tu resultado es ${resultado}`);
}
else if (operacion == 2) {
	let numero1 = prompt("primer numero para restar");
	let numero2 = prompt("segundo numero para restar");	
	let resultado = calculadora.restar (numero1,numero2)
	alert(`tu resultado es ${resultado}`);
}
 else if (operacion == 3) {
	let numero1 = prompt("primer numero para multiplicar");
	let numero2 = prompt("segundo numero para multiplicar");	
	let resultado = calculadora.multiplicar (numero1,numero2)
	alert(`tu resultado es ${resultado}`);
}
 else if (operacion == 4) {
	let numero1 = prompt("primer numero para dividir");
	let numero2 = prompt("segundo numero para dividir");	
	let resultado = calculadora.dividir (numero1,numero2)
	alert(`tu resultado es ${resultado}`);
}
else if (operacion == 5) {
	let numero1 = prompt("numero a potenciar");
	let numero2 = prompt("exponente");	
	let resultado = calculadora.potenciar (numero1,numero2)
	alert(`tu resultado es ${resultado}`);
}
else if (operacion == 6) {
	let numero1 = prompt("conocer la raiz cuadrada de:");
	let resultado = calculadora.raizCuadrada (numero1)
	alert(`tu resultado es ${resultado}`);
}
else if (operacion == 7) {
	let numero1 = prompt("conocer la raiz cúbica de:");
	let resultado = calculadora.raizCubica (numero1)
	alert(`tu resultado es ${resultado}`);
}
else{
	alert("no se ah encontrado la operacion MAQUINOLA");
}