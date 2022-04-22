import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const url = 'https://api.startladder.co/api/frontend/tasks';

const getQues = createAsyncThunk(
    'Ques/fetchQuestions',
     async ()=>{
        try{
            const localStorageData = localStorage.getItem('data');
            if(localStorageData)    return await JSON.parse(localStorageData);
            else{
                const response = await axios.get(url);
                await localStorage.setItem('data',JSON.stringify(response.data.task_array))
                return response.data.task_array
            }
            
        }catch(err){
            console.log(err)
            throw err;
        }
    }
);

export {getQues};