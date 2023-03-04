const questions = [
  {
    id: 1,
    question: "What is the virtual DOM?",
    answer:
      "React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. When the state of an object changes, the virtual DOM changes only that object in the real DOM, rather than updating all the objects.",
  },
  {
    id: 2,
    question: "What is JSX?",
    answer:
      "JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.",
  },
  {
    id: 3,
    question: "Why can’t browsers read JSX?",
    answer:
      "Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser.",
  },
  {
    id: 4,
    question: "What are synthetic events in React?",
    answer:
      "Synthetic events are the objects which act as a cross-browser wrapper around the browser’s native event. They combine the behavior of different browsers into one API. This is done to make sure that the events show consistent properties across different browsers.",
  },
  {
    id: 5,
    question: "What are Higher Order Components(HOC)?",
    answer:
      "Higher Order Component is an advanced way of reusing the component logic. Basically, it’s a pattern that is derived from React’s compositional nature. HOC are custom components which wrap another component within it. They can accept any dynamically provided child component but they won’t modify or copy any behavior from their input components. You can say that HOC are ‘pure’ components.",
  },
  {
    id: 6,
    question: "What are Pure Components?",
    answer:
      "Pure components are the simplest and fastest components which can be written. They can replace any component which only has a render(). These components enhance the simplicity of the code and performance of the application.",
  },
  {
    id: 7,
    question: "What is React Router?",
    answer:
      "React Router is a powerful routing library built on top of React, which helps in adding new screens and flows to the application. This keeps the URL in sync with data that’s being displayed on the web page. It maintains a standardized structure and behavior and is used for developing single page web applications. React Router has a simple API.",
  },
  {
    id: 8,
    question: "What are the major features of React?",
    answer: `The major features of React are:
      Uses JSX syntax, a syntax extension of JS that allows developers to write HTML in their JS code,
      It uses VirtualDOM instead of RealDOM considering that RealDOM manipulations are expensive,
      Supports server-side rendering,
      Follows Unidirectional data flow or data binding,
      Uses reusable/composable UI components to develop the view.`,
  },
  {
    id: 9,
    question: "What is the difference between Element and Component?",
    answer:
      "An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other Elements in their props. Creating a React element is cheap. Once an element is created, it is never mutated. Whereas a component can be declared in several different ways. It can be a class with a render() method or it can be defined as a function. In either case, it takes props as an input, and returns a JSX tree as the output.",
  },
  {
    id: 10,
    question: "How to create components in React?",
    answer:
      "There are two possible ways to create a component: 1. Function Components, 2. Class Components",
  },
];
export default questions;
