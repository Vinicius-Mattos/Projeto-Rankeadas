let saldo = calcularRank(120, 56)
let nivel = 0

function calcularRank(vitorias, derrotas) {
    let resultado = vitorias - derrotas
    return resultado
}

if(calcularRank <= 10){
    nivel = "Ferro"
} else if(calcularRank >= 11 && calcularRank <= 20) {
    nivel = "Bronze"
} else if(calcularRank >= 21 && calcularRank <= 50) {
    nivel = "Prata"
} else if(calcularRank >= 51 && calcularRank <= 80) {
    nivel = "Ouro"
} else if(calcularRank >= 81 && calcularRank <= 90) {
    nivel = "Diamante"
} else if(calcularRank >= 91 && calcularRank <= 100) {
    nivel = "Lendário"
} else if(calcularRank > 100) {
    nivel = "Imortal"
} 

console.log("O Herói tem saldo de " + saldo + " e está no nível de " + nivel)