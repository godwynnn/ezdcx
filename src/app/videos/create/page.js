"use client"
import React, { useState, useEffect } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { Urls } from "@/app/urls";
import Hero from "@/app/hero";
import { useRouter,redirect } from 'next/navigation'

const url=Urls()

function Create() {
    const router = useRouter()

    const [itemData, setitemData] = useState({})
    const [vidInfo, setvidInfo]=useState('')
    console.log(url.create)

    const sendData=(e)=>{

        
        e.preventDefault()

        const data={'item_Data':itemData,'video_info':vidInfo}
        console.log(data)
        fetch(url.create_video,{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify(data), // body data type must match "Content-Type" header
           
          }).then(res=>res.json())
          .then(data=>console.log('item_Data',data))
              
        
    }

    

    return (

        <>

            <Hero>
                <div className='bg-[#101720]  p-20 flex flex-col justify-center items-center min-h-[100vh] '>

                    <div className="hero h-[90vh] w-[60%] bg-base-200 ">
                        <form className="hero-content text-left p-10 flex flex-col w-[100%]" method="POST" onSubmit={sendData} >
                            <input type="text" placeholder="Title" className="input input-bordered w-[100%]" onChange={(e)=>setitemData({...itemData,'name':e.target.value})}/>
                            <textarea className="textarea textarea-bordered  w-[100%]" placeholder="Description" onChange={(e)=>setitemData({...itemData,'description':e.target.value})}></textarea>
                            <CldUploadWidget uploadPreset="ezfrx_lib" onSuccess={(results, options) => setvidInfo(results.info)} >
                                {({ open }) => {
                                    return (
                                        <button className=" bg-gray-500  text-white rounded-md p-3" onClick={() => open()}  >
                                            Upload Video
                                        </button>

                                    );
                                }}
                            </CldUploadWidget>

                            <select className="select select-bordered w-full max-w-xs align-middle" name='graph' onChange={(e)=>setitemData({...itemData,'package':e.target.value})} >
                                <option disabled selected>Select Package</option>
                                <option value='black_ops'>Black Ops Strategy</option>
                                <option value='mamba' >Mamba Strategy</option>
                                <option value='cheetah'>Cheetah Strategy</option>
                                <option value='titan'>Titan Strategy</option>
                            </select>

                            {/* <textarea className="textarea textarea-bordered  w-[100%]" placeholder="Price details"></textarea> */}

                            <button  className="btn btn-md bg-gray-500  text-white rounded-md" type="submit">Submit</button>

                        </form>
                    </div>

                </div>
            </Hero>
        </>

    )
}

export default Create