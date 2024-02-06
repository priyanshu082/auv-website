'use client'

import React,{useEffect} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'




gsap.registerPlugin(ScrollTrigger)



const page = () => {


  

  /*useEffect(()=>{

        gsap.to(page2.current,{
          scrollTrigger:{
            trigger:mainPage2.current,
            scrub:3,
            //markers:true,
            start:'top 80%',
            end:'bottom 0%',
            toggleActions: 'play reverse play reverse',
            // pin:true,
          },
          scale:2,
           y:"200px",
          alignItems:"center",
        })
        gsap.to(page2.current,{
          scrollTrigger:{
            trigger:page2.current,
            scrub:3,
           // markers:true,
            start:'top 0%',
            end:'1000px 0%',
            toggleActions: 'play reverse play reverse',
             pin:true,
             pinSpacing:false,
          },
        })
  },[])*/


  
  return (
    

    <div className='scroll-video pt-[400px]'>

     
       {/* <div  data-scroll className=' flex space-x-10 flex-row justify-center items-center page1 w-full h-[100vh] bg-blue-200'>

        <h1 data-scroll data-scroll-speed="10"  className='bg-black p-[20px]'>page1</h1>
        <h1 data-scroll data-scroll-speed="-10"  className='bg-white p-[20px]'>page2</h1>
      </div>
    
      

   
      <div  ref={mainPage2}  className=' flex flex-col justify-center w-full bg-blue-400 rounded-[100px] h-[100vh]'>
       <video  ref={page2} src='/video2.mp4' className='absolute h-[100px]'/>
       <div className='z-20 relative mb-[100px] text-[50px] text-white'>
          AUV
        </div>
        <div className='z-20 relative mb-[100px] text-[50px] text-white'>
          AUV
        </div>
        <div className='z-20 relative mb-[100px] text-[50px] text-white'>
          AUV
        </div>
        <div className='z-20 relative mb-[100px] text-[50px] text-white'>
          AUV
        </div>
        <div className='z-20 relative mb-[100px] text-[50px] text-white'>
          AUV
        </div>
        <div className='z-20 relative mb-[100px] text-[50px] text-white'>
          AUV
        </div>
        <div className='z-20 relative mb-[100px] text-[50px] text-white'>
          AUV
        </div>
        <div className='z-20 relative mb-[100px] text-[50px] text-white'>
          AUV
        </div>
        <div className='z-20 relative mb-[100px] text-[50px] text-white'>
          AUV
        </div>
        <div className='z-20 relative mb-[100px] text-[50px] text-white'>
          AUV
        </div>
        <div className='z-20 relative mb-[100px] text-[50px] text-white'>
          AUV
        </div>
        <div className='z-20 relative mb-[100px] text-[50px] text-white'>
          AUV
        </div>
      </div>

      <div data-scroll className='flex justify-center items-center page3 h-[100vh] w-1/2 bg-yellow-500'>
      page 3
      </div> */}

    </div>

  )
}

export default page