// var nome = window.prompt('Qual é o seu nome')

alert('SEJA BEM-VINDO, MBORA SOMAR MENINOS') 


//var n1 = Number.parseInt (window.prompt('Digite o primeiro número')) 
//var n2 = Number.parseInt (window.prompt('Digite o primeiro número'))
//var s = n1+n2  
//window.alert('O resultado da soma é ' + s) 

let n1 = prompt("Digite o primeiro numero : ")

let n2 = prompt("Digite o segundo numero : ")





let operacao = prompt("Digita operaçao :")

switch (operacao){
        case '+':
        alert(parseFloat(n1) + parseFloat(n2));
        break;

        case '-':
        alert(parseFloat(n1) - parseFloat(n2));
        break;

        case '*':
        alert(parseFloat(n1) * parseFloat(n2));
        break;

        case '/':
        alert(parseFloat(n1) / parseFloat(n2));
        break;

        default:
            alert("OPERAÇAO INCORRETA")
}