function verificar () {
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[Erro] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade < 10) {
                //Criança
                img.setAttribute('src','kidMale.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','teenMale.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','adultMale.png')
            } else {
                //idoso
                img.setAttribute('src','oldMale.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade < 10) {
                //Criança
                img.setAttribute('src','kidFemale.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','teenFemale.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','adultFemale.png')
            } else {
                //idoso
                img.setAttribute('src','oldFemale.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos. <br />`
        res.appendChild(img)
    }
}