var height = 0
var width = 0
var lifes = 1 
var tempo = 15

var  criaMosquitoTempo = 1500


var nivel = window.location.search // RECUPERA TUDO QUE ESTÁ DEPOIS DA INTERROGAÇÃO INCLUSIVE ELA MESMA.
//alert(nivel.replace('?', '')) //REMOVE CARACTERE PASSADO POR PARÂMETRO E SUBSTITUI PELO PARÂMETRO DESEJADO.
nivel = nivel.replace('?', '')



if(nivel === 'normal'){
	criaMosquitoTempo = 1500

}else if(nivel === 'dificil'){
	criaMosquitoTempo = 1000

}else if(nivel ==='chucknorris'){
	criaMosquitoTempo = 750

}


function ajustaTamanhoPalcoJogo(){

      altura = window.innerHeight 
      largura  = window.innerWidth 


      console.log(largura, altura)

}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
    
    tempo -= 1
    if(tempo < 0){
    	clearInterval(cronometro) // para o cronometro.
    	clearInterval(criaMosquito) // para o criação dos mosquitos.
    	window.location.href = 'vitoria.html'

    }else
	document.getElementById('cronometro').innerHTML = tempo //transferir informações em outas tags de páginas 

	
},1000)

	function posicaoRandomica() {


		//REMOVER MOSQUITO ANTERIOR (CASO EXISTA)

		if(document.getElementById('mosquito')) {
			document.getElementById('mosquito').remove()


           // console.log('elemento selecionado foi: v' + lifes)
           if(lifes > 3){
           	window.location.href = 'fim_de_jogo.html'
           }else{
			document.getElementById('v' + lifes ).src = "imagens/coracao_vazio.png"

			lifes++
		 }	

		}

		//document.getElementById('mosquito').remove() // TERÁ UM ERRO PORQUE NA PRIMEIRA CHAMADA DA FUNÇÃO NÃO TEREMOS NENHUM ELEMENTO HTML PARA SER REMOVIDO, SOMENTE DEPOIS DA SEGUNDA EXECUÇÃO DA FUNÇÃO "POSICAORANDOMICA"

		var posicaoX = Math.floor(Math.random() * largura) - 90  // Gera valores aleatórios entre 0 e 1.
		var posicaoY = Math.floor(Math.random() * altura) - 90 // Math.floor é uma função para arredondar valores.

		posicaoX = posicaoX < 0 ? 0: posicaoX
		posicaoY = posicaoY < 0 ? 0: posicaoY

		console.log(posicaoX, posicaoY)

		//Criar o lemento html
		var mosquito = document.createElement('img')
		mosquito.src = 'imagens/mosquito.png'
		mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
		mosquito.style.left = posicaoX + 'px'
		mosquito.style.top  = posicaoY + 'px'
		mosquito.style.position = 'absolute'
		mosquito.id = 'mosquito'
		mosquito.onclick = function(){
			this.remove() //AJUSTA O CONTEXTO DE UM DETERMINADO ATRIBUTO OU MÉTODO. FAZ REFERÊNCIA AO PROPRIO ELEMENTO HTML QUE EXECUTA A FUNÇÃO.
		}

		document.body.appendChild(mosquito)  // ACESSA O BODY DA PÁGINA E INCLUI UM FILHO AO BODY.

		console.log(ladoAleatorio())
	}


	function tamanhoAleatorio(){
		var classe = Math.floor(Math.random() * 3)
		console.log(classe)

		switch(classe){
			case 0:
			return 'mosquito1'

			case 1:
			return 'mosquito2'

			case 2:
			return 'mosquito3'
		}
        

	}

	function ladoAleatorio(){
		var classe = Math.floor(Math.random() * 2)
		console.log(classe)

		switch(classe){
			case 0:
			return 'ladoA'

			case 1:
			return 'ladoB'

			}

	}