class Valor {
    constructor(valor){
        this.valor = valor;
    }

    gerarFatorial(){
        let contador = 1;

        for(let i = 1; i <= this.valor; i++){
            contador *= i;
        }
        console.log(contador)
    }
}

let v1 = new Valor(4);
v1.gerarFatorial()