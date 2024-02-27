function gerar(){
    var tab = document.getElementById('numb').value
    var ntab = Number(tab)
    var res = document.getElementById('sres')

    if (tab.length == 0){
        window.alert('[ERRO] Preencha um valor.')
    } else {
        res.innerHTML = ''
        for (c=1; c<=10; c++){
            res.innerHTML += `<option>${ntab} x  ${c} = ${ntab*c}</option>`
        }        
    }

}