import React, { Component } from 'react';
import { connect } from 'react-redux'
import {completed} from '../actions/actions'

class Todos extends Component {

 
completedToggle = () =>{

   this.props.completed(this.props.id)

}
 render() {
  return (
   <div style={todosStyle} >
    <p>{this.props.todo } </p>
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