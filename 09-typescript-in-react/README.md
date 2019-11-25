# TypeScript in React

## TypeScript

* Programming language developed by Microsoft
* Superset of JavaScript (compiles to JS)

### Primitive types

#### Boolean

```TypeScript
const isValid: boolean = true;
```

#### Number

There is no distinction between integers, floats, etc. - there is just `number`

```TypeScript
const count: number = 10;
```

#### String

```TypeScript
const text: string = 'TypeScript is awesome 🌈';
```

### Non-primitive Types

#### Object

object is a type that represents any non-primitive type. It is not recommended to use, it's better to define shape of an
object using `type` or `interface` (see below) instead.

#### Arrays

There are two ways to annotate list types while there is no real difference between them:

```TypeScript
const firstArray: number[] = [];
const secondArray: Array<number> = [];
```

There is also a way in TypeScript how you can define `tuple`:

```TypeScript
const position: [number, number] = [0, 10];
```

### Interfaces and Types

NOTE: Whenever we define our own type, it should start with a capital letter. For variable names, we use snake case => that way
we can easily see what is a variable and what is a type:

```TypeScript
type Beverage = {
  name: string;
  isSparkling: boolean;
};

const beverage: Beverage = {
  name: 'coke',
  isSparkling: true
};

drink(beverage);
```

### Unions and Intersections

One variable can sometimes be defined by combination of other types.

#### Type Union

We use union (`|`) to express that a variable is of type A "OR" a type B.

```TypeScript
type StringOrNumber = string | number;

// StringAndNumber is of the type 'string' or 'number'

const a: StringOrNumber = 7; // OK
const b: StringOrNumber = 'Hello'; // OK

```

For non-primitive types it means: **common properties that have different type can have both types**.

```TypeScript
type Person = {
  name: string;
  id: string; // <=
};

type Student = {
  name: string;
  id: number;  // <=
};

type StudentOrPerson = Student | Person;
// Result:
// {
//   name: string;
//   id: string | number;  // <=
// };
```

Unions are very frequent. On the other hand, intersection is in practice used rarely, but it's good to understand
the difference.

#### Type Intersection

We use intersection (`&`) to express that a variable is of a type A "AND" a type B.

For primitive types it doesn't make much sense to use.

```TypeScript
type StringAndNumber = string & number;

// StringAndNumber is of the type 'never'
```

For non-primitive types it means: **common properties are of the type that corresponding properties have in common**

```TypeScript
type Person = {
  name: string;
  id: string | number; // <=
};

type Student = {
  name: string;
  id: number;  // <=
};

type StudentOrPerson = Student | Person;
// Result:
// {
//   name: string;
//   id: number;  // <=
// };
```

### Nominal vs Structural type systems

TypeScript is a Structural type system - unlike Nominal systems, it cares only about structure of types. This code is
perfectly valid in TypeScript, but it would throw an error in Nominal type systems, like Java:

```TypeScript
class Person {
  name: string
}

class Customer {
  name string
}

Person someone = new Customer();
```

### Typing the Functions

Even though TypeScript is good at inferring the return type of our function, it is a best practice
to always state the return type explicitly:

```TypeScript
// Functional Expression
const repeat = (text: string, repeat: number): string => {
  //...
}

// Equivalent standard function
function repeat(text: string, repeat: number): string => {
  //...
}
```

Function that doesn't return anything should have the `void` or `never` return type. We can for instance type function
that takes a callback like this:

```TypeScript
function handleCallback(callBack: (e: Event) => void): void {
  //...
};
```

For readability, we can extract the callback type:

```TypeScript
type CallBack = (e: Event) => void;

function handleCallback(callBack: CallBack): void {
  //...
};
```

#### Optional Parameters

Use question mark to annotate optional parameters.

```TypeScript
function handleCallback(callBack?: CallBack): void {
  // callBack might be undefined here, we must handle that case otherwise TS will throw error:
  if (!callBack) {
    return;
  }
  //...
};
```

#### Default Parameters

It is possible to use default parameters in the function declaration. Using default parameters will make them optional:

```TypeScript
function sayMyName(name: string = 'Fantomas'): void {
  // ...
};
```

There is no need to use question marks for parameters with default values.

### Generics

Thanks to generics, it is possible to create functions and classes that works with a variety of types. For example instead
of having:

```TypeScript
function doSomethingWithString(str: string): string {
  return str;
}

function doSomethingWithNumber(num: number): number {
  return num;
}
```

we use generic type and define the `doSomething` method like this:

```TypeScript
function doSomething<T>(val: T): T {
  return val;
}
```

Then we can call the function either with type in brackets as parameter:

```TypeScript
const result = doSomething<string>('Hello');
```

Or we can even rely on TypeScript that it will infer the type from the type of parameter and simply call:

```TypeScript
const result = doSomething('Hello');
```

Variable `result` will be a string, because the argument we pass in is a string.

### Useful Utility types

Utility types are generic types that we can use out of the box and that transforms given type somehow.

#### Partial

```TypeScript
type Car = {
  color: string;
  maxSpeed: number;
};

type PartialCar = Partial<Car>;
// type PartialCar = {
//   color?: string;
//   maxSpeed?: number;
// };
```

#### Pick

```TypeScript
type Car = {
  color: string;
  maxSpeed: number;
};

type PickCar = Pick<Car, 'color'>;
// type PickCar = {
//   color: string;
// };
```

#### Omit

```TypeScript
type Car = {
  color: string;
  maxSpeed: number;
};

type OmitCar = Omit<Car, 'color'>;
// type OmitCar = {
//   maxSpeed: number;
// };
```

More utility types can be found [here](https://www.typescriptlang.org/docs/handbook/utility-types.html).


### Usage in React

To create a new React application with TypeScript it is as easy as executing:

```BASH
# Prerequisite: node version ^8.10.0 || ^10.13.0 || >=11.10.1
npx create-react-app app_name --typescript
```

#### Functional Component



#### Callbacks and Event Handlers

```TypeScript
  (event: React.FormEvent<HTMLInputElement>, newValue: string, prevValue: string, name: string) => void
```

### TypeScript != No Tests

Sometimes there is an argument that thanks to typescript you don't need to write (unit) tests anymore - that's not true.
You still need to test the logic of your code! You just don't have to test for example for unexpected variable type and
how to handle it (e.g. that you expect string in the code and get undefined, etc.)

## Linting

There are currently two main linters for TypeScript: `tslint` and `eslint`.

Even though the `tslint` is still supported, it is [about to be deprecated](https://github.com/palantir/tslint/issues/4534), use `eslint` instead.

Palantir, `tslint` creator and maintainer decided to contribute to eslint open source initiative instead of managing separate tslint package in order to have unified developer experience across JavaScript and TypeScript languages.

## Useful Links
