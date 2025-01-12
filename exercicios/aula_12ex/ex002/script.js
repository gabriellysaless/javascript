function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('iano')
    var resp = document.getElementById('res')
    if (nasc.value == 0 || nasc.value > ano){
        window.alert('[Erro] Verifique os dados e tente novamente!')
    } else{
        window.alert('ok')
    }
}