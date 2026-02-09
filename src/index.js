let resultado = partidas(150, 20)
let posicao = ""

function partidas(vitorias, derrotas){
let rankeadas = vitorias - derrotas
return(rankeadas)
}
if (resultado <= 10)
    posicao = "Ferro"
else if ((resultado >=11) && (resultado < 20))
    posicao = "Bronze"
else if ((resultado >=21) && (resultado < 50))
    posicao = "Prata"
else if ((resultado >=51) && (resultado < 80))
    posicao = "Ouro"
else if ((resultado >=81) && (resultado < 90))
    posicao = "Diamante"
else if ((resultado >=91) && (resultado < 100))
    posicao = "Lendário"
else if (resultado >= 101)
    posicao = "Imortal"
console.log(`Seu resultado final é: ${resultado}.
    Assim, sua posição no ranking é: ${posicao}
    Parabéns!`)