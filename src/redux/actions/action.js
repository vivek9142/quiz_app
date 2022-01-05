import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const url = 'https://api.startladder.co/sapi/frontend/tasks';

const getQues = createAsyncThunk(
    'Ques/fetchQuestions',
     async ()=>{
        const response = await axios.get(url);
        console.log(response);
        return response.data.task_array
    }
);

export {getQues};