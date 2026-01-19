var cont = []
var sele = document.getElementById('isel')
function clicar(num) {
    var number = document.getElementById('inumber')
    var num = Number(number.value)
    
    

    if (num == 0 || num > 100) {
        window.alert('Número invalido ou já adicionado')
    } else if (cont.includes(num)) {
        window.alert('Número invalido ou já adicionado')
    } else {
        var opt = document.createElement('option')
        
        opt.text = `Valor ${num} adicionado`
        sele.appendChild(opt)
        cont.push(num)
    }
    number.value = ''
    number.focus()
}




function clicar2() {
    var res = document.querySelector('div#res')

    res.innerHTML = `Ao todo temos ${cont.length} números registrados <br>`
    cont.sort()
    res.innerHTML += `O menor número é ${cont[0]} <br>`
    res.innerHTML += `O maior é ${cont[cont.length - 1]} <br>` 
    const soma = cont.reduce((total, n) => total + n, 0)
    res.innerHTML += `A soma de todos os valores: ${soma} <br>`
    var media = soma / 2
    res.innerHTML += `A média dos valores: ${media}`
}

