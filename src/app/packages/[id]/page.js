import React from 'react'

function Packages() {
    return (
        <div className='bg_default p-20  min-h-[100vh]'>

            <div className="hero min-h-full w-full">
                <form className="hero-content w-full flex-col lg:flex-row lg:justify-between">
                    <img src="https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg" className=" h-[90%] max-w-lg rounded-lg shadow-2xl" />
                    
                    
                    <div className='w-[50%] bg-base-200 p-20 rounded-lg'>
                        <h1 className="text-5xl font-bold">Level1</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem</p>

                        <br />

                        <label className="input input-bordered flex items-center gap-2">
                            Duration
                            <input type="number" className="grow" placeholder="Duration" name='duration' min={1} />
                        </label>
                        <br />


                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Interval?</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                        <br />



                        <button className="btn btn-primary mt-5" type='submit'>Proceed</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Packages