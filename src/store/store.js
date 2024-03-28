"use client"
import { AuthenticationReducer } from "@/reducer/reducer";
import { configureStore } from "@reduxjs/toolkit";

export const store=configureStore({

    reducer:{
        authreducer:AuthenticationReducer
    }
   
})