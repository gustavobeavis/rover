import { Direction, South, North } from './';
import { Coordinate } from '../coordinate';

export class West implements Direction {
  /**
   *
   * @returns {Direction} South direction
   */
  left(): Direction {
    return new South();
  }

  /**
   *
   * @returns {Direction} North direction
   */
  right(): Direction {
    return new North();
  }

  /**
   *
   * @param {Coordinate} coordinate
   * @returns {Coordinate} new coordinate
   */
  move(coordinate: Coordinate): Coordinate {
    return {
      x: coordinate.x - 1,
      y: coordinate.y,
    };
  }

  /**
   *
   * @returns {string} "W"
   */
  toString() {
    return 'W';
  }
}
