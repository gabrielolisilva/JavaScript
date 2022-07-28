var agora = new Date()
var hora = agora.getHours()

if(hora < 12){
    console.log(`São ${hora} horas, tenha um bom dia!`)
} else if(hora <= 18){
    console.log(`São ${hora} horas, tenha uma boa tarde!`)
} else{
    console.log(`São ${hora} horas, tenha uma boa noite!`)
}