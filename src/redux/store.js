// instead using redux we can also use redux toolkit

// Using Redux with any UI layer requires a few consistent steps:

// Create a Redux store
// Subscribe to updates
// Inside the subscription callback:
    // Get the current store state
    // Extract the data needed by this piece of UI
    // Update the UI with the data
// If necessary, render the UI with initial state
// Respond to UI inputs by dispatching Redux actions


import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { tabReducer } from './reducers/tabReducer';
import {todosReducer} from './reducers/todosReducer';

// initialize thunk 
const middleware= [thunk];




// single reducer direct pass kr skte hai but multiple ke lie combinereducer se combine krna pdta hai 
const reducer= combineReducers({
    // key :value  pair jaise
    todos : todosReducer,
    currentTab: tabReducer
})

// redux-devtools-extension ka use krk store ko redux extension se sync krna hoga


// takes  reducer function and (actions, storeenhancer etc if any )

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;

// ab pure index.js ko store se wrap kr dena hai 

// In redux, the reducers are the pure functions that contain the logic and calculation that needed to be performed on the state. These functions accept the initial state of the state being used and the action type. It updates the state and responds with the new state

// Actions are plain JavaScript object that contains information. Action is one of the building blocks of Redux. 

// store -
// {
//     type: "bugadded",
//     payload :
            // {
            //     description: "....."
            // }    
// }

// reducer takes store and action and perform actions that u want 
// switch case is used for this 


// Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.