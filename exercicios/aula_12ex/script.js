function carregar(){
    var msg = window.document.getElementById('texto')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    hora = 10
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12) {
        //dia
        img.src = 'img/mncirc.png'
        document.body.style.background = '#F9E9E1'
    } else if (hora >= 12 && hora < 18) {
        //tarde
        img.src = 'img/tncirc.png'
        document.body.style.background = '#AA6200'
    } else {
        //noite
        img.src = 'img/nncirc.png'
        document.body.style.background = '#797286'
    }
}