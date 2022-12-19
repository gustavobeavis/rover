[mars-rover](../README.md) / [Exports](../modules.md) / Rover

# Class: Rover

## Table of contents

### Constructors

- [constructor](Rover.md#constructor)

### Properties

- [commands](Rover.md#commands)
- [coordinate](Rover.md#coordinate)
- [direction](Rover.md#direction)

### Methods

- [execute](Rover.md#execute)
- [move](Rover.md#move)
- [turnLeft](Rover.md#turnleft)
- [turnRight](Rover.md#turnright)

## Constructors

### constructor

• **new Rover**(`direction`, `coordinate?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `direction` | [`Direction`](../interfaces/Direction.md) |
| `coordinate` | [`Coordinate`](../interfaces/Coordinate.md) |

## Properties

### commands

• `Private` `Readonly` **commands**: `Record`<`string`, () => `void`\>

___

### coordinate

• `Private` **coordinate**: [`Coordinate`](../interfaces/Coordinate.md)

___

### direction

• `Private` **direction**: [`Direction`](../interfaces/Direction.md)

## Methods

### execute

▸ **execute**(`commands`): `string`

Execute commands

**`Throws`**

Unknown command

**`Throws`**

Rover is out of the plateau

#### Parameters

| Name | Type |
| :------ | :------ |
| `commands` | `string` |

#### Returns

`string`

coordinate

___

### move

▸ `Private` **move**(): `void`

Move

#### Returns

`void`

___

### turnLeft

▸ `Private` **turnLeft**(): `void`

Turn left

#### Returns

`void`

___

### turnRight

▸ `Private` **turnRight**(): `void`

Turn Right

#### Returns

`void`
