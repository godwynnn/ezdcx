"use client"
import React, { useState, useRef, useEffect } from 'react'
import { PaystackConsumer } from 'react-paystack'
import Hero from '@/app/hero';
import { CldUploadWidget } from "next-cloudinary";
import Link from 'next/link';
import { useRouter } from 'next/navigation';


function Packages({params}) {
    const router = useRouter()

    const [interval, setDurationInterval] = useState('DAILY')
    const [duration, setDuration] = useState(1)
    const [imgData, setImgData] = useState({})
    const upload_btn_ref = useRef()
    const modal_3_ref = useRef()


    console.log('ROUTER',params)

    const handleSetDurationChange = (e) => {
        if (e.target.value < 0 || e.target.value % 1 !== 0) {
            setDuration(1)
        } else {
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



    const sendData = () => {
        console.log(imgData)
    }


    useEffect(() => {
       
    }, [])


     // upload_btn_ref.current.addEventListener('click', (e) => {
        //     // document.getElementById('my_modal_3').style.visibility='hidden'
        //     // document.getElementById('my_modal_3').style.display='none'
        //     document.getElementById('my_modal_3').removeAttribute('open')

        //     // document.getElementById('my_modal_3').style.opacity='0'
        // })

    return (

        <>
            <Hero>
                <div className='bg-[#0B1215] p-20  min-h-[100vh] w-full'>

                    <div className="hero min-h-full lg:w-full md:w-full sm:w-full max-sm:w-full">
                        <form className="hero-content w-[100%] flex-col items-center lg:flex-row md:flex-col sm:flex-col max-sm:flex-col max-sm:items-center max-sm:justify-center  lg:justify-between">
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


                                <select className="select select-bordered w-full max-w-xs" name='interval' value={interval} onChange={(e) => setDurationInterval(e.target.value)}>
                                    <option disabled selected>Interval?</option>
                                    <option value={'DAILY'}>daily</option>
                                    <option value={'WEEKLY'}>weekly</option>
                                    <option value={'MONTHLY'}>monthly</option>
                                </select>
                                <br />


                                <PaystackConsumer {...componentProps}>

                                    {({ initializePayment }) => <button className="btn btn-primary mt-5" type='submit' onClick={(e) => { e.preventDefault(); initializePayment(handleSuccess, handleClose) }}>Proceed</button>}

                                </PaystackConsumer>

                                <Link href={`/packages/${params.id}/edit`} >
                                    <button className="btn bg-gray-500 text-white" type='button' >Edit</button>
                                </Link>

                                {/* <button className="btn bg-gray-500 text-white" type='button' onClick={() => document.getElementById('my_modal_3').showModal()}>Edit</button> */}



                            </div>
                        </form>
                    </div>
                </div>

                {/* 
                <dialog id="my_modal_3" className="modal " ref={modal_3_ref} >
                    <div className="modal-box">
                        <form method='post' className='justify-center items-center grid  grid-cols-1 gap-5 p-2' onSubmit={sendData} >




                            <input type="text" placeholder="Title" className="input input-bordered w-[100%]" name="title" onChange={(e) => setImgData({ ...imgData, 'name': e.target.value })} value={imgData.title} />
                            <textarea className="textarea textarea-bordered  w-[100%]" placeholder="Description" name="description" onChange={(e) => setImgData({ ...imgData, 'description': e.target.value })} value={imgData.description}></textarea>


                            <CldUploadWidget uploadPreset="ezfrx_lib" onClose={(results, options) => document.getElementById('my_modal_3').showModal()} onSuccess={(results, options) => setImgData({ ...imgData, 'img_info': results.info })}   >
                                {({ open }) => {
                                    return (
                                        <button className=" bg-gray-500  text-white rounded-md p-3" onClick={() => open()} type="button" ref={upload_btn_ref}   >
                                            Upload an Image
                                        </button>

                                    );
                                }}
                            </CldUploadWidget>

                            <textarea className="textarea textarea-bordered  w-[100%]" placeholder="Price details"></textarea>
                            <input type="text" placeholder="Daily Plan" name="daily" className="input input-bordered w-[100%]" onChange={(e) => setImgData({ ...imgData, 'daily_price': e.target.value })} value={imgData.daily} />
                            <input type="text" placeholder="Weekly Plan" name="weekly" className="input input-bordered w-[100%]" onChange={(e) => setImgData({ ...imgData, 'weekly_price': e.target.value })} value={imgData.weekly} />
                            <input type="text" placeholder="Monthly Plan" name="monthly" className="input input-bordered w-[100%]" onChange={(e) => setImgData({ ...imgData, 'monthly_price': e.target.value })} value={imgData.monthly} />

                            <button className="btn btn-md bg-gray-500  text-white rounded-md" type="submit">Submit</button>


                        </form>

                        <form method="dialog">
                            if there is a button in form, it will close the modal
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>

                    </div>
                </dialog> */}
            </Hero>
        </>
    )
}

export default Packages