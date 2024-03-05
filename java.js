// carteira de motorista

// Entrada de idade
var idade = prompt("Digite sua idade:");

// Verificação se está apto para tirar a carteira de motorista
if (!isNaN(idade)) {
    idade = parseInt(idade);

    if (idade >= 18) {
        alert("Você está apto a tirar sua carteira de motorista!");
    } else {
        alert("Você ainda não está apto para tirar sua carteira de motorista.");
    }
} else {
    alert("Por favor, digite uma idade válida.");
}
