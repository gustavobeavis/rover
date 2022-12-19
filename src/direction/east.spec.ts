import { East } from './east';

describe('East', () => {
  describe('left()', () => {
    it('should turn left success', () => {
      const east = new East();
      const north = east.left();
      expect(north.toString()).toBe('N');
    });
  });

  describe('right()', () => {
    it('should turn right success', () => {
      const east = new East();
      const south = east.right();
      expect(south.toString()).toBe('S');
    });
  });

  describe('move()', () => {
    it('should move success', () => {
      const east = new East();
      const coordinate = east.move({ x: 1, y: 1 });
      expect(coordinate).toEqual({ x: 2, y: 1 });
    });
  });

  describe('toString()', () => {
    it('should return E success', () => {
      const east = new East();
      expect(east.toString()).toBe('E');
    });
  });
});
