const chalk = require("chalk");
const {Sumar, Restar, Multiplicar, Dividir} = require("./operations.js");

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