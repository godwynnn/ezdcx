 import React from 'react'
 
 function Packages() {
   return (
     <div className='bg_default p-20 grid grid-cols-3'>

        <div className="card w-96 bg-[#0B1215] text-white shadow-xl">
               <figure><img src="https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg" alt="Shoes" /></figure>
               <div className="card-body">
                   <h2 className="card-title">Level 1</h2>
                   <p>If a dog chews shoes whose shoes does he choose?</p>
                   <div className="card-actions justify-end">
                       <button className="btn btn-primary">Buy Now</button>
                   </div>
               </div>
           </div>


           <div className="card w-96 bg-[#0B1215] text-white shadow-xl">
               <figure><img src="https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg" alt="Shoes" /></figure>
               <div className="card-body">
                   <h2 className="card-title">Level 2</h2>
                   <p>If a dog chews shoes whose shoes does he choose?</p>
                   <div className="card-actions justify-end">
                       <button className="btn btn-primary">Buy Now</button>
                   </div>
               </div>
           </div>


           <div className="card w-96 bg-[#0B1215] text-white shadow-xl">
               <figure><img src="https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg" alt="Shoes" /></figure>
               <div className="card-body">
                   <h2 className="card-title">Level 3</h2>
                   <p>If a dog chews shoes whose shoes does he choose?</p>
                   <div className="card-actions justify-end">
                       <button className="btn btn-primary">Buy Now</button>
                   </div>
               </div>
           </div>

     </div>
   )
 }
 
 export default Packages