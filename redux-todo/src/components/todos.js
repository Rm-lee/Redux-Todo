import React, { Component } from 'react';
import { connect } from 'react-redux'

class Todos extends Component {
 constructor() {
		super()
		this.state = {
			todos: []
		}
	}
 render() {
  return (
   <div>
    <p>{this.props.todo}</p>
   </div>
  );
 }
}
const mapStateToProps = (state) => {
 return {
  todos: state.todos
 }
}
const mapDispatchToProps = {
 //
}
export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Todos)