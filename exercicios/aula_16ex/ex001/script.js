let numb = document.getElementById('inum')
let resp = document.getElementById('itxt')
let valores = []

function adicionar(){
    let n = Number(numb.value)
    if (n < 1 || n > 100){
        //Verifica de o número está dentro do estabelecido
        window.alert('Por favor, digite um valor válido')
    } else if (valores.includes(n)){
        // Verifica se o número já está no array
        window.alert('Valor já adicionado, por favor escolha outro número')
    } else if (n == 0){
        // Verifica de um valor foi selecionado
        window.alert('Por favor, digite um valor válido')
    } else {
        let n = Number(numb.value)
        let texto = document.createElement('option')
        texto.innerText = `Valor ${n} adicionado`
        resp.appendChild(texto)
        valores.push(n)
    }
}

function resultado(){
    if (resp.options.length === 0) { //Confere se o select está vazio
        window.alert('Nenhum valor foi adicionado')
    } else {
        alert(valores)
    }
}

/* OUTRAS OPÇÕES PARA CONFERIR O SELECT
=> Verificar se todas as opções estão desabilitadas:

    let hasEnabledOptions = Array.from(resp.options).some(opt => !opt.disabled)
    if (!hasEnabledOptions) { //Confere se o select está vazio
        window.alert('Nenhum valor foi adicionado')
    } else {
        alert(valores)
    }

=> Verificar se todas as opções são apenas espaços em branco

    let isEmpty = Array.from(resp.options).every(opt => opt.text.trim() === "") // Converte as opções do select para um array e verifica se todas são vazias
    if (isEmpty) {
        window.alert('Nenhum valor foi adicionado')
    } else {
        alert(valores)
    }
*/