import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'taskList',
  initialState: {
    todolist: [
      { id: 1, taskname: 'Learn Redux', suggest: 'Google', description: 'Find Redux', rangePicker: [] },
    ],
  },
  reducers: {
    addTask: (state = initialState, action) => {
      state.todolist.push(action.payload);
    },
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
