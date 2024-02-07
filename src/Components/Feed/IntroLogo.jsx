'use client'

import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)


const IntroLogo = () => {

  const main =useRef(null)
  const movingText =useRef(null)

  useEffect(()=>{

    const tl=gsap.timeline({
      scrollTrigger:{
        trigger:main.current,
        //markers:true,
        start:"10px top",
        end:"+=300px top",
        scrub:2,
        //pin:true,
        //toggleActions:'play reverse play reverse',
      }
    })

    tl.to(main.current,{
      backgroundPositionY:"-800px"
    })

    

    tl.to(movingText.current,{
      y:"-2500px",
      scrollTrigger:{
        scrub:2,
        //markers:true,
       // toggleActions: 'play reverse play reverse',
      }
    })
  })
  return (
    <div 
    ref={main}
    className="bg-Intro h-[100vh] w-[100vw] flex justify-center items-center">
      <div ref={movingText} className='gradient-text mb-[240px] font-poppins text-[80px] md:text-[170px] z-50 flex justify-center font-extrabold text-center'>
        MTS-AUV ZHCET
      </div>
    </div>
  )
}

export default IntroLogo