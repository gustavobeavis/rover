import { Coordinate } from './coordinate';
import { Direction } from './direction';

export class Rover {
  private direction: Direction;
  private coordinate: Coordinate;
  private readonly commands: Record<string, () => void> = {
    R: () => this.turnRight(),
    L: () => this.turnLeft(),
    M: () => this.move(),
  };

  constructor(direction: Direction, coordinate: Coordinate = { x: 0, y: 0 }) {
    this.direction = direction;
    this.coordinate = coordinate;
  }

  /**
   * Turn left
   * @returns {void}
   */
  private turnLeft() {
    this.direction = this.direction.left();
  }

  /**
   * Turn Right
   * @returns {void}
   */
  private turnRight() {
    this.direction = this.direction.right();
  }

  /**
   * Move
   * @returns {void}
   **/
  private move() {
    this.coordinate = this.direction.move(this.coordinate);
  }
}
