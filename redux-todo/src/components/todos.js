import React, { Component } from 'react';
import { connect } from 'react-redux'
import {completed} from '../actions/actions'
import '../App.css';

class Todos extends Component {

constructor(props) {
 super(props);
 this.state = {
  
  classCompleted: "none",
  
}
}

completedToggle = (e,id) =>{
   this.props.completed(id)
   const line = (this.state.classCompleted === "none") ? "line-through" : "none";
   this.setState({"classCompleted":line});
   console.log(this.state.classCompleted)

}
 render() {

  return (
   
   <div className={this.state.classCompleted}  onClick={e => this.completedToggle(e,this.props.todo.id)}>
    <p>{this.props.todo.todo } </p>
   </div>
  );
 }
}

const todosStyle = {
 border:'1px solid black',
 margin:'10px',
 textAlign: 'center',
 

}
const mapDispatchToProps = {
	completed:completed,
}
const mapStateToProps = (state) => {
 return {
     todos:state.todos
 };
};
export default connect(
 mapStateToProps,
	mapDispatchToProps,
)(Todos)