export const ADDTODO = 'ADDTODO';
export const COMPLETED = 'COMPLETED'

export const addToDo = (todo, completed, id) => {
 return {
  type:ADDTODO,
  payload:{
   todo,
   completed,
   id
  }
 }
}
export const completed = (id) => {
 return {
  type:COMPLETED,
  payload: {
   id
  }
 }
}