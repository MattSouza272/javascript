function contar(){
    var st = Number(document.getElementById('st').value)
    var fn = Number(document.getElementById('fn').value)
    var passo = Number(document.getElementById('passo').value)
    var msg = document.getElementById('msg')
    if(st == 0 || fn == 0){
        msg.innerHTML = 'Dados inválidos'
    } else{
        msg. innerHTML = '<p>Contando...</p>'
        if(passo <= 0){
            window.alert('Passo Inválido! Considerando passo = 1')
            passo = 1
        }
        //contagem crescente
        if(st < fn){
            for(var c = st; c <= fn; c += passo){
                msg.innerHTML += `${c} \u{1F449}`
            }
        //contagem decrescente
        } else{
            for(var c = st; c >= fn; c -= passo){
                msg.innerHTML += `${c} \u{1F449}`
            }
        }
        msg.innerHTML += `\u{1f3c1}`
    }
}
