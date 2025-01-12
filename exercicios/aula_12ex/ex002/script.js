function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('iano')
    var resp = document.getElementById('res')
    if (nasc.value == 0 || nasc.value > ano){
        window.alert('[Erro] Verifique os dados e tente novamente!')
    } else{
        var sexo = document.getElementsByName('sex')
        var idade = ano - Number(nasc.value)
        var genero = ''
        var img = document.createElement('img') // Para criar um novo elemento no documento
        img.setAttribute('id', 'foto') // Para criar um novo atributo, primeiro o atributo depois o nome
        if (sexo[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'img/bebem.png')
            }
            else if (idade <= 20) {
                // Jovem
                img.setAttribute('src', 'img/jovemm.png')
            }
            else if (idade < 60) {
                // Adulto 
                img.setAttribute('src', 'img/adultom.png')
            }
            else {
                //Idoso
                img.setAttribute('src', 'img/idosom.png')
            }
            resp.style.textAlign = 'center'
            resp.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            resp.appendChild(img) // Acrescenta outro elemento a variável 
        } else if (sexo[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'img/bebef.png')
            }
            else if (idade <= 20) {
                // Jovem
                img.setAttribute('src', 'img/jovemf.png')
            }
            else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'img/adultof.png')
            }
            else {
                // Idoso
                img.setAttribute('src', 'img/idosof.png')
            }
            resp.style.textAlign = 'center'
            resp.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            resp.appendChild(img) // Acrescenta outro elemento a variável 
        } else {
            window.alert('[Erro] Verifique os dados e tente novamente!')
        }
    }
}