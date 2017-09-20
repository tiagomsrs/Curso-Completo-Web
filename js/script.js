/*alert("Olá HCODE JS");
var resposta = confirm("Deseja excluir?");

console.log(resposta); // para mostrar no conssole do Developer Tools do Chrome
*/

var a, b;


//alert(somar (2, 4) );
//console.log(somar (2, 4) /2);
document.querySelector("#calcular").addEventListener("click",function(){
	let valorA = document.querySelector("#valorA").value; // a variavel let somente vai existir dentro deste escopo
	let valorB = document.querySelector("#valorB").value;
	if (valorA.length > 0 && valorB.length > 0){ // para checar se há algo dentro
		//alert(parseInt(valorA) + parseInt(valorB)); 
		alert(somar(valorA, valorB));
	}else{
		alert("Digite os valores!");
	}

	// parseInt converte o valor para inteiro
}); // document -> neste documento
						// querySelector -> selecionar alguem do documento
						// addEventListener -> cria uma escuta para o evento "calcular"
function somar (a, b) {	
	return parseInt(a) + parseInt(b);
}

