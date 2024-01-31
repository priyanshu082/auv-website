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

   



// create the smooth scroller FIRST!


     gsap.to(videoRef.current, {
        //  ease:"power3.out",
         opacity:1,
         duration:0.2,
         scrollTrigger: {
             trigger: videoRef.current,
             start: 'top 50%',
             end: '80% 60%',
             toggleActions: 'play reverse play reverse',
             markers: true,
              onUpdate:(self)=>{
                 const progress=self.progress;
                 const newScale=`${1+progress*0.7}`;

                 gsap.set(videoRef.current ,{
                     scale:newScale,
                     // ease: "power3.out"
                    marginRight:"20px",
                 })
              }
         },
     })
   }, []);

    return (
        <motion.div ref={main} className='flex justify-center items-center'>
            <video
                ref={videoRef}
                src='/video.mp4'
                // height={800}
                // width={800}
                className='rounded-[10000px] opacity-0 h-[800px] w-[800px]'
                autoPlay
                loop
                muted
            />
        </motion.div>
    )
}

export default SectionWrapper(IntroVideo, "introvideo")
