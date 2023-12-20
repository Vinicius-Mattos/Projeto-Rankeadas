let vitorias = 50;
let derrotas = 20;
let saldo = vitorias - derrotas;
let nivel

function calcularRank(vitorias, derrotas) {
    if(vitorias <= 10){
        nivel = "Ferro"
    } if else(saldo >= 11 && saldo <= 20) {
        nivel = "Bronze"
    }
}

console.log("O Herói tem saldo de " + saldo + " e está no nível de " + nivel)