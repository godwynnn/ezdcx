"use client"
import { AuthenticationReducer, ChartReducer } from "@/reducer/reducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { persistReducer,persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import storageSession from 'redux-persist/lib/storage/session'



const persistConfig = {
    key: 'root',
    storage,
  }

const allReducer=combineReducers({
    authreducer:AuthenticationReducer,
    chartreducer:ChartReducer
})
const persistedReducer = persistReducer(persistConfig, allReducer)



export const store=configureStore({

    reducer:{
       reducer:persistedReducer,
        middleware: [thunk]
    }
   
})

export const Persistor = persistStore(store)