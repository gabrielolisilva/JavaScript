contador = '';

function exibirAsteristicos (linhas){
    for(let i = 1; i <= linhas; i++){
        contador += '*';
        console.log(contador)   
    }
}

exibirAsteristicos(10);