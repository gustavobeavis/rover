[mars-rover](README.md) / Exports

# mars-rover

## Table of contents

### Classes

- [East](classes/East.md)
- [North](classes/North.md)
- [Rover](classes/Rover.md)
- [South](classes/South.md)
- [West](classes/West.md)

### Interfaces

- [Coordinate](interfaces/Coordinate.md)
- [Direction](interfaces/Direction.md)

### Functions

- [parser](modules.md#parser)

## Functions

### parser

▸ **parser**(`inputLines`): `Object`

**`Throws`**

if inputLines is not valid

**`Throws`**

if rover is out of the plateau

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputLines` | `string`[] |

#### Returns

`Object`

{rovers: {rover: Rover, result: Coordinate}[], x: number, y: number}

| Name | Type |
| :------ | :------ |
| `rovers` | { `result`: `string` ; `rover`: [`Rover`](classes/Rover.md)  }[] |
| `x` | `number` |
| `y` | `number` |
