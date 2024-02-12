'use client'

import React,{useEffect} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TeamCard from '../../Components/TEAM/TeamCard'




gsap.registerPlugin(ScrollTrigger)

const page = () => {

  return (
    <div className='bg-white w-[95%] mx-auto'>

    <div className='flex flex-col sm:flex-row flex-wrap mx-[10px] sm:mx-[25px] bg-white justify-between mt-[50px]'>
      <TeamCard/>
      <TeamCard/>
      <TeamCard/>
      <TeamCard/>
      <TeamCard/>
      <TeamCard/>
    </div>
    </div>

  )
}

export default page