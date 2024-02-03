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
// import { ScrollToTarget } from 'locomotive-scroll's
import SecondVideo from '../Components/Feed/SecondVideo'
// import LocomotiveScroll from 'locomotive-scroll'




gsap.registerPlugin(ScrollTrigger);


export default function Home() {

  const parentVideoDiv = useRef(null)
  const main = useRef(null)
  const videoRef1 = useRef(null)
  const videoRef2 = useRef(null)
  const nav = useRef(null)
  const thirdDiv=useRef(null);
  

  useEffect(() => {

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


    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: main.current,
        start: '180px top',
        toggleActions: 'play reverse play reverse',
      }
    })

    tl.to(main.current, {
      backgroundColor: "black",
    })
    

    gsap.to(videoRef1.current,{
      scrollTrigger:{
        trigger:parentVideoDiv.current,
        scrub:false,
        //markers:true,
        start:'top 70%',
        end:'bottom 0%',
        toggleActions: 'play reverse play reverse',
      },
      opacity:1,
      delay:1,
    })
    gsap.to(videoRef1.current,{
      y:"30vh",
      width:"50vw",
      marginLeft:"0",
      //x:"50vw",
      // scale:1.5,
      // ease:"power1.inOut",
      scrollTrigger:{
        trigger:videoRef1.current,
         scrub:3,
        markers:true,
        start:'200px 0%',
        end:'+=1000px 0%',
        toggleActions: 'play reverse play reverse',
         pin:true,
         pinSpacing:false,
      },
    })


  }, []);



  return (
    <div ref={main} className='flex flex-col bg-white overflow-x-hidden'>

      <div className='pl-[40px]'>
        <Navbar />
      </div>

      <div className="pl-[40px] h-full">
      <About />
      </div>
      

      <div ref={parentVideoDiv} className='mt-[20vh] flex flex-col '>

        <video ref={videoRef1} src='/video.mp4' className='absolute opacity-0  w-[100vw]' loop autoPlay muted
        />

        {/* <video ref={videoRef2} src='/video2.mp4' className='opacity-0.5 w-[600px]' autoPlay loop muted /> */}
        <div data-scroll-container className=' z-20 flex flex-col '>
          <div className='mb-[7vh] text-white flex flex-col ml-[60vw]'>
         <h6 className='text-[20vw]'>
          AUV
          </h6>
          </div>


        <div className='mb-[7vh] text-white flex flex-col ml-[60vw]'>
        <h6 className='text-[20vw]'>
          AUV
         </h6>
        </div>

        <div className='mb-[7vh] text-white flex flex-col ml-[60vw]'>
        <h6 className='text-[20vw]'>
          AUV
         </h6>
        </div>

        <div className='mb-[7vh] text-white flex flex-col ml-[60vw]'>
        <h6 className='text-[20vw]'>
          AUV
         </h6>
        </div>
        
        </div>
      </div>
    
    </div>

  )
}
