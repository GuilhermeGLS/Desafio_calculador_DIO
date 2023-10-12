let ferro = "Ferro";
let bronze = "Bronze";
let ouro = "Ouro";
let diamante = "Diamante";
let lendario = "Lendário";
let imortal = "Imortal";

function rank(vitoria, derrotas) {
    const saldo_de_vitorias = vitoria - derrotas

    if (vitoria < 10) {
        return ferro;
    } else if (vitoria >= 11 && vitoria <= 20) {
        return bronze;
    } else if (vitoria >= 21 && vitoria <= 50) {
        return ouro;
    } else if (vitoria >= 51 && vitoria <= 80) {
        return diamante;
    } else if (vitoria >= 81 && vitoria <= 90) {
        return lendario;
    } else if (vitoria >= 100) {
        return imortal;
    }
}

let vitoria = 50
let derrotas = 10

let resultadoRank = rank(vitoria, derrotas);

console.log(`O herói tem um saldo de ${vitoria - derrotas} vitórias e está no rank ${resultadoRank}.`);
