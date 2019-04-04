# React Component Testing

This we will focus on testing React components by react-testing-library. In this session we will focus on unit and integration testing.

## Introduction

**End to End:** A helper robot that behaves like a user to click around the app and verify that it functions correctly. Sometimes called "functional testing" or e2e.
Typically these will run the entire application (both frontend and backend) and your test will interact with the app just like a typical user would. These tests are written with cypress.

**Integration:** Verify that several units work together in harmony.
The test below renders the full app. This is NOT a requirement of integration tests and most of my integration tests don't render the full app. They will however render with all the providers used in my app (that's what the render method from the imaginary "til-client-test-utils" module does). The idea behind integration tests is to mock as little as possible.

**Unit:** Verify that individual, isolated parts work as expected.

**Static:** Catch typos and type errors as you write the code.

## Tools
- Jest
- React-testing-library
- Sinon
- Chai.js

## React-testing-library

https://testing-library.com/docs/intro

### Render

Render into a container which is appended to document.body.

```
const { getByText, getByTestId } = render(<Fetch url={url} />)
```

> The cleanup function should be called between tests to remove the created DOM nodes and keep the tests isolated.

### Variants
```getBy*``` queries returns the first matching node for a query, and throws an error if no elements match.

```getAllBy*``` queries return an array of all matching nodes for a query, and throws an error if no elements match

```queryBy*``` queries returns the first matching node for a query, and return null if no elements match. This is useful for asserting an element is not present.

```queryAllBy*``` queries return an array of all matching nodes for a query, and return an empty array ([]) if no elements match.

```findBy*``` queries return a promise which resolves when an element is found which matches the given query. The promise is rejected if no element is found after a default timeout of 4500ms.

```findAllBy*``` queries return a promise which resolves to an array of elements when any elements are found which match the given query. The promise is rejected if no elements are found after a default timeout of 4500ms.

### Queries
 - ```ByLabelText```
 - ```ByPlaceholderText```
 - ```ByText```
 - ```ByAltText```
 - ```ByTitle```
 - ```ByDisplayValue```
 - ```ByRole```
 - ```ByTestId```

### Fire Events

```
fireEvent.click(getByText('Submit')
```

https://github.com/kentcdodds/dom-testing-library/blob/master/src/events.js

### Async
- ```waitForElement```

## Sinon
Test spies, stubs and mocks.

### Spies
 A test spy is a function that records arguments, return value, the value of this and exception thrown (if any) for all its calls. There are two types of spies: Some are anonymous functions, while others wrap methods that already exist in the system under test.

```
 sinon.spy()
```

 ### Stubs
 Test stubs are functions (spies) with pre-programmed behavior.

 ```
 sinon.stub()
 ```

 ## Chai.js

 Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

```
expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.lengthOf(3);
```

Plugins:
- [chai-dom](https://www.npmjs.com/package/chai-dom)
- [sinon-chai](https://github.com/domenic/sinon-chai)
