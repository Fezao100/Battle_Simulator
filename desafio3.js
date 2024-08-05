class hero{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    tipoAtaque(tipo){
        let ataque
        if(tipo === "Mago"){
            ataque = "Magia"
        } else if(tipo === "Guerreiro"){
            ataque = "Espada"
        } else if(tipo === "Monge"){
            ataque = "Artes marciais"
        } else if(tipo === "Ninja"){
            ataque = "Shuriken"
        }
        return ataque
    }

    atacar(){
        const ataque = this.tipoAtaque(this.tipo)
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }     
}

let guerreiro = new hero("Beincin", "22", "Guerreiro")
let monge = new hero("Cota", "25", "Monge")
let mago = new hero("Gold", "23", "Mago")
let ninja = new hero("Tardis", "28", "Ninja")


guerreiro.atacar()
monge.atacar()
mago.atacar()
ninja.atacar()
