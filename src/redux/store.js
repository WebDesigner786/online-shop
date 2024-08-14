// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice'; // Import your reducers here

export const store = configureStore({
  reducer: {
    user: userReducer, // Add your reducers here
  },
});
