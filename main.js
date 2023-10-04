const input1 = document.querySelector('#firstNo');
const input2 = document.querySelector('#secondNo');
let lastInput = input1;
let lastInput2 = input2;

function atualizarInput(valor) {
    if (lastInput === input1 && !['+', '-', 'x', '°/°'].includes(valor)) {
        input1.value += valor;
    } else if (lastInput === input2 && !['+', '-', 'x', '°/°'].includes(valor)) {
        input2.value += valor;
    }
}

input1.addEventListener('focus', () => {
    lastInput = input1;
    input1.selectionStart = input1.selectionEnd = input1.value.length;
});

input2.addEventListener('focus', () => {
    lastInput = input2;
    input2.selectionStart = input2.selectionEnd = input2.value.length;
});

//troquei o nome da sua função
function somar() {
    const resultado = new Calculadora(input1.value, input2.value);
    document.querySelector("#resultado").value = "O resultado é: " + resultado.somar();
}
//troquei de variavel para constante, e faltou adicionarmos o addEventListener
const operacaoSoma = document.querySelector("#add");
operacaoSoma.addEventListener('click', somar);

function subtracao() {
    const resultado = new Calculadora(input1.value, input2.value);
    document.querySelector("#resultado").value = "O resultado é: " + resultado.subtracao();
}
//faltou adicionarmos o addEventListener
const operacaoSubtracao = document.querySelector("#subtract");
operacaoSubtracao.addEventListener('click', subtracao);

function multiplicacao() {
    const resultado = new Calculadora(input1.value, input2.value);
    document.querySelector('#resultado').value = "O resultado é " + resultado.multiplicacao();
}
//faltou adicionarmos o addEventListener
const operacaoMultiplicacao = document.querySelector('#multiply');
operacaoMultiplicacao.addEventListener('click', multiplicacao);

function dividir() {
    const resultado = new Calculadora(input1.value, input2.value);
    document.querySelector('#resultado').value = "O resultado é " + resultado.divisao();
}
//faltou adicionarmos o addEventListener
const operacaoDivisao = document.querySelector('#divide');
operacaoDivisao.addEventListener('click', dividir);

function limpar() {
    input1.value = "";
    input2.value = "";
    document.querySelector("#firstNo").value = "";
    document.querySelector("#secondNo").value = "";
    document.querySelector("#resultado").value = "";
}

const buttonLimpar = document.querySelector("#limparDisplay");
buttonLimpar.addEventListener('click', limpar);

const buttonsNumericosEOperacoes = document.querySelectorAll('.keys');
//função atualizada
buttonsNumericosEOperacoes.forEach((button)=>{
    button.addEventListener("click", () => {
        if(button.textContent === "AC"){
            limpar()
        }
        else{
            atualizarInput(button.textContent)
        }
    })
})