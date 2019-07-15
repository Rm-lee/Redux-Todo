export const ADDTODO = 'ADDTODO';

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