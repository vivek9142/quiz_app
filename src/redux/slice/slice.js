import {createSlice} from '@reduxjs/toolkit';
import { getQues } from '../actions/action';

const initialState = {
    loading:false,
    error:'',
    ques:[]
};

const quesReducer = createSlice({
    name:'Ques',
    initialState,
    reducers:{},
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