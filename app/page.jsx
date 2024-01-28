'use client'
import { useEffect, useRef } from 'react'
 import About from '../Components/Feed/About'
// import IEEEAMU from '@/Components/Feed/IEEEAMU'
// import IEEEClubs from '@/Components/Feed/IEEEClubs'
// import Message from '@/Components/Feed/Message'
// import Mission from '@/Components/Feed/Mission'
import IntroVideo from '../Components/Feed/IntroVideo'
import { motion } from 'framer-motion'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)
export default function Home() {

  const div=useRef(null)
  const main=useRef(null)

  useEffect(()=>{
    const dive=div.current

    gsap.to(dive,{
      backgroundColor:"black",
      scrollTrigger:{
        trigger:dive,
        start:'top 20%',
        end:'bottom 80%',
        markers:true,
      }
    })
  },[])
  return (
    <motion.div ref={main} className='bg-primary' >
     <About/>
     <div ref={div} className='flex justify-center items-center h-[800px] mt-[300px]'>
    <IntroVideo />
     </div>
    </motion.div>
  )
}
