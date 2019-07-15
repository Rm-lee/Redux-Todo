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

completedToggle = (e,id,completedVal) =>{
   completedVal = !completedVal
   this.props.completed(id,completedVal)
   const line = (this.state.classCompleted === "none") ? "line-through" : "none";
   this.setState({"classCompleted":line});
  

}
 render() {

  return (
   
   <div className={this.state.classCompleted}  onClick={e => this.completedToggle(e,this.props.todo.id,this.props.todo.completed)}>
    <p>{this.props.todo.todo } </p>
   </div>
  );
 }
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