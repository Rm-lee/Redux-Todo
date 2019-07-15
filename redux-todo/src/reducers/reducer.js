import {ADDTODO} from '../actions/actions'

const initialState = {
 todos:[]
}
export default function(state = initialState, action) {
  switch(action.type) {
   case ADDTODO: {
    const {todo} = action.payload
    const newTodos = state.todos.concat([todo])
    console.log(action.payload)
    
    return {
     
      todos:newTodos
    }
   }
   default:
    return state
  }
}