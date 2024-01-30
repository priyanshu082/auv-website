'use client'

// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';


// // Register ScrollTrigger with GSAP
// gsap.registerPlugin(ScrollTrigger);

// const VideoComponent = () => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const video = videoRef.current;

//     // Create a timeline
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: video,
//         start: 'top 80%', // Adjust as needed
//         end: 'bottom 20%', // Adjust as needed
//         scrub: 1, // Smooth scrolling
//         toggleActions: 'play none reverse none', // Play the animation when entering the trigger area and reverse when leaving
//       },
//     });

//     // Add animations to the timeline
//     tl.to(video, { opacity: 1, y: 0, duration: 1 });

//     // Function to play the video
//     const playVideo = () => {
//       video.play();
//     };

//     // Attach the playVideo function to the click event
//     video.addEventListener('click', playVideo);

//     // Clean up event listener on component unmount
//     return () => {
//       video.removeEventListener('click', playVideo);
//     };
//   }, []);

//   return (
//     <div>
//       <video ref={videoRef} width="640" height="360" controls>
//         <source src='./img/video.mp4' type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// };

// export default VideoComponent;


import React, { useEffect, useRef } from 'react'
import SectionWrapper from '../../HOC/SectionWrapper'
import { motion } from 'framer-motion'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

// gsap.registerPlugin(ScrollTrigger)

const IntroVideo = () => {


    const videoRef = useRef(null);
    const div = useRef(null);

 useEffect(() => {

     gsap.to(videoRef.current, {
         scale:2,
         scrollTrigger: {
             trigger: videoRef.current,

             // start: 'top top',
              end: 'bottom top',
             toggleActions:"restart pause reverse pause",
             scrub: 0.1,
             // markers: true,
         },
     });
   }, []);

    return (
        <motion.div className='flex justify-center items-center'>
            <video
                ref={videoRef}
                src='/video.mp4'
                height={800}
                width={800}
                className='rounded-full'
                autoPlay
                loop
                muted
            />
        </motion.div>
    )
}

export default SectionWrapper(IntroVideo, "introvideo")
