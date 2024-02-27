function contar(){
    var start = document.getElementById('start').value
    var nstart = Number(start)
    
    var end = document.getElementById('end').value
    var nend = Number(end)
    
    var passo = document.getElementById('passo').value
    var npasso = Number(passo)
    
    var res = document.getElementById('res')
    res.innerHTML = `Contando... <br>`

    if (npasso <= 0){
        window.alert('[ERRO] Passo inválido. Considerando 1.')
        npasso = 1
    }

    if (start.length == 0 || end.length == 0 || passo.length == 0){
        window.alert('[ERRO] Preencha os campos corretamente')
    } else if (nstart<nend) {
        for (nstart;nstart <= nend;nstart+=npasso){
            res.innerText += `${nstart} 👉 `
        }
    } else {
        for (nstart;nstart >= nend;nstart-=npasso){
            res.innerText += `${nstart} 👉 `
        }
    }
    res.innerText += ' 🏁 '       
}