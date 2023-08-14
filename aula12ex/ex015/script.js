function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fano.value.length == 0 || fano.value > ano ) {
        alert('[ERRO] Verifique as informações e tente novamente !!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src' , 'criança-m.png')
                
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src' , 'jovem-m.png')
            }else if (idade < 50) {
                //ADULTO
                img.setAttribute('src' , 'adulto-m.png')
            } else {
                //IDOSO
                img.setAttribute('src' , 'idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'criança-f.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'jovem-f.png')
            }else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'adulto-f.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos`
        res.appendChild(img)


    }
}
