const notas = [50, 90, 82, 62, 44, 20];

function mediaDoAluno (notas){
    let contador = 0;
    let media = 0;

    for(let i = 0; i < notas.length; i++){
        contador += notas[i]
    }

    media = contador / (notas.length)
    console.log(media)
}

mediaDoAluno(notas)