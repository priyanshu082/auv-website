'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, delay } from '../../utils/motion'
import Image from 'next/image'

// import linkedin from '../Footer/img/linkedin.svg'

const TeamCard = () => {
  return (
    <motion.div 
    initial='hidden'
    whileInView='show'
    viewport={{ once: true, minTop: 0.5, maxTop: 0.75 }} 
    variants={fadeIn('down','tween',0.05,1)}
    className="group flex-row w-[430px] lg:w-[400px] h-[250px] mt-[120px] mx-[auto]">
      
      <motion.div className='bg-white flex justify-center flex-col p-[20px] mr-[20px]'>
        
        <motion.div 
        initial='hidden'
        whileInView='show'
        exit='hidden'
        variants={delay(0.2,1)}
        className='flex flex-col text-black font-poppins'>
        <p className='text-[26px] font-bold'>M.Ammar</p>
        <p className='text-[16px]'>Chairperson</p>
        <p className='text-[13px] text-wrap mt-[5px]'>Computer Engg. 2024</p>
        <a href="" target="_blank" rel="noopener noreferrer" className='cursor-pointer mt-[10px]'>
        </a>
        </motion.div>
      </motion.div>
      
        <Image src="/Ammar.jpeg" alt="ammar" height={230} width={230} className='team-image' />

    </motion.div>

  )
}

export default TeamCard