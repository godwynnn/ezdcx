"use client"
import React, { useState, useEffect } from "react";
import { CldUploadWidget } from "next-cloudinary";


  
function Create() {
    const [imgData,setImgData]=useState({})
    console.log(imgData)

    return (
       
            <CldUploadWidget uploadPreset="ezfrx_lib" onUploadAdded={({results})=>console.log("from cloudinary",results.info.file)}>
                {({ open,results }) => {
                    return (
                        <button onClick={() => open()} >
                            Upload an Image
                        </button>
                        
                    );
                }}
            </CldUploadWidget>
        
    )
}

export default Create