"use client"
import React from 'react'
import Hero from '../hero'
import ReactPlayer from 'react-player'

function page() {
    return (
        <>
            <Hero>
                <div className='bg-[#101720]  p-20 grid gap-3 lg:grid-cols-3 min-h-[100vh] md:grid-cols-2'>

                    <div className="card card-compact w-[100%] h-[60%] bg-base-100 shadow-xl" onClick={() => document.getElementById('my_modal_3').showModal()}>
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>

                        </div>
                    </div>


                    <div className="card card-compact w-[100%] h-[60%] bg-base-100 shadow-xl" onClick={() => document.getElementById('my_modal_3').showModal()}>
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>

                        </div>
                    </div>



                    <div className="card card-compact w-[100%] h-[60%] bg-base-100 shadow-xl" onClick={() => document.getElementById('my_modal_3').showModal()}>
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>

                        </div>
                    </div>

                </div>
            </Hero>

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box w-11/12 max-w-5xl h-[70vh] flex justify-center items-center">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                  
                    <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' width={'90%'} height={'100%'} className='mt-0' />
                    
                
                </div>

                <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
            </dialog>
        </>
    )
}

export default page