'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { navBottom } from './data'
import Link from 'next/link'
import { slideDown } from '../../utils/motion'
import Image from 'next/image'

const Pop = ({toggle,setToggle}) => {

    const [toggleLink,setToggleLink]=useState(false)
    const [active ,setActive]=useState("HOME")

  return (
    <motion.div
    key={toggle ? 'visible' : 'hidden'}
    initial="hidden"
    animate="show" 
    variants={slideDown(0.1,0.5)}
    className={`z-[9999] ${toggle ? "flex md:hidden flex-col" : "hidden"} black-gradient p-[10px] z-[1000] absolute ml-[-110px] mt-[10px] border-[1px] bg-primary border-primary rounded-xl font-poppins font-semibold text-secondary shadow-[10px_18px_10px_-5px_rgba(0,0,50,0.2)]`}>
      <Link 
      onClick={()=>setActive("HOME")}
      href="/" 
      className="text-white">
         <Image src="/apple.svg" height={17} width={17}/>
      </Link>
        {navBottom.map((items,index)=>(
            <Link onClick={()=>{
              setToggle(!toggle);
              setActive(items.name)
              }} key={index} href={items.link} className={`${active===items.name ? "text-white" : "text-secondary"} mt-[10px] px-[20px]`}>
                {items.name}
            </Link>
        ))}
    </motion.div>
  )
}

export default Pop