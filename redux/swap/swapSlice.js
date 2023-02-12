import {createSlice} from '@reduxjs/toolkit';

export const swapSlice=createSlice({
    name:'swap',
    initialState:{
        swapData:{},
        swapInput:0,
        deadLineConstant:10
    },
    reducers:{
        setSwapData:(state,action)=>{
            state.swapData=action.payload
        },
        setInputData:(state,action)=>{
            state.setInputData=action.payload
        }
    },
});
export const {setSwapData,setInputData}= swapSlice.actions
export default swapSlice.reducer