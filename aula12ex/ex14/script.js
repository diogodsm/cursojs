function carregar () {
    var msg = document.getElementById('msg')
    var img = document.querySelector('#imagem')
    var data = new Date()
    //var hora = data.getHours()
     var hora = 2
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12 ) {
        img.src = "manhã.png"
        document.body.style.backgroundColor = '#cbc3b8'
    } else if (hora >=12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.backgroundColor = '#e28d78'
    } else {
        img.src = 'noite.png'
        document.body.style.backgroundColor = '#04305e'
    }

}


