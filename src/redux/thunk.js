import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const randomGreetingUrl = 'http://127.0.0.1:3000/greetings/random';

const fetchGreeting = createAsyncThunk(
  'greeting/randomGreeting',
  async () => {
    try {
      const response = await axios.get(randomGreetingUrl);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export default fetchGreeting;
