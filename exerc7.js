import {questionInt} from "readline-sync"
let hora = questionInt ('Digite o quanto voce ganha por hora:')
let mes = questionInt ('Digite o numero de horas trabalhadas no mes:')
let SB = hora*mes
let INSS = 8/100
let sindicato = 5/100
let imposto = 11/100
console.log ("seu salario bruto e:" + SB)
console.log ("quantidade paga ao INSS:" +  SB*INSS)
console.log ("quantidade paga ao sindicato:" +  SB*sindicato)
console.log ("quantidade paga ao imposto de renda:" +  SB*imposto)
console.log ("seu salario liquido e:" +  SB * 0.24)