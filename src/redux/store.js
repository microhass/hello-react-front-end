import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './reducers/greetingsSlice';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;
