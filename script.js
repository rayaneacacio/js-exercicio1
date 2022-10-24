let number1 = Number(prompt('Digite o primeiro número:'))
let number2 = Number(prompt('Digite o segundo número:'))

alert(`A soma dos dois números é ${number1+number2}`)
alert(`A subtração dos dois números é ${number1-number2}`)
alert(`A multiplicação dos dois números é ${number1*number2}`)
alert(`A divisão dos dois números é ${number1/number2}`)
alert(`O resto da divisão dos dois números é ${number1%number2}`)

if((number1+number2)%2==0){
  alert('a soma dos dois números é par')
} else{
  alert('a soma dos dois números é ímpar')
}

if(number1==number2){
  alert('os números inseridos são iguais')
} else{
  alert('os números inseridos são diferentes')
}