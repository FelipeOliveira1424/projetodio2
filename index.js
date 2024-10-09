
function calcularRank(vitorias, derrotas) {
    const saldoRankeadas = vitorias - derrotas;
    
    let rank;

    
    if (vitorias < 10) {
        rank = 'Ferro';
    } else if (vitorias >= 11 && vitorias <= 20) {
        rank = 'Bronze';
    } else if (vitorias >= 21 && vitorias <= 50) {
        rank = 'Prata';
    } else if (vitorias >= 51 && vitorias <= 80) {
        rank = 'Ouro';
    } else if (vitorias >= 81 && vitorias <= 90) {
        rank = 'Diamante';
    } else if (vitorias >= 91 && vitorias <= 100) {
        rank = 'Lendário';
    } else if (vitorias >= 101) {
        rank = 'Imortal';
    }

    return { saldoRankeadas, rank };
}


let totalVitorias = 60;
let totalDerrotas = 35;
let partidas = 95; 


for (let i = 1; i <= partidas; i++) {
    
    let resultado = Math.floor(Math.random() * 2); 

    
    if (resultado === 1) {
        totalVitorias++;
    } else {
        totalDerrotas++;
    }

    console.log(`Partida ${i}: ${resultado === 1 ? 'Vitória' : 'Derrota'}`);
}

const resultadoFinal = calcularRank(totalVitorias, totalDerrotas);
console.log(`Saldo de Rankeadas: ${resultadoFinal.saldoRankeadas}, Rank: ${resultadoFinal.rank}`);