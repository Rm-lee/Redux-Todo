import React, { Component } from 'react';


class Todos extends Component {

 render() {
  return (
   <div style={todosStyle}>
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
export default Todos