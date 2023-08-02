let num1 = Number(prompt("Digite o primeiro número:"))
let num2 = Number(prompt("Digite o segundo número:"))

alert(`A soma dos números ${num1} + ${num2} é igual a: ${num1 + num2}`)
alert(`A subtração dos números ${num1} - ${num2} é igual a: ${num1 - num2}`)
alert(`A multiplicação dos números ${num1} x ${num2} é igual a: ${num1 * num2}`)
alert(`A divisão dos números ${num1} / ${num2} é igual a: ${num1 / num2}`)
alert(`O resto da divisão dos números ${num1} / ${num2} é igual a: ${num1 % num2}`)

if ((num1 + num2) % 2 == 0) {
    alert(`A soma dos números ${num1} + ${num2} é par (${num1 + num2}).`)
}
else {
    alert(`A soma dos números ${num1} + ${num2} é ímpar (${num1 + num2}).`)
}

if (num1 == num2) {
    alert("Os números inseridos são iguais.")
}
else {
    alert("Os números inseridos são diferentes.")
}