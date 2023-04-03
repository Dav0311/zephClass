import { useState } from 'react'
import './App.css'


function TodoLIst() {
  const [todo, setTodo] = useState([]);
const clickhandler=()=>{
 //alert(todo);
}
const change = event =>{
  setTodo(event.target.value)
  
}
const handlesubmit =(e)=>
{
e.preventDefault();
const list = [todo];

}   

  return (
    <div className="container">
      
        <form onSubmit={handlesubmit}>
          <div className="input">
            <label>enter your todo: </label>
            <input onChange={change} 
            type="text" value={todo
            }/>
            <button onClick={clickhandler}>add</button>
          </div>
          <select name="" id="">
            <option value="ronald">ronald</option>
            <option value="dave"> dave</option>
          </select>
         </form>
             
                
                <div className="todo">
                <p>{todo}</p>
                </div>
              
          <button>clear to</button>
     </div>
    
  )
}

export default TodoLIst;
