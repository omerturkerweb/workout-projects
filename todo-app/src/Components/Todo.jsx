import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
 
      const setDone = this.props.setDone;
      const setRemove = this.props.setRemove;
      const todo = this.props.item;
     

        const deleteHandle = () => {
            setRemove(this.props.item.text)
        }
        const doneHandle = () => {
            setDone(this.props.item.text)
        }

    return (
        <div style={this.props.item.isDone?{backgroundColor:'rgb(168, 243, 173)'}:null} className='todo'>
            <div className='todo-text'>
              {
                todo.isDone
                ? <li className='todo todo-done'>{todo.text}</li>
                :<li className='todo todo-not-done'>{todo.text}</li>
              }
                
            </div>
                
            <div className='actions'>
                <i onClick={doneHandle} className="fa-solid fa-check done"></i>
                <i onClick={deleteHandle} className="fa-sharp fa-solid fa-xmark remove"></i>
            </div>
     
       
        </div>


                            
                       
    
    )
  }
}
