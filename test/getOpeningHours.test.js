const getOpeningHours = require('../src/getOpeningHours');
const { hours } = require('../data/zoo_data');

const open = 'The zoo is open';
const close = 'The zoo is closed';

describe('Testes da função getOpeningHours', () => {
  it('Testa se a função chama um erro se for passado uma string no parâmetro', () => {
    expect(() => getOpeningHours('olá')).toThrow();
    expect(() => getOpeningHours('Sunday', 'loucura')).toThrow('The hour should represent a number');
    expect(() => getOpeningHours('Sunday', '12:XX')).toThrow('The minutes should represent a number');
    expect(() => getOpeningHours('Sunday', '12:12-XX')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
    expect(() => getOpeningHours('Sunday', '35:12-AM')).toThrow('The hour must be between 0 and 12');
    expect(() => getOpeningHours('Sunday', '12:91-AM')).toThrow('The minutes must be between 0 and 59');
  });
  it('Testa se a função, quando não recebe parâmetros, retorna', () => {
    expect(getOpeningHours()).toBe(hours);
  });
  it('Testa se a função, quando recebe horários em que está aberto o zoológico, retorna que ele está aberto', () => {
    expect(getOpeningHours('Tuesday', '5:59-PM')).toBe(open);
    expect(getOpeningHours('Wednesday', '8:00-AM')).toBe(open);
    expect(getOpeningHours('Thursday', '10:00-AM')).toBe(open);
    expect(getOpeningHours('Friday', '7:59-PM')).toBe(open);
    expect(getOpeningHours('Saturday', '9:50-PM')).toBe(open);
    expect(getOpeningHours('Sunday', '8:00-AM')).toBe(open);
  });
  it('Testa se a função, quando recebe horários em que o zoo está fechado, retorna que ele tá fechado', () => {
    expect(getOpeningHours('Thursday', '9:59-AM')).toBe(close);
    expect(getOpeningHours('Friday', '9:01-PM')).toBe(close);
    expect(getOpeningHours('Saturday', '10:01-PM')).toBe(close);
    expect(getOpeningHours('Monday', '04:01-PM')).toBe(close);
    expect(getOpeningHours('Monday', '07:01-AM')).toBe(close);
  });
  it('Testa se a função fix12, está funcionando corretamente', () => {
    expect(getOpeningHours('Thursday', '12:00-AM')).toBe(close);
    expect(getOpeningHours('Friday', '12:00-PM')).toBe(open);
  });
});
