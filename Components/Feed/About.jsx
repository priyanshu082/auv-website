'use client'
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { lightSpeedIn, slideUp, textVariant } from '../../utils/motion'
import Image from 'next/image'
import ghost from './img/ghost-img.png'
// import BlinkingCursor from './Blinking'
import SectionWrapper from '../../HOC/SectionWrapper'
// import { data } from '../TEAM/ieeestbmembers'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import LocomotiveScroll from 'locomotive-scroll';



 const About = () => {
  

 
    
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });
  }, []);
    
  

  return (
    <motion.div
      variants={textVariant(1)}
      className='flex flex-col lg:flex-row font-poppins mt-[50px]'
      data-scroll-container
      >

      <motion.div  
      data-scroll data-scroll-speed="0.1"
      className=' lg:w-8/12'>
        <div className=' text-[30px] md:text-[40px] w-fit rounded-3xl pl-[10px] pr-[20px] md:pl-[10px]'>
          <span className=' text-black font-extrabold font-poppins '>About</span>
          <span className=' text-black font-extrabold'>  AUV</span>
          {/* <BlinkingCursor /> */}
        </div>

        <div className='text-black flex flex-col gap-3 mt-[20px] text-[19px] pl-[10px] font-poppins'>
          <p>
          A group of dedicated students of Zakir Husain College of Engineering & Technology have been working on Autonomous Underwater Vehicles for the past 5 years. Now it is upon our shoulders to carry their mission forward. We have created the students chapter Autonomous Underwater Vehicle- Zakir Husain College of Engineering & Technology (AUV-ZHCET) which will give us the platform we need. Our club gives aspiring engineers an opportunity to explore the depths of the oceans and the fields of mechanical, electronics and computer engineering. The students will learns the skills of underwater robotics and Artificial Intelligence. We have won a few competitions and received a lot of appreciation for our designs in particular. We are targeting several other competions nationally and internationally like SAVe, SAUVC and ROBOSUB. To design and fabricate the AUV we have formed 4 multidisciplinary teams - working on the same goal.
          </p>
          
        </div>

      </motion.div>


      <motion.div
      data-scroll data-scroll-speed="0.1"
        variants={slideUp(1.5, 1)}
        className='shadow-container flex flex-1 flex-col pt-[10px]'>
        <Image className='floating-img my-[0px] mx-[auto]' src={ghost} height={400} width={400} />
        <div className='shadow-img my-[0px] mx-[auto] w-[210px] h-[20px]'></div>
      </motion.div>
    </motion.div>
  )
}

export default SectionWrapper(About, "about")