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
    const { id } = action.payload
    const newobj = state.todos.map(todo => {
     if (todo.id === id){
      todo.completed = !todo.completed;
      return todo;
      }
      else {return todo}
    })
    return {
     todos:newobj
    }
   }
   default:
    return state
  }
}