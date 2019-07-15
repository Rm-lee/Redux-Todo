import {ADDTODO} from '../actions/actions'
import {COMPLETED} from '../actions/actions'

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

   case COMPLETED: {
    const {completed, id} = action.payload
    if (state.todos.find(todo => todo.id === id).completed === false)
    return {

    }
   }
   default:
    return state
  }
}