import React, { useEffect, useState } from 'react'
import { Urls } from '@/app/urls'

const url = Urls()

function Rates() {

  const [tickerData,setTickerData]=useState('btc')

  async function getTickerData() {
    const res = await fetch(url.ticker, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/form-data',
      },
      body: JSON.stringify({'q':tickerData})
    })
    const data = await res.json()

    console.log('ticker data', data)


  }

 
  useEffect(() => {
    if (tickerData ===''){
      setTickerData('btc')
    }
    getTickerData()
  }, [tickerData])


  return (
    <div className={'w-full h-[100%] bg-[#101720] p-5'}>

      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className={'grow'} placeholder="Search" onChange={e=>setTickerData(e.target.value)}/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
      </label>

      <div className=' mt-10 w-[90%] h-[70%] overflow-x-scroll bg-[#0B1215] p-0 relative flex flex-row '>

        <div className='min-w-[40%] h-[100%]  bg-[#0B1215] sticky flex flex-col left-0 top-0  ' style={{ borderRight: '1px solid white' }}>
          <div className='w-full h-[10%] p-2 flex justify-center items-center ' style={{ borderBottom: '1px solid white' }}>
            <p className=' text-white text-lg'>hello</p>
          </div>



        </div>

        <div className='min-w-[200%] h-[100%]  bg-[#0B1215] float-right'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint optio earum maiores dolor voluptatem dolore voluptate vitae repellat adipisci, assumenda, ab officiis est aut necessitatibus accusamus beatae. Mollitia, officiis placeat.
        </div>
      </div>



    </div>
  )
}

export default Rates