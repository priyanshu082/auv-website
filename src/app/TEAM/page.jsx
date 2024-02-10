'use client'

import React,{useEffect} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TeamCard from '../../Components/TEAM/TeamCard'




gsap.registerPlugin(ScrollTrigger)



const page = () => {


  

  /*useEffect(()=>{

        gsap.to(page2.current,{
          scrollTrigger:{
            trigger:mainPage2.current,
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
        gsap.to(page2.current,{
          scrollTrigger:{
            trigger:page2.current,
            scrub:3,
           // markers:true,
            start:'top 0%',
            end:'1000px 0%',
            toggleActions: 'play reverse play reverse',
             pin:true,
             pinSpacing:false,
          },
        })
  },[])*/


  
  return (
    

    <div className=''>
      <TeamCard/>
    </div>

  )
}

export default page