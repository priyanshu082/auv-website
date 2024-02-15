'use client'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import IntroLogo from '../Components/Feed/IntroLogo'


gsap.registerPlugin(ScrollTrigger);
export default function Home() {

  const parentVideoDiv = useRef(null)
  const main = useRef(null)
  const div2 =useRef(null);
  const div2Video =useRef(null);
  const div2Box =useRef(null);
  const div3 =useRef(null);
  const div3Video =useRef(null);
  const div3Box =useRef(null);
  const div4 =useRef(null);
  const div4Video =useRef(null);
  const div4Box =useRef(null);
  


  useEffect(() => {   


    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: main.current,
        start: '180px top',
        toggleActions: 'play reverse play reverse',
      }
    })

    const div2TL= gsap.timeline({
      scrollTrigger:{
        trigger:div2.current,
       // markers:true,
        start:"top top",
        bottom:"bottom top",
        scrub:2,
        toggleActions:'play reverse play reverse',
      }
    })

    div2TL.to(div2Video.current,{
      y:"-10vh",
      scrollTrigger:{
        // trigger:div2.current,
        scrub:10,
        start:"1500px top",
        bottom:"bottom 0px",
        //markers:true,
      }
    },"anim")

    div2TL.to(div2Box.current,{
      y:"-10vh",
      scrollTrigger:{
        // trigger:div2.current,
        scrub:10,
        start:"1500px top",
        bottom:"bottom 0px",
  
      }
    },"anim")

    // gsap.to(div3.current,{
    //   opacity:1,
    //   scrollTrigger:{
    //     trigger:div3.current,
    //     //markers:true,
    //     start:"top 100vh",
    //     bottom:"bottom top",
    //     toggleActions:'play reverse play reverse',
    //   }
    // })

    gsap.to(main.current,{
      background:"white",
      scrollTrigger:{
        trigger:div4.current,
        //markers:true,
        start:"top 400vh",
        bottom:"bottom top",
        toggleActions:'play reverse play reverse',
      }
    })


    const div4TL= gsap.timeline({
      scrollTrigger:{
        trigger:div4.current,
        //markers:true,
        start:"top 400vh",
        bottom:"+=200px top",
         scrub:5,
        toggleActions:'play reverse play reverse',
      }
    })

    div4TL.to(div4Video.current,{
      width:"95%",
      y:"-30px",
    },"div4")

    div4TL.to(div4Box.current.querySelector('h6') ,{
      scale:1.1,
      x:"-30px",
      y:"-30px",
    },"div4")

    div4TL.to(div4Box.current.querySelector('h2') ,{
      scale:1.1,
      x:"30px",
      y:"-30px",
    },"div4")

  }, []);

  return (
    <div ref={main} className='flex flex-col font-poppins bg-black overflow-x-hidden'>

       <IntroLogo/> 
    
      <div ref={parentVideoDiv} className='z-20 flex flex-col w-[100vw] h-[60vh] sm:h-[90vh] items-center justify-center mb-[5vh]'>
        <div className='flex flex-col sm:ml-[55%] font-poppins shadow-smallBox shadow-slate-800 sm:mr-[2vw] px-[10px] sm:pl-[7vw] rounded-3xl'>
         <h6 className='sm:text-[40px] text-[4vh] text-slate-100 font-bold '>
         Double Dive
          </h6>
          <p className='pt-[0.5vh] tracking-tighter text-[3.5vw] sm:text-[1.25vw] text-gray-400 sm:pr-[2vw]'>
          SEA 5.0 is our latest vehicle, still under development. Double hull design meticulously crafted to enhance drag reduction and optimize underwater dynamics. Designed and fabricated in-house by our team, SEA 5.0 represents the culmination of our expertise, dedication, and passion for pushing the boundaries of underwater exploration.
          </p>
          </div>
        </div> 
     

      <div ref={div2} className='z-20 flex flex-col sm:flex-row-reverse justify-center max-h-[700px] items-center w-[100vw] h-[80vh] px-[10px] sm:pl-[5vw] mb-[5vh]'>
  
        <video ref={div2Video} src='/video2.mp4' autoPlay loop muted className='sm:h-[60vh] sm:w-[60vw] w-[100vw] sm:scale-100 scale-125 sm:mr-[-8vw] sm:mb-[0px] mb-[15vh]'/>
     
        <div ref={div2Box} className='flex flex-col sm:mr-[2vw] sm:p-[10px] rounded-3xl'>
         <h6 className='sm:text-[40px] text-[4vh] text-slate-100 font-bold'>
         Freaking Fast
          </h6>
          <p className='pt-[0.5vh] text-gray-400 tracking-tighter sm:text-[1.25vw] text-[3.5vw]'>
          Powered by Nvidia’s top of the line boards –Jetson Xavier AGX. Customized cooling for better thermals in confined design. With 128 computing cores it can handle AI tasks on the go. Be it object detection, segmentation or if you just want to  be  pesky underwater Jetson have you got covered.
          </p>
          </div>
        </div> 

        <div className='text-[20vw] text-black text-center ease-in-out duration-1000 font-poppins font-extralight auv-text cursor-pointer'>
          AUV
        </div>


        <div ref={div4} className='z-20 flex flex-col justify-center items-center w-[90vw] mx-auto px-[10px] my-[25vh]'>
  
        <div ref={div4Box} className='flex flex-col mb-[6vh]'>
         <h6 className='text-[6vw] mx-auto text-gray-700 font-bold tracking-wider'>
         Sea like never before
          </h6>
          <h2 className=' text-gray-400 sm:text-[1.25vw] text-[3.5vw] w-[75%] text-center mx-auto'>
          Powered by Nvidia’s top of the line boards –Jetson Xavier AGX. Customized cooling for better thermals in confined design. With 128 computing cores it can handle AI tasks on the go. Be it object detection, segmentation or if you just want to  be  pesky underwater Jetson have you got covered.
          </h2>
          </div>
          
            <div ref={div4Video} className='w-[70%] mx-auto overflow-hidden rounded-2xl'>
          <video  src='/resberry.mp4' autoPlay loop muted className='w-[100%]'/>
            </div>
     
        </div> 

        <div className='text-[20vw] text-black text-center ease-in-out duration-1000 font-poppins font-extralight auv-text cursor-pointer'>
          AUV
        </div>


      <div ref={div3} className='z-20 px-[10px] flex flex-col sm:flex-row justify-center items-center w-[100vw] max-[700px] h-[80vh] sm:pl-[5vw] font-poppins mt-[15vh] mb-[15vh]'>
    
        <video ref={div3Video} src='/video.mp4' autoPlay loop muted className=' sm:h-[60vh] sm:w-[60vw] w-[100vw] sm:scale-100 scale-125 ml-[-8vw] sm:mb-[0px] mb-[20vh]'/>
        
        <div ref={div3Box} className=' flex flex-col sm:mr-[2vw] sm:p-[10px] rounded-3xl'>
         <h6 className='sm:text-[40px] text-[4vh] text-slate-100 font-bold'>
         Kraken
          </h6>
          <p className='pt-[0.5vh] text-gray-400 tracking-tighter sm:text-[1.25vw] text-[3.5vw]'>
          SEA5.0 is not your ordinary mermaid, it got 4 BlueRobotics T200 thruster each pulling in 24 amps. That is more than your house can pull. Specially crafted for underwater use, it uses  hydrocarbon bearing lubricated by water giving it a top speed of 5m/s.  No mermaid can play tag with this bad boy
          </p>
          </div>
        </div> 



      </div>

  )
}
