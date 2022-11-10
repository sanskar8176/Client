import * as actionType from '../actions/type.js';

// state as array hota hai  default empty se initalze kr diya kyuki start me undefined na ho jaye esliye
export const todosReducer=(state=[], action)=>{
    // type ke basis pr differnetiate krna hai 
    // action k under pura object ayega jisme type and payload hai 
    // state ke under previous objects hote hai 
    switch(action.type){
       
        case actionType.ADDNEW_TODO:
            return [action.payload, ...state]  // api ke response me mila res jo payload ke under hai usse update krdege
   
        case actionType.GETALL_TODO:
            return action.payload    // yha bss new wala dala agar purana wala bhi dale to duplicate ho jaega
    
        case actionType.TOGGLE_TODO:
            return state.map(todo=>(
                todo._id === action.payload._id ? {...todo , done: !todo.done}: todo
            )) 
        // redux me  update krne ke lie map krna pdega jo id chah rhe uske field ko toggle
        case actionType.UPDATE_TODO:
            return state.map(todo=>(
                todo._id === action.payload._id ? {...todo , data: action.payload.data}: todo
            )) 
        case actionType.DELETE_TODO:
            return state.filter(todo=> todo._id !== action.payload._id);            


        default:
            return state;
   
    }
}