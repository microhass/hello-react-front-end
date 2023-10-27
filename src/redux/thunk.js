import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const randomGreetingUrl = 'http://127.0.0.1:3000/api/v1/messages/random';

const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    try {
      const response = await axios.get(randomGreetingUrl);
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

export default fetchGreeting;
