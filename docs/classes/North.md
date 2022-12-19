[mars-rover](../README.md) / [Exports](../modules.md) / North

# Class: North

## Implements

- [`Direction`](../interfaces/Direction.md)

## Table of contents

### Constructors

- [constructor](North.md#constructor)

### Methods

- [left](North.md#left)
- [move](North.md#move)
- [right](North.md#right)
- [toString](North.md#tostring)

## Constructors

### constructor

• **new North**()

## Methods

### left

▸ **left**(): [`Direction`](../interfaces/Direction.md)

#### Returns

[`Direction`](../interfaces/Direction.md)

West direction

#### Implementation of

Direction.left

___

### move

▸ **move**(`coordinate`): [`Coordinate`](../interfaces/Coordinate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinate` | [`Coordinate`](../interfaces/Coordinate.md) |

#### Returns

[`Coordinate`](../interfaces/Coordinate.md)

new coordinate

#### Implementation of

Direction.move

___

### right

▸ **right**(): [`Direction`](../interfaces/Direction.md)

#### Returns

[`Direction`](../interfaces/Direction.md)

East direction

#### Implementation of

Direction.right

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

"N"

#### Implementation of

Direction.toString
