# Test Rover

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9270dfe6a051467dabab972a1bfdb2ab)](https://www.codacy.com/gh/gustavobeavis/rover/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=gustavobeavis/rover&amp;utm_campaign=Badge_Grade)

[![Codacy Badge](https://app.codacy.com/project/badge/Coverage/9270dfe6a051467dabab972a1bfdb2ab)](https://www.codacy.com/gh/gustavobeavis/rover/dashboard?utm_source=github.com&utm_medium=referral&utm_content=gustavobeavis/rover&utm_campaign=Badge_Coverage)

## Description

We are assessing a number of things, including the design aspect of
your solution, code hygiene, readability and code structure (how easy
it is for another programmer to grasp what your code does),
reliability and robustness (are errors properly handled?), but mostly
we are looking for good coding practices and your object oriented
programming skills. We'll also look for automated tests.

You may not use any external libraries to solve this problem, but you
may use external libraries or tools for building or testing purposes.
Specifically, you may use unit testing libraries or build tools
available for your chosen language (for example, JUnit). Please also
include a brief explanation of your design and assumptions along with
your code and commit your changes in a way that will help us
understand your design and coding decisions, as well as how you came
up with the final solution.

There must be a way to supply the application with the input data via
text file. The application must run. You should provide sufficient
evidence that your solution is complete by, as a minimum, indicating
that it works correctly against the supplied test data. Please note
that you will be assessed on your judgment as well as your execution.

### Problem

A squad of robotic rovers are to be landed by NASA on a plateau on
Mars. This plateau, which is curiously rectangular, must be navigated
by the rovers so that their on-board cameras can get a complete view
of the surrounding terrain to send back to Earth.

A rover's position and location is represented by a combination of x
and y co-ordinates and a letter representing one of the four cardinal
compass points. The plateau is divided up into a grid to simplify
navigation. An example position might be 0, 0, N, which means the
rover is in the bottom left corner and facing North.
In order to control a rover, NASA sends a simple string of letters.
The possible letters are 'L', 'R' and 'M'. 'L' and 'R' makes the
rover spin 90 degrees left or right respectively, without moving from

its current spot. 'M' means move forward one grid point, and maintain
the same heading.
Assume that the square directly North from (x, y) is (x, y+1).

### Input

The first line of input is the upper-right coordinates of the
plateau, the lower-left coordinates are assumed to be 0,0.
The rest of the input is information pertaining to the rovers that
have been deployed. Each rover has two lines of input. The first line
gives the rover's position, and the second line is a series of
instructions telling the rover how to explore the plateau.
The position is made up of two integers and a letter separated by
spaces, corresponding to the x and y co-ordinates and the rover's
orientation.

Each rover will be finished sequentially, which means that the second
rover won't start to move until the first one has finished moving.

### Output

The output for each rover should be its final co-ordinates and
heading.

#### Test Input

```txt
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
```

#### Expected Output

```txt
1 3 N
5 1 E
```

## Solution

To solve the problem, it was necessary to isolate the problem into three large blocks, the first being the commands, as it is the rover's movement module [ref](https://refactoring.guru/design-patterns/command). 

With the part of coordinates and directions resolved, the next step would be to encapsulate a rover, which contains the module of coordinates and directions. And finally, the parser module that translates the input content and converts it into rovers and rover execution by rover.

### Docs

you can see more  about the functions and strcutre at [mars-rover](./docs/modules.md)

## Run

### Step 1: Install

first of all, you need to install dependencies.

```sh
npm install
```
### Step 2: Build

The build from ts to js.

```sh
npm run build
```

The output files at `./dist`

### Step 3: Tests

The project is instrumented with Jest for the unit tests of the modules so that for each class/function, there is a test, and it is executed in the structure of TDD.

```sh
npm run test
```

The pattern is `*.spec.ts` near the file. eg: `foo.ts` has a test next `foo.spec.ts` 

### Step 4: Run

The project was thought to run as a CLI, so to initialize it, just run the command below.

```sh
npm start
```

After that, copy and paste the instructions, and after copying and pasting, or typing, just press `CTRL + D` to close the input blocks and run the project.

eg:  paste this text
```txt
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
```

after that
```sh
CTRL + D //in your terminal
```

if it's ok, after you do `CTRL + D`, you can see:

```sh
1 3 N
5 1 E
```