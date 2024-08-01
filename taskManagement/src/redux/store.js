// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './reducer'; // Adjust the path to your slice file

const store = configureStore({
  reducer: {
    task: taskReducer, // Add your reducers here
  },
  // Optionally, you can add middleware or devTools configuration
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development
});

export default store;
