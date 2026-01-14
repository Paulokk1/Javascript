var agora = new Date()
var hora = agora.getHours()
var min = new Date()
var minutos = min.getMinutes()
//daqui pra cima as variaveis
//daqui pra baixo os codigos
console.log(`Agora são ${hora} e ${minutos}.`)
if (hora < 12) {
    console.log(`Bom dia!`)
} else if (hora < 18) {
    console.log(`Boa tarde`)
} else {
    console.log(`Boa noite!`)
}