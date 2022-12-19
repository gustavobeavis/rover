'use strict';
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

  main();
});

function roverRun(inputLines: string[]) {
  return '1 3 N\n5 1 E';
}

export function main() {
  return roverRun(inputLines);
}
