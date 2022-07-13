//Action type
export const ADD_TODO = "ADD_TODO";

//Action Creator

export const addTodo = (data) => ({
  type: ADD_TODO,
  payload: data,
});
