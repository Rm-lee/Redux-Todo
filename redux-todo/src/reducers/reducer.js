import {ADDTODO} from '../actions/actions'

const initialState = {
 todos:[],
 
 
}
export default function(state = initialState, action) {
  switch(action.type) {
   case ADDTODO: {
    const {todo, completed, id} = action.payload
    const newTodo = {todo,completed,id}
    const newTodos = state.todos.concat([newTodo])
    
    
    return {
     
      todos:newTodos
    }
   }
   default:
    return state
  }
}