const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array. 
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBe(true);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Alcool gel', 'Máscara')).toHaveLength(2);
    expect(productDetails('Alcool gel', 'Máscara')).not.toHaveLength(3);
    expect(productDetails('Alcool gel', 'Máscara')).not.toHaveLength(0);   
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    let resultado = productDetails('Alcool gel', 'Máscara');
    expect(typeof resultado[0]).toBe('object');
    expect(typeof resultado[1]).toBe('object');
    expect(typeof resultado[0]).not.toBe('boolean'); 
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    let resultado2 = productDetails('Alcool gel', 'Máscara');
    expect(resultado2[0]) .not.toBe(resultado2[1]);
    // Teste se os dois productIds terminam com 123.
    let resultado3 = productDetails('Alcool gel', 'Máscara');
    expect(resultado3[0].details.productId) .toBe(`Alcool gel123`);
    expect(resultado3[1].details.productId) .toBe(`Máscara123`);
    expect(resultado3[1].details.productId) .not.toBe(`Máscara`); 

  });
});
