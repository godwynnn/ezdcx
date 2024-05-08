"use client"

import React, { useEffect, useLayoutEffect, useState } from 'react'


import Chart from '@/components/chart'
import Navbar from '@/components/navbar'
import Rates from '@/components/rates'
import Amt from '@/components/amt'
import { useSelector } from 'react-redux'
import AuthValidator from '@/components/authValidator'
import { redirect } from 'next/navigation'
import Hero from '../hero'
// import { cookies } from 'next/headers'
import { Urls } from '../urls'
import { useRouter, } from 'next/navigation'
import Filter from '@/components/filter'


const url = Urls()
function Dashboard() {

    const router = useRouter()
    const [graph, setGraph] = useState('APEX')

    const handleGraphChange = e => {
        setGraph(e.target.value)
    }





    const authData = useSelector(state => state.reducer.authreducer)
    const logged_in = authData.logged_in

    const getSubscriptionData = () => {
        fetch(`${url.subscription_data}`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${authData.accessToken}`
            },
        }).then(res => res.json())
            .then(data => console.log('subscription_Data', data))
    }

    useEffect(() => {
        getSubscriptionData()

    }, [])



    useLayoutEffect(() => {

        if (!logged_in) {
            redirect('/auth')
        }

    }, [])

    console.log('dashboard', authData)

    return (
        <>
            {authData.logged_in ?
                <Hero>
                    <main className={'bg-[#0B1215] lg:w-[100%] lg:h-[120vh]  max-xl:h-[100vh] lg:overflow-x-hidden md:h-[150vh] md:w-[100%] max-md:h-[100vh] max-md:w-[100%] '}>

                        <div className={'flex lg:w-full lg:h-[100%] md:h-full lg:flex-row'}>
                            <aside className={' lg:flex lg:w-[40%] lg:h-[full] md:h-full p-5 md:hidden sm:hidden max-sm:hidden'}>
                                <Rates handleGraphChange={handleGraphChange} />
                            </aside>

                            <div className={'flex lg:flex-row p-4 lg:w-[100%] lg:h-full md:w-[100%] md:h-[100%] sm:w-[100%] sm:h-[100%] max-sm:w-[100%] max-sm:h-[100%]  border-white bg-[#101720] max-md:flex-col max-xl:flex-col md:flex-col'}>
                                <div className='flex flex-col w-[100%] h-[100%]'>
                                    <div className='w-[100%] h-[20%] p-2 grid grid-cols-5 justify-center items-center' >
                                        <Filter />
                                    </div>
                                    <div className='flex justify-center items-center lg:w-[100%] lg:h-[80%] max-lg:w-[100%] max-lg:h-[70%] md:w-[100%] md:h-[70%] max-md:h-[100%] sm:w-[100%] sm:h-[100%] max-sm:w-[100%] max-sm:h-[100%]  '>

                                        <Chart graph={graph} />
                                    </div>
                                </div>



                                {/* 
             <aside className={'lg:w-[40%] lg:h-full flex items-center flex-col justify-center p-0 md:w-[100%] md:h-full '}>
                 <Amt/>
             </aside> */}
                            </div>

                        </div>

                    </main>
                </Hero>

                :
                router.push('/')

            }



        </>
    )
}

export default Dashboard