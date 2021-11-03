const {Sumar, Restar, Multiplicar, Dividir} = require("./Operations.js");

// const chalk = require("chalk");
// const prompt = require('prompt');

// let myNumbers = process.argv.slice(2); 
// let n1 = process.argv.slice(2)[0];
// let n2 = process.argv.slice(2)[1];

// if (myNumbers.length === 0) {
//   prompt.start();
//   prompt.get(['n1', 'n2']).then( ({n1 , n2}) => {
//     console.log(chalk.cyan(
//       `Resultados:
//       Numeros: ${n1}, ${n2}
//       Sumar: ${Sumar(n1,n2)}
//       Restar: ${Restar(n1,n2)}
//       Multiplicar: ${Multiplicar(n1,n2)}
//       Dividir: ${Dividir(n1,n2)} 
//       `)
//     )}
//   )  
// } else if (myNumbers.length < 2) {
//   console.log(chalk.blue("Tienes que introducir 2 numeros"));
// } else {
// console.log(chalk.yellow(
//     `Resultados:
//     Sumar: ${Sumar(n1,n2)}
//     Restar: ${Restar(n1,n2)}
//     Multiplicar: ${Multiplicar(n1,n2)}
//     Dividir: ${Dividir(n1,n2)} 
//     `)
//   )
// };


const calculator = (n1,n2) => {
  
  const resultHTML = `
  <h2> Results </h2>
  <div>
   <p> ${n1} + ${n2} = ${Sumar(n1,n2)} </p>
   <p> ${n1} - ${n2} = ${Restar(n1,n2)} </p>
   <p> ${n1} * ${n2} = ${Multiplicar(n1,n2)} </p>
   <p> ${n1} / ${n2} = ${Dividir(n1,n2)} </p>
  </div>
  `;

  return resultHTML;
}

module.exports = calculator;