function carregar() {
    var msg = document.getElementById('msg')
    var agora = new Date()
    var horas = agora.getHours()
    var minutos = agora.getMinutes()
    var sec = document.getElementById('sec')
    var img = document.getElementById('img')
    msg.innerHTML = (`Agora são ${horas} horas e ${minutos} minutos`)
    if (horas < 12) {
        img.src = 'aa32cebf6473f4960b93ef456ab6e5c8.jpg'
        document.body.style.backgroundColor = '#FACC7B'
        document.getElementById('sec').style.backgroundColor = '#C8B8AB'
    } else if (horas < 18) {
        img.src = 'a7eb0b924cf5da29e2bfcf902cf9b6e1.jpg'
        document.body.style.backgroundColor = '#862B2C'
        document.getElementById('sec').style.backgroundColor = '#FACC7B'
    } else {
        img.src = '048f1650df369c12e6be5dd700d24eff.jpg'
        document.body.style.backgroundColor = 'black'
        document.getElementById('sec').style.backgroundColor = 'rgb(255, 255, 255)'
        document.getElementById('titulo').style.color = 'white'
        document.getElementById('sec').style.boxShadow = '4px 4px 4px rgb(55, 22, 75)'
    }

}