function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.<br>`
    if(hora >= 6 && hora < 12){
        msg.innerHTML += 'Bom dia!'
        img.src = 'foto-manha.png'
        document.body.style.background = '#f1da97'
    } else if (hora >= 12 && hora < 18){
        msg.innerHTML += 'Boa tarde!'
        img.src = 'foto-tarde.png'
        document.body.style.background = '#fd9001'
    } else {
        msg.innerHTML += 'Boa noite!'
        img.src = 'foto-noite.png'
        document.body.style.background = '#0149b9'
    }
}

