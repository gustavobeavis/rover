import { Coordinate } from './coordinate';
import { Direction, East, North, South, West } from './direction';
import { Rover } from './rover';

/**
 *
 * @param {string[]} inputLines
 * @returns {object} {rovers: {rover: Rover, result: Coordinate}[], x: number, y: number}
 * @throws {Error} if inputLines is not valid
 * @throws {Error} if rover is out of the plateau
 */
export function parser(inputLines: string[]) {
  const directionMap = new Map([
    ['N', new North()],
    ['S', new South()],
    ['W', new West()],
    ['E', new East()],
  ]);
  const grid: string = inputLines[0]!.trim();
  const x: number = parseInt(grid.split(' ')[0]);
  const y: number = parseInt(grid.split(' ')[1]);

  const rovers = [];
  for (let index = 2; index <= inputLines.length; index = index + 2) {
    const roverPosition: string = inputLines[index - 1].trim();
    const roverDirection: Direction =
      directionMap.get(roverPosition.split(' ')[2]) || directionMap.get('N')!;
    const roverCoordinate: Coordinate = {
      x: parseInt(roverPosition.split(' ')[0]),
      y: parseInt(roverPosition.split(' ')[1]),
    };
    const roverCommands: string = inputLines[index].trim();

    const rover = new Rover(roverDirection, roverCoordinate);
    rovers.push({
      rover,
      result: rover.execute(roverCommands),
    });
  }

  return {
    rovers,
    x,
    y,
  };
}
