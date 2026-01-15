function contar() {
    var ini = document.getElementById('iini')
    var fim = document.getElementById('ifim')
    var pass = document.getElementById('ipass')
    var res = document.getElementById(`res`)
    var ini1 = Number(ini.value)
    var fim1 = Number(fim.value)
    var pass1 = Number(pass.value)

    if (ini1 == 0) {
        window.alert('Não se pode começar com zero, Inicio recebe 1')
        ini1 = 1
    } else if (fim1 == 0) {
        window.alert('Não se pode contar até zero, fim recebe 10')
        fim1 = 10
    } else if (pass1 == 0) {
        window.alert('Não se pode começar de zero em zero, Passo recebe 1')
        pass1 = 1
    }

    res.innerHTML = ''
    for (ini1; ini1 <= fim1; ini1 += pass1) {
        res.innerHTML += `&#x1F449 ${ini1} `
    }
    if (res)
    res.innerHTML += `&#x1F3C1`
    













}