const form = document.getElementById('form-atividade');
const nomes = [];
const telefones = [];


let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');

    if (nomes.includes(inputNome.value)) {

        alert(`O contato: ${inputNome.value} já foi cadastrado`)

    }else if (telefones.includes(inputTelefone.value)) {

        alert(`O número: ${inputTelefone.value} já foi cadastrado`)

    }else if(!validarNumeroCelular(inputTelefone.value)){
        alert(`O número: ${inputTelefone.value} é Inválido`)
    }
    else {

        nomes.push(inputNome.value)
        telefones.push(inputTelefone.value)

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${formatarNumeroTelefone(inputTelefone.value)}</td>`;
        linha += '</tr>'

        linhas += linha

    }
    inputNome.value = ''
    inputTelefone.value = ''
}
function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas

}

function validarNumeroCelular(numero) {
    let numeroSeparado = numero.split('')
    console.log(numeroSeparado.length)
  
    // Verifica se o número atende ao padrão
    if (numeroSeparado.length == 11) {
      console.log("Número de celular válido!");
      return true;
    } else {
      console.log("Número de celular inválido!");
      return false;
    }
  }

  function formatarNumeroTelefone(numero) {
    // Remove todos os caracteres não numéricos
    var numeroLimpo = numero.replace(/\D/g, '');
  
    // Aplica o formato desejado
    var formato = /^(\d{2})(\d{5})(\d{4})$/;
    var numeroFormatado = numeroLimpo.replace(formato, '($1) $2-$3');
  
    return numeroFormatado;
  }