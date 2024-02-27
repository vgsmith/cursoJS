
function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //hora = 7
    msg.innerHTML = `Agora são ${hora} hora(s)`
    if (hora > 6 && hora < 12) {
        img.src = 'morning.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >=12 && hora < 18) {
        img.src = 'afternoon.png'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'evening.png'
        document.body.style.background = '#515154'
    }
}