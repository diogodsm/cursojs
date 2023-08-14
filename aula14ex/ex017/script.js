function gerar() {
    var num = document.getElementById('num')
    var tab = document.getElementById('idselect')
    var v = Number(num.value)
    tab.innerHTML = ''
    if (num.value.length == 0){
        alert('Preencha o campo e tente novamente')
    } else {
        for (c = 0; c <= 10; c++) { 
            var item = document.createElement('option')
            item.text = `${v} x  ${c} = ${v*c} ` 
            tab.appendChild(item)
        }    
    }
}