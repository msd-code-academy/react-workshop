# TypeScript in React

## TypeScript

* Programming language developed by Microsoft
* Superset of JavaScript (compiles to JS) - [check the TS playground](http://www.typescriptlang.org/play/)

### Basic Types

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

#### Enum

Used to express that variable can have on of the predefined values.

```TypeScript
enum Color {
  Red,
  Green,
  Blue
}

const myColor: Color = Color.Green;
```

NOTE: Be careful with enum - the values will be changed to numbers in the runtime!

```TypeScript
const myColor: Color = Color.Green;
console.log(myColor); // prints out 0
```

#### Any

Magic type - by `any` we express that the variable can have any type - no constraints are applied.

#### Null, Undefined

These values have their own type in TypeScript.

#### Void

We use `void` to indicate that function doesn't return any type.

```TypeScript
function logMessage(message: string): void {
  console.log(message);
}
```

#### Never

`never` is a special type that indicates that the value 'never occurs'. For example here we say by `never` that function
never returns anything and that the end of the function is not reachable:

```TypeScript
function error(message: string): never {
    throw new Error(message);
}
```

### Non-Basic Types

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

#### Object

object is a type that represents any non-primitive type. It is not recommended to use, it's better to define shape of an
object using `type` or `interface` (see below) instead.

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

We can also achieve the same by using `interface` instead of `type`. Nowadays interfaces and types are very similar and there
are only small differences between them. In general, it is more frequent to use types in React.

```TypeScript
interface Beverage { //<= There is no '=' sign!
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

#### Typing Async Functions

`async` and `await` are just a syntax sugar over the Promises, that's why we can type the async function like this:

```TypeScript
type Data = {
  id: number;
  info: string;
};

const fetchData = async(query: string): Promise<Data[]> => { //<= Promise that will resolve to array of Data objects
  const result = await fetch(`https://api.domain.com/search?query=${query}`);
  const resultJSON = await result.json();
  return resultJSON.result || [];
}
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

Or we can even rely on TypeScript that it will infer the type and simply call:

```TypeScript
const result = doSomething('Hello');
```

Variable `result` will be a string in both cases.

We can define type of function with generics e.g. like this:

```TypeScript
type MyGenericFunction = <T>(arg: T) => T;
```

Generics can be utilized also in classes:

```TypeScript
class GenericClass<T> {
  private myValue: T;

  constructor (myValue: T) {
    this.myValue = myValue;
  }

  public getMyValue(): T {
    return this.myValue;
  };
}

const MyValue = new GenericClass<number>(4);
const result = MyValue.getMyValue();
// type of result is number
```

### Useful Utility Types

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

Some packages comes with the type definitions available out of the box, but for others we have to add them. For example,
`react` is not currently shipped with type definitions and we must add them manually from open source initiative [DefinitelyTyped](https://definitelytyped.org/)

```bash
npm install @types/react --save-dev
```

If you have issues that some package doesn't have types, try to install the types from DefinitelyTyped, usually they
are available there.

```bash
npm install @types/<package name> --save-dev
```

#### Functional Component

To type functional component, we can use the generic `React.FC` (or `React.FunctionComponent`) type from React:

```TypeScript
type MyProps = {
  //...
}

const MyComponent: React.FC<MyProps> = (props) => (
  // React will automatically add 'children' prop to MyProps type
);
```

See the [first exercise](./src/exercise-1/blog.jsx)

#### Class Component

Similarly we can add typing to a class component by extending the `React.Component<Props, State>` or `React.PureComponent<Props, State>`

```TypeScript
class FormattedContent extends React.Component<MyProps, MyState> {
  state: MyState = {
    // Default values for state
  }
  public render() {
    //...
  }
}
```

See the [second exercise](./src/exercise-2/jokes.jsx)

#### Typing Hooks

##### UseState

Type inference works very well for this hook - type is defined by type of the given (default) value:

```TypeScript
const [isOpen, setIsOpen] = React.useState(false);
// type of isOpen: boolean
// type of setIsOpen: (value: boolean) => void
```

If we want to initialize the state with `null` value, we can explicitly type it using generics:

```TypeScript
type Student = {
  id: number;
  name: string;
}

const [student, setStudent] = React.useState<Student | null>(null);
// type of student: Student | null
// type of setStudent: (value: Student | null) => void
```

##### UseEffect

Typing the `useEffect` is very easy, we should only take care not to return anything other than a function or undefined:

```TypeScript
React.useEffect(
  () => {
    const intervalID = setInterval(() => {
      console.log(new Date())
    }, 1000);
    return () => clearInterval(intervalID);
  },
  []
);
```

##### UseRef

```tsx
function TextInputWithFocusButton() {
  // initialize with null, but tell TypeScript we are looking for an HTMLInputElement
  const inputEl = React.useRef<HTMLInputElement>(null);

  const onButtonClick = () => {
    if (inputEl && inputEl.current) {
      inputEl.current.focus();
    }
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

##### UseContext

`useContext` can infer its types based on the context object that is passed in as an argument

[See the code](./src/use-context/use-context.tsx)

#### UseReducer

[See the code](./src/use-reducer/use-reducer.tsx)

### TypeScript = No Tests ?

Sometimes there are opinions that thanks to typescript we don't need to write (unit) tests anymore - that's not true.
We still need to test the logic of our code! We just don't have to test for example for unexpected variable type and
how to handle it (e.g. that we expect string in the code and get undefined, etc.)

## Linting

There are currently two main linters for TypeScript: `tslint` and `eslint`.

Even though the `tslint` is still supported and works, it is [about to be deprecated](https://github.com/palantir/tslint/issues/4534),
use `eslint` instead.

Palantir, `tslint` creator and maintainer decided to contribute to eslint open source initiative instead of managing
separate tslint package in order to have unified developer experience across JavaScript and TypeScript languages.

## Sources and Useful Links

[TS official documentation](http://www.typescriptlang.org/docs/home.html)
[TS and React cheatsheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet)
