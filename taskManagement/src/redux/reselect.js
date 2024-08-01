import { createSelector } from 'reselect';

const selectTodoList = (state) => state.todoList;

export const makeSelectTodoList = createSelector(
  [selectTodoList],
  (todoList) => todoList
);
