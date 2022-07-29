const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Se o parâmetro da função handlerElephants for indefinido, a função retorna indefinido', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Se o parâmetro não for uma string, a função retorna "Parâmetro inválido, é necessário uma string"', () => {
    expect(handlerElephants(55)).toBe('Parâmetro inválido, é necessário uma string');
    expect(handlerElephants(['olá'])).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Se o parâmentro for uma string, deve retornar o que foi pedido', () => {
    expect(handlerElephants('count')).toBe(4);
    expect(handlerElephants('names')).toContain('Jefferson');
    expect(handlerElephants('averageAge')).toBe(10.5);
    expect(handlerElephants('teste')).toBeNull();
    expect(handlerElephants('id')).toBe('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
    expect(handlerElephants('name')).toBe('elephants');
    expect(handlerElephants('location')).toBe('NW');
  });
});
