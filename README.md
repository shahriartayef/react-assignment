1)JSX (JavaScript XML) is a syntax extension for JavaScript used in React to describe the UI structure. It allows you to write HTML-like code inside JavaScript. It's used to make React components more readable and easier to write.


2)State: Data that is managed within a component and can change over time. It’s mutable and can trigger re-renders.
Props: Short for "properties", they are passed to a component by its parent and are read-only. They are used to pass data from one component to another.


3)The useState hook is used to add state to functional components. It returns an array with the current state and a function to update it. It works by initializing the state with a value and allows updates that trigger re-renders of the component.


4)Lift State Up: Move the state to the nearest common ancestor and pass it down as props.
Context API: Use the Context API to share state across components without prop drilling.
State Management Libraries: Use libraries like Redux for global state management.


5)Event handling in React is done by passing functions as event handlers to elements. The function is triggered when the event occurs. React uses camelCase for event names, like onClick, onChange, etc.