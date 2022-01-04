const pessoa = {
    saudacao: 'bom diaaa',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar

falar()

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()