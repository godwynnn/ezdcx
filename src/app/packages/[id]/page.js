"use client"
import React, { useState } from 'react'
import { PaystackConsumer } from 'react-paystack'
import Hero from '@/app/hero';
function Packages() {

    const [interval,setDurationInterval]=useState('DAILY')
    const [duration,setDuration]=useState(1)

    const handleSetDurationChange=(e)=>{
        if (e.target.value < 0 || e.target.value%1 !==0){
            setDuration(1)
        }else{
            setDuration(e.target.value)
        }

    }
    const config = {
        reference: (new Date()).getTime().toString(),
        email: "user@example.com",
        amount: 10000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: 'pk_test_0a42290d278ce8ae73a6d894989c87fa3889f21a',
    };

    // you can call this function anything
    const handleSuccess = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);
    };

    // you can call this function anything
    const handleClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
    }




    const componentProps = {
        ...config,
        text: 'Paystack Button Implementation',
        onSuccess: (reference) => handleSuccess(reference),
        onClose: handleClose
    };
    return (

        <>
            <Hero>
                <div className='bg-[#0B1215] p-20  min-h-[100vh] w-full'>

                    <div className="hero min-h-full w-full">
                        <form className="hero-content w-[100%] flex-col items-center lg:flex-row md:flex-col sm:flex-col max-sm:flex-col max-sm:items-center max-sm:justify-center lg:justify-between">
                            <img src="https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg" className=" h-[90%] max-w-lg sm:w-[100%] max-sm:w-[100%] rounded-lg shadow-2xl" />


                            <div className='w-[50%] sm:w-[100%] max-sm:w-full bg-base-200 p-20 max-sm:p-10 rounded-lg'>
                                <h1 className="text-5xl font-bold">Level1</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem</p>

                                <br />

                                <label className="input input-bordered flex items-center gap-2" name='duration'>
                                    Duration
                                    <input type="number" className="grow" placeholder="Duration" name='duration' min={1} value={duration} onChange={handleSetDurationChange} />
                                </label>
                                <br />


                                <select className="select select-bordered w-full max-w-xs" name='interval' value={interval} onChange={(e)=>setDurationInterval(e.target.value)}>
                                    <option disabled selected>Interval?</option>
                                    <option value={'DAILY'}>daily</option>
                                    <option value={'WEEKLY'}>weekly</option>
                                    <option value={'MONTHLY'}>monthly</option>
                                </select>
                                <br />


                                <PaystackConsumer {...componentProps}>

                                    {({ initializePayment }) => <button className="btn btn-primary mt-5" type='submit' onClick={(e) => { e.preventDefault(); initializePayment(handleSuccess, handleClose) }}>Proceed</button>}

                                </PaystackConsumer>


                            </div>
                        </form>
                    </div>
                </div>
            </Hero>
        </>
    )
}

export default Packages