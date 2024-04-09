"use client"
import Image from "next/image";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import Hero from "./hero";


export default function Home() {

  const authData = useSelector(state => state.reducer.authreducer)
  console.log(authData)

  useLayoutEffect(() => {

    if (authData.logged_in) {
      redirect('/dashboard')
    }

  }, [])
  return (
    <>
      <Hero>
        <main className=" min-h-[100vh] w-[100%]">

          <header className="w-[100%] h-[90vh] flex lg:flex-row bg-[#101720]"   >
            <section className="h-full w-[60%] text-white flex flex-col justify-center p-[5%] header_caption "  >
              <p className=" text-[80px]">Explore the World of Forex Trading</p>
              {/* <p className="text-[15px]">Gain a competitive edge with our cutting-edge trading signals designed to guide you towards success in the currency markets.</p> */}

            </section>
            <section className="h-full w-[40%]  relative">
              {/* <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    <defs>                         <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" stop-color="rgba(212.951, 212.951, 212.951, 1)" offset="0%"></stop>                            <stop id="stop2" stop-color="rgba(237.995, 235.936, 232.537, 1)" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient)" d="M28,-32.5C35.8,-26.9,41.1,-17.5,42.9,-7.6C44.6,2.4,42.8,13.1,37.9,22.1C32.9,31.2,24.9,38.6,16.7,38.4C8.5,38.3,0.1,30.4,-9.8,26.8C-19.7,23.2,-31.1,23.9,-35.4,19.2C-39.6,14.4,-36.6,4.2,-32.4,-3.3C-28.2,-10.9,-22.8,-15.8,-17.2,-21.8C-11.6,-27.9,-5.8,-34.9,2.2,-37.5C10.1,-40.1,20.3,-38.2,28,-32.5Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style={{ transition: ' all 0.3s ease 0s;' }} stroke="url(#sw-gradient)"></path>              </svg> */}
              <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    <defs>                         <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" stop-color="rgba(212.951, 212.951, 212.951, 1)" offset="0%"></stop>                            <stop id="stop2" stop-color="rgba(237.995, 235.936, 232.537, 1)" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient)" d="M23.5,-24.7C29.6,-22.9,33.1,-14.7,32.7,-7.2C32.3,0.3,28,7,22.9,10.6C17.7,14.2,11.6,14.6,4.9,19.7C-1.7,24.9,-9,34.7,-16.4,35.9C-23.8,37.2,-31.4,29.8,-34.2,21.5C-36.9,13.1,-34.9,3.7,-29.7,-1.7C-24.5,-7,-16.2,-8.2,-10.8,-10.1C-5.3,-12,-2.6,-14.6,3,-18.2C8.7,-21.8,17.4,-26.5,23.5,-24.7Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style={{ transition: 'all 0.3s ease 0s;' }} stroke="url(#sw-gradient)"></path>              </svg>

              <Image src={require('../../assets/img.png')} className="w-[70%] absolute top-[5%] right-[30%]" />
            </section>



            <div class="wave1">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
              </svg>
            </div>
          </header>

          <section className="w-[100%] h-[100vh] bg-[#0B1215]">
            

          </section>

        </main>
      </Hero>
    </>
  )
}
