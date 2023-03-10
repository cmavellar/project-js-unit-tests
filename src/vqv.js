/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

const vqv = (param1, param2) => {
  if ((typeof param1 === 'string') && (typeof param2 === 'number')) { 
    return `Oi, meu nome é ${param1}!
Tenho ${param2} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
  }         
  return undefined;
};

module.exports = vqv;

// Referência de apoio: <https://www.w3schools.com/js/js_string_templates.asp>