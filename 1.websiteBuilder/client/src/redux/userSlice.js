import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'user',
    initialState:{
        userData:null
    },
    reducers:{
        //to update the data
        setUserData:(state,action)=>{
            state.userData=action.payload;
        }
    }
})

export const {setUserData}=userSlice.actions;

export default userSlice.reducer