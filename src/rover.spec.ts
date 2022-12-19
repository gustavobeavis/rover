import { Rover } from './rover';
import { Direction, East, West } from './direction';
import { Coordinate } from './coordinate';

describe('Rover', () => {
  let direction: Direction;
  let coordinate: Coordinate;
  let rover: Rover;
  let east = new East();
  let west = new West();
  beforeEach(() => {
    direction = {
      left: jest.fn().mockImplementation(() => {
        return east;
      }),
      right: jest.fn().mockImplementation(() => {
        return west;
      }),
      move: jest.fn().mockImplementation((coordinate: Coordinate) => {
        return {
          x: coordinate.x,
          y: coordinate.y + 1,
        };
      }),
      toString: jest.fn().mockImplementation(() => {
        return 'W';
      }),
    };

    rover = new Rover(direction, coordinate);
  });

  describe('execute()', () => {
    it('should execute R success', () => {
      const result = rover.execute('R');
      expect(direction.right).toBeCalled();
      expect(result).toEqual('0 0 W');
    });

    it('should execute L success', () => {
      const result = rover.execute('L');
      expect(direction.left).toBeCalled();
      expect(result).toEqual('0 0 E');
    });

    it('should execute M success', () => {
      const result = rover.execute('M');
      expect(direction.move).toBeCalledWith({ x: 0, y: 0 });
      expect(result).toEqual('0 1 W');
    });

    it('should execute invalid command', () => {
      expect(() => rover.execute('X')).toThrowError('Unknown command X');
    });

    it('should execute multiple commands success', () => {
      const result = rover.execute('LMR');
      expect(result).toEqual('1 0 S');
    });
  });
});
