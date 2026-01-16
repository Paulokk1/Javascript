function gerar() {
    var num = document.getElementById('inum')
    var sele = document.getElementById('isele')
    var inum = Number(num.value)

    

    if (inum == 0) {
        window.alert('Número invalido')
    } else {
        sele.innerHTML = ''
        
        for (var c = 1; c <=10; c++) {
            var item = document.createElement('option')
             

            item.text = `${inum} x ${c} = ${inum*c}`
            sele.appendChild(item)
        }
        
    }








}