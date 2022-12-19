import { parser } from './parser';

describe('parser()', () => {
  it('should return 1 3 N from 1 2 N\nLMLMLMLMM imput', () => {
    const inputs = '5 5\n1 2 N\nLMLMLMLMM';
    const inputLines = inputs.split('\n');

    const { rovers } = parser(inputLines);
    const result = rovers.map((el: any) => el.result);
    expect(result).toEqual(['1 3 N']);
  });

  it('should return 5 1 E from 3 3 E\nMMRMMRMRRM imput', () => {
    const inputs = '5 5\n3 3 E\nMMRMMRMRRM';
    const inputLines = inputs.split('\n');

    const { rovers } = parser(inputLines);
    const result = rovers.map((el: any) => el.result);
    expect(result).toEqual(['5 1 E']);
  });

  it('should return 1 3 N\n5 1 E from 3 3 E\nMMRMMRMRRM imput', () => {
    const inputs = '5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM';
    const inputLines = inputs.split('\n');

    const { rovers } = parser(inputLines);
    const result = rovers.map((el: any) => el.result);
    expect(result).toEqual(['1 3 N', '5 1 E']);
  });

  it('should return 1 3 N\n5 1 E from 3 3 E\nMMRMMRMRRM imput', () => {
    const inputs = '1 1\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM';
    const inputLines = inputs.split('\n');

    const { rovers } = parser(inputLines);
    const result = rovers.map((el: any) => el.result);
    expect(result).toEqual(['1 3 N', '5 1 E']);
  });
});
