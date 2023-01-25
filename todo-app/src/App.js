 import React,{useEffect, useState} from "react";
 import { SpinnerDotted } from "spinners-react";
 import Todo from "./Components/Todo";


function App() {

      const [todo , setTodo ] = useState([])
      const [remove , setRemove]= useState([])
      const [done , setDone] = useState([])
      const [todoId , setToDoId] = useState(0)

      useEffect( () => {
              if(done.length>0 && done.text !== '') {
                  let current = todo.find(item => item.text === done)
                  if(current.isDone) {
                    current.isDone = false;
                    setTodo(todo => [...todo.filter(item => item.text !== done),current])
                    setDone('')
                  }
                  else if(!current.isDone) {
                    current.isDone = true;
                    setTodo(todo => [...todo.filter(item=> item.text !== done),current])
                    setDone('')
                  }
                 
              }       
      },[todo , done])

      const addTodo =  (e) => {
     
        e.preventDefault();

          let todoInput = document.querySelector('.todo-input');
          if(todoInput.value !== '') {
            let idCount = todoId;
            idCount++;
            setToDoId(idCount)
            setTodo([...todo , {
              text:todoInput.value,
              id :todoId,
              isDone : false
              
            }])
            todoInput.value=''
            console.log(todo)
          }
       }
        useEffect(() => { 
                setTodo(todo =>[...todo.filter(item => item.text !== remove)])
                setRemove('')
                
        },[remove])

     
           

  return (
    <div className="App">
        <div className="container">
        
          <div className="header">
            <h2>To Do List</h2>
          </div>
          <div className="toDo">
            
            <input  required className="todo-input" placeholder="write something to do..." type='text'/>
          </div>
            
                {
                  todo.length>0 
                  ?<div className="todos">
                    {
                      todo.map((item,index) => {
                       return  <Todo
                        key={index}
                        item = {item}
                        setRemove = {setRemove}
                        setDone = {setDone}
                        >

                   
                        </Todo>
                      })
                    }
                  </div>
                  :<div className="todo-empty">
                    <SpinnerDotted className="todo-spinner" size={50} thickness={69} speed={100} color="#36ad47"/>
                    <span className="empty-todo-text">there is nothing to do ...</span>
                    </div>
                }
          <div className="addToDo">
            <button onClick={addTodo}>Add to List</button>
          </div>
        
        </div>  
       
    </div>
  );
}

export default App;
