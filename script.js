function limpar(){
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
}


function soma(){
    var numero1 = parseFloat(document.getElementById('num1').value);
    var numero2 = parseFloat(document.getElementById('num2').value);

    document.getElementById('Resultado').value = (numero1 + numero2);
    addParagraph(numero1, numero2, "+");
    limpar();
}

function subtracao(){
    var numero1 = parseFloat(document.getElementById('num1').value);
    var numero2 = parseFloat(document.getElementById('num2').value);

    document.getElementById('Resultado').value = (numero1 - numero2);
    addParagraph(numero1, numero2, "-");
    limpar();
}

function divisao(){
    var numero1 = parseFloat(document.getElementById('num1').value);
    var numero2 = parseFloat(document.getElementById('num2').value);

    document.getElementById('Resultado').value = (numero1 / numero2);
    addParagraph(numero1, numero2, "/");
    limpar();
}

function multiplicacao(){
    var numero1 = parseFloat(document.getElementById('num1').value);
    var numero2 = parseFloat(document.getElementById('num2').value);

    document.getElementById('Resultado').value = (numero1 * numero2);
    addParagraph(numero1, numero2, "*");
    limpar();
}

function addParagraph(numero1, numero2, operacao)
{
    var result = parseFloat(document.getElementById('Resultado').value);
    var p2 = "<p>" + numero1 + operacao + numero2 + " = " + result + "</p>";
    document.getElementById('p1').insertAdjacentHTML('afterend', p2);
}