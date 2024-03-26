import React from 'react'


import Chart from '@/components/chart'
import Navbar from '@/components/navbar'
import Rates from '@/components/rates'
import Amt from '@/components/amt'


function Dashboard() {

    return (
        <main className={'bg-[#0B1215]  lg:w-[100%] lg:h-[100vh]'}>

            <div className={'flex lg:w-full lg:h-[100%] lg:flex-row'}>
                <aside className={'lg:w-[40%] lg:h-[full] p-5'}>
                    <Rates/>
                </aside>

                <div className={'flex lg:flex-row p-4 lg:w-[100%] lg:h-full border-white bg-[#101720]'}>
                    <div className='lg:w-[70%] lg:h-[80%]'>
                        <Chart />
                    </div>


                    <aside className={'lg:w-[30%] lg:h-full  p-0 '}>
                        <Amt/>
                    </aside>
                </div>

            </div>

        </main>
    )
}

export default Dashboard