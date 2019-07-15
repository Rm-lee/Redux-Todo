import React, { Component } from 'react';
import Todos from './components/todos'
import { connect } from 'react-redux'
import { addToDo } from './actions/actions'

class App extends Component {
 constructor() {
  super();
  this.state = {
  
  newTodo: ''
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
   this.props.addToDo(this.state.newTodo)
   
 }
 render() {
  console.log(this.state.todos)
  return (
   <div>
     {this.props.todos.map( todo => (
       <Todos todo={todo} />
       
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