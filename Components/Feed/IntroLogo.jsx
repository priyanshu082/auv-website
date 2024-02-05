'use cleint'

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import img from "./img/machine-img.png"
import { motion } from 'framer-motion'
import { textVariant,slideUp } from '../../utils/motion'
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
        markers:true,
        start:"10px top",
        end:"+=300px top",
        scrub:2,
      }
    })

    tl.to(main.current,{
      backgroundPositionY:"-900px"
    })

    

    tl.to(movingText.current,{
      y:"-2500px",
      scrollTrigger:{
        scrub:2,
       // markers:true,
        //pin:true,
      }
    })
  })
  return (
    <div 
    ref={main}
    className="bg-Intro h-[100vh] w-[100vw] flex justify-center items-center">
      <div ref={movingText} className='gradient-text mb-[220px] font-poppins text-[170px] z-50 flex justify-center font-extrabold  text-center'>
        MTS-AUV ZHCET
      </div>
    </div>
  )
}

export default IntroLogo