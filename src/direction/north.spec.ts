import { North } from './north';

describe('North', () => {
  describe('left()', () => {
    it('should turn left success', () => {
      const north = new North();
      const west = north.left();
      expect(west.toString()).toBe('W');
    });
  });

  describe('right()', () => {
    it('should turn right success', () => {
      const north = new North();
      const east = north.right();
      expect(east.toString()).toBe('E');
    });
  });

  describe('move()', () => {
    it('should move success', () => {
      const north = new North();
      const coordinate = north.move({ x: 1, y: 1 });
      expect(coordinate).toEqual({ x: 1, y: 2 });
    });
  });

  describe('toString()', () => {
    it('should return N success', () => {
      const north = new North();
      expect(north.toString()).toBe('N');
    });
  });
});
