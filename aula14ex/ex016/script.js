    
function verificar() {
    var ffnum = document.getElementById('ffnum')
    var flnum = document.getElementById('flnum')
    var res = document.getElementById('res')
    var fpasso = document.getElementById('fpasso')
    if ( ffnum.value.length == 0   || flnum.value.length == 0 || fpasso.value.length <= 0 || fpasso.value <= 0) {
        alert('Confirme seus Dados')
    }else {
        res.innerHTML = 'Contando:'
        var fnum = Number(ffnum.value)
        var lnum = Number(flnum.value)
        var passo = Number(fpasso.value)
        if (fnum < lnum) {
            for(var c = fnum ; c <= lnum; c += passo ) {
            res.innerHTML += `${c} \u{1f449}`
        }
        
        }else {
            for(var c = fnum ; c >= lnum; c -= passo ) {
            res.innerHTML += `${c} \u{1f449}`
        }
        res.innerHTML += '\u{1f3c1}'
        }
    }
}
