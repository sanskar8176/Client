import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addNewTodo} from '../redux/actions';

function TodoForm() {
    const [text, setText] =useState("");
    //  setText is function used to modify text bcz text is constant 

    // redux me functions ko direct call na krke , dispatch krte hai 
    const dispatch= useDispatch();
    

    const onFormSubmit=(e)=>{
        e.preventDefault();
        // console.log(text);
            // redux ka use kr rhe sikhne k lie
            // jyada cmponents ho aur state component ke under rhti hai 
            // esliye use manage krne m problem hogi 
            //context ka use krk bhi kr skte hai but aur big project m vo bhi complex ho jayega
        
            // redux like frontend database(store) seen by redux dev tool a chrome extension
            // text ko redux se connect krna hai esliye store.js bnaya
        
        dispatch(addNewTodo(text));   //call mar dega    

        // disatch krne k badd inputbox ko empty krdo

        // react have two components controlled and uncontrolled 
        // value prop ka use if not control , to ab text empty ho jane pr inpur field clear
        setText('');
    }
    
    const onInputChange=(event)=>{
        // console.log(event.target.value);
        setText(event.target.value);
        // form submit krne pr value lost ho jaegi esliye esee database me update krana pdega
        // redux ke through centralized data bnana 
    }

  return ( 
   <form className='form' onSubmit={onFormSubmit}>
        <input 
        placeholder='Enter new todo...'
        className='input'
        onChange={onInputChange}
        value={text}
        />
   </form>
  )
}

export default TodoForm