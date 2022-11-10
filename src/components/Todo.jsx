
// esme bhut changes krne hai esliye new component bna diya 
import { toggleTodo, updateTodo ,deleteTodo} from "../redux/actions";
import { useDispatch } from "react-redux";

import { useState } from "react";

const Todo = ({todo})=>{
    // for edit button
    const [editing, setEditing] = useState(false);
    
    // edit krne pr bar bar update hogi esliye state bnaya 
    const [text, setText] = useState(todo.data);

    const dispatch = useDispatch();

    const onFormSubmit=(e)=>{
        e.preventDefault();  //no reload
        setEditing(prevState=> !prevState);  //edit show nhi krna hai ab
        dispatch(updateTodo(todo._id, text));  // kisko aur kisse update krna hai 
    }

    return (

// li pr click krne pr toggle krna hai 
// eske lie db pr api call marege aur (index.js in actions)direct done field fetch krege


      <li className="task"
       onClick={()=>dispatch(toggleTodo(todo._id))}
       style={{
        textDecoration: todo.done? 'line-through':'',
        color : todo.done? '#bdc3c7': '#34495e'
       }}
       >
          <span style={{display : editing ? 'none':'' }} > {todo.data} </span>
            
            {/* do icons chahiye */}
            {/* npm i font-awesome ka use */}
            
            <form 
                style={{display : editing ? 'inline':'none' }}
                onSubmit={onFormSubmit}    
            > 
            {/* esse  submit krne pr database me save + redux me bhi update */}
                <input 
                    type="text"
                    value={text}
                    className='edit-todo'
                    onChange={(e)=>setText(e.target.value)}
                />
            </form>

            <span className="icon" onClick={()=>setEditing(prevState => !prevState)}>
               {/* agar edit pr click hai to input field diya for editingjisme data dalege*/}
                <i className="fas fa-pen"></i>
            </span> 
            

            {/* espr click krne pr redux store and db se delete krna hai  */}
            <span className="icon" onClick={()=>dispatch(deleteTodo(todo._id))}>
                <i className="fas fa-trash"></i>

            </span> 
      </li>
         
    )

}

export default Todo;