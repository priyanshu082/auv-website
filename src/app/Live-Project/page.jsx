'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


const Page = () => {

    const videoRef = useRef(null)
    const heading = useRef(null)
    const content = useRef(null)
    const section1 = useRef(null)

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
            width: "90%",
            marginTop:"10vh"
        }, "section1")

        section1TL.to(heading.current, {
            scale: 1.05,
            x: "-3vw",
        }, "section1")

        section1TL.to(content.current, {
            scale: 1.05,
            x: "3vw",
        }, "section1")

    })

    return (
        <div className='bg-black'>

            <div className='pt-[40px] w-[90vw] mx-auto'>
                {/* heading and video */}
                <div ref={section1} className=''>
                    <div className='text-[6vw] w-[100%] text-white text-center font-poppins font-extralight my-[10vh]'>
                        <div ref={heading} className='tracking-widest mb-[2vh]'>
                            On-going project
                        </div>
                        <div ref={content} className='text-gray-400 text-[1.2vw] w-[70%] text-center mx-auto font-thin'>

                            If you think cameras are creepy enough, wait till you see the RealSense. Powered by stereo vision and Infrared tech, this can  not only capture but can recreate all your surroundings in 3D. Helps the vehicle navigate using SLAM and still look better than those stupid fishes.
                        </div>
                    </div>

                    <div ref={videoRef} className='w-[70%] h-[80%] mx-auto overflow-hidden rounded-xl' >
                        <video src='/pathDetector.mp4' loop muted autoPlay className='w-[100%]' />
                    </div>

                </div>

                {/* images */}
                <div>

                </div>
            </div>
        </div>
    )
}

export default Page