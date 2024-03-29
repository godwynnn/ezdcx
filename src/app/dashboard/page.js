"use client"

import React from 'react'


import Chart from '@/components/chart'
import Navbar from '@/components/navbar'
import Rates from '@/components/rates'
import Amt from '@/components/amt'
import { UseSelector, useSelector } from 'react-redux'


function Dashboard() {
    const data=useSelector((state)=>state.authreducer)

    console.log('dashboard',data)

    return (
        <main className={'bg-[#0B1215] lg:w-[100%] lg:h-[100vh]  max-xl:h-[100vh] lg:overflow-x-hidden md:h-[150vh] md:w-[100%] max-md:h-[100vh] max-md:w-[100%] '}>

            <div className={'flex lg:w-full lg:h-[100%] md:h-full lg:flex-row'}>
                <aside className={' lg:flex lg:w-[40%] lg:h-[full] md:h-full p-5 md:hidden sm:hidden max-sm:hidden'}>
                    <Rates/>
                </aside>

                <div className={'flex lg:flex-row p-4 lg:w-[100%] lg:h-full md:w-[100%] md:h-[100%] sm:w-[100%] sm:h-[100%] max-sm:w-[100%] max-sm:h-[100%]  border-white bg-[#101720] max-md:flex-col max-xl:flex-col md:flex-col'}>
                    <div className='lg:w-[100%] lg:h-[80%] max-lg:w-[100%] max-lg:h-[70%] md:w-[100%] md:h-[70%] sm:w-[100%] sm:h-[100%] max-sm:w-[100%] max-sm:h-[100%]  '>
                        <Chart />
                    </div>

{/* 
                    <aside className={'lg:w-[40%] lg:h-full flex items-center flex-col justify-center p-0 md:w-[100%] md:h-full '}>
                        <Amt/>
                    </aside> */}
                </div>

            </div>

        </main>
    )
}

export default Dashboard