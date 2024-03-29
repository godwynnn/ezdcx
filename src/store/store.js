"use client"
import { AuthenticationReducer } from "@/reducer/reducer";
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { persistReducer,persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import storageSession from 'redux-persist/lib/storage/session'



const persistConfig = {
    key: 'root',
    storage,
  }
const persistedReducer = persistReducer(persistConfig, AuthenticationReducer)

export const store=configureStore({

    reducer:{
        authreducer:persistedReducer,
        middleware: [thunk]
    }
   
})

export const Persistor = persistStore(store)