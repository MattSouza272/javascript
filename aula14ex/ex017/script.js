function tab(){
    var num = Number(document.getElementById('num').value)
    var msg = document.getElementById('msg')
    var tab = document.getElementById('tab')
    if(num == 0){
        msg.innerHTML = 'Favor inserir um número válido'
    } else{
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            tab.appendChild(item)
            c++
        }
    }
}