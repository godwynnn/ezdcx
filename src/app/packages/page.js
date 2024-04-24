"use client"
import React, { useEffect, useState } from 'react'
import { UseSelector, useSelector } from 'react-redux'
import Link from 'next/link'
import Hero from '../hero'
import { Urls } from '../urls'


const url=Urls()

function Packages() {

    
    const data = useSelector(state => state.reducer.chartreducer)
    console.log(data)
    const [allPackages,setPackage]=useState([])

    



    useEffect(()=>{
        fetch(url.packages,{
            method: 'GET'
        }).then(res=>res.json())
        .then(data=>
           { setPackage(data) 
            console.log('packages:',data)}
            )
       

       
    },[])



    return (
        <>
        <Hero>
            <div className='bg-[#101720]  p-20 grid gap-3 lg:grid-cols-4 min-h-[100vh] md:grid-cols-2'>


                {allPackages.map((val,idx)=>

                
                <div className="card lg:w-[100%] md:h-[70vh] md:w-[90%] bg-base-100 shadow-xl" key={val.id} >
                    <div className="card-body flex   items-center ">
                        <h2 className="card-title text-[25px] p-0 text-center">{val.name}</h2>
                        <p className='text-[14px] text-center'>
                            {val.description}
                        </p>


                        <p><b>Daily plan:</b> #{val.daily_price}</p>
                        <p><b>Weekly plan:</b> #{val.weekly_price}</p>
                        <p><b>Monthly plan:</b> #{val.monthly_price}</p>

                        <div className="card-actions justify-end">
                            <Link href={`/packages/${val.id}`} >
                                <button className="btn btn-primary">Buy Now</button>

                            </Link>
                        </div>
                    </div>
                </div>

                )}


            </div>
        </Hero>
        </>
    )
}

export default Packages