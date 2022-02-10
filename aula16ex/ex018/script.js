var res = document.getElementById('res')
var list = []
var lista = document.getElementById('lista')
function add(){
    var num = Number(document.getElementById('num').value)
    res.innerHTML = ''
    if(numv(num) && listv(num)){
        list.push(num)
        let itemlist = document.createElement('option')
        itemlist.text = `Valor ${num} adicionado.`
        lista.appendChild(itemlist)

    } else{
        window.alert('Insira um valor válido')
    }
}

function numv(num){
    if(num >= 1 && num <= 100){
        return true
    } else{
        return false
    }
}

function listv(num){
    if(list.indexOf(num) == -1){
        return true
    } else{
        return false
    }
}

function fim(){
    let maior = list[0]
    let menor = list[0]
    let soma = 0
    if(list == 0){
        window.alert('Insira algum valor primeiro!')
    } else{
        for(let pos in list){
            soma += list[pos]
            if(list[pos] > maior){
                maior = list[pos]
            }
            if(list[pos] < menor){
                menor = list[pos]
            }
        }
        media = (soma/list.length).toFixed(2)
        res.innerHTML = `<p>Ao todo, temos ${list.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${Math.max.apply(Math,list)} </p>`
        res.innerHTML += `<p>O menor valor informado foi ${Math.min.apply(Math,list)} </p>`
        res.innerHTML += `<p>A soma dos valores informados é de ${soma} </p>`
        res.innerHTML += `<p>A média dos valores informados é de ${media}</p>`
    }   
}