"use client"
import Image from "next/image";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import Hero from "./hero";

export default function Home() {

  const authData=useSelector(state=>state.reducer.authreducer)
  console.log(authData)

  useLayoutEffect(()=>{

    if (authData.logged_in){
      redirect('/dashboard')
    }

  },[])
  return (
    <>
    <Hero>
    <h1>hello</h1>
    </Hero>
    </>
  )}
