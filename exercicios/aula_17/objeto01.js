let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0){
        if (p > 0) {
            console.log('Engordou')
            this.peso += p //this.peso: acessa a propriedade 'peso'; this referencia a própria instância do objeto 'amigo'
        }
    }
}
amigo.engordar(0)
console.log (`${amigo.nome} pesa ${amigo.peso}Kg`)