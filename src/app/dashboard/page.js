import React from 'react'


import Chart from '@/components/chart'
import Navbar from '@/components/navbar'
import Rates from '@/components/rates'
import Amt from '@/components/amt'


function Dashboard() {

    return (
        <main className={'bg-[#0B1215] lg:w-[100%] lg:h-[100vh]  max-xl:h-[100vh] lg:overflow-x-hidden md:h-[150vh] md:w-[100%] max-md:h-[100vh] max-md:w-[100%] '}>

            <div className={'flex lg:w-full lg:h-[100%] md:h-full lg:flex-row'}>
                <aside className={'lg:w-[40%] lg:h-[full] md:h-full p-5'}>
                    <Rates/>
                </aside>

                <div className={'flex lg:flex-row p-4 lg:w-[100%] lg:h-full md:w-[100%] md:h-full border-white bg-[#101720] max-md:flex-col max-xl:flex-col md:flex-col'}>
                    <div className='lg:w-[70%] lg:h-[80%] max-lg:w-[70%] max-lg:h-[70%] md:w-[100%] md:h-[90%]'>
                        <Chart />
                    </div>


                    <aside className={'lg:w-[30%] lg:h-full  p-0 md:w-[100%] md:h-full '}>
                        <Amt/>
                    </aside>
                </div>

            </div>

        </main>
    )
}

export default Dashboard