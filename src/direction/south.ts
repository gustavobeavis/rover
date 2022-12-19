import { Direction, West, East } from './';
import { Coordinate } from '../coordinate';

export class South implements Direction {
  /**
   *
   * @returns {Direction} East direction
   */
  left(): Direction {
    return new East();
  }

  /**
   *
   * @returns {Direction} West direction
   */
  right(): Direction {
    return new West();
  }

  /**
   *
   * @param {Coordinate} coordinate
   * @returns {Coordinate} new coordinate
   */
  move(coordinate: Coordinate): Coordinate {
    return {
      x: coordinate.x,
      y: coordinate.y - 1,
    };
  }

  /**
   *
   * @returns {string} "S"
   */
  toString() {
    return 'S';
  }
}
