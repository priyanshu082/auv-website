'use cleint'

import Image from 'next/image'
import React from 'react'
import img from "./img/machine-img.png"

const IntroLogo = () => {
  return (
    <div className="bg-Intro h-[100vh] w-[100vw] mb-[200px]" >
      {/* <Image src={img} height={"100%"} width={"1000%"} className='absolute z-10' /> */}

      <div className='text-white font-poppins text-[170px] z-50 flex justify-center font-extrabold  h-full pt-[200px] '>
        MTS-AUV ZHCET
      </div>
    </div>
  )
}

export default IntroLogo