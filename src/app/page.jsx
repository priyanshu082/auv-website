'use client'
import { useEffect, useRef } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import IntroLogo from '../Components/Feed/IntroLogo'



gsap.registerPlugin(ScrollTrigger);


export default function Home() {

  const parentVideoDiv = useRef(null)
  const main = useRef(null)
  const textDiv=useRef(null)


  useEffect(() => {   
      const tl = gsap.timeline({
      scrollTrigger: {
        trigger: main.current,
        start: '180px top',
        toggleActions: 'play reverse play reverse',
      }
    })

    
    //  tl.to(main.current, {
    //    backgroundColor:"black",
    //  })

    
    
//gsap for video
    // gsap.to(videoRef1.current,{
    //   scrollTrigger:{
    //     trigger:parentVideoDiv.current,
    //     markers:true,
    //     start:'top top',
    //     end:'+=500px top',
    //     toggleActions: 'play reverse play reverse',
    //   },
    //   opacity:1,
    //   // duration:0.5,
    // })

    // gsap.to(videoRef1.current,{
    //   y:"0px",
    //   // scale:1.2,
    //   scrollTrigger:{
    //     trigger:videoRef1.current,
    //      scrub:3,
    //     //markers:true,
    //     start:'top 0',
    //     end:'+=600px 0',
    //     toggleActions: 'play reverse play reverse',
    //      pin:true,
    //      pinSpacing:false,
    //   },
    // })

  }, []);

  return (
    <div ref={main} className='flex flex-col bg-black overflow-x-hidden'>
       <div className=''>
       <IntroLogo/> 
       </div>
      <div ref={parentVideoDiv} className='flex flex-col w-[100vw] h-[100vh] '>
       <div className='z-20 flex flex-col justify-center items-center h-[100%] w-[100%]'>
        <div ref={textDiv} className='text-gray-200 flex flex-col ml-[60%]'>
         <h6 className='text-[3vw] font-extrabold'>
         Double Dive
          </h6>
          <p className='pt-[0.5vh] font-medium tracking-widest text-gray-400 pr-[2vw]'>
          SEA 5.0 is our latest vehicle, still under development. Double hull design meticulously crafted to enhance drag reduction and optimize underwater dynamics. Designed and fabricated in-house by our team, SEA 5.0 represents the culmination of our expertise, dedication, and passion for pushing the boundaries of underwater exploration.
          </p>
          </div>
        </div> 
      </div> 

      <div className='z-20 flex flex-col md:flex-row-reverse justify-center items-center w-[100vw] pl-[4vh]'>
  
        <video src='/video2.mp4' autoPlay loop muted className='h-[60vh] w-[60vw] mr-[-8vw]'/>
     
        <div ref={textDiv} className=' text-gray-200 flex flex-col  '>
         <h6 className='text-[3vw] font-extrabold'>
         Freaking Fast
          </h6>
          <p className='pt-[0.5vh] font-medium tracking-widest text-gray-400 '>
          Powered by Nvidia’s top of the line boards –Jetson Xavier AGX. Customized cooling for better thermals in confined design. With 128 computing cores it can handle AI tasks on the go. Be it object detection, segmentation or if you just want to  be  pesky underwater Jetson have you got covered.
          </p>
          </div>
        </div> 

      <div className='z-20 flex flex-row mt-[10vh] justify-center items-center w-[100vw] pl-[4vh]'>
        <video src='/video.mp4' autoPlay loop muted className='h-[60vh] w-[60vw] '/>
        <div ref={textDiv} className=' text-gray-200 flex flex-col '>
         <h6 className='text-[3vw] font-extrabold'>
         Kraken
          </h6>
          <p className='pt-[0.5vh] font-medium tracking-widest text-gray-400 pr-[2vw]'>
          SEA5.0 is not your ordinary mermaid, it got 4 BlueRobotics T200 thruster each pulling in 24 amps. That is more than your house can pull. Specially crafted for underwater use, it uses  hydrocarbon bearing lubricated by water giving it a top speed of 5m/s.  No mermaid can play tag with this bad boy
          </p>
          </div>
        </div> 

      </div>

  )
}
