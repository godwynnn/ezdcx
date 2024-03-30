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

        Logout:(state,action)=>{

            console.log('logged out')
            state.logged_in=false
            state.email=''
            state.refreshToken=null
            state.accessToken=null

        }
    }
})


export const{actions:AuthencticationAction, reducer:AuthenticationReducer}=AuthenticationSlice

const chartState={
    dates:null,
    close:null,
    high:null,
    low:null,
    open:null,
    loading:false,
}

const ChartSlice=createSlice({
    name:'chart',
    initialState:chartState,

    reducers:{
        setQuery:(state,action)=>{

        },
        getData:(state,action)=>{

        }
        

    }
})

export const {actions:ChartAction,reducer:ChartReducer}=ChartSlice