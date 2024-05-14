import React from 'react'
import Hero from '@/app/hero'
import { faRemove } from '@fortawesome/free-solid-svg-icons'

function AdminDashboard() {
    return (
        <>
            <Hero>
                <div className='bg-[#0B1215] p-10  min-h-[100vh] w-full'>

                    <div className='w-[100%] min-h-[20%] grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 place-items-center  max-sm:grid-cols-1 gap-4'>
                        <div className="card lg:w-[100%] md:w-[100%] sm:w-[100%] max-sm:w-[80%] bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Total Active Users</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                </div>
                            </div>
                        </div>


                        <div className="card lg:w-[100%] md:w-[100%] sm:w-[100%] max-sm:w-[80%] bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Total Active Users</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                </div>
                            </div>
                        </div>

                        <div className="card lg:w-[100%] md:w-[100%] sm:w-[100%] max-sm:w-[80%] bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Total Active Users</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                </div>
                            </div>
                        </div>

                        <div className="card lg:w-[100%] md:w-[100%] sm:w-[100%] max-sm:w-[80%] bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Total Active Users</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                </div>
                            </div>
                        </div>
                    </div>

                    <br /><br />
                    <label class="input input-bordered flex items-center lg:w-[40%] md:w-[50%] sm:w-[60%] gap-2">
                        <input type="text" class="grow" placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
                    </label>


                    <div className='w-[100%] min-h-[80%] bg-slate-200  rounded-lg mt-10'>
                        <div className="overflow-x-auto overflow-y-scroll  h-[70vh] ">
                            <table className="table max-sm:w-[100%] table-auto">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>

                                        </th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">Hart Hagerty</div>
                                                    <div className="text-sm opacity-50">United States</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Zemlak, Daniel and Leannon
                                            <br />
                                            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                        </td>
                                        <td>Purple</td>
                                        <th>
                                            <details className="dropdown">
                                                <summary className="btn btn-ghost btn-xs">details</summary>
                                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                                    <li><a>Admin invite</a></li>
                                                
                                                </ul>
                                            </details>
                                        </th>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src="/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">Brice Swyre</div>
                                                    <div className="text-sm opacity-50">China</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Carroll Group
                                            <br />
                                            <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                                        </td>
                                        <td>Red</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">details</button>
                                        </th>
                                    </tr>
                                    {/* row 3 */}
                                    <tr>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src="/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">Marjy Ferencz</div>
                                                    <div className="text-sm opacity-50">Russia</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Rowe-Schoen
                                            <br />
                                            <span className="badge badge-ghost badge-sm">Office Assistant I</span>
                                        </td>
                                        <td>Crimson</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">details</button>
                                        </th>
                                    </tr>
                                    {/* row 4 */}
                                    <tr>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">Yancy Tear</div>
                                                    <div className="text-sm opacity-50">Brazil</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Wyman-Ledner
                                            <br />
                                            <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                                        </td>
                                        <td>Indigo</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">details</button>
                                        </th>
                                    </tr>
                                </tbody>


                            </table>
                        </div>
                    </div>



                </div>
            </Hero>
        </>
    )
}

export default AdminDashboard