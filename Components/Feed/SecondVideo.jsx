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
        const video = videoRef.current;
        let src = video.currentSrc || video.src;
    
        const once = (el, event, fn, opts) => {
          const onceFn = function (e) {
            el.removeEventListener(event, onceFn);
            fn.apply(this, arguments);
          };
          el.addEventListener(event, onceFn, opts);
          return onceFn;
        };
    
        // Use useEffect to mimic componentDidMount
        
         
    
          let tl = gsap.timeline({
            defaults: { duration: 1 },
            scrollTrigger: {
              trigger: main.current,
              start: "top 70%",
              //end: "bottom top",
              scrub: true,
              markers:true,
            
            }
          });
          
         tl.to(video,{
          
            scrollTrigger:{
                trigger:video,
                pin:true,
            }
         })

          once(video, "loadedmetadata", () => {
            tl.fromTo(
              video,
              { 
                currentTime: 2
              },
              {
                currentTime: 15
              }
            );
          });
    
          setTimeout(() => {
            if (window.fetch) {
              fetch(src)
                .then((response) => response.blob())
                .then((response) => {
                  var blobURL = URL.createObjectURL(response);
    
                  var t = video.currentTime;
                  once(document.documentElement, "touchstart", function (e) {
                    video.play();
                    video.pause();
                  });
    
                  video.setAttribute("src", blobURL);
                  video.currentTime = t + 0.01;
                });
            }
          }, 1000);
        // Empty dependency array to mimic componentDidMount
    
      
      }, []); // Empty dependency array to mimic componentDidMount


 /*useEffect(() => {

  gsap.to(videoRef.current, {
      scale:1.5,
      opacity:1,
      scrollTrigger: {
          trigger: videoRef.current,
          start: 'top 50%',
          end: '80% 60%',
          toggleActions: 'play reverse play reverse',
          markers: true,
           scrub:2,
      },
  })
   }, []);*/

    return (
        <div ref={main} className=' flex justify-center items-center'>
            <video
                ref={videoRef}
                src='/video2.mp4'
                className=' h-[800px] w-[800px]'
            />
        </div>
    )
}

export default SectionWrapper(IntroVideo, "introvideo")
