import {configureStore} from '@reduxjs/toolkit';
import quesReducer from './slice/slice';

const store = configureStore({
    reducer:{
        ques:quesReducer
    }
});

export default store;