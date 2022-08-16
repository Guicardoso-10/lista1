import {questionInt} from "readline-sync"
let fahren = questionInt ('digite a temperatura em graus Fahrenheit:')
console.log (fahren)
console.log ("temperatura em graus Celcius é:" + ((fahren - 32)*5)/9)