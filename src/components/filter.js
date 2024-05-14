import React from 'react'

function Filter() {
    return (
        <>


            {/* SELECT CHECKBOX FEATURE */}
            {/* 
            <div className="dropdown dropdown-end">

                <div tabIndex={0} role="button" className="btn m-1 font-extrabold  translate-y-[35%]">+</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu  shadow bg-base-100 rounded-box w-52 p-3">
                    <li className='flex flex-row justify-between'>
                        <span className="label-text">Gartley</span>
                        <input type="checkbox" className="checkbox checkbox-success" />
                    </li>


                    <li className='flex flex-row justify-between'>
                        <span className="label-text">Butterfly</span>
                        <input type="checkbox" className="checkbox checkbox-success" />
                    </li>

                    <li className='flex flex-row justify-between'>
                        <span className="label-text">Bat</span>
                        <input type="checkbox" className="checkbox checkbox-success" />
                    </li>


                    <li className='flex flex-row justify-between'>
                        <span className="label-text">Crab</span>
                        <input type="checkbox" className="checkbox checkbox-success" />
                    </li>

                    <li className='flex flex-row justify-between'>
                        <span className="label-text">ABCD</span>
                        <input type="checkbox" className="checkbox checkbox-success" />
                    </li>

                    <li className='flex flex-row justify-between'>
                        <span className="label-text">Bollinger-Bands</span>
                        <input type="checkbox" className="checkbox checkbox-success" />
                    </li>
                </ul>
            </div> */}


            <label className="form-control w-[80%] max-w-xs">
                <div className="label">
                    <span className="label-text text-white">Select Interval?</span>

                </div>
                <select className="select select-bordered text-white bg-[#101720] w-full border-slate-100 max-w-xs">
                    {/* <option disabled selected>Select Interval</option> */}
                    <option value='m'>Minutes</option>
                    <option value='h'>Hours</option>
                    <option value='d'>Days</option>
                    <option value='w'>Weeks</option>
                </select>
            </label>



            <label className="form-control w-[80%] max-w-xs">
                <div className="label">
                    <span className="label-text text-white">interval?</span>

                </div>
                <input type="text" placeholder="Type here" className="input border-slate-100 text-white  w-[100%] max-w-xs bg-transparent" />

            </label>


            <label className="form-control w-[80%] max-w-xs">
                <div className="label">
                    <span className="label-text text-white">Select Period?</span>

                </div>
                <select className="select select-bordered text-white bg-[#101720] w-full border-slate-100 max-w-xs">
                    {/* <option disabled selected>Select Period?</option> */}
                    <option value='m'>Minutes</option>
                    <option value='h'>Hours</option>
                    <option value='d'>Days</option>
                    <option value='w'>Weeks</option>
                </select>
            </label>



            <label className="form-control w-[80%] max-w-xs">
                <div className="label">
                    <span className="label-text text-white">Period?</span>

                </div>
                <input type="text" placeholder="Type here" className="input border-slate-100 text-white  w-[100%] max-w-xs bg-transparent" />

            </label>


            <button class="btn btn-active btn-neutral translate-y-[40%]" type='submit'>Submit</button>


        </>
    )
}

export default Filter