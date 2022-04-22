import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const url = 'https://api.startladder.co/api/frontend/tasks';

const getQues = createAsyncThunk(
    'Ques/fetchQuestions',
     async ()=>{
        try{
            const response = await axios.get(url);
            return response.data.task_array
        }catch(err){
            console.log(err)
            throw err;
        }
    }
);

export {getQues};