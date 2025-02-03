let numb = document.getElementById('inum')
let resp = document.getElementById('itxt')
let end = document.getElementById('finish')
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
    end.innerHTML = '' // Limpa o resultado
    numb.value = '' //Limpa o input
    numb.focus() //Mantem o cursor no campo
    // Melhora a experiência do usuário
}

function resultado(){
    if (resp.options.length === 0) { //Confere se o select está vazio
        window.alert('Nenhum valor foi adicionado')
    } else {
        let maior = Math.max(...valores) // Operador spread (...) para espalhar os valores do array e encontrar o maior número.
        let menor = Math.min(...valores)
        let soma = valores.reduce((acc, num) => acc + num, 0);
        /*
            .reduce (Método do array para somar todos os valores. Percorre todos os elementos do array e reduz os valores a um único resultado, aplicando uma função a cada elemento.)
            acc => nome do acumulador
            num => elemento atual do array sendo processado
            faz acc + num; o valor inicial de acc é 0 (acc + num, 0)
        */
        let media = soma / valores.length;

        let result = document.createElement('p')
            result.innerHTML = `
            Ao todo temos ${valores.length} números cadastrados. <br>
            O maior número registrado foi ${maior}. <br>
            O menor número registrado foi ${menor}. <br>
            A soma dos valores é ${soma}.<br>
            A média dos valores é ${media.toFixed(2)}.
            ` // .toFixed(2) => para ter somente duas casas depois da vírgula
            end.appendChild(result)
    }
}

/* OUTRAS OPÇÕES PARA CONFERIR O SELECT
=> Verificar se todas as opções estão desabilitadas:

    let hasEnabledOptions = Array.from(resp.options).some(opt => !opt.disabled)
    if (!hasEnabledOptions) { //Confere se o select está vazio
        window.alert('Nenhum valor foi adicionado')
    }

=> Verificar se todas as opções são apenas espaços em branco

    let isEmpty = Array.from(resp.options).every(opt => opt.text.trim() === "") // Converte as opções do select para um array e verifica se todas são vazias
    if (isEmpty) {
        window.alert('Nenhum valor foi adicionado')
    }
*/