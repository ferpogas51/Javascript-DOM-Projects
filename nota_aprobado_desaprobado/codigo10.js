const sendButton = document.getElementById(`snd-nota`);

sendButton.addEventListener("click",()=>{
	let resultado,mensaje;
	try{
		prevRes= parseInt(document.getElementById(`nota`).value);
		if (isNaN(prevRes)) {
			throw "gracioso"
		}
		mensaje = definirMensaje(prevRes);
		resultado = verificarAprobacion(8,6,prevRes);
	}catch(e){
		resultado ="¿eres gracioso?"
		mensaje =" he descubierto que intentaste hackear el sitio";
	}
    abrirModal(resultado,mensaje);
});


const definirMensaje = (pr)=>{
	let resultado;
	switch (pr){
		case 1:resultado = "no puedes ser tan malo";
		break;
		case 2:resultado = "eres muy malo para la materia";
		break;
		case 3:resultado = "no sabes casi nada";
		break;
		case 4:resultado = "muy mal";
		break;
		case 5:resultado = "mal";
		break;
		case 6:resultado = "regular";
		break;
		case 7:resultado = "bien, pero puede mejorar";
		break;
		case 8:resultado = "¡muy bien!";
		break;
		case 9:resultado = "¡exelente!";
		break;
		case 10:resultado = "¡insuperable!";
		break;
		default: resultado = null;
	}
	return resultado
}


const verificarAprobacion = (nota1,nota2,prevRes)=>{
	promedio = (nota1 + nota2 + prevRes) / 3;
	if (promedio >= 7) {
		return `<span class="green">APROBADO</span>`;
	}
	return `<span class="red">DESAPROBADO</span>`;
}

const abrirModal = (res,msg)=>{
	document.querySelector(".resultado").innerHTML = res;
	document.querySelector(".mensaje").innerHTML ="tu prueba del examen es:" + (prevRes  ) + msg;
	let modal = document.querySelector(".modal-background");
	modal.style.display = "flex";
	modal.style.animation = "aparecer 1s forwards";
}