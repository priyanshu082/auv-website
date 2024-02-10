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
        start:"10px top",
        end:"+=200px top",
        toggleActions: 'play reverse play reverse',
        onEnter:()=> setIsVisible(true),
        onLeaveBack:()=>setIsVisible(false),
      }
    })

    tl.to(parentVideoRef.current,{
      marginTop:"1100px",
      width:"50%",
      x:"-25vw",
      scrollTrigger:{
       scrub:true,
       pin:true
      }
    })

  

    tl.to(movingText.current,{
      opacity:0,
      y:"-100px",
      scrollTrigger:{
        scrub:2,
        //markers:true,
        start:"top top",
        end:"+=150px top",
       // toggleActions: 'play reverse play reverse',
      }
    })

    
  },[])

 
  return (
    <div 
    ref={main}
    className="h-[100vh] w-[100vw] flex justify-center">
       <div ref={parentVideoRef} className="absolute h-[100%] w-[100%] md:mt-[-2vh] " >
        <Image ref={imageRef} src={machine}  className={`image-transition ${isVisible ? 'opacity-0' : 'opacity-100'} absolute md:mt-[0%] sm:mt-[30%] mt-[36%]`} />
        {isVisible && 
        <video ref={videoRef} autoPlay loop muted src="/Comp_1.mp4" style={{ opacity: isVisible ? 1 : 0 }} className={`video-transition ${isVisible ? 'opacity-100' : 'opacity-0'} absolute`} />}
      </div>
    <div ref={movingText} className='font-poppins gradient-text z-20 text-[9vw] flex justify-center mt-[50%] sm:mt-[45.5%] md:mt-[17%] font-extrabold text-center '>
      <p className='ml-[4vw] cursor-pointer transition-all duration-200 hover:tracking-[0.5vw] h-[20vh]'>
      <span className='text'>MTS </span><span className='text'>-</span><span className='text'>AUV </span><span className='text'>ZHCET</span>
      </p>
       
      </div>
    </div>
  )
}

export default IntroLogo




