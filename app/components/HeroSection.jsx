import React from 'react'
import KeyCard from './KeyCard'

const HeroSection = () => {
    return (
       <>
          <div className='w-screen min-h-[80vh] flex justify-between flex-wrap md:flex-row flex-col-reverse'>
            <div className=' w-full sm:w-1/2  bg-black px-8 flex items-start justify-center flex-col gap-6'>
                <h2 className='capitalize font-bold text-5xl text-start tracking-wide'>learn MERN full stack with AI power within 7 months...</h2>
                <div className=' px-2min-w-[200px] px-3 font-medium h-[45px] bg-gray-700 rounded-md flex items-center justify-center'>Start from : 23/10/2004</div>
                <div className='text-4xl font-bold'>Fee <span className='text-blue-500'> ₹ 2000</span></div>
                <div className='bg-blue-500  px-4 text-3xl font-bold py-2 rounded-md'>Register Now</div>
            </div>
            <div className='w-screen  sm:w-1/2 h-[50vh] md:min-h-[70vh] sm:h-full flex items-center justify-center'>
                <div className='h-[85%] w-[85%] bg-gray-900 md:h-[50vh] overflow-hidden rounded-md '>
                    <iframe
                        height="100%"
                        width="100%"
                        src="https://www.youtube.com/embed/Zp3obYGJZNE?si=a9iqj8FGiVijMlLJ"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>

         {/* after hero section */}

         <div className='w-screen min-h-[90vh] mt-10  px-7 flex  justify-center flex-col'>
              <span className=' capitalize text-7xl sm:text-8xl  font-bold text-blue-500'>{"There, we go basics to advance ".split(" ")[0]}</span>
              <span className=' capitalize text-7xl sm:text-8xl  font-bold inline-block ml-3'>{"There we go basics to advance".split(" ").slice(1).join(" ")}</span>
              <div className='text-5xl sm:text-6xl text-gray-500 text-center'>zero to hero...</div>
         </div>

         <div className='px-7'>
            <div className='capitalize text-6xl sm:text-6xl  ml-3 mb-12'>lets know the points <span className='text-blue-500'>...</span></div>
            <KeyCard/>
            <KeyCard/>
            <KeyCard/>
            <KeyCard/>
            <KeyCard/>
            <KeyCard/>
            <KeyCard/>

         </div>
       </>
    )
}

export default HeroSection