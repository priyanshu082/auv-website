'use client'
import { useEffect, useRef } from 'react'
 import About from '../Components/Feed/About'
// import IEEEAMU from '@/Components/Feed/IEEEAMU'
// import IEEEClubs from '@/Components/Feed/IEEEClubs'
// import Message from '@/Components/Feed/Message'
// import Mission from '@/Components/Feed/Mission'
import Navbar from '../Components/Navbar/Navbar'
import IntroVideo from '../Components/Feed/IntroVideo'
import { motion } from 'framer-motion'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
// import { ScrollSmoother } from "gsap/ScrollSmoother";
// import { ScrollToTarget } from 'locomotive-scroll'




 gsap.registerPlugin(ScrollTrigger);
export default function Home() {

  const div=useRef(null)
  const main=useRef(null)

  

 useEffect(()=>{
  const dive=div.current

   gsap.to(main.current,{
     backgroundColor:"black",
     height:"200%",
     scrollTrigger:{
       trigger:main.current,
       start:'20% top',
       //  end:'bottom 80%',
       toggleActions: 'play reverse play reverse',
     }
   })
   
  //  gsap.to(dive,{
    
  //    scrollTrigger:{
  //      trigger:dive,
  //      start:'20% top',
  //      end:'+=300',
  //      markers:true,
  //      pin:true,
  //      pinSpacing:false,
  //      toggleActions: 'play reverse play reverse',
  //    }
  //  }
  //  )
   
 },[]);

 

  return (
    <motion.div ref={main} className='bg-white h-full'>
      <div className='pl-[40px]'>
      <Navbar/>
      <About/>
     <div ref={div} className='flex justify-center items-center h-[1000px]'>
    <IntroVideo />
     </div>
      </div>
    </motion.div>
  )
}
