class Velocidade {
    constructor (velocidade, limite){
        this.velocidade = velocidade;
        this.limite = limite;
    }

    mensagem(velocidade, msg){
        console.log(`A velocidade atual do carro é de ${velocidade}, ${msg}`)
    }

    checarVelocidade(){
        if(this.velocidade <= this.limite) this.mensagem(this.velocidade, 'não houve multa')
        if(this.velocidade > this.limite && this.velocidade <= this.limite + 10) this.mensagem(this.velocidade, 'levou muita leve')
        if(this.velocidade >= this.limite + 11 && this.velocidade <= this.limite + 20) this.mensagem(this.velocidade, 'levou multa grave')
        if(this.velocidade > this.limite + 20) this.mensagem(this.velocidade, 'levou multa gravíssima')
    }
}

function valorAleatorio(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}

const carro1 = new Velocidade(valorAleatorio(1, 120), 80);
carro1.checarVelocidade();