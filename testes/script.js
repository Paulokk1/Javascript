function verificar() {
    var agora = new Date()
    var ano = agora.getFullYear
    var idade1 = document.getElementById('iidade')
    var idade = Number(idade1.value)

    if (idade <= 1976) {
    document.getElementById('res').innerHTML = 'Idoso'
}   else if (idade >= 1977 && idade <= 2008) {
    document.getElementById('res').innerHTML = 'Adulto'
} else if (idade >= 2009 && idade < 2014) {
    document.getElementById('res').innerHTML = 'Jovem'
} else if (idade => 2026) {
    document.getElementById('res').innerHTML = 'Valor incorreto'
} else {
    document.getElementById('res').innerHTML = 'Criança'
}
}

