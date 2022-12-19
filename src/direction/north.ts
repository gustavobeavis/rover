import { Direction, West, East } from './';
import { Coordinate } from '../coordinate';

export class North implements Direction {
  /**
   *
   * @returns {Direction} West direction
   */
  left(): Direction {
    return new West();
  }

  /**
   *
   * @returns {Direction} East direction
   */
  right(): Direction {
    return new East();
  }

  /**
   *
   * @param {Coordinate} coordinate
   * @returns {Coordinate} new coordinate
   */
  move(coordinate: Coordinate): Coordinate {
    return {
      x: coordinate.x,
      y: coordinate.y + 1,
    };
  }

  /**
   *
   * @returns {string} "N"
   */
  toString() {
    return 'N';
  }
}
