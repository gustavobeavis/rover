'use strict';
import { parser } from './';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];

process.stdin.on('data', function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on('end', function (): void {
  inputLines = inputString.split('\n');
  if (inputLines[inputLines.length - 1] === '') {
    inputLines.pop();
  }
  inputString = '';

  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  main();
});

/**
 * Main function
 * @returns {void}
 */
export function main(): void {
  const { rovers } = parser(inputLines);

  rovers.forEach(rover => {
    console.log(rover.result);
  });
}
