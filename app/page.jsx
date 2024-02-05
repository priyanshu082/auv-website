'use client'
import { useEffect, useRef } from 'react'
import About from '../Components/Feed/About'
import Navbar from '../Components/Navbar/Navbar'
import IntroVideo from '../Components/Feed/IntroVideo'
import { motion } from 'framer-motion'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import IntroLogo from '../Components/Feed/IntroLogo'




gsap.registerPlugin(ScrollTrigger);


export default function Home() {

  const parentVideoDiv = useRef(null)
  const main = useRef(null)
  const videoRef1 = useRef(null)
  const videoRef2 = useRef(null)
  const nav = useRef(null)
  const movingDiv=useRef(null);
  

  useEffect(() => {


     function waste() {
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

    }

    //main div
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: main.current,
        start: '180px top',
        toggleActions: 'play reverse play reverse',
      }
    })

    //gsap for chnging the background color of page
   /* tl.to(main.current, {
      backgroundColor: "black",
    })*/

    
    
//gsap for video
    gsap.to(videoRef1.current,{
      scrollTrigger:{
        trigger:parentVideoDiv.current,
       // markers:true,
        start:'top 70%',
        end:'80% 60%',
        toggleActions: 'play reverse play reverse',
      },
      opacity:1,
      // duration:0.5,
    })

    gsap.to(videoRef1.current,{
      y:"10vh",
      width:"50vw",
      marginLeft:"0",
      scrollTrigger:{
        trigger:videoRef1.current,
         scrub:3,
        //markers:true,
        start:'100px 0',
        end:'+=800px 0%',
        toggleActions: 'play reverse play reverse',
         pin:true,
         pinSpacing:true,
      },
    })

  }, []);



  return (



    <div className='flex flex-col bg-black overflow-x-hidden'>
      <div className='pl-[40px]'>
        <Navbar />
      </div>
    
      <IntroLogo/>

      <div ref={parentVideoDiv} className='flex flex-col'>

        <video ref={videoRef1} src='/video.mp4' className='absolute opacity-0 w-[100vw]' loop autoPlay muted
        /> 

        {/* <video ref={videoRef2} src='/video2.mp4' className='opacity-0.5 w-[600px]' autoPlay loop muted /> */}
        <div className='z-20 flex flex-col justify-center items-center'>

   
        <div className='mt-[100vh]'>
        <div className='mb-[7vh] text-slate-300 flex flex-col ml-[90vh]'>
         <h6 className='text-[10vw] font-poppins '>
          AUV
          </h6>
          <p className='pt-[20px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis animi tempora quia cumque dicta expedita doloribus quas ullam aliquam sunt blanditiis facilis incidunt iste ipsam deserunt eaque, eos veritatis asperiores!
          </p>
          </div>

        <div className='mb-[7vh] text-slate-300 flex flex-col ml-[90vh]'>
         <h6 className='text-[10vw] font-poppins '>
          AUV
          </h6>
          <p className='pt-[20px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis animi tempora quia cumque dicta expedita doloribus quas ullam aliquam sunt blanditiis facilis incidunt iste ipsam deserunt eaque, eos veritatis asperiores!
          </p>
          </div>

        </div>


        </div>
      </div>

    </div>



  )
}
