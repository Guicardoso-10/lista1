import {questionInt} from "readline-sync"
let hora = questionInt('numero de horas trabalhadas no mes:')
let receita = questionInt ('quantidade paga por hora:')
console.log ("resultado: R$"+ hora*receita)