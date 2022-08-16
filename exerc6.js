import {questionInt} from "readline-sync"
let numero = questionInt ('Digite um numero inteiro:')
console.log (numero)
console.log ("seu antecessor é:" + (numero - 1))
console.log ("seu sucessor é:" + (numero + 1))