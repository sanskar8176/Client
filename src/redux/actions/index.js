// fetch or axois se api call 
// Axios automatically transforms the data returned from the server, but with fetch() you have to call the response. json method to parse the data to a JavaScript object. More info on what the response

import axios from 'axios';
// database me add krne k lie

import { ADDNEW_TODO, GETALL_TODO, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO, TOGGLE_TAB} from './type.js';

// const API_URL= 'http://localhost:4000';  //for local
const API_URL= 'https://todo-website-api.onrender.com/';         //for deploy

// api calls ko async await  use and error handling bhi 

// kyuki ye dispatch action hai eslie middleware ka use jo thunk se bnaya tha

export const addNewTodo=(data)=> async(dispatch) =>{
    // main url + endpoint , data in object form
   try{
       const res = await axios.post(`${API_URL}/todos`, {data});
    //    response me object ata hai 

        dispatch({
            type: ADDNEW_TODO,  //types constants hai esse type.js me likha hu
            payload: res.data // sara decription
        });
    }
    catch(e){
        console.log('Error while calling addNewTodo API in index.js of actions', e.message);
    }
}



// fetch all todo 
// there are no conditions to filter
// async dispatch ka use kyuki redux ke help se call kr rhe 

export const getAllTodos=()=>async(dispatch)=>{
    try{
        const res = await axios.get(`${API_URL}/todos`);
    //  ye endpoint route me bnana pdega


        // etne se database se fetch kr liya ab redux me save krna hai dispatch use krk
       
         dispatch({
             type: GETALL_TODO,  
             payload: res.data 
         });

        //  reducer ke help se reudex dev extension me fetch hoga
        // redux se fir useselector ka use krk feetch in frontend

     }
     catch(e){
         console.log('Error while calling getAllTodos API in index.js of actions', e.message);
     }
}



// eske lie id chahiye hogi
export const toggleTodo = (id) => async(dispatch) => {
    try{
        const res = await axios.get(`${API_URL}/todos/${id}`);
    
        dispatch({
             type: TOGGLE_TODO,  
             payload: res.data 
         });

     }
     catch(e){
         console.log('Error while calling toggleTodo API in index.js of actions', e.message);
     }
}


export const updateTodo=(id, data)=>async(dispatch)=>{
    try{
        const res = await axios.put(`${API_URL}/todos/${id}`,{data});
    // put used when update
        dispatch({
             type: UPDATE_TODO,  
             payload: res.data 
         });

     }
     catch(e){
         console.log('Error while calling updateTodo API in index.js of actions', e.message);
     }
}

export const deleteTodo=(id)=>async(dispatch)=>{
    try{
        const res = await axios.delete(`${API_URL}/todos/${id}`);
    // put used when update
        dispatch({
             type: DELETE_TODO,  
             payload: res.data 
         });

     }
     catch(e){
         console.log('Error while calling deleteTodo API in index.js of actions', e.message);
     }
}

export const toggleTab = (tab) =>async(dispatch)=>{
    dispatch({
        type: TOGGLE_TAB,  
        selected: tab    // jo tab selected hai vo bheja
    });
}
// eske lie new reducer banaya hai  jo current selected tab ko store kregea
