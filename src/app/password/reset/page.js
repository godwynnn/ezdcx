import React from 'react'
import Hero from '@/app/hero'

function page() {
  return (
    <Hero>



            <div className='bg-[#0B1215] lg:p-20 md:p-20 sm:p-20 max-sm:p-0  min-h-[100vh] max-sm:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%]'>

                <div className=" min-h-full lg:w-[100%] md:w-[100%] sm:w-[100%] max-sm:w-[100%]">
                    <form className="hero-content max-sm:w-[100%] flex  items-center lg:flex-row md:flex-col sm:flex-col max-sm:flex-col max-sm:items-center max-sm:justify-center  lg:justify-center">


                        <div className='lg:w-[50%] sm:w-[100%] max-sm:w-[100%] bg-base-200 p-20 max-sm:p-10 rounded-lg flex flex-col justify-center items-center'>

                            <label className="input input-bordered flex items-center gap-2 w-[100%]">
                            Email
                                <input type="email" className="grow w-[100%]" />
                            </label>
                            <br />

                            <button class="btn btn-neutral mt-5" type='submit'>Signup</button>



                        </div>
                    </form>
                </div>
            </div>




        </Hero>
  )
}

export default page