'use client'

import React,{useEffect, useRef} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LocomotiveScroll from 'locomotive-scroll'

gsap.registerPlugin(ScrollTrigger)



const page = () => {

  const div2=useRef(null);
  const main=useRef(null);

  useEffect(()=>{

  
      const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
         smooth: true,
      });


        const dive=div2.current
      
         gsap.to(main.current,{
           backgroundColor:"black",
          //  height:"200%",
           scrollTrigger:{
             trigger:main.current,
             start:'20% top',
             //  end:'bottom 80%',
             toggleActions: 'play reverse play reverse',
           }
         }),
         gsap.to(dive,{
          
          delay:0.5,
          duration:1,
           scrollTrigger:{
             trigger:main.current,
             start:'20% top',
             //  end:'bottom 80%',
             toggleActions: 'play reverse play reverse',
             onUpdate: (self) => {
              // Adjust width and height based on the scroll position
              const progress = self.progress; // Range from 0 to 1
              const newWidth = `${100 - progress * 60}%`; // Adjust the values as needed
              const newHeight = `${100 - progress * 60}vh`; // Adjust the values as needed
              
              gsap.set(dive, {
                width: newWidth,
                height: newHeight,
              });
            },
           }
         })

  },[])

  return (
    <div ref={main} data-scroll-container  className='main flex flex-col justify-center items-center'>

      <div data-scroll  data-scroll-css-progress="0.5"  className=' flex space-x-10 flex-row justify-center items-center page1 w-full h-[100vh] bg-blue-200'>

        <h1 data-scroll data-scroll-speed="-0.1" className='bg-black p-[20px]'>page1</h1>
        <h1 data-scroll data-scroll-speed="0.1"  className='bg-white p-[20px]'>page2</h1>
      </div>

      <div data-scroll ref={div2} className=' flex justify-center items-center w-full h-vh bg-blue-400 rounded-[100px]'>
        page 2
      </div>

      <div data-scroll className='flex justify-center items-center page3 h-[100vh] w-1/2 bg-yellow-500'>
      page 3
      </div>

    </div>
  )
}

export default page