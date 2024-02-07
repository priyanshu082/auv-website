'use client'

import React, { useEffect, useRef } from 'react'
import SectionWrapper from '../../HOC/SectionWrapper'
import { motion } from 'framer-motion'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

 
 gsap.registerPlugin(ScrollTrigger);

const IntroVideo = () => {

    const videoRef = useRef(null);
    const main = useRef(null);


    

 useEffect(() => {

  gsap.to(videoRef.current, {
      scale:1.5,
      opacity:1,
      scrollTrigger: {
          trigger: videoRef.current,
          start: 'top 50%',
          end: '80% 60%',
          toggleActions: 'play reverse play reverse',
          //markers: true,
          scrub:2,
      },
  })
   }, []);

    return (
        <div ref={main} className=' flex justify-center items-center'>
            <video
                ref={videoRef}
                src='/video.mp4'
                className='opacity-0 h-[800px] w-[800px]'
                autoPlay
                loop
                muted
            />
        </div>
    )
}

export default SectionWrapper(IntroVideo, "introvideo")
