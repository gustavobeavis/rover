import { West } from './west';

describe('West', () => {
  describe('left()', () => {
    it('should turn left success', () => {
      const west = new West();
      const south = west.left();
      expect(south.toString()).toBe('S');
    });
  });

  describe('right()', () => {
    it('should turn right success', () => {
      const west = new West();
      const north = west.right();
      expect(north.toString()).toBe('N');
    });
  });

  describe('move()', () => {
    it('should move success', () => {
      const west = new West();
      const coordinate = west.move({ x: 1, y: 1 });
      expect(coordinate).toEqual({ x: 0, y: 1 });
    });
  });

  describe('toString()', () => {
    it('should return W success', () => {
      const west = new West();
      expect(west.toString()).toBe('W');
    });
  });
});
