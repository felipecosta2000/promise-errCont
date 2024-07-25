function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {

        try{

        if(Math.random() < chanceErro) {
            reject('Ocorreu um erro!') 
        }else{
            resolve(valor)
        }

    } catch(e){
        reject(e)
    }

    })

}

funcionarOuNao('Testando...', 0.9) // ou 0.1 para testar
.then(v => `Valor: ${v}`)

.then(
    v => console.log(V),
    err => console.log(`Erro Esp.: ${err}`)
)

//.then(v => console.log(`Valor: ${v}`))

.catch(err => console.log(`Erro: ${err}`))

.then(() => console.log ('Fim!'))