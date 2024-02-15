'use client'

import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='bg-black'>

    <div className='pt-[40px] w-[90vw] mx-auto'>
        {/* heading and video */}
        <div className=''>
            <div className='text-[6vw] text-primary text-center font-poppins font-medium tracking-widest my-[10vh]'>
                HEading of live project
            </div>

            <div className='w-[100%] h-[80vh] mx-auto overflow-hidden rounded-3xl' >
            <video src='/resberry.mp4' loop muted autoPlay className='w-[100%]'/>
            </div>

        </div>

        {/* images */}
        <div>

        </div>
    </div>
    </div>
  )
}

export default page