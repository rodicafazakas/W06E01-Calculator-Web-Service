let n1 = process.argv.slice(2)[0];
let n2 = process.argv.slice(2)[1];
console.log(n1);

const Sumar = (n1,n2) => parseInt(n1) + parseInt(n2);
const Restar = (n1,n2) => parseInt(n1) - parseInt(n2);
const Multiplicar = (n1,n2) => parseInt(n1) * parseInt(n2);
const Dividir = (n1,n2) => parseInt(n1) / parseInt(n2);

console.log(
`Resultados:
Sumar: ${Sumar(n1,n2)}
Restar: ${Restar(n1,n2)}
Multiplicar: ${Multiplicar(n1,n2)}
Dividir: ${Dividir(n1,n2)} 
`)



