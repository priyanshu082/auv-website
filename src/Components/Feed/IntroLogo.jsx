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
       scrub:true,
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
      y:"-700px",
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
        <video ref={videoRef} autoPlay loop muted src="/Comp_1.mp4" style={{ opacity: isVisible ? 1 : 0 }} className={`video-transition ${isVisible ? 'opacity-100' : 'opacity-0'} absolute`} />
        
        }
      </div>
      {/* {!isVisible &&
      <Image ref={imageRef} src={machine}  width="100%" height="100%" className='absolute'/>
      }
    {isVisible && 
      <video ref={videoRef} autoPlay loop muted src="/Comp_1.mp4" style={{opacity:1}}  width="100%" height="100%" className='absolute z-2'/>
    } */}
    <div ref={movingText} className='mt-[29vh] font-poppins z-20 text-[11.75vw] flex justify-center font-extrabold text-center'>
        <p className='gradient-text'> MTS-AUV ZHCET</p>
      </div>
    </div>
  )
}

export default IntroLogo