"use client"
import React from 'react'
import { UseSelector, useSelector } from 'react-redux'
import Link from 'next/link'
import Hero from '../hero'


function Packages() {
    const data = useSelector(state => state.reducer.chartreducer)
    console.log(data)
    return (
        <>
        <Hero>
            <div className='bg-[#101720]  p-20 grid gap-3 lg:grid-cols-4 min-h-[100vh] md:grid-cols-2'>

                <div className="card lg:w-[100%] md:h-[70vh] md:w-[90%] bg-base-100 shadow-xl">
                    <div className="card-body flex   items-center ">
                        <h2 className="card-title text-[25px] p-0 text-center">Black Ops Strategy</h2>
                        <p className='text-[14px] text-center'>
                            Uses market intelligence on smart money to pick massive moves and never misses its mark.

                        </p>


                        <p><b>Daily plan:</b> #2,500</p>
                        <p><b>Weekly plan:</b> #17,500</p>
                        <p><b>Monthly plan:</b> #67,500</p>

                        <div className="card-actions justify-end">
                            <Link href={'/packages/1'}>
                                <button className="btn btn-primary">Buy Now</button>

                            </Link>
                        </div>
                    </div>
                </div>



                <div className="card lg:w-[100%] md:h-[70vh] md:w-[90%] bg-base-100 shadow-xl">
                    <div className="card-body flex   items-center ">
                        <h2 className="card-title text-[25px] p-0 text-center">Mamba Strategy</h2>
                        <p className='text-[14px] text-center'>
                            Built to take a bite at the market and ride it until it ends in profit.

                        </p>


                        <p><b>Daily plan:</b> #2,500</p>
                        <p><b>Weekly plan:</b> #17,500</p>
                        <p><b>Monthly plan:</b> #67,500</p>

                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>



                <div className="card lg:w-[100%] md:h-[70vh] md:w-[90%] bg-base-100 shadow-xl">
                    <div className="card-body flex   items-center ">
                        <h2 className="card-title text-[25px] p-0 text-center">Cheetah Strategy</h2>
                        <p className='text-[14px] text-center'>
                            Recover profits and losing positions with this unique speed trading style.

                        </p>


                        <p><b>Daily plan:</b> #2,500</p>
                        <p><b>Weekly plan:</b> #17,500</p>
                        <p><b>Monthly plan:</b> #67,500</p>

                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div className="card lg:w-[100%] md:h-[70vh] md:w-[90%] bg-base-100 shadow-xl">
                    <div className="card-body flex   items-center ">
                        <h2 className="card-title text-[25px] p-0 text-center">Titan Strategy</h2>
                        <p className='text-[14px] text-center'>
                            CPI, NFP, PMI, ISM, etc. Economic data trading; trade the news like a professional and maximise your daily trades.


                        </p>


                        <p><b>Daily plan:</b> #2,500</p>
                        <p><b>Weekly plan:</b> #17,500</p>
                        <p><b>Monthly plan:</b> #67,500</p>

                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>


            </div>
        </Hero>
        </>
    )
}

export default Packages