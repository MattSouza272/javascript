function contar(){
    var st = Number(document.getElementById('st').value)
    var fn = Number(document.getElementById('fn').value)
    var passo = Number(document.getElementById('passo').value)
    var msg = document.getElementById('msg')
    if(st < 0){
        msg.innerHTML = `Início inválido!<br> Início deve ser maior do que ${fn}`
    } else if(fn <= st){
        msg.innerHTML = `Final inválido!<br> Final deve ser maior do que ${st}`
    } else if(passo <= 0){
        msg.innerHTML = `Passo inválido!<br> Passo deve ser maior do que ${passo}`
    } else{
        msg. innerHTML = '<p>Contando...</p>'
        msg.innerHTML += ` ${st} `
        while(st < fn && (st+passo) < fn){
            st += passo
            msg.innerHTML += ` ${st} `
        }
    }
}
