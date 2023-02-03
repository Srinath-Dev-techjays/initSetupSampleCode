/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// import { createStore } from 'redux'



// //actions
// const increment = () => {
//     return {
//         type: 'INCREMENT'
//     }
// }

// const decrement = () => {
//     return {
//         type: 'DECREMENT'
//     }
// }


// //reducer

// const counter = (state = 0, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//         default:
//             return state;
//     }
// }

// //create store

// const store = createStore(counter);

// //log in console

// store.subscribe(() => {
//     console.log(store.getState())
    
    
// });

// // dispatch execute our action here

// store.dispatch(increment())



AppRegistry.registerComponent(appName, () => App);
