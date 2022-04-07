import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const url = 'https://api.startladder.co/api/frontend/tasks';

const getQues = createAsyncThunk(
    'Ques/fetchQuestions',
     async ()=>{
        const response = await axios.get(url);
        return response.data.task_array
    }
);

export {getQues};