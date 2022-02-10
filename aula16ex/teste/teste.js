var joia = 'ouro'
var joias = ['ouro', 'diamante', 'prata']
if(joias.indexOf(joia) == -1){
        joias.push(joia)
        console.log('Nova joia adicionada: ' + joia)
    } else if(joias.indexOf(joia) != -1){
        console.log(joia + ' já existe na coleção de joias')
    }
    console.log('A coleção tem atualmente as seguintes joias: ' + joias)