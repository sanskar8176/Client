import React from 'react'
import { useEffect } from 'react';
import { deleteTodo, getAllTodos } from '../redux/actions';
import {useDispatch, useSelector} from 'react-redux';

import Todo from './Todo';

import Tabs from './Tabs';

import { ALL_TODOS, DONE_TODOS, ACTIVE_TODOS } from '../redux/actions/type';

// useSelector and useDispatch are a set of hooks to use as alternatives to the existing connect() higher-order component. The equivalent of map state to props is useSelector. It takes in a function argument that returns the part of the state that you want. The equivalent of map dispatch to props is useDispatch. We can invoke useDispatch and store it to a variable, dispatch. Dispatch will work with the allActions imported from the actions folder.

// sbhi todos ko fetch krna hai 



const Todolist= ()=> {
    const dispatch= useDispatch();

    //  jis state se data niklana hai    
    const todos = useSelector(state => state.todos);

    // current tab ke lie css change krna hai  esliye eske state ko pass kiya child me
    const currentTab = useSelector(state => state.currentTab);


    // useEffect ka use Component didmount ke roop me, update only once at start
    useEffect(()=>{
        dispatch(getAllTodos()); 
    },[])
    // ,[](empty dependency array) likh the but now warning diya esliye ren=move kiya
     

    // tabs ke acc todolist ko filter krna hai 

    const getTodos =()=>{
        if(currentTab === ALL_TODOS){
            return todos;  //sara return
        }
        else if(currentTab === ACTIVE_TODOS){
            return todos.filter(todo => !todo.done);  //return which is not done
        }
        else if(currentTab === DONE_TODOS){
            return todos.filter(todo=>todo.done);
        }
    }

    const removeDoneTodos=()=>{
        // foreach loop krta hai , map func loop krte hue array return krta hai 
        todos.forEach(({done, _id})=>{
                // done and _id field nikala todos se 
                if(done){
                    dispatch(deleteTodo(_id));
                }
        })
    }

    return (
   <article>
        {/* list ki form me data show krna hai  */}
        
           <div>
            {/* cur tab pass kiya child ko */}
                <Tabs currentTab={currentTab}/> 

            {/* jitne todo done ho chuke unko single button se remove krna hia  */}

            {
                // koi done todo hai to hi show 
                todos.some(todo=>todo.done)?(
                    <button
                     onClick={removeDoneTodos}
                     className="button clear"
                    >
                        Remove Done Todos </button>
                ): null
            }




           </div>


        <ul>
            {
                // gettodos me filter todos milege
            getTodos().map(todo=>(
                <Todo
                    key = {todo._id}  //multiple hai to unique key mangta h mongodb me _id hai to yhi use kr liye
                    todo = {todo}   //yha ke todo ko props se pass
                 />   
            ))
            }
        </ul>

   </article>
  )
}

export default Todolist;

// actions me api bnani pdegi 