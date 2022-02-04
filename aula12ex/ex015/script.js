function check(){
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = Number(document.getElementById('nasc').value)
    var Sex = document.getElementsByName('sex')
    var msg = document.getElementById('msg')
    var res = document.getElementById('res')
    if(nasc == 0 || nasc > ano){
        window.alert('[ERRO] Verifique se os dados inseridos estão corretos! [ERRO]')
    } else {
        var idade = ano - nasc
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(Sex[0].checked){
            Sex = 'Homem'
            if(idade < 10){
                //criança
                img.setAttribute('src', 'foto-menino.png')
                document.body.style.background = '#d4cec2'
            } else if(idade < 25){
                //jovem
                img.setAttribute('src', 'homem-jovem.png')
                document.body.style.background = '#f7e2b5'
            } else if(idade < 60){
                //adulto
                img.setAttribute('src', 'homem-adulto.png')
                document.body.style.background = '#323a32'
            } else{
                //idoso
                img.setAttribute('src', 'homem-idoso.png')
                document.body.style.background = '#21151f'
            }
        } else{
            Sex = 'Mulher'
            if(idade < 10){
                //criança
                img.setAttribute('src', 'menina-bb.png')
                document.body.style.background = '#f8edbf'
            } else if(idade < 25){
                //jovem
                img.setAttribute('src', 'mulher-jovem.png')
                document.body.style.background = '#96acb7'
            } else if(idade < 60){
                //adulta
                img.setAttribute('src', 'mulher-adulta.png')
                document.body.style.background = '#71734c'
            } else{
                //idosa
                img.setAttribute('src', 'mulher-idosa.png')
                document.body.style.background = '#201919'
            }
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Você é ${Sex} e tem ${idade} anos.<br>`
    res.appendChild(img)
}