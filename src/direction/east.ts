import { Direction, North, South } from './';
import { Coordinate } from '../coordinate';

/**
 * East direction
 */
export class East implements Direction {
  /**
   *
   * @returns {Direction} North direction
   */
  left(): Direction {
    return new North();
  }

  /**
   *
   * @returns {Direction} South direction
   */
  right(): Direction {
    return new South();
  }

  /**
   *
   * @param {Coordinate} coordinate
   * @returns {Coordinate} new coordinate
   */
  move(coordinate: Coordinate): Coordinate {
    return {
      x: coordinate.x + 1,
      y: coordinate.y,
    };
  }

  /**
   *
   * @returns {string} "E"
   */
  toString() {
    return 'E';
  }
}
