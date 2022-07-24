const nombre = document.getElementById("nombre");
const email = document.getElementById("mail");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado");

boton.addEventListener("click",(e)=>{
	let error = validarCampos();
	if (error[0]) {
		e.preventDefault();
		resultado.innerHTML = error[1];
		resultado.classList.add("red")
	} else{
		resultado.innerHTML = "solicitud enviada correctamente"
		resultado.classList.add("green")
		resultado.classList.remove("red");
	}
});

const validarCampos = ()=>{
	let error = [];
	if (nombre.value.length < 5 || nombre.value.length > 40) {
		error[0]  = true;
		error[1] = "el nombre es invalido."
		return error;
	}else if(email.value.length < 5 ||
             email.value.length > 40 ||
             email.value.indexOf("@") == -1 ||
             email.value.indexOf(".") == -1) {
        error[0] = true;
        error[1] = "el mail es inválido";
        return error;
	}else if (materia.value.length < 4 || materia.value.length > 40){
		error[0] = true;
		error[1] = "la materia no existe"
		return error;
	}



	error[0] = false;
	return error;
}
/*por que no se puso el else aqui arriba simple por que el return termina la funcion*/