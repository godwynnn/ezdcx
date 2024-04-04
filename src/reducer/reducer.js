
 import { createSlice } from "@reduxjs/toolkit";
 import { useSelector } from "react-redux";
//  import { cookies } from "next/headers";

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
            // cookies().set('logged_in',true)

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
    loading:true,
    using_post:false,
    symbol:'BTC-USD'
}

const ChartSlice=createSlice({
    name:'chart',
    initialState:chartState,

    reducers:{
        setQuery:(state,action)=>{
            console.log(action.payload)
            state.dates=action.payload.dates
            state.close=action.payload.close
            state.high=action.payload.high
            state.low=action.payload.low
            state.open=action.payload.open
            state.loading=action.payload.loading
            state.using_post=action.payload.searched_with_post
            state.symbol=action.payload.symbol

        },
        getData:(state,action)=>{

        }
        

    }
})

export const {actions:ChartAction,reducer:ChartReducer}=ChartSlice
// export const authData=useSelector(state=>state.reducer.authreducer)