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

  /**
   * Execute commands
   * @param {string} commands
   * @returns {string} coordinate
   * @throws {Error} Unknown command
   */
  execute(commands: string): string {
    commands.split('').forEach(command => {
      const exec = this.commands[command];
      if (exec === undefined) {
        throw new Error(`Unknown command ${command}`);
      }

      exec();
    });

    if(this.coordinate.x < 0 || this.coordinate.y < 0) {
      throw new Error('Rover is out of the plateau');
    }

    return `${this.coordinate.x} ${
      this.coordinate.y
    } ${this.direction.toString()}`;
  }
}
