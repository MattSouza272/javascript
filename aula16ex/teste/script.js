let list = document.getElementById('list')
let res = document.getElementById('res')
let joias = ['ouro', 'prata','diamante']

function add(){
    var joia = document.getElementById('joia').value
    if(joias.indexOf(joia) == -1){
        window.alert(`Joia adicionada!`)
        joias.push(joia)
        window.alert(`Existem as seguintes joias: ${joias}`)
    } else if(joias.indexOf(joia) != -1){
        window.alert('Inválido')
        window.alert(`Existem as seguintes joias: ${joias}`)
    }
}
