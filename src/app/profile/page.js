"use client"
import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'





function Profile({ params }) {
   
 
   

    


    // upload_btn_ref.current.addEventListener('click', (e) => {
    //     // document.getElementById('my_modal_3').style.visibility='hidden'
    //     // document.getElementById('my_modal_3').style.display='none'
    //     document.getElementById('my_modal_3').removeAttribute('open')

    //     // document.getElementById('my_modal_3').style.opacity='0'
    // })

    return (

       
       
                <Hero>



                    <div className='bg-[#0B1215] lg:p-20 md:p-20 sm:p-20 max-sm:p-0  min-h-[100vh] max-sm:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%]'>

                        <div className="hero min-h-full lg:w-[100%] md:w-[100%] sm:w-[100%] max-sm:w-[100%]">
                            <form className="hero-content max-sm:w-[100%] flex  items-center lg:flex-row md:flex-col sm:flex-col max-sm:flex-col max-sm:items-center max-sm:justify-center  lg:justify-between">
                                <img src='' className=" h-[90%] sm:w-[100%] max-sm:w-[100%] rounded-lg shadow-2xl" />


                                <div className='w-[50%] sm:w-[100%] max-sm:w-[100%] bg-base-200 p-20 max-sm:p-10 rounded-lg'>
                                   
                                <label className="input input-bordered flex items-center gap-2">
                                        Name
                                        <input type="text" className="grow" name='name' min={1} value='Name' onChange={(e) => { handleSetDurationChange(e) }} />
                                    </label>
                                    <br />


                                    <label className="input input-bordered flex items-center gap-2" name=''>
                                        Email
                                        <input type="text" className="grow" name='email' min={1} value='Email' onChange={(e) => { handleSetDurationChange(e) }} />
                                    </label>
                                    <br />


                                    <label className="input input-bordered flex items-center gap-2" name=''>
                                        Phone
                                        <input type="text" className="grow"  name='phone_no' min={1} value='phone number' onChange={(e) => { handleSetDurationChange(e) }} />
                                    </label>
                                    <br />
                                  

                                    


          

                                </div>
                            </form>
                        </div>
                    </div>




            </Hero>
                
            

                
            
    )
}

export default Profile