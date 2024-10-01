# React Core Concepts

React is a JavaScript library for building user interfaces. It is component-based, which means you build complex UIs from small and isolated pieces of code called "components". Here are some core concepts of React:

## 1. JSX

JSX stands for JavaScript XML. It allows us to write HTML in React. It makes it easier to write and add HTML in React.

```jsx
const element = <h1>Hello, world!</h1>;
```

## 2. Components

Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions but work in isolation and return HTML via a render function.

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

## 3. Props

Props is short for properties and they are used to pass data between React components. It's similar to function parameters.

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
```

## 4. State

State of a component is an object that holds some information that may change over the lifetime of the component.

```jsx
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

## 5. Lifecycle Methods

Lifecycle methods are special methods in the component class that allow you to run code at particular times in the process.

```jsx
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    // runs after the component output has been rendered to the DOM
  }

  componentWillUnmount() {
    // runs just before the component is destroyed
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

These are the core concepts of React. Understanding these will help you get started with building applications using React.