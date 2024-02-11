'use client'

import React, { useEffect, useRef,useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import Image from 'next/image'
import machine from "../../../public/machine-img.png"
import BlinkingCursor from './Blinking'


gsap.registerPlugin(ScrollTrigger)


const IntroLogo = () => {

  const main =useRef(null)
  const movingText =useRef(null)
  const imageRef=useRef(null)
  const videoRef=useRef(null)
  const parentVideoRef=useRef(null)

  const [isVisible, setIsVisible] = useState(false)



  useEffect(()=>{

    var tl=gsap.timeline({
      scrollTrigger:{
        trigger:main.current,
        //markers:true,
        start:"50px top",
        end:"+=800px top",
        scrub:true,
        toggleActions:'play reverse play reverse',
        onEnter:()=> setIsVisible(true),
        onLeaveBack:()=>setIsVisible(false),
      }
    })

    tl.to(parentVideoRef.current,{
      width:"48%",
      y:"134vh",
      x:"-18vw",
      scrollTrigger:{
      trigger:main.current,
      toggleActions: 'play reverse play reverse',
      start:"50px top",
      end:"+=900px top",
      //markers:true,
     scrub:2,
      }
    },"anim")

    tl.to(movingText.current,{
      opacity:0,
      y:"20%",
      scale:2,
     
      scrollTrigger:{
         scrub:4,
        //markers:true,
        start:"top top",
        end:"+=250px top",
    
      }
    },"anim")

    
  },[])

 
  return (
    <div 
    ref={main}
    className="h-[100vh] w-[100vw] flex justify-center">
       <div ref={parentVideoRef} className="absolute h-[100%] w-[100%] md:mt-[-1.5%]" >
        <Image ref={imageRef} src={machine}  className={`image-transition ${isVisible ? 'opacity-0' : 'opacity-100'} absolute md:mt-[0.5%] sm:mt-[26%] mt-[36%]`} />
        
        {isVisible && 
        <video ref={videoRef} autoPlay loop muted src="/Comp_1.mp4" style={{ opacity: isVisible ? 1 : 0 }} className={`video-transition ${isVisible ? 'opacity-100' : 'opacity-0'} absolute md:mt-[0%] sm:mt-[30%] mt-[36%]`} />
        }
      </div>
    <div  className='font-poppins z-20 text-[9vw] flex justify-center mt-[54%] sm:mt-[44%] md:mt-[17%] font-bold '>
      <p ref={movingText} className='ml-[2vw] cursor-pointer h-fit text-[white] gradient-text text'>
      MTS-AUV ZHCET
      </p>
      </div>
    </div>
  )
}

export default IntroLogo


// gradient-text text transition-tracking duration-300 ease-in-out



