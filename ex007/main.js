class numeroUsuario {
    constructor (valor){
        this.valor = valor;
    }

    consulta(valoresAleatorios, valorInserido){
        if(valorInserido < valoresAleatorios) console.log('O número certo está para cima')
        if(valorInserido > valoresAleatorios) console.log('O número certo está para baixo')
        if(valorInserido === valoresAleatorios) console.log('Você acertou')
    }
}

const valorAl = Math.floor(Math.random()* (10 - 1) + 1);

const v1 = new numeroUsuario(5);
v1.consulta(valorAl, v1.valor)
console.log(valorAl, v1.valor)