var agora = new Date()
var horaAtual = agora.getHours()

var frase = window.document.querySelector('#dataFrase')
frase.innerHTML= `Agora são ${horaAtual} Horas`

var corFundo = window.document.querySelector('#fundo')
var imagemBola = window.document.querySelector('#Foto')

if(horaAtual < 12){
    corFundo.style.background = 'lightgray'
    imagemBola.style.background.image = 'imagens/foto-manha.jpg'
} else if(horaAtual <= 18){
    corFundo.style.background = 'FFFFe0'
    imagemBola.style.background.image = 'imagens/foto-tarde.jpg'
} else{
    corFundo.style.background = '#964B00'
}