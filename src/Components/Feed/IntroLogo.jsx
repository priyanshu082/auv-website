'use client'

import React, { useEffect, useRef,useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import Image from 'next/image'
import machine from "../../../public/machine-img.png"


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
      marginTop:"700px",
      scrollTrigger:{
        // trigger:parentVideoRef.current,
       scrub:2,
        pin:true
      }
    })

    // tl.to(videoRef.current,{
    //   y:"0px",
    //   scale:1.5,
    //   scrollTrigger:{
    //     trigger:videoRef.current,
    //     scrub:true,
    //     pin:true,
    //   }
    // })

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
       <div ref={parentVideoRef} className="absolute h-[100%] w-[100%]" >
        <Image ref={imageRef} src={machine}  className={`image-transition ${isVisible ? 'opacity-0' : 'opacity-100'} absolute`} />
        {isVisible && 
        <video ref={videoRef} autoPlay loop muted src="/Comp_1.mp4" style={{ opacity: isVisible ? 1 : 0 }} className={`video-transition ${isVisible ? 'opacity-100' : 'opacity-0'} absolute`} />}
      </div>
    <div ref={movingText} className='font-poppins gradient-text z-20 text-[11.75vw] flex justify-center mt-[16%] font-extrabold text-center mb-[4.5%]'>
       MTS-AUV ZHCET
      </div>
    </div>
  )
}

export default IntroLogo