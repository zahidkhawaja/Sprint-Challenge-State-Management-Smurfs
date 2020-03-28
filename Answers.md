1. What problem does the context API help solve?
Prop drilling (passing props down multiple levels). With context API, you create a 'context' that holds data that you can import into any component.
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
The 'store' holds all of the app's state, which is why it's known as the 'single source of truth'. The 'reducer' takes the previous state, applies an 'action' to it, and returns the next state.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is for the entire app (global), while component state is local. You can use application state in a big project where multiple components need access to a "centralized" state. Local state is good for components with state that doesn't necessarily need to be global.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux dispatches actions synchronously. For asynchronous tasks (for example, when fetching data from an API), you use redux-thunk, which lets you create action creators that return a function instead of an action. This delays the action until a certain condition is met.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
Context API is nice because it's modular and doesn't require you to use global state for the entire app. You can use context api where needed. Also, context api is built in. Ultimately, it all comes down to using the right tool for the job.
