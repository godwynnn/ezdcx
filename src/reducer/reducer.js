 import { createSlice } from "@reduxjs/toolkit";

const State={
    accessToken:null,
    refreshToken:null,
    logged_in:false,
    email:''

}

export const AuthenticationSlice=createSlice({
    name:'auth',
    initialState:State,

    reducers:{
        Login:(state,action)=>{
            console.log('dispatch values',action.payload.email)
            state.logged_in=true
            state.email=action.payload.email

        },

        Logout:()=>{

            console.log('logged out')

        }
    }
})


export const{actions:AuthencticationAction, reducer:AuthenticationReducer}=AuthenticationSlice