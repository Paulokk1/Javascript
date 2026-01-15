function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('inasc')
    var res = document.querySelector('div#res')


    if (fano.value.length == 0 || fano.value >= ano) {
        window.alert('[ERRO] verifique o ano e tente novamente')
    } else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.getElementById('foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && 11 > idade) {
                //crianca
                img.setAttribute('src', 'crianca-m.jpg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto-m.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-m.jpg')
            }
        } else {
            gênero = 'Mulher'
            if (idade >= 0 && 11 > idade) {
                //crianca
                img.setAttribute('src', 'crianca-f.jpg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem-f.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto-f.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosa-f.jpg')
            }
        }
        res.innerHTML = `<p>Detectamos ${gênero} com ${idade} anos</p>`
        res.appendChild(img)
        img.style.width = '40%'
        img.style.maxWidth = '400px'
        img.style.borderRadius = '100%'
        res.style.textAli
    }



}