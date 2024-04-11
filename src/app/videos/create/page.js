"use client"
import React, { useState, useEffect } from "react";
import { CldUploadWidget } from "next-cloudinary";
import Hero from "@/app/hero";


function Create() {
    const [imgData, setImgData] = useState({})
    console.log(imgData)

    return (

        <>

            <Hero>
                <div className='bg-[#101720]  p-20 flex flex-col justify-center items-center min-h-[100vh] '>

                    <div className="hero h-[90vh] w-[60%] bg-base-200 ">
                        <div className="hero-content text-left p-10 flex flex-col w-[100%]">
                        <input type="text" placeholder="Title" className="input input-bordered w-[100%]" />
                        <textarea className="textarea textarea-bordered  w-[100%]" placeholder="Description"></textarea>
                        <CldUploadWidget uploadPreset="ezfrx_lib" onSuccess={(results, options) => console.log("from cloudinary", results)} >
                                {({ open }) => {
                                    return (
                                        <button className=" bg-gray-500  text-white rounded-md p-3" onClick={() => open()}  >
                                            Upload Video
                                        </button>

                                    );
                                }}
                            </CldUploadWidget>
                        <textarea className="textarea textarea-bordered  w-[100%]" placeholder="Price details"></textarea>
                            
                            <button className="btn btn-md bg-gray-500  text-white rounded-md" type="submit">Submit</button>

                        </div>
                    </div>

                </div>
            </Hero>
        </>

    )
}

export default Create