"use client"
import React from 'react'


function Navbar() {
    return (

        <div className="navbar  bg-[#101720] text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="text-black menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Homepage</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl">EZDCX</a>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>




                <div className="dropdown dropdown-end text-black">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile

                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>






                <button class="btn btn-outline btn-warning float-right btn-sm " onClick={() => document.getElementById('my_modal_2').showModal()}>Get data</button>



                <dialog id="my_modal_2" className="modal">
                    <form className="modal-box opacity-[90%] items-center justify-center text-black">
                        <label className="input input-bordered flex items-center gap-2 m-8">
                            Ticker Symbol
                            <input type="text" className="grow" placeholder="#" />
                        </label>

                        <label className="input input-bordered flex items-center gap-2 m-8">
                            Interval
                            <input type="text" className="grow" placeholder="#" />
                        </label>

                        <label className="input input-bordered flex items-center gap-2 m-8">
                            Period
                            <input type="text" className="grow" placeholder="#" />
                        </label>

                        <div className="form-control flex flex-row">

                            <label className="cursor-pointer label">
                                <span className="label-text">Gartley</span>
                                <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
                            </label>
                            <label className="cursor-pointer label">
                                <span className="label-text">Butterfly</span>
                                <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
                            </label>
                            <label className="cursor-pointer label">
                                <span className="label-text">Bat</span>
                                <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
                            </label>
                            <label className="cursor-pointer label">
                                <span className="label-text">Crab</span>
                                <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
                            </label>
                            <label className="cursor-pointer label">
                                <span className="label-text">ABCD</span>
                                <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
                            </label>

                        </div><br />

                        <label className="cursor-pointer label flex flex-col">
                            <span className="label-text  ">Bollinger Bands</span>
                            <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
                        </label>

                        <button class="btn btn-active btn-neutral">Submit</button>
                    </form>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>

            </div>
        </div>










    )
}

export default Navbar