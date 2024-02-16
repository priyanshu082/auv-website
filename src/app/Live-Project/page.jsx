'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


const Page = () => {

    const main = useRef(null)
    const videoRef = useRef(null)
    const heading = useRef(null)
    const content = useRef(null)
    const section1 = useRef(null)
    const div1 = useRef(null)
    const div2 = useRef(null)
    const image1 = useRef(null)
    const image2 = useRef(null)
    const image3 = useRef(null)
    const image4 = useRef(null)

    useEffect(() => {

        const section1TL = gsap.timeline({
            scrollTrigger: {
                trigger: section1.current,
                scrub: 4,
                toggleActions: 'play reverse play reverse',
                //markers:true,
                start: "top 100px",
                end: "40% top",
            }
        })

        section1TL.to(videoRef.current, {
            width: "100%",
            marginTop:"10vh"
        }, "section1")

        section1TL.to(heading.current, {
            x: "-30px",
        }, "section1")

        section1TL.to(content.current, {  
            x: "30px",
        }, "section1")

        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:div1.current, 
                //markers:true,  
                start:"top 100px",
                end:"bottom top",
                toggleActions:'play none none reverse',
              }
        })

      tl.to(main.current,{
        background:"white",
        duration:1,
      })

        tl.to(image1.current,{
            x:"2vw",
            duration:1,
            ease:"power1.inOut"
           },"img")
        tl.to(image2.current,{
            x:"-2vw",
            duration:1,
            ease:"power1.inOut"
           },"img")
        tl.to(image3.current,{
            x:"2vw",
            duration:1,
            ease:"power1.inOut"
           },"img")
        tl.to(image4.current,{
            x:"-2vw",
            duration:1,
            ease:"power1.inOut"
           },"img")

   

    })

    return (
        <div ref={main} className='bg-black'>

            <div className='pt-[40px] w-[90vw] mx-auto'>
                {/* heading and video */}
                <div ref={section1} className='w-[100%]'>
                    <div className='w-[100%] flex flex-col justify-center items-center font-poppins font-medium  mt-[70px] mb-[20px]'>
                        <div ref={heading} className='text-primary mb-[2vh] mx-auto text-center text-[6vw] '>
                            On-going project
                        </div>
                        <div ref={content} className='text-gray-400 text-[1.2vw] w-[70%] text-center mx-auto font-thin'>
                            If you think cameras are creepy enough, wait till you see the RealSense. Powered by stereo vision and Infrared tech, this can  not only capture but can recreate all your surroundings in 3D. Helps the vehicle navigate using SLAM and still look better than those stupid fishes.
                        </div>
                    </div>

                    <div ref={videoRef} className='w-[60%] h-[80%] mx-auto overflow-hidden rounded-xl' >
                        <video src='/Live_project/pathDetector.mp4' loop muted autoPlay className='w-[100%]' />
                    </div>

                </div>

                {/* images */}
             <div  className='flex flex-col py-[30px] '>

             <div ref={div1} className='w-[100%] flex flex-row justify-between mt-[70px] md:mt-[100px]'>
              <Image ref={image1} src="/Live_project/img1.png" height={600} width={600} className='rounded-2xl image1' />
              <Image ref={image2} src="/Live_project/img2.png" height={600} width={600} className='rounded-2xl image2 ' />
            </div>

            <div ref={div2} className='w-[100%] flex flex-row justify-between mt-[70px] md:mt-[100px]'>
              <Image ref={image3} src="/Live_project/img2.png" height={600} width={600} className='rounded-2xl image1' />
              <Image ref={image4} src="/Live_project/img4.png" height={600} width={600} className='rounded-2xl image2 ' />
            </div>

                </div>
            </div>
        </div>
    )
}

export default Page