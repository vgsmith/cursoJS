var nums = []
var txtres = document.getElementById('res')

function adicionar(){
    txtres.innerHTML = ''
    let txtnum = document.getElementById('txtnum')
    let num = Number(txtnum.value)
    let optnum = document.getElementById('txtcheck')
    
    if (txtnum.value.length == 0 || txtnum.value < 1 || txtnum.value > 100) {
        window.alert('[Erro] Digitar número válido.')
    } else if (nums.includes(num)) {
        window.alert(`[Erro] Número ${num} já existe.`)
    } else {
        nums.push(num)
        //optnum.innerHTML += `<option>Valor ${num} adicionado.</option> <br>`
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        optnum.appendChild(item)
    }
    txtnum.value = ''
    txtnum.focus()
}

function analisar(){
    if (nums.length == 0) {
        window.alert('[Erro] Adicione valores antes de Finalizar.')
    } else {
        let sorted  = nums.sort((a, b) => a - b)
        txtres.innerHTML = `Ao todo, temos ${nums.length} numeros cadastrados.<br>`
        txtres.innerHTML += `<br>O maior valor informado foi ${sorted[nums.length-1]}.<br>`
        txtres.innerHTML += `<br>O menor valor informado foi ${sorted[0]}.<br>`
        txtres.innerHTML += `<br>Somando todos os valores temos ${somar(nums)}.<br>`
        txtres.innerHTML += `<br>A média dos valores digitados é ${somar(nums)/nums.length}.<br>`
    }

}

  function somar(nums){
    let i = 0
    let soma = 0

    for(i;i<nums.length;i++){
        soma += nums[i]
    }
    return soma
  }

txtnum.addEventListener('keyup', function(e){
    var key = e.which || e.keyCode;
    if (key == 13) {
      adicionar()
    }
})
