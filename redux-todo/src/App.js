import React, { Component } from 'react';
import Todos from './components/todos'
import uuid from 'uuid'
import { connect } from 'react-redux'
import { addToDo } from './actions/actions'

class App extends Component {
 constructor() {
  super();
  this.state = {
    value: '',
    completed: false,
    
  }
}
 handleChange = (e) => {
  e.preventDefault()
  this.setState({
   newTodo: e.target.value,
  })
 }
 submitHandler= (e) => {
   e.preventDefault()
   this.props.addToDo(this.state.newTodo, this.state.completed, uuid.v4())
   
   
 }
 render() {
 
  return (
   <div>
     {this.props.todos.map( todo => (
       <Todos todo={todo} key={todo.id}/>
       
     ))}
    <form onSubmit={this.submitHandler}>
					<input type="text" name="todo" placeholder="todo" value={this.state.todo} onChange={this.handleChange} required />
					
					<button type="submit">addtodo</button>
				</form>
   </div>
  );
 }
}
const mapStateToProps = (state) => {
 return {
     todos:state.todos
 };
};
const mapDispatchToProps = {
	addToDo:addToDo,
}
export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App)