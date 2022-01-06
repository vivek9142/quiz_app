import {createSlice} from '@reduxjs/toolkit';
import { getQues } from '../actions/action';

const initialState = {
    loading:false,
    error:'',
    ques:[],
    time:0,
    currentQues:-1,
    correctAns:0
};

const quesReducer = createSlice({
    name:'Ques',
    initialState,
    reducers:{
        changeQues:(state)=>{
            state.currentQues++;
        },
        restartQuiz:(state)=>{
            state.currentQues=initialState.currentQues;
        },
        addTimeSpan:(state,action)=>{
            const fulltime = action.payload.min*60 + action.payload.sec;
            state.time = fulltime;
        },
        addCorrectAnswers:(state,action)=>{
            state.correctAns++;
        }
    },
    extraReducers:(builder) => {
    builder.addCase(getQues.pending,(state)=>{
        state.loading=true;
    })
    .addCase(getQues.rejected,(state,action)=>{
        state.ques = [];
        state.loading = false;
        state.error = action.error.message;
    })
    .addCase(getQues.fulfilled,(state,action)=>{
        state.error='';
        state.loading = false;
        console.log(state,action)
        state.ques.push(...action.payload);
    })
    }
});

export default quesReducer.reducer;

export const quesActions = quesReducer.actions;