"use client"
import React, { useState } from 'react'
import Hero from '../hero'
import ReactPlayer from 'react-player'

function page() {

    const [playing,setPlaying]=useState(false)
    return (
        <>
            <Hero>
                <div className='bg-[#101720]  p-20 grid gap-3 lg:grid-cols-3 min-h-[100vh] md:grid-cols-2'>

                    <div className="card card-compact w-[100%] lg:h-[60%] md:h-[90%] sm:h-[90%] max-sm:h-[100%] shadow-xl bg-[#0B1215] text-white " onClick={() =>{ document.getElementById('my_modal_3').showModal();setPlaying(true)}}>
                        {/* <figure className='h-[70%]'><ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' width={'100%'} height={'100%'} className='mt-0' playing={playing} muted/></figure> */}
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>

                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>

                        </div>
                    </div>


                    <div className="card card-compact w-[100%] lg:h-[60%] md:h-[90%] sm:h-[90%] max-sm:h-[100%] shadow-xl bg-[#0B1215] text-white " onClick={() =>{ document.getElementById('my_modal_3').showModal();setPlaying(true)}}>
                        {/* <figure className='h-[70%]'><ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' width={'100%'} height={'100%'} className='mt-0' playing={playing} muted/></figure> */}
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>

                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>

                        </div>
                    </div>


                    <div className="card card-compact w-[100%] lg:h-[60%] md:h-[90%] sm:h-[90%] max-sm:h-[100%] shadow-xl bg-[#0B1215] text-white " onClick={() =>{ document.getElementById('my_modal_3').showModal();setPlaying(true)}}>
                        {/* <figure className='h-[70%]'><ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' width={'100%'} height={'100%'} className='mt-0' playing={playing} muted/></figure> */}
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>

                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>

                        </div>
                    </div>


                </div>
            </Hero>

            <dialog id="my_modal_3" className="modal z-[1000]">
                <div className="modal-box w-11/12 max-w-5xl h-[70vh] flex justify-center items-center bg-[#0B1215]  ">
                    <form method="dialog"onClick={()=>setPlaying(false)}>
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white">✕</button>
                    </form>
                  
                    <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' width={'90%'} height={'100%'} className='mt-0' playing={playing} controls/>
                    
                
                </div>

                <form method="dialog" className="modal-backdrop" onClick={()=>setPlaying(false)}>
                        <button>close</button>
                    </form>
            </dialog>
        </>
    )
}

export default page