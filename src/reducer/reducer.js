 import { createSlice } from "@reduxjs/toolkit";

const State={
    accessToken:null,
    refreshToken:null,
    logged_in:false,

}

export const AuthenticationSlice=createSlice({
    name:'auth',
    initialState:State,

    reducers:{
        Login:(state,action)=>{
            console.log(action.payload)

        },

        Logout:()=>{

            console.log('logged out')

        }
    }
})


export const{actions:AuthencticationAction, reducer:AuthenticationReducer}=AuthenticationSlice