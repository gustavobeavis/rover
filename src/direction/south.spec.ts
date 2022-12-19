import { South } from './south';

describe('South', () => {
  describe('left()', () => {
    it('should turn left success', () => {
      const south = new South();
      const east = south.left();
      expect(east.toString()).toBe('E');
    });
  });

  describe('right()', () => {
    it('should turn right success', () => {
      const south = new South();
      const west = south.right();
      expect(west.toString()).toBe('W');
    });
  });

  describe('move()', () => {
    it('should move success', () => {
      const south = new South();
      const coordinate = south.move({ x: 1, y: 1 });
      expect(coordinate).toEqual({ x: 1, y: 0 });
    });
  });

  describe('toString()', () => {
    it('should return S success', () => {
      const south = new South();
      expect(south.toString()).toBe('S');
    });
  });
});
