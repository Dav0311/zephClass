import { useState } from 'react'
import './App.css'


function TodoLIst() {
  

    const todo ="this is the todo....";

  return (
    <div className="container">
     <h1>the Todo List</h1>
     <div className="content">
        <div className="input">
        <input type="button" value="Add your list..."/>
        <button className='btn'>ADD</button>
        </div>    
        <div className="list">
            <div className="todo">
            <p>{todo} </p>
            </div>
            <div className="todo">
            <p>{todo}</p>
            </div>
            <div className="todo">
            <p>{todo}</p>
            </div>
            
        </div>
        <div className="button">
          <button className='btn2'>clear all completed tasks</button>
        </div>
     </div>
    </div>
  )
}

export default TodoLIst;
