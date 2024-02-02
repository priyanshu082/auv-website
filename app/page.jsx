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
import { ScrollToTarget } from 'locomotive-scroll'
import SecondVideo from '../Components/Feed/SecondVideo'




gsap.registerPlugin(ScrollTrigger);


export default function Home() {

  const parentVideoDiv = useRef(null)
  const main = useRef(null)
  const videoRef1 = useRef(null)
  const videoRef2 = useRef(null)
  const nav = useRef(null)



  useEffect(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: main.current,
        start: '200px top',
        toggleActions: 'play reverse play reverse',

      }
    })

    tl.to(main.current, {
      backgroundColor: "white",
    })

    /*const tlVideoDiv = gsap.timeline({
      scrollTrigger: {
        trigger: parentVideoDiv.current,
        scrub: 1,
        start: "top 40%",
        end: "bottom top",
        toggleActions: 'play reverse play reverse',
        markers: true,
      }
    })

    tlVideoDiv.to(videoRef1.current, {
      // y:"30vh",
      scale: 1.3,
      opacity: 1,
      y: 200,
    })

    gsap.to(videoRef1.current, {
      scrollTrigger: {
        trigger: videoRef1.current,
        scrub: 3,
        markers: true,
        start: 'top 70%',
        end: '1000px 0%',
        toggleActions: 'play reverse play reverse',
        pin: true,
        pinSpacing: false,
      },
    })*/

    gsap.to(videoRef1.current,{
      scrollTrigger:{
        trigger:parentVideoDiv.current,
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
    gsap.to(videoRef1.current,{
      scrollTrigger:{
        trigger:videoRef1.current,
        scrub:3,
       // markers:true,
        start:'top 0%',
        end:'1000px 0%',
        toggleActions: 'play reverse play reverse',
         pin:true,
         pinSpacing:false,
      },
    })


  }, []);



  return (
    <div ref={main} className='flex flex-col bg-white h-full pl-[40px] overflow-hidden'>

      <div>
        <Navbar />
      </div>
      <About />
      

      <div ref={parentVideoDiv} className='mt-[200px] flex justify-center'>

        <video ref={videoRef1} src='/video.mp4' className='opacity-0.5 w-[600px] ' autoPlay loop muted
        />

        {/* <video ref={videoRef2} src='/video2.mp4' className='opacity-0.5 w-[600px]' autoPlay loop muted /> */}
      </div>
    
    </div>

  )
}
