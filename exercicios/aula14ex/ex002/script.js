function clicou(){
    var numb = document.getElementById('inum')
    var resp = document.getElementById('itxt')
    if (numb.value == '') {
        window.alert('[Erro] Digite um número para obter a tabuada')
    } else {
        var n = Number(numb.value)
        var c = 1
        var s = 0
        while (c<=10) {
            var item = document.createElement('option') // cria o elemento option
            item.text = `${n} x ${c} = ${n*c}` // o q vai ficar escrito dentro do option
            resp.appendChild(item) // adiciona o elemento filho (item) dentro da resp (select no HTML)
            c++
        }
    }
}