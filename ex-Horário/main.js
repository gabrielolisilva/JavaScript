var agora = new Date()
var horaAtual = agora.getHours()

var frase = window.document.querySelector('#dataFrase')
frase.innerHTML= `Agora são ${horaAtual} Horas`

var corFundo = window.document.querySelector('#fundo')
var imagemBola = window.document.querySelector('#img')

if(horaAtual < 12){
    corFundo.style.background = 'lightgray'
    imagemBola.src = 'imagens/foto-manha.jpg'
} else if(horaAtual <= 18){
    corFundo.style.background = 'FFFFe0'
    imagemBola.src = 'imagens/foto-tarde.jpg'
} else{
    corFundo.style.background = '#964B00'
    imagemBola.src = 'imagens/foto-noite.jpg'
}